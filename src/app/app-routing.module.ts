import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './footer/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingAndCancellationPolicyComponent } from './footer/booking-and-cancellation-policy/booking-and-cancellation-policy.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path: "privacypolicy", component: PrivacyPolicyComponent },
  {path: "about", component: AboutUsComponent },
  {path: "termsandcondition", component: TermsAndConditionsComponent },
  {path: "bookingandcancellationpolicy", component: BookingAndCancellationPolicyComponent },
  {path: "itinerary", component: ItineraryDetailsComponent },
  { path: '**', component: PageNotFoundComponent }, // wildcard route for unknown paths - (Add this wildcard to last index, else it will throw an error to known route also)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
