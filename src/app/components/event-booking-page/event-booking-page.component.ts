import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-event-booking-page',
  templateUrl: './event-booking-page.component.html',
  styleUrls: ['./event-booking-page.component.scss']
})
export class EventBookingPageComponent {
  goToUrl(url: string | URL | undefined) {
    window.open(url, '_blank');
  }
  isIframeLoading:boolean = true;
  iframeLoaded:boolean = false;
  hotelurl='https://www.hotelelitecity.com';
  driveUrl='https://drive.google.com/file/d/1adTSAJubJLg203f0ghBiZMR4a6JIUXUA/view?usp=drivesdk';
  formUrl='https://forms.gle/6425SWH23LVWyqz46';
  data = sessionStorage.getItem('key');
  constructor(private router: Router) {}
  ngOnInit() {
    if(this.data===null){
      this.router.navigate(['/Events']);
    }
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

  ngOnDestroy(){
    sessionStorage.clear();
  }
}
