import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationDetail } from 'src/app/shared/registration-detail.model';
import { RegistrationDetailService } from 'src/app/shared/registration-detail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styles: [
  ]
})
export class UserHomeComponent implements OnInit {
  id : number
  currentUser: RegistrationDetail

  constructor(public service: RegistrationDetailService, private router: Router, private toastr : ToastrService ) { }

  ngOnInit(): void {
    // this.service.refreshList();
  }
  
  
  generateUserId(){
    
    for(let value of this.service.list){
      // console.log("logid", this.service.loginID, "regId", value.registrationId);
      if(this.service.loginID == value.registrationId){
        // console.log("val",value);
        this.currentUser = value;
    }
    // console.log(value);
  }
}
  populateForm(selectedRecord : RegistrationDetail){
    this.service.formData = Object.assign({},selectedRecord);

  }


  resetForm(form : NgForm)
  {
    form.form.reset();
    this.service.formData = new RegistrationDetail();
  }

  updateRecord(form : NgForm){  
    this.service.putRegistrationDetail().subscribe(
    res =>
    {
      this.resetForm(form);
      this.service.refreshList();
       this.toastr.info("Updated Successfully!!", "Registration Detail Register");
      
    },
    err => { console.log(err);}
  );
}
  onSubmit(form : NgForm)
  {
    this.updateRecord(form)
  }
  logOut(){
    this.router.navigateByUrl('/');
  }
}
