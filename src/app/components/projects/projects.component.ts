import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Project } from 'src/app/interface/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [{
    image: '../../../assets/images/images_projects/project_JEV-A.png',
    title: 'Josy Espaço VIP - Agendamentos',
    desc: 'Sistema de agendamento e gerenciamento de serviços e clientes, para o salão de beleza Josy ESpaço VIP.',
    deploy: '',
    code: '',
    techs: [
      {
        name: 'Angular',
        logo: 'logo-angular',
        color: 'danger',
      },
      {
        name: 'Ionic Framework',
        logo: 'logo-ionic',
        color: 'primary',
      },
      {
        name: 'Git/GitHub',
        logo: 'logo-github',
        color: 'dark',
      },
      {
        name: 'Figma',
        logo: 'logo-figma',
        color: 'tertiary',
      },
      {
        name: 'Chart.js',
        logo: 'library',
        color: 'warning',
      },
      {
        name: 'Sass',
        logo: 'logo-sass',
        color: 'danger',
      },
    ],
  },{
    image: '../../../assets/images/images_projects/project_Linkstation.png',
    title: 'LinkStation',
    desc: 'Aplicação indexador dos meus links de acesso, utilizando Figma para o Design da interface, Angular e Ionic para a contrução da página',
    deploy: '',
    code: '',
    techs: [
      {
        name: 'Angular',
        logo: 'logo-angular',
        color: 'danger',
      },
      {
        name: 'Ionic Framework',
        logo: 'logo-ionic',
        color: 'primary',
      },
      {
        name: 'Git/GitHub',
        logo: 'logo-github',
        color: 'dark',
      },
      {
        name: 'Figma',
        logo: 'logo-figma',
        color: 'tertiary',
      },
      {
        name: 'Sass',
        logo: 'logo-sass',
        color: 'danger',
      },
    ],
  },{
    image: '../../../assets/images/images_projects/project_LoginPage.png',
    title: 'Login Page',
    desc: 'Página de login feita com Bootstrap, utilizando Figma para auxiliar no design da interdface',
    deploy: '',
    code: '',
    techs: [
      {
        name: 'Angular',
        logo: 'logo-angular',
        color: 'danger',
      },
      {
        name: 'Ionic Framework',
        logo: 'logo-ionic',
        color: 'primary',
      },
      {
        name: 'Git/GitHub',
        logo: 'logo-github',
        color: 'dark',
      },
      {
        name: 'Figma',
        logo: 'logo-figma',
        color: 'tertiary',
      },
      {
        name: 'Sass',
        logo: 'logo-sass',
        color: 'danger',
      },
    ],
  },
  ];


  constructor() { }

  ngOnInit() { }

}
