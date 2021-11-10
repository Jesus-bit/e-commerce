import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom'
import AppContext from '../context/AppContext';
import Loading from '../containers/Loading';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';

const App = () => {
  const {isLoading} = useContext(AppContext);
  return (
    <>
      {!isLoading ?
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path="*"  element={<NotFound />} />
          </Routes>
        : <Loading />
      }
    </>
  )
}

export default App;