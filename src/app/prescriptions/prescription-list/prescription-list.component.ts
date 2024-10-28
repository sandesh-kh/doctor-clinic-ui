import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';
import { Prescription } from '../../models/prescription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {
  prescriptions: Prescription[] = [];

  constructor(private prescriptionService: PrescriptionService, private router: Router) {}

  ngOnInit(): void {
    this.loadPrescriptions();
  }

  loadPrescriptions(): void {
    this.prescriptionService.getPrescriptions().subscribe((data) => (this.prescriptions = data));
  }

  editPrescription(id: number): void {
    this.router.navigate(['/prescriptions/edit', id]);
  }

  deletePrescription(id: number): void {
    if (confirm('Are you sure you want to delete this prescription?')) {
      this.prescriptionService.deletePrescription(id).subscribe(() => {
        this.prescriptions = this.prescriptions.filter((pres) => pres.id !== id);
        alert('Prescription deleted successfully');
      });
    }
  }
}
