import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, AfterViewInit {

  isExpanded = false;

  constructor() { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    $('.reviews').owlCarousel({
      loop: true,
      items: 4,
      //margin:25,
      // autoplay:true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: false,
      navText: ["<button class='custom-nav-btn prev-btn'>Previous</button>", "<button class='custom-nav-btn next-btn'>Next</button>"],
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
    });

    // Event handling for custom navigation buttons
    $('.prev-btn').click(function () {
      $('.owl-carousel').trigger('prev.owl.carousel');
    });

    $('.next-btn').click(function () {
      $('.owl-carousel').trigger('next.owl.carousel');
    });
  }

   toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }


}
