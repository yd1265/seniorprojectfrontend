import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'students',
    component: () => import('../components/StudentList')

  },

  {
    path: '/student/:studentId',
    name: 'studentDetails',
    component: () => import('../components/Student')
  },

  {
    path: '/add',
    name: 'add',
    component: () => import('../components/AddStudent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
