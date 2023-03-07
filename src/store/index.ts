import { createStore } from "vuex";
import { Task } from "@/types";

export default createStore({
  state: {
    tasks: [] as Task[],
  },
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push({
        ...task,
        id: new Date().getTime(),
      });
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  actions: {},
  modules: {},
});
