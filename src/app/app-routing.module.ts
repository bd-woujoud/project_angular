import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListSocietesComponent } from './list-societes/list-societes.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ProfilComponent } from './profil/profil.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [


{
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
},
{
    path: 'profil',
    component: ProfilComponent
},
{
    path: 'users',
    component: ListUsersComponent
},


  {
    path: 'societes',
    component: ListSocietesComponent
},
  {
    path: 'navbar',
    component: SidenavComponent
},

{
  path: '**',
  redirectTo: ''
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
