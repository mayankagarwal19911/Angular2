import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
/** client **/
import { ClientComponent } from './client/client/client.component';

/** admin **/
import { RouterOutletComponent } from './admin/router-outlet/router-outlet.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent } from './admin/login/login.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { MenusComponent } from './admin/menus/menus.component';

export const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component : ClientComponent,
      children : [
        { path : '', component : HomeComponent },
      ]
    },
    { path: 'admin', component : RouterOutletComponent,
      children : [ 
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path : 'dashboard', component : AdminComponent,
          children : [
            { path : '' , component :  DashboardComponent },
            { path : 'menus' , component :  MenusComponent },
          ]
        },
        { path : 'login' , component :  LoginComponent },
        { path : 'register' , component :  RegisterComponent },
        { path : 'logout' , component : LogoutComponent }
       ]
    }
]

export const router = RouterModule.forRoot(routes);