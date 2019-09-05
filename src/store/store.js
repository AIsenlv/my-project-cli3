import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name:'lvjm' 
    },
    getters:{
        name:state=> state.name
    },
    mutations:{
        name:(store,data)=>{
             store.name=data
        }
    },
    actions:{ 

    }
})