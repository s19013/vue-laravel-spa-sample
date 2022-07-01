import { createRouter, createWebHistory } from 'vue-router'
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
    props:true //なぜprops:trueをつけたのか
    // https://v3.router.vuejs.org/ja/guide/essentials/passing-props.html
  },
  {
    path: '/tasks/create',
    name: 'task.create',
    component: () => import('./vue/components/task/TaskCreateComponent.vue')
  },
  {
    path: '/tasks/:taskId/edit',
    name: 'task.edit',
    component: () => import('./vue/components/task/TaskEditComponent.vue'),
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
