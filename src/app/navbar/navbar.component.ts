import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Dropdown, DropdownOptions } from 'flowbite';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentSection: string = '';
  screenWidth: number = 0;
  private $targetEl!: HTMLElement | null;
  private $triggerEl!: HTMLElement | null;
  private dropdown: Dropdown | null = null;
  public options: DropdownOptions;
  public instanceOptions: { id: string; override: boolean };

  private readonly scrollOffset: number = 64;

  destinations: any[] = [
    {
      region: 'East Sikkim',
      places: ['Aritar', 'Gangtok', 'Tsogmo', 'Nathula', 'Zuluk'],
      showMore: false,
    },
    {
      region: 'North Sikkim',
      places: ['Lachung', 'Lachen', 'Dzongu'],
      showMore: false,
    },
    {
      region: 'South Sikkim',
      places: ['Namchi', 'Ravangla', 'Rabong'],
      showMore: false,
    },
    {
      region: 'West Sikkim',
      places: [
        'Geyzing',
        'Kaluk',
        'Legship',
        'Pelling',
        'Okharey',
        'Rinchenpong',
        'Uttarey',
        'Dentam',
        'Hee-Bermoik',
        'Yuksom',
      ],
      showMore: false,
    },
    {
      region: 'Attractions',
      places: [
        'Tsongmo Lake',
        'Rumtek Monastry',
        'Rabdentse Ruins',
        'Nathu La Pass',
        'Khecheopari Lake',
        'Khangchenzonga National Park',
        'Gurudongmar Lake',
        'Buddha Park',
        'Chardham',
        'Barsey Rhododendron Sanctuary',
        'Baba Harbahajan Singh Temple',
      ],
      showMore: false,
    },
  ];

  constructor(private router: Router) {
    this.options = {};

    this.instanceOptions = {
      id: 'dropdownNavbarMenu',
      override: true,
    };
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.$targetEl = document.getElementById('dropdownNavbarMenu');
    this.$triggerEl = document.getElementById('dropdownNavbarBtn');

    if (this.$targetEl && this.$triggerEl) {
      this.initializeDropdown();
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink();
      }
    });

    // Update active link on scroll
    this.setActiveLink();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.setActiveLink();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - this.scrollOffset,
        behavior: 'smooth'
      });
    }
    this.currentSection = sectionId;
    this.setActiveLink();
  }

  setActiveLink(): void {
    const sections = ['home', 'about', 'contact'];
    let found = false;
  
    const viewportHeight = window.innerHeight;
  
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = rect.bottom + window.scrollY;
  
        // Calculate visibility
        const viewportTop = window.scrollY + this.scrollOffset;
        const viewportBottom = viewportTop + viewportHeight;
  
        const elementHeight = elementBottom - elementTop;
        const visibleHeight = Math.min(viewportBottom, elementBottom) - Math.max(viewportTop, elementTop);
        const visiblePercentage = (visibleHeight / elementHeight) * 100;
  
        // Check if the section is at least 50% visible
        if (visiblePercentage >= 50) {
          this.currentSection = sectionId;
          found = true;
          break;
        }
      }
    }
  
    // If no other sections are found, set 'home' as active
    if (!found) {
      this.currentSection = 'home';
    }
  }
  

  isActive(section: string): boolean {
    return this.currentSection === section;
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
      this.dropdown = new Dropdown(
        this.$targetEl,
        this.$triggerEl,
        this.options,
        this.instanceOptions
      );

      this.$triggerEl.addEventListener('click', () => {
        if (this.$targetEl) {
          this.$targetEl.classList.toggle('show');
          if (this.options.onToggle) {
            this.options.onToggle(this.dropdown!);
          }
        }
      });

      document.addEventListener('click', (event) => {
        if (
          this.$targetEl &&
          !this.$targetEl.contains(event.target as Node) &&
          !this.$triggerEl?.contains(event.target as Node)
        ) {
          this.$targetEl.classList.remove('show');
          if (this.options.onHide) {
            this.options.onHide(this.dropdown!);
          }
        }
      });
    }
  }
}
