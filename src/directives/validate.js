import Validation from '../tools/validation';

function success(el) {
  el.classList.remove('is-valid');
  el.classList.add('is-invalid');
}

function error(el) {
  el.classList.add('is-valid');
  el.classList.remove('is-invalid');
}

export default {
  componentUpdated(el, binding) {
    const {
      arg,
      value,
      oldValue,
    } = binding;

    if (!el || value === oldValue) {
      return;
    }

    const handle = Validation.isValid(arg, value) ? success : error;
    handle(el);
  },
};
