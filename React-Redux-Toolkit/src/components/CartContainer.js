import { useDispatch, useSelector } from "react-redux";
import {CartIcon} from '../icons';
import CartItem from "./CartItem";
import { openModal } from "./features/ModelReducer";
export default function CartContainer()
{
    const {cartItem,total} = useSelector(state=> state.cart);
    const dispatch = useDispatch();
    return (
        <>
        <div>
            {cartItem.map((item) => {
                return <CartItem key={item.id} {...item}/>;
            })}
            <br/>
            
            <button onClick={()=>dispatch(openModal())}>Clear Item</button>
            <footer>Total: $ {total.toFixed(2)}</footer>
        </div>            
        </>
    )
}