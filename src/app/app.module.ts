import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeaturedDestinationComponent } from './featured-destination/featured-destination.component';
import { PopularDestinationComponent } from './popular-destination/popular-destination.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './footer/terms-and-conditions/terms-and-conditions.component';
import { BookingAndCancellationPolicyComponent } from './footer/booking-and-cancellation-policy/booking-and-cancellation-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { ReviewsComponent } from './user-reviews/reviews.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { EnquiryBarComponent } from './enquiry-bar/enquiry-bar.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [				
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    FeaturedDestinationComponent,
    PopularDestinationComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    BookingAndCancellationPolicyComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ItineraryDetailsComponent,
    WhyChooseUsComponent,
    ReviewsComponent,
    HomeCarouselComponent,
    EnquiryBarComponent,
      FaqComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
