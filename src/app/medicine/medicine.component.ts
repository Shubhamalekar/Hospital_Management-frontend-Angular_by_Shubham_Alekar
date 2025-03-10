import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  standalone: false,
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent implements OnInit {
  medicines: Medicine[] = [];
  newMedicine: Medicine = new Medicine();
  isEditing: boolean = false;
  editingId: number | null = null;

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.loadMedicines();
  }

  // Load all medicines
  loadMedicines() {
    this.medicineService.getAllMedicine().subscribe(
      (data: Medicine[]) => {
        this.medicines = data;
      },
      (error: any) => {
        console.error('Error fetching medicines:', error);
      }
    );
  }

  // Add a new medicine
  // addMedicine() {
  //   this.medicineService.createMedicine(this.newMedicine).subscribe(
  //     (response: any) => {
  //       this.loadMedicines();
  //       this.newMedicine = new Medicine(); // Reset form
  //     },
  //     (error: any) => {
  //       console.error('Error adding medicine:', error);
  //     }
  //   );
  // }

  // Edit an existing medicine
  // editMedicine(id: number) {
  //   this.isEditing = true;
  //   this.editingId = id;
  //   const medicine = this.medicines.find((m) => m.id === id);
  //   if (medicine) {
  //     this.newMedicine = { ...medicine };
  //   }
  // }

  // Update a medicine
  // updateMedicine() {
  //   if (this.editingId !== null) {
  //     this.medicineService
  //       .updatemedicine(this.editingId, this.newMedicine)
  //       .subscribe(
  //         (response: any) => {
  //           this.isEditing = false;
  //           this.editingId = null;
  //           this.loadMedicines();
  //           this.newMedicine = new Medicine(); // Reset form
  //         },
  //         (error: any) => {
  //           console.error('Error updating medicine:', error);
  //         }
  //       );
  //   }
  // }
}

// Delete a medicine
// deleteMedicine(id: number) {
//   this.medicineService.deleteMedicine(id).subscribe(
//     (response: any) => {
//       this.loadMedicines();
//     },
//     (error: any) => {
//       console.error('Error deleting medicine:', error);
//     }
//   );
// }
