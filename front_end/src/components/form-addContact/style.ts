import styled from "styled-components";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 30px;
margin: 30px;

div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

div > span{
  width: 20px;
  margin-right: 6rem;
}

div > input{
  width: 100%;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #E9ECEF;
}

button{
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}



`