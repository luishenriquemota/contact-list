import styled from "styled-components"

export const CardContactStyled = styled.li`
display: flex;
align-items: center;
border-radius: 15px;
padding: 10px 30px;
cursor: pointer;
:hover{
  background-color: grey;
}

span{
  width: 5rem;
  background-color: #5126EA;
  padding:min(25px, 3.5vw);
  border-radius: 50%;
  font-size: min(18px, 5vw);
  font-weight: bold;
  text-align: center;
}

p{
  width: 100%;
  font-size: min(30px, 5.5vw);
  font-weight: bold;
  text-align: center;
}


@media (min-width: 768px){
  
}

`

// export const CardContactStyled = styled.li`
// width: 100%;
// display: flex;
// align-items: center;
// border-radius: 15px;
// padding: 10px 30px;
// cursor: pointer;
// :hover{
//   background-color: grey;
// }

// span{
//   width: 5rem;
//   background-color: #5126EA;
//   padding: 20px;
//   border-radius: 50%;
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
// }

// p{
//   width: 100%;
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
// }
