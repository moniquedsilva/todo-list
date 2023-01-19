<template>
  <section class="h-full w-full self-stretch overflow-auto p-8">
    <div v-if="taskLength === 0" class="flex h-full w-full items-center justify-center">
      <p>No tasks today</p>
    </div>
    <div
      v-else
      v-for="(task, index) in taskList"
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
      <input
        :class="[
          'translate col-span-6 cursor-pointer justify-self-start rounded border-none p-1 font-semibold outline-none duration-300 ease-in hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300',
          { 'text-gray-400 line-through decoration-2': task.completed }
        ]"
        v-model.lazy="task.title"
        @click="toogleIcons"
      />
      <button
        v-if="toogleIcon === 'check'"
        class="h-4 w-4 justify-self-end opacity-30 transition-opacity duration-200 ease-in hover:opacity-100"
        @click="editTask(task.title)"
        @keypress.enter="editTask(task.title)"
      >
        <img src="/assets/check.svg" alt="check" />
      </button>
      <button
        v-else
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
      hoverButton: false,
      title: '',
      toogleIcon: 'close'
    }
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['taskList', 'taskLength', 'finishedTasksLength'])
  },
  methods: {
    removeTask(index) {
      this.$store.dispatch('REMOVE', index)
    },
    toggleCompleted(index) {
      this.$store.dispatch('UPDATE', index)
    },
    toogleIcons() {
      this.toogleIcon = 'check'
    },
    editTask(title) {
      this.$store.dispatch('EDIT', title)
      this.toogleIcon = 'close'
    }
  }
}
</script>
