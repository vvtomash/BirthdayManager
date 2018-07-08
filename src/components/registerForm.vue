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
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
      </div>

      <div class="form-group">
        <label for="password1">Password</label>
        <input
          v-validate:password="pass1"
          id="password1"
          v-model="pass1"
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
          type="password"
          class="form-control"
          placeholder="Repeat password"
        >
      </div>

      <div class="form-group">
        <label for="birthday">Birthday</label>
        <input
          v-validate:date="birthday"
          id="birthday"
          v-model="birthday"
          type="text"
          class="form-control"
          placeholder="Your birthday?"
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
import Validation from '../tools/validation';

export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
      birthday: '',
      isLoading: false,
      message: '',
      errors: [],
    };
  },
  methods: {
    isFormValid() {
      this.errors = [];
      this.errors.push(Validation.validateEmail(this.email));
      this.errors.push(Validation.validatePassword(this.pass1));
      this.errors.push(Validation.validatePassword(this.pass2));
      this.errors.push(Validation.validateDate(this.birthday));
      if (this.pass1 !== this.pass2) {
        this.errors.push('Password mismatch');
      }
      this.errors = this.errors.filter(v => v !== null);

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
