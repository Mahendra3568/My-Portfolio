import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ApiService } from './api'; // <-- This now correctly imports from 'api.ts'

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, // <-- We must import this for *ngFor/*ngIf
  ],
  templateUrl: './app.component.html', // <-- Use the new HTML file
  styleUrls: ['./app.component.css']   // <-- Use the new CSS file
})
export class App implements OnInit { 
  
  // Variables to hold our data
  profile: any;
  skills: any[] = [];
  experiences: any[] = [];
  educations: any[] = [];
  projects: any[] = [];

  constructor(private api: ApiService) {} // This will now work

  ngOnInit() {
    // When the page loads, call all our API functions
    this.api.getProfile().subscribe(data => {
      this.profile = data;
    });

    this.api.getSkills().subscribe(data => {
      this.skills = data;
    });

    this.api.getExperiences().subscribe(data => {
      this.experiences = data;
    });

    this.api.getEducations().subscribe(data => {
      this.educations = data;
    });

    this.api.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  // Helper to filter skills by type
  getSkillsByType(type: string) {
    return this.skills.filter(skill => skill.type === type);
  }
}