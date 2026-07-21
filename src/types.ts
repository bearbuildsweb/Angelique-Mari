export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  layoutType: 'full' | 'asymmetric-left' | 'asymmetric-right' | 'overlapping';
  museumNumber: string;
  location?: string;
  credits?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  copy: string;
  details: string[];
  number: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  year: string;
}
