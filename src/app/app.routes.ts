import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';

export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./Modules/Auth/auth.routes')
      .then(r => r.AUTH_ROUTES),
    // canActivate: [AuthGuard]
  },

  {
    path: 'home', title: 'School | Home',
    component: HomeComponent,
  },

];
