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
  isEditing: boolean = false;
  editingId: number | null = null;
  newAppointment: {
    id: number;
    name: string;
    age: string;
    symptoms: string;
    number: string;
  } = { id: 0, name: '', age: '', symptoms: '', number: '' };

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  // Load all appointments
  loadAppointments() {
    this.appointmentService.getALLAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  getAppointments() {
    this.appointmentService.getALLAppointments().subscribe(
      (data) => {
        console.log('Appointments fetched successfully:', data);
        this.appointments = data;
      },
      (error: any) => {
        console.error('Error occurred while fetching appointments:', error);
      }
    );
  }

  // Edit an existing appointment
  startEditingAppointment(id: number) {
    this.isEditing = true;
    this.editingId = id;
    const appointment = this.appointments.find((a) => a.id === id);
    if (appointment) {
      this.newAppointment = { ...appointment };
    }
  }

  // Update the appointment
  updateAppointment() {
    if (this.editingId !== null) {
      this.appointmentService
        .createAppointment(this.newAppointment)
        .subscribe(() => {
          alert('Appointment updated successfully!');
          this.isEditing = false;
          this.editingId = null;
          this.loadAppointments(); // Refresh the list
          this.newAppointment = {
            id: 0,
            name: '',
            age: '',
            symptoms: '',
            number: '',
          }; // Reset the form
        });
    }
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      // Confirmation popup
      this.appointmentService.deleteAppointment(id).subscribe(
        () => {
          alert('Appointment deleted successfully!');
          this.loadAppointments(); // Refresh the list of appointments
        },
        (error: any) => {
          console.error('Error deleting appointment:', error);
          alert('Failed to delete appointment. Please try again.');
        }
      );
    }
  }
}
