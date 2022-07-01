import { createRouter, createWebHistory } from 'vue-router'
// import TaskListComponent from "./vue/components/task/TaskListComponent.vue";
const routes = [
  {
    path: '/tasks',
    name: 'task.list',
    component: () => import('./vue/components/task/TaskListComponent.vue')
  },
  {
    path: '/tasks/:taskId',
    name: 'task.show',
    component: () => import('./vue/components/task/TaskShowComponent.vue'),
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env),
  routes
})

export default router
