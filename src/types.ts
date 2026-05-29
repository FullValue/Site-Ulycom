export interface Project {
  id: string;
  name: string;
  serifAccent: string;
  tagline: string;
  description: string;
  image: string;
  client: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  serifAccent: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  serifAccent: string;
  description: string;
}
