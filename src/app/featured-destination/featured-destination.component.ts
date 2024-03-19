import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-featured-destination',
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css']
})
export class FeaturedDestinationComponent implements OnInit, AfterViewInit {

  constructor() { }
  featuredItems: any[] = [
    {
      image: "https://www.esikkimtourism.in/wp-content/uploads/2019/04/3rd-image.jpg",
      title: "Ropeway",
      location: "Gangtok, East Sikkim",
      days: "1 Day",
      price: "₹300/person"
    },
    {
      image: "https://www.tripsavvy.com/thmb/58A3iO4pNLWV-yojm0QbsrmurbM=/2121x1414/filters:fill(auto,1)/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
      title: "Tsomgu",
      location: "Tsomgu, East Sikkim",
      days: "1 Day",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "Gurudongmar Lake",
      location: "Gurudongmar Lake",
      days: "1 Day",
      price: "₹300/person"
    }
  ];
  ngAfterViewInit(): void {
    $('.popular-destination').owlCarousel({
      loop:true,
      items:3,
      margin:25,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          500:{
              items:2
          },
          800:{
              items:3
          }
      }
  })
  }

  ngOnInit() {
  }

}
