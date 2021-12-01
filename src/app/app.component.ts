import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AdminService } from 'src/admin/admin.service';
import { UserService } from 'src/users/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Travel On';
  ControllerName!: string;

  constructor(private titleService: Title, private meta: Meta,private adminService:AdminService,private userService:UserService) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    if(this.userService.Usercontroller != 'User'){
      this.ControllerName = this.adminService.Admincontroller;
    }
    else{
      this.ControllerName = this.userService.Usercontroller;
    }
  }
}
