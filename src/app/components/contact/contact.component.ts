import { Component } from '@angular/core';
enum SocialMediaUrls{
  Instagram = 'https://www.instagram.com/anifest.in?igsh=MWlpNmpxZjB1a2Q0Mg==',
  x = 'https://x.com/Anifest_in?t=hdQ__FM9z-s1d8iU2z-85Q&s=09',
  youtube = 'https://www.youtube.com/@ANIFESTYT',
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
