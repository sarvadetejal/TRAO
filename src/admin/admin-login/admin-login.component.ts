import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {

  AdminLoginForm: any;

  model:any={};

  Status:boolean=true;
  message!:string;

  constructor(private adminService:AdminService,private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.AdminLoginForm = this.formBuilder.group({
      AdminId: [''],
      AdminPassword: [''],
    });
    sessionStorage.removeItem('AdminId');
    sessionStorage.clear();
  }
  LoginAdmin(){

    this.adminService.AdminLogin(this.AdminLoginForm.value).subscribe((data)=>{
      sessionStorage.setItem('AdminId',this.model.AdminId);
      this.adminService.subject.next(this.Status);
      this.AdminLoginForm.reset();
      this.message ='Admin Login Successfull';
      alert(this.message);
      this.router.navigate(['admindashboard']);
    },
    (error)=>{
      this.message='Admin Login Failed !!';
      alert(this.message);
      this.router.navigate(['adminLogin']);
    }
    )
  }
}
