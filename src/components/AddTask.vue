<template>
  <div>
    <input type="text" v-model="newTaskTitle" />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    addTask() {
      if (this.newTaskTitle.trim() !== '') {
        this.$emit('add-task', { title: this.newTaskTitle });
        this.newTaskTitle = '';
      }
    },
  },
};
</script>
