import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentFormComponent } from './appointments/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { BillingFormComponent } from './billing/billing-form/billing-form.component';
import { BillingListComponent } from './billing/billing-list/billing-list.component';
import { DoctorFormComponent } from './doctors/doctor-form/doctor-form.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { PatientFormComponent } from './patients/patient-form/patient-form.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PrescriptionFormComponent } from './prescriptions/prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './prescriptions/prescription-list/prescription-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    DoctorListComponent,
    DoctorFormComponent,

    PatientListComponent,
    PatientFormComponent,

    AppointmentListComponent,
    AppointmentFormComponent,

    BillingListComponent,
    BillingFormComponent,

    PrescriptionListComponent,
    PrescriptionFormComponent,

    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
