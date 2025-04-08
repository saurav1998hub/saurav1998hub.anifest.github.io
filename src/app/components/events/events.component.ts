import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, first } from 'rxjs/operators';

interface EventItem {
  image_url: string;
  event_url: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  upcomingEventsArray: EventItem[] = [
    {
      image_url: '../../../assets/images/anifest2.0.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'Anime FanFest Ranchi',
      description: "Jharkhand's First Comic-Con Is Back!",
      status: 'Book Now!',
    },
    {
      image_url: '../../../assets/images/Image Feb.jpeg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'BGMI Tournament Ranchi',
      description: 'Registrations closed!',
      status: 'Event Ended!',
    },
    
  ];

  upcomingEventsArraymobile:  EventItem[] = [
    {
      image_url: '../../../assets/images/anifest2.0.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'Anime FanFest Ranchi',
      description: "Jharkhand's First Comic-Con Is Back!",
      status: 'Book Now!',
    },
    {
      image_url: '../../../assets/images/Image Feb.jpeg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'BGMI Tournament Ranchi',
      description: 'Registrations closed!',
      status: 'Event Ended!',
    },
    
  ];  
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.handleInitialNavigation();
  }

  redirectToBooking(event: EventItem) {
    if (event.status === 'Book Now!') {
      sessionStorage.setItem('key', 'book');
      this.router.navigate(['/BookingPage']);
    } else if (event.status === 'Register Now!') {
      sessionStorage.setItem('key', 'register');
      this.router.navigate(['/BookingPage']);
    }
  }

  private handleInitialNavigation() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        first()
      )
      .subscribe(() => this.scrollToTopSmoothly());
  }

  private scrollToTopSmoothly() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
