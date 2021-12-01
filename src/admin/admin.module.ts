import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { AdminDashAddBusDetailsComponent } from './admin-dash-add-bus-details/admin-dash-add-bus-details.component';
import { AdminDashUpdateBusDetailsComponent } from './admin-dash-update-bus-details/admin-dash-update-bus-details.component';
import { AdminDashAddScheduleComponent } from './admin-dash-add-schedule/admin-dash-add-schedule.component';
import { AdminDashUpdateScheduleComponent } from './admin-dash-update-schedule/admin-dash-update-schedule.component';
import { AdminDashShowScheduleComponent } from './admin-dash-show-schedule/admin-dash-show-schedule.component';
import { AdminNavigationBarComponent } from './admin-navigation-bar/admin-navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashBoardComponent,
    AdminDashAddBusDetailsComponent,
    AdminDashUpdateBusDetailsComponent,
    AdminDashAddScheduleComponent,
    AdminDashUpdateScheduleComponent,
    AdminDashShowScheduleComponent,
    AdminNavigationBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  exports: [
    AdminLoginComponent,
    AdminDashBoardComponent,
    AdminDashAddBusDetailsComponent,
    AdminDashUpdateBusDetailsComponent,
    AdminDashAddScheduleComponent,
    AdminDashUpdateScheduleComponent,
    AdminDashShowScheduleComponent,
    AdminNavigationBarComponent,
  ],
})
export class AdminModule {}
