import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService { // <-- We are naming our class 'ApiService'

  // This is the URL of our running Node.js backend
  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/skills`);
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/experiences`);
  }

  getEducations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/educations`);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/projects`);
  }
}