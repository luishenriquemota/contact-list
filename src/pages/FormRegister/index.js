import { useEffect } from "react"
import { useHistory} from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup"
import api from "../../api"
import { useSnackbar } from "notistack";
import { StyledForm } from "./style"




const FormRegister = () => {

  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()

  const schema = yup.object().shape({
    name: yup.string().required("Digite seu nome completo.").min(3, "Seu nome precisa ter no minimo 03 caracteres"),
    email: yup.string().required("Digite seu email.").email("Email inválido."),
    telephone: yup.string().required("Digite seu telefone").matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, "Numero de telefone invalido."), // Colocar um regex de teleefone.
    password: yup.string().required("Digite uma senha.").min(4, "Senha precisa ter no minimo 4 digitos."),
    passwordCheck: yup.string().required("Confirme sua senha.").oneOf([yup.ref("password")], "As senhas não são iguais")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
  console.log(errors)

  const registerSubmit = ({name, email, telephone, password}) => {
    console.log({name, email, telephone, password})

    

    api.post("/client", {
      name: name,
      email: email,
      password: password,
      telephone: telephone,
    })
    .then((data) => {
      enqueueSnackbar("Cadastro realizado com sucesso.", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        }
      })
      setTimeout(() => {
        history.push("/")
      }, 2000)
    })
    .catch((err) => {
      enqueueSnackbar("Ops, algo deu errado.", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        }
      })

    })
  }


  return (
      <StyledForm onSubmit={handleSubmit(registerSubmit)}>
        <h2>Criar Conta</h2>
        <input placeholder="Nome" required {...register("name")}/>
        <input placeholder="Email" required {...register("email")}/>
        <input type={"tel"} required placeholder="Telefone" {...register("telephone")}/>
        <input type={"password"} required placeholder="Senha" {...register("password")}/>
        <input type={"password"} required placeholder="Confirmar Senha" {...register("passwordCheck")}/>
        <button type="submit">Registrar</button>
      </StyledForm>
  )

}
export default FormRegister