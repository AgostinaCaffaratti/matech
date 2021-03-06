import React, { useState } from 'react';

const Context = React.createContext({})

export function ThemeContextProvider ({children}) {
  const [theme, setTheme] = useState('Light')

  return <Context.Provider value={{theme, setTheme}}>
    {children}
  </Context.Provider>

}

  export default Context