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
      name: 'Ionic Framewrok',
      logo: 'logo-ionic',
      color: 'primary',
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
      name: 'Git/GitHub',
      logo: 'logo-github',
      color: 'dark',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
