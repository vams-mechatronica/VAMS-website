// src/app/core/services/vams.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VamsAbout {
  title: string;
  description: string;
  mission: string;
  address: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class VamsService {
  private baseUrl = 'https://www.vamsmechatronica.in';

  constructor(private http: HttpClient) {}

  getAbout(): Observable<VamsAbout> {
    // This is a *fake example endpoint*. Their site probably doesn't offer a JSON API.
    // If they don't have a real API, you may host a JSON file in your own backend.
    return this.http.get<VamsAbout>(`${this.baseUrl}/aboutus-json`);
  }

  getPromonitor(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/promonitor-json`);
  }
}
