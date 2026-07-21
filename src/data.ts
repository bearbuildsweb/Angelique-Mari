import { Project, Service, Testimonial } from './types';

import imageHeroModel from './assets/images/hero_model_1784538034499.jpg';
import imageFashionCampaign from './assets/images/fashion_campaign_1784538048818.jpg';
import imageSculpturalBranding from './assets/images/sculptural_branding_1784538077850.jpg';
import imageUndergroundGallery from './assets/images/underground_gallery_1784538063523.jpg';
import imageClientPortraitOne from './assets/images/client_portrait_1784538092196.jpg';
import imageClientPortraitTwo from './assets/images/client_portrait_two_1784538111533.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'miss-archive',
    title: 'Atelier Miss Archive',
    category: 'Editorial Photography & Identity',
    year: '2026',
    image: imageHeroModel,
    description: 'An avant-garde exploration of youth culture and high-contrast styling. Captured on 35mm film in a minimalist studio environment, blending classical elegance with a modern streetwear attitude.',
    layoutType: 'overlapping',
    museumNumber: 'N. 01',
    location: 'Paris, FR',
    credits: 'Styling: Clara Vance • Model: Anya'
  },
  {
    id: 'sartorial-brutalism',
    title: 'Sartorial Brutalism',
    category: 'Brand Campaign',
    year: '2025',
    image: imageFashionCampaign,
    description: 'A dark, architectural campaign shot in an empty concrete gallery. Exploring structural drape and geometric postures, heavily inspired by Rick Owens and Japanese raw minimalist aesthetics.',
    layoutType: 'asymmetric-left',
    museumNumber: 'N. 02',
    location: 'Berlin, DE',
    credits: 'Garments: Atelier Noir • Direction: Angelique-Mari'
  },
  {
    id: 'silent-geometry',
    title: 'Silent Geometry',
    category: 'Creative Direction & Object Study',
    year: '2026',
    image: imageSculpturalBranding,
    description: 'An editorial project focusing on contemporary marble sculpture. High-contrast side lighting isolates raw textures and stark forms to create a narrative of silent luxury.',
    layoutType: 'asymmetric-right',
    museumNumber: 'N. 03',
    location: 'Milan, IT',
    credits: 'Sculptures: Studio Gessi • Curation: Angelique-Mari'
  },
  {
    id: 'serpent-bloom',
    title: 'Serpent Bloom',
    category: 'Experimental Light Installation',
    year: '2026',
    image: imageUndergroundGallery,
    description: 'A cinematic exhibition tracking light leaks and low-key red and amber glow transitions in an underground Tokyo gallery space. An immersive, poetic intersection of technology and natural forms.',
    layoutType: 'full',
    museumNumber: 'N. 04',
    location: 'Tokyo, JP',
    credits: 'Interactive Design: Team Bloom • Space: Tunnel Gallery'
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
    year: '2026'
  },
  {
    id: 't2',
    quote: 'Working with this team is like stepping into a cinematic film. Their uncompromising eye for negative space, harsh lighting, and architectural styling has redefined our visual identity completely.',
    author: 'Hiroshi Sato',
    role: 'Lead Curator',
    company: 'Tokyo Tunnel Gallery',
    image: imageClientPortraitTwo,
    year: '2026'
  }
];
