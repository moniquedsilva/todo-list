<template>
  <button
    class="absolute -bottom-10 rounded-full w-20 h-20 bg-secondary hover:bg-buttonHover transition duration-300 shadow-md"
    @click="showModal = true"
  >
    <span class="text-5xl text-buttonText">+</span>
  </button>
  <Modal v-if="showModal" @close="showModal = false">
    <form
      class="flex flex-col items-center justify-center gap-y-10 w-full p-10"
    >
      <h2 class="text-3xl font-semibold">Tasks</h2>
      <label class="w-full block">
        <span class="block text-md font-medium text-primary"
          >What's the plan for today?</span
        >
        <input
          type="text"
          placeholder="add new task"
          required
          class="mt-2 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
        />
      </label>
      <button
        @click="addNewTask"
        class="w-32 h-12 p-2 text-modalText font-bold bg-secondary hover:bg-buttonHover transition duration-300 rounded-md cursor-pointer"
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
    Modal,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    addNewTask() {
      console.log('new')
    },
  },
}
</script>
