import styled from "styled-components";


export const DetailContactStyled = styled.div`
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;


margin: auto;
padding: 20px;


.image{
  width: 8rem;
  height: 8rem;
  display: flex;  
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 50%;
  font-size: 40px;
  font-weight: bold;
}


.info{
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #ADB5BD;

  padding: 20px;

  border-radius: 15px;
  
  position: relative;

.icons{
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 10px 0 0;

  font-size: 25px;
  
  display: flex;
  gap: 15px;
  }



}
`
