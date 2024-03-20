import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private router: Router) { }
  ngOnInit() {

  }
  gotoAbout() {
    console.log(this.router.url);
    if (this.router.url == "/") {
      console.log("hello");
      window.scrollTo({
        top: 1650, // Replace 500 with the desired height to scroll to
        behavior: 'smooth' // Optional: Add smooth scrolling
      });
    }
    else {
      console.log("world");
      this.router.navigate(["/about"]);
    }
  }
}
