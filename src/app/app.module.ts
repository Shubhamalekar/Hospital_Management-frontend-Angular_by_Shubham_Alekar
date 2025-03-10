import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

import { CreateComponentComponent } from './create-component/create-component.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AdminComponent,
    AppointmentComponent,
    MedicineComponent,
    CreateComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
