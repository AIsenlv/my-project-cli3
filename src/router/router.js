import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/components/home/home.vue')
const Load = () => import('@/components/home/load.vue')
const InvestmentStation = () => import('@/components/home/Investment-station.vue')
const InvestmentDetails = () => import('@/components/home/Investment-details.vue')
const router=new Router({
    routes:[   
        {
            path: '/',
            redirect: '/home',
            meta: {
                title: ''
            }
        },
        {
            path:'/home',
            name:Home,
            component:Home,
            meta: {
                title: ''
            }
        },
        {
            path:'/investmentstation',
            name:InvestmentStation,
            component:InvestmentStation,
            meta: {
                title: ''
            }
        },
        {
            path:'/load',
            name:Load,
            component:Load,
            meta: {
                title: ''
            }
        },
        {
            path:'/investmentdetails',
            name:InvestmentDetails,
            component:InvestmentDetails,
            meta: {
                title: ''
            }
        }
    ]
})
export default router;