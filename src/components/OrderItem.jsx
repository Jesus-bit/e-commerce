import React from 'react'

export default function OrderItem({event, removeFromCart}) {
  const FormatPrice = (price) => {
    const interPrice = new window.Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: price.currency
    }).format(price.min)
    return interPrice
  }
  return (
    <div className="rounded-xl m-2 flex flex-col md:flex-row justify-between p-3">
      <img className="w-20 rounded-lg" src={event.images[2].url} alt={event.name}/>
      <p>{event.name}</p>
      <span>{event.priceRanges ? FormatPrice(event.priceRanges[0]) : '$0'}</span>
      <button type="button" onClick={() => removeFromCart(event)}>
        <span className="material-icons">
          close
        </span>
      </button>
    </div>
  )
}
