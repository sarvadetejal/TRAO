import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { BusDetails } from '../bus-details';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-dash-update-bus-details',
  templateUrl: './admin-dash-update-bus-details.component.html',
  styleUrls: ['./admin-dash-update-bus-details.component.css'],
})
export class AdminDashUpdateBusDetailsComponent implements OnInit {
  UpdateBusForm: any;
  busDetails: BusDetails[] = [];
  constructor(private service: AdminService,private formBuilder:FormBuilder) {}
  message!:any;
  ngOnInit(): void {
    this.UpdateBusForm = this.formBuilder.group({
      BusId:[],
      BusName: [''],
      BusNo: [''],
      BusSeats: [''],
      BusStatus: [''],
    });
    this.service.GetBus().subscribe((data) => {
      this.busDetails = data;
      console.log(this.busDetails);
    });
  }
  showDataOnID() {

  }
  UpdateBus() {
     console.log('Form Data ' + JSON.stringify(this.UpdateBusForm.value));
     console.log('BusId = ' + JSON.stringify(this.UpdateBusForm.get('BusId').value));
     this.service
       .GetBusById(JSON.stringify(this.UpdateBusForm.get('BusId').value))
       .subscribe((res) => {
         console.log(res);
       });
       console.log(this.UpdateBusForm.get('BusId').value);
       this.service.UpdateBusDetails(this.UpdateBusForm.get('BusId').value,this.UpdateBusForm.value).subscribe((res)=>{
         console.log(res);
        this.message="Updated Bus Details Successfully";
        alert(this.message);
       });
  }
}
