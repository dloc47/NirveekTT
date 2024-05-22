import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css']
})
export class TourPackagesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  holidayTheme: string[] = ['Family Tours', 'Religious Tours', 'Honeymoon Packages', 'Adventure Packages'];

  packages: any[] = [
    {
      region: 'East Sikkim',
      image: 'https://picsum.photos/600/400/?random',
      title: 'MYSTICAL WONDERLAND',
      duration: '2 Days/1 Nights',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque minus cum ipsam fuga consectetur distinctio quam ipsum, deleniti quidem omnis quae officia laborum non aperiam tenetur delectus voluptatem ab.',
      theme: 'Adventure',
      showMore: false
    },
    {
      region: 'West Sikkim',
      image: 'https://picsum.photos/600/401/?random',
      title: 'SERENE HILLS',
      duration: '3 Days/2 Nights',
      description: 'Nostrum natus facilis minima quasi, esse dolorem doloribus. Ipsum nulla distinctio iure expedita.',
      theme: 'Nature',
      showMore: false
    },
    {
      region: 'North Sikkim',
      image: 'https://picsum.photos/600/402/?random',
      title: 'SNOWY PEAKS',
      duration: '4 Days/3 Nights',
      description: 'Illo distinctio ratione neque vero expedita. Modi repudiandae facilis amet natus hic consequatur.',
      theme: 'Adventure',
      showMore: false
    },
    {
      region: 'South Sikkim',
      image: 'https://picsum.photos/600/403/?random',
      title: 'CULTURAL HERITAGE',
      duration: '5 Days/4 Nights',
      description: 'Vel adipisci ullam libero alias ipsa ea animi tempora. Aspernatur eligendi voluptatum amet nam.',
      theme: 'Cultural',
      showMore: false
    },
    {
      region: 'Central Sikkim',
      image: 'https://picsum.photos/600/404/?random',
      title: 'TRANQUIL RETREAT',
      duration: '2 Days/1 Nights',
      description: 'Deserunt maxime ad numquam dolorum suscipit. Atque eaque fuga accusamus saepe natus.',
      theme: 'Relaxation',
      showMore: false
    },
    {
      region: 'Upper Sikkim',
      image: 'https://picsum.photos/600/405/?random',
      title: 'HIGH ALTITUDE ADVENTURE',
      duration: '6 Days/5 Nights',
      description: 'Sint eos officiis ex quia illum labore. Laboriosam fugit ipsa laborum tempore nisi.',
      theme: 'Adventure',
      showMore: false
    }
  ];


  gotoItinerary(event: any) {
    console.log(event);

    this.router.navigate([`/itinerary`],
      {
        queryParams:
        {
          destinationId: event.destinationId
        }
      }
    );
  }

}
