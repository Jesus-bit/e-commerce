import React from 'react';
import useFetchEvents from '../hooks/useFetchEvents';

const AppContext = React.createContext({});

export function AppContextProvider({children}) {
  const initialState = useFetchEvents();
  return (
    <AppContext.Provider value={initialState} >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;