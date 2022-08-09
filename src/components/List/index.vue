<template>
  <div
    class="relative flex h-container w-8/12 flex-col items-center rounded-md bg-white pt-8 pb-7 font-montserrat text-primary shadow-md sm:w-container"
  >
    <Date />
    <List />
    <NewTasks />
  </div>
</template>

<script>
import Date from './Date.vue'
import List from './List.vue'
import NewTasks from './NewTasks.vue'

export default {
  name: 'TodoList',
  components: {
    Date,
    List,
    NewTasks
  }
}
</script>
