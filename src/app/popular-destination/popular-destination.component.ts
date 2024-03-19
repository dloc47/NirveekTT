import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-popular-destination',
  templateUrl: './popular-destination.component.html',
  styleUrls: ['./popular-destination.component.css']
})
export class PopularDestinationComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    $('.popular-destination').owlCarousel({
      loop:true,
      items:4,
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
          },
          1200:{
              items:4
          }
        //   },
        //   1500:{
        //       items:6
        //   }
      }
  })
  }

  ngOnInit() {
  }

}
