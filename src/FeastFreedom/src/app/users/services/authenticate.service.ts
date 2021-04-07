import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private _url: string = "http://127.0.0.1:8000/"
  private logger = new Subject<boolean>();
  private loggedIn: boolean = false;

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  logIn(username: string, password: string): void {
    this.http.post(this._url + 'login/', { username, password }).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
      },
      (error) => console.log(error),
      () => {
        console.log('logged in');
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
      }
    );
  }

  logOut(): void {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  getUser(): Observable<{}> {
    const id = this.jwt.decodeToken(localStorage.getItem('access') || '').id;
    return this.http.get(this._url + 'users/' + '');
  }

  getUserId(): number {
    const token = localStorage.getItem('access');
    return this.jwt.decodeToken(token || '').id;
  }
}
