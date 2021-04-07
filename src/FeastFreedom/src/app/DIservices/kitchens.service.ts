import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KitchensService {
  private URL = 'http://127.0.0.1:3000/kitchens/';

  constructor(private http: HttpClient) {}

  getKitchens(): Observable<{}> {
    return this.http.get(this.URL);
  }

  getKitchen(id: number): Observable<any> {
    return this.http.get(this.URL + id);
  }
}
