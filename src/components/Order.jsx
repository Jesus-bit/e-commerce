import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import OrderItem from './OrderItem';

export default function Order({orderVisible, setOrderVisible}) {
  const {
    state,
    removeFromCart, 
    calculateTotal
  } = useContext(AppContext);
  
  return (
    <div className={`flex-col p-3 z-10 fixed bg-gray-100 right-0 rounded-md w-full sm:w-full xl:w-3/5 ${orderVisible ? 'flex': 'hidden'}`}>
      <div className="flex justify-between">
      <button type="button" onClick={() => setOrderVisible(!orderVisible)}>
        <span className="material-icons text-gray-500">
        west
        </span>
      </button>
        <p>Shopping cart</p>
      </div>
      {state.cart.length ? 
        state.cart.map((event, i) => (
          <OrderItem key={`${event.id}-${i}`} removeFromCart={removeFromCart} event={event} />
        ))
      : <p>Agrega elementos Aqui</p>
      }
      <div className="flex rounded-lg p-4 m-3 bg-gray-300 justify-between">
        <p>Total:</p>
        <p>{`$  ${calculateTotal()}`}</p>
      </div>
      <Link className="w-full" to="/checkout">
        <button type="button" className="rounded-lg mt-3 w-full p-4 bg-yellow-500">
            Checkout
        </button>
      </Link>
    </div>
  )
}
