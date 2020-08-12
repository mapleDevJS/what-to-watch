export default class Comment {
  text: string;
  date: string;
  id: number;
  rating: number;
  author: string;

  constructor(comment) {
    this.text = comment.comment;
    this.date = comment.date;
    this.id = comment.id;
    this.rating = comment.rating;
    this.author = comment.user;
  }

  static parse(comment) {
    return Object.keys(comment).length ? new Comment(comment) : {};
  }
}
