import { Component } from '@angular/core';
interface EventItem {
  imgArray:any[];
  event_url: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-prev-events',
  templateUrl: './prev-events.component.html',
  styleUrls: ['./prev-events.component.scss']
})
export class PrevEventsComponent {
  pastEventsArray:EventItem[] = [{
    imgArray: ['../../../assets/images/Image.jpg'],
    event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
    name: '../../../assets/images/Comic Text Effect copy.png',
    description: '',
    status: 'Event Ended'
  },
  {
    imgArray: ['../../../assets/images/Nov 26 2023 Resized Photo.jpg','../../../assets/images/Nov image.webp','../../../assets/images/Nov 26 Image.webp','../../../assets/images/Nov 26.jpg'],
    event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
    name: '../../../assets/images/Comic (1) copy 2.png',
    description: '',
    status: 'Event Ended'
  },
  {
    imgArray:['../../../assets/images/Dec 24 Photo 202 (1).jpg','../../../assets/images/Dec 24 Image (1).jpg','../../../assets/images/Dec 24 Image.jpg','../../../assets/images/Dec resized.jpg'],
    event_url: 'https://www.townscript.com/v2/widget/anifest-303310/booking',
    name: '../../../assets/images/iwteyp.png',
    description: '',
    status: 'Event Ended'
  }];
}
