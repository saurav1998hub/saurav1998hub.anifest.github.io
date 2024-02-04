import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter, first } from 'rxjs';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  eventsArray: any[]= [
    {
      image_url:"../../../assets/images/Image.jpeg",
      event_url: "https://www.townscript.com/v2/widget/anifest-303310/booking",
      name:"Anime FanFest Ranchi",
      descripton:"Jharkhand's First Comic-Con!",
      status:"Book Now"
    },
    {
      image_url:"./../../assets/images/Image Feb.jpeg",
      event_url: "https://www.townscript.com/v2/widget/anifest-303310/booking",
      name: "BGMI TOURNAMENT",
      descripton:"Coming Soon!",
      status:'Coming Soon'
    },
    {
      image_url:"../../../assets/images/Image Creator (7).jpeg",
      event_url: "https://www.townscript.com/v2/widget/anifest-303310/booking",
      name:'Dummy Name',
      descripton:'Dummy Name',
      status:'Event Ended'
    },
    {
      image_url:"../../../assets/images/Image Creator (7).jpeg",
      event_url: "https://www.townscript.com/v2/widget/anifest-303310/booking",
      name:'Dummy Name',
      descripton:'Dummy Name',
      status:'Event Ended'
    }
  ];

  constructor(private router: Router) {}

  redirectToBooking(event: any) {
    if(event.status == 'Book Now'){
      this.router.navigate(['/BookingPage']);
    }
  }

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
