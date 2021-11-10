import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Event({event, setModalEvents}) {
  const {addToCart} = useContext(AppContext)
  return (
    <div className="rounded-2xl m-4 flex flex-col md:flex-row justify-between items-center text-center shadow-md p-5" >
      <button type="button" className="w-6/12" onClick={() => setModalEvents(event)} >
        <img className="w-6/12" src={event.images[2].url} alt={event.name} />
      </button>
      <div>        
        <h2>{event.name}</h2>
        <p>{event.dates.start.localDate}</p>
        <p>Classification: {event.classifications ? event.classifications[0].genre.name : 'None'} </p>
      </div>
      <button onClick={() => addToCart(event)}  type="button" className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-md p-2">
        <span className="material-icons">
        add_shopping_cart
        </span>
      </button>
    </div>
  )
}

