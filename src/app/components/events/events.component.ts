import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';
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
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('@cardAnimation', stagger(100, animateChild()), { optional: true })
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ])
    ])
  ]
})
export class EventsComponent implements OnInit {
  upcomingEventsArray: EventItem[] = [
    {
      image_url: '../../../assets/images/meghalaya.png',
      event_url: '',
      name: 'Adventure in Meghalaya',
      description: "Join Us On a Trip to Meghalaya!",
      status: 'Register Now!',
    },
    {
      image_url: '../../../assets/images/carnival.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'Anime FanFest 1.0 Ranchi',
      description: "Jharkhand's First Anime Fan-Fest!",
      status: 'Event Ended',
    },
    {
      image_url: '../../../assets/images/Anifest 2.0.jpg',
      event_url: '',
      name: 'Anime FanFest Ranchi 2.0',
      description: "Jharkhand's Most Awaited Anime Fan-Fest Is Back!",
      status: 'Event Ended',
    },
    {
      image_url: '../../../assets/images/latent.jpg',
      event_url: "https://forms.gle/eks51VqwRqXH9LX57",
      name: 'Anifest Got Talent',
      description: "Anifest Ranchi's very own talent competition!",
      status: 'Event Ended',
    },
    {
      image_url: '../../../assets/images/Image Feb.jpeg',
      event_url: '',
      name: 'BGMI Tournament Ranchi',
      description: 'Registrations closed!',
      status: 'Event Ended',
    },
    
  ];

  upcomingEventsArraymobile:  EventItem[] = [
    {
      image_url: '../../../assets/images/meghalaya.png',
      event_url: '',
      name: 'Adventure in Meghalaya',
      description: "Join Us On a Trip to Meghalaya!",
      status: 'Register Now!',
    },
    {
      image_url: '../../../assets/images/Anifest 2.0.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'Anime FanFest Ranchi 2.0',
      description: "Jharkhand's Most Awaited Anime Fan-Fest Is Back!",
      status: 'Event Ended',
    },
    {
      image_url: '../../../assets/images/latent.jpg',
      event_url: "https://forms.gle/eks51VqwRqXH9LX57",
      name: 'Anifest Got Talent',
      description: "Anifest Ranchi's very own talent competition!",
      status: 'Event Ended',
    },
    {
      image_url: '../../../assets/images/carnival.jpg',
      event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
      name: 'Anime FanFest 1.0 Ranchi',
      description: "Jharkhand's First Anime Fan-Fest!",
      status: 'Event Ended',
    },
    {
      image_url: '../../../assets/images/Image Feb.jpeg',
      event_url: '',
      name: 'BGMI Tournament Ranchi',
      description: 'Registrations closed!',
      status: 'Event Ended',
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
    }
    else if (event.status === 'Register Now!') {
      sessionStorage.setItem('key', 'register');
      this.router.navigate(['/RegistrationPage']);
      //window.open(event.event_url, '_blank');
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
