import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  language: string = sessionStorage.getItem('appLanguageCode') || 'en';

  infoSlider: any[] = [
    {
      title: 'Consult with the doctor through voice and video',
      text: 'Skip the queue and consult with top doctors in the country. Book an appointment at your convenience and get your consultation on time.',
      buttonText: 'Book Now',
      imageUrl: './assets/images/landing/video_consultation.png',
      imageAlt: 'slide-1',
    },
    {
      title: 'Consult with top Doctors',
      text: 'Skip the queue and consult with top doctors in the country. Book an appointment at your convenience and get your consultation on time.',
      buttonText: 'Book an Appointment',
      imageUrl: './assets/images/landing/consultation_with_top_doctors.png',
      imageAlt: 'slide-2',
    },
    {
      title: 'Self Management',
      text: 'To improve your health awareness, get medical guidance from expert doctors. You can subscribe to different categories of Health Tips to get daily medical contents.',
      buttonText: 'Subscribe Now',
      imageUrl: './assets/images/landing/Self_management.png',
      imageAlt: 'slide-3',
    },
  ];

  changeLanguage(event: any) {}

  handleLogin() {}

  handleRegister() {}
}
