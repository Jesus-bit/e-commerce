import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Order from './Order'

export default function Layout({children}) {
  const [orderVisible, setOrderVisible] = useState(false)
  return (
    <>
      <Header orderVisible={orderVisible} setOrderVisible={setOrderVisible} />
      <Order orderVisible={orderVisible} setOrderVisible={setOrderVisible}/>
      <>
        {children}
      </>
      <Footer />
    </>
  )
}
