import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task one', completed: false },
      { id: 2, title: 'Task two', completed: false },
      { id: 3, title: 'Task three', completed: true },
      { id: 4, title: 'Task four', completed: false }
    ]
  },
  getters: {
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
