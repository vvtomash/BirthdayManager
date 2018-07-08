const DATE_CHECK = /^\d{4}-\d{2}-\d{2}$/;

export default {
  isValid(value) {
    return DATE_CHECK.test(value);
  },
  message: 'Date must be in format yyyy-mm-dd',
};
