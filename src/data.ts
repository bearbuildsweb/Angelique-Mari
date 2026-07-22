import { Project, Service, Testimonial } from './types';

import imageDjdDuo from './assets/images/rhythm_neon_ref1_1784718329931.jpg';
import imageConnectedCity from './assets/images/connected_city_joburg_1784717476738.jpg';
import imageAfterDark from './assets/images/after_dark_braamfontein_1784717492565.jpg';
import imageSmartphoneActivation from './assets/images/smartphone_ref2_1784718347070.jpg';
import imageStreetCouture from './assets/images/street_couture_maboneng_1784717507856.jpg';

import imageHeroModel from './assets/images/hero_model_1784538034499.jpg';
import imageFashionCampaign from './assets/images/fashion_campaign_1784538048818.jpg';
import imageSculpturalBranding from './assets/images/sculptural_branding_1784538077850.jpg';
import imageClientPortraitOne from './assets/images/client_portrait_1784538092196.jpg';
import imageClientPortraitTwo from './assets/images/client_portrait_two_1784538111533.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'smartphone-activation',
    title: 'Smartphone Activation Campaign',
    category: 'Commercial Architecture & Brand Exhibition',
    year: '2026',
    image: imageSmartphoneActivation,
    description: "An architectural commercial campaign showcasing a futuristic white smartphone activation pavilion with curved glowing arches and sleek presentation pedestals inside a grand exhibition hall.",
    layoutType: 'overlapping',
    museumNumber: 'EXHIBIT N° 04',
    location: 'Johannesburg Expo Centre • South Africa',
    credits: 'Art Direction & Spatial Design: Angelique-Mari',
    medium: 'High Dynamic Range Architectural • Clean Commercial Illumination',
    aspectRatio: '16/9'
  },
  {
    id: 'rhythm-and-neon',
    title: 'Rhythm & Neon',
    category: 'Monochrome Nightlife & DJ Group',
    year: '2026',
    image: imageDjdDuo,
    description: "An energetic DJ collective performing behind Pioneer decks in a packed subterranean club. Captured in high-contrast monochrome flash photography with hands raised and crowd lights illuminating the raw energy.",
    layoutType: 'full',
    museumNumber: 'EXHIBIT N° 01',
    location: 'Cape Town • South Africa',
    credits: 'Creative Direction: Angelique-Mari • Curator: Cape Sound Archive',
    medium: 'Monochrome Silver Gelatin • High Flash Contrast',
    aspectRatio: '16/9'
  },
  {
    id: 'connected-to-the-city',
    title: 'Connected to the City',
    category: 'Commercial Campaign & Urban Culture',
    year: '2026',
    image: imageConnectedCity,
    description: "A premium smartphone activation campaign unfolding in the heart of Johannesburg CBD. Featuring stylish young professionals and creatives naturally interacting within the city's modern urban landscape, blending contemporary architecture and vibrant street energy into a polished, aspirational commercial narrative.",
    layoutType: 'asymmetric-left',
    museumNumber: 'EXHIBIT N° 02',
    location: 'Johannesburg CBD • South Africa',
    credits: 'Art Direction: Angelique-Mari • Creative Tech Activation',
    medium: 'Medium Format Digital • Natural Warm Daylight Grading',
    aspectRatio: '16/9'
  },
  {
    id: 'after-dark',
    title: 'After Dark',
    category: 'Luxury Nightlife Editorial',
    year: '2026',
    image: imageAfterDark,
    description: "Photographing a renowned DJ performing at an exclusive Johannesburg nightlife venue in Braamfontein. An electric yet refined atmosphere with dramatic lighting, atmospheric haze, an engaged crowd, and a confident performer at the centre.",
    layoutType: 'asymmetric-right',
    museumNumber: 'EXHIBIT N° 03',
    location: 'Braamfontein • Johannesburg',
    credits: 'Sound & Scene: AM Photography • Lighting: Braam Sound Lab',
    medium: 'Low-Light High Dynamic Range • Chiaroscuro Stage Lighting',
    aspectRatio: '4/3'
  },
  {
    id: 'street-couture',
    title: 'Street Couture',
    category: 'High-Fashion Editorial Portrait',
    year: '2026',
    image: imageStreetCouture,
    description: "A high-fashion editorial portrait in Maboneng Precinct featuring bold contemporary styling that blends luxury tailoring with subtle streetwear influences. Incorporating the precinct's industrial architecture and artistic atmosphere into a clean, museum-worthy composition.",
    layoutType: 'full',
    museumNumber: 'EXHIBIT N° 05',
    location: 'Maboneng Precinct • Johannesburg',
    credits: 'Styling: Maboneng Atelier • Model: Thabo & Zuri',
    medium: '35mm Fine Grain Negative • Architectural Directional Light',
    aspectRatio: '3/4'
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
