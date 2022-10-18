import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`  
 *{
  margin: 0;
  padding:0;
  box-sizing:border-box;
 } 

 button{
  cursor: pointer;
 }

.App{
  height: 100vh;

  /* background-color: #020406;
  background-image: -webkit-linear-gradient(160deg, #020406 0%, #781f20 50%, #020406 100%);
  background-image: -moz-linear-gradient(160deg, #020406 0%, #781f20 50%, #020406 100%);
  background-image: -o-linear-gradient(160deg, #020406 0%, #781f20 50%, #020406 100%);
  background-image: linear-gradient(160deg, #020406 0%, #781f20 50%, #020406 100%); */
}

.container{
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0.8rem;
}
.container.small{
	max-width: 768px;
}

`
