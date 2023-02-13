import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitiy"



export const listContactsService = async (data: Contact) => {

  const contactrepository = AppDataSource.getRepository(Contact)

  const contacts = await contactrepository.find()

  return contacts
}