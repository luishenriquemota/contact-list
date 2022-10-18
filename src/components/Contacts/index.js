// import api from "../../api"
import { useEffect, useState } from "react"
import axios from "axios"
import { ContactlistStyled } from "./style"
import { useModal } from "../../providers/Modal"
import AddContactModal from "../addContactModal"


const ContactList = () => {
  const {openModal, modal} = useModal()
  const [list, setList] = useState([])

  const addContact = () => {
    openModal()
  }

  useEffect(() => {

  axios.get(`http://localhost:8080/contact`, { headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Client_token"))}`
  }})
  .then((res) => {
    setList(res.data)
  })
  .catch((err) => console.log(err))

  }, [])

  return(
    <ContactlistStyled>
      <div>
        <p>Contatos</p>
        <button onClick={() => addContact()}>Add Contato</button>
      </div>
      <ul>
        {list ? list.map((item, index) => 
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.telephone}</p>
          </li>
        ) : <li>nada</li>}
      </ul> 
      <AddContactModal/>
    </ContactlistStyled>
    
  )
}
export default ContactList