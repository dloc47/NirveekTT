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

  // destinationByPlace : any[] = ["Darjeeling", "Mirik", "Kalimpong", "Gangtok", "Lachung", "Lachen", "Pelling",  "Namchi", "Ravangla"];
  // destinationByTheme : any[] = [];

  destinations: any[] = [
    {
      region: 'East Sikkim',
      places: ['Aritar', 'Gangtok', 'Tsogmo', 'Nathula', 'Zuluk', 'Rumtek']
    },
    {
      region: 'North Sikkim',
      places: ['Chungthang', 'Lachung', 'Lachen', 'Mangan', 'Singhik', 'Yumthang valley']
    },
    {
      region: 'South Sikkim',
      places: ['Jorethang', 'Namchi', 'Ravangla']
    },
    {
      region: 'West Sikkim',
      places: ['Geyzing', 'Kaluk', 'Legship', 'Pelling', 'Okharey', 'Rinchenpong', 'Uttarey']
    },
    {
      region: 'Attractions',
      places: ['Tsongmo Lake', 'Rumtek Monastry', 'Rabdentse Ruins', 'Nathu La Pass', 'Khecheopari Lake', 'Khangchenzonga National Park',
        'Gurudongmar Lake', 'Buddha Park', 'Chardham', 'Barsey Rhododendron Sanctuary', 'Baba Harbahajan Singh Temple'
      ]
    }
  ];


  goToHome() {
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
