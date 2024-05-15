import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/interface/links';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss'],
})
export class InfoListComponent  implements OnInit {

  link: Links[] = [
    {
      logo: 'logo-github',
      color: 'dark',
      link: 'https://www.github.com/luizfiuzaa/'
    },
    {
      logo: 'logo-linkedin',
      color: 'primary',
      link: 'https://www.linkedin.com/in/luiz-fiuza-/'
    },
    {
      logo: 'mail',
      color: 'secondary',
      link: 'mailto:luizfiuza.b@gmail.com'
    },
  ];


  constructor() { }

  ngOnInit() {}

}
