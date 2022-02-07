import API_CLIENT from '../../api/index'

const WAREHOUSE_MODULE = {
    state: () => ({
        warehouse: {
            list: [],
            active: null
        }
    }),
    getters: {
        warehouseList(state) {
            return state.warehouse.list;
        },
        warehouseActive(state) {
            return state.warehouse.active;
        },
        warehouseActiveName(state) {
            if (state.warehouse.active) {
                return state.warehouse.active.name
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

            commit('setWarehouseList', warehouses);
        },
        async warehouseSetActiveWarehouse({commit}, payload){
            commit('setActiveWarehouse', payload)
        }
    },
    mutations: {
        setWarehouseList(state, payload) {
            state.warehouse.list = payload;
        },
        setActiveWarehouse(state, payload) {
            state.warehouse.active = payload;
        }
    }
};

export default WAREHOUSE_MODULE;