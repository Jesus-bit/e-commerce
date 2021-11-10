import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import cart from '../assets/shopping-cart.png'
import AppContext from '../context/AppContext'

export default function Header({orderVisible, setOrderVisible}) {
  const {state, setSearch} = useContext(AppContext);
  const SearchInput = useRef();
  const formatValue = () => {
    const {value} = SearchInput.current;
    const valueFormat = value.replace(' ', '+');
    return valueFormat;
  }
  const handlerSearch = () => {
    setSearch(formatValue());
  }
  
  const handlerEnter = (e) => {
    if (e.keyCode === 13) {
      setSearch(formatValue());
    }
  }
  
  return (
    <header className="flex justify-between bg-white sticky w-full top-0 p-4 items-center">
      <Link to="/">
        <img className="w-20 h-20" src={logo} alt="logo" />
      </Link>
      <div className="flex w-2/4 justify-center">
        <input type="search" id="site-search" onKeyDown={handlerEnter} ref={SearchInput} placeholder="Search" className="p-4 w-2/4 border-2 border-gray-700 rounded-xl h-6" />
        <button type="button" onClick={handlerSearch}>
          <span className="material-icons">
            search
          </span>
        </button>
      </div>
      <button onClick={() => setOrderVisible(!orderVisible)} className="border-none bg-transparent" type="button">
        
        <span className="material-icons">
          shopping_cart
        </span>
      </button>
      <div className={`absolute justify-center items-center right-3 top-7 w-5 h-5 rounded-full bg-yellow-400 ${state.cart.length ? 'flex' : 'hidden'}`}>{state.cart.length}</div>
    </header>
  )
}
