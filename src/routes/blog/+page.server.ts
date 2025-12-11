import type { PageServerLoad } from './$types';
import * as api from '$lib/server/blog';

export const load: PageServerLoad = () => {
	let posts = api.getAllPosts();
	return { posts };
};
