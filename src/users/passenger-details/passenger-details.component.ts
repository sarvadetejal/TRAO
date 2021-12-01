import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { PassengerDetails } from '../passenger-details';
@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css'],
})
export class PassengerDetailsComponent implements OnInit {
  @Input('rowseatsList') rowseatsList!: Array<object>;
  @Input('total1') total1!: number;
  PassengerForm!: any;
  message:any;

  data: any;
  constructor(private formBuilder: FormBuilder, private router: Router,private dialog:MatDialog,private service:UserService) {}
  openDialog(template: TemplateRef<any>) {
    this.dialog.open(template);
  }
  ngOnInit(): void {
    this.PassengerForm = this.formBuilder.group({
      PassengerName:[''],
     Age: [],
     Gender: [''],
      PassengerEmail: [''],
      PassengerPhone: [],
      SeatId:['']
    });
    this.data = JSON.stringify(this.rowseatsList);
    // console.log("Data Length = "+(this.data));
  }

  MakePayment() {
    console.log(this.PassengerForm.value);
    this.service.PassDetails(this.PassengerForm.value)
      .subscribe((res) => {
        this.PassengerForm.reset();
        this.message = 'Passenger details added';
        alert(this.message);
      });
  }
}
