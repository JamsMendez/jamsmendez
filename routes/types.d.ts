export interface Skills {
  title: string;
  sections: Section[];
}

export interface Section {
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
  links: Link[];
  images: string[];
  videos: string[];
}

export interface Link {
  text: string;
  url: string
}
