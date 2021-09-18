import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home";

Vue.use(VueRouter)

const author = "Omar Educación Financiera"

const routes = [
  { path: '/', redirect: '/interes-compuesto' },
  {
    path: '/home',
    name: 'home',
    meta: {title: 'Inicio -' + author},
    beforeEnter() {location.href = 'https://omareducacionfinanciera.com/blog'}
  },
  {
    path: '/interes-compuesto',
    name: 'CompoundInterest',
    meta: {title: 'Interés Compuesto -' + author},
    component: ()  => import('../views/compound-interest/Index')
  },
  {
    path: '/amortizacion-para-credito',
    name: 'CreditAmortization',
    meta: {title: 'Amortización para crédito -' + author},
    component: ()  => import('../views/credit-amortization/Index')
  }

]

const router = new VueRouter({
  routes
})

//define title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
