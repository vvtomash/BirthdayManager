const MIN_PASSWORD_LENGTH = 5;

export default {
  isValid(value) {
    return value && value.length >= MIN_PASSWORD_LENGTH;
  },
  message: `Password should be ${MIN_PASSWORD_LENGTH} characters or more`,
};
