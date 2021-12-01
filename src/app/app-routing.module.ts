import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from 'src/users/user-login/user-login.component';
import { UserRegistrationComponent } from 'src/users/user-registration/user-registration.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { UserSeatingComponent } from 'src/users/user-seating/user-seating.component';
import { UserProfileComponent } from 'src/users/user-profile/user-profile.component';
import { AdminLoginComponent } from 'src/admin/admin-login/admin-login.component';
import { AdminDashBoardComponent } from 'src/admin/admin-dash-board/admin-dash-board.component';
import { BusListDashboardComponent } from './bus-list-dashboard/bus-list-dashboard.component';
import { AdminDashUpdateScheduleComponent } from 'src/admin/admin-dash-update-schedule/admin-dash-update-schedule.component';
import { UserPaymentComponent } from 'src/users/user-payment/user-payment.component';
import { UsersBookingsComponent } from 'src/users/users-bookings/users-bookings.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
      {path:'',component: HomeDashboardComponent},
      { path: 'home', component: HomeDashboardComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'register', component: UserRegistrationComponent },
      { path: 'seats', component: UserSeatingComponent },
      { path: 'payment', component: UserPaymentComponent },
      { path: 'booking', component: UsersBookingsComponent },
      { path: 'userProfile', component: UserProfileComponent },
      { path: 'admindashboard', component: AdminDashBoardComponent },
      { path: 'updateSchedule/', component: AdminDashUpdateScheduleComponent },
      {path:'adminlogin',component:AdminLoginComponent},
      {path:'aboutus',component:AboutUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
