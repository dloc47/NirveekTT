import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
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

  scrollToTarget() {
    setTimeout(() => {
      const element = document.getElementById('targetElement');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    });
  }


}
