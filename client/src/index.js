import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
export const SaveDeck= 'AddDeck';

initMiddleware();

ReactDOM.render(
 <AuthProvider>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </AuthProvider>,
 document.getElementById('root')
);

export function saveDeck (deck) {
  return {
    type: SaveDeck,
    deck,
  }
}
