import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/v1';

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}`, patient);
  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
