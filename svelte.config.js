import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: undefined,
			precompress: false,
			strict: false // https://kit.svelte.dev/docs/adapter-static#options-strict
		})
	},
	prerender: { default: true },
	trailingSlash: 'always'
};
