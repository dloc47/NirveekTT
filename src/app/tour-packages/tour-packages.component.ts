import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css'],
})
export class TourPackagesComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 9; // Default for large screens
  totalItems: number = 30; // Replace with actual total count
  packages: any[] = [];
  filteredPackages: any[] = [];
  searchKeyword: string = '';
  noDataFound: boolean = false; // New property to indicate no data found
  selectedLocation: string = '';
  selectedDuration: string = '';

  ngOnInit() {
    this.adjustItemsPerPage(window.innerWidth);
    this.totalItems = this.getAllPackages().length; // Set the totalItems based on dummy data
    this.loadPackages();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustItemsPerPage(event.target.innerWidth);
    this.loadPackages();
  }

  adjustItemsPerPage(width: number) {
    if (width < 768) { // Tailwind's `sm` breakpoint
      this.itemsPerPage = 6;
    } else if (width >= 768 && width < 1024) { // Tailwind's `md` breakpoint
      this.itemsPerPage = 8;
    } else { // Larger screens
      this.itemsPerPage = 9;
    }
  }

  loadPackages() {
    const allPackages = this.getAllPackages();
    this.totalItems = allPackages.length;

    let filtered = allPackages;

    // Apply location filter
    if (this.selectedLocation) {
      filtered = filtered.filter(pkg => pkg.title.toLowerCase().includes(this.selectedLocation.toLowerCase()));
    }

    // Apply duration filter
    if (this.selectedDuration) {
      const [minDays, maxDays] = this.parseDurationRange(this.selectedDuration);
      console.log(`Filtering for duration range: ${minDays} to ${maxDays} days`);
      
      filtered = filtered.filter(pkg => {
        const pkgDays = this.extractDays(pkg.duration);
        console.log(`Package duration: ${pkgDays} days`);

        return pkgDays >= minDays && pkgDays <= maxDays;
      });
    }

    // Apply search keyword filter
    if (this.searchKeyword.trim()) {
      filtered = filtered.filter(pkg => 
        pkg.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        pkg.duration.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        pkg.description.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }

    this.filteredPackages = filtered;
    this.noDataFound = this.filteredPackages.length === 0; // Update the noDataFound property

    // Paginate the filtered packages
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.packages = this.filteredPackages.slice(start, end);
  }

  getAllPackages() {
    // Dummy data for packages
    return [
      {
        imageUrl: 'https://media.tripinvites.com/places/gangtok/mg-road/mg-road-featured.jpg',
        duration: '2 Nights, 3 Days',
        title: 'Gangtok Adventure',
        description: 'Discover the vibrant culture and scenic beauty of Gangtok with our 4-day adventure package. Enjoy guided tours of Rumtek Monastery, Drul Chorten, and the Tibetan Museum. Explore local markets, take a cable car ride, and visit Tsomgo Lake and Baba Mandir.',
      },
      {
        imageUrl: 'https://i.redd.it/huvj43adtfr01.jpg',
        duration: '4 Nights, 5 Days',
        title: 'Lachen Adventure',
        description: 'Adventure awaits in Lachen with this thrilling 4-day package. Experience the serene landscapes, visit the beautiful Gurudongmar Lake, and explore the charming town of Lachen.',
      },
      {
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyR1cOyvw4GWRs7guJXBV3iEH9Z6W_YG-71WqHMkY9z9Xyu2SCVtZehpc_f5Nv58nuWyFVaigjJCpw4F5fmvW-TC3xoLNQfXA0wBLnPDKGnJurWPGxuLE3ijVhbFieRT7LJRa75-lo8XoZFcOs8GXAwrJ-mLCeNFMyGQSdTl5BuIw4AR_bhfgbkV4s/s640/glass%20bridge%20pelling.jpg',
        duration: '3 Nights, 4 Days',
        title: 'Pelling Paradise',
        description: 'Enjoy the serene landscapes of Pelling with this 3-day package. Explore the breathtaking views of the Kanchenjunga range, visit the beautiful Pemayangtse Monastery, and take a stroll over the famous Glass Bridge.',
      }
    ];
  }
  

  parseDurationRange(durationRange: string): [number, number] {
    const [minDays, maxDays] = durationRange.split('-').map(day => parseInt(day.trim(), 10));
    return [minDays || 0, maxDays || minDays || 0];
  }

  extractDays(duration: string): number {
    const dayMatch = duration.match(/(\d+) Days?/i);
    const nightMatch = duration.match(/(\d+) Nights?/i);
    
    if (dayMatch) {
      return parseInt(dayMatch[1], 10);
    }
    if (nightMatch) {
      return parseInt(nightMatch[1], 10);
    }
    return 0;
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPagesArray.length) {
      return; // Ensure the page number is valid
    }

    this.currentPage = page;
    this.loadPackages();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get totalPagesArray() {
    return Array(Math.ceil(this.totalItems / this.itemsPerPage)).fill(0).map((_, index) => index + 1);
  }

  onSearchChange(event: any) {
    this.searchKeyword = event.target.value;
    this.currentPage = 1; // Reset to the first page on search
    this.loadPackages();
  }

  onLocationSelect(location: string) {
    this.selectedLocation = this.selectedLocation === location ? '' : location;
    this.currentPage = 1; // Reset to the first page on filter change
    this.loadPackages();
  }

  onDurationSelect(duration: string) {
    this.selectedDuration = this.selectedDuration === duration ? '' : duration;
    this.currentPage = 1; // Reset to the first page on filter change
    this.loadPackages();
  }
}
