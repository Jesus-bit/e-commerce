import React, {useContext, useState} from 'react'
import AppContext from '../context/AppContext'
import Event from './Event';
import EventModal from './EventModal';

export default function Events() {
  const {events} = useContext(AppContext);
  const [ModalEvents, setModalEvents] = useState()
  return (
    <main className=" grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1">
      {ModalEvents && <EventModal event={ModalEvents} setModalEvents={setModalEvents} />}
      {events._embedded ? events._embedded.events.map(event => (
        <Event key={event.id} event={event} setModalEvents={setModalEvents}  />
        )
      ) : <h2>Busqueda failed</h2>}
      {/* {events._embedded.events.map(event => (
        <Event key={event.id} event={event} setModalEvents={setModalEvents}  />
        )
      )
      } */}
    </main>
  )
}
