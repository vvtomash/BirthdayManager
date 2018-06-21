<template>
  <main class="wrap">
    <custom-header/>
    <section class="login">
      <div class="title">Login</div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="pass">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
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
      pass: '',
      loading: false,
      message: 'You not loggined',
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store.actions.loginUser(this.email, this.pass)
        .then(() => {
          this.loading = false;
          this.message = 'Success';
        })
        .catch((err) => {
          this.loading = false;
          this.message = 'Login failed';
        })
      console.log(this.email, this.pass);
    },
  },
};
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
</style>
