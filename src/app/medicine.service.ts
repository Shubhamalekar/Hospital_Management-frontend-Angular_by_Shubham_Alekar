import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/v3';

  // Fetch all medicines
  getAllMedicine(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  // Update an existing medicine
  // updateMedicine(id: number, medicine: Medicine): Observable<Medicine> {
  //   return this.httpClient.put<Medicine>(`${this.baseUrl}/${id}, medicine`);
  // }
}
