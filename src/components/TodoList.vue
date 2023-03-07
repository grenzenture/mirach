<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
