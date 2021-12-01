import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/users/user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Schedule } from 'src/admin/schedule';
import { BusDetails } from 'src/admin/bus-details';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css'],
})
export class HomeDashboardComponent implements OnInit {
  user?: string | null;

  buslist: BusDetails[] = [];
  scheduleslist: Schedule[] = [];
  // model: any = {};

  

  searchForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: UserService,
    public dialog: MatDialog
  ) {}

  openDialog(template: TemplateRef<any>) {
    this.dialog.open(template);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('UserEmail');
    if (this.user === null) {
      console.log(this.user);
      this.router.navigate(['Home']);
    }
    this.searchForm = this.formBuilder.group({
      SourceLoc: [''],
      DestinationLoc: [''],
      ScheduleDate: [],
    });
  }
  SearchBus() {
    this.service.GetAllBusList(this.searchForm.value).subscribe((res) => {
      console.log('Return Buslist ' + res);

      const data = JSON.stringify(res);

      this.buslist = JSON.parse(data);
      this.scheduleslist = JSON.parse(data);

      console.log(this.buslist);
      // this.router.navigate(['buslist']);
    });
  }

  // openModal() {
  //   this.modalRef = this.modalService.show(template);
  //   // let journey={
  //   //   route:this.route,
  //   //   bus_info:bus,
  //   //   seats:
  //   // }
  // }
  // closeModal() {
  //   this.modalRef.hide();
  // }
}
