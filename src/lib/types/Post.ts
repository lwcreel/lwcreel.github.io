export default class Post {
	id: Number;
	title: String;
	content: String;
	date: Date;

	constructor(id: Number, title: String, content: String, date: Date) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = date;
	}
}
