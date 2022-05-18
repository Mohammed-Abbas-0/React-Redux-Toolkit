import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import CartContainer from './components/CartContainer';
import { toggleAmount } from './components/features/CartReducer';
import Navbar from './components/Navbar';
import Model from './components/Model';

function App() {
  const {cartItem} = useSelector(state=>state.cart);
  const {isOpen} = useSelector(state=>state.model);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleAmount())
},[cartItem]);
  return (
    <div className="App">
      {isOpen && <Model/>}
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
