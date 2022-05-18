import { useDispatch } from "react-redux";
import { clearCart } from "./features/CartReducer";
import { closeModal } from "./features/ModelReducer"; 
export default function Model()
{
    const dispatch = useDispatch();
    return (
        <aside className='modal-container'>
          <div className='modal'>
            <h4>Remove all items from your shopping cart?</h4>
            <div className='btn-container'>
              <button  className='btn confirm-btn' onClick={()=>
                (dispatch(clearCart()))
                (dispatch(closeModal()))
            }>
                confirm
              </button>
              <button type='button' className='btn clear-btn' onClick={()=> dispatch(closeModal())}>
                cancel
              </button>
            </div>
          </div>
        </aside>
      );
}