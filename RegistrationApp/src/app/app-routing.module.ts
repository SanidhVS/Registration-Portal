import { NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { RegistrationDetailsComponent} from './registration-details/registration-details.component'
import { RegistrationDetailFormComponent} from './registration-details/registration-detail-form/registration-detail-form.component'
import { LoginComponent } from './registration-details/login/login.component';
import { LoginFormComponent } from './registration-details/login-form/login-form.component';
import { UserHomeComponent } from './registration-details/user-home/user-home.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: 'registration-details', component: RegistrationDetailsComponent,
    children: [
    {path: 'registration', component: RegistrationDetailFormComponent },
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'user-home', component: UserHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}