import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  title = 'Register';
  UserForm: any;
  message!: string;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private RegisterService: UserService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.UserForm = this.formbuilder.group({
      UserName: [''],
      UserEmail: [''],
      UserPassword: [''],
      UserPhone: [],
    });
  }
  RegisterUser() {
    this.RegisterService.Register(this.UserForm.value).subscribe(
      (res) => {
        this.UserForm.reset();
        this.message = 'Registered Successfully';
        alert(this.message);
        this.router.navigate(['login']);
      },
      (error) => {
        this.message = 'User Already Exists';
        alert(this.message);
      }
    );
  }
  CancelAct() {
    this.router.navigateByUrl('login');
  }
}
