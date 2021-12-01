import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusDetails } from 'src/admin/bus-details';
import { Seat } from 'src/Model/Seat.model';
@Component({
  selector: 'app-user-seating',
  templateUrl: './user-seating.component.html',
  styleUrls: ['./user-seating.component.css'],
})
export class UserSeatingComponent implements OnInit {
  @Input('fare') fare!: number;
  @Input('bus') bus!: BusDetails;
  rowseatsList1: Array<object> = [];
  seat!: Object;
  total = 0;
  check!: boolean;
  Showseats: Array<object> = [];
  constructor(public dialog: MatDialog) {}

  openDialog(template: TemplateRef<any>) {
    this.dialog.open(template);
  }

  ngOnInit(): void {}
  Seat(seatid: any) {
    this.seat = {
      Seatno: seatid,
      fare: this.fare,
    };
    // let id = document.getElementById(seatid).;
    // console.log(id);
    //  console.log('SEATS ID & FARE Row1' + JSON.stringify(this.rowseatsList1));
    this.rowseatsList1 = this.rowseatsList1.filter(
      (el, i, a) => i === a.indexOf(el)
    );
  }

  fareTotal(fare: number) {
    this.total += fare;
    this.rowseatsList1 = this.rowseatsList1.filter(
      (item) => item !== this.seat
    );
    this.rowseatsList1.push(this.seat);
  }
  fareDeduct(fare: number) {
    this.total -= fare;
    // this.rowseatsList1.filter((el, i, a) => i === a.indexOf(el));
    // this.rowseatsList1.shift();
    // const index: number = this.rowseatsList1.indexOf(this.seat);
    // this.rowseatsList1.splice(index + 1, 1);
    this.rowseatsList1 = this.rowseatsList1.filter(
      (item) => item !== this.seat
    );
  }
  onChecked(e: any) {
    if (e) {
      this.fareTotal(this.fare);
      console.log('SEATS ID & FARE Row1' + JSON.stringify(this.rowseatsList1));
      console.log('the value of checkbox' + e.target.value);
      console.log(this.total);
      console.log('Bus Data = ' + JSON.parse(this.bus.busNo));

    } else {
      this.fareDeduct(this.fare);
      console.log('SEATS ID & FARE Row1' + JSON.stringify(this.rowseatsList1));
      console.log(this.total);
    }
  }
}
