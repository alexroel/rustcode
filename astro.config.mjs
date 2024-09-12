// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

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
            sidebar: [
				/*{
					label: 'Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'intro/intro' },
					],
				},*/
                {
					label: 'Introducción a Rust',
					autogenerate: { directory: '01-intro-rust' },
				},
				{
					label: 'Fundamentos',
					autogenerate: { directory: '02-fundamentos' },
				},
			],
        }),
    ],
});