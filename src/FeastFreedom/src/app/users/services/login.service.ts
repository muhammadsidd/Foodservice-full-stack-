import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = "http://127.0.0.1:8000/users/"
  public token: any;
  public token_expires: any;
  public username: any;
  public errors: any;
  
  constructor(private http: HttpClient) { }

  authenticateUser(user: any) {
    return this.http.post<IUser[]>('/api/login', user);//.shareReplay();
  }
}
