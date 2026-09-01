export interface Skills {
  title: string;
  sections: SkillSection[];
}

export interface SkillSection {
  title: string;
  skills: string[];
}

export interface Milestone {
  name: string;
  role: string;
  date: string;
  tasks: string[];
}

export interface Experience {
  title: string;
  jobs: Milestone[];
}

export interface Projects {
  title: string;
  items: Project[];
}

export interface Project {
  name: string;
  description: string;
  tecnologies: string[];
  links: ProjectLink[];
  images: string[];
  videos: string[];
}

export interface ProjectLink {
  text: string;
  url: string;
}
