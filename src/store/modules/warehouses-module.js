import API_CLIENT from '../../api/index'

const WAREHOUSES_MODULE = {
    state: () => ({
        warehouses: {
            list: [],
            active: null
        }
    }),
    getters: {
        warehousesList(state) {
            return state.warehouses.list;
        },
        warehousesActive(state) {
            return state.warehouses.active;
        },
        warehousesActiveName(state) {
            if (state.warehouses.active) {
                return state.warehouses.active.name
            }
            return 'Choose warehouse'
        }
    },
    actions: {
        async apiGetAllWarehouses({
            commit
        }) {
            const warehouses = await API_CLIENT.warehouse.getAll();

            if (!warehouses) {
                // error
            }

            commit('setWarehousesList', warehouses);
        },
        async warehousesSetActiveWarehouse({commit}, payload){
            commit('setActiveWarehouse', payload)
        }
    },
    mutations: {
        setWarehousesList(state, payload) {
            state.warehouses.list = payload;
        },
        setActiveWarehouse(state, payload) {
            state.warehouses.active = payload;
        }
    }
};

export default WAREHOUSES_MODULE;