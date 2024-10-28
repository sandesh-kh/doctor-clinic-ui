import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointment: Appointment = { id: 0, patientId: 0, doctorId: 0, appointmentDate: '', status: '' };
  isEdit: boolean = false;

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.appointmentService.getAppointment(id).subscribe((appointment) => (this.appointment = appointment));
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.appointmentService.updateAppointment(this.appointment.id, this.appointment).subscribe(() => {
        alert('Appointment updated successfully');
        this.router.navigate(['/appointments']);
      });
    } else {
      this.appointmentService.addAppointment(this.appointment).subscribe(() => {
        alert('Appointment added successfully');
        this.router.navigate(['/appointments']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/appointments']);
  }
}
