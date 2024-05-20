import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  screenWidth: number = 0

  constructor(private router: Router) {
    this.screenWidth = window.innerWidth
  }

  // gotoAboutSection() {
  //   console.log(this.router.url);
  //   if (this.router.url != "/") {
  //     this.router.navigate([`/about`],
  //       { queryParams: { data: 'comefromfooter' } }
  //     );
  //   }
  //   else {
  //     window.scrollTo({
  //       top: 1650,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  // gotoContactUsSection() {
  //   if (this.router.url != "/") {
  //     this.router.navigate([`/contact`],
  //       { queryParams: { data: 'comefromfooter' } }
  //     );
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   }
  //   else {
  //     if (this.screenWidth < 550) {
  //       window.scrollTo({
  //         top: 6180,
  //         behavior: 'smooth'
  //       });
  //     }
  //     else {
  //       window.scrollTo({
  //         top: 4700,
  //         behavior: 'smooth'
  //       });
  //     }
  //   }
  // }

  gotoCustomerReviewSection() {
    if (this.router.url != "/") {
      this.router.navigate([`/review`],
        { queryParams: { data: 'comefromfooter' } }
      );
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    else {
      window.scrollTo({
        top: 780,
        behavior: 'smooth'
      });
    }
  }
  
}
