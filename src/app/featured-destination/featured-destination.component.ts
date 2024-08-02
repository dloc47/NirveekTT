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
      image: "https://travelgangtok.com/uploads/destinations/DT-5512-9265/20190706-062344-largejpg.jpg",
      title: "SWEET MEMORY OF KHANCHENJUNGNA",
      location: "Okhrey, Varsey, Rinchenpong, Pelling, Gangtok",
      duration: "9 Days/8 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.himalayantourism.com/wp-content/uploads/2012/02/darjeeling_klassikerbild-600x360.jpg",
      title: "QUEEN OF HILLS",
      location: "Darjeeling",
      duration: "4 Days/3 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.esikkimtourism.in/wp-content/uploads/2019/04/tsomgosptmbr.jpg",
      title: "SPLENDER HIMALAYA",
      location: "Gangtok",
      duration: "4 Days/3 Nights",
      price: "₹300/person"
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:785/1*mMQQLSPeo81ovkATd5W8Cw.jpeg",
      title: "HIMALAYAN TRANQUILITY",
      location: "Gangtok, Lachung",
      duration: "5 Days/4 Nights",
      price: "₹300/person"
    },
    {
      image: "https://i.cdn.newsbytesapp.com/images/l99020211231103855.jpeg",
      title: "UNSPOILED HILLS",
      location: "Kalimpong, Gangtok",
      duration: "5 Days/4 Nights",
      price: "₹300/person"
    },
    {
      image: "https://i.pinimg.com/736x/8d/c8/50/8dc850f859e7d5d95f1ef5a7336de482.jpg",
      title: "LOST OF KINGDOM",
      location: "Gangtok, Pelling",
      duration: "5 Days/4 Nights",
      price: "₹300/person"
    },
    {
      image: "https://r1imghtlak.ibcdn.com/d4205e78-0077-4e9f-97af-afe78cd17f60.jpeg?downsize=634:357",
      title: "HIMALAYAN GOLDEN TRIANGLE",
      location: "Gangtok, Lachung, Lachen",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.atithitourandtravel.com/wp-content/uploads/2018/07/Gangtok.jpg",
      title: "MISTTREE MOUNTAIN", //two packages with same name
      location: "Kalimpong, Gangtok",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://i0.wp.com/travelgangtok.com/blog/wp-content/uploads/2023/07/Kanchenjunga-peak1.jpg?resize=750%2C437&ssl=1",
      title: "COOL KANCHENJUNGA",
      location: "Okhrey, Varsey, Pelling, Tashiding",
      duration: "7 Days/6 Nights",
      price: "₹300/person"
    },
    {
      image: "https://static.toiimg.com/thumb/108265417/Gangtok.jpg?width=1200&height=900",
      title: "TREASURE OF SIKKIM",
      location: "Gangtok, Lachen, Lachung",
      duration: "9 Days/8 Nights",
      price: "₹300/person"
    },
    {
      image: "https://m.economictimes.com/thumb/msid-86149204,width-1200,height-900,resizemode-4,imgsize-199734/tea-agencies.jpg",
      title: "ESCOTIC NORTH EAST",
      location: "Darjeeling, Gangtok, Pelling",
      duration: "8 Days/7 Nights",
      price: "₹300/person"
    },
    {
      image: "https://static.toiimg.com/thumb/94584300/View-of-Mt-Kanchenjunga-from-Pelling.jpg?width=1200&height=900",
      title: "ADVENTURE NATURE TOUR",
      location: "Okhrey, Varsey, Rinchenpong",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.savaari.com/blog/wp-content/uploads/2022/02/photo-1622308644420-b20142dc993c.jpg",
      title: "EASTERN HIMALAYAN THREE JEWELS",
      location: "Gangtok, Pelling, Darjelling",
      duration: "8 Days/7 Nights",
      price: "₹300/person"
    },
    {
      image: "https://travelgangtok.com/uploads/destinations/DT-3630-7166/Lepcha-Dzongu.jpg",
      title: "MYSTICAL WONDERLAND",
      location: "Dzongu, Lachung, Gangtok",
      duration: "7 Days/6 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.esikkimtourism.in/wp-content/uploads/2019/04/plcstovsrtaugst.jpg",
      title: "EASTERN MISTTREE",
      location: "Gangtok, Darjeeling",
      duration: "7 Days/6 Nights",
      price: "₹300/person"
    },
    {
      image: "https://lh4.googleusercontent.com/tJjV4rt2BE2-UusCPI8oCqUkvjhzCVvor52yjaaRCR9-YIxemvp8UAr1uQnVlGPiO62B_hywnzTsjWVXMjTE2CEB_a6bzoAK_nodB1IifArxflZj_CMAQMnsgEufYFO0aZJb-xebxScQL62RO2YWrXI",
      title: "SPENDID HILLS",
      location: "Gangtok, Lachung, Darjeeling",
      duration: "6 Days/5 Nights",
      price: "₹300/person"
    },
    {
      image: "https://media.assettype.com/outlooktraveller%2F2023-09%2F52f45b10-353d-4f60-b9d9-bbfdf1525985%2Fshutterstock_2285347729.jpg",
      title: "RENDEZVOUS SIKKIM",
      location: "Gangtok, Lachung, Lachen, Pelling",
      duration: "8 Days/7 Nights",
      price: "₹300/person"
    },
    {
      image: "https://www.sikkimtourismindia.com/uploads/tour13.JPG",
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
