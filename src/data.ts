import { Project, Service, Testimonial } from './types';

import imageDjdDuo from './assets/images/rhythm_neon_ref1_1784718329931.jpg';
import imageConnectedCity from './assets/images/connected_city_joburg_1784717476738.jpg';
import imageAfterDark from './assets/images/after_dark_braamfontein_1784717492565.jpg';
import imageSmartphoneActivation from './assets/images/smartphone_ref2_1784718347070.jpg';
import imageStreetCouture from './assets/images/street_couture_maboneng_1784717507856.jpg';

import imageJoburgLifestyle from './assets/images/joburg_lifestyle_maboneng_1785698449438.jpg';
import imageJoburgWedding from './assets/images/joburg_wedding_editorial_1785698386628.jpg';
import imageJoburgFamily from './assets/images/joburg_family_contemporary_1785698464551.jpg';
import imageBrandActivation from './assets/images/smartphone_activation_campaign_1784717905366.jpg';

import imageHeroModel from './assets/images/hero_model_1784538034499.jpg';
import imageFashionCampaign from './assets/images/fashion_campaign_1784538048818.jpg';
import imageSculpturalBranding from './assets/images/sculptural_branding_1784538077850.jpg';
import imageClientPortraitOne from './assets/images/client_portrait_1784538092196.jpg';
import imageClientPortraitTwo from './assets/images/client_portrait_two_1784538111533.jpg';

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  description: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    subtitle: 'STREET CULTURE & INDIVIDUALITY',
    code: 'CATEGORY N° 01',
    description: 'Johannesburg street culture, fashion, movement, individuality and candid moments.',
    image: imageJoburgLifestyle,
  },
  {
    id: 'weddings-and-celebrations',
    title: 'Weddings & Celebrations',
    subtitle: 'MODERN CELEBRATION & EDITORIAL',
    code: 'CATEGORY N° 02',
    description: 'Modern South African weddings with fashion-forward styling and architectural environments.',
    image: imageJoburgWedding,
  },
  {
    id: 'family-and-little-ones',
    title: 'Family & Little Ones',
    subtitle: 'CONTEMPORARY CONNECTION',
    code: 'CATEGORY N° 03',
    description: 'Warm, contemporary family moments with natural interaction and stylish environments.',
    image: imageJoburgFamily,
  },
  {
    id: 'brand-and-corporate-activation',
    title: 'Brand & Corporate Activation',
    subtitle: 'CAMPAIGNS, EVENTS & BRANDS',
    code: 'CATEGORY N° 04',
    description: 'South African brands, creative professionals, launches, events and campaign environments.',
    image: imageBrandActivation,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'lifestyle-exhibit',
    title: 'Lifestyle',
    category: 'Lifestyle',
    year: '2026',
    image: imageJoburgLifestyle,
    description: "Johannesburg street culture, fashion, movement, individuality and candid editorial moments captured in Maboneng Precinct.",
    layoutType: 'overlapping',
    museumNumber: 'EXHIBIT N° 01',
    location: 'Maboneng Precinct • Johannesburg',
    credits: 'Styling: Maboneng Atelier • Photography: Angelique-Mari',
    medium: '35mm Fine Grain Negative • Architectural Directional Light',
    aspectRatio: '16/9'
  },
  {
    id: 'weddings-exhibit',
    title: 'Weddings & Celebrations',
    category: 'Weddings & Celebrations',
    year: '2026',
    image: imageJoburgWedding,
    description: "Modern South African wedding photography with fashion-forward styling, architectural environments, dramatic portraits and genuine celebration.",
    layoutType: 'full',
    museumNumber: 'EXHIBIT N° 02',
    location: 'Rosebank & Sandton • South Africa',
    credits: 'Creative Direction: Angelique-Mari',
    medium: 'Medium Format Digital • Chiaroscuro Stage Lighting',
    aspectRatio: '16/9'
  },
  {
    id: 'family-exhibit',
    title: 'Family & Little Ones',
    category: 'Family & Little Ones',
    year: '2026',
    image: imageJoburgFamily,
    description: "Warm, contemporary family moments with natural interaction and stylish environments captured in natural light lofts.",
    layoutType: 'asymmetric-left',
    museumNumber: 'EXHIBIT N° 03',
    location: 'Westcliff • Johannesburg',
    credits: 'Photography: Angelique-Mari',
    medium: 'Low-Light High Dynamic Range • Natural Daylight',
    aspectRatio: '4/3'
  },
  {
    id: 'brand-activation-exhibit',
    title: 'Brand & Corporate Activation',
    category: 'Brand & Corporate Activation',
    year: '2026',
    image: imageBrandActivation,
    description: "South African brands, creative professionals, launches, events and campaign environments with high-street fashion flair.",
    layoutType: 'asymmetric-right',
    museumNumber: 'EXHIBIT N° 04',
    location: 'Johannesburg Expo Centre • South Africa',
    credits: 'Art Direction & Spatial Design: Angelique-Mari',
    medium: 'High Dynamic Range Architectural • Clean Commercial Illumination',
    aspectRatio: '16/9'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'editorial-photography',
    title: 'Editorial Photography',
    subtitle: 'High-Impact Medium Format Imagery',
    image: imageHeroModel,
    copy: 'Captured on medium format film, crafting high-impact imagery that bridges modern art and raw emotion. Designed for couture houses, galleries, and selective publications seeking an uncompromised viewpoint.',
    details: [
      'Medium & Large Format Analogue Film',
      'Editorial Lookbooks & Campaigns',
      'Artistic Retouching & Color Archetypes',
      'High-Contrast Studio & Location Sets'
    ],
    number: '01'
  },
  {
    id: 'brand-campaigns',
    title: 'Brand Campaigns',
    subtitle: 'Cohesive Visual Worldbuilding',
    image: imageFashionCampaign,
    copy: 'Crafting distinct, unforgettable visual universes from initial concept to master asset delivery. High-impact campaigns that command space, evoke desire, and project underground elegance.',
    details: [
      'Seasonal Campaign Orchestration',
      'Branding & Visual Asset Synthesis',
      'Multi-Platform Creative Strategy',
      'Architectural & Spatial Styling'
    ],
    number: '02'
  },
  {
    id: 'portrait-sessions',
    title: 'Portrait Sessions',
    subtitle: 'Cinematic Character Studies',
    image: imageClientPortraitTwo,
    copy: 'Unfiltered, intense, cinematic character studies. Focused on geometry, expression, and natural human texture under custom-sculpted natural and artificial lighting designs.',
    details: [
      'Intimate Studio Character Studies',
      'High-Fashion Artist Headshots',
      'Experimental High-Key & Low-Key Lighting',
      'Organic Skin Textures (No False Retouching)'
    ],
    number: '03'
  },
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    subtitle: 'Architectural Orchestration & Curation',
    image: imageSculpturalBranding,
    copy: 'Translating abstract brand core values into concrete tactile and visual experiences. Overseeing casting, styling, location curation, and typographic hierarchies for cohesive catalogs.',
    details: [
      'Complete Conceptual Treatment Maps',
      'Casting, Styling & Prop Curation',
      'Exhibition & Gallery Layout Consultations',
      'Typography & Editorial Layout Strategy'
    ],
    number: '04'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Angelique-Mari did not just photograph our collection; they designed an entire sensory environment. Our capsule sold out within six hours of the catalog release. The negative space is pure art.',
    author: 'Clara Vance',
    role: 'Creative Director',
    company: 'Atelier Miss Archive',
    image: imageClientPortraitOne,
    year: '2026',
    rating: 5
  },
  {
    id: 't2',
    quote: 'Working with her is like stepping into a cinematic film. Her uncompromising eye for negative space, harsh lighting, and architectural styling has redefined our visual identity completely.',
    author: 'Hiroshi Sato',
    role: 'Lead Curator',
    company: 'Tokyo Tunnel Gallery',
    image: imageClientPortraitTwo,
    year: '2026',
    rating: 3.5
  },
  {
    id: 't3',
    quote: 'From concept treatment to execution in Maboneng, the craftsmanship is museum-grade. Every frame projects quiet luxury, high-street authority, and effortless cultural resonance.',
    author: 'Keneilwe Dlamini',
    role: 'Brand Lead',
    company: 'Maboneng Atelier',
    image: imageHeroModel,
    year: '2026',
    rating: 3
  }
];
