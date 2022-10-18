import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Providers from './providers';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "./styles/index.js"
import { SnackbarProvider } from "notistack"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <SnackbarProvider>
        <Providers>
          <GlobalStyle/>
          <App />
        </Providers>
      </SnackbarProvider>
    </React.StrictMode>
  </BrowserRouter>
);