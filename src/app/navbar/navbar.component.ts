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
  screenWidth: number = 0
  ngOnInit() {
    this.screenWidth = window.innerWidth
  }
  gotoAbout() {
    if (this.router.url == "/") {
      window.scrollTo({
        top: 1650,
        behavior: 'smooth'
      });
    }
    else {
      this.router.navigate(["/about"]);
    }
  }
  gotoContactUs() {
    if (this.router.url == "/") {
      window.scrollTo({
        top: 4700,
        behavior: 'smooth'
      });
    }
    else {
      this.router.navigate(["/contact"]);
    }
  }
}
