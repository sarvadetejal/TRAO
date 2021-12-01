import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSeatingComponent } from './user-seating/user-seating.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { UsersBookingsComponent } from './users-bookings/users-bookings.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgxPrintModule } from 'ngx-print';
@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent,
    UserSeatingComponent,
    UserProfileComponent,
    PassengerDetailsComponent,
    UsersBookingsComponent,
    UserPaymentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    NgxPrintModule,
  ],
  exports: [
    UserLoginComponent,
    UserRegistrationComponent,
    UserSeatingComponent,
    UserProfileComponent,
    PassengerDetailsComponent,
    UserPaymentComponent,
    UsersBookingsComponent,
  ],
})
export class UsersModule {}
