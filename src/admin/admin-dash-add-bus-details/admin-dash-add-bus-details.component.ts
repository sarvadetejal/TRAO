import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-dash-add-bus-details',
  templateUrl: './admin-dash-add-bus-details.component.html',
  styleUrls: ['./admin-dash-add-bus-details.component.css'],
})
export class AdminDashAddBusDetailsComponent implements OnInit {
  AddBusForm: any;
  message!: string;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.AddBusForm = this.formBuilder.group({
      BusName: [''],
      BusNo: [''],
      BusSeats: [''],
      BusStatus: [''],
    });
  }
  AddBusDetails() {
    console.log(this.AddBusForm.value);
    this.adminService.AddBus(this.AddBusForm.value).subscribe((res) => {
      this.AddBusForm.reset();
      this.message = 'Bus Added Successfully....!';
      alert(this.message);
      this.router.navigate(['admindashboard']);
    });
  }
}
