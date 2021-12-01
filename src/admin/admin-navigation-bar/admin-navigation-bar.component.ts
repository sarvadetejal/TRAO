import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navigation-bar',
  templateUrl: './admin-navigation-bar.component.html',
  styleUrls: ['./admin-navigation-bar.component.css'],
})
export class AdminNavigationBarComponent implements OnInit {
  message: boolean = false;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.receivedStatus().subscribe((data) => {
      this.message = data;
    });
  }
  Logout() {
    sessionStorage.removeItem('AdminId');
    sessionStorage.clear();
    this.adminService.subject.next(false);
    this.router.navigate(['adminLogin']);
  }
}
