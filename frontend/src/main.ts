import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // <-- Import the tool
import { App } from './app/app'; 

// This tells Angular to start your 'App' component
// and provide the HTTP tool to it.
bootstrapApplication(App, {
  providers: [
    provideHttpClient() // <-- This is the important part
  ]
}).catch(err => console.error(err));