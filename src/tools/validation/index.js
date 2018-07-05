import * as Rules from './rules';

export default {
  isValid(type, value) {
    const rule = Rules.default[type];
    if (!rule) {
      throw new Error(`Internal error: no validator ${type}`);
    }

    return rule.isValid(value) ? null : rule.message;
  },

  validateEmail(value) {
    return this.isValid('email', value);
  },

  validatePassword(value) {
    return this.isValid('password', value);
  },
};
