import { Request, Response } from "express";
import { createContactService } from "../services/createContact.service";
import { deleteContactService } from "../services/deleteContact.service";
import { editContactService } from "../services/EditUser.service";
import { listContactsService } from "../services/listContacts.service";
import { viewDetailContactService } from "../services/viewProfile.service";


export const createContactController = async (req: Request, res: Response): Promise<Response> => {
  const data = req.body
  const createdContact = await createContactService(data)

  return res.status(201).json(createdContact)
}

export const listContactsController = async (req: Request, res: Response): Promise<Response> => {
  const data = req.body
  const listContacts = await listContactsService(data)

  return res.status(200).json(listContacts)
}

export const editContactController = async (req: Request, res: Response):Promise<Response> => {
  const {id} = req.params
  const data = req.body

  await editContactService(data, id)

  return res.status(200).send()
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  await deleteContactService(id)

  return res.status(204).send()
}

export const viewDetailContactController = async (req: Request, res: Response) => {
  const {id} = req.params

  const detailContact = await viewDetailContactService(id)

  return res.status(200).json(detailContact)
}