export interface Feature {
  title: string;
  body: string;
  icon: string;
}

export interface Details {
  question: string;
  details: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  percent: string;
}

export interface Project {
  name: string;
  image: string;
}
