export interface Project {
  image: string;
  title: string;
  desc: string;
  deploy?: string;
  code?: string;
}

export interface ProjectTechs {
  techs_name: String[];
  techs_logos: String[];
  techs_color: String[];
}