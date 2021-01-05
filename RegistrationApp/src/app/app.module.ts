import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationDetailFormComponent } from './registration-details/registration-detail-form/registration-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './registration-details/login/login.component';
import { LoginFormComponent } from './registration-details/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './registration-details/user-home/user-home.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationDetailsComponent,
    RegistrationDetailFormComponent,
    LoginComponent,
    LoginFormComponent,
    UserHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'registration-details', component: RegistrationDetailsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
