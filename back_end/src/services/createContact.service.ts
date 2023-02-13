import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitiy"

interface contactProps {
  first_name: string
  last_name: string
  email: string
  cpf: string
  telephone: string
}

export const createContactService = async (data: contactProps ): Promise<Contact> => {
  const {cpf, email, first_name, last_name, telephone} = data


  const contactrepository = AppDataSource.getRepository(Contact)

  const contact = contactrepository.create({
    first_name,
    last_name,
    email,
    cpf,
    telephone
  })

  await contactrepository.save(contact)

  return contact
}