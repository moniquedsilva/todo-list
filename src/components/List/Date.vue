<template>
  <header class="flex h-24 items-center justify-between self-stretch px-8">
    <div
      class="grid h-date w-date grid-flow-col grid-rows-2 place-content-between items-end"
    >
      <h2 class="row-span-2 mr-1 text-5xl font-semibold">{{ day }}</h2>
      <span class="text-sm font-semibold uppercase">{{ month }} </span>
      <span class="place-self-start text-sm">{{ year }} </span>
    </div>
    <div class="h-date">
      <p class="text-sm font-semibold uppercase">
        {{ weekday }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TodoDate',
  data() {
    return {
      currentDate: new Date(),
      day: 0,
      year: 0,
      month: '',
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ],
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      weekday: ''
    }
  },
  mounted() {
    this.getCurrentDate()
  },
  methods: {
    getCurrentDate() {
      this.day = this.currentDate.getDate() < 10
        ? `0${this.currentDate.getDate()}`
        : this.currentDate.getDate()
      this.month = this.months[this.currentDate.getMonth()]
      this.weekday = this.weekdays[this.currentDate.getDay()]
      this.year = this.currentDate.getFullYear()
    }
  }
}
</script>
