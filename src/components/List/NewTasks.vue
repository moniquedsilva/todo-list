<template>
  <button
    class="absolute -bottom-10 h-20 w-20 rounded-full bg-secondary shadow-md transition duration-300 hover:bg-buttonHover"
    @click="showModal = true"
  >
    <span class="text-5xl text-buttonText">+</span>
  </button>
  <Modal v-if="showModal" @close="showModal = false">
    <form autocomplete="off" class="flex w-full flex-col items-center justify-center gap-y-10 p-10">
      <h2 class="text-3xl font-semibold">Tasks</h2>
      <label class="block w-full" for="newTask">
        <span class="text-md block font-medium text-primary">What's the plan for today?</span>
        <input
          id="newTask"
          ref="newTask"
          type="text"
          placeholder="add new task"
          required
          class="mt-2 block w-full rounded-md border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm valid:border-secondary invalid:border-red-500 invalid:text-red-600 focus:outline-none focus:ring-1 focus:valid:border-secondary focus:valid:ring-secondary focus:invalid:border-red-500 focus:invalid:ring-red-500"
        />
      </label>
      <button
        @click.prevent="addNewTask"
        class="h-12 w-32 cursor-pointer rounded-md bg-secondary p-2 font-bold text-modalText transition duration-300 hover:bg-buttonHover"
      >
        Save
      </button>
    </form>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'NewTasks',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    addNewTask() {
      if (this.$refs.newTask.value.length > 0) {
        const data = {
          id: Math.random().toString(36).substring(2),
          title: this.$refs.newTask.value,
          completed: false
        }
        this.$store
          .dispatch('ADD', data)
          .then(() => {
            this.showModal = false
            return this.showModal
          })
          .catch((e) => {
            console.log(e)
          })
      } else {
        this.$refs.newTask.focus()
      }
    }
  }
}
</script>
