import { Component, OnInit } from '@angular/core';
import { Techs } from 'src/app/interface/techs';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss'],
})
export class TechsComponent implements OnInit {
  techs: Techs[] = [
    {
      name: 'Angular',
      logo: 'logo-angular',
      color: 'danger',
    },
    {
      name: 'Ionic',
      logo: 'logo-ionic',
      color: 'primary',
    },
    {
      name: 'JavaScript',
      logo: 'logo-javascript',
      color: 'warning',
    },
    {
      name: 'Bootstrap',
      logo: 'layers',
      color: 'tertiary',
    },
    {
      name: 'Figma',
      logo: 'logo-figma',
      color: 'tertiary',
    },
    {
      name: 'Arduino',
      logo: 'hardware-chip',
      color: 'secondary',
    },
    {
      name: 'Sass',
      logo: 'logo-sass',
      color: 'danger',
    },
    {
      name: 'PHP',
      logo: 'server',
      color: 'tertiary',
    },
    {
      name: 'MySQL',
      logo: 'server',
      color: 'secondary',
    },
    {
      name: 'Git/GitHub',
      logo: 'logo-github',
      color: 'dark',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
