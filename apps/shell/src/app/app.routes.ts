import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('home', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'welcometoNx',
    component: NxWelcomeComponent,
  },
];
