import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('@/views/Layout/Layout.vue')

const Login = () => import('@/views/Login/index.vue')
const Dashboard = () => import('@/views/Dashboard/index.vue')

Vue.use(Router)

let routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                meta: { title: 'Dashboard', icon: 'icon-dashbord' }
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/404.vue')
    },
    {
        path: '*',
        redirect: '/404',
        component: () => import('@/views/404.vue')
    }
]

const router = new Router({
    mode: 'history', // 需要后台配置支持
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router
