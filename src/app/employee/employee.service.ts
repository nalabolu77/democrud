import { Injectable } from "@angular/core";
import { IEmployee } from "./IEmployee";

import { Observable, throwError } from "rxjs";

import { catchError } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable()
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }  

   baseUrl = 'http://localhost:3000/employees';
  //baseUrl = 'http://localhost:52035/api/employees';
  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.baseUrl)
      .pipe(catchError(this.handlError));
  }

  private handlError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side error: ', errorResponse.error.message);
    } else {
      console.error('Server Side error: ', errorResponse);
    }
    return throwError('There is problm with the service. We are notified & working on it. Please try again later.');
  }

  			  
getEmployee(id: number): Observable<IEmployee> {
  return this.httpClient.get<IEmployee>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handlError));
}	

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    // if (employee.id === null) {
    return this.httpClient.post<IEmployee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(catchError(this.handlError));    
  }

  updateEmployee(employee: IEmployee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handlError));
  }

  deleteEmployee(id: number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handlError));
    }
  }
