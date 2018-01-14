import * as rg4js from 'raygun4js';
import { ErrorHandler } from '@angular/core';
const VERSION_NUMBER = '1.0.0.0';
rg4js('apiKey', 'FehB7YwfCf/F+KrFCZdJSg==');
rg4js('setVersion', VERSION_NUMBER);
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);
rg4js('setUser', {
  identifier: 'roy_agasthyan_unique_id',
  isAnonymous: false,
  email: 'royagasthyan@gmail.com',
  firstName: 'Roy',
  fullName: 'Roy Agasthyan'
});
export class RaygunErrorHandler implements ErrorHandler {
  handleError(e: any) {
    rg4js('send', {
      error: e,
    });
  }
}