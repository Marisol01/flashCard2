import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const sideDrawer = props => {
 let drawerClasses = 'side-drawer';
 if (props.show) {
   drawerClasses = 'side-drawer open';
 }
 return (
   <nav className={drawerClasses}>
     <ul>
       <li><Link to={{
                pathname:`/card`, //api flow for this?
                state: {
                  Decks: true
              }
            }}>JavaScript</Link></li>

       <li><Link to={{
                pathname:`/card`, //api flow for this?
                state: {
                  Decks: true
                }
               }} >Ruby</Link></li>

        <li><Link to={{
                pathname:`/DeckHTML`, //api flow for this?
                state: {
                  Decks: true
              }
            }}>HTML</Link></li>

        <li><Link to={{
                pathname:`/card`, //api flow for this?
                state: {
                  Decks: true
              }
            }}>CSS</Link></li>

        <li><Link to={{
                pathname:`/card`, //api flow for this?
                state: {
                  Decks: true
              }
            }}>Focus Deck</Link></li>
     </ul>
   </nav>
 );
};

export default sideDrawer;