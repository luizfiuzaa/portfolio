import { Techs } from 'src/app/interface/techs';

export interface Project {
  image: string;
  title: string;
  desc: string;
  deploy?: string;
  code?: string;
  techs: Techs[];
}
