import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'index',
      component: () => import('../components/app/Index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../components/app/News.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/admin/Index.vue')
    },



    {
      path: '/admin/get',
      name: 'admin.get',
      component: () => import('../components/admin/Get.vue')
    },
    {
      path: '/admin/login',
      name: 'admin.login',
      component: () => import('../components/admin/Login.vue')
    },
    {
      path: '/admin/register',
      name: 'admin.register',
      component: () => import('../components/admin/Register.vue')
    },
  ]
})

export default router
