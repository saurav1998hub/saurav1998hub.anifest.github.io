import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-event-booking-page',
  templateUrl: './event-booking-page.component.html',
  styleUrls: ['./event-booking-page.component.scss']
})
export class EventBookingPageComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        first() // Handle only the initial navigation
      )
      .subscribe(() => {
        // Smoothly scroll to top after initial navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
