import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    initFlowbite();
    
    // Check if there's a fragment in the URL
    const hasFragment = window.location.hash;

    // If there's a fragment, redirect to the base URL
    if (hasFragment) {
      this.router.navigateByUrl('/');
    }
  }

}
