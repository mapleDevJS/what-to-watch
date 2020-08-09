import {BASE_URL} from "../../consts.js";

export default class User {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.avatarSrc = `${BASE_URL}/${user.avatar_url}`;
  }

  static parse(user) {
    return Object.keys(user).length ? new User(user) : {};
  }
}
