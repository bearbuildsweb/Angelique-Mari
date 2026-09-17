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
    id: 'street-couture-and-nightfall',
    title: 'Street Couture and Nightfall',
    subtitle: 'PORTRAITURE & DIRECT-FLASH NOCTURNE',
    code: 'CATEGORY N° 01',
    description: 'Celebrating you — personality, style, and raw detail. From art-directed portraiture to direct-flash nightfall.',
    image: imageStreetCouture,
  },
  {
    id: 'weddings-and-celebrations',
    title: 'Weddings & celebrations',
    subtitle: 'THE BIG MOMENTS & QUIET GLANCES',
    code: 'CATEGORY N° 02',
    description: 'The big moments, the quiet glances, and everything in between. Unfolding emotion and laughter, documented as they happen.',
    image: imageJoburgWedding,
  },
  {
    id: 'brand-and-product-imagery',
    title: 'BRAND & PRODUCT IMAGERY',
    subtitle: 'PURPOSEFUL & STRIKING VISUALS',
    code: 'CATEGORY N° 03',
    description: 'Striking, purposeful imagery that articulates your vision, elevates your product, and commands attention.',
    image: imageBrandActivation,
  },
  {
    id: 'family-and-little-ones',
    title: 'Family & Little ones',
    subtitle: 'CONNECTION & BEAUTIFUL CHAOS',
    code: 'CATEGORY N° 04',
    description: 'Tiny toes, cheeky smiles, and the beautiful chaos of real life. The fleeting details you’ll treasure forever.',
    image: imageJoburgFamily,
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    subtitle: 'SPACES, DESTINATIONS & HOSPITALITY',
    code: 'CATEGORY N° 05',
    description: 'Exceptional spaces, destinations, and the finer textures of life. Architecture, hospitality, and atmosphere brought vividly to light.',
    image: imageJoburgLifestyle,
  },
];

export const WILDCARD_DATA = {
  id: 'outside-the-frame',
  tag: 'OUTSIDE THE FRAME',
  title: "Have an idea that doesn’t fit neatly into a category?",
  description: "Bring your vision, your mood board, or simply a spark of inspiration. We’ll turn the unconventional into something unforgettable.",
  line1: "Bring your vision, your mood board, or simply a spark of inspiration.",
  line2: "We’ll turn the unconventional into something unforgettable.",
};

export const PROJECTS: Project[] = [
  {
    id: 'street-couture-exhibit',
    title: 'Street Couture and Nightfall',
    category: 'Street Couture and Nightfall',
    year: '2026',
    image: imageStreetCouture,
    description: "Celebrating you — personality, style, and raw detail. From art-directed portraiture to direct-flash nightfall.",
    layoutType: 'overlapping',
    museumNumber: 'CATEGORY 01',
    location: 'Braamfontein & Maboneng • Johannesburg',
    credits: 'Creative Direction & Photography: Angelique-Mari',
    medium: 'High-Contrast Nightfall • Direct Flash & Ambient Luminescence',
    aspectRatio: '16/9'
  },
  {
    id: 'weddings-exhibit',
    title: 'Weddings & celebrations',
    category: 'Weddings & celebrations',
    year: '2026',
    image: imageJoburgWedding,
    description: "The big moments, the quiet glances, and everything in between. Unfolding emotion and laughter, documented as they happen.",
    layoutType: 'full',
    museumNumber: 'CATEGORY 02',
    location: 'Rosebank & Sandton • South Africa',
    credits: 'Creative Direction: Angelique-Mari',
    medium: 'Medium Format Editorial • Authentic Unfolding Light',
    aspectRatio: '3/4'
  },
  {
    id: 'brand-activation-exhibit',
    title: 'BRAND & PRODUCT IMAGERY',
    category: 'BRAND & PRODUCT IMAGERY',
    year: '2026',
    image: imageBrandActivation,
    description: "Striking, purposeful imagery that articulates your vision, elevates your product, and commands attention.",
    layoutType: 'asymmetric-right',
    museumNumber: 'CATEGORY 03',
    location: 'Johannesburg • Commercial & Spatial Sets',
    credits: 'Art Direction & Commercial Photography: Angelique-Mari',
    medium: 'High Dynamic Architectural • Commercial Purposeful Illumination',
    aspectRatio: '16/9'
  },
  {
    id: 'family-exhibit',
    title: 'Family & Little ones',
    category: 'Family & Little ones',
    year: '2026',
    image: imageJoburgFamily,
    description: "Tiny toes, cheeky smiles, and the beautiful chaos of real life. The fleeting details you’ll treasure forever.",
    layoutType: 'asymmetric-left',
    museumNumber: 'CATEGORY 04',
    location: 'Westcliff • Johannesburg',
    credits: 'Photography: Angelique-Mari',
    medium: 'Natural Daylight Lofts • Organic Emotive Textures',
    aspectRatio: '4/3'
  },
  {
    id: 'lifestyle-exhibit',
    title: 'Lifestyle',
    category: 'Lifestyle',
    year: '2026',
    image: imageJoburgLifestyle,
    description: "Exceptional spaces, destinations, and the finer textures of life. Architecture, hospitality, and atmosphere brought vividly to light.",
    layoutType: 'overlapping',
    museumNumber: 'CATEGORY 05',
    location: 'Maboneng Precinct & Destinations • South Africa',
    credits: 'Spatial Curation & Photography: Angelique-Mari',
    medium: '35mm Fine Grain • Architectural Daylight',
    aspectRatio: '21/9'
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
