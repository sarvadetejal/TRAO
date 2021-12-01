import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BusDetails } from '../bus-details';
@Component({
  selector: 'app-admin-dash-add-schedule',
  templateUrl: './admin-dash-add-schedule.component.html',
  styleUrls: ['./admin-dash-add-schedule.component.css'],
})
export class AdminDashAddScheduleComponent implements OnInit {
  AddScheduleForm: any;
  BusIdVal!: number;
  busDetails: BusDetails[] = [];
  message!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService.GetBus().subscribe((data) => {
      this.busDetails = data;
      console.log(this.busDetails);
    });
    this.AddScheduleForm = this.formBuilder.group({
      SourceLoc: [''],
      DestinationLoc: [''],
      BusId: [],
      ScheduleDate: [],
      DepartureTime: [],
      ArrivalTime: [],
      Fare: [],
    });
  }
  AddSchedule() {
    console.log(this.AddScheduleForm.value);
    this.adminService
      .AddSchedule(this.AddScheduleForm.value)
      .subscribe((res) => {
        this.message = 'Added Schedule Successfully....!';
        alert(this.message);
      });
  }
}
