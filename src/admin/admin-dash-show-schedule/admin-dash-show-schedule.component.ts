import { Component, Output,EventEmitter, OnInit,TemplateRef } from '@angular/core';
import { AdminService } from '../admin.service';
import { Schedule } from '../schedule';
import { AdminDashBoardComponent } from '../admin-dash-board/admin-dash-board.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-dash-show-schedule',
  templateUrl: './admin-dash-show-schedule.component.html',
  styleUrls: ['./admin-dash-show-schedule.component.css'],
})
export class AdminDashShowScheduleComponent implements OnInit {
  scheduleDetails: Schedule[] = [];
  Ids!: any;

  constructor(
    private adminService: AdminService,
    private adminCo: AdminDashBoardComponent,
    private dialog:MatDialog
  ) {}

  openDialog(template: TemplateRef<any>) {
    this.dialog.open(template);
  }

  ngOnInit(): void {
    this.adminService.GetSchedule().subscribe((data) => {
      this.scheduleDetails = data;
      console.log(this.scheduleDetails);
    });
  }
  Update(Id: number) {
    this.adminCo.ChooseComponent = 'Update Schedule';
  }
}
