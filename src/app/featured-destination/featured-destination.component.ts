import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourPackageService } from 'src/services/tour-package.service';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-featured-destination',
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css'],
})
export class FeaturedDestinationComponent implements OnInit, AfterViewInit {
  
  tourPackages$: Observable<any[]> | undefined; // Observable for better reactivity

  constructor(
    private router: Router,
    private tourPackageService: TourPackageService
  ) {}

  ngOnInit(): void {
    this.tourPackages$ = this.tourPackageService.getTourPackages(); // Subscribe in template using async pipe
  }

  ngAfterViewInit(): void {
    $('.featured-destination').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }
    });

    // Custom Navigation
    $('.custom-prev-btn').click(() => {
      $('.featured-destination').trigger('prev.owl.carousel');
    });

    $('.custom-next-btn').click(() => {
      $('.featured-destination').trigger('next.owl.carousel');
    });
  }

  redirectToItinerary(destination: any) {
    this.router.navigate(['/itinerary'], { state: { data: destination } });
  }
}
