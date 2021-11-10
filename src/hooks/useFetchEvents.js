import {useEffect, useState} from 'react';
import axios from 'axios';

const initialState = {
  cart: [],
  information: ''
}

function useFetchEvents() {
  const [events, setEvents] = useState()
  const [error, setError] = useState(false);
  const [search, setSearch] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState(initialState);
  const URL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=41&apikey=tjzh4UqFEna1Nms2OsPrA1jqQs0GV0uo'
  const API = search 
    ? `${URL}&keyword=${search}` 
    : URL;
  useEffect(() => {
    setIsLoading(true)
    axios.get(API)
      .then(response =>{
        setEvents(response.data);
      })
      .catch(response => {
        setError(response)
      })
      .finally(() => setIsLoading(false))
  }, [API]);
  const addToCart = (payload) => {
    setState({
      ... state,
      cart: [...state.cart, payload]
    })
  }
  
  const calculateTotal = () => {
    const reducer = (accumulator, valueItem) => (
      accumulator + (valueItem.priceRanges ? valueItem.priceRanges[0].min : 0)
    );
    const total = state.cart.reduce(reducer, 0);
    return total;
  }

  const addInformation = (payload) => {
    setState({
      ... state,
      information: payload,
    })
  }
  
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== payload.id)
    })
  }
  return {
    error,
    events,
    isLoading,
    removeFromCart,
    calculateTotal,
    addInformation,
    addToCart,
    setSearch,
    state
  };
}

export default useFetchEvents;