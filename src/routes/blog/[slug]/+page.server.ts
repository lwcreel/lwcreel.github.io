import type { PageServerLoad } from './$types';
import { getPostByTitle } from '$lib/server/blog';
import Post from '$lib/types/Post';

export const load: PageServerLoad = ({ params }) => {
	let post: Post = getPostByTitle(decodeURIComponent(params.slug));

	return {
		post: {
			title: post.title,
			date: post.date,
			content: post.content
		}
	};
};
