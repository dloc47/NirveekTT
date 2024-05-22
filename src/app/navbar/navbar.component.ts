import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItineraryService } from '../services/itinerary.service';
import { Dropdown, DropdownOptions } from 'flowbite';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  screenWidth: number = 0;
  private $targetEl!: HTMLElement | null;
  private $triggerEl!: HTMLElement | null;
  private dropdown: Dropdown | null = null;
  public options: DropdownOptions;
  public instanceOptions: { id: string; override: boolean };

  destinations: any[] = [
    {
      region: 'East Sikkim',
      places: ['Aritar', 'Gangtok', 'Tsogmo', 'Nathula', 'Zuluk', 'Rumtek'],
      showMore: false
    },
    {
      region: 'North Sikkim',
      places: ['Chungthang', 'Lachung', 'Lachen', 'Mangan', 'Singhik', 'Yumthang valley'],
      showMore: false
    },
    {
      region: 'South Sikkim',
      places: ['Jorethang', 'Namchi', 'Ravangla'],
      showMore: false
    },
    {
      region: 'West Sikkim',
      places: ['Geyzing', 'Kaluk', 'Legship', 'Pelling', 'Okharey', 'Rinchenpong', 'Uttarey'],
      showMore: false
    },
    {
      region: 'Attractions',
      places: [
        'Tsongmo Lake', 'Rumtek Monastry', 'Rabdentse Ruins', 'Nathu La Pass', 'Khecheopari Lake',
        'Khangchenzonga National Park', 'Gurudongmar Lake', 'Buddha Park', 'Chardham',
        'Barsey Rhododendron Sanctuary', 'Baba Harbahajan Singh Temple'
      ],
      showMore: false
    }
  ];

  constructor(private router: Router, private service: ItineraryService) {
    this.options = { };
    
    this.instanceOptions = {
      id: 'dropdownNavbarMenu',
      override: true
    };
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.$targetEl = document.getElementById('dropdownNavbarMenu');
    this.$triggerEl = document.getElementById('dropdownNavbarBtn');

    if (this.$targetEl && this.$triggerEl) {
      this.initializeDropdown();
    }
  }

  shouldShowSeeMoreButton(item: any): boolean {
    return item.places.length > 10;
  }

  redirectToPackages(): void {
    this.router.navigate(['/packages']);
    this.closeDropDownManually();
  }

  closeDropDownManually() {
    if (this.dropdown) {
      this.dropdown.hide();
    }
  }

  private initializeDropdown(): void {
    if (this.$targetEl && this.$triggerEl) {
      this.dropdown = new Dropdown(this.$targetEl, this.$triggerEl, this.options, this.instanceOptions);

      this.$triggerEl.addEventListener('click', () => {
        if (this.$targetEl) {
          this.$targetEl.classList.toggle('show');
          if (this.options.onToggle) {
            this.options.onToggle(this.dropdown!);
          }
        }
      });

      document.addEventListener('click', (event) => {
        if (this.$targetEl && !this.$targetEl.contains(event.target as Node) &&
          !this.$triggerEl?.contains(event.target as Node)) {
          this.$targetEl.classList.remove('show');
          if (this.options.onHide) {
            this.options.onHide(this.dropdown!);
          }
        }
      });
    }
  }


}
