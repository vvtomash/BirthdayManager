<template>
  <div class="registerForm">
    <div class="title">Register</div>
    <form
      @submit.prevent="register"
    >
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-validate:email="email"
          id="email"
          v-model="email"
          :class="{ 'is-invalid': validation.email === false, 'is-valid': validation.email === true }"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >
          We'll never share your email with anyone else.
        </small>
      </div>

      <div class="form-group">
        <label for="password1">Password</label>
        <input
          v-validate:password="pass1"
          id="password1"
          v-model="pass1"
          :class="{ 'is-invalid': validation.pass1 === false, 'is-valid': validation.pass1 === true }"
          type="password"
          class="form-control"
          placeholder="Password"
        >
      </div>
      <div class="form-group">
        <label for="password2">Repeat password</label>
        <input
          v-validate:password="pass2"
          id="password2"
          v-model="pass2"
          :class="{ 'is-invalid': validation.pass2 === false, 'is-valid': validation.pass2 === true }"
          type="password"
          class="form-control"
          placeholder="Repeat password"
        >
      </div>

      <div>
        <div v-if="errors.length">
          <div
            v-for="error in errors"
            :key="error.id"
            class="alert alert-danger"
          >
            {{ error }}
          </div>
        </div>

        <div
          v-if="message"
          class="alert alert-success"
        >
          {{ message }}
        </div>
      </div>
      <button
        :disabled="isLoading"
        type="submit"
        class="btn btn-primary"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
import Validation from '../logic/validation';

export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
      isLoading: false,
      message: '',
      errors: [],
      validation: {},
    };
  },
  methods: {
    isFormValid() {
      this.errors = [];
      if (!Validation.validateEmail(this.email)) {
        this.errors.push('Valid email is required');
      }
      if (!Validation.validatePassword(this.pass1) || !Validation.validatePassword(this.pass2)) {
        this.errors.push('Password is too short');
      }
      if (this.pass1 !== this.pass2) {
        this.errors.push('Password mismatch');
      }

      return this.errors.length === 0;
    },

    register() {
      if (!this.isFormValid() || this.isLoading) {
        return;
      }
      this.isLoading = true;
      this.$store.dispatch('registerUser', { email: this.email, pass: this.pass1 })
        .then(() => {
          this.message = 'Success';
        })
        .catch(() => {
          this.errors.push('Registration failed');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.registerForm {
  position: relative;
  padding: 1rem;
  border: solid #f8f9fa;
  border-width: .2rem;
  width: 500px;
  margin: auto;
  text-align: left;
}

.title {
  text-align: right;
}
</style>
