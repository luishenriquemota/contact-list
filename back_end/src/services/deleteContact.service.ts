import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitiy"
import { AppError } from "../errors/appError"


export const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contact = await contactRepository.findOneBy({id: id})

  if(!contact){
    throw new AppError(404, "contact not found")
  }

  await contactRepository.delete(contact)
}