import { useEffect, useState } from "react"
import { CardContact } from "./components/card-contact"
import { DetailContact } from "./components/detailContact/detailContact"
import { ModalAddContact } from "./components/form-addContact"
import { useContact } from "./providers/contact"
import { useModal } from "./providers/modal"
import { ModalEditContact } from "./components/Form-editContact"
import { ModalDeleteContact } from "./components/deleteContact"
import {AiFillPlusCircle} from "react-icons/ai"



function App() {
  const {openModalCreate, openModalEdit, openModalDelete, setOpenModalCreate} = useModal()
  const {listContacts, contacts, detailContact} = useContact()

  const [search, setSearch] = useState<string>("")


  useEffect(() => {
    listContacts()
  }, [contacts])

  const filteredContact = search.length > 0 
  ? contacts.filter(contact => contact.first_name.includes(search) || contact.last_name.includes(search)) 
  : []

  return (
    <div className="App">
      <div className="container-left">
        <div className="header">
        <h1>Contatos <AiFillPlusCircle className="button-add" onClick={() => setOpenModalCreate(true)}/></h1>
        <input 
          type="text" 
          placeholder="Pesquisar contato" 
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        </div>
        {search.length > 0 ? (
          <ul>
            {filteredContact.map((item, index) => {
              return (
                <CardContact key={index} first_name={item.first_name} last_name={item.last_name} id={item.id}/>
              )
            })}
          </ul>
        )
        :
        <ul>
          {contacts.map((item, index) => <CardContact key={index} first_name={item.first_name} last_name={item.last_name} id={item.id}/>)}
        </ul>
      }
      </div>
      <div className="container-right">
        {detailContact.id ? <DetailContact/> : <h1></h1>}
      </div>
        {openModalCreate ? <ModalAddContact/> : undefined}    
        {openModalEdit ? <ModalEditContact/>: undefined} 
        {openModalDelete ? <ModalDeleteContact/> : undefined}
    </div>
  )
}
export default App
