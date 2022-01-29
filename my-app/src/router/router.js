import { lazy } from 'react'

const routes = [
    {
        path: '/home',
        title: "首页",
        redirect:'/home',
        component: lazy(() => import('../views/home/index')),
    },
    {
        path: '/recruitment',
        title: "友情招募",
        redirect:'/recruitment',
        component: lazy(() => import('../views/recruitment/index')),
    },
    {
        path: '/concat',
        title: "联系我们",
        redirect:'/concat',
        component: lazy(() => import('../views/concat/index')),
    }
]

export default routes