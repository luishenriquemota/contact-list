import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode
}

export interface IContact{
  first_name: string
  last_name: string
  email: string
  cpf: string
  telephone: string
  id: string
}

export interface IContactEdit{
  first_name?: string
  last_name?: string
  email?: string
  cpf?: string
  telephone?: string
}