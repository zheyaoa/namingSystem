import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login.vue'
import studentList from '@/pages/studentList/StudentList.vue'
import namingList from '@/pages/namingList/namingList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/studentList',
      name:'studentList',
      component:studentList
    },{
      path: '/namingList',
      name:'studentList',
      component:namingList
    }
  ]
})
