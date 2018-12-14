import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PensService {
  constructor() {}

  Power: string;
  apps = [
    {
      id: 1,
      username: 'Laoz Ellison',
      this: 'facebook',
      then: 'blogger',
      thisimage: '../../assets/img/Facebook.png',
      thenimage: '../../assets/img/Blogger.png',
      settings: {
        switch: {
          Power: this.Power,
          timer: '10 minutes'
        }
      },
      runtime: '120'
    },
    {
      id: 1,
      username: 'Busayo walker',
      this: 'Truecaller',
      then: 'Text Messaging',
      thisimage: '../../assets/img/dialer.png',
      thenimage: '../../assets/img/messaging.png',
      settings: {
        switch: {
          Power: this.Power,
          timer: '10 minutes'
        }
      },
      runtime: '120'
    },
    {
      id: 2,
      username: 'Dammy',
      this: 'twitter',
      then: 'wordpress',
      thisimage: '../../assets/img/twitter.png',
      thenimage: '../../assets/img/wordpress.png',
      settings: {
        switch: {
          Power: 'off',
          timer: '12 minutes'
        }
      },
      runtime: '140'
    },
    {
      id: 3,
      username: 'Jon Smith',
      this: 'instagram',
      then: 'pintrest',
      thisimage: '../../assets/img/instagram.png',
      thenimage: '../../assets/img/pinterest.png',
      settings: {
        switch: {
          Power: 'off',
          timer: '5 minutes'
        }
      },
      runtime: '120'
    },
    {
      id: 4,
      username: 'Lukas Grams',
      this: 'translate',
      then: 'Wordpress',
      thisimage: '../../assets/img/google_translate.png',
      thenimage: '../../assets/img/wordpress.png',
      settings: {
        switch: {
          Power: 'off',
          timer: '5 minutes'
        }
      },
      runtime: '123'
    }
  ];
}
