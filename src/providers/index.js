import { ClientProvider } from "./client"
import { ModalProvider } from "./Modal"



const Providers = ({children}) => {
  return(
    <ClientProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ClientProvider>
  )
}
export default Providers