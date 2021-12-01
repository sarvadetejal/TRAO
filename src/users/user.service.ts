import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, scheduled, Subject } from 'rxjs';
import { Users } from './users';
import { Schedule } from 'src/admin/schedule';
import { BookingDetails } from './booking-details';
import { PassengerDetails } from './passenger-details';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public subject = new Subject<boolean>();
  public UserEmail = new Subject<string>();

  Url: string;
  header: any;
  Usercontroller: string = 'User';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private service: HttpClient) {
    this.Url = `http://localhost:25209/${this.Usercontroller}`;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  receivedStatus(): Observable<boolean> {
    return this.subject.asObservable();
  }
  receivedUserEmail(): Observable<string> {
    return this.UserEmail.asObservable();
  }

  Login(model: any) {
    return this.service.post<any>(
      this.Url + '/userLogin',
      JSON.stringify(model),
      this.httpOptions
    );
  }

  Register(users: Users) {
    return this.service.post<Users[]>(this.Url, users, this.httpOptions);
  }

  GetAllBusList(schedule: Schedule) {
    return this.service.post<any>(
      this.Url + '/buslist',
      schedule,
      this.httpOptions
    );
  }
  GetAllBookingDetails() {
    return this.service.get<any>(this.Url + '/bkDetails');
  }
  PassDetails(passenger: PassengerDetails) {
    return this.service.post<PassengerDetails[]>(
      this.Url + '/passengerdetails',
      JSON.stringify(passenger),
      this.httpOptions
    );
  }
}

