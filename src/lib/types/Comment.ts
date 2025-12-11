import Post from '$lib/types/Post';

class BlogComment {
	id: BigInt;
	author: Author;
	date: Date;
	post: Post;
	parent: BlogComment;
	content: String;

	constructor(
		id: BigInt,
		author: Author,
		date: Date,
		post: Post,
		parent: BlogComment,
		content: String
	) {
		this.id = id;
		this.author = author;
		this.date = date;
		this.post = post;
		this.parent = parent;
		this.content = content;
	}
}
