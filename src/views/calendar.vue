<template>
  <main class="wrap">
    <custom-header/>
    <h2 class="calendar__header">
      Behold our birthday calendar!
    </h2>
    <div class="calendar__datepicker">
      <datepicker
        :inline="true"
        :monday-first="true"
        :highlighted="state.highlighted" />
    </div>
    <p
      @click="fillCalendar"
      class="calendar__note">
      This calendar works in test mode. So it could miss your birthday!
    </p>
    <custom-footer/>
  </main>
</template>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import CustomHeader from '../components/header.vue';
import CustomFooter from '../components/footer.vue';

export default {
  components: { CustomHeader, CustomFooter, Datepicker },
  data() {
    return {
      state: {
        highlighted: {
          dates: [
            // ...this.fillCalendar(),
            new Date(2018, 6, 27),
            new Date(2018, 6, 30),
          ],
        },
      },
    };
  },
  methods: {
    fillCalendar() {
      let users = {};
      this.$store.dispatch('getBirthdays')
        .then((response) => {
          users = response;
        })
        .catch(() =>
          new Error('No dates, only pain!'));
    },
  },
}
</script>

<style scoped>
  .calendar__header {
    margin-top: 40px;
    font-size: 22px;
    text-align: center;
  }
  .calendar__datepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .calendar__note {
    margin: 20px;
    font-size: 18px;
    text-align: center;
  }

</style>
