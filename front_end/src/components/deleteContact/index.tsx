import { useContact } from "../../providers/contact"
import { useModal } from "../../providers/modal"
import { Modal } from "../modal"
import { DeleteStyled } from "./style"


export const ModalDeleteContact = () => {
  const {deleteContact} = useContact()
  const {closeModal} = useModal()


  return (
    <Modal title="Deletar este contato?">
      <DeleteStyled>
        <button onClick={() => deleteContact()}>Sim</button>
        <button onClick={() => closeModal()}>Não</button>
      </DeleteStyled>
    </Modal>
  )
}