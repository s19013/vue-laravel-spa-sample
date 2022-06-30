import { createRouter, createWebHistory } from 'vue-router'
import TaskListComponent from "./vue/components/task/TaskListComponent.vue";
const routes = [
  {
    path: '/tasks',
    name: 'task.list',
    component: TaskListComponent
  },
  {
    // path: '/about',
    // name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
