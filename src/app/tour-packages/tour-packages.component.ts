import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { TourPackageService } from 'src/services/tour-package.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css'],
})
export class TourPackagesComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  itemsPerPage: number = 4; // This is already set to 4
  totalItems: number = 0;
  packages: any[] = [];
  filteredPackages: any[] = [];
  searchKeyword: string = '';
  noDataFound: boolean = false;
  selectedLocation: string = '';
  selectedDuration: string = '';
  private tourPackagesSubscription: Subscription | undefined;
  isFilterOpen: boolean = false;

  // Add these new properties
  availableLocations: string[] = [
    'Gangtok',
    'Lachen',
    'Pelling',
    'Darjeeling',
    'Kalimpong',
    'Lachung'
  ];

  availableDurations: string[] = [
    '1-3 days',
    '4-7 days',
    'Over 7 days'
  ];

  constructor(
    private tourPackageService: TourPackageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adjustItemsPerPage(window.innerWidth);
    // Subscribe to the tour packages observable
    this.tourPackagesSubscription = this.tourPackageService.getTourPackages()
      .subscribe(packages => {
        this.filteredPackages = packages;
        this.totalItems = packages.length;
        this.loadPackages();
      });
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    if (this.tourPackagesSubscription) {
      this.tourPackagesSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 1024) { // lg breakpoint
      this.isFilterOpen = false;
    }
    this.adjustItemsPerPage(event.target.innerWidth);
    this.loadPackages();
  }

  adjustItemsPerPage(width: number) {
    // Always keep 4 items per page regardless of screen size
    this.itemsPerPage = 4;
  }

  loadPackages() {
    let filtered = [...this.filteredPackages]; // Create a copy of the array

    // Apply location filter
    if (this.selectedLocation) {
      filtered = filtered.filter((pkg) =>
        pkg.location.toLowerCase().includes(this.selectedLocation.toLowerCase())
      );
    }

    // Apply duration filter
    if (this.selectedDuration) {
      const [minDays, maxDays] = this.parseDurationRange(this.selectedDuration);
      filtered = filtered.filter((pkg) => {
        const pkgDays = this.extractDays(pkg.duration);
        return pkgDays >= minDays && (maxDays === 0 || pkgDays <= maxDays);
      });
    }

    // Apply search keyword filter
    if (this.searchKeyword.trim()) {
      filtered = filtered.filter(
        (pkg) =>
          pkg.destinationTitle.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
          pkg.location.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
          pkg.destinationDescription.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }

    this.totalItems = filtered.length;
    this.noDataFound = filtered.length === 0;

    // Paginate the filtered packages
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.packages = filtered.slice(start, end);
  }

  parseDurationRange(durationRange: string): [number, number] {
    if (durationRange === 'Over 7 days') {
      return [8, 0]; // 0 means no upper limit
    }
    const parts = durationRange.split('-');
    const minDays = parseInt(parts[0], 10);
    const maxDays = parts[1] ? parseInt(parts[1], 10) : minDays;
    return [minDays, maxDays];
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
    const totalPages = Math.ceil(this.filteredPackages.length / this.itemsPerPage);
    
    // Validate page number
    if (page < 1 || page > totalPages) {
      return;
    }

    this.currentPage = page;
    this.loadPackages();

    // Scroll to top of the packages section
    const packagesSection = document.querySelector('.packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get totalPagesArray() {
    const totalPages = Math.ceil(this.filteredPackages.length / this.itemsPerPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  onSearchChange(event: any) {
    this.searchKeyword = event.target.value;
    this.currentPage = 1;
    this.loadPackages();
  }

  onLocationSelect(location: string) {
    this.selectedLocation = this.selectedLocation === location ? '' : location;
    this.currentPage = 1;
    this.loadPackages();
    this.onFilterSelect();
  }

  onDurationSelect(duration: string) {
    this.selectedDuration = this.selectedDuration === duration ? '' : duration;
    this.currentPage = 1;
    this.loadPackages();
    this.onFilterSelect();
  }

  get hasActiveFilters(): boolean {
    return !!(this.searchKeyword || this.selectedLocation || this.selectedDuration);
  }

  toggleFilters() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  clearSearch() {
    this.searchKeyword = '';
    this.currentPage = 1;
    this.loadPackages();
  }

  clearLocationFilter() {
    this.selectedLocation = '';
    this.currentPage = 1;
    this.loadPackages();
  }

  clearDurationFilter() {
    this.selectedDuration = '';
    this.currentPage = 1;
    this.loadPackages();
  }

  clearAllFilters() {
    this.searchKeyword = '';
    this.selectedLocation = '';
    this.selectedDuration = '';
    this.currentPage = 1;
    this.isFilterOpen = false; // Close mobile filters after clearing
    this.loadPackages();
  }

  // Add this method to handle filter closing on selection in mobile
  onFilterSelect() {
    if (window.innerWidth < 1024) { // Close filter on mobile after selection
      this.isFilterOpen = false;
    }
  }

  // Add this method to get no results message
  getNoResultsMessage(): string {
    if (this.searchKeyword && (this.selectedLocation || this.selectedDuration)) {
      return `No packages found matching "${this.searchKeyword}" with the selected filters. Try adjusting your search criteria or removing some filters.`;
    } else if (this.searchKeyword) {
      return `No packages found matching "${this.searchKeyword}". Try different search terms.`;
    } else if (this.selectedLocation && this.selectedDuration) {
      return `No packages found in ${this.selectedLocation} with duration ${this.selectedDuration}. Try adjusting your filters.`;
    } else if (this.selectedLocation) {
      return `No packages found in ${this.selectedLocation}. Try selecting a different location.`;
    } else if (this.selectedDuration) {
      return `No packages found with duration ${this.selectedDuration}. Try selecting a different duration.`;
    }
    return 'No packages found. Please try different search criteria.';
  }

  viewPackageDetails(packageData: any) {
    this.router.navigate(['/itinerary'], {
      state: { data: packageData }
    });
  }
}