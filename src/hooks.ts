import Post from '$lib/types/Post';
import type { Transport } from '@sveltejs/kit';

export const transport: Transport = {
	Post: {
		encode: (value) => value instanceof Post && [value.id, value.title, value.content, value.date],
		decode: ([id, title, content, date]) => new Post(id, title, content, date)
	}
};
