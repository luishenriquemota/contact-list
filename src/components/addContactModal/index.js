import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useModal } from '../../providers/Modal';
import { FormAddStyled } from './style';
import axios from 'axios';
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

export default function BasicModal() {
  const {closeModal, modal} = useModal()
  
  const handleClose = () => {
    closeModal()
  };

  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatorio"),
    email: yup.string().email("Email invalido").required("campo obrigatorio"),
    telephone: yup.string().required("campo obrigatorio")
  })

  const {register, handleSubmit, formState: {errrors},} = useForm({
    resolver:yupResolver(schema)
  })

  const registerContact = (data) => {

    axios.post(`http://localhost:8080/contact/`, data, {
      headers:{
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Client_token"))}`
      } 
    })
    .then((res) => {
      setTimeout(() => {window.location.reload()}, 2000)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <p>Cadastrar Contato</p> */}
          <FormAddStyled onSubmit={handleSubmit(registerContact)}>
            <input placeholder='Nome' {...register("name")}/>
            <input placeholder='Email' {...register("email")}/>
            <input placeholder='Telefone' {...register("telephone")}/>
            <button type='submit'>Cadastrar</button>
          </FormAddStyled>
        </Box>
      </Modal>
    </div>
  );
}
