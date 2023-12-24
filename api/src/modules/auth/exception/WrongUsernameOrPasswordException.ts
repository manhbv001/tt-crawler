export class WrongUsernameOrPasswordException extends Error {
  constructor() {
    super('Wrong credential');
  }
}
