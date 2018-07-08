const DATE_CHECK = /^\d{2}\.\d{2}\.\d{4}$/;

export default {
  isValid(value) {
    return DATE_CHECK.test(value);
  },
  message: 'Date must be in format dd.mm.yyyy',
};
