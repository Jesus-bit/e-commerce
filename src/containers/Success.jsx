import React, { useContext } from 'react'
import Layout from '../components/Layout'
import AppContext from '../context/AppContext'

export default function Success() {
  const {state} = useContext(AppContext);
  return (
    <Layout>
    <div>
      <h1>Flicidades {state.information.name}</h1>
      <p>
        Adquiriste:
      </p>
      <div>
        {state.cart.map(product => 
          <div className="flex flex-col items-center justify-center">        
            <h2>{product.name}</h2>
            <p>{product.dates.start.localDate}</p>
          </div>
        )}
      </div>
    </div>
    </Layout>
  )
}
