import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [],
  },
  getters: {},
  mutations: {
    addTodoItem(state, item) {
      state.todoList.push(item);
    },
  },
  actions: {},
  modules: {},
});
