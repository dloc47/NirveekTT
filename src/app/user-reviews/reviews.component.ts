import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, AfterViewInit {

  isExpanded = false;

  reviews = [
    {
      rating: 5,
      title: 'Top-Notch Tour Service',
      content: `Mr. Ram Giri of Nirveek Tours and Travels has rendered excellent service throughout our tour. He is an honest and well-organized gentleman. Though we had to miss out on North Sikkim due to a natural calamity, we have no regrets as we have seen other places well with good service from drivers. Mr. Amit Tamang deserves a special mention. The hotel rooms were also quite comfortable.`,
      author: 'Rita Karmakar'
    },
    {
      rating: 5,
      title: 'Excellent Service & Reliable Travel',
      content: `Mr. Ram Giri is a genuine and straightforward person who delivered great service as per his commitment. The entire tour/travel was well arranged with a well-maintained car and a great driver (Mr. Sachin). It was a very nice experience and I would highly recommend the service of Nirveek Tours & Travels.`,
      author: 'Kushal Dugar'
    },
    {
      rating: 5,
      title: 'Memorable Experience',
      content: `We had a fantastic time with Nirveek Tours and Travels. The itinerary was well-planned, and the accommodations were top-notch. Our driver was courteous and knowledgeable about the local area. The only downside was a slight delay in picking us up from the airport, but everything else was perfect.`,
      author: 'Anita Sharma'
    },
    {
      rating: 5,
      title: 'Good Service & Experience',
      content: `The tour was enjoyable, and the service was generally good. There were a few hiccups, such as a mix-up with hotel bookings, but the team was quick to resolve the issues. Overall, I would recommend Nirveek Tours & Travels for a well-organized trip.`,
      author: 'Sandeep Kumar'
    }
    // Add more review objects as needed
  ];

  constructor() { }

  ngOnInit() {
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
