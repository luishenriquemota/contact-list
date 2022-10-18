import { Route, Switch } from "react-router-dom"
import LoginModal from "../components/loginModal"
import RegisterModal from "../components/registerModal/indext"
import HomePage from "../pages/homePage"


export const Routes = () => {
  return(
    <Switch>
      <Route exact path="/">
        <LoginModal/>
      </Route>
      <Route exact path="/register">
        <RegisterModal/>
      </Route>
      <Route exact path="/homePage">
        <HomePage/>
      </Route>
    </Switch>
  )
}