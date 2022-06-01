import { Inject, Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import * as winston from 'winston';
import { LoggerModuleOptions } from './logger.module';
import { LOGGER_MODULE_OPTIONS } from './logger.constants';

@Injectable()
export class LoggerService implements NestLoggerService {
  private static logger: winston.Logger;

  constructor(
    @Inject(LOGGER_MODULE_OPTIONS) private loggerModuleOptions: LoggerModuleOptions
  ) {
    if (LoggerService.logger !== undefined) {
      return;
    }

    const logLevel = loggerModuleOptions.level || 'info';
    const logPath = loggerModuleOptions.path;
    const appName = loggerModuleOptions.appName || 'Ivy Backend';
    const colorize =
      loggerModuleOptions.colorize === undefined ? true : loggerModuleOptions.colorize;

    LoggerService.logger = winston.createLogger({
      level: logLevel,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss.SSS'
        }),
        winston.format.splat(),
        winston.format.json()
      ),
      defaultMeta: { service: appName, label: 'default' },
      exitOnError: false,
      handleExceptions: true,
      transports: [
        // File logger
        ...(logPath
          ? [
              new winston.transports.File({
                filename: logPath ? `${logPath}/ivy-backend.log` : undefined,
                silent: logLevel === 'silent'
              })
            ]
          : []),

        // Console logger
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format((info) => {
              info.level = info.level.toUpperCase();
              return info;
            })(),
            ...(colorize
              ? [
                  winston.format.colorize({
                    all: true
                  })
                ]
              : []),
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss.SSS'
            }),
            winston.format.printf((info) =>
              colorize
                ? `\x1b[36m[${info.service}]\x1b[0m ${info.timestamp}  ${info.level} \x1b[33m[${info.label}]\x1b[0m ${info.message}`
                : `[${info.service}] ${info.timestamp}  ${info.level} [${info.label}] ${info.message}`
            )
          ),
          silent: logLevel === 'silent'
        })
      ]
    });
  }

  verbose(message: any, ...optionalParams: any[]): any {
    LoggerService.logger.verbose(message, ...this.prepareParams(optionalParams));
  }

  debug(message: any, ...optionalParams: any[]): any {
    LoggerService.logger.debug(message, ...this.prepareParams(optionalParams));
  }

  info(message: any, ...optionalParams: any[]): any {
    LoggerService.logger.info(message, ...this.prepareParams(optionalParams));
  }

  log(message: any, ...optionalParams: any[]): any {
    LoggerService.logger.info(message, ...this.prepareParams(optionalParams));
  }

  warn(message: any, ...optionalParams: any[]): any {
    LoggerService.logger.warn(message, ...this.prepareParams(optionalParams));
  }

  error(message: any, ...optionalParams: any[]): any {
    LoggerService.logger.error(message, ...this.prepareParams(optionalParams));
  }

  private prepareParams(optionalParams: any[]): any {
    let label = 'default';
    if (optionalParams.length > 0) {
      const idx = optionalParams.length - 1;
      label = optionalParams[idx];
      optionalParams.splice(idx, 1);
    }
    return [...optionalParams, { label }];
  }
}
