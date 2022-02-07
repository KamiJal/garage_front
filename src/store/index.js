import Vue from 'vue'
import Vuex from 'vuex'
import WAREHOUSE_MODULE from './modules/warehouse-module';

Vue.use(Vuex)

const STORE = new Vuex.Store({
    modules: {
        warehouse: WAREHOUSE_MODULE
    },
    state: {
        
    }
});

export default STORE;