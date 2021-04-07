import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url: string = "http://127.0.0.1:8000/users/"
  
  constructor(private http: HttpClient) { }

  getRegularUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getRegularUser(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url + id + "/")
    .pipe(catchError(this.errorHandler));
  }

  createRegularUser(User: any): Observable<User[]> {
    return this.http.post<IUser[]>(this._url + "create/", User)
    .pipe(catchError(this.errorHandler));
  }

  updateRegularUser(id: number, User: any): Observable<IUser[]> {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("access")}`
    });
    return this.http.put<IUser[]>(this._url + id + "/update/", User, {headers: headers})
    .pipe(catchError(this.errorHandler));
  }

  deleteRegularUser(id: number): any {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("access")}`
    });
    return this.http.delete(this._url + id + "/delete/", {headers: headers});
  }
  
  getKitchenUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this._url}kitchens/`)
    .pipe(catchError(this.errorHandler));
  }

  getKitchenUser(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url + id + "/")
    .pipe(catchError(this.errorHandler));
  }

  createKitchenUser(User: any): Observable<User[]> {
    return this.http.post<IUser[]>(`${this._url}kitchens/create/`, User)
    .pipe(catchError(this.errorHandler));
  }

  updateKitchenUser(id: number, User: any): Observable<IUser[]> {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("access")}`
    });
    return this.http.put<IUser[]>(`${this._url}kitchens/${id}/update/`, User, {headers: headers})
    .pipe(catchError(this.errorHandler));
  }

  deleteKitchenUser(id: number): any {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("access")}`
    });
    return this.http.delete(`${this._url}kitchens/${id}/delete/`, {headers: headers});
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
