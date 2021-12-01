import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-bookings',
  templateUrl: './users-bookings.component.html',
  styleUrls: ['./users-bookings.component.css'],
})
export class UsersBookingsComponent implements OnInit {
  data: any[] = [];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.receivedUserEmail().subscribe((res) => {
      console.log('Recived Email = ' + res);
      this.data = [res];
      console.log(this.data);
    });
    console.log(JSON.stringify(this.data));
    this.service.GetAllBookingDetails().subscribe((res) => {
      console.log('Data got is : ' + res);
      this.data = res;
    });
  }
  PrintRecord(){
    // var divToPrint = document.getElementById('table-record');
    // newWin = window.open('');
    // newWin.document.write(divToPrint.outerHTML);
    // newWin.print();
    // newWin.close();
  }
}
