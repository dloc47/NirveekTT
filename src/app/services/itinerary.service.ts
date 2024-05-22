import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private notifyNavComponent = new Subject<void>();
  constructor() { }
  private notify = new Subject<any>();
  public notifyObservable$ = this.notify.asObservable();
  public popularDestination: any = [
    {
      destinationId: 1,
      destinationImage: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "Tsomgu",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    },
    {
      destinationId: 2,
      destinationImage: "https://www.tripsavvy.com/thmb/58A3iO4pNLWV-yojm0QbsrmurbM=/2121x1414/filters:fill(auto,1)/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "East Sikkim",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    },
    {
      destinationId: 3,
      destinationImage: "https://1.bp.blogspot.com/-bSHlkhZGU2c/Vry_ziFJFhI/AAAAAAAAISA/JZqhGw5_xyc/s1600/Zuluk.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "Zuluk",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    },
    {
      destinationId: 4,
      destinationImage: "https://www.sikkimtourismindia.com/blog/wp-content/uploads/2020/04/Sikkim-tour-01.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "Buddha Park",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    },
    {
      destinationId: 5,
      destinationImage: "https://www.alightindia.com/CDN/Content/Images/PostImages/ORIGINAL/sk9--6cbecf.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "Geyzing",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    },
    {
      destinationId: 6,
      destinationImage: "https://www.wtravelmagazine.com/wp-content/uploads/2020/09/30.113.12-Stunning-landscapes-at-Gurudongmar-Lake-North-Sikkim-image-by-Sudip-Ray.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "Nathula Border",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    },
    {
      destinationId: 7,
      destinationImage: "https://wallpapercave.com/wp/wp6560045.jpg",
      duration: "3 Days, 4 Nights",
      destinationTitle: "Lachung",
      destinationDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas excepturi sunt nostrum explicabo. Odio sit quas nulla quisquam voluptates sapiente debitis asperiores autem illum! Minima, quia suscipit explicabo ab obcaecati earum sapiente, sunt minus nesciunt rem, quisquam magnam voluptatum.",
      touritinerary: [
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
          day: "Arrival Kathmandu & transfer to Pokhra",
          description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
      ],
      including: [
        "Accommodation as per itinerary.",
        "All transfers & sight seeings as per itinerary.",
        "Driver Allowance, toll, parking fee, Night halt charges, inter- state permit.",
        "A dedicated Tour Coordinator for the entire trip."
      ],
      exclusion: [
        "Any other services or meals which are not mentioned in the above “Includes” section.",
        "Expense of personal nature such as tips, laundry, telephones, beverages etc",
        "Entry fee for all monuments and places of interest if any",
        "Airfares and Train ticket charges if any",
        "Any other items not mentioned in ‘Cost Includes’"
      ]
    }
  ];
}
