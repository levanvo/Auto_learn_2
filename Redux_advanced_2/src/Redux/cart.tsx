import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "./Api";


const CartData = () => {
    const dispatch = useDispatch();
    const  {cart}  = useSelector((states: any) => states.carts);
    useEffect(() => {
        const fetchCart = async () => {
            const { data } = await instance.get(`/carts`);
            dispatch({type:"fetchCart",payload:cart});
        }
        fetchCart();
    }, [])
    if(cart){
        return cart;
    }
}
export default CartData;