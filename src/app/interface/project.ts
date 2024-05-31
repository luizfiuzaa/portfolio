export interface Tech {
  name: string;
  logo: string;
  color: string;
}

export interface Project {
  image: string;
  title: string;
  desc: string;
  deploy?: string;
  post?: string;
  code?: string;
  techs: Tech[];
}