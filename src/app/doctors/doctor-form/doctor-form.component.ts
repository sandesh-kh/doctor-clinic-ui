import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/doctor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
  doctor: Doctor = { id: 0, name: '', specialization: '', contact: '' };
  isEdit: boolean = false;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.doctorService.getDoctor(id).subscribe((doctor) => (this.doctor = doctor));
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.doctorService.updateDoctor(this.doctor.id, this.doctor).subscribe(() => {
        alert('Doctor updated successfully');
        this.router.navigate(['/doctors']);
      });
    } else {
      this.doctorService.addDoctor(this.doctor).subscribe(() => {
        alert('Doctor added successfully');
        this.router.navigate(['/doctors']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/doctors']);
  }
}
