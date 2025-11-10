import { CMS } from './types';

export const cmsList: CMS[] = [
  {
    id: 'contentful',
    name: 'Contentful',
    slogan: 'The content platform for digital builders',
    logo: '/logos/contentful.png',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    color: '#FFDA00',
    pros: [
      'Enterprise-grade',
      'GraphQL API',
      'Visual editor',
      'Multi-language',
    ],
    cons: [
      'Expensive at scale',
      'Learning curve',
      'No free tier for production',
    ],
  },
  {
    id: 'sanity',
    name: 'Sanity',
    slogan: 'The unified content platform',
    logo: '/logos/sanity.png',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    color: '#141414',
    pros: [
      'Real-time collaboration',
      'Flexible schema',
      'GROQ queries',
      'Open source',
    ],
    cons: ['Can get pricey', 'UI can be complex', 'Hosting not included'],
  },
  {
    id: 'strapi',
    name: 'Strapi',
    slogan: 'The leading open-source headless CMS',
    logo: '/logos/strapi.webp',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop',
    color: '#4E27E0',
    pros: ['100% open source', 'Self-hosted', 'Plugin ecosystem', 'RBAC'],
    cons: [
      'Self-hosting required',
      'No built-in CDN',
      'Less enterprise support',
    ],
  },
  {
    id: 'payload',
    name: 'Payload',
    slogan: 'The Next.js CMS for modern teams',
    logo: '/logos/payload.png',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=800&fit=crop',
    color: '#000000',
    pros: ['Built for Next.js', 'Type-safe', 'Local API mode', 'Self-hosted'],
    cons: [
      'Younger ecosystem',
      'Smaller community',
      'Less out-of-box features',
    ],
  },
  {
    id: 'contentstack',
    name: 'Contentstack',
    slogan: 'The headless CMS for enterprise',
    logo: '/logos/contentstack.jpg',
    image:
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop',
    color: '#A970FE',
    pros: ['Enterprise-ready', 'Omnichannel', 'AI features', 'Great support'],
    cons: ['Very expensive', 'Overkill for small projects', 'Vendor lock-in'],
  },
];
