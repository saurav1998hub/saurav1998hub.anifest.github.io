import { Router } from '@angular/router';
import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

enum SocialMediaUrls {
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
export class NavbarComponent {

  onClickedOutside() {
    // if(this.hamburgerOpen){
    //   this.hamburgerOpen = false; 
    // }
  }

  hamburgerOpen: boolean = false;
  constructor(private router: Router) {}

  hamburgerClicked() {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  routeToUrl(url: string) {
    const socialMediaUrl = (SocialMediaUrls as any)[url];
    if (url in SocialMediaUrls) {
      this.goToSocial(socialMediaUrl);
      this.hamburgerOpen = false;
    } else {
      this.router.navigate([url]);
      this.hamburgerOpen = false;
    }
  }

  goToSocial(url: string | URL | undefined) {
    window.open(url, '_blank');
  }
  ngOnDestroy(){
    this.hamburgerOpen = false;
  }

}
