import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const clearCartItems = () => {
        dispatch(clearCart());
    }

    return(
        <div className="cartpage pt-20 text-center m-10 p-20">
            <h1>Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={clearCartItems}
            >
                Clear Cart
                </button>
            {cartItems.length === 0 && (<h1>Add items in the cart</h1>) }
            <ItemList items={cartItems}/>    
        </div>
    )
}

export default CartPage;