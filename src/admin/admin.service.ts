import { Injectable } from '@angular/core';
import { Observable, scheduled, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BusDetails } from './bus-details';
import { Schedule } from './schedule';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public subject = new Subject<boolean>();

  Url: string;
  header: any;
  Admincontroller: string = 'Admin';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private service: HttpClient) {
    this.Url = 'http://localhost:25209/Admin';
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
  AdminLogin(model: any) {
    return this.service.post<any>(
      this.Url + '/adminLogin',
      JSON.stringify(model),
      this.httpOptions
    );
  }
  AddBus(busdetail: BusDetails) {
    return this.service.post<BusDetails[]>(
      this.Url,
      busdetail,
      this.httpOptions
    );
  }
  GetBus(): Observable<BusDetails[]> {
    return this.service.get<BusDetails[]>(this.Url + '/BusId');
  }
  GetBusById(model:any):Observable<BusDetails>{
    return this.service.get<BusDetails>(this.Url+`/getBusById/${model}`);
  }
  UpdateBusDetails(busId:BusDetails,busDetails:BusDetails){
    return this.service.put<BusDetails[]>(this.Url + '/updatebus/'+busId,JSON.stringify(busDetails),this.httpOptions);
  }
  AddSchedule(schedule: Schedule) {
    return this.service.post<Schedule[]>(
      this.Url + '/addSchedule',
      schedule,
      this.httpOptions
    );
  }
  GetSchedule(): Observable<Schedule[]> {
    return this.service.get<Schedule[]>(this.Url + '/getSchedule');
  }
  GetScheduleByID(model:any): Observable<Schedule> {
    return this.service.get<Schedule>(this.Url + `/${model}`);
  }
  UpdateSchedule(scheduleId:Schedule,schedule:Schedule){
    return this.service.put<Schedule[]>(
      this.Url + '/updateSchedule/' + scheduleId,
      JSON.stringify(schedule),
      this.httpOptions
    );
  }
 

}
