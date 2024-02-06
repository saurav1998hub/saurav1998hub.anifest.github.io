import { Component } from '@angular/core';
enum SocialMediaUrls{
  Instagram = 'https://www.instagram.com/anifestranchi/',
  YouTube = 'https://youtube.com/@LazyWeebsPodcast?si=lkpRbXGDeVEGXt_1',
  Discord = 'https://discord.gg/K9AfkRb8',
  WhatsApp = 'https://chat.whatsapp.com/LCzFrIBwunE6HJ7JpDQjeY',
  Telegram = 'https://t.me/medeepaksinghanya'
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  routeToUrl(url: string) {
    const socialMediaUrl = (SocialMediaUrls as any)[url];
    if (url in SocialMediaUrls) {
      this.goToSocial(socialMediaUrl);
    }
  }

  goToSocial(url: string | URL | undefined) {
    window.open(url, '_blank');
  }
}
