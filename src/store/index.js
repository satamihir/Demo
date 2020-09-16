import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodos: ''
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodos = todo
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodos,
        completed: false
      })
    },
    EDIT_TODO(state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodos = todo.body
    },
    REMOVE_TODO(state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state) {
      state.newTodos = ''
    }
  },
  actions: {
      getTodo({commit},todo){
        commit('GET_TODO',todo)
      },
      adddTodo({commit},todo){
        commit('ADD_TODO',todo)
      },
      editTodo({commit},todo){
        commit('EDIT_TODO',todo)
      },
      removeTodo({commit},todo){
        commit('REMOVE_TODO',todo)
      },
      completeTodo({commit},todo){
        commit('COMPLETE_TODO',todo)
      },
      clearTodo({commit}){
        commit('CLEAR_TODO')
      }
  },
  modules: {
  }
})
