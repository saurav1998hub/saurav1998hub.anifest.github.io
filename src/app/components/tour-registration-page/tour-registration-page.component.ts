import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-registration-page',
  standalone: true,
  imports: [],
  templateUrl: './tour-registration-page.component.html',
  styleUrls: ['./tour-registration-page.component.scss']
})
export class TourRegistrationPageComponent {
  brochureUrl = '../../../assets/Meghalaya By Anifest .pdf';
  registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdD_wgySEXWlQ_IzFDejlOv7StmWIqHf0oX6D6kLht8Z4_Q1Q/viewform';
  
  downloadBrochure() {
    // Optional: programmatically trigger download if needed
    window.open(this.brochureUrl, '_blank');
  }

  openRegistrationForm() {
    window.open(this.registrationFormUrl, '_blank');
  }
}
