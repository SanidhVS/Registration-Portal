import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistrationDetail } from 'src/app/shared/registration-detail.model';
import { RegistrationDetailService } from 'src/app/shared/registration-detail.service';

@Component({
  selector: 'app-registration-detail-form',
  templateUrl: './registration-detail-form.component.html',
  styles: [
  ]
})
export class RegistrationDetailFormComponent implements OnInit
 {

  constructor(public service : RegistrationDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void { }
  onSubmit(form : NgForm)
  {
   if(this.service.formData.registrationId==0){
     this.insertRecord(form);
  
   }
   else{
     this.updateRecord(form);
   }
  }

  insertRecord(form : NgForm){
    this.service.postRegistrationDetail().subscribe(
      res =>
      {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted Successfully!!", "Registration Detail Register");
        
      },
      err => { console.log(err);}
    );
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
  resetForm(form : NgForm)
  {
    form.form.reset();
    this.service.formData = new RegistrationDetail();
  }

}
