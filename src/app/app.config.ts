import { ApplicationConfig, provideZoneChangeDetection, isDevMode, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { routes } from './app.routes';
import { AuthService } from '@core/auth/auth.service';
import { ThemeService } from '@core/services/theme.service';

function initializeApp(authService: AuthService, themeService: ThemeService) {
  return async () => {
    await authService.initialize();
    // ThemeService constructor will auto-apply theme via effect
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService, themeService: ThemeService) =>
        initializeApp(authService, themeService),
      deps: [AuthService, ThemeService],
      multi: true
    }
  ]
};
