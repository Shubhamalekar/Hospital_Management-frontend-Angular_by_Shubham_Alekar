import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css',
})
export class AdmindashComponent implements OnInit {
  patients: Patient[] = [];
  isEditing!: boolean;
  editingId!: number | null;
  newPatient: any; // Add the 'newPatient' property
  constructor(private patientService: PatientService) {}
  ngOnInit(): void {
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patients = data;
      console.log(this.patients);
    });
  }
  addPatient() {
    this.patientService.createPatient(this.newPatient).subscribe(() => {
      this.loadPatients();
      this.newPatient = new Patient();
    });
  }
  setNewPatient(newPatient: any) {
    throw new Error('Method not implemented.');
  }
  loadPatients() {
    throw new Error('Method not implemented.');
  }

  editPatient(id: number) {
    this.isEditing = true;
    this.editingId = id;
    const patient = this.patients.find((p) => p.id === id);
    if (patient) {
      this.setNewPatient({ ...patient });
    }
  }
  updatePatient() {
    if (this.editingId !== null) {
      this.patientService
        .updatePatient(this.editingId, this.newPatient)
        .subscribe(() => {
          this.isEditing = false;
          this.editingId = null;
          this.loadPatients();
          this.newPatient = new Patient();
        });
    }
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.loadPatients();
    });
  }
}
