<template>
  <section class="h-full w-full self-stretch overflow-auto p-8">
    <div
      v-for="(task, index) in tasks"
      :key="task.title"
      :id="`task-${index}`"
      class="mb-4 grid w-full grid-cols-8 place-items-center"
    >
      <button
        aria-label="check"
        :aria-checked="task.completed"
        @click="toggleCompleted(task)"
        :class="[
          'h-5 w-5 justify-self-start rounded-full border-3 border-solid border-gray-400 transition duration-300 ease-in hover:border-gray-400',
          { 'border-gray-400 bg-gray-400': task.completed }
        ]"
      ></button>
      <p
        @click="toggleCompleted(task)"
        @keydown.enter="toggleCompleted(task)"
        :class="[
          'translate col-span-6 cursor-pointer justify-self-start font-semibold duration-300 ease-in',
          { 'text-gray-400 line-through decoration-2': task.completed }
        ]"
      >
        {{ task.title }}
      </p>
      <button
        class="h-4 w-4 justify-self-end opacity-30 transition-opacity duration-200 ease-in hover:opacity-100"
        @click="removeTask(index)"
      >
        <img src="/assets/x.svg" alt="x" />
      </button>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'ListTodo',
  data() {
    return {
      hoverButton: false
    }
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['finishedTasksLength'])
  },
  methods: {
    removeTask(index) {
      this.$store.dispatch('REMOVE', index)
    },
    toggleCompleted(index) {
      this.$store.dispatch('UPDATE', index)
    }
  }
}
</script>
