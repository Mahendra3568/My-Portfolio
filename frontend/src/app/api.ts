import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // <-- IMPORT THIS

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // This now uses the correct URL for local or production
  private baseUrl = environment.apiUrl; 

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