import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventBookingPageComponent } from './components/event-booking-page/event-booking-page.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'Home',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: LandingPageComponent },
      { path: 'Contact', pathMatch: 'full', component: ContactComponent },
    ],
  },
  { path: 'Events', pathMatch: 'full', component: EventsComponent },
  {
    path: 'BookingPage',
    pathMatch: 'full',
    component: EventBookingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
