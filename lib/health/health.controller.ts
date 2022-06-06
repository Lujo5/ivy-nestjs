import { Controller, Get, Inject } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { HealthService } from './health.service';
import { HealthDto } from './health.dto';
import { HealthModuleOptions } from './health.module';
import { HEALTH_MODULE_OPTIONS } from './health.constants';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    @Inject(HEALTH_MODULE_OPTIONS) private healthModuleOptions: HealthModuleOptions,
    private configService: ConfigService,
    private healthService: HealthService
  ) {
    const route = healthModuleOptions.route ?? configService.get('health.route');
    if (route) {
      Reflect.defineMetadata('path', route, HealthController);
    }
  }

  @HealthCheck()
  @Get()
  async health(): Promise<HealthDto> {
    return (await this.healthService.allCheck()) as any;
  }
}
