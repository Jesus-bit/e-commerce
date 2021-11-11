import React, {useContext} from 'react'
import { useNavigate } from 'react-router';
import {PayPalButton} from 'react-paypal-button-v2';
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import AppContext from '../context/AppContext';

export default function Payment() {
  const {state, calculateTotal} = useContext(AppContext);
  const history = useNavigate();
  const paypalOptions = {
    clientId: 'AcLwhRdtkcpRH4xHB_0xBuJBZKw9XP6_iK855etP-uFkJEJpZHnh_IMsS9TOjKTUGwWt5Sh1NJmfOf-B',
    intent: 'capture',
    currency: state.cart[0].priceRanges ? state.cart[0].priceRanges[0].currency : 'USD',
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      history('/checkout/success');
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>Payment</title>
        <meta name="description" content="page to proceed with the payment of the product" />
      </Helmet>
      <h2 className="text-center">
        Resumen del pedido:
      </h2>
      <div>
        {state.cart.map(event => (
          <div key={event.id} className="flex justify-between p-3">            
            <p>{event.name}</p>
            <span>${event.priceRanges ? event.priceRanges[0].min : 0}</span>
          </div>
        ))}
      </div>
      <div className="flex rounded-lg p-4 m-3 bg-gray-300 justify-between">
        <p>Total:</p>
        <p>{`$  ${calculateTotal()}`}</p>
      </div>
      <div>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={calculateTotal()}
          onStart={() => console.log('Start Payment')}
          onSuccess={data => handlePaymentSuccess(data)}
          onError={error => console.log(error)}
          onCancel={data => console.log(data)}
        />
      </div>
    </Layout>
  )
}
