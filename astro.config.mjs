// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/config/sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RustCode',
			logo: {
				src: './src/assets/rustcode-logo.svg',
				alt: 'RustCode',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: sidebar,
			
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
