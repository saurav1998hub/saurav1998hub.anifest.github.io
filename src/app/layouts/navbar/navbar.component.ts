import { Router } from '@angular/router';
import { Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from "@angular/core";

enum SocialMediaUrls{
  Instagram = 'https://www.instagram.com/anifestranchi/',
  YouTube = 'https://youtube.com/@LazyWeebsPodcast?si=lkpRbXGDeVEGXt_1',
  Discord = 'https://discord.gg/K9AfkRb8',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class NavbarComponent{

  hamburgerOpen: any;
  constructor(private router: Router) {}

  hamburgerClicked() {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  routeToUrl(url: string) {
    const socialMediaUrl = (SocialMediaUrls as any)[url];
    if (url in SocialMediaUrls) {
      this.goToSocial(socialMediaUrl);
    } else {
      this.router.navigate([url]);
    }
  }

  

  goToSocial(url: string | URL | undefined) {
    const isSecureContext = window.location.protocol === 'https:';

    if (isSecureContext) {
      window.open(url, '_blank');
    } else {
      alert(
        'Your current context is not secure enough to open Instagram. Please visit ' +
          url +
          ' directly in your browser.'
      );
    }
  }
}
