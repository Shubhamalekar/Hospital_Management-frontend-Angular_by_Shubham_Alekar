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

  getALLAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }
}
