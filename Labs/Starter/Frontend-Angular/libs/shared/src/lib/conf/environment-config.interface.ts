import { InjectionToken } from "@angular/core";

export interface EnvironmentConfig {
  environment: {
    baseUrlAPI: string;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
