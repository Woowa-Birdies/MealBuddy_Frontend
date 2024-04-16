/* eslint-disable import/prefer-default-export */
export class UserCancelError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserCancelError';
  }
}
