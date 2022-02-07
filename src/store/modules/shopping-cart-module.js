const SHOPPING_CART_MODULE = {
    state: () => ({
        cart: {
            list: []
        }
    }),
    getters: {
        shoppingCartList(state) {
            return state.cart.list;
        },
        shoppingCartTotalPrice(state) {
            let sum = 0;

            if(state.cart.list.length === 0){
                return sum;
            }

            state.cart.list.forEach(element => {
                sum += element.price;
            });
            return sum;
        }
    },
    actions: {
        async addToShoppingCart({
            commit
        }, vehicle) {
            commit('addToCart', vehicle)
        },
        async removeFromShoppingCart({
            commit
        }, vehicle) {
            commit('removeFromCart', vehicle)
        }
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.list.push(payload);
        },
        removeFromCart(state, payload) {
            state.cart.list = state.cart.list.filter(value => value != payload);
        }
    }
};

export default SHOPPING_CART_MODULE;