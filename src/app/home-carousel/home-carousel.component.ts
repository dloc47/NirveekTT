import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  isLoading: boolean = true;
  images = [
    'assets/images/carousel/buddha-park.jpg',
    'assets/images/carousel/gurudongmar.jpg',
    'assets/images/carousel/mg-marg.jpg',
    'assets/images/carousel/zuluk.jpg'
  ];

  constructor() { }

  ngOnInit() {
    // Preload all images
    Promise.all(
      this.images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).then(() => {
      this.isLoading = false;
    });
  }
}
