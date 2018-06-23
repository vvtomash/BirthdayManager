<template>
  <main class="wrap">
    <custom-header/>
    <section class="body">
      <div class="form-placeholder">
        <registerForm/>
      </div>
    </section>
    <custom-footer/>
  </main>
</template>

<script>
import CustomHeader from '../components/header.vue';
import CustomFooter from '../components/footer.vue';
import RegisterForm from '../components/registerForm.vue';

export default {
  components: { CustomHeader, CustomFooter, RegisterForm },
};
</script>

<style scoped>
.form-placeholder {
  text-align: center;
  }
</style>
