import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersServiceService } from './services/users-service.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { FormsModule } from '@angular/forms';
import { ListSharedTableComponent } from './list-shared-table/list-shared-table.component';
import { ListSocietesComponent } from './list-societes/list-societes.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SharedModalComponent } from './shared-modal/shared-modal.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    SidenavComponent,
    AddModalComponent,
        ListSharedTableComponent,
        ListSocietesComponent,
        RegisterComponent,
        LoginComponent,
        SharedModalComponent,
        ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
