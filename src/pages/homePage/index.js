import ContactList from "../../components/Contacts"
import InfoUser from "../../components/infoUser"
import Header from "../../components/header"
import { HomePageStyled } from "./style"


const HomePage = () => {


  return(
    <HomePageStyled>
      <Header/>
      <InfoUser/>
      <ContactList/>
    </HomePageStyled>
  )
}
export default HomePage