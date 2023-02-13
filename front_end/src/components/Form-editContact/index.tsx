import { Modal } from "../modal"
import {useForm} from "react-hook-form"
import { FormStyled } from "../form-addContact/style"
import { IContactEdit } from "../../interfaces"
import { useContact } from "../../providers/contact"
import { useEffect } from "react"
import { normalizeCpf, normalizeTelephone } from "../../masks/mask"


export const ModalEditContact = () => {
  const {editContact} =useContact()
  const {register, handleSubmit, watch, setValue} = useForm({})


  const telehoneValue = watch("telephone")
  const cpfValue = watch("cpf")

  useEffect(() => {
    setValue("telephone", normalizeTelephone(telehoneValue))
    setValue("cpf", normalizeCpf(cpfValue))
   }, [cpfValue, telehoneValue])

   const submit = handleSubmit((data: IContactEdit) => {
    editContact(data)
   })

  return (
    <Modal title="Editar Contato">
      <FormStyled onSubmit={submit}>
      <div className="name">
            <span>Nome</span>
            <input type="text" placeholder="Nome" {...register("first_name")}/>
            <input type="text" placeholder="Sobrenome" {...register("last_name")}/>
          </div>

          <div className="email">
            <span>Email</span>
            <input type="email"  placeholder="example@email.com" {...register("email")}/>
          </div>

          <div className="cpf">
            <span >CPF</span>
            <input type="text" placeholder="000.000.000-00" maxLength={14} {...register("cpf")}/>
          </div>

          <div>
            <span className="tel">Telefone</span>
            <input type="text" placeholder="(99) 99999-9999" {...register("telephone")}/>
          </div>

          <button type="submit">Editar</button>
      </FormStyled>
    </Modal>
  )
}