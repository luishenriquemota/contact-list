import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline:0;
  font-family: 'Poppins', sans-serif;

}

.App{
  display: flex;

  .container{
    width: 100%;
    max-width: 95%;
    margin: 0 auto;
    padding: 0.8rem;
  }
  .container.medium{
    max-width: 80%;
  }

  .container-left{
    width: 30%;
    max-height: 100vh;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: #404040 #ffffff;
    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #404040;
    border-radius: 14px;
    border: 3px solid #ffffff;
  }

  .header{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      /* margin: 15px; */

      h1{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      h1 > .button-add{
        :hover{
          cursor: pointer;
        }
      }

      input{
        width: 100%;
        height: 25px;
        border: none;
        border-radius: 5px;
        padding: 15px;
        background-color: #E9ECEF;

      }

    }


  }

  .container-right{
    width: 70%;
  }
  
    
  }


/* .App{
  display: flex;
  height: 100vh;
  

  .section_contact{
    min-width: 30%;
    max-height: 100vh;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: #404040 #ffffff;
    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #404040;
    border-radius: 14px;
    border: 3px solid #ffffff;
  }


    .header{
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 15px;

      h1{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      h1 > .button-add{
        :hover{
          cursor: pointer;
        }
      }

      input{
        width: 100%;
        height: 25px;
        border: none;
        border-radius: 5px;
        padding: 15px;
        background-color: #E9ECEF;

      }

    }



  }

  .section_void{
    width: 70%;
    max-height: 100vh;
  }
}
 */



`