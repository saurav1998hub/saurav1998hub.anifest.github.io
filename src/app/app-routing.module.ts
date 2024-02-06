import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventBookingPageComponent } from './components/event-booking-page/event-booking-page.component';
import { EventsComponent } from './components/events/events.component';
import { PrevEventsComponent } from './components/prev-events/prev-events.component';
import { TermNconditionsComponent } from './components/term-nconditions/term-nconditions.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '',
    pathMatch: 'full', 
    redirectTo: '/Home' 
  },
  {
    path: 'Home',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  { path: 'Events', 
    pathMatch: 'full', 
    component: EventsComponent },
  {
    path: 'BookingPage',
    pathMatch: 'full',
    component: EventBookingPageComponent,
  },
  {
    path: 'Previous_Events',
    pathMatch: 'full',
    component: PrevEventsComponent,
  },
  {
    path: 'Terms_&_Conditions',
    pathMatch: 'full',
    component: TermNconditionsComponent,
  },
  {
    path: 'About_Us',
    pathMatch: 'full',
    component: AboutUsComponent,
  },
  {
    path: 'Contact_Us',
    pathMatch: 'full',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
