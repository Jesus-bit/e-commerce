import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';

export default function Checkout() {
  const {
    state,
    removeFromCart,
    calculateTotal
  } = useContext(AppContext);
  return (
    <Layout>
      <div className="w-screen p-6 items-center flex justify-center flex-col">
        <div className="w-full">
          <h2 className="font-medium text-lg">{state.cart.length 
          ? `lista de pedidos: ${state.cart.length}`
          : 'ningun pedido'
          }</h2>
          <div className="flex flex-col">
            {state.cart.length ? 
            state.cart.map((event, i) => (
              <OrderItem key={`${event.id}-${i}`} removeFromCart={removeFromCart} event={event} />
            ))
            : <p>Agrega elementos Aqui</p>
            }
          </div>
        </div>
        <div className="flex rounded-lg p-4 m-3 w-full text-center  bg-gray-300 justify-between">
          <p>Total:</p>
          <p>{`$  ${calculateTotal()}`}</p>
        </div>
        {state.cart.length > 0 && (
          <Link to="/checkout/information" className="bg-yellow-500 w-full text-center  rounded-xl p-4">
            <button type="button" > Continuar pedido</button>
          </Link>
        )}
      </div>
    </Layout>
  )
}
