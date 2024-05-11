import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    { path: '', component: NxWelcomeComponent, pathMatch: 'full'},
    { path: 'products', loadComponent: () => import('@org/modules/products').then((c) => c.ProductsComponent) },
    { path: 'orders', loadComponent: () => import('@org/modules/orders').then((c) => c.OrdersComponent) },
];
