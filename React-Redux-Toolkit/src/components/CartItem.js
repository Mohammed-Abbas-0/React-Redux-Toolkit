
import { useDispatch } from "react-redux"
import { increase,decrease,removeItem, toggleAmount } from "./features/CartReducer";
export default function CartItem({ id, img, title, price, amount })
{
    const dispatch = useDispatch();
    
    return(
        <>
            <div>
                <p>{title}</p>
                <p>{amount}</p>
                <button onClick={() => dispatch(increase({id}))}> increase+</button>
                <button onClick={()=>
                    {if(amount == 1)
                     {
                         dispatch(removeItem(id))
                     }
                        dispatch(decrease({id})
                    
                     )
                    }
                    }>Decrease</button>
                    <br/>
                    <button onClick={()=> dispatch(removeItem(id))}>Remove Item</button>
                    
            </div>
        </>
    )
}