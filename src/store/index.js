import { createStore } from 'vuex'
export default createStore({
  state: {
    tasks: [],
  },
  getters: {
    task: (state) => {
      return state.tasks
    },

    getFinishedTasks: (state) => (checked) => {
      return state.tasks.find((event) => event.checked === checked)
    },

    getUnfinishedTasks: (state) => (unchecked) => {
      return state.tasks.find((event) => event.unchecked === unchecked)
    },
  },
  mutations: {
    ADD_TASK(state, event) {
      state.tasks.push(event)
    },

    UPDATE_TASK(state, event) {
      state.tasks.splice(state.tasks.indexOf(event), 1, event)
    },

    REMOVE_TASK(state, index) {
      let arr = [...state.tasks]
      arr.splice(index, 1)
      state.tasks = arr
    },
  },
  actions: {
    ADD(context, task) {
      context.commit('ADD_TASK', task)
    },

    UPDATE(context, task) {
      context.commit('UPDATE_TASK', task)
    },

    REMOVE(context, index) {
      context.commit('REMOVE_TASK', index)
    },
  },
})
