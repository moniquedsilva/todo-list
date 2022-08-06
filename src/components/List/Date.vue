<template>
  <header class="flex justify-between items-center self-stretch h-24 px-8">
    <div
      class="grid grid-rows-2 grid-flow-col place-content-between items-end w-date h-date"
    >
      <h2 class="row-span-2 mr-1 text-5xl font-semibold">{{ day }}</h2>
      <span class="font-semibold uppercase text-sm">{{ month }} </span>
      <span class="text-sm place-self-start">{{ year }} </span>
    </div>
    <div class="h-date">
      <p class="font-semibold uppercase text-sm">
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
        'Dec',
      ],
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      weekday: '',
    }
  },
  mounted() {
    this.getCurrentDate()
  },
  methods: {
    getCurrentDate() {
      this.day =
        this.currentDate.getDate() < 10
          ? `0${this.currentDate.getDate()}`
          : this.currentDate.getDate()
      this.month = this.months[this.currentDate.getMonth()]
      this.weekday = this.weekdays[this.currentDate.getDay()]
      this.year = this.currentDate.getFullYear()
    },
  },
}
</script>
