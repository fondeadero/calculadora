import Vue from 'vue'
import VueRouter from 'vue-router'
import CompoundInterestForm from "../views/CompoundInterestForm";
// import Home from "../views/Home";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'VueChartJS',
    component: CompoundInterestForm,
    meta: {title: 'Interés Compuesto - Omar Educación Financiera'}
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
