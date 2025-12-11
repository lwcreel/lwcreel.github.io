import sql from './db.ts';
import Post from '$lib/types/Post';

// ===== Posts =====
export function getAllPosts(): Post[] {
	return sql
		.prepare(
			`select id,
			title,
			content,
			date
		from posts
		order by date desc`
		)
		.all()
		.map((post) => new Post(post.id, post.title, post.content, new Date(post.date)));
}

export function getPost(id: any): Post {
	const post = sql
		.prepare(
			`select id,
				title,
				content,
				date
			from posts where id = ${id}`
		)
		.get();
	return new Post(post.id, post.title, post.content, post.date);
}

function getPostIdByTitle(title: string): Number {
	return sql.prepare(`select id from posts where title = \'${title}\'`).get().id;
}

export function getPostByTitle(title: string): Post {
	return getPost(getPostIdByTitle(title));
}

// ===== Authors =====
// ===== Comments =====
