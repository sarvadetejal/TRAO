import { Component, OnInit,Input} from '@angular/core';
import { BusDetails } from '../bus-details';
import { AdminService } from '../admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Schedule } from '../schedule';
import { scheduled } from 'rxjs';
@Component({
  selector: 'app-admin-dash-update-schedule',
  templateUrl: './admin-dash-update-schedule.component.html',
  styleUrls: ['./admin-dash-update-schedule.component.css'],
})
export class AdminDashUpdateScheduleComponent implements OnInit {
  @Input('ScheduleId') upScheduleId!:number;
  InpId!: number;

  busDetails: BusDetails[] = [];
  scheduleDetails: Schedule[] = [];
  message!: string;

  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}
  UpdateScheduleForm = new FormGroup({
    ScheduleId: new FormControl(''),
    SourceLoc: new FormControl(''),
    DestinationLoc: new FormControl(''),
    BusId: new FormControl(''),
    ScheduleDate: new FormControl(''),
    DepartureTime: new FormControl(''),
    ArrivalTime: new FormControl(''),
    Fare: new FormControl(''),
  });
  ngOnInit(): void {
    this.adminService.GetBus().subscribe((data) => {
      this.busDetails = data;
      console.log(this.busDetails);
    });
    this.adminService.GetSchedule().subscribe((data) => {
      this.scheduleDetails = data;

      console.log(this.scheduleDetails);
    });
    this.UpdateScheduleForm = new FormGroup({
      ScheduleId: new FormControl(''),
      SourceLoc: new FormControl(''),
      DestinationLoc: new FormControl(''),
      BusId: new FormControl(''),
      ScheduleDate: new FormControl(''),
      DepartureTime: new FormControl(''),
      ArrivalTime: new FormControl(''),
      Fare: new FormControl(''),
    });
  }
  showDataOnID() {
    console.log('Form Data ' + this.UpdateScheduleForm.root);
    this.adminService.GetScheduleByID(this.upScheduleId).subscribe((res) => {
      console.log(res);
      this.UpdateScheduleForm = new FormGroup({
        ScheduleId: new FormControl(res['scheduleId']),
        SourceLoc: new FormControl(res['sourceLoc']),
        DestinationLoc: new FormControl(res['destinationLoc']),
        BusId: new FormControl(res['busId']),
        ScheduleDate: new FormControl(res['scheduleDate']),
        DepartureTime: new FormControl(res['departureTime']),
        ArrivalTime: new FormControl(res['arrivalTime']),
        Fare: new FormControl(res['fare']),
      });
    });
  }
  UpdateSchedule() {
    let sd:any=this.upScheduleId;
    this.adminService
      .UpdateSchedule(sd, this.UpdateScheduleForm.value)
      .subscribe((res) => {
        console.log(res);
        this.message="Schedule Update SuccessFully"
        alert(this.message);
      },
      (error)=>{
        this.message="Update Failed";
        alert(this.message);
      }
      );
  }
}
