// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://adam16.github.io',
	base: '/hermannslauf-training-2026/',
	integrations: [
		starlight({
			title: "Hermann'26",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Adam16/hermannslauf-training-2026' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
