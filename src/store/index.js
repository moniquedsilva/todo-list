import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task one', checked: false },
      { id: 2, title: 'Task two', checked: false },
      { id: 3, title: 'Task three', checked: true },
      { id: 4, title: 'Task four', checked: false }
    ]
  },
  getters: {
    taskLength: ({ tasks }) => tasks.length,

    getFinishedTasks: ({ tasks }) => tasks.filter((item) => item.checked),

    finishedTasksLength: ({ tasks }) => tasks.filter((item) => item.checked).length,

    getUnfinishedTasks: ({ tasks }) => tasks.filter((item) => !item.checked),

    unFinishedTasksLength: ({ tasks }) => tasks.filter((item) => !item.checked).length
  },
  mutations: {
    ADD_TASK(state, event) {
      state.tasks.push(event)
    },

    UPDATE_TASK(state, event) {
      state.tasks.splice(state.tasks.indexOf(event), 1, event)
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

    REMOVE(context, index) {
      context.commit('REMOVE_TASK', index)
    }
  }
})
