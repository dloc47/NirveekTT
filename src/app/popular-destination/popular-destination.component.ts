import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
declare var $: any;

interface Destination {
  destinationImage: string;
  duration: string;
  destinationTitle: string;
  destinationDescription: string;
  touritinerary: TourDay[];
  including: string[];
  exclusion: string[];
}

interface TourDay {
  day: string;
  description: string;
}

@Component({
  selector: 'app-popular-destination',
  templateUrl: './popular-destination.component.html',
  styleUrls: ['./popular-destination.component.css'],
})
export class PopularDestinationComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  popularDestination: Destination[] = [
    {
      destinationImage:
        'assets/images/popular-destination/mg-marg.jpg',
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
        'Sightseeing as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the Inclusions.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in Inclusions.'
      ],
    },
    {
      destinationImage:
      'assets/images/popular-destination/lachung.jpg',
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
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the Inclusions.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in Inclusions.'
      ],
    },
    {
      destinationImage:
        'assets/images/popular-destination/nathang-valley.jpg',
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
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the Inclusions.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in Inclusions.'
      ],
    },
    {
      destinationImage:
        'assets/images/popular-destination/Darjeeling-West-Bengal.jpg',
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
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the Inclusions.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in Inclusions.'
      ],
    },
    {
      destinationImage:
        'assets/images/popular-destination/pelling-sky-walk.jpg',
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
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the Inclusions.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in Inclusions.'
      ],
    },
    {
      destinationImage:
        'assets/images/popular-destination/darjeeling-tea-garden.jpg',
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
            'Early in the morning, visit Tiger Hill to witness the breathtaking sunrise over Mt. Khangchendzonga (28208 ft), the world\'s third-highest peak. On your return, explore Ghoom Monastery, Batasia Loop, and Senchal Lake. After breakfast, visit Dhirdham Temple, Dali Monastery, Aloobari Monastery, and Mirik Lake. Return to your Darjeeling hotel for an overnight stay.',
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
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      exclusion: [
        'Any other services or meals which are not mentioned in the Inclusions.',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in Inclusions.'
      ],
    },
  ];

  ngOnInit() {
    // Restore scroll position when navigating back
    if (window.history.state?.navigationId > 1) {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        const position = JSON.parse(savedPosition);
        setTimeout(() => {
          this.viewportScroller.scrollToPosition(position);
        }, 0);
      }
    }
  }
  ngAfterViewInit(): void {
    $('.popular-destination').owlCarousel({
      loop: true,
      margin: 24,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        640: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });

    // Custom navigation
    $('.custom-next-btn').click(() => {
      $('.popular-destination').trigger('next.owl.carousel');
    });

    $('.custom-prev-btn').click(() => {
      $('.popular-destination').trigger('prev.owl.carousel');
    });
  }

  redirectToItinerary(destination: Destination): void {
    // Store current scroll position
    const position = this.viewportScroller.getScrollPosition();
    sessionStorage.setItem('scrollPosition', JSON.stringify(position));

    this.router.navigate(['/itinerary'], { state: { data: destination } });
  }
}
