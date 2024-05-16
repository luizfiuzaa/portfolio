import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/interface/links';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss'],
})
export class InfoListComponent  implements OnInit {

  links: Links[] = [
    {
      text: '/luizfiuzaa',
      logo: 'logo-github',
      color: 'dark',
      uri: 'https://www.github.com/luizfiuzaa/'
    },
    {
      text: 'in/luiz-fiuza-',
      logo: 'logo-linkedin',
      color: 'primary',
      uri: 'https://www.linkedin.com/in/luiz-fiuza-/'
    },
    {
      text: 'luizfiuza.b@gmai.com',
      logo: 'mail',
      color: 'secondary',
      uri: 'mailto:luizfiuza.b@gmail.com'
    },
  ];


  constructor() { }

  ngOnInit() {}

}
