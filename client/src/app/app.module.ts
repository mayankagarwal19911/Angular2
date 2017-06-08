import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from './app-router';

import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ClientComponent } from './client/client/client.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent } from './admin/login/login.component';
import { RouterOutletComponent } from './admin/router-outlet/router-outlet.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { MenusComponent } from './admin/menus/menus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    AdminComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    RouterOutletComponent,
    LogoutComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
