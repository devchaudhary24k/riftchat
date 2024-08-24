import { env } from '@/env.mjs';
import { type SiteConfig } from '@/types';

/**
 * Configuration object for the site.
 *
 * @type {SiteConfig}
 * @property {string} name - The name of the application.
 * @property {string} description - A brief description of the application.
 * @property {string} url - The URL of the application.
 * @property {string} ogImage - The URL of the Open Graph image.
 * @property {Object} links - An object containing links related to the application.
 * @property {string} links.github - The GitHub URL for the application.
 * @property {string} links.twitter - The Twitter URL for the application.
 */
export const siteConfig: SiteConfig = {
  name: 'Rift Chat',
  description: 'A chat and calling application for gamers',
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  links: {
    github: 'https://github.com/pixelactstudios',
    twitter: 'https://x.com/pixelactstudios',
  },
};
