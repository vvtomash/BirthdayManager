const EMAIL_CHECK = /^\w{1}[\w.]*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default {
  isValid(value) {
    return EMAIL_CHECK.test(value);
  },
  message: 'Valid email required',
};
