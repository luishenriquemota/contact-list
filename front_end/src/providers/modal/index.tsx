import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { IChildren } from "../../interfaces"


interface IPropsContext{
  setOpenModalCreate: Dispatch<SetStateAction<boolean>>
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>
  openModalCreate: boolean
  openModalEdit: boolean
  openModalDelete: boolean
  closeModal: () => void
}

const ModalContext = createContext({} as IPropsContext)

export const ModalContextProvider = ({children}: IChildren) => {

  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false)
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)

  const closeModal = () => {
    setOpenModalCreate(false)
    setOpenModalEdit(false)
    setOpenModalDelete(false)
  }


  return (
    <ModalContext.Provider value={{setOpenModalCreate, openModalCreate, setOpenModalEdit, openModalEdit, setOpenModalDelete, openModalDelete, closeModal}}>
      {children}
    </ModalContext.Provider>
  )

}

export const useModal = () => useContext(ModalContext)