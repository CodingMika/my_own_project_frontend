class UserService {
  static headerUpdate = null;
  static user = null;

  static setUser(user) {
    this.user = user;
    if (this.headerUpdate !== null) {
      this.headerUpdate(user);
    }
  }

  static getUser() {
    return this.user;
  }

  static get isAuth() {
    return this.user !== null;
  }

  static setHeaderUpdate(callback) {
    this.headerUpdate = callback;
  }
}
export default UserService;
