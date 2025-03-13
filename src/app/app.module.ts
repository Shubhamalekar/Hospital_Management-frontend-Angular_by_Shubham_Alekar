import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Remove the local declaration of AppRoutingModule
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FormsModule } from '@angular/forms';
//import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { Appointment } from './appointment';

const routes: Routes = [
  { path: 'appointments', component: AppointmentComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },
  // Additional routes for Patients and Medicines:
  { path: 'patients', component: AdmindashComponent },
  { path: 'medicines', component: MedicineComponent },
  { path: '', redirectTo: '/appointments', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // add any necessary code here
}
@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AdminComponent,
    AppointmentComponent,
    MedicineComponent,
    CreateAppointmentComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
