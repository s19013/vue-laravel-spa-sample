<template>
    <header-component></header-component>
    <task-list-component></task-list-component>
</template>

<script>
import HeaderComponent   from "./components/HeaderComponent.vue";
import TaskListComponent from "./components/task/TaskListComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    TaskListComponent
  },
  data() {
    return {

    }
  },
};
</script>
