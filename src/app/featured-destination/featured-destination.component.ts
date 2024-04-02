import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-featured-destination',
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css']
})
export class FeaturedDestinationComponent implements OnInit, AfterViewInit {

  constructor() { }

  featuredItems: any[] = [
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "QUEEN OF HILLS",
      location: "Darjeeling",
      duration: "4 Days/3 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "SPLENDER HIMALAYA",
      location: "Gangtok",
      duration: "4 Days/3 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "HIMALAYAN TRANQUILITY",
      location: "Gangtok, Lachung",
      duration: "5 Days/4 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "UNSPOILED HILLS",
      location: "Kalimpong, Gangtok",
      duration: "5 Days/4 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "LOST OF KINGDOM",
      location: "Gangtok, Pelling",
      duration: "5 Days/4 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "HIMALAYAN GOLDEN TRIANGLE",
      location: "Gangtok, Lachung, Lachen",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "MISTTREE MOUNTAIN", //two packages with same name
      location: "Kalimpong, Gangtok",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "COOL KANCHENJUNGA",
      location: "Okhrey, Varsey, Pelling, Tashiding",
      duration: "7 Days/6 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "SWEET MEMORY OF KHANCHENJUNGNA",
      location: "Okhrey, Varsey, Rinchenpong, Pelling, Gangtok",
      duration: "9 Days/8 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "TREASURE OF SIKKIM",
      location: "Gangtok, Lachen, Lachung",
      duration: "9 Days/8 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "ESCOTIC NORTH EAST",
      location: "Darjeeling, Gangtok, Pelling",
      duration: "8 Days/7 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "ADVENTURE NATURE TOUR",
      location: "Okhrey, Varsey, Rinchenpong",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "EASTERN HIMALAYAN THREE JEWELS",
      location: "Gangtok, Pelling, Darjelling",
      duration: "8 Days/7 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "MYSTICAL WONDERLAND",
      location: "Dzongu, Lachung, Gangtok",
      duration: "7 Days/6 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "EASTERN MISTTREE",
      location: "Gangtok, Darjeeling",
      duration: "7 Days/6 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "SPENDID HILLS",
      location: "Gangtok, Lachung, Darjeeling",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "RENDEZVOUS SIKKIM",
      location: "Gangtok, Lachung, Lachen, Pelling",
      duration: "8 Days/7 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      title: "ENERGY OF EAST WEST HIMALAYA",
      location: "Gangtok, Pelling",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    }
  ];
  
  ngAfterViewInit(): void {
    $('.featured-destination').owlCarousel({
      loop: true,
      items: 3,
      margin: 25,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        800: {
          items: 3
        }
      }
    })
  }

  ngOnInit() {
  }

}
