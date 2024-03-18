import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-featured-destination',
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css']
})
export class FeaturedDestinationComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    $('.popular-destination').owlCarousel({
      loop:true,
      items:3,
      margin:25,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      nav:false,
      // responsive:{
      //     0:{
      //         items:1
      //     },
      //     500:{
      //         items:2
      //     },
      //     800:{
      //         items:3
      //     }
      // }
  })
  }

  ngOnInit() {
  }

}
