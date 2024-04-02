import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ItineraryService } from '../itinerary.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  screenWidth: number = 0

  constructor(private router: Router, private service: ItineraryService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth
  }
  // gotoAbout() {
  //   if (this.router.url == "/") {
  //     window.scrollTo({
  //       top: 1650,
  //       behavior: 'smooth'
  //     });
  //   }
  //   else {
  //     this.router.navigate(["/about"]);
  //   }
  // }
  goToHome(){
    if (this.router.url == "/") {
      this.service.goToAbout("home");
    }
    else {
      this.router.navigate(["/"]);
    }
  }

  gotoContactUs() {
    if (this.router.url == "/") {
      this.service.goToAbout("contact");
    }
    else {
      this.router.navigate(["/contact"]);
    }
  }
  goToAbout() {

    if (this.router.url == "/") {
      this.service.goToAbout("about");
    }
    else {
      this.router.navigate(["/about"]);
    }
  }
}
