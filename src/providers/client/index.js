import { createContext, useContext, useState } from "react";

export const ClientContext = createContext()

export const ClientProvider = ({children}) => {
  const [client, setClient] = useState()

  const addClient = (person) => {
    setClient(person)
  }

  return  (
    <ClientContext.Provider value={{client, setClient, addClient}}>
      {children}
    </ClientContext.Provider>
  )

}

export const useClient = () => useContext(ClientContext)
