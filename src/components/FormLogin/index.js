import { LoginStyled } from "./style"
import { useHistory } from "react-router-dom"
import api from "../../api"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSnackbar } from "notistack"


const FormLogin = () => {

  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido!"),
    password: yup.string()
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })


  const loginSubmit = ({email, password}) => {

    api.post("/client/login", {
      email: email,
      password: password
    })
    .then((res) => {
      localStorage.setItem("@Client_token", JSON.stringify(res.data))

      enqueueSnackbar("Login realizado com sucesso.", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        }
      })

      setTimeout(() => {
        history.push("/homePage")
      }, 2000)

    })
    .catch((err) => {
      enqueueSnackbar("Email/Senha Incorreto.", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        }
      })
    })
  }


  return(
    <LoginStyled onSubmit={handleSubmit(loginSubmit)}>
      <h2>Login</h2>
      <input type={"text"} placeholder="Email" required {...register("email")}/>
      <input type={"text"} placeholder="Senha" required {...register("password")}/>
      <button type="submit">Login</button>
    </LoginStyled>
  )
}
export default FormLogin