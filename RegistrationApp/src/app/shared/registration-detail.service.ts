import { Injectable } from '@angular/core';
import { RegistrationDetail } from './registration-detail.model';
import {HttpClient} from '@angular/common/http';
import { LoginFormComponent } from '../registration-details/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDetailService 
{

  constructor(private http:HttpClient) { }

  
  readonly baseURL = 'http://localhost:50663/api/RegistrationDetail'
  formData : RegistrationDetail = new RegistrationDetail();
  list : RegistrationDetail[];
  userNAME : string;
  passWORD : string;
  loginID : number;

  
  postRegistrationDetail()
  {
   return this.http.post(this.baseURL,this.formData);
  }


  putRegistrationDetail()
  {
   return this.http.put(`${this.baseURL}/${this.formData.registrationId}`,this.formData);
  }
 
  deleteRegistrationDetail(id: Number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList()
  {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=> this.list = res as RegistrationDetail[]);
  }
}
