const EMAIL_CHECK = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_PASSWORD_LENGTH = 5;

export default {
  isValid(type, value) {
    switch (type) {
      case 'email':
        return this.validateEmail(value);
      case 'password':
        return this.validatePassword(value);
      default:
        return false;
    }
  },

  validateEmail(value) {
    return EMAIL_CHECK.test(value);
  },

  validatePassword(value) {
    return value && value.length >= MIN_PASSWORD_LENGTH;
  },
};
