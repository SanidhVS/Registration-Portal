import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationDetailService } from 'src/app/shared/registration-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {
  constructor(public service: RegistrationDetailService, private router: Router,private toastr: ToastrService) { }


  

  ngOnInit(): void {
    this.service.refreshList();
    
  }
  flag : number;
  
  onSubmit(form : NgForm){
    this.flag = 0;
    if(this.service.userNAME=='admin' && this.service.passWORD=='admin'){
      this.flag = 1;
      this.toastr.success("Welcome Admin","Registration Details")
      this.service.userNAME = '';
      this.service.passWORD = '';
      this.router.navigateByUrl('/registration-details');

    }
    else{
      for(let cred of this.service.list){
        if(this.service.userNAME==cred.userName && this.service.passWORD == cred.password){
          this.flag = cred.registrationId;
          this.service.loginID = cred.registrationId;
          this.toastr.success("Welcome "+cred.firstName ,"Registration Details")
          this.router.navigateByUrl('/user-home');

        }
      }
    }
    if(this.flag==0){
     this.toastr.warning("Invalid Username or password");
    }

  }
}
