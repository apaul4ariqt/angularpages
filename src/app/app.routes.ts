import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    { path: 'angularpages', component: NxWelcomeComponent, pathMatch: 'full'},
    { path: 'angularpages/products', loadComponent: () => import('@org/modules/products').then((c) => c.ProductsComponent) },
    { path: 'angularpages/orders', loadComponent: () => import('@org/modules/orders').then((c) => c.OrdersComponent) },
];
