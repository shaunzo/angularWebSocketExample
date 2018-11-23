export class AuthService {

  username: String = '';
  loggedIn: Boolean = false;

  constructor() {
  }

  isAuthenticated() {
    console.log('isAuthenticated()');
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
          console.log('Resolving this.loggedIN');
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log(this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log(this.loggedIn);
  }
}
