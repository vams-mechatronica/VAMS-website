import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'https://api.thenearbyshop.com/api/v1/contact/';

  constructor(private http: HttpClient) {}

  submitContactForm(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
