import { Project, Service, Testimonial } from './types';

import imageYourStageArtist from './assets/images/your_stage_artist_1790821122692.jpg';
import imageBrideGroomStories from './assets/images/bride_groom_stories_1790817999258.jpg';
import imageJoburgFamily from './assets/images/joburg_family_contemporary_1785698464551.jpg';
import imageJoburgLifestyle from './assets/images/joburg_lifestyle_maboneng_1785698449438.jpg';

import imageDjdDuo from './assets/images/rhythm_neon_ref1_1784718329931.jpg';
import imageConnectedCity from './assets/images/connected_city_joburg_1784717476738.jpg';
import imageAfterDark from './assets/images/after_dark_braamfontein_1784717492565.jpg';
import imageSmartphoneActivation from './assets/images/smartphone_ref2_1784718347070.jpg';
import imageStreetCouture from './assets/images/street_couture_maboneng_1784717507856.jpg';
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
    id: 'bride-and-groom-stories',
    title: 'Bride & Groom Stories',
    subtitle: 'THE BIG MOMENTS & QUIET GLANCES',
    code: 'CATEGORY N° 01',
    description: "The big moments, the quiet glances and everything in between. I’ll capture your day as it unfolds, preserving the emotion, laughter and details you’ll want to revisit for years to come.",
    image: imageBrideGroomStories,
  },
  {
    id: 'your-stage',
    title: 'Your Stage',
    subtitle: 'RAW ARTISTRY, CREATIVES & TACTILE EXPRESSION',
    code: 'CATEGORY N° 02',
    description: 'The creative spotlight, raw artistry, and creators commanding their craft. Presence, tactile expression, and authentic vision brought into sharp focus.',
    image: imageYourStageArtist,
  },
  {
    id: 'family-moments',
    title: 'Family Moments',
    subtitle: 'CONNECTION & BEAUTIFUL CHAOS',
    code: 'CATEGORY N° 03',
    description: "The little moments, the biggest memories. From tiny toes and cheeky smiles to the beautiful chaos of family life, I capture the genuine connections and precious details you’ll treasure for years to come.",
    image: imageJoburgFamily,
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    subtitle: 'SPACES, DESTINATIONS & CULTURE',
    code: 'CATEGORY N° 04',
    description: "Beautiful spaces, unforgettable destinations and the finer details of life. From luxury cars and elegant interiors to breathtaking getaways and exceptional hospitality, I create captivating imagery that brings your brand, space or experience to life.",
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
    id: 'bride-and-groom-exhibit',
    title: 'Bride & Groom Stories',
    category: 'BRIDE & GROOM STORIES',
    year: '2026',
    image: imageBrideGroomStories,
    description: "The big moments, the quiet glances and everything in between. I’ll capture your day as it unfolds, preserving the emotion, laughter and details you’ll want to revisit for years to come.",
    layoutType: 'overlapping',
    museumNumber: 'CATEGORY 01',
    location: 'Cathedral Courtyard • Architectural Editorial',
    credits: 'Creative Direction & Photography: Angelique-Mari',
    medium: 'Medium Format Film • Cathedral Stone & Golden Sunlight',
    aspectRatio: '16/9'
  },
  {
    id: 'your-stage-exhibit',
    title: 'Your Stage',
    category: 'YOUR STAGE',
    year: '2026',
    image: imageYourStageArtist,
    description: "The creative spotlight, raw artistry, and creators commanding their craft. Presence, tactile expression, and authentic vision brought into sharp focus.",
    layoutType: 'asymmetric-left',
    museumNumber: 'CATEGORY 02',
    location: 'Art Loft & Studio • Johannesburg',
    credits: 'Creative Direction & Photography: Angelique-Mari',
    medium: '35mm Film & Natural Daylight • Visual Artist Series',
    aspectRatio: '3/4'
  },
  {
    id: 'family-moments-exhibit',
    title: 'Family Moments',
    category: 'FAMILY MOMENTS',
    year: '2026',
    image: imageJoburgFamily,
    description: "The little moments, the biggest memories. From tiny toes and cheeky smiles to the beautiful chaos of family life, I capture the genuine connections and precious details you’ll treasure for years to come.",
    layoutType: 'asymmetric-right',
    museumNumber: 'CATEGORY 03',
    location: 'Westcliff • Johannesburg Lofts',
    credits: 'Photography: Angelique-Mari',
    medium: 'Natural Daylight Lofts • Organic Emotive Textures',
    aspectRatio: '4/3'
  },
  {
    id: 'lifestyle-exhibit',
    title: 'Lifestyle',
    category: 'LIFESTYLE',
    year: '2026',
    image: imageJoburgLifestyle,
    description: "Beautiful spaces, unforgettable destinations and the finer details of life. From luxury cars and elegant interiors to breathtaking getaways and exceptional hospitality, I create captivating imagery that brings your brand, space or experience to life.",
    layoutType: 'full',
    museumNumber: 'CATEGORY 04',
    location: 'Maboneng Precinct & Cultural Spaces • South Africa',
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
    rating: 5,
    emotionalReaction: 'blown-away',
    emotionalLabel: 'Blown Away',
    projectType: 'Brand & Product Imagery',
    date: 'Sep 2026'
  },
  {
    id: 't2',
    quote: 'Working with her is like stepping into a cinematic film. Her uncompromising eye for negative space, harsh lighting, and architectural styling has redefined our visual identity completely.',
    author: 'Hiroshi Sato',
    role: 'Lead Curator',
    company: 'Tokyo Tunnel Gallery',
    image: imageClientPortraitTwo,
    year: '2026',
    rating: 4.5,
    emotionalReaction: 'impressed',
    emotionalLabel: 'Impressed',
    projectType: 'Street Couture & Nightfall',
    date: 'Aug 2026'
  },
  {
    id: 't3',
    quote: 'From concept treatment to execution in Maboneng, the craftsmanship is museum-grade. Every frame projects quiet luxury, high-street authority, and effortless cultural resonance.',
    author: 'Keneilwe Dlamini',
    role: 'Brand Lead',
    company: 'Maboneng Atelier',
    image: imageHeroModel,
    year: '2026',
    rating: 5,
    emotionalReaction: 'blown-away',
    emotionalLabel: 'Blown Away',
    projectType: 'Creative Direction & Fashion',
    date: 'Jul 2026'
  }
];
