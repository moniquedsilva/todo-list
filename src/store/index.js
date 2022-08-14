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
      const index = state.tasks.indexOf(event)
      state.tasks[index].completed = !state.tasks[index].completed
    },

    EDIT_TASK(state, title) {
      const index = state.tasks.indexOf(title)
      console.log(index, title, event)
      // state.tasks[index].title = title
    },

    REMOVE_TASK(state, index) {
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

    EDIT(context, title) {
      context.commit('EDIT_TASK', title)
    },

    REMOVE(context, index) {
      context.commit('REMOVE_TASK', index)
    }
  },
  plugins: [vuexLocal.plugin]
})
