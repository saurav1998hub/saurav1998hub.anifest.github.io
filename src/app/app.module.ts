import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { EventsComponent } from './components/events/events.component';
import { EventBookingPageComponent } from './components/event-booking-page/event-booking-page.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PrevEventsComponent } from './components/prev-events/prev-events.component';
import { TermNconditionsComponent } from './components/term-nconditions/term-nconditions.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ClickOutsideDirective } from './directive.directive';
import { EventDetailsComponent } from './components/event-booking-page/event-details/event-details.component';
import { TimerComponent } from './components/timer/timer.component';
import { ExperiencesComponent } from './components/event-booking-page/experiences/experiences.component';
import { GuestsComponent } from './components/event-booking-page/guests/guests.component';
import { SponsorsComponent } from './components/event-booking-page/sponsors/sponsors.component';
import { ScheduleComponent } from './components/event-booking-page/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    AppLayoutComponent,
    ContactComponent,
    EventsComponent,
    EventBookingPageComponent,
    FooterComponent,
    PrevEventsComponent,
    TermNconditionsComponent,
    AboutUsComponent,
    ClickOutsideDirective,
    EventDetailsComponent,
    TimerComponent,
    ExperiencesComponent,
    GuestsComponent,
    SponsorsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
