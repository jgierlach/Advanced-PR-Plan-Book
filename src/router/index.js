import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProblemDefinition from '../views/ProblemDefinition.vue'
import PlanningAndProgramming from '../views/PlanningAndProgramming.vue'
import TakingActionAndCommunicating from '../views/TakingActionAndCommunicating.vue'
import EvaluatingTheProgram from '../views/EvaluatingTheProgram.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cover',
    component: Home
  },
  {
    path: '/problem-defintion',
    name: 'Problem Definition',
    component: ProblemDefinition
  },
  {
    path: '/planning-and-programming',
    name: 'Planning And Programming',
    component: PlanningAndProgramming
  },
  {
    path: '/taking-action-and-communicating',
    name: 'Taking Action And Communicating',
    component: TakingActionAndCommunicating
  },
  {
    path: '/evaluating-the-program',
    name: 'Evaluating The Program',
    component: EvaluatingTheProgram
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
