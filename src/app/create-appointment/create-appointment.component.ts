import { Component } from '@angular/core';

import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css',
})
export class CreateAppointmentComponent {
  newAppointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService) {}

  createAppointment() {
    this.appointmentService.createAppointment(this.newAppointment).subscribe(
      (response) => {
        console.log('Appointment created:', response); // Log the full response with ID
        alert('Appointment created successfully! ID: ' + response.id);
        this.newAppointment = new Appointment(); // Reset the form
      },
      (error) => {
        console.error('Error creating appointment:', error);
        alert('Failed to add appointment. Please try again.');
      }
    );
  }
}
