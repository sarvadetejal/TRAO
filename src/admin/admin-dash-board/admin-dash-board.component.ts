import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Schedule } from '../schedule';
@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css'],
})
export class AdminDashBoardComponent implements OnInit {
  ChooseComponent!: string;
  InpId!: number;
  admin?: string | null;


  constructor(private router: Router, private service: AdminService) {}

  ngOnInit(): void {

    this.admin = sessionStorage.getItem('AdminId');
    if (this.admin === null) {
      this.router.navigate(['Admin']);
    }
  }

  AddBus() {
    this.ChooseComponent = 'Add Bus';
  }
  UpdateBus() {
    this.ChooseComponent = 'Update Bus';
  }
  AddSchedule() {
    this.ChooseComponent = 'Add Schedule';
  }
  UpdateSchedule() {
    this.ChooseComponent = 'Update Schedule';
  }
  ShowSchedule() {
    this.ChooseComponent = 'Show Schedule';
  }
}
