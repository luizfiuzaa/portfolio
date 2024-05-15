import { Component, OnInit } from '@angular/core';
import { LearningTechs } from 'src/app/interface/techs';

@Component({
  selector: 'app-learning-techs',
  templateUrl: './learning-techs.component.html',
  styleUrls: ['./learning-techs.component.scss'],
})
export class LearningTechsComponent  implements OnInit {


  learningTechs: LearningTechs[] = [{
    name: 'Flutter',
    logo: 'laptop-outline',
    color: 'secondary'
  },
  {
    name: 'Laravel',
    logo: 'logo-laravel',
    color: 'danger'
  },
  {
    name: 'C',
    logo: 'code',
    color: 'secondary'
  },];

  constructor() { }

  ngOnInit() {}

}
