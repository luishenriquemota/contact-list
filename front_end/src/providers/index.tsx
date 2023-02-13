import { IChildren } from "../interfaces";
import { ContactContextProvider } from "./contact";
import { ModalContextProvider } from "./modal";



export const Providers = ({children}: IChildren) => {
  return( 
  <ModalContextProvider>
    <ContactContextProvider>
      {children}
    </ContactContextProvider>
  </ModalContextProvider>
  )

}