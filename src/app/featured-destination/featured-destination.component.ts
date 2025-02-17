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
    setTimeout(() => { // Ensure DOM is fully loaded before initializing
      const owl = $('.featured-destination');
      if (owl.length) {
        owl.owlCarousel({
          loop: true,
          items: 3,
          margin: 25,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          nav: true,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
          ],
          navContainer: '.main-content .custom-nav',
          responsive: {
            0: { items: 1 },
            640: { items: 2 },
            768: { items: 3 },
          },
        });

        $('.custom-nav .owl-prev').click(function () {
          owl.trigger('prev.owl.carousel');
        });

        $('.custom-nav .owl-next').click(function () {
          owl.trigger('next.owl.carousel');
        });
      }
    }, 500);
  }

  redirectToItinerary(destination: any) {
    this.router.navigate(['/itinerary'], { state: { data: destination } });
  }
}
