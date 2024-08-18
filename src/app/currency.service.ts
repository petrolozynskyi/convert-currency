import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/UAH'; // Замість цього URL використовуйте актуальний публічний API

  constructor(private http: HttpClient) {}

  getRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
