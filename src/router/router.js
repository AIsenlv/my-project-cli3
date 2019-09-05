import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld.vue'
import Load from '@/components/load.vue'

const router=new Router({
    routes:[   
        {
            path: '/',
            redirect: '/helloworld',
        },
        {
            path:'/helloworld',
            name:HelloWorld,
            component:HelloWorld
        },
        {
            path:'/load',
            name:Load,
            component:Load
        }
    ]
})
export default router;