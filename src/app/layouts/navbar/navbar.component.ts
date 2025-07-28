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

enum SocialMediaUrls {
  Instagram = 'https://www.instagram.com/anifest.in?igsh=MWlpNmpxZjB1a2Q0Mg==',
  x = 'https://x.com/Anifest_in?t=hdQ__FM9z-s1d8iU2z-85Q&s=09',
  youtube = 'https://www.youtube.com/@ANIFESTYT',
}
enum Registrations {
  Volunteer = 'https://docs.google.com/forms/d/e/1FAIpQLSdws1u7Nx_ohM0EisPw7Jf1Bd1VvF_PTwFqOV9wkL2KvGDdgQ/viewform',
  Cosplay = 'https://forms.gle/S92dJ5qbpW2H1Hg47',
  Manga = 'https://forms.gle/vpsNSzA33C6L9PbX7',
  Talent = 'https://forms.gle/eks51VqwRqXH9LX57',
  Workshop = 'https://docs.google.com/forms/d/e/1FAIpQLSeJZL5kNsLhSYttjQnfHCwtKyGhSOFk8R4ih_KH6_y15iVBKg/viewform',
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
  menuOpen = false;
  showregstrationMob = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
event($event: Event) {
throw new Error('Method not implemented.');
}
  contdownValid: boolean = true;

  endContdown(event: boolean) {
    if(event==true){
      this.contdownValid= false;
    }
  }

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
    this.menuOpen = false;
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
