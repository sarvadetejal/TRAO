import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from 'src/users/users.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { FormsModule } from '@angular/forms';
import { BusListDashboardComponent } from './bus-list-dashboard/bus-list-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AdminModule } from 'src/admin/admin.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    BusListDashboardComponent,
    NavigationbarComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    UsersModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
