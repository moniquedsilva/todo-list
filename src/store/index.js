import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    taskList: ({ tasks }) => tasks,

    taskLength: ({ tasks }) => tasks.length,

    getFinishedTasks: ({ tasks }) => tasks.filter((item) => item.completed),

    finishedTasksLength: ({ tasks }) => tasks.filter((item) => item.completed).length,

    getUnfinishedTasks: ({ tasks }) => tasks.filter((item) => !item.completed),

    unFinishedTasksLength: ({ tasks }) => tasks.filter((item) => !item.completed).length
  },
  mutations: {
    ADD_TASK(state, event) {
      state.tasks.push(event)
    },

    UPDATE_TASK(state, event) {
      const index = state.tasks.findIndex((task) => task.id === event.id)
      if (index !== -1 && state.tasks[index]) {
        state.tasks[index].completed = !state.tasks[index].completed
      }
    },

    EDIT_TASK(state, event) {
      const index = state.tasks.findIndex((task) => task.id === event.id)
      if (index !== -1 && state.tasks[index]) {
        state.tasks[index].title = event.title
      }
    },

    REMOVE_TASK(state, event) {
      const index = state.tasks.findIndex((task) => task.id === event.id)
      const arr = [...state.tasks]
      arr.splice(index, 1)
      state.tasks = arr
    }
  },
  actions: {
    ADD(context, task) {
      context.commit('ADD_TASK', task)
    },

    UPDATE(context, task) {
      context.commit('UPDATE_TASK', task)
    },

    EDIT(context, task) {
      context.commit('EDIT_TASK', task)
    },

    REMOVE(context, task) {
      context.commit('REMOVE_TASK', task)
    }
  },
  plugins: [vuexLocal.plugin]
})
