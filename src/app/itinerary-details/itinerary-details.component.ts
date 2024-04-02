import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstanceOptions, TabItem, Tabs, TabsInterface, TabsOptions } from 'flowbite';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit, AfterViewInit {

  touritinerary: any = {}
  currentItenary: any;
  count = 0

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    const tabsElement: HTMLElement | any = document.getElementById('default-styled-tab');

    // create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements: TabItem[] | any = [
      {
        id: 'overview',
        triggerEl: document.querySelector('#overview'),
        targetEl: document.querySelector('#styled-overview'),
      },
      {
        id: 'itinerary-styled-tab',
        triggerEl: document.querySelector('#itinerary-styled-tab'),
        targetEl: document.querySelector('#styled-itinerary'),
      },
      {
        id: 'inclusion-styled-tab',
        triggerEl: document.querySelector('#inclusion-styled-tab'),
        targetEl: document.querySelector('#styled-inclusion'),
      },
      {
        id: 'exclusion-styled-tab',
        triggerEl: document.querySelector('#exclusion-styled-tab'),
        targetEl: document.querySelector('#styled-exclusion'),
      },
      {
        id: 'policy-styled-tab',
        triggerEl: document.querySelector('#policy-styled-tab'),
        targetEl: document.querySelector('#styled-policy'),
      }
    ];

    // options with default values
    const options: TabsOptions | any = {
      defaultTabId: 'overview',
      activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
      inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
      onShow: () => {
        console.log('tab is shown');
      },
    };

    // instance options with default values
    const instanceOptions: InstanceOptions = {
      id: 'default-styled-tab',
      override: true
    };


    const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

    // open tab item based on id
    tabs.show('itinerary-styled-tab');
  }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.count++
      this.currentItenary = res;
      this.touritinerary = JSON.parse(res.touritinerary);
      // window.location.reload();
    })

  }

}
