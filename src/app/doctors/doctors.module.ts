import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';



@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorsModule { }
