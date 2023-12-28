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
        id="checkbox"
        :aria-checked="task.completed"
        @click="toggleCompleted(task)"
        role="checkbox"
        :class="[
          'h-5 w-5 justify-self-start rounded-full border-3 border-solid border-gray-400 transition duration-300 ease-in hover:border-gray-400',
          { 'border-[7px] border-gray-400': task.completed }
        ]"
      >
        <span class="sr-only">{{ task.completed ? 'Completed' : 'Unfinished' }}</span>
      </button>
      <label for="taskTitle" class="col-span-6 justify-self-start">
        <span class="sr-only">Task title</span>
        <input
          id="taskTitle"
          :class="[
            'translate cursor-pointer rounded border-none p-1 font-semibold outline-none duration-300 ease-in hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300',
            { 'text-gray-400 line-through decoration-2': task.completed }
          ]"
          v-model.lazy="task.title"
          @change="editTask(task)"
        />
      </label>
      <button
        class="h-4 w-4 justify-self-end opacity-30 transition-opacity duration-200 ease-in hover:opacity-100"
        @click="removeTask(task)"
      >
        <img src="/assets/x.svg" alt="x" class="h-4 w-4" />
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
      title: ''
    }
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['taskList', 'taskLength', 'finishedTasksLength'])
  },
  methods: {
    removeTask(task) {
      this.$store.dispatch('REMOVE', task)
    },
    toggleCompleted(task) {
      this.$store.dispatch('UPDATE', task)
    },
    editTask(task) {
      const updatedTask = {
        id: task.id,
        title: task.title,
        completed: task.completed
      }
      this.$nextTick(() => {
        this.$store.dispatch('EDIT', updatedTask)
      })
    }
  }
}
</script>
