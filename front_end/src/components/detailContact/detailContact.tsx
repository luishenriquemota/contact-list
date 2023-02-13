import { AiFillDelete } from "react-icons/ai"
import { TbEdit } from "react-icons/tb"
import { useContact } from "../../providers/contact"
import { useModal } from "../../providers/modal"
import { DetailContactStyled } from "./style"



export const DetailContact = () => {
  const {detailContact} = useContact()
  const {setOpenModalEdit, setOpenModalDelete} = useModal()


  return (
    <DetailContactStyled>
      <span className="image">{detailContact.first_name.substring(0, 1).toUpperCase() + detailContact.last_name.substring(0, 1).toUpperCase()}</span>
      <h1>{`${detailContact.first_name} ${detailContact.last_name}`}</h1>
      <div className="info">
        <h2>informações do contato</h2>
        <div>
          <p>{detailContact.email}</p>
          <span>email</span>
        </div>
        <div>
          <p>{detailContact.cpf}</p>
          <span>cpf</span>
        </div>
        <div>
          <p>{detailContact.telephone}</p>
          <span>telefone</span>
        </div>
        <div className="icons">
        <TbEdit cursor={"pointer"} onClick={() => setOpenModalEdit(true)}/>
        <AiFillDelete cursor={"pointer"} onClick={() => setOpenModalDelete(true)}/>
        </div>
      </div>
    </DetailContactStyled>
  )
}