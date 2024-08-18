import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    // Load packages based on the currentPage and itemsPerPage
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.packages = this.getAllPackages().slice(start, end);
  }

  getAllPackages() {
    // Dummy data for packages
    return [
      {
        title: 'Exotic Beach',
        description: 'Enjoy a relaxing time at the exotic beach with pristine waters and sandy shores.',
        duration: '3 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Mountain Adventure',
        description: 'Experience the thrill of mountain climbing and breathtaking views.',
        duration: '5 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Cultural Exploration',
        description: 'Dive deep into the local culture with guided tours and authentic experiences.',
        duration: '7 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'City Lights',
        description: 'Explore the vibrant nightlife and landmarks of the city.',
        duration: '2 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Desert Safari',
        description: 'Adventure through the desert with dune bashing and camel rides.',
        duration: '4 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Island Getaway',
        description: 'Relax on a tropical island with all-inclusive amenities.',
        duration: '6 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Historical Journey',
        description: 'Visit ancient sites and learn about the history of the region.',
        duration: '8 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Wildlife Safari',
        description: 'See exotic animals in their natural habitat on this guided safari.',
        duration: '5 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Luxury Cruise',
        description: 'Sail the seas in style with luxury accommodations and gourmet dining.',
        duration: '7 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Winter Wonderland',
        description: 'Experience the magic of winter with skiing, snowboarding, and cozy cabins.',
        duration: '6 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Forest Retreat',
        description: 'Unwind in a serene forest environment with nature walks and spa treatments.',
        duration: '3 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Coastal Drive',
        description: 'Drive along the coast and enjoy scenic views and seaside towns.',
        duration: '5 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Gastronomic Tour',
        description: 'Savor the flavors of the region with culinary tours and cooking classes.',
        duration: '4 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'River Expedition',
        description: 'Navigate through rivers on this adventurous expedition.',
        duration: '8 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Volcano Trek',
        description: 'Climb up an active volcano and witness its incredible power.',
        duration: '2 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Wine Country',
        description: 'Tour the vineyards and taste some of the finest wines.',
        duration: '3 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Jungle Safari',
        description: 'Explore the dense jungle and discover its wildlife and flora.',
        duration: '7 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Island Hopping',
        description: 'Hop from one island to another and enjoy different beaches and cultures.',
        duration: '5 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Countryside Escape',
        description: 'Relax in the countryside with fresh air and peaceful surroundings.',
        duration: '4 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Cave Exploration',
        description: 'Discover the mysteries of ancient caves with expert guides.',
        duration: '3 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Northern Lights',
        description: 'Witness the spectacular northern lights in the night sky.',
        duration: '6 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Desert Oasis',
        description: 'Find tranquility in a desert oasis with luxurious amenities.',
        duration: '5 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Mediterranean Cruise',
        description: 'Cruise the Mediterranean and explore its beautiful islands.',
        duration: '10 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Polar Expedition',
        description: 'Venture into the polar regions and experience the extreme cold.',
        duration: '12 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Safari Adventure',
        description: 'Join a safari adventure and witness wildlife in its natural habitat.',
        duration: '7 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Sunset Cruise',
        description: 'Enjoy a relaxing cruise with stunning sunset views.',
        duration: '2 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Mountain Retreat',
        description: 'Stay in a mountain cabin and enjoy hiking and nature walks.',
        duration: '4 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'City Escape',
        description: 'Escape the city and unwind in a peaceful rural setting.',
        duration: '3 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Beachfront Resort',
        description: 'Stay at a beachfront resort with all the amenities you need.',
        duration: '5 days',
        imageUrl: 'https://via.placeholder.com/300'
      },
      {
        title: 'Wildlife Trek',
        description: 'Trek through the wilderness and encounter a variety of wildlife.',
        duration: '6 days',
        imageUrl: 'https://via.placeholder.com/300'
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
}