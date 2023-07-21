import { createStore, combineReducers } from "redux";
import { ShareRedux, ShareReduxCart } from "./ShareRedux";
// import { legacy_createStore as createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: ShareRedux,
    carts:ShareReduxCart
});

const store = createStore(rootReducer);
export default store;