import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Type,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
  getSchemaPath,
  PartialType
} from '@nestjs/swagger';
import { FilesUtil, RequestUtil, StringUtil } from '../../utils';
import { FILE_PROPS_KEY, FileDto, FileFilter, FileProps } from '../../storage';
import { ErrorResponse, FilterOperator, QueryRequest, QueryResponse } from '../dto';
import { ResourceService } from '../services';
import { Resource, ResourceConfig } from '../decorators';
import { ResourcePolicy, ResourcePolicyInterceptor } from '../policy';

function extractFileProps<T>(classRef: Type<T>): Record<string, FileProps> {
  const types = {};
  const metadata = classRef['_OPENAPI_METADATA_FACTORY']?.();
  for (const fileName of Object.keys(metadata || {})) {
    const fileProps = Reflect.getMetadata(FILE_PROPS_KEY, classRef.prototype);
    if (fileProps && fileProps[fileName]) {
      types[fileName] = fileProps[fileName];
    }
  }
  return types;
}

function FilesDtoType<T>(classRef: Type<T>): any {
  abstract class FilesDtoClass {
    protected constructor() {}
  }

  const filePropsMap = extractFileProps(classRef);
  for (const [name, value] of Object.entries(filePropsMap)) {
    Object.defineProperty(FilesDtoClass, name, {});
    ApiProperty(
      !value.isArray
        ? {
            type: 'string',
            format: 'binary',
            required: false
          }
        : {
            type: 'array',
            required: false,
            items: {
              type: 'string',
              format: 'binary'
            }
          }
    )(FilesDtoClass.prototype, name);
  }

  return FilesDtoClass;
}

function OperatorInputType<T>(classRef: Type<T>): any {
  abstract class OperatorValueClass {
    protected constructor() {}
  }

  const metadata = classRef['_OPENAPI_METADATA_FACTORY']?.();
  for (const key of Object.keys(metadata || {})) {
    Object.defineProperty(OperatorValueClass, key, {});
    let type = metadata[key].type?.();
    type = Array.isArray(type) && type.length > 0 ? type[0] : type;
    if (type?.name === 'File') {
      ApiProperty({ type: () => FileFilter, required: false })(OperatorValueClass.prototype, key);
    } else if (!!type?._OPENAPI_METADATA_FACTORY) {
      ApiProperty({ type: () => type._OPENAPI_QUERY_FILTER_FACTORY?.() })(OperatorValueClass.prototype, key);
    } else if (key === '_id' || key === 'id') {
      ApiProperty({ type: () => FilterOperator, required: false, name: 'id' })(
        OperatorValueClass.prototype,
        key
      );
    } else {
      ApiProperty({ type: () => FilterOperator, required: false })(OperatorValueClass.prototype, key);
    }
  }

  return OperatorValueClass;
}

export function ResourceController<T extends Type<unknown>, C extends Type<unknown>, U extends Type<unknown>>(
  resourceRef: T,
  createDtoRef: C,
  updateDtoRef: U,
  config?: ResourceConfig
): any {
  const pluralName = StringUtil.pluralize(resourceRef.name);

  const updateDtoProxy = {
    [updateDtoRef.name]: updateDtoRef
  };

  const filesDtoProxy = {
    [`${pluralName}Files`]: class extends PartialType(FilesDtoType(resourceRef)) {}
  };
  const filesDto = filesDtoProxy[`${pluralName}Files`];
  const filePropsMap = extractFileProps(resourceRef);
  const fileTypesMulterArray = Object.entries(filePropsMap).map(([name, value]) => ({
    name,
    maxCount: !value.isArray ? 1 : undefined
  }));
  const filesResponseProperties = Object.entries(filePropsMap)
    .map(([key, val]) => ({
      key,
      value: !val.isArray
        ? { $ref: getSchemaPath(FileDto) }
        : {
            type: 'array',
            items: { $ref: getSchemaPath(FileDto) }
          }
    }))
    .reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {});

  const queryFilterProxy = {
    [`${pluralName}Filter`]: class extends PartialType(OperatorInputType(resourceRef)) {}
  };
  const queryFilter = queryFilterProxy[`${pluralName}Filter`];

  const field = ApiProperty({
    type: () => queryFilter,
    required: false
  });

  Object.defineProperty(queryFilter, '_and', {});
  field(queryFilter.prototype, '_and');

  Object.defineProperty(queryFilter, '_or', {});
  field(queryFilter.prototype, '_or');

  Object.defineProperty(queryFilter, '_nor', {});
  field(queryFilter.prototype, '_nor');

  resourceRef['_OPENAPI_QUERY_FILTER_FACTORY'] = () => queryFilter;

  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    type: ErrorResponse
  })
  @ApiExtraModels(QueryResponse, QueryRequest, resourceRef, queryFilter)
  @ApiTags(pluralName.toLowerCase())
  @Resource(config)
  abstract class ResourceController {
    protected constructor(
      protected service: ResourceService<T>,
      protected policy?: ResourcePolicy<any, any>
    ) {
      if (policy) {
        UseInterceptors(new ResourcePolicyInterceptor(policy))(ResourceController);
      }
    }

    @ApiOkResponse({ type: () => resourceRef })
    @ApiNotFoundResponse({
      description: `${resourceRef.name} not found`,
      type: ErrorResponse
    })
    @HttpCode(200)
    @Get('/:id')
    find(@Param('id') id: string): Promise<T> {
      return this.service.find(id);
    }

    @ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(QueryResponse) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(resourceRef) }
              }
            }
          }
        ]
      }
    })
    @ApiBody({
      schema: {
        allOf: [
          { $ref: getSchemaPath(QueryRequest) },
          {
            properties: {
              filter: {
                $ref: getSchemaPath(queryFilter)
              }
            }
          }
        ]
      }
    })
    @ApiBadRequestResponse({ description: 'Bad request', type: ErrorResponse })
    @HttpCode(200)
    @Post('/query')
    query(@Body() queryDto: QueryRequest<T>): Promise<QueryResponse<T>> {
      const { filter, ...options } = queryDto;
      const query = RequestUtil.transformFilter(filter);
      return this.service.query({
        filter: query,
        ...RequestUtil.restrictQueryLimit(options)
      });
    }

    @ApiBody({ type: createDtoRef })
    @ApiCreatedResponse({ type: () => resourceRef, status: 201 })
    @ApiBadRequestResponse({ description: 'Bad request', type: ErrorResponse })
    @HttpCode(201)
    @Post()
    async create(@Body() createDto: C): Promise<T> {
      const instance = await RequestUtil.deserializeAndValidate(createDtoRef, createDto);
      return this.service.create(instance);
    }

    @ApiBody({ type: updateDtoProxy[updateDtoRef.name] })
    @ApiOkResponse({ type: () => resourceRef })
    @ApiBadRequestResponse({ description: 'Bad request', type: ErrorResponse })
    @HttpCode(200)
    @Put('/:id')
    async update(@Param('id') id: string, @Body() updateDto: U): Promise<T> {
      const instance = await RequestUtil.deserializeAndValidate(updateDtoRef, updateDto);
      return this.service.update(id, instance);
    }

    @ApiOkResponse({ type: () => resourceRef })
    @ApiNotFoundResponse({
      description: `${resourceRef.name} not found`,
      type: ErrorResponse
    })
    @HttpCode(200)
    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<T> {
      return this.service.delete(id);
    }

    @ApiOkResponse({
      schema: {
        properties: filesResponseProperties
      }
    })
    @ApiBody({
      description: 'Files binary content',
      type: filesDto
    })
    @ApiConsumes('multipart/form-data')
    @ApiNotFoundResponse({
      description: `${resourceRef.name} not found`,
      type: ErrorResponse
    })
    @ApiBadRequestResponse({ description: 'Bad request', type: ErrorResponse })
    @UseInterceptors(FileFieldsInterceptor(fileTypesMulterArray))
    @HttpCode(201)
    @Post('/:id/files')
    async upload(@Param('id') id: string, @UploadedFiles() files: Record<string, Express.Multer.File[]>) {
      try {
        const updateDto = FilesUtil.createFilesUpdateDto(files, filePropsMap);
        const instance = await RequestUtil.deserializeAndValidate(updateDtoRef, updateDto);
        const updated = await this.service.update(id, instance, true);
        return FilesUtil.createFilesResponseDto(files, updated);
      } catch (e) {
        throw e;
      } finally {
        await FilesUtil.removeTemporaryFiles(files);
      }
    }
  }

  if (fileTypesMulterArray.length === 0) {
    const descriptor = Object.getOwnPropertyDescriptor(ResourceController.prototype, 'upload');
    Reflect.deleteMetadata('path', descriptor.value);
  }

  return ResourceController;
}
