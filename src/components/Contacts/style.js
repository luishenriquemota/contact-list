import styled from "styled-components";


export const ContactlistStyled = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

div{
  width: 600px;
  display: flex;
  justify-content: space-between; 
}


li{
  width: 768px;
  display: flex;
  justify-content: space-between;
}
li > p{
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  /* justify-content: center; */
}


`