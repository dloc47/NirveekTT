import { AfterViewInit, Component, OnInit, Injectable } from '@angular/core';
import { ItineraryService } from '../itinerary.service';
import { Subscription } from 'rxjs';

declare var $: any;

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private triggerFunctionSubscription: Subscription = Subscription.EMPTY;
  constructor(private itineraryService: ItineraryService) { 
    this.triggerFunctionSubscription = this.itineraryService.notifyObservable$.subscribe((res:any) => {
      console.log(res);
      this.scrollToItinerarySection(res);
    });
  }
  // ngAfterViewInit(): void {
  //   $('.featured-destination').owlCarousel({
  //     loop: true,
  //     items: 4,
  //     //margin:25,
  //     // autoplay:true,
  //     autoplayTimeout: 2000,
  //     autoplayHoverPause: true,
  //     nav: false,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       500: {
  //         items: 2
  //       },
  //       800: {
  //         items: 2
  //       },
  //       1200: {
  //         items: 3
  //       },
  //       1500: {
  //         items: 4
  //       }
  //     }
  //   })
  // }

  ngOnInit() {
  }

  // scrollToTarget() {
  //   setTimeout(() => {
  //     const element = document.getElementById('targetElement');
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  //     }
  //   });
  // }
  scrollToItinerarySection(data:any) {
    const element = document.getElementById(data);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
