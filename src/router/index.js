import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {      
  path: '/',
  component: () => import('../components/Tweets.vue'),
  name: 'Home'
  },
    {      
  path: '/home',
  component: () => import('../components/Tweets.vue'),
  name: 'Home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
