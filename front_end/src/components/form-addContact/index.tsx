import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { IContact } from "../../interfaces"
import { normalizeCpf, normalizeTelephone } from "../../masks/mask"
import { useContact } from "../../providers/contact"
import { Modal } from "../modal"
import { FormStyled } from "./style"

export const ModalAddContact = () => {
  const {createContact} = useContact()
  const {register, handleSubmit, watch, setValue} = useForm({})

 const telehoneValue = watch("telephone")
 const cpfValue = watch("cpf")

 useEffect(() => {
  setValue("telephone", normalizeTelephone(telehoneValue))
  setValue("cpf", normalizeCpf(cpfValue))
 }, [cpfValue, telehoneValue])

 const submit = handleSubmit((data: IContact | any) => {
  createContact(data)
 })

  return  (
      <Modal title={"Adicionar contato"}>
      <FormStyled onSubmit={submit}>
          <div className="name">
            <span>Nome</span>
            <input type="text" minLength={3} placeholder="Nome" required={true} {...register("first_name")}/>
            <input type="text" minLength={3} placeholder="Sobrenome" {...register("last_name")}/>
          </div>

          <div className="email">
            <span>Email</span>
            <input type="email" placeholder="example@email.com" required={true} {...register("email")}/>
          </div>

          <div className="cpf">
            <span >CPF</span>
            <input type="text"  placeholder="000.000.000-00" maxLength={14} required={true}  {...register("cpf")}/>
          </div>

          <div>
            <span className="tel">Telefone</span>
            <input type="text"  placeholder="(99) 9999-9999" required={true} {...register("telephone")}/>
          </div>

          <button type="submit">Criar</button>
        </FormStyled>
      </Modal>
  )
}