import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patient: Patient = { id: 0, name: '', age: 0, contact: '', address: '' };
  isEdit: boolean = false;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.patientService.getPatient(id).subscribe((patient) => (this.patient = patient));
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.patientService.updatePatient(this.patient.id, this.patient).subscribe(() => {
        alert('Patient updated successfully');
        this.router.navigate(['/patients']);
      });
    } else {
      this.patientService.addPatient(this.patient).subscribe(() => {
        alert('Patient added successfully');
        this.router.navigate(['/patients']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/patients']);
  }
}
