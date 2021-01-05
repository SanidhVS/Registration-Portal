import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationDetail } from '../shared/registration-detail.model';
import { RegistrationDetailService } from '../shared/registration-detail.service';
import { RegistrationDetailFormComponent } from './registration-detail-form/registration-detail-form.component';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styles: [
  ]
})
export class RegistrationDetailsComponent implements OnInit
 {
   isShow = false;

  constructor(public service: RegistrationDetailService,
    private toastr : ToastrService ,
    private router : Router) { }

  ngOnInit(): void
   {
    this.service.refreshList();
  }
  displayList(){
    this.isShow = true;
  }
  populateForm(selectedRecord : RegistrationDetail){
    this.service.formData = Object.assign({},selectedRecord);

  }
  onDelete(id : number){
    if(confirm('Are you sure to delete the record?'))
    {
     this.service.deleteRegistrationDetail(id)
     .subscribe(
     res=>
     {
      this.service.refreshList();
      this.toastr.error("Deleted Successfully","Registration Detail portal");
     },
     err=>{console.log(err)}
    )
   }
  }
  logOut(){
    this.router.navigateByUrl('/');
  }

}
