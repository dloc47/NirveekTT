import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-featured-destination',
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css']
})
export class FeaturedDestinationComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
ngOnInit(): void {
  console.log('FeaturedDestinationComponent initialized.');
}


featuredDestinations: any [] = [
  {
    "destinationImage": "assets/images/featured-destination/QUEEN-OF-HILLS.jpg",
    "destinationTitle": "QUEEN OF HILLS",
    "location": "Darjeeling",
    "duration": "4 Days/3 Nights",
    "destinationDescription": "Experience the charm of Darjeeling, the Queen of Hills, with breathtaking sunrises, tea gardens, and colonial-era architecture.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Darjeeling",
        "description": "Arrive at NJP/IXB and transfer to Darjeeling. Check into the hotel and relax. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 2: Darjeeling Local Sightseeing",
        "description": "Visit Himalayan Mountaineering Institute, P.N. Zoological Park, Tenzing Rock, Tibetan Refugee Center, tea gardens, and Japanese Temple. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 3: Tiger Hill & Ghoom Monastery",
        "description": "Early morning drive to Tiger Hill for sunrise views. Visit Ghoom Monastery, Batasia Loop, and Senchal Lake. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 4: Departure",
        "description": "After breakfast, transfer back to NJP/IXB for departure."
      }
    ],
    "including": ["Hotel stay", "Breakfast", "Sightseeing"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/SPLENDER-HIMALAYA.jpg",
    "destinationTitle": "SPLENDER HIMALAYA",
    "location": "Gangtok",
    "duration": "4 Days/3 Nights",
    "destinationDescription": "A short yet immersive tour of Gangtok, showcasing its monasteries, viewpoints, and vibrant local culture.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Gangtok Sightseeing",
        "description": "Visit Rumtek Monastery, Do Drul Chorten, Tibetology Institute, and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stay", "Breakfast & Dinner", "Transport"],
    "exclusion": ["Entry tickets", "Guide charges", "Personal expenses"]
  },
  {
    "destinationImage": "assets/images/featured-destination/HIMALAYAN-TRANQUILITY.jpg",
    "destinationTitle": "HIMALAYAN TRANQUILITY",
    "location": "Gangtok, Lachung",
    "duration": "5 Days/4 Nights",
    "destinationDescription": "A rejuvenating journey through Gangtok and Lachung, covering scenic landscapes, monasteries, and waterfalls.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Tsomgo Lake & Nathula Pass",
        "description": "Visit Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Transfer to Lachung",
        "description": "Drive to Lachung via Singhik View Point and Seven Sisters Waterfalls. Overnight stay at Lachung."
      },
      {
        "day": "Day 4: Yumthang Valley Excursion",
        "description": "Explore Yumthang Valley, known as the Valley of Flowers, and visit hot springs. Return to Gangtok. Overnight stay at Gangtok."
      },
      {
        "day": "Day 5: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Meals as per itinerary"],
    "exclusion": ["Permit charges", "Personal expenses", "Entry fees"]
  },
  {
    "destinationImage": "assets/images/featured-destination/UNSPOILED-HILLS.jpg",
    "destinationTitle": "UNSPOILED HILLS",
    "location": "Kalimpong, Gangtok",
    "duration": "5 Days/4 Nights",
    "destinationDescription": "Explore the serene hills of Kalimpong and Gangtok, offering a perfect blend of nature, culture, and spirituality.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Kalimpong",
        "description": "Arrive at NJP and transfer to Kalimpong. Visit Dr. Graham’s Homes School and Durpin Dara. Overnight stay at Kalimpong."
      },
      {
        "day": "Day 2: Kalimpong Sightseeing",
        "description": "Visit Mangal Dham, Delo View Point, and Pedong Monastery. Overnight stay at Kalimpong."
      },
      {
        "day": "Day 3: Transfer to Gangtok",
        "description": "Drive to Gangtok and visit Do Drul Chorten, Tibetology Institute, and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 5: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/LOST-OF-KINGDOM.jpg",
    "destinationTitle": "LOST OF KINGDOM",
    "location": "Gangtok, Pelling",
    "duration": "5 Days/4 Nights",
    "destinationDescription": "Discover the lost kingdom of Sikkim with visits to Gangtok and Pelling, featuring monasteries, waterfalls, and stunning views.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Tsomgo Lake & Nathula Pass",
        "description": "Visit Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Transfer to Pelling",
        "description": "Drive to Pelling via Namchi. Visit Temi Tea Garden and Samdruptse. Overnight stay at Pelling."
      },
      {
        "day": "Day 4: Pelling Sightseeing",
        "description": "Explore Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 5: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/HIMALAYAN-GOLDEN-TRIANGLE.jpeg",
    "destinationTitle": "HIMALAYAN GOLDEN TRIANGLE",
    "location": "Gangtok, Lachung, Lachen",
    "duration": "6 Days/5 Nights",
    "destinationDescription": "Explore the golden triangle of Gangtok, Lachung, and Lachen, featuring stunning lakes, valleys, and monasteries.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Tsomgo Lake & Nathula Pass",
        "description": "Visit Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Transfer to Lachen",
        "description": "Drive to Lachen via Singhik View Point and Seven Sisters Waterfalls. Overnight stay at Lachen."
      },
      {
        "day": "Day 4: Gurudongmar Lake Excursion",
        "description": "Visit Gurudongmar Lake, one of the highest lakes in the world. Return to Lachung. Overnight stay at Lachung."
      },
      {
        "day": "Day 5: Yumthang Valley Excursion",
        "description": "Explore Yumthang Valley and hot springs. Return to Gangtok. Overnight stay at Gangtok."
      },
      {
        "day": "Day 6: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/MISTTREE-MOUNTAIN.jpg",
    "destinationTitle": "MISTTREE MOUNTAIN",
    "location": "Kalimpong, Gangtok",
    "duration": "6 Days/5 Nights",
    "destinationDescription": "A serene journey through Kalimpong and Gangtok, featuring lush forests, monasteries, and panoramic views.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Kalimpong",
        "description": "Arrive at NJP and transfer to Kalimpong. Visit Dr. Graham’s Homes School and Durpin Dara. Overnight stay at Kalimpong."
      },
      {
        "day": "Day 2: Lava & Lolegaon Excursion",
        "description": "Visit Lava and Lolegaon, known for their rich flora and fauna. Overnight stay at Kalimpong."
      },
      {
        "day": "Day 3: Transfer to Gangtok",
        "description": "Drive to Gangtok and visit Do Drul Chorten, Tibetology Institute, and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 5: Namchi & Pelling Excursion",
        "description": "Visit Namchi and Pelling, including Temi Tea Garden and Samdruptse. Overnight stay at Gangtok."
      },
      {
        "day": "Day 6: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/COOL-KANCHENJUNGA.jpg",
    "destinationTitle": "COOL KANCHENJUNGA",
    "location": "Okhrey, Varsey, Pelling, Tashiding",
    "duration": "7 Days/6 Nights",
    "destinationDescription": "A unique journey through Okhrey, Varsey, Pelling, and Tashiding, offering stunning views of Kanchenjunga and serene landscapes.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Okhrey",
        "description": "Arrive at NJP and transfer to Okhrey. Overnight stay at Okhrey."
      },
      {
        "day": "Day 2: Trek to Varsey",
        "description": "Hike to Varsey and explore the rhododendron sanctuary. Overnight stay at Varsey."
      },
      {
        "day": "Day 3: Explore Varsey",
        "description": "Spend the day exploring Varsey and its surroundings. Overnight stay at Varsey."
      },
      {
        "day": "Day 4: Transfer to Pelling",
        "description": "Drive to Pelling and relax for the day. Overnight stay at Pelling."
      },
      {
        "day": "Day 5: Pelling Sightseeing",
        "description": "Visit Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 6: Transfer to Tashiding",
        "description": "Drive to Tashiding and visit Tashiding Monastery. Overnight stay at Tashiding."
      },
      {
        "day": "Day 7: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/SWEET-MEMORY-OF-KHANCHENJUNGNA.jpg",
    "destinationTitle": "SWEET MEMORY OF KHANCHENJUNGNA",
    "location": "Okhrey, Varsey, Rinchenpong, Pelling, Gangtok",
    "duration": "9 Days/8 Nights",
    "destinationDescription": "Explore the breathtaking landscapes of Khanchendzonga with this immersive tour covering Okhrey, Varsey, Rinchenpong, Pelling, and Gangtok. Witness majestic views, monasteries, and serene landscapes.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Okhrey",
        "description": "Arrive at NJP and transfer to Okhrey. Overnight stay at Okhrey."
      },
      {
        "day": "Day 2: Trek to Varsey",
        "description": "Hike to Varsey and explore the rhododendron sanctuary. Overnight stay at Varsey."
      },
      {
        "day": "Day 3: Explore Varsey",
        "description": "Spend the day exploring Varsey and its surroundings. Overnight stay at Varsey."
      },
      {
        "day": "Day 4: Transfer to Rinchenpong",
        "description": "Drive to Rinchenpong and visit Resum Monastery. Overnight stay at Rinchenpong."
      },
      {
        "day": "Day 5: Transfer to Pelling",
        "description": "Drive to Pelling and relax for the day. Overnight stay at Pelling."
      },
      {
        "day": "Day 6: Pelling Sightseeing",
        "description": "Visit Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 7: Transfer to Gangtok",
        "description": "Drive to Gangtok and enjoy half-day sightseeing. Overnight stay at Gangtok."
      },
      {
        "day": "Day 8: Gangtok Sightseeing",
        "description": "Visit Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 9: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/TREASURE-OF-SIKKIM.jpg",
    "destinationTitle": "TREASURE OF SIKKIM",
    "location": "Gangtok, Lachen, Lachung",
    "duration": "9 Days/8 Nights",
    "destinationDescription": "A comprehensive tour of Sikkim, covering Gangtok, Lachen, and Lachung, featuring stunning lakes, valleys, and monasteries.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Gangtok Sightseeing",
        "description": "Visit Rumtek Monastery, Do Drul Chorten, and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Transfer to Lachen",
        "description": "Drive to Lachen via Singhik View Point and Seven Sisters Waterfalls. Overnight stay at Lachen."
      },
      {
        "day": "Day 5: Gurudongmar Lake Excursion",
        "description": "Visit Gurudongmar Lake and return to Lachen. Overnight stay at Lachen."
      },
      {
        "day": "Day 6: Transfer to Lachung",
        "description": "Drive to Lachung and visit Nyingmapa Monastery. Overnight stay at Lachung."
      },
      {
        "day": "Day 7: Yumthang Valley Excursion",
        "description": "Explore Yumthang Valley and hot springs. Return to Gangtok. Overnight stay at Gangtok."
      },
      {
        "day": "Day 8: Gangtok Sightseeing",
        "description": "Visit Tashi View Point and Ranka Monastery. Overnight stay at Gangtok."
      },
      {
        "day": "Day 9: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/ESCOTIC-NORTH-EAST.jpg",
    "destinationTitle": "ESCOTIC NORTH EAST",
    "location": "Darjeeling, Gangtok, Pelling",
    "duration": "8 Days/7 Nights",
    "destinationDescription": "A mesmerizing journey through Darjeeling, Gangtok, and Pelling, featuring tea gardens, monasteries, and stunning landscapes.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Darjeeling",
        "description": "Arrive at NJP and transfer to Darjeeling. Visit Himalayan Mountaineering Institute and tea gardens. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 2: Darjeeling Sightseeing",
        "description": "Visit Tiger Hill, Ghoom Monastery, and Batasia Loop. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 3: Transfer to Gangtok",
        "description": "Drive to Gangtok and visit Do Drul Chorten and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 5: Transfer to Pelling",
        "description": "Drive to Pelling via Namchi and visit Temi Tea Garden. Overnight stay at Pelling."
      },
      {
        "day": "Day 6: Pelling Sightseeing",
        "description": "Visit Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 7: Transfer to Gangtok",
        "description": "Drive back to Gangtok and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 8: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/ADVENTURE-NATURE.jpg",
    "destinationTitle": "ADVENTURE NATURE",
    "location": "Okhrey, Varsey, Rinchenpong",
    "duration": "6 Days/5 Nights",
    "destinationDescription": "An adventurous journey through Okhrey, Varsey, and Rinchenpong, featuring trekking, wildlife, and stunning landscapes.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Okhrey",
        "description": "Arrive at NJP and transfer to Okhrey. Overnight stay at Okhrey."
      },
      {
        "day": "Day 2: Trek to Varsey",
        "description": "Hike to Varsey and explore the rhododendron sanctuary. Overnight stay at Varsey."
      },
      {
        "day": "Day 3: Explore Varsey",
        "description": "Spend the day exploring Varsey and its surroundings. Overnight stay at Varsey."
      },
      {
        "day": "Day 4: Transfer to Rinchenpong",
        "description": "Drive to Rinchenpong and visit Resum Monastery. Overnight stay at Rinchenpong."
      },
      {
        "day": "Day 5: Rinchenpong Sightseeing",
        "description": "Visit Lepcha Heritage House and enjoy a nature walk. Overnight stay at Rinchenpong."
      },
      {
        "day": "Day 6: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/EASTERN-HIMALAYAN-THREE-JEWELS.jpg",
    "destinationTitle": "EASTERN HIMALAYAN THREE JEWELS",
    "location": "Gangtok, Pelling, Darjeeling",
    "duration": "8 Days/7 Nights",
    "destinationDescription": "A journey through the three jewels of the Eastern Himalayas: Gangtok, Pelling, and Darjeeling, featuring monasteries, tea gardens, and stunning views.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Transfer to Pelling",
        "description": "Drive to Pelling via Namchi and visit Temi Tea Garden. Overnight stay at Pelling."
      },
      {
        "day": "Day 4: Pelling Sightseeing",
        "description": "Visit Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 5: Transfer to Darjeeling",
        "description": "Drive to Darjeeling and relax. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 6: Darjeeling Sightseeing",
        "description": "Visit Tiger Hill, Ghoom Monastery, and tea gardens. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 7: Darjeeling Local Sightseeing",
        "description": "Visit Himalayan Mountaineering Institute and Japanese Temple. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 8: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/MYSTICAL-WONDERLAND.jpg",
    "destinationTitle": "MYSTICAL WONDERLAND",
    "location": "Dzongu, Lachung, Gangtok",
    "duration": "7 Days/6 Nights",
    "destinationDescription": "A mystical journey through Dzongu, Lachung, and Gangtok, featuring hot springs, monasteries, and stunning landscapes.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Transfer to Dzongu",
        "description": "Drive to Dzongu and explore the valley. Overnight stay at Dzongu."
      },
      {
        "day": "Day 3: Dzongu Sightseeing",
        "description": "Visit waterfalls and hot springs in Dzongu. Overnight stay at Dzongu."
      },
      {
        "day": "Day 4: Transfer to Lachung",
        "description": "Drive to Lachung and visit Nyingmapa Monastery. Overnight stay at Lachung."
      },
      {
        "day": "Day 5: Yumthang Valley Excursion",
        "description": "Explore Yumthang Valley and hot springs. Return to Gangtok. Overnight stay at Gangtok."
      },
      {
        "day": "Day 6: Gangtok Sightseeing",
        "description": "Visit Tashi View Point and Ranka Monastery. Overnight stay at Gangtok."
      },
      {
        "day": "Day 7: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/EASTERN-MISTTREE.jpg",
    "destinationTitle": "EASTERN MISTTREE",
    "location": "Gangtok, Darjeeling",
    "duration": "7 Days/6 Nights",
    "destinationDescription": "A serene journey through Gangtok and Darjeeling, featuring tea gardens, monasteries, and stunning views of the Himalayas.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Gangtok Sightseeing",
        "description": "Visit Rumtek Monastery, Do Drul Chorten, and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Transfer to Darjeeling",
        "description": "Drive to Darjeeling and relax. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 5: Darjeeling Sightseeing",
        "description": "Visit Tiger Hill, Ghoom Monastery, and tea gardens. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 6: Darjeeling Local Sightseeing",
        "description": "Visit Himalayan Mountaineering Institute and Japanese Temple. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 7: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/SPENDID-HILLS.png",
    "destinationTitle": "SPENDID HILLS",
    "location": "Gangtok, Lachung, Darjeeling",
    "duration": "6 Days/5 Nights",
    "destinationDescription": "A splendid journey through Gangtok, Lachung, and Darjeeling, featuring stunning valleys, monasteries, and tea gardens.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Transfer to Lachung",
        "description": "Drive to Lachung via Singhik View Point and Seven Sisters Waterfalls. Overnight stay at Lachung."
      },
      {
        "day": "Day 3: Yumthang Valley Excursion",
        "description": "Explore Yumthang Valley and hot springs. Return to Gangtok. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Transfer to Darjeeling",
        "description": "Drive to Darjeeling and relax. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 5: Darjeeling Sightseeing",
        "description": "Visit Tiger Hill, Ghoom Monastery, and tea gardens. Overnight stay at Darjeeling."
      },
      {
        "day": "Day 6: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/RENDEZVOUS-SIKKIM.jpg",
    "destinationTitle": "RENDEZVOUS SIKKIM",
    "location": "Gangtok, Lachung, Pelling",
    "duration": "8 Days/7 Nights",
    "destinationDescription": "A rendezvous with the beauty of Sikkim, covering Gangtok, Lachung, and Pelling, featuring stunning lakes, valleys, and monasteries.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Transfer to Lachung",
        "description": "Drive to Lachung via Singhik View Point and Seven Sisters Waterfalls. Overnight stay at Lachung."
      },
      {
        "day": "Day 4: Yumthang Valley Excursion",
        "description": "Explore Yumthang Valley and hot springs. Return to Gangtok. Overnight stay at Gangtok."
      },
      {
        "day": "Day 5: Transfer to Pelling",
        "description": "Drive to Pelling and relax. Overnight stay at Pelling."
      },
      {
        "day": "Day 6: Pelling Sightseeing",
        "description": "Visit Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 7: Transfer to Gangtok",
        "description": "Drive back to Gangtok and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 8: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  },
  {
    "destinationImage": "assets/images/featured-destination/ENERGY-OF-EAST-WEST-HIMALAYA.jfif",
    "destinationTitle": "ENERGY OF EAST WEST HIMALAYA",
    "location": "Gangtok, Pelling",
    "duration": "6 Days/5 Nights",
    "destinationDescription": "Experience the energy of the East and West Himalayas with visits to Gangtok and Pelling, featuring monasteries, waterfalls, and stunning views.",
    "touritinerary": [
      {
        "day": "Day 1: Arrival in Gangtok",
        "description": "Arrive at NJP and transfer to Gangtok. Check into the hotel and relax. Overnight stay at Gangtok."
      },
      {
        "day": "Day 2: Gangtok Sightseeing",
        "description": "Visit Rumtek Monastery, Do Drul Chorten, and Banjhakri Falls. Overnight stay at Gangtok."
      },
      {
        "day": "Day 3: Tsomgo Lake & Nathula Pass",
        "description": "Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok."
      },
      {
        "day": "Day 4: Transfer to Pelling",
        "description": "Drive to Pelling and relax. Overnight stay at Pelling."
      },
      {
        "day": "Day 5: Pelling Sightseeing",
        "description": "Visit Darap Valley, Rimbi Waterfalls, and Pemayangtse Monastery. Overnight stay at Pelling."
      },
      {
        "day": "Day 6: Departure",
        "description": "After breakfast, transfer back to NJP for departure."
      }
    ],
    "including": ["Hotel stays", "Sightseeing", "Transport"],
    "exclusion": ["Entry fees", "Personal expenses", "Airfare"]
  }
];
  
  
  ngAfterViewInit(): void {
    const owl = $('.featured-destination');
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
  
    // console.log("Owl Carousel initialized:", owl);
  
    // Manually trigger previous and next to ensure they work
    $('.custom-nav .owl-prev').click(function () {
      console.log("Prev clicked");
      owl.trigger('prev.owl.carousel');
    });
  
    $('.custom-nav .owl-next').click(function () {
      console.log("Next clicked");
      owl.trigger('next.owl.carousel');
    });
  }
  

  redirectToItinerary(destination: any) {
    // Navigate to itinerary-details component with specific data
    console.log(destination);

    this.router.navigate(['/itinerary'], { state: { data: destination } });
  }

}
