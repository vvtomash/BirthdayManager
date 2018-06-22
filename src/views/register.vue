<template>
  <main class="wrap">
    <custom-header/>
    <section class="register">
      <div class="title">Register</div>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            id="exampleInputEmail1"
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
          <label for="exampleInputPassword1">Password</label>
          <input
            id="exampleInputPassword1"
            v-model="pass1"
            type="password"
            class="form-control"
            placeholder="Password"
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Repeat password</label>
          <input
            id="exampleInputPassword2"
            v-model="pass2"
            type="password"
            class="form-control"
            placeholder="Password"
          >
        </div>
        <div>{{ message }}</div>
        <button
          :disabled="loading"
          type="submit"
          class="btn btn-primary"
        >
          Register
        </button>
      </form>
    </section>
    <custom-footer/>
  </main>
</template>

<script>
import CustomHeader from '../components/header.vue';
import CustomFooter from '../components/footer.vue';

export default{
  components: { CustomHeader, CustomFooter },
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
      loading: false,
      message: '',
    };
  },
  methods: {
    register() {
      this.message = '';
      if (this.pass1 !== this.pass2) {
        this.message = 'Password mismatch';
        return;
      }
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.$store.dispatch('registerUser', { email: this.email, pass: this.pass1 })
        .then(() => {
          this.message = 'Success';
        })
        .catch(() => {
          this.message = 'Registration failed';
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
</style>
