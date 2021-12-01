import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  title = 'Login';
  UserLoginForm: any;
  message!: string;
  Status: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private LoginService: UserService,
    private titleService: Title
  ) {
    this.UserLoginForm = this.formBuilder.group({
      UserEmail: [''],
      UserPassword: [''],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    sessionStorage.removeItem('UserEmail');
    sessionStorage.clear();
  }
  LoginUser() {
    console.log(this.UserLoginForm.value);

    this.LoginService.Login(this.UserLoginForm.value).subscribe(
      (res) => {
        sessionStorage.setItem(
          'UserEmail',
          this.UserLoginForm.get('UserEmail').value
        );
        this.LoginService.subject.next(this.Status);
        let data:any=this.UserLoginForm.get('UserEmail').value;
        // this.router.navigate(
        //   ['./bkDetails/', this.UserLoginForm.get('UserEmail').value],
        //   {
        //     queryParams: { data: JSON.stringify(data) },
        //   }
        // );
        this.UserLoginForm.reset();
        let UserId = JSON.stringify(res);
         console.log('UserId: ' + JSON.stringify(res));
         console.log('UserId: ' + UserId);
        this.message = 'Login SuccessFull';
        alert(this.message);

        this.router.navigate(['home']);
      },
      (error) => {
        this.message = 'Login Failed...!!';
        alert(this.message);
        this.router.navigate(['login']);
      }
    );
  }
}
