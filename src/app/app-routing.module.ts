import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';

import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  { path: 'Admin', component: AdmindashComponent },
  { path: 'Appointmentlist', component: AppointmentComponent },
  { path: 'Medicinelist', component: MedicineComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
