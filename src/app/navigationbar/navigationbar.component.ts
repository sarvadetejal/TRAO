import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/users/user.service';
@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  message:boolean=false;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.service.receivedStatus().subscribe((data)=>{
      this.message=data;
    })
  }
  Logout(){
    sessionStorage.removeItem('UserEmail');
    sessionStorage.clear();
    this.service.subject.next(false);
    this.router.navigate(['login']);
  }
}
