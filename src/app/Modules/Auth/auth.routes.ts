import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login', title: 'School | Login',
        component: LoginComponent,
    },
]