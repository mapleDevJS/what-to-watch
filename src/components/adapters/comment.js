export default class Comment {
  constructor(comment) {
    this.text = comment.comment;
    this.date = comment.date;
    this.id = comment.id;
    this.rating = comment.rating;
    this.author = {
      id: comment.user.id,
      name: comment.user.name
    };
  }

  static parse(comment) {
    return Object.keys(comment).length ? new Comment(comment) : {};
  }
}
