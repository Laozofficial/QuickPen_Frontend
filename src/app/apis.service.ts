import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor() {}

  apis = [
    {
      name: 'facebook',
      icon: '../../assets/img/Facebook.png',
      connect: 'https://www.facebook.com'
    },
    {
      name: 'twitter',
      icon: '../../assets/img/twitter.png',
      connect: 'https://www.twitter.com'
    },
    {
      name: 'gmail',
      icon: '../../assets/img/gmail.png',
      connect: 'https://www.gmail.com'
    },
    {
      name: 'linkedin',
      icon: '../../assets/img/linkedin.png',
      connect: 'https://www.linkedin.com'
    },
    {
      name: 'google-Plus',
      icon: '../../assets/img/googleplus.png',
      connect: 'https://www.googleplus.com'
    },
    {
      name: 'phone-dialer',
      icon: '../../assets/img/dialer.png'
    },
    {
      name: 'messaging',
      icon: '../../assets/img/messaging.png'
    },
    {
      name: 'wordpress',
      icon: '../../assets/img/wordpress.png',
      connect: 'https://www.wordpress.com'
    },
    {
      name: 'wifi',
      icon: '../../assets/img/wifi.png'
    },
    {
      name: 'pintrest',
      icon: '../../assets/img/pinterest.png',
      connect: 'https://www.pintrest.com'
    },
    {
      name: 'Google-Maps',
      icon: '../../assets/img/maps.png'
    },
    {
      name: 'Google-Translate',
      icon: '../../assets/img/google_translate.png'
    },
    {
      name: 'instagram',
      icon: '../../assets/img/instagram.png',
      connect: 'https://www.blogger.com'
    },
    {
      name: 'blogger',
      icon: '../../assets/img/Blogger.png',
      connect: 'https://www.blogger.com'
    }
  ];
}
