import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  touritinerary: any = {}
  currentItenary: any;
  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.route.queryParams.subscribe((res: any) => {
      this.currentItenary = res;
      this.touritinerary = JSON.parse(res.touritinerary);
    })
    
  }

}
