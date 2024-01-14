import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  host = 'http://localhost:3000/';

  getFoglalasok() {    
    let endpoint = 'foglalasok';
    let url = this.host + endpoint;
 
    return this.http.get<any>(url);
  }
}