import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitiy"
import { AppError } from "../errors/appError"



export const editContactService = async (data: any, id: string) => {

  const contactrepository = AppDataSource.getRepository(Contact)

  const contact = await contactrepository.findOneBy({id: id})

  if (!contact){
    throw new AppError(404, "Contact not found")
  }

  contact!.first_name = data.first_name ? data.first_name : contact!.first_name
  contact!.last_name = data.last_name ? data.last_name : contact!.last_name
  contact!.email = data.email ? data.email : contact!.email
  contact!.telephone = data.telephone ? data.telephone : contact!.telephone
  contact!.cpf = data.cpf ? data.cpf : contact!.cpf

  await contactrepository.save(contact!)
}