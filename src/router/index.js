import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home";

Vue.use(VueRouter)

const author = "Omar Educación Financiera"

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {title: 'Inicio -' + author},
    beforeEnter() {location.href = 'https://omareducacionfinanciera.com/blog'}
  },
  {
    path: '/',
    name: 'CompoundInterest',
    meta: {title: 'Interés Compuesto -' + author,  'page': 'Calculadora de interés compuesto'},
    component: ()  => import('../views/compound-interest/Index')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//define title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
