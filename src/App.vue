<template>
  <div>
    <h1>Todo List</h1>
    <add-task @add-task="addTask" />
    <todo-list :tasks="tasks" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AddTask from "./components/AddTask.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    AddTask,
    TodoList,
  },
  computed: {
    ...mapState({
      tasks: "tasks",
    }),
  },
  methods: {
    ...mapMutations({
      addTask: "addTask",
    }),
  },
};
</script>
