import { produce } from "immer";

const initialState: { products: [], isLoading: boolean, error: string } = {
    products: [],
    isLoading: false,
    error: ""
}
const initialStateCart: { cart: [] } = {
    cart: [],
}

export const ShareRedux = (states = initialState as any, action: any) => {
    return produce(states, draftState => {
        switch (action.type) {
            case "fetchProducts":
                draftState.products = action.payload
                break;
            case "addProduct":
                draftState.products.push(action.payload.data);
                break;
            case "updateProduct":
                const product = action.payload.data
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item)
                // draftState.products[product.id] = product;
                break;
            case "deleteProduct":
                const id = action.payload;
                draftState.products = states.products.filter((item: any) => item.id !== id)
                break;
            default:
                return states;
        }
    })

}
export const ShareReduxCart = (states = initialStateCart as any, action: any) => {
    return produce(states, draftState => {
        switch (action.type) {
            case "fetchCart":
                draftState.cart = action.payload
                break;
            case "addCart":
                draftState.cart.push(action.payload);
                break;
            case "PlusCart":
                draftState.cart.find((item: any) => item.id == action.payload).quantity++;
                break;
            case "MinusCart":
                let product = draftState.cart.find((item: any) => item.id == action.payload);
                product.quantity--;
                if (product.quantity < 1) {
                    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
                    if (confirm) draftState.cart = draftState.cart.filter((item: any) => item.id != action.payload);
                    product.quantity = 1;
                }
                break;
            case "deleteCart":
                const id = action.payload;
                draftState.cart = states.cart.filter((item: any) => item.id !== id)
                break;
            default:
                return states;
        }
    })

}