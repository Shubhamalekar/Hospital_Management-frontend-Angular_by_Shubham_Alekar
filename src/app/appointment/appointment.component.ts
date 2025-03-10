import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  constructor(private appointmentService: AppointmentService) {}
  ngOnInit(): void {
    this.getAppointments();
  }
  //getAppointments() {
  //this.appointmentService.getALLAppointments().subscribe((data) => {
  //this.appointments = data;
  //console.log(this.appointments);

  getAppointments() {
    this.appointmentService.getALLAppointments().subscribe(
      (data) => {
        console.log('Appointments fetched successfully:', data);
        this.appointments = data;
      },
      (error) => {
        console.error('Error occurred while fetching appointments:', error);
      }
    );
  }
}
