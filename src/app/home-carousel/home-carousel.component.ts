import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit,AfterViewInit{
  constructor() { }
  ngOnInit() {
    console.log("hello");
    
  }
  ngAfterViewInit(): void {
    $('.featured-destination').owlCarousel({
      loop: true,
      items: 4,
      //margin:25,
      // autoplay:true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        800: {
          items: 2
        },
        1200: {
          items: 3
        },
        1500: {
          items: 4
        }
      }
    })
  }
}
