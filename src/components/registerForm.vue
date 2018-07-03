<template>
  <div class="registerForm">
    <div class="title">Register</div>
    <form
      @submit.prevent="register"
    >
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="email"
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
          id="password2"
          v-model="pass2"
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
const MIN_PASSWORD_LENGTH = 5;
const EMAIL_CHECK = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
      isLoading: false,
      message: '',
      errors: [],
    };
  },
  methods: {
    isFormValid() {
      this.errors = [];
      if (!this.isEmailValid(this.email)) {
        this.errors.push('Valid email is required');
      }
      if (this.pass1.length < MIN_PASSWORD_LENGTH || this.pass2.length < MIN_PASSWORD_LENGTH) {
        this.errors.push(`Password should contain minimum ${MIN_PASSWORD_LENGTH} symbols`);
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

    isEmailValid(email) {
      return EMAIL_CHECK.test(email);
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
