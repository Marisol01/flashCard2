import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const sideDrawer = props => {
 let drawerClasses = 'side-drawer';
 if (props.show) {
   drawerClasses = 'side-drawer open';
 }
 return (
   <nav className={drawerClasses}>
     <ul>
      

      <div class="body">
      <div class="search-box">
        <input class="search-txt" type="text" name="" placeholder="Search"></input>
        <Icon inverted color='white' name='search' />
        <div class="search-btn">
        
        </div>
      </div>
      </div>
          

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
                pathname:`/card`, //api flow for this?
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