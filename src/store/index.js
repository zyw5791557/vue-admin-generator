import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import app from './modules/app'
import user from './modules/user'
import * as getters from './getters';
// import * as actions from './actions';
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        user
    },
    state,
    getters,
    mutations
    // actions
})
