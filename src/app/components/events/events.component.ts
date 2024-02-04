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
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventsArray: EventItem[] = [
    {
      image_url: '../../../assets/images/Image.jpeg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'Anime FanFest Ranchi',
      description: 'Jharkhand\'s First Comic-Con!',
      status: 'Book Now'
    },
    {
      image_url: '../../../assets/images/Image Feb.jpeg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'BGMI TOURNAMENT',
      description: 'Coming Soon!',
      status: 'Coming Soon'
    },
    {
      image_url: '../../../assets/images/Image.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'AOT',
      description: 'Meet Up Party',
      status: 'Event Ended'
    },
    {
      image_url: '../../../assets/images/Nov 26 2023 Resized Photo.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'JJK',
      description: 'Meet-up Party',
      status: 'Event Ended'
    },
    {
      image_url: '../../../assets/images/Dec 24 Photo 202 (1).jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'I Want To Eat Your Pancreas',
      description: 'Meetup Party',
      status: 'Event Ended'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.handleInitialNavigation();
  }

  redirectToBooking(event: EventItem) {
    if (event.status === 'Book Now') {
      this.router.navigate(['/BookingPage']);
    }
  }

  private handleInitialNavigation() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      first()
    ).subscribe(() => this.scrollToTopSmoothly());
  }

  private scrollToTopSmoothly() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
