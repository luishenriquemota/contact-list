import { useContact } from "../../providers/contact"
import { CardContactStyled } from "./style"


interface ICardProps{
  first_name: string
  last_name: string
  id: string
}

export const CardContact = ({first_name, last_name, id}: ICardProps) => {
  const {viewDetailContact} = useContact()

  return (
    <CardContactStyled onClick={() => viewDetailContact(id)}>
      <span>{`${first_name.substring(0, 1).toUpperCase()}${last_name.substring(0, 1).toUpperCase()}`}</span>
      <p>{`${first_name} ${last_name}`}</p>
    </CardContactStyled>
  )
}