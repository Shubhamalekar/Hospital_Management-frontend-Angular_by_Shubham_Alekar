import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/v2';
  private baseUrl1 = 'http://localhost:8080/api/v2/insert';
  private baseUrl2 = 'http://localhost:8080/api/v2/{id}';
  private baseUrl3 = 'http://localhost:8080/api/v2';

  getALLAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }
  //private baseUrl = 'http://localhost:8080/api/v2/insert';
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl1}`, appointment);
  }

  // Update appointment
  updatePatient(id: number, appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(
      `${this.baseUrl2}/${id}`,
      appointment
    );
  }
  deleteAppointment(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl3}/${id}`); // Calls DELETE endpoint
  }
}
