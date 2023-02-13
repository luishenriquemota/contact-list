import styled from "styled-components";


export const BackgroundModal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ContentModal = styled.div`
margin: auto;
padding: 20px 0;
border-radius: 5px;

background-color: white;

position: relative;


h1{
  text-align: center;
}

svg{
  color: red;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 25px;
  margin: 10px 10px 0 0;  
  cursor: pointer;
}


`