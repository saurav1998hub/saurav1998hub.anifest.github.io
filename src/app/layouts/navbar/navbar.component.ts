import { Router } from '@angular/router';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

enum SocialMediaUrls {
  Instagram = 'https://www.instagram.com/anifestranchi/',
  YouTube = 'https://youtube.com/@LazyWeebsPodcast?si=lkpRbXGDeVEGXt_1',
  Discord = 'https://discord.gg/K9AfkRb8',
}
enum Registrations {
  Volunteer = 'https://docs.google.com/forms/d/e/1FAIpQLSf1YkjCCb48XtgBQUjSyIsrPEZR27_QNqcBJ7Mio8igCvTF6w/viewform?usp=sf_link',
  Cosplay = 'https://forms.gle/A4eepuJjm1CBQPNE7',
}
@Component({
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent {
  
  redirectToBooking() {}
  registraionClicked() {
    this.registrationButtonClicked = !this.registrationButtonClicked;
    this.showregstration = this.registrationButtonClicked;
  }

  @ViewChild('targetDiv') targetDiv: ElementRef | null = null;
  showregstration: boolean = false;
  registrationButtonClicked = false;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.targetDiv && this.targetDiv.nativeElement) {
      const clickedInside = this.targetDiv.nativeElement.contains(event.target);
      // if (!clickedInside) {
      //   this.showregstration  = false;
      // }
    }
  }

  ngAfterViewInit() {
    if (this.targetDiv && this.targetDiv.nativeElement) {
      // Access targetDiv here
    }
  }

  hamburgerOpen: boolean = false;
  constructor(private router: Router) {}

  hamburgerClicked() {
    this.hamburgerOpen = !this.hamburgerOpen;
    this.showregstration = false;
  }

  routeToUrl(url: string) {
    this.showregstration = false;
    const socialMediaUrl = (SocialMediaUrls as any)[url];
    const registration = (Registrations as any)[url];
    if (url in SocialMediaUrls) {
      this.goToSocial(socialMediaUrl);
      this.hamburgerOpen = false;
    } else if (url in Registrations) {
      this.goToSocial(registration);
      this.hamburgerOpen = false;
    } else {
      this.router.navigate([url]);
      this.hamburgerOpen = false;
    }
  }

  goToSocial(url: string | URL | undefined) {
    window.open(url, '_blank');
  }
  ngOnDestroy() {
    this.hamburgerOpen = false;
    this.showregstration = false;
  }
}
