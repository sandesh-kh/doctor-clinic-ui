import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';



@NgModule({
  declarations: [
    AppointmentListComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentsModule { }
