import Vue from 'vue'
import Vuex from 'vuex'
import SHOPPING_CART_MODULE from './modules/shopping-cart-module';
import WAREHOUSES_MODULE from './modules/warehouses-module';

Vue.use(Vuex)

const STORE = new Vuex.Store({
    modules: {
        warehouses: WAREHOUSES_MODULE,
        cart: SHOPPING_CART_MODULE
    }
});

export default STORE;