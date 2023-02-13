import {Express} from "express"
import { contactRoutes } from "./contact.routes"

export const AppRoutes = (app: Express) => {
  app.use("", contactRoutes())
}