import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../app/users/users.component';
import { LoginComponent } from '../app/login/login.component';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'user',
        component: UsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
