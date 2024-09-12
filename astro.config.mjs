// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            
            title: 'RustCode',
            social: {
                github: 'https://roelcode.com/',
                facebook: 'https://roelcode.com/',
                tiktok: 'https://roelcode.com/',
                youtube: 'https://roelcode.com/',
            },
            sidebar: [
				{
					label: 'Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'intro/intro' },
					],
				},
			],
        }),
    ],
});