import { AfterViewInit, Component, OnInit, Injectable } from '@angular/core';
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
  constructor() { 
    // this.triggerFunctionSubscription = this.itineraryService.notifyObservable$.subscribe((res:any) => {
    //   console.log(res);
    //   this.scrollToItinerarySection(res);
    // });
  }

  ngOnInit() {
  }
  
  scrollToItinerarySection(data:any) {
    const element = document.getElementById(data);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
