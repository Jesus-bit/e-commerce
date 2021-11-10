import React, {useContext} from 'react'
import AppContext from '../context/AppContext'

export default function EventModal({event, setModalEvents}) {
  const {addToCart} = useContext(AppContext);
    return (
      <div className={`fixed right-0 w-2/5 p-4 top-20 flex flex-col rounded-md bg-gray-100 ${event ? '' : 'hidden'}`}>
        <div>
          <button type="button" onClick={() => setModalEvents()} >
            <span className="material-icons">
            close
            </span>
          </button>
          <img src={event.images[2].url} className="w-4/5" alt={event.name} />
        </div>
        <div className="flex flex-col justify-between items-baseline">
          <p>Price: ${!event.priceRanges ? '0' : event.priceRanges[0].min + event.priceRanges[0].currency}</p>
          <p>{event.name}</p>
          <p className="my-3">{event.info}</p>
          <p>{`${event._embedded.venues[0].city.name} ${event._embedded.venues[0].state.name} ${event._embedded.venues[0].country.name}`}</p>
        </div>
        <button type="button" onClick={() => addToCart(event)} className="bg-yellow-500 justify-center rounded-md p-2 flex items-center">
          añadir a cart
          <span className="material-icons">
          add_shopping_cart
          </span>
        </button>
      </div>
    )
}
