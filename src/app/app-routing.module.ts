import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './footer/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingAndCancellationPolicyComponent } from './footer/booking-and-cancellation-policy/booking-and-cancellation-policy.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReviewsComponent } from './user-reviews/reviews.component';
import { FaqComponent } from './faq/faq.component';
import { HowToReachSikkimComponent } from './how-to-reach-sikkim/how-to-reach-sikkim.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:"full"},
  {path: "about", component: AboutUsComponent },
  {path: "contact", component: ContactFormComponent },
  {path: "review", component: ReviewsComponent },
  {path: "privacypolicy", component: PrivacyPolicyComponent },
  {path: "termsandcondition", component: TermsAndConditionsComponent },
  {path: "bookingandcancellationpolicy", component: BookingAndCancellationPolicyComponent },
  {path: "itinerary", component: ItineraryDetailsComponent },
  {path: "packages", component: TourPackagesComponent },
  {path: "faq", component: FaqComponent },
  {path: "how-to-reach-sikkim", component: HowToReachSikkimComponent },
  { path: '**', component: PageNotFoundComponent }, // wildcard route for unknown paths - (Add this wildcard to last index, else it will throw an error to known route also)
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
