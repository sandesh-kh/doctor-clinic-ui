import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';



@NgModule({
  declarations: [
    PatientListComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientsModule { }
