import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitiy"
import { AppError } from "../errors/appError"


export const viewDetailContactService = async (id: string): Promise<Contact> => {
  const contactReppository = AppDataSource.getRepository(Contact)

  const contact = await contactReppository.findOneBy({id: id})

  if(!contact){
    throw new AppError(404, "Contact not found")
  }

  return contact
}