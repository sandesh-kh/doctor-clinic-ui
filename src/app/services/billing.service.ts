import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Billing } from '../models/billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private baseUrl = 'http://localhost:8080/api/billing';

  constructor(private http: HttpClient) {}

  getBillings(): Observable<Billing[]> {
    return this.http.get<Billing[]>(`${this.baseUrl}`).pipe(
      tap(data => console.log('Fetched Billings:', data)),
      catchError(this.handleError)
    );
  }

  getBilling(id: number): Observable<Billing> {
    return this.http.get<Billing>(`${this.baseUrl}/${id}`).pipe(
      tap(data => console.log(`Fetched Billing with ID=${id}`, data)),
      catchError(this.handleError)
    );
  }

  addBilling(billing: Billing): Observable<Billing> {
    return this.http.post<Billing>(`${this.baseUrl}`, billing).pipe(
      tap(data => console.log('Added Billing:', data)),
      catchError(this.handleError)
    );
  }

  updateBilling(id: number, billing: Billing): Observable<Billing> {
    return this.http.put<Billing>(`${this.baseUrl}/${id}`, billing).pipe(
      tap(data => console.log(`Updated Billing with ID=${id}`, data)),
      catchError(this.handleError)
    );
  }

  deleteBilling(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => console.log(`Deleted Billing with ID=${id}`)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
