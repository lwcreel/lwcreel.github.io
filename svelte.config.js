import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			fallback: undefined,
			precompress: false,
			strict: false // https://kit.svelte.dev/docs/adapter-static#options-strict
		}),
		prerender: { entries: ['*'] }
	},
	//	paths: {
	//		base: process.env.NODE_ENV === 'production' ? '/lwcreel.github.io' : ''
	//	},
	prerender: { default: true },
	trailingSlash: 'always'
};
