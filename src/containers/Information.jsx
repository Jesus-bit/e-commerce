import React, {useContext , useRef} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';

export default function Information() {
  const {state, calculateTotal, addInformation} = useContext(AppContext);
  const formInformation = useRef(null);
  const history = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formInformation.current);
    const buyer = {
      'name': formData.get('name'),
      'age': formData.get('age'),
      'email': formData.get('email'),
      'country': formData.get('country')
    }
    addInformation(buyer)
    history('/checkout/payment');
  }
  
  return (
    <Layout>
      <Helmet>
        <title>Information</title>
        <meta name="description" content="page to collect user information" />
      </Helmet>
      <div className="flex p-5 justify-around">
        <form ref={formInformation} >
          <h2>Informacion de contacto: </h2>
          <p>Nombre: </p>
          <input className="border-2 border-gray-500 rounded-lg w-full p-2" required type="text" name="name" size="40"/>
          <p>Año de nacimiento: </p>
          <input className="border-2 border-gray-500 rounded-lg w-full p-2" required type="number" name="age" min="1900"/>
          <p>email: </p>
          <input className="border-2 border-gray-500 rounded-lg w-full p-2" required type="text" name="email" id="email" />
          <p>country: </p>
          <input className="border-2 border-gray-500 rounded-lg w-full p-2" required type="text" name="country" id="country" />
          <p>
            <input type="submit" onClick={handlerSubmit} className="border-2 m-1 border-gray-500 cursor-pointer bg-yellow-500 rounded-md p-1" value="Pagar"/>
            <input type="reset" className="border-2 m-1 border-gray-400 cursor-pointer rounded-md p-1" value="Borrar"/>
          </p>
        </form>
        <div className="flex flex-col items-center justify-center">
          <h2>Pedido: {state.cart.length}</h2>
          <p>{state.cart.map((item, i) => (
            <p key={`item-${i}`} >{item.name}</p>
          ))}</p>
          <div className="flex rounded-lg p-4 m-3 w-full bg-gray-300 justify-between">
            <p>Total:</p>
            <p>{`$  ${calculateTotal()}`}</p>
          </div>
          <Link to="/checkout">
            <div className=" bg-gray-400 p-2 rounded-lg cursor-pointer">Regresar</div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
