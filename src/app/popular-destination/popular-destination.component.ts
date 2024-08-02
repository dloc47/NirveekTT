import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-popular-destination',
  templateUrl: './popular-destination.component.html',
  styleUrls: ['./popular-destination.component.css'],
})
export class PopularDestinationComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}
  // popularDestination: any = this.itineraryService.popularDestination;
  // popularDestination: any = [
  //   {
  //     destinationImage: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "Tsomgu",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   },
  //   {
  //     destinationImage: "https://www.tripsavvy.com/thmb/58A3iO4pNLWV-yojm0QbsrmurbM=/2121x1414/filters:fill(auto,1)/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "East Sikkim",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   },
  //   {
  //     destinationImage: "https://1.bp.blogspot.com/-bSHlkhZGU2c/Vry_ziFJFhI/AAAAAAAAISA/JZqhGw5_xyc/s1600/Zuluk.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "Zuluk",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   },
  //   {
  //     destinationImage: "https://www.sikkimtourismindia.com/blog/wp-content/uploads/2020/04/Sikkim-tour-01.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "Buddha Park",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   },
  //   {
  //     destinationImage: "https://www.alightindia.com/CDN/Content/Images/PostImages/ORIGINAL/sk9--6cbecf.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "Geyzing",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   },
  //   {
  //     destinationImage: "https://www.wtravelmagazine.com/wp-content/uploads/2020/09/30.113.12-Stunning-landscapes-at-Gurudongmar-Lake-North-Sikkim-image-by-Sudip-Ray.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "Nathula Border",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   },
  //   {
  //     destinationImage: "https://wallpapercave.com/wp/wp6560045.jpg",
  //     duration: "3 Days, 4 Nights",
  //     destinationTitle: "Lachung",
  //     destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
  //     touritinerary: [
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  //       },
  //       {
  //         day: "Arrival Kathmandu & transfer to Pokhra",
  //         description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  //       }
  //     ],
  //     including: [
  //       "Accommodation as per itinerary.",
  //       "All transfers & sight seeings as per itinerary.",
  //       "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
  //       "A dedicated Tour Coordinator for the entire trip."
  //     ],
  //     exclusion: [
  //       "Any other services or meals which are not mentioned in the above “Includes” section.",
  //       "Expense of personal nature such as tips, laundry, telephones, beverages etc",
  //       "Entry fee for all monuments and places of interest if any",
  //       "Airfares and Train ticket charges if any",
  //       "Any other items not mentioned in ‘Cost Includes’"
  //     ]
  //   }
  // ];

  popularDestination: any = [
    {
      destinationImage:
        'https://farm5.staticflickr.com/4582/37768566655_a2e81d1efc_h.jpg',
      duration: '3 Nights, 4 Days',
      destinationTitle: 'Gangtok Tour',
      destinationDescription:
        'Experience the best of Gangtok with our 4-day tour package. Begin with a scenic transfer from N.J.P to Gangtok. Enjoy a full day of sightseeing, including Rumtek Monastery, Drul Chorten, Tibetology, Ropeway, and more. Explore Tsomgo Lake, Baba Mandir, and Nathula Pass, and immerse yourself in the beauty of the Indo-China border region. Conclude your trip with a transfer back to N.J.P or your next destination.',
      touritinerary: [
        {
          day: 'Arrival and Transfer to Gangtok',
          description:
            'Arrive at New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) and transfer to Gangtok, a journey of approximately 130 kilometers taking around 4 hours. Upon arrival, check into your hotel and spend the night in Gangtok.',
        },
        {
          day: 'Full-day Sightseeing in Gangtok',
          description:
            'After breakfast, embark on a full-day sightseeing tour of Gangtok. Start with a visit to the Rumtek Monastery, which is about a 45-minute drive from Gangtok and 24 kilometers away. It is the seat of His Holiness the Gyalwa Karmapa of the Kagyu sect of Buddhism. Continue your exploration with visits to Drul Chorten (Stupa), Namgyal Institute of Tibetology, Gangtok Ropeway, Handicraft and Handloom Centre, the Flower Show Exhibition, Ganesh Tok, the Zoological Park, Tashi View Point, Ranka Monastery, and Banjhakri Falls. Return to your hotel in Gangtok for an overnight stay',
        },
        {
          day: 'Trip to Tsomgo Lake, Baba Mandir, and Nathula Pass',
          description:
            'After breakfast, start your trip to Tsomgo Lake, Baba Mandir, and Nathula Pass. Tsomgo Lake is situated at an altitude of about 12,400 feet, Baba Mandir at 13,200 feet, and Nathula Pass at 14,000 feet near the Indo-China border. After an exciting day of exploration, return to your hotel in Gangtok for an overnight stay.',
        },
        {
          day: 'Departure',
          description:
            'After breakfast, check out from your hotel and transfer back to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) for your onward journey.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'data:image/jpeg;base64,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',
      duration: '4 Nights, 5 Days',
      destinationTitle: 'Gangtok Lachung Tour',
      destinationDescription:
        'Experience the enchanting landscapes of Gangtok and Lachung with our 5-day tour package. Start with a scenic transfer from N.J.P/IXB to Gangtok, where you can explore the city or relax. Visit the breathtaking Tsomgo Lake, Baba Mandir, and Nathula Pass. Journey to Lachung, stopping at picturesque waterfalls and viewpoints along the way. Discover the stunning Yumthang Valley, known as the Valley of Flowers, and interact with locals in Lachung before returning to Gangtok. Conclude your adventure with a transfer back to N.J.P/IXB.',
      touritinerary: [
        {
          day: 'Arrival and Transfer to Gangtok',
          description:
            'Upon arrival at New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB), meet our representative and transfer to Gangtok, approximately a 4-hour drive covering about 130 kilometers. On arrival, check in to your hotel. You can either enjoy a half-day sightseeing tour of Gangtok or spend the rest of the day at leisure. Overnight stay at the hotel in Gangtok.',
        },
        {
          day: 'Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass',
          description:
            'After breakfast, embark on a trip to Tsomgo Lake, situated at an altitude of 12,400 feet. Continue to Baba Mandir at 13,200 feet and Nathula Pass at 14,000 feet near the Indo-China border. Return to Gangtok in the evening for an overnight stay at your hotel.',
        },
        {
          day: 'Gangtok to Lachung',
          description:
            'After breakfast, pick up at 10:00 AM from your hotel in Gangtok and drive to Lachung, a 6-hour journey covering approximately 117 kilometers. Lachung is situated at an altitude of 8,610 feet. En route, visit Singhik View Point, Seven Sister Waterfalls, and Nag Waterfalls, with a tea break at Chungthang. Arrive in Lachung in the evening, check in to your hotel, and enjoy dinner. Overnight stay at the hotel in Lachung.',
        },
        {
          day: 'Yumthang Valley Excursion and Return to Gangtok',
          description:
            'Early morning, after breakfast, drive to Yumthang Valley, known as the Valley of Flowers, at an altitude of 11,800 feet. Yumthang is the summer grazing ground for yaks and the winter playground for yetis. On the way back, visit the hot springs, believed to have medicinal properties. Return to the hotel for lunch. In the afternoon, spend time interacting with the local people and visit Lachung Monastery, built in 1880 and following the Nyingmapa sect of Buddhism. Later, transfer back to Gangtok. Overnight stay at the hotel in Gangtok.',
        },
        {
          day: 'Departure',
          description:
            'After breakfast, check out from your hotel and transfer back to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) for your onward journey. Tour ends with beautiful memories of Gangtok and Lachung.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/96/a1/3c/nathang-valley.jpg?w=400&h=-1&s=1',
      duration: '3 Nights, 4 Days',
      destinationTitle: 'Silk Route',
      destinationDescription:
        'Explore the mesmerizing Silk Route with this 4-day tour package. Discover the scenic beauty of Lingtam and its surrounding attractions, including Aritar/Lampokhari Lake. Journey through Zuluk, stopping at stunning waterfalls and viewpoints, and experience the breathtaking landscapes along the Silk Route. Conclude your adventure with a visit to Gangtok, including a trip to Tsangu Lake and Baba Mandir, before heading back to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB).',
      touritinerary: [
        {
          day: 'Arrival and Transfer to Lingtam',
          description:
            'Welcome to your adventure! Arrive at New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) and transfer to Lingtam, a scenic journey of approximately 5 hours. En route, visit the charming locales of Love Dara, Rongali Bazar, Aritar Gompha, and Ari Dak Bungalow. Enjoy a visit to the renowned Aritar/Lampokhari Lake. Spend the evening exploring the local area and acclimating to the altitude. Overnight stay in Lingtam.',
        },
        {
          day: 'Lingtam to Zuluk',
          description:
            'After breakfast, drive from Lingtam to Zuluk, with stops at Padamchin, Kuekhola Falls, and Kalikhola Waterfalls. Arrive in Zuluk and take in the stunning sunset at Balasur Sunset Point. Enjoy the serene atmosphere of this high-altitude village. Overnight stay in Zuluk.',
        },
        {
          day: 'Zuluk to Gangtok',
          description:
            'After breakfast, start your journey to Gangtok. Visit key attractions along the way, including the Sunrise Point, the Silk Route trail, Thambi View Point, Laxmi Chowk, Nathang, Tulka Baba Mandir, and Tukla Valley. Continue to Kupup for an excursion to Tsangu Lake and Baba Mandir. Depending on weather conditions and permit availability, a Nathula Pass tour can be arranged at an additional cost. Return to Gangtok in the evening for an overnight stay.',
        },
        {
          day: 'Departure',
          description:
            'After breakfast at the hotel, pack your bags and check out. Drive to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) for your onward journey.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://siliguritourism.com/wp-content/uploads/2024/01/Darjeeling-West-Bengal.jpg',
      duration: '3 Nights, 4 Days',
      destinationTitle: 'Darjeeling Tour',
      destinationDescription:
        'Experience the charm of Darjeeling with this delightful 4-day tour. Discover the picturesque beauty of the Himalayas, including a breathtaking sunrise at Tiger Hill and stunning views of Mt. Khangchendzonga. Explore key attractions such as the Himalayan Mountaineering Institute, P.N. Zoological Park, and the serene Mirik Lake. Enjoy local highlights including tea gardens, monasteries, and the vibrant Rock Garden. Conclude your journey with a transfer back to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB).',
      touritinerary: [
        {
          day: 'Arrival and Transfer to Darjeeling',
          description:
            'Arrive at New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) and transfer to Darjeeling, a journey of approximately 90 kilometers taking around 3 hours. Upon arrival, check into your hotel and enjoy the rest of the day at leisure. Overnight stay in Darjeeling.',
        },
        {
          day: 'Local Sightseeing in Darjeeling',
          description:
            'After breakfast, explore the attractions of Darjeeling. Visit the Himalayan Mountaineering Institute, P.N. Zoological Park, Tenzing Rock, and the Tibetan Refugee Self-Help Center. Enjoy a tour of a tea garden and the Japanese Temple. After lunch, continue your sightseeing with visits to the Rock Garden and Ganga Maya Park. Return to your hotel for an overnight stay.',
        },
        {
          day: 'Sunrise at Tiger Hill and More Sightseeing',
          description:
            "Early in the morning, around 4 AM, drive to Tiger Hill to witness the spectacular sunrise over Mt. Khangchendzonga, the world's third-highest peak at 28,208 feet. On your way back, visit the Ghoom Monastery and Batasia Loop. Explore Senchal Lake, Dhirdham Temple, Dali Monastery, and Aloobari Monastery before heading to Mirik Lake. Return to Darjeeling in the evening for an overnight stay at the hotel.",
        },
        {
          day: 'Departure',
          description:
            'After breakfast, check out from your hotel and transfer back to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) for your onward journey.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://www.hlimg.com/images/things2do/738X538/48_1523009794t.jpg',
      duration: '4 Nights, 5 Days',
      destinationTitle: 'Varsey Tour',
      destinationDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.',
      touritinerary: [
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://static2.tripoto.com/media/filter/tst/img/1983524/Image/1663962346_123082784_3966304783397951_6857343328191820186_o_1_1170x614.jpg.webp',
      duration: '5 Nights, 6 Days',
      destinationTitle: 'Gangtok Pelling Tour',
      destinationDescription:
        'Explore the mesmerizing beauty of Sikkim with this 6-day tour. Discover the vibrant city of Gangtok, including its monasteries, waterfalls, and scenic spots. Enjoy a thrilling excursion to Tsomgo Lake and Baba Mandir, with an optional visit to Nathula Pass. Continue your journey to Pelling, visiting key attractions like the Sky Walk, Kanchenjunga Waterfalls, and Pemayangtse Monastery. Conclude your adventure with a transfer back to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB).',
      touritinerary: [
        {
          day: 'Arrival at Gangtok',
          description:
            'Arrive at New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) and transfer to Gangtok, a scenic journey of approximately 127 kilometers taking around 5 hours. Upon arrival, check into your hotel and relax. In the evening, explore the vibrant M.G. Marg area. Overnight stay in Gangtok.',
        },
        {
          day: 'Gangtok City Tour',
          description:
            'After breakfast, embark on a full-day city tour of Gangtok. At an altitude of 5,500 feet, Gangtok offers stunning monasteries and landscapes. Visit Ranka Monastery, Banjhakri Falls, the Ropeway at Deorali, Chorten Stupa, Namgyal Institute of Tibetology, the Flower Show, Handicraft Centre, Gungzang Monastery, Tashi View Point, Ganesh Tok, and Hunuman Tok. Return to your hotel in Gangtok for an overnight stay.',
        },
        {
          day: 'Excursion to Tsomgo Lake and Baba Mandir',
          description:
            'After breakfast, drive to Tsomgo Lake, situated at an altitude of 12,000 feet, a high-altitude alpine lake near the Indo-China border. Enjoy snow activities and a Yak ride. Proceed to the iconic Baba Harbhajan Singh Mandir. An optional tour to Nathula Pass (14,000 feet) on the China border can be arranged with advance request and an additional cost, excluding Mondays and Tuesdays. Overnight stay in Gangtok.',
        },
        {
          day: 'Gangtok to Pelling via Namchi and Ravangla',
          description:
            'Check out from Gangtok and drive to Pelling in West Sikkim, located at an altitude of 7,175 feet. En route, visit Namchi with its Chardham, Samdruptse, Sai Mandir, Temi Tea Garden, and Buddha Park. Enjoy the scenic beauty of the Rangeet River Valley. Upon arrival in Pelling, check into your hotel. Overnight stay in Pelling.',
        },
        {
          day: 'Sightseeing in Pelling',
          description:
            'After breakfast, explore Pelling with visits to the Sky Walk, Kanchenjunga Waterfalls, Kacheoparli Lake, Pemayangtse Monastery, and Rabdentse Ruins. Return to your hotel for an overnight stay in Pelling.',
        },
        {
          day: 'Departure',
          description:
            'After breakfast, check out from your hotel and transfer to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) for your onward journey.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20221210_BLP513.jpg',
      duration: '7 Nights, 8 Days',
      destinationTitle: 'Gangtok Pelling Dajeeling Tour',
      destinationDescription:
        "Embark on a memorable journey through the enchanting landscapes of Sikkim and Darjeeling. Start your adventure in Gangtok, where you'll explore iconic sites such as Tsomgo Lake, Baba Mandir, and Nathula Pass. Discover the serene beauty of Namchi with its Temi Tea Garden and the grand Samdrupste statue. Travel to Pelling to witness stunning natural wonders including Darap Valley, Kanchenjunga Falls, and Khacheopalri Lake. Conclude your trip in Darjeeling, marveling at the sunrise over Mt. Khangchendzonga, and visiting attractions like the Ghoom Monastery and Mirik Lake. Experience the charm of these hill stations and create lasting memories.",
      touritinerary: [
        {
          day: 'Arrival and Transfer to Gangtok',
          description:
            'Arrive at New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) and transfer to Gangtok, a journey of approximately 130 kilometers taking around 4 hours. Upon arrival, check into your hotel and either embark on a half-day city tour of Gangtok or enjoy leisure time. Overnight stay at your hotel in Gangtok.',
        },
        {
          day: 'Excursion to Tsomgo Lake, Baba Mandir, and Nathula Pass',
          description:
            'After breakfast, set out for a day trip to Tsomgo Lake, Baba Mandir, and Nathula Pass. Explore Tsomgo Lake, situated at 12,400 feet, and visit Baba Mandir at 13,200 feet, before reaching Nathula Pass at 14,000 feet, near the Indo-China border. Return to Gangtok for an overnight stay at the hotel.',
        },
        {
          day: 'Gangtok to Namchi',
          description:
            'Depart Gangtok and drive to Namchi (78 km / 3 hrs), visiting attractions along the way. Explore Temi Tea Garden, Samdrupste (a 135 ft statue of Guru Padmasambhava), and Solophok Chardham (a sacred Hindu pilgrimage site). After a day of sightseeing, return to Gangtok for an overnight stay.',
        },
        {
          day: 'Gangtok to Pelling via Ravangla',
          description:
            'Drive from Gangtok to Pelling, with a visit to Ravangla on the way. Discover the Buddha Park, Maenam Hill, Tendong Hill, Ralang Monastery, Pephu Cave, and Yangyang Monastery. After lunch, continue to Pelling and check into your hotel for an overnight stay.',
        },
        {
          day: 'Pelling Sightseeing',
          description:
            'Begin your day with a visit to Darap Valley, Rimbi Waterfalls, Rock Garden, Kanchenjunga Falls, and Khacheopalri Lake. Return to your hotel for lunch, and then explore Pemayangtse Monastery, Samg Choling Monastery, Sinshore Bridge (the highest bridge in Sikkim), Rabdentse Ruins, and Rabdentse View Point. Overnight stay in Pelling.',
        },
        {
          day: 'Pelling to Darjeeling',
          description:
            'Drive from Pelling to Darjeeling (118 km / 4 hrs). Upon arrival, check into your hotel and spend the evening relaxing in this charming hill station. Overnight stay in Darjeeling.',
        },
        {
          day: 'Darjeeling Sightseeing',
          description:
            'Early in the morning, visit Tiger Hill to witness the breathtaking sunrise over Mt. Khangchendzonga (28,208 ft), the world’s third-highest peak. On your return, explore Ghoom Monastery, Batasia Loop, and Senchal Lake. After breakfast, visit Dhirdham Temple, Dali Monastery, Aloobari Monastery, and Mirik Lake. Return to your Darjeeling hotel for an overnight stay.',
        },
        {
          day: 'Departure',
          description:
            'After breakfast, check out from your hotel and transfer to New Jalpaiguri (N.J.P) or Bagdogra Airport (IXB) for your onward journey. Tour concludes with cherished memories.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://kanchenjungaholidays.com/images/destination/sikkim/west-sikkim/uttarey-main/uttarey3.jpg',
      duration: '3 Nights, 4 Days',
      destinationTitle: 'Uttarey Tour',
      destinationDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.',
      touritinerary: [
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage:
        'https://static2.tripoto.com/media/filter/tst/img/413392/TripDocument/1548765524_1548765295327.jpg',
      duration: '3 Nights, 4 Days',
      destinationTitle: 'Dzongu Tour',
      destinationDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.',
      touritinerary: [
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
    {
      destinationImage: 'https://static.toiimg.com/photo/53909065.cms',
      duration: '11 Nights, 12 Days',
      destinationTitle: 'Sikkim Darjeeling Kalimpong',
      destinationDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.',
      touritinerary: [
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        },
        {
          day: 'Arrival Kathmandu & transfer to Pokhra',
          description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        },
      ],
      including: [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.',
        'A dedicated Tour Coordinator for the entire trip.',
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the above “Includes” section.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc',
        'Entry fee for all monuments and places of interest if any',
        'Airfares and Train ticket charges if any',
        'Any other items not mentioned in ‘Cost Includes’',
      ],
    },
  ];

  ngOnInit() {}
  ngAfterViewInit(): void {
    $('.popular-destination').owlCarousel({
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
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        800: {
          items: 3,
        },
        // ,
        // 1200: {
        //   items: 4
        // }
        //   },
        //   1500:{
        //       items:6
        //   }
      },
    });

    // // Event handling for custom navigation buttons
    // $('.prev-btn').click(function () {
    //   $('.owl-carousel').trigger('prev.owl.carousel');
    // });

    // $('.next-btn').click(function () {
    //   $('.owl-carousel').trigger('next.owl.carousel');
    // });
  }

  // gotoItinerary(event: any) {
  //   console.log(event);

  //   this.router.navigate([`/itinerary`],
  //     {
  //       queryParams:
  //       {
  //         // test:"1",
  //         // destinationDescription: event.destinationDescription,
  //         // destinationImage: event.destinationImage,
  //         // destinationTitle: event.destinationTitle,
  //         // duration: event.duration,
  //         // touritinerary: JSON.stringify(event.touritinerary),
  //         // including: event.including,
  //         // exclusion: event.exclusion
  //         destinationId: event.destinationId
  //       }
  //     }
  //   );
  // }

  redirectToItinerary(destination: any) {
    // Navigate to itinerary-details component with specific data
    console.log(destination);

    this.router.navigate(['/itinerary'], { state: { data: destination } });
  }
}
