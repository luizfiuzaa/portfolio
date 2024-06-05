import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Project } from 'src/app/interface/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      image: './assets/images/images_projects/project_JEV-A.png',
      title: 'Josy Espaço VIP',
      desc: 'Sistema de agendamento e gerenciamento de serviços e clientes, para o salão de beleza Josy Espaço VIP.',
      code: 'https://github.com/luizfiuzaa/tcc_josy_espaco_vip',
      techs: [
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
    {
      image: '../../../assets/images/images_projects/project_Linkstation.png',
      title: 'LinkStation',
      desc: 'Aplicação indexador dos meus links de acesso, utilizando Figma para o Design da interface, Angular e Ionic para a contrução da página',
      deploy: '',
      code: 'https://github.com/luizfiuzaa/linkstation',
      techs: [
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
    {
      image: '../../../assets/images/images_projects/project_LoginPage.png',
      title: 'Login Page',
      desc: 'Página de login feita com HTML, CSS e Bootstrap. Utilizando Figma para auxiliar no design da interface',
      deploy: 'https://luizfiuzaa.github.io/projeto_figma/',
      code: 'https://github.com/luizfiuzaa/projeto_figma',
      techs: [
        {
          name: 'HTML',
          logo: 'logo-html5',
          color: 'orange',
        },
        {
          name: 'CSS',
          logo: 'logo-css3',
          color: 'primary',
        },
        {
          name: 'Bootstrap',
          logo: 'layers',
          color: 'tertiary',
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
      ],
    },
    {
      image:
        '../../../assets/images/images_projects/project_LoginPageTinder.png',
      title: 'Tinder Login Page',
      desc: 'Página de login do Tinder feita com Flutter, desafio do Jacob do Flutterando TV',
      code: 'https://github.com/luizfiuzaa/tinder_flutter',
      techs: [
        {
          name: 'Flutter',
          logo: 'laptop-outline',
          color: 'secondary',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
