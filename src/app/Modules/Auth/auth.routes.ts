import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { Http404Component } from "../../_Core/Components/http-404/http-404.component";
import { HttpErrorComponent } from "../../_Core/Components/http-error/http-error.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '', title: 'School | Login',
        component:HttpErrorComponent,
    },
    {
        path: 'login', title: 'School | Login',
        component: LoginComponent,
    },
    {
        path: 'register', title: 'School | Register',
        component: LoginComponent,
    },



    {
        path: '**', title: 'School | Login',
        component: Http404Component,
    },

]