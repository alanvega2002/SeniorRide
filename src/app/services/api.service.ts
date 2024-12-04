import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://randomuser.me/api'; // Cambia esta URL por la de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener usuarios aleatorios
  getRandomUsers(count: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/?results=${count}`).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  // Método genérico para POST
  post(endpoint: string, body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, body).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  // Método genérico para PUT
  put(endpoint: string, body: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, body).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  // Método genérico para DELETE
  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  // Método para manejar errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage); // Log del error (opcional)
    return throwError(() => new Error(errorMessage)); // Devuelve un Observable con el error
  }
}