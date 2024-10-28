import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'http://localhost:8080/api/doctors';

  constructor(private http: HttpClient) {}

  // Fetch all doctors
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}`).pipe(
      tap(data => console.log('Fetched Doctors:', data)),
      catchError(this.handleError)
    );
  }

  // Fetch a single doctor by ID
  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.baseUrl}/${id}`).pipe(
      tap(data => console.log(`Fetched Doctor with ID=${id}`, data)),
      catchError(this.handleError)
    );
  }

  // Add a new doctor
  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.baseUrl}`, doctor).pipe(
      tap(data => console.log('Added Doctor:', data)),
      catchError(this.handleError)
    );
  }

  // Update an existing doctor
  updateDoctor(id: number, doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.baseUrl}/${id}`, doctor).pipe(
      tap(data => console.log(`Updated Doctor with ID=${id}`, data)),
      catchError(this.handleError)
    );
  }

  // Delete a doctor by ID
  deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => console.log(`Deleted Doctor with ID=${id}`)),
      catchError(this.handleError)
    );
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
