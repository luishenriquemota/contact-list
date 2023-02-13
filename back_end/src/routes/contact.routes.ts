import { Router } from "express";
import { createContactController, deleteContactController, editContactController, listContactsController, viewDetailContactController } from "../controllers/contact.controller";
import { validationFieldsMiddleware, validationSchema } from "../middlewares/validationFields.middleware";


const routes = Router()

export const contactRoutes = () => {
  routes.post("", validationFieldsMiddleware(validationSchema), createContactController)
  routes.get("", listContactsController)
  routes.get("/detail/:id", viewDetailContactController)
  routes.patch("/:id", editContactController)
  routes.delete("/:id", deleteContactController)



  return routes
}