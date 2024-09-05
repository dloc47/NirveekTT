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

    if (this.searchKeyword.trim()) {
      // Filter based on search keyword
      this.filteredPackages = allPackages.filter(pkg => 
        pkg.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        pkg.duration.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        pkg.description.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      // If search keyword is empty or whitespace, show all packages
      this.filteredPackages = allPackages;
    }

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
        imageUrl: 'assets/images/popular-destination/mg-marg.jpg',
        duration: '3 Nights, 4 Days',
        title: 'Gangtok Adventure',
        description: 'Discover the vibrant culture and scenic beauty of Gangtok with our 4-day adventure package. Enjoy guided tours of Rumtek Monastery, Drul Chorten, and the Tibetan Museum. Explore local markets, take a cable car ride, and visit Tsomgo Lake and Baba Mandir.',
      },
      {
        imageUrl: 'assets/images/popular-destination/mg-marg.jpg',
        duration: '4 Nights, 5 Days',
        title: 'Gangtok & Surroundings',
        description: 'Experience an extended stay in Gangtok with our 5-day package. Visit Rumtek Monastery, explore the charming streets of Gangtok, and take day trips to Tsomgo Lake, Baba Mandir, and Nathula Pass. Enjoy an immersive journey through the Indo-China border region.',
      },
      {
        imageUrl: 'assets/images/popular-destination/mg-marg.jpg',
        duration: '2 Nights, 3 Days',
        title: 'Tsomgo Lake & Nathula',
        description: 'Enjoy a quick escape to Tsomgo Lake with our 3-day package. Marvel at the picturesque lake, visit the nearby Baba Mandir, and experience the breathtaking views from Nathula Pass. This trip is perfect for a short but memorable adventure.',
      }
    ];
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
}
