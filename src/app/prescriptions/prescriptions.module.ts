import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';



@NgModule({
  declarations: [
    PrescriptionListComponent,
    PrescriptionFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrescriptionsModule { }
