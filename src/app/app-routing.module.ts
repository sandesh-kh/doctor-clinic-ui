import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components for routing
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorFormComponent } from './doctors/doctor-form/doctor-form.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientFormComponent } from './patients/patient-form/patient-form.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './appointments/appointment-form/appointment-form.component';
import { BillingListComponent } from './billing/billing-list/billing-list.component';
import { BillingFormComponent } from './billing/billing-form/billing-form.component';
import { PrescriptionListComponent } from './prescriptions/prescription-list/prescription-list.component';
import { PrescriptionFormComponent } from './prescriptions/prescription-form/prescription-form.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/add', component: DoctorFormComponent },
  { path: 'doctors/edit/:id', component: DoctorFormComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/add', component: PatientFormComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/add', component: AppointmentFormComponent },
  { path: 'billing', component: BillingListComponent },
  { path: 'billing/add', component: BillingFormComponent },
  { path: 'prescriptions', component: PrescriptionListComponent },
  { path: 'prescriptions/add', component: PrescriptionFormComponent },
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' } // Optional: Redirect to not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
