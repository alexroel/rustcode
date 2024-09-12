// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import { sidebar } from './src/config/sidebar';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'RustCode', 
			defaultLocale: 'es',
			locales:{
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
            social: {
                github: 'https://roelcode.com/',
                facebook: 'https://roelcode.com/',
                youtube: 'https://roelcode.com/',
            },
			customCss: [
				// Ruta relativa a tu archivo CSS personalizado
				'./src/styles/custom.css',
			],
            sidebar: sidebar,
        }),
    ],
});