import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { TECHNIQUE_REPOSITORY } from './core/repositories/technique.repository';
import { StaticTechniqueRepository } from './core/repositories/static-technique.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    { provide: TECHNIQUE_REPOSITORY, useClass: StaticTechniqueRepository },
  ],
};
