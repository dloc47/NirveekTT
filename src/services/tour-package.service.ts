import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourPackageService {
  private tourPackages = [
    {
      "destinationImage": "assets/images/featured-destination/QUEEN-OF-HILLS.jpg",
      "destinationTitle": "QUEEN OF HILLS",
      "location": "Darjeeling",
      "duration": "4 Days/3 Nights",
      "destinationDescription": "Discover the enchanting beauty of Darjeeling, fondly known as the Queen of Hills, on this carefully crafted 4-day tour. Wake up to misty mornings with panoramic views of the Himalayas, explore century-old colonial architecture, and wander through lush tea gardens that produce world-famous Darjeeling tea. Experience the spiritual tranquility of ancient monasteries, witness a spectacular sunrise over Mount Kanchenjunga from Tiger Hill, and immerse yourself in the unique blend of Bengali, Nepali, and Tibetan cultures. Perfect for both nature enthusiasts and cultural explorers, this tour offers an authentic glimpse into the heart of India's most celebrated hill station.",
      "touritinerary": [
        {
          "day": "Day 1: Arrival and Welcome to Darjeeling",
          "description": "Begin your highland adventure with a scenic drive from NJP/IXB to Darjeeling (approximately 3 hours). As you ascend through winding roads and tea plantations, witness the dramatic change in landscape and climate. Upon arrival, check into your comfortable hotel and spend the evening acclimatizing to the altitude. Take a leisurely stroll along the historic Mall Road, experiencing the colonial charm and vibrant local culture. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 2: Heritage and Cultural Exploration",
          "description": "Start your day with a visit to the prestigious Himalayan Mountaineering Institute, where legendary mountaineers trained for their Everest expeditions. Explore the adjacent Padmaja Naidu Himalayan Zoological Park, home to rare Himalayan species including the Red Panda. Visit the Tibetan Refugee Self-Help Center to witness traditional carpet weaving and handicrafts. After lunch, tour a historic tea estate to learn about the tea-making process and sample fresh Darjeeling tea. End your day at the serene Japanese Peace Pagoda, offering panoramic views of the sunset over the Himalayas. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 3: Sunrise and Spiritual Journey",
          "description": "Early morning drive to Tiger Hill (2,590 meters) to witness a magnificent sunrise over the Himalayas, including views of Mount Kanchenjunga and Mount Everest on clear days. Visit the historic Ghoom Monastery, the oldest Tibetan monastery in the area, known for its 15-foot-high Buddha statue. Stop at Batasia Loop, a marvel of railway engineering offering 360-degree views of Darjeeling's landscape. After lunch, explore Senchal Lake and spend the afternoon at your leisure, perhaps trying local delicacies or shopping for traditional handicrafts. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 4: Farewell to the Hills",
          "description": "After a leisurely breakfast, take one last walk through the misty mountains. Depending on your departure time, visit the local markets for some last-minute shopping or relax at a café enjoying Darjeeling's famous tea. Transfer to NJP/IXB for your onward journey, carrying memories of your highland adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/SPLENDER-HIMALAYA.jpg",
      "destinationTitle": "SPLENDER HIMALAYA",
      "location": "Gangtok",
      "duration": "4 Days/3 Nights",
      "destinationDescription": "Embark on a captivating journey through Gangtok, the capital city of Sikkim, where ancient Buddhist traditions meet modern Himalayan culture. This 4-day adventure takes you through magnificent monasteries, sacred temples, and panoramic viewpoints that showcase the majestic Kanchenjunga range. Experience the unique blend of traditional Sikkimese architecture, vibrant local markets, and the natural splendor of the Eastern Himalayas. From the mystical Rumtek Monastery to the high-altitude Tsomgo Lake, this tour offers a perfect balance of spiritual enlightenment, cultural immersion, and natural beauty.",
      "touritinerary": [
        {
          "day": "Day 1: Welcome to the Himalayan Capital",
          "description": "Your journey begins with a scenic drive from NJP to Gangtok (approximately 4 hours), ascending through the beautiful Teesta Valley. Upon reaching Gangtok, check into your hotel and refresh. In the evening, explore the vibrant MG Marg, Gangtok's heart and soul, where you can experience local culture, try traditional Sikkimese cuisine, and shop for authentic handicrafts. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Spiritual and Cultural Discovery",
          "description": "After breakfast, embark on a cultural tour starting with the magnificent Rumtek Monastery, the largest in Sikkim and a center of Tibetan Buddhism. Visit the Do Drul Chorten, a stunning white stupa surrounded by 108 prayer wheels, and explore the Namgyal Institute of Tibetology to learn about Buddhist philosophy and Himalayan culture. End your day at the serene Banjhakri Falls, set within a landscaped park featuring ethnic Sikkimese architecture and cultural displays. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: High-Altitude Lake and Mountain Pass",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with the seasons. Marvel at the pristine beauty of the lake surrounded by snow-capped mountains. Continue to Baba Mandir, a shrine that holds deep significance for locals and visitors alike. Weather permitting, visit the historic Nathula Pass (14,140 ft), an important Indo-China border trading post offering breathtaking views of the Himalayan range. Return to Gangtok for overnight stay."
        },
        {
          "day": "Day 4: Departure with Memories",
          "description": "Begin your final day with a peaceful morning in Gangtok. Visit the local flower market or take a cable car ride for panoramic views of the city. After checking out, transfer to NJP for your onward journey, taking with you unforgettable memories of Sikkim's cultural capital."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/HIMALAYAN-TRANQUILITY.jpg",
      "destinationTitle": "HIMALAYAN TRANQUILITY",
      "location": "Gangtok, Lachung",
      "duration": "5 Days/4 Nights",
      "destinationDescription": "Immerse yourself in the serene beauty of the Eastern Himalayas with this meticulously crafted 5-day journey through Gangtok and Lachung. Experience the perfect blend of urban culture and pristine wilderness as you traverse from the vibrant capital city of Sikkim to the untouched beauty of North Sikkim. Discover ancient monasteries, high-altitude lakes, and the mesmerizing Yumthang Valley, known as the 'Valley of Flowers'. This tour combines spiritual encounters, cultural experiences, and natural wonders, offering a profound connection with the Himalayan landscape and its rich Buddhist heritage.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to the Himalayas",
          "description": "Begin your Himalayan journey with a scenic drive from NJP to Gangtok (4 hours), witnessing the dramatic transition from plains to mountains along the Teesta River Valley. Upon reaching Gangtok, check into your hotel and acclimatize to the altitude. Evening at leisure to explore MG Marg, the vibrant heart of Gangtok, where you can sample local Sikkimese cuisine and observe the city's modern mountain culture. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: High-Altitude Wonders",
          "description": "After an early breakfast, embark on a journey to Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with the seasons. Marvel at the pristine waters surrounded by snow-capped peaks and spot unique Himalayan wildlife. Continue to the revered Baba Mandir, a shrine that showcases the unique military-cultural heritage of the region. Weather permitting, visit the historic Nathula Pass (14,140 ft), an important Indo-China border trading post offering breathtaking views of the Himalayan range. Return to Gangtok for overnight stay."
        },
        {
          "day": "Day 3: Journey to North Sikkim",
          "description": "Post breakfast, embark on a picturesque journey to Lachung (6-7 hours, 117 km). En route, stop at Singhik Viewpoint for spectacular views of Mount Kanchenjunga, Seven Sisters Waterfalls, and the pristine Teesta River. Visit the confluence of Teesta and Lachen rivers at Chungthang. Arrive in Lachung, a charming village at 8,610 feet, and check into your hotel. Evening free to explore the traditional Lachung village and interact with locals. Enjoy a traditional Sikkimese dinner and overnight stay in Lachung."
        },
        {
          "day": "Day 4: Valley of Flowers Experience",
          "description": "Early morning drive to the magnificent Yumthang Valley (11,800 ft), a paradise of wildflowers, hot springs, and yak herders. Witness the valley's stunning landscape surrounded by snow-capped peaks and rhododendron forests (in bloom from late February to mid-June). Visit the natural hot springs known for their therapeutic properties. After lunch, explore the historic Lachung Monastery, built in 1880, featuring unique Nyingmapa sect architecture and ancient Buddhist artifacts. Return to Gangtok by evening for overnight stay."
        },
        {
          "day": "Day 5: Farewell to the Mountains",
          "description": "After breakfast, take a final stroll through Gangtok's charming streets. Visit the local handicraft center to pick up traditional Sikkimese souvenirs. Depart for NJP with memorable experiences of your Himalayan journey, carrying the tranquility of the mountains in your heart."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/UNSPOILED-HILLS.jpg",
      "destinationTitle": "UNSPOILED HILLS",
      "location": "Kalimpong, Gangtok",
      "duration": "5 Days/4 Nights",
      "destinationDescription": "Embark on an enchanting journey through the unspoiled hills of Kalimpong and Gangtok, where colonial heritage meets Himalayan splendor. This carefully curated 5-day tour takes you through historic colonial buildings, flourishing flower nurseries, and ancient Buddhist monasteries. Experience the unique blend of British, Bhutanese, and Tibetan influences in Kalimpong, followed by the majestic landscapes and spiritual aura of Gangtok. Perfect for those seeking a deeper connection with the lesser-explored gems of the Eastern Himalayas, this tour offers both cultural immersion and natural beauty.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Colonial Heritage",
          "description": "Begin your journey with a scenic drive from NJP to Kalimpong (3 hours), ascending through picturesque hills and valleys. Visit the historic Dr. Graham's Homes, a testament to Scottish missionary heritage, set amidst pine forests. Explore Durpin Dara, offering panoramic views of the Himalayas and the Teesta Valley. Evening walk through the local market, known for its traditional crafts and indigenous art. Overnight stay in Kalimpong."
        },
        {
          "day": "Day 2: Spiritual and Horticultural Discovery",
          "description": "Start your day at the serene Mangal Dham, a beautiful temple complex showcasing Hindu architecture. Visit world-famous flower nurseries, where rare orchids and cacti are cultivated. Afternoon excursion to Delo View Point (2,000 meters) for breathtaking views of Kalimpong town and surrounding hills. Visit the historic Pedong Monastery, learning about its significance in Buddhism. Evening at leisure to explore local cuisine. Overnight stay in Kalimpong."
        },
        {
          "day": "Day 3: Journey to Sikkim's Capital",
          "description": "After breakfast, embark on a scenic drive to Gangtok (3-4 hours), following the mighty Teesta River. Upon arrival, visit the iconic Do Drul Chorten, surrounded by 108 prayer wheels. Explore the Namgyal Institute of Tibetology, housing one of the world's largest collections of Tibetan artifacts. End your day at the enchanting Banjhakri Falls, set within a landscaped cultural park. Overnight stay in Gangtok."
        },
        {
          "day": "Day 4: High-Altitude Adventures",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with seasons. Marvel at the pristine beauty while spotting unique Himalayan wildlife. Visit the revered Baba Mandir, a shrine that holds deep military and cultural significance. Weather permitting, continue to the historic Nathula Pass (14,140 ft), offering spectacular views of the Indo-China border. Return to Gangtok for an evening of local cultural experiences. Overnight stay in Gangtok."
        },
        {
          "day": "Day 5: Farewell to the Hills",
          "description": "Begin your final day with a visit to the local flower market, showcasing Sikkim's rich botanical diversity. Take a cable car ride for panoramic views of Gangtok city (optional). Time for last-minute shopping at MG Marg before departing for NJP, carrying memories of your unspoiled hill adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/LOST-OF-KINGDOM.jpg",
      "destinationTitle": "LOST OF KINGDOM",
      "location": "Gangtok, Pelling",
      "duration": "5 Days/4 Nights",
      "destinationDescription": "Journey through the ancient kingdom of Sikkim on this immersive 5-day tour of Gangtok and Pelling. Discover the rich heritage of Sikkim's former monarchy while exploring magnificent monasteries, sacred temples, and historic landmarks. From the bustling capital of Gangtok to the tranquil heights of Pelling, experience the perfect blend of cultural heritage and natural splendor. Visit the iconic Namchi Buddha statue, explore the historic Temi Tea Garden, and witness breathtaking views of Mount Khangchendzonga. This tour offers a unique glimpse into Sikkim's royal past while showcasing its modern charm.",
      "touritinerary": [
        {
          "day": "Day 1: Royal Welcome to Gangtok",
          "description": "Begin your royal journey with a scenic drive from NJP to Gangtok (4 hours). Upon arrival, check into your hotel and refresh. Evening exploration of MG Marg, the heart of Gangtok, where you can experience the modern face of this former kingdom. Visit the Royal Palace area and learn about Sikkim's monarchy. Enjoy traditional Sikkimese cuisine at a local restaurant. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Sacred Lakes and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that holds deep spiritual significance in Sikkimese culture. Visit the revered Baba Mandir, a testament to military valor. Weather permitting, continue to the historic Nathula Pass (14,140 ft), once part of the ancient Silk Route connecting Sikkim to Tibet. Return to Gangtok for an evening of cultural exploration. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: Journey to the Ancient Capital",
          "description": "After breakfast, embark on a journey to Pelling via the historic town of Namchi. Visit the magnificent Namchi Buddha statue and the Samdruptse complex, showcasing Sikkim's Buddhist heritage. En route, stop at the historic Temi Tea Garden, Sikkim's only tea estate dating back to the royal era. Arrive in Pelling by evening, check into your hotel with views of Mount Khangchendzonga. Overnight stay in Pelling."
        },
        {
          "day": "Day 4: Monasteries and Mountain Views",
          "description": "Start your day with a visit to the majestic Pemayangtse Monastery, one of Sikkim's oldest and most significant monasteries. Explore the culturally rich Darap Valley, known for its traditional villages and customs. Visit the spectacular Rimbi Waterfalls and the ruins of Rabdentse, the second capital of the former Kingdom of Sikkim. Evening at leisure to soak in the mountain views. Overnight stay in Pelling."
        },
        {
          "day": "Day 5: Farewell to the Kingdom",
          "description": "After breakfast, take a final morning walk to capture the sunrise over the Himalayas. Visit the local market for traditional handicrafts and souvenirs. Begin your journey back to NJP, carrying memories of Sikkim's royal heritage and natural beauty."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/HIMALAYAN-GOLDEN-TRIANGLE.jpeg",
      "destinationTitle": "HIMALAYAN GOLDEN TRIANGLE",
      "location": "Gangtok, Lachung, Lachen",
      "duration": "6 Days/5 Nights",
      "destinationDescription": "Embark on an extraordinary journey through Sikkim's golden triangle, connecting the cultural hub of Gangtok with the pristine valleys of Lachung and Lachen. This 6-day adventure takes you from ancient monasteries to some of the world's highest lakes, including the legendary Gurudongmar Lake. Experience the diverse landscapes of North Sikkim, from subtropical forests to high-altitude deserts, while discovering remote Buddhist monasteries and traditional Sikkimese villages. Perfect for adventurous souls seeking both spiritual enlightenment and natural wonders in the Eastern Himalayas.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Sikkim's Capital",
          "description": "Begin your Himalayan adventure with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, Gangtok's vibrant heart, where you can sample traditional Sikkimese cuisine and observe the unique blend of traditional and modern mountain culture. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Sacred Waters and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with the seasons. Marvel at the pristine waters while spotting unique Himalayan wildlife including yaks and Brahminy ducks. Visit the revered Baba Mandir, and weather permitting, continue to the historic Nathula Pass (14,140 ft), an important Indo-China border trading post. Return to Gangtok for evening leisure and overnight stay."
        },
        {
          "day": "Day 3: Journey to Lachen",
          "description": "Post breakfast, embark on a scenic journey to Lachen (8,838 ft), stopping at the dramatic Singhik Viewpoint for panoramic views of Mount Kanchenjunga. Visit the Seven Sisters Waterfalls and witness the confluence of rivers at Chungthang. Arrive in Lachen by evening, check into your hotel, and prepare for the next day's high-altitude excursion. Overnight stay in Lachen."
        },
        {
          "day": "Day 4: Gurudongmar Lake Expedition",
          "description": "Early morning departure (4 AM) for Gurudongmar Lake (17,800 ft), one of the world's highest lakes. Witness the spectacular sunrise during your journey through the stark yet beautiful Trans-Himalayan terrain. Spend time at this sacred lake, known for its crystal-clear waters and spiritual significance. After the soul-stirring experience, drive to Lachung (8,610 ft), stopping at scenic points along the way. Evening at leisure to explore Lachung village. Overnight stay in Lachung."
        },
        {
          "day": "Day 5: Valley of Flowers Experience",
          "description": "Morning drive to the mesmerizing Yumthang Valley (11,800 ft), known as Sikkim's 'Valley of Flowers'. Witness the valley's stunning landscape surrounded by snow-capped peaks and rhododendron forests (in bloom from late February to mid-June). Visit the natural hot springs known for their therapeutic properties. After lunch, explore the historic Lachung Monastery, built in 1880. Return to Gangtok by evening for overnight stay."
        },
        {
          "day": "Day 6: Farewell to the Himalayas",
          "description": "After breakfast, take a final stroll through Gangtok's charming streets. Visit the local handicraft center to pick up traditional Sikkimese souvenirs. Depart for NJP with memories of your golden triangle adventure, having experienced the diverse landscapes and cultural heritage of Sikkim."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/MISTTREE-MOUNTAIN.jpg",
      "destinationTitle": "MISTTREE MOUNTAIN",
      "location": "Kalimpong, Gangtok",
      "duration": "6 Days/5 Nights",
      "destinationDescription": "Embark on a mystical journey through the mist-shrouded mountains of Kalimpong and Gangtok. This 6-day adventure combines the colonial charm of Kalimpong with the Buddhist heritage of Gangtok. Explore ancient monasteries, visit exotic flower nurseries, and discover hidden mountain villages. From the pristine forests of Lava and Lolegaon to the sacred heights of Tsomgo Lake, experience the diverse landscapes and rich cultural tapestry of the Eastern Himalayas. Perfect for nature lovers and cultural enthusiasts seeking an authentic mountain experience.",
      "touritinerary": [
        {
          "day": "Day 1: Colonial Heritage of Kalimpong",
          "description": "Begin your journey with a scenic drive from NJP to Kalimpong (3 hours). Visit the historic Dr. Graham's Homes, a testament to Scottish missionary heritage. Explore Durpin Dara hill for panoramic views of the Himalayas and Teesta Valley. Evening visit to the local flower nurseries, famous for their rare orchids and cacti. Overnight stay in Kalimpong."
        },
        {
          "day": "Day 2: Forest Treasures of Lava & Lolegaon",
          "description": "Full-day excursion to the pristine forests of Lava and Lolegaon. Experience the Canopy Walk in Lolegaon offering unique treetop views. Visit the Lava Monastery and explore the Neora Valley National Park periphery. Enjoy a traditional Lepcha lunch and interact with local villagers. Return to Kalimpong for overnight stay."
        },
        {
          "day": "Day 3: Journey to Sikkim's Capital",
          "description": "After breakfast, drive to Gangtok (3-4 hours). En route, visit the sacred Do Drul Chorten, surrounded by 108 prayer wheels. Explore the Namgyal Institute of Tibetology, housing precious Buddhist artifacts. End your day at the enchanting Banjhakri Falls, set within a cultural theme park. Evening free to explore MG Marg. Overnight stay in Gangtok."
        },
        {
          "day": "Day 4: High-Altitude Wonders",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with seasons. Marvel at the pristine beauty while spotting unique Himalayan wildlife. Visit the revered Baba Mandir, and weather permitting, continue to the historic Nathula Pass (14,140 ft). Return to Gangtok for evening leisure and overnight stay."
        },
        {
          "day": "Day 5: Cultural Heritage Tour",
          "description": "Full-day excursion to Namchi and Pelling. Visit the towering statue of Guru Padmasambhava at Samdruptse. Explore the historic Temi Tea Garden, Sikkim's only tea estate. Experience the tranquility of Pelling's monasteries before returning to Gangtok. Evening cultural program and farewell dinner. Overnight stay in Gangtok."
        },
        {
          "day": "Day 6: Mountain Memories",
          "description": "After breakfast, visit the local handicraft center to pick up traditional souvenirs. Take a final cable car ride for panoramic views of Gangtok (optional). Depart for NJP with memories of your misty mountain adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/COOL-KANCHENJUNGA.jpg",
      "destinationTitle": "COOL KANCHENJUNGA",
      "location": "Okhrey, Varsey, Pelling, Tashiding",
      "duration": "7 Days/6 Nights",
      "destinationDescription": "Embark on an extraordinary trek through the pristine wilderness of West Sikkim, where the mighty Kanchenjunga dominates the horizon. This 7-day adventure takes you through the untouched realms of Okhrey, the blooming rhododendron sanctuaries of Varsey, the spiritual haven of Pelling, and the sacred monastery of Tashiding. Experience the raw beauty of Himalayan forests, encounter diverse wildlife, and immerse yourself in the rich Buddhist culture of remote mountain villages. Perfect for adventure seekers and nature enthusiasts looking to explore the less-traveled paths of Sikkim.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to the Wilderness",
          "description": "Begin your journey with a scenic drive from NJP to Okhrey (6-7 hours), ascending through pristine forests and traditional villages. Upon reaching Okhrey (2,150m), check into your homestay and acclimatize to the altitude. Evening walk through the village to observe local lifestyle and traditional architecture. Enjoy a traditional Limboo dinner and cultural interaction with your host family. Overnight stay in Okhrey."
        },
        {
          "day": "Day 2: Trek to Nature's Paradise",
          "description": "After an early breakfast, begin your trek to Varsey (4-5 hours). The trail winds through ancient rhododendron forests and alpine meadows. Witness stunning views of Kanchenjunga and surrounding peaks. Reach Varsey Rhododendron Sanctuary (3,030m) by afternoon. Set up camp or check into the trekkers' hut. Evening exploration of the sanctuary area with a local guide to spot unique Himalayan flora and fauna. Overnight stay in Varsey."
        },
        {
          "day": "Day 3: Varsey Exploration",
          "description": "Full day dedicated to exploring the Varsey Rhododendron Sanctuary. Early morning bird watching session to spot Himalayan Monal and Blood Pheasant. Trek to various viewpoints offering spectacular views of the Kanchenjunga range. Visit high-altitude meadows and sacred lakes. Learn about the diverse ecosystem and conservation efforts. Evening bonfire with local stories and traditional mountain cuisine. Overnight stay in Varsey."
        },
        {
          "day": "Day 4: Journey to Ancient Kingdom",
          "description": "Morning drive to Pelling (5-6 hours) through picturesque mountain roads. En route, visit the historic Pemayangste Monastery, one of Sikkim's oldest monasteries. Arrive in Pelling by afternoon and check into your hotel. Evening visit to the Sangachoeling Monastery, offering panoramic sunset views of the Kanchenjunga range. Overnight stay in Pelling."
        },
        {
          "day": "Day 5: Pelling Heritage Trail",
          "description": "Start your day with a visit to the ancient Rabdentse ruins, the second capital of Sikkim. Explore the culturally rich Darap village, known for its traditional houses and organic farming. Visit the spectacular Rimbi and Kanchenjunga waterfalls. Evening at leisure to explore Pelling town. Overnight stay in Pelling."
        },
        {
          "day": "Day 6: Sacred Tashiding",
          "description": "Drive to Tashiding (2 hours), home to one of Sikkim's most sacred monasteries. Visit the 17th-century Tashiding Monastery, known for its ancient relics and spiritual significance. Participate in evening prayers and meditation session with local monks. Experience the peaceful atmosphere of this holy site. Overnight stay in Tashiding."
        },
        {
          "day": "Day 7: Farewell to the Mountains",
          "description": "Early morning visit to the monastery for sunrise views and blessings. After breakfast, begin your journey back to NJP (5-6 hours), carrying memories of your Himalayan adventure. En route, stop at local markets for traditional handicrafts and organic tea."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/SWEET-MEMORY-OF-KHANCHENJUNGNA.jpg",
      "destinationTitle": "SWEET MEMORY OF KHANCHENJUNGNA",
      "location": "Okhrey, Varsey, Rinchenpong, Pelling, Gangtok",
      "duration": "9 Days/8 Nights",
      "destinationDescription": "Embark on an unforgettable 9-day odyssey through the majestic Khangchendzonga region, where every turn reveals a new facet of Sikkim's natural and cultural heritage. From the pristine wilderness of Okhrey to the spiritual sanctuaries of Gangtok, this comprehensive tour takes you through blooming rhododendron forests, ancient monasteries, and traditional villages. Experience the raw beauty of Varsey's wildlife sanctuary, the cultural richness of Rinchenpong, the historical depths of Pelling, and the vibrant energy of Gangtok. Perfect for those seeking an immersive journey through Sikkim's most diverse landscapes and cultural treasures.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Wilderness",
          "description": "Begin your journey with a scenic drive from NJP to Okhrey (6-7 hours), traversing through pristine forests and traditional villages. Upon reaching Okhrey (2,150m), check into your homestay. Evening exploration of the village, learning about local Limboo culture and traditions. Enjoy traditional dinner with your host family. Overnight stay in Okhrey."
        },
        {
          "day": "Day 2: Rhododendron Paradise",
          "description": "Early morning trek to Varsey (4-5 hours) through ancient rhododendron forests. Witness stunning views of Kanchenjunga and surrounding peaks. Reach Varsey Rhododendron Sanctuary (3,030m) and explore the area with a local naturalist. Evening briefing about the sanctuary's unique ecosystem. Overnight stay in Varsey."
        },
        {
          "day": "Day 3: Wildlife and Nature",
          "description": "Full day dedicated to exploring Varsey Sanctuary. Early morning bird watching session to spot rare Himalayan species. Trek to various viewpoints offering spectacular Kanchenjunga views. Visit high-altitude meadows and sacred lakes. Evening interaction with forest guards about conservation efforts. Overnight stay in Varsey."
        },
        {
          "day": "Day 4: Cultural Heritage",
          "description": "Transfer to Rinchenpong (4-5 hours). Visit the historic Resum Monastery, learning about its significance in Sikkimese Buddhism. Explore local villages and their unique architecture. Evening visit to the Rinchenpong Monastery for sunset views. Cultural program showcasing local traditions. Overnight stay in Rinchenpong."
        },
        {
          "day": "Day 5: Kingdom's Legacy",
          "description": "Drive to Pelling (2 hours), stopping at panoramic viewpoints. Visit the ancient Sanga Choling Monastery, second oldest in Sikkim. Afternoon exploration of Pelling town. Evening visit to a traditional Sikkimese family. Overnight stay in Pelling."
        },
        {
          "day": "Day 6: Monastic Treasures",
          "description": "Full day exploration of Pelling's heritage sites. Visit the majestic Pemayangtse Monastery, learning about its historical importance. Explore Darap Valley's traditional villages and organic farms. Visit Rimbi Waterfalls and Khecheopalri Lake, one of Sikkim's most sacred lakes. Evening at leisure. Overnight stay in Pelling."
        },
        {
          "day": "Day 7: Capital Connection",
          "description": "Scenic drive to Gangtok (5-6 hours). En route, visit Tashiding Monastery and Ravangla Buddha Park. Afternoon arrival in Gangtok. Evening exploration of MG Marg, experiencing the city's vibrant culture. Overnight stay in Gangtok."
        },
        {
          "day": "Day 8: Sacred Heights",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft). Visit the sacred lake and Baba Mandir. Weather permitting, continue to Nathula Pass (14,140 ft). Return to Gangtok for a farewell dinner featuring traditional Sikkimese cuisine. Overnight stay in Gangtok."
        },
        {
          "day": "Day 9: Farewell to the Himalayas",
          "description": "After breakfast, visit the local handicraft center for souvenirs. Take a final cable car ride for panoramic views of Gangtok (optional). Begin your journey back to NJP, carrying memories of your Himalayan adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/TREASURE-OF-SIKKIM.jpg",
      "destinationTitle": "TREASURE OF SIKKIM",
      "location": "Gangtok, Lachen, Lachung",
      "duration": "9 Days/8 Nights",
      "destinationDescription": "Uncover the hidden treasures of Sikkim on this comprehensive 9-day expedition through Gangtok, Lachen, and Lachung. Journey from the cultural richness of the capital to the pristine wilderness of North Sikkim, experiencing ancient monasteries, sacred lakes, and remote valleys. Witness the dramatic landscapes from subtropical forests to high-altitude deserts, including visits to some of the world's highest lakes and most remote Buddhist monasteries. Perfect for adventurous souls seeking to explore both the cultural heritage and natural wonders of this mystical Himalayan state.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Sikkim",
          "description": "Begin your treasure hunt with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, experiencing the vibrant culture and local cuisine. Visit the traditional handicraft center to learn about local artistry. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Cultural Heritage",
          "description": "Start your day with a visit to the magnificent Rumtek Monastery, the largest in Sikkim. Explore the Do Drul Chorten, surrounded by 108 prayer wheels, and learn about Tibetan Buddhism. Visit the serene Banjhakri Falls and the Namgyal Institute of Tibetology. Evening cultural show featuring traditional Sikkimese dances. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: Sacred Lakes and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft). Experience the mystical beauty of this sacred glacial lake that changes colors with seasons. Visit the revered Baba Mandir, and weather permitting, continue to Nathula Pass (14,140 ft). Learn about the historic Silk Route and Indo-China trade relations. Return to Gangtok for evening cultural activities. Overnight stay in Gangtok."
        },
        {
          "day": "Day 4: Journey to Lachen",
          "description": "Post breakfast, embark on a scenic drive to Lachen (8,838 ft), stopping at the dramatic Singhik Viewpoint for panoramic views of Mount Kanchenjunga. Visit the Seven Sisters Waterfalls and witness the confluence of rivers at Chungthang. Evening exploration of Lachen village and interaction with local Lachenpas. Overnight stay in Lachen."
        },
        {
          "day": "Day 5: Gurudongmar Lake Expedition",
          "description": "Pre-dawn departure (4 AM) for Gurudongmar Lake (17,800 ft). Witness the spectacular sunrise during your journey through the Trans-Himalayan terrain. Experience the spiritual aura of one of the world's highest lakes, known for its crystal-clear waters that never completely freeze. Return to Lachen by afternoon. Evening meditation session at the local monastery. Overnight stay in Lachen."
        },
        {
          "day": "Day 6: Transfer to Lachung",
          "description": "Morning drive to Lachung (8,610 ft), stopping at scenic viewpoints. Visit the historic Nyingmapa Monastery, learning about its unique architecture and religious significance. Evening walk through Lachung village, known for its traditional houses and handicrafts. Cultural program featuring local Sikkimese dance. Overnight stay in Lachung."
        },
        {
          "day": "Day 7: Valley of Flowers Experience",
          "description": "Early morning drive to the mesmerizing Yumthang Valley (11,800 ft), known as Sikkim's 'Valley of Flowers'. Explore the valley's diverse flora, including rare Himalayan flowers and medicinal plants. Visit the natural hot springs known for their therapeutic properties. Return to Gangtok with stops at picturesque locations. Farewell dinner with traditional Sikkimese cuisine. Overnight stay in Gangtok."
        },
        {
          "day": "Day 8: Mountain Culture Exploration",
          "description": "Visit Tashi View Point for sunrise views of Kanchenjunga. Explore Ranka Monastery, one of Sikkim's most beautiful monasteries, learning about Tibetan architecture and Buddhist art. Afternoon visit to the Handicraft Center to witness local artisans at work. Evening leisure time at MG Marg. Overnight stay in Gangtok."
        },
        {
          "day": "Day 9: Farewell to the Mountains",
          "description": "After breakfast, final shopping at the local market for traditional handicrafts and organic tea. Visit the Flower Show Exhibition if time permits. Depart for NJP with memories of your Sikkimese adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/ESCOTIC-NORTH-EAST.jpg",
      "destinationTitle": "ESCOTIC NORTH EAST",
      "location": "Darjeeling, Gangtok, Pelling",
      "duration": "8 Days/7 Nights",
      "destinationDescription": "Embark on an exotic journey through the cultural capitals of the Eastern Himalayas. This 8-day adventure weaves through the colonial charm of Darjeeling, the Buddhist heritage of Gangtok, and the historical depths of Pelling. Experience world-famous tea plantations, ancient monasteries, and breathtaking mountain vistas. From sunrise over Kanchenjunga to the mystical lakes of Sikkim, this tour offers a perfect blend of cultural immersion and natural wonders, showcasing the best of India's northeastern frontier.",
      "touritinerary": [
        {
          "day": "Day 1: Colonial Heritage of Darjeeling",
          "description": "Begin your journey with a scenic drive from NJP to Darjeeling (3 hours). Upon reaching the Queen of Hills, check into your heritage hotel. Afternoon visit to the prestigious Himalayan Mountaineering Institute and the famous Happy Valley Tea Estate, learning about tea processing and tasting fresh Darjeeling tea. Evening stroll along Mall Road, experiencing the colonial atmosphere. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 2: Sunrise and Spirituality",
          "description": "Pre-dawn drive to Tiger Hill (2,590m) for a spectacular sunrise over the Himalayas. Visit the historic Ghoom Monastery, the oldest Tibetan monastery in the area. Experience the engineering marvel of Batasia Loop and the Darjeeling Himalayan Railway. Afternoon exploration of local markets and handicraft centers. Evening cultural program showcasing local Nepali and Tibetan performances. Overnight stay in Darjeeling."
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
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/ADVENTURE-NATURE.jpg",
      "destinationTitle": "ADVENTURE NATURE",
      "location": "Okhrey, Varsey, Rinchenpong",
      "duration": "6 Days/5 Nights",
      "destinationDescription": "Embark on an exhilarating adventure through the untamed wilderness of West Sikkim. This 6-day expedition takes you through the pristine forests of Okhrey, the blooming rhododendron sanctuaries of Varsey, and the cultural heritage of Rinchenpong. Experience authentic homestays, trek through ancient forests, spot rare Himalayan wildlife, and immerse yourself in local Lepcha culture. Perfect for nature enthusiasts and adventure seekers looking to explore Sikkim's less-traveled paths while enjoying comfortable accommodations in stunning locations.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Wilderness",
          "description": "Begin your adventure with a scenic drive from NJP to Okhrey (6-7 hours), ascending through pristine forests and traditional villages. Upon reaching Okhrey (2,150m), check into your homestay. Evening village walk to learn about local Limboo culture and traditional architecture. Enjoy home-cooked dinner featuring organic local ingredients. Briefing about the trek ahead. Overnight stay in Okhrey."
        },
        {
          "day": "Day 2: Rhododendron Trail",
          "description": "After early breakfast, begin your trek to Varsey (4-5 hours) through ancient rhododendron forests. The trail offers stunning views of Kanchenjunga and surrounding peaks. Reach Varsey Rhododendron Sanctuary (3,030m) by afternoon. Set up at the forest rest house. Evening guided walk to spot unique Himalayan birds and wildlife. Campfire dinner with local stories. Overnight stay in Varsey."
        },
        {
          "day": "Day 3: Nature's Paradise",
          "description": "Full day dedicated to exploring Varsey Sanctuary. Early morning bird watching session to spot rare Himalayan species including Blood Pheasant and Monal. Trek to various viewpoints offering spectacular views of the Kanchenjunga range. Visit high-altitude meadows and sacred lakes. Learn about local flora and conservation efforts from forest guides. Evening astronomy session (weather permitting). Overnight stay in Varsey."
        },
        {
          "day": "Day 4: Cultural Heritage",
          "description": "Morning drive to Rinchenpong (4-5 hours). Visit the historic Resum Monastery, learning about its significance in Sikkimese Buddhism. Afternoon visit to the Lepcha Heritage Museum to understand the culture of Sikkim's indigenous people. Evening walk through cardamom plantations. Traditional dinner with a local family. Overnight stay in Rinchenpong."
        },
        {
          "day": "Day 5: Living Traditions",
          "description": "Start your day with a visit to the Lepcha Heritage House, learning about traditional architecture and customs. Participate in a cooking demonstration of local cuisine. Afternoon nature walk through the village forest trail, identifying medicinal plants with a local guide. Visit a traditional paper-making workshop. Evening cultural program featuring Lepcha music and dance. Overnight stay in Rinchenpong."
        },
        {
          "day": "Day 6: Farewell to the Hills",
          "description": "Early morning visit to a viewpoint for sunrise over Kanchenjunga. After breakfast, begin your journey back to NJP (5-6 hours). En route, stop at local markets for traditional handicrafts and organic produce. Bid farewell to the mountains with memories of your wilderness adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/EASTERN-HIMALAYAN-THREE-JEWELS.jpg",
      "destinationTitle": "EASTERN HIMALAYAN THREE JEWELS",
      "location": "Gangtok, Pelling, Darjeeling",
      "duration": "8 Days/7 Nights",
      "destinationDescription": "Discover the three crown jewels of the Eastern Himalayas on this meticulously crafted 8-day journey. Experience the spiritual richness of Gangtok, the historical depths of Pelling, and the colonial charm of Darjeeling. From ancient Buddhist monasteries to world-famous tea gardens, from sacred lakes to UNESCO heritage railways, this tour offers a perfect blend of cultural heritage, natural wonders, and colonial history. Ideal for those seeking to experience the diverse facets of the Eastern Himalayas while enjoying comfortable accommodations and stunning mountain views.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Sikkim",
          "description": "Begin your journey with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, experiencing the vibrant culture and local cuisine. Visit the traditional handicraft center. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Sacred Lakes and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with seasons. Visit the revered Baba Mandir, and weather permitting, continue to Nathula Pass (14,140 ft), an important Indo-China border trading post. Return to Gangtok for evening cultural activities. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: Journey to Ancient Kingdom",
          "description": "Drive to Pelling via the historic town of Namchi (5-6 hours). Visit the magnificent Buddha Park and Samdruptse complex. Stop at the historic Temi Tea Garden, Sikkim's only tea estate. Evening arrival in Pelling with views of Mount Khangchendzonga. Overnight stay in Pelling."
        },
        {
          "day": "Day 4: Monastic Heritage",
          "description": "Full day exploration of Pelling's treasures. Visit the ancient Pemayangtse Monastery, learning about its historical importance. Explore the ruins of Rabdentse, Sikkim's second capital. Visit Darap Valley's traditional villages and the spectacular Kanchenjunga Falls. Evening at leisure. Overnight stay in Pelling."
        },
        {
          "day": "Day 5: Queen of Hills",
          "description": "Scenic drive to Darjeeling (4-5 hours). En route, visit the Triveni viewpoint where three rivers meet. Afternoon arrival in Darjeeling. Visit the Padmaja Naidu Himalayan Zoological Park, home to rare Himalayan species. Evening stroll through Chowrasta Mall. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 6: Sunrise and Tea Heritage",
          "description": "Pre-dawn drive to Tiger Hill (2,590m) for a spectacular sunrise over Kanchenjunga. Visit the historic Ghoom Monastery and experience the UNESCO World Heritage Darjeeling Himalayan Railway at Batasia Loop. Afternoon tour of a historic tea estate with tea tasting session. Evening free for shopping. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 7: Colonial Legacy",
          "description": "Visit the Himalayan Mountaineering Institute, learning about legendary Everest expeditions. Explore the Japanese Peace Pagoda and Rock Garden. Afternoon at leisure to explore Darjeeling's colonial architecture and vibrant markets. Evening cultural show featuring local folk dances. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 8: Farewell to the Hills",
          "description": "After breakfast, take a final stroll through the misty mountains. Visit the local markets for tea and handicrafts. Begin your journey back to NJP, carrying memories of your Himalayan adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/MYSTICAL-WONDERLAND.jpg",
      "destinationTitle": "MYSTICAL WONDERLAND",
      "location": "Dzongu, Lachung, Gangtok",
      "duration": "7 Days/6 Nights",
      "destinationDescription": "Embark on a mystical journey through North Sikkim's hidden treasures. This 7-day adventure takes you from the sacred Lepcha reserve of Dzongu to the pristine valleys of Lachung and the cultural hub of Gangtok. Experience authentic homestays in traditional Lepcha villages, discover healing hot springs, and witness the untouched beauty of remote valleys. Perfect for travelers seeking an off-the-beaten-path experience while immersing themselves in the indigenous culture and pristine landscapes of Sikkim.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Sacred Lands",
          "description": "Begin your mystical journey with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude. Evening orientation about Lepcha culture and the sacred lands of Dzongu. Traditional welcome dinner featuring local delicacies. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Journey to Dzongu",
          "description": "After breakfast, drive to Dzongu (4-5 hours), the protected reserve of the Lepcha community. Cross the mighty Teesta River and enter the mystical realm of Dzongu. Check into a traditional Lepcha homestay. Afternoon village walk to understand local customs and traditions. Evening cultural interaction with village elders. Overnight stay in Dzongu."
        },
        {
          "day": "Day 3: Sacred Springs and Shamanic Traditions",
          "description": "Full day exploration of Dzongu's natural wonders. Visit sacred hot springs known for their healing properties. Trek to hidden waterfalls through cardamom forests. Learn about traditional Lepcha medicine and shamanic practices. Participate in a traditional cooking session. Evening bonfire with local folklore. Overnight stay in Dzongu."
        },
        {
          "day": "Day 4: Highland Paradise",
          "description": "Morning drive to Lachung (5-6 hours), ascending through dramatic landscapes. Visit the historic Nyingmapa Monastery, learning about its unique architecture. Evening walk through Lachung village, known for its traditional houses. Experience local handicraft demonstrations. Traditional dinner with cultural performance. Overnight stay in Lachung."
        },
        {
          "day": "Day 5: Valley of Flowers",
          "description": "Early morning drive to the mesmerizing Yumthang Valley (11,800 ft), Sikkim's 'Valley of Flowers'. Explore the valley's diverse flora and visit natural hot springs. Afternoon return to Gangtok with stops at scenic viewpoints. Evening leisure time at MG Marg. Overnight stay in Gangtok."
        },
        {
          "day": "Day 6: Spiritual Heritage",
          "description": "Visit Tashi View Point for sunrise views of Kanchenjunga. Explore Ranka Monastery, learning about Buddhist art and architecture. Afternoon visit to the Institute of Tibetology. Evening meditation session with a Buddhist scholar. Farewell dinner featuring traditional Sikkimese cuisine. Overnight stay in Gangtok."
        },
        {
          "day": "Day 7: Farewell to the Mystical Lands",
          "description": "After breakfast, visit the local market for traditional herbs and handicrafts. Begin your journey back to NJP, carrying memories of your mystical adventure through Sikkim's sacred lands."
        }
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/EASTERN-MISTTREE.jpg",
      "destinationTitle": "EASTERN MISTTREE",
      "location": "Gangtok, Darjeeling",
      "duration": "7 Days/6 Nights",
      "destinationDescription": "Immerse yourself in the mystical beauty of the Eastern Himalayas with this enchanting 7-day journey through Gangtok and Darjeeling. Experience the perfect blend of Tibetan Buddhist culture and British colonial heritage, while exploring mist-covered mountains, ancient monasteries, and world-famous tea gardens. From the sacred heights of Nathula Pass to the UNESCO World Heritage Darjeeling Railway, this tour offers a comprehensive exploration of the region's natural wonders and cultural treasures. Ideal for those seeking both spiritual enlightenment and colonial charm in the lap of the Himalayas.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to the Eastern Himalayas",
          "description": "Begin your journey with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, experiencing the vibrant culture and local cuisine. Visit the traditional handicraft center to learn about local artistry. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Spiritual Heritage of Gangtok",
          "description": "Start your day with a visit to the magnificent Rumtek Monastery, the largest in Sikkim. Explore the Do Drul Chorten, surrounded by 108 prayer wheels, and learn about Tibetan Buddhism. Visit the Namgyal Institute of Tibetology and the serene Banjhakri Falls. Evening cultural show featuring traditional Sikkimese dances. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: Sacred Lakes and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with seasons. Visit the revered Baba Mandir, and weather permitting, continue to Nathula Pass (14,140 ft). Learn about the historic Silk Route and Indo-China trade relations. Return to Gangtok for evening cultural activities. Overnight stay in Gangtok."
        },
        {
          "day": "Day 4: Journey to the Queen of Hills",
          "description": "After breakfast, embark on a scenic drive to Darjeeling (4 hours), witnessing the dramatic change in landscape and vegetation. Upon arrival, check into your heritage hotel. Afternoon visit to the Padmaja Naidu Himalayan Zoological Park, home to rare Himalayan species. Evening stroll through the historic Mall Road. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 5: Sunrise and Tea Heritage",
          "description": "Pre-dawn drive to Tiger Hill (2,590m) for a spectacular sunrise over Kanchenjunga and Mount Everest (on clear days). Visit the historic Ghoom Monastery and experience the UNESCO World Heritage Darjeeling Himalayan Railway at Batasia Loop. Afternoon tour of a historic tea estate with tea tasting session. Evening free for shopping. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 6: Colonial Legacy",
          "description": "Visit the prestigious Himalayan Mountaineering Institute, learning about legendary Everest expeditions. Explore the Japanese Peace Pagoda and Rock Garden. Afternoon visit to the Tibetan Refugee Self-Help Center to witness traditional carpet weaving. Evening cultural program featuring local folk dances. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 7: Farewell to the Hills",
          "description": "After breakfast, take a final stroll through the misty mountains. Visit the local markets for famous Darjeeling tea and handicrafts. Begin your journey back to NJP, carrying memories of your Eastern Himalayan adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/SPENDID-HILLS.png",
      "destinationTitle": "SPENDID HILLS",
      "location": "Gangtok, Lachung, Darjeeling",
      "duration": "6 Days/5 Nights",
      "destinationDescription": "Discover the splendor of the Eastern Himalayas on this carefully crafted 6-day journey through Sikkim and Darjeeling. Experience the perfect blend of cultural heritage and natural wonders as you traverse from the modern capital of Gangtok to the pristine valleys of Lachung and the colonial charm of Darjeeling. Witness sacred lakes, blooming valleys, ancient monasteries, and world-famous tea gardens. This tour offers an ideal mix of adventure, spirituality, and colonial history, perfect for those seeking to experience the diverse landscapes of the Eastern Himalayas in a compact timeframe.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Sikkim",
          "description": "Begin your Himalayan journey with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, experiencing the vibrant culture and local cuisine. Visit the traditional handicraft center. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Journey to North Sikkim",
          "description": "Post breakfast, embark on a scenic drive to Lachung (6-7 hours), stopping at the dramatic Singhik Viewpoint for panoramic views of Mount Kanchenjunga. Visit the Seven Sisters Waterfalls and witness the confluence of rivers at Chungthang. Evening exploration of Lachung village, known for its traditional houses. Cultural program featuring local Sikkimese dance. Overnight stay in Lachung."
        },
        {
          "day": "Day 3: Valley of Flowers",
          "description": "Early morning drive to the mesmerizing Yumthang Valley (11,800 ft), known as Sikkim's 'Valley of Flowers'. Explore the valley's diverse flora and visit natural hot springs. Return to Gangtok with stops at scenic viewpoints. Evening leisure time at MG Marg. Overnight stay in Gangtok."
        },
        {
          "day": "Day 4: Queen of Hills",
          "description": "Scenic drive to Darjeeling (4 hours), witnessing the dramatic change in landscape. Upon arrival, check into your heritage hotel. Afternoon visit to the Padmaja Naidu Himalayan Zoological Park and the famous Happy Valley Tea Estate. Evening stroll through the historic Mall Road. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 5: Sunrise and Heritage",
          "description": "Pre-dawn drive to Tiger Hill (2,590m) for a spectacular sunrise over Kanchenjunga and Mount Everest (on clear days). Visit the historic Ghoom Monastery and experience the UNESCO World Heritage Darjeeling Himalayan Railway at Batasia Loop. Afternoon tea tasting session at a historic estate. Evening cultural program. Overnight stay in Darjeeling."
        },
        {
          "day": "Day 6: Farewell to the Hills",
          "description": "After breakfast, take a final stroll through the misty mountains. Visit the local markets for famous Darjeeling tea and handicrafts. Begin your journey back to NJP, carrying memories of your splendid Himalayan adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/RENDEZVOUS-SIKKIM.jpg",
      "destinationTitle": "RENDEZVOUS SIKKIM",
      "location": "Gangtok, Lachung, Pelling",
      "duration": "8 Days/7 Nights",
      "destinationDescription": "Embark on an enchanting rendezvous with Sikkim's most treasured destinations. This 8-day journey weaves through the cultural capital of Gangtok, the pristine valleys of Lachung, and the historical depths of Pelling. Experience the perfect blend of adventure and serenity as you explore sacred lakes, blooming valleys, ancient monasteries, and stunning viewpoints. From high-altitude wonders to cultural treasures, this comprehensive tour offers an intimate encounter with Sikkim's diverse landscapes and rich Buddhist heritage.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Sikkim",
          "description": "Begin your journey with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, experiencing the vibrant culture and local cuisine. Visit the traditional handicraft center. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Sacred Lakes and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with seasons. Visit the revered Baba Mandir, and weather permitting, continue to Nathula Pass (14,140 ft). Learn about the historic Silk Route and Indo-China trade relations. Return to Gangtok for evening cultural activities. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: Journey to North Sikkim",
          "description": "Post breakfast, embark on a scenic drive to Lachung (6-7 hours), stopping at the dramatic Singhik Viewpoint for panoramic views of Mount Kanchenjunga. Visit the Seven Sisters Waterfalls and witness the confluence of rivers at Chungthang. Evening exploration of Lachung village. Cultural program featuring local Sikkimese dance. Overnight stay in Lachung."
        },
        {
          "day": "Day 4: Valley of Flowers",
          "description": "Early morning drive to the mesmerizing Yumthang Valley (11,800 ft), known as Sikkim's 'Valley of Flowers'. Explore the valley's diverse flora and visit natural hot springs. Return to Gangtok with stops at scenic viewpoints. Evening leisure time at MG Marg. Overnight stay in Gangtok."
        },
        {
          "day": "Day 5: Journey to Ancient Kingdom",
          "description": "Drive to Pelling via the historic town of Namchi (5-6 hours). Visit the magnificent Buddha Park and Samdruptse complex. Stop at the historic Temi Tea Garden, Sikkim's only tea estate. Evening arrival in Pelling with views of Mount Khangchendzonga. Overnight stay in Pelling."
        },
        {
          "day": "Day 6: Monastic Heritage",
          "description": "Full day exploration of Pelling's treasures. Visit the ancient Pemayangtse Monastery, learning about its historical importance. Explore the ruins of Rabdentse, Sikkim's second capital. Visit Darap Valley's traditional villages and the spectacular Kanchenjunga Falls. Evening at leisure. Overnight stay in Pelling."
        },
        {
          "day": "Day 7: Cultural Capital",
          "description": "Return to Gangtok (5-6 hours). En route, visit Tashiding Monastery and Ravangla Buddha Park. Afternoon visit to the Institute of Tibetology. Evening meditation session with a Buddhist scholar. Farewell dinner featuring traditional Sikkimese cuisine. Overnight stay in Gangtok."
        },
        {
          "day": "Day 8: Farewell to the Mountains",
          "description": "After breakfast, take a final cable car ride for panoramic views of Gangtok (optional). Visit the local market for traditional handicrafts and organic tea. Begin your journey back to NJP, carrying memories of your Sikkimese adventure."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    },
    {
      "destinationImage": "assets/images/featured-destination/ENERGY-OF-EAST-WEST-HIMALAYA.jfif",
      "destinationTitle": "ENERGY OF EAST WEST HIMALAYA",
      "location": "Gangtok, Pelling",
      "duration": "6 Days/5 Nights",
      "destinationDescription": "Harness the dynamic energy of the Eastern and Western Himalayas on this transformative 6-day journey through Sikkim's most powerful destinations. Experience the perfect harmony of East and West as you traverse from the vibrant capital of Gangtok to the spiritual haven of Pelling. Discover ancient monasteries, sacred lakes, and spectacular viewpoints while witnessing the dramatic contrast between eastern and western Sikkim. Perfect for those seeking a balanced blend of cultural immersion and natural wonders in a shorter timeframe.",
      "touritinerary": [
        {
          "day": "Day 1: Gateway to Eastern Himalayas",
          "description": "Begin your journey with a scenic drive from NJP to Gangtok (4 hours). Upon reaching Gangtok, check into your hotel and acclimatize to the altitude (5,500 ft). Evening exploration of MG Marg, experiencing the vibrant culture and local cuisine. Visit the traditional handicraft center to learn about local artistry. Overnight stay in Gangtok."
        },
        {
          "day": "Day 2: Spiritual Heritage of the East",
          "description": "Start your day with a visit to the magnificent Rumtek Monastery, the largest in Sikkim. Explore the Do Drul Chorten, surrounded by 108 prayer wheels, and learn about Tibetan Buddhism. Visit the Namgyal Institute of Tibetology and the serene Banjhakri Falls. Evening cultural show featuring traditional Sikkimese dances. Overnight stay in Gangtok."
        },
        {
          "day": "Day 3: Sacred Lakes and Mountain Passes",
          "description": "Early morning departure for Tsomgo Lake (12,400 ft), a sacred glacial lake that changes colors with seasons. Visit the revered Baba Mandir, and weather permitting, continue to Nathula Pass (14,140 ft). Learn about the historic Silk Route and Indo-China trade relations. Return to Gangtok for evening cultural activities. Overnight stay in Gangtok."
        },
        {
          "day": "Day 4: Journey to Western Himalayas",
          "description": "Drive to Pelling via the historic town of Namchi (5-6 hours). Visit the magnificent Buddha Park and Samdruptse complex. Stop at the historic Temi Tea Garden, Sikkim's only tea estate. Evening arrival in Pelling with spectacular views of Mount Khangchendzonga. Overnight stay in Pelling."
        },
        {
          "day": "Day 5: Western Heritage Trail",
          "description": "Full day exploration of Pelling's treasures. Visit the ancient Pemayangtse Monastery, learning about its historical importance. Explore the culturally rich Darap Valley, known for its traditional villages and customs. Visit the spectacular Rimbi Waterfalls and Khecheopalri Lake, one of Sikkim's most sacred lakes. Evening meditation session with local monks. Overnight stay in Pelling."
        },
        {
          "day": "Day 6: Farewell to the Himalayas",
          "description": "Early morning visit to Rabdentse Ruins, the ancient capital of Sikkim, for sunrise views of Kanchenjunga. After breakfast, begin your journey back to NJP (5-6 hours), carrying memories of your East-West Himalayan adventure. En route, stop at local markets for traditional handicrafts and organic tea."
        }
      ],
      "including": [
        'Accommodation as per itinerary.',
        'All transfers & sight seeings as per itinerary.',
        'Pickup and drop-off at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP).',
        'Vehicle provided on a point-to-point basis (no per day or per kilometer charges, no disposal basis).'
      ],
      "exclusion": [
        'Any other services or meals which are not mentioned in the "Inclusions".',
        'Expense of personal nature such as tips, laundry, telephones, beverages etc.',
        'Entry fee for all monuments and places of interest if any.',
        'Airfares and Train ticket charges if any.',
        'Costs arising from natural calamities such as landslides, roadblocks, political unrest, etc.',
        'Any increase in taxes or fuel charges affecting surface transport costs.',
        'Any other items not mentioned in "Inclusions".',
      ]
    }
  ];

  private tourPackagesSubject = new BehaviorSubject<any[]>(this.tourPackages);

  getTourPackages(): Observable<any[]> {
    return this.tourPackagesSubject.asObservable();
  }
}
