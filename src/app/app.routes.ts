import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { ParentComponent } from './Modules/parent/parent.component';
import { ChildComponent } from './Modules/child/child.component';
import { Http404Component } from './_Core/Components/http-404/http-404.component';
import { HttpErrorComponent } from './_Core/Components/http-error/http-error.component';

export const routes: Routes = [
  {
    path: '', title: 'School | Login',
    component: HttpErrorComponent,
  },
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

  {
    path: 'parent', title: 'School | Parent',
    component: ParentComponent,
  },
  {
    path: 'child', title: 'School | Child',
    component: ChildComponent,
  },
  {
    path: '**', title: 'School | Login',
    component: Http404Component,
  },
];
