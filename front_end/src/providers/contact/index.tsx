import { createContext, useContext, useState } from "react"
import { toast } from "react-hot-toast";
import { IChildren, IContact, IContactEdit } from "../../interfaces"
import { api } from "../../services/api";
import { useModal } from "../modal";

interface IContactProviderProps {
  createContact: (data: IContact) => void;
  listContacts: () => void;
  viewDetailContact: (id: string) => void
  editContact: (data: IContactEdit) => void
  deleteContact: () => void
  contacts: IContact[]
  detailContact: IContact
}


const ContactContext = createContext<IContactProviderProps>({} as IContactProviderProps)

export const ContactContextProvider = ({children}: IChildren) => {
  const [contacts, setContacts] = useState<IContact[]>([])
  const [detailContact, setDetailContact] = useState<IContact>({} as IContact)

  const {closeModal} = useModal()


  const createContact = (data: IContact) => {
    api.post("", data).then(res => {
      toast.success("Contato Adicionado")
      setTimeout(() => {
        closeModal()
      }, 500)
    }).catch()
  }

  const listContacts = () => {
    api.get("").then(res => setContacts(res.data)).catch(err => toast.error("Algo deu errado"))
  }

  const viewDetailContact = (id: string) => {
    api.get(`/detail/${id}`).then(res => setDetailContact(res.data)).catch(err => toast.error("Algo deu errado"))
  }

  const editContact = (data: IContactEdit) => {
    api.patch(`/${detailContact.id}`, data).then(res => {
      toast.success("Contato atualizado")
      setTimeout(() => {
        closeModal()
        window.location.reload()
      }, 500)
    }).catch(
      err => toast.error("ALgo deu errado")
    )
  }

  const deleteContact = () => {
    api.delete(`/${detailContact.id}`).then(res => {
      toast.success("Contato deletado")
      closeModal()
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }).catch(err => toast.error("Algo deu errados"))
  }


  return (
    <ContactContext.Provider value={{createContact, listContacts, contacts, viewDetailContact, detailContact, editContact, deleteContact}}>
      {children}
    </ContactContext.Provider>
  )

}

export const useContact = () => useContext(ContactContext)