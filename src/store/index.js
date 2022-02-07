import Vue from 'vue'
import Vuex from 'vuex'
import WAREHOUSES_MODULE from './modules/warehouses-module';

Vue.use(Vuex)

const STORE = new Vuex.Store({
    modules: {
        warehouses: WAREHOUSES_MODULE
    },
    state: {
        
    }
});

export default STORE;