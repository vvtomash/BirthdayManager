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
    <p class="calendar__note">
      This calendar works in test mode. So it could miss your birthday!
    </p>
    <div class="calendar__wrapper">
      <button
        class="calendar__button"
        @click="fillCalendar">Fill</button>
    </div>
    <custom-footer/>
  </main>
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
            new Date(2018, 6, 27),
            new Date(2018, 6, 30),
          ],
        },
      },
    };
  },
  methods: {
    fillCalendar() {
      let users = [];
      this.$store.dispatch('getBirthdays')
        .then((response) => {
          users = response;
        })
        .catch(() =>
          new Error('No dates, only pain!'));
      users.map(user => this.state.highlighted.dates.push(new Date(user.birthday)));
    },
  },
};
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
  .calendar__button {
    width: 100px;
    height: 30px;
    background: #ff6666;
    color: white;
    font-size: 20px;
    border-radius: 15px;
    text-align: center;
  }
  .calendar__wrapper {
    display: flex;
    justify-content: center;
  }
</style>
