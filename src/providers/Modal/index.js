import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {

  const [modal, setModal] = useState(false) 

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <ModalContext.Provider value={{openModal, closeModal, modal}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)