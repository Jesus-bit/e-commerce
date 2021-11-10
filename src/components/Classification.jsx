import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Classification() {
  const [classifications, setClassifications] = useState({})
  useEffect(() => {
    axios.get('https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=tjzh4UqFEna1Nms2OsPrA1jqQs0GV0uo')
      .then(response =>{
        setClassifications(response.data);
      })
  }, []);
  return (
    <div>
      {classifications._embedded.classifications.map(classification => (
        <li>{classification}</li>
      ))}
    </div>
  )
}
