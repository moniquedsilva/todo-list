<template>
  <div
    class="flex flex-col items-center w-8/12 sm:w-container h-container pt-8 pb-7 font-montserrat text-primary bg-white rounded-md shadow-md relative"
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
    NewTasks,
  },
}
</script>
