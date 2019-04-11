import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
// import './Backdrop/Backdrop.css';
// import './SideDrawer/SideDrawer.css';
// import './Toolbar/Toolbar.css';


class Stylebar extends Component {
 state = {
   sideDrawerOpen: false
 };

 drawerToggleClickHandler = () => {
   this.setState((prevState) => {
     return {sideDrawerOpen: !prevState.sideDrawerOpen}
   });
 };

 backdropClickHandler = () => {
   this.setState({ sideDrawerOpen: false });
 };

 render() {
   let backdrop;

   if (this.state.sideDrawerOpen) {
     backdrop = <Backdrop click={this.backdropClickHandler} />
   }
   return (
     <div style={{height: '100%'}}>
       <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen} />
       {backdrop}
       <main style={{marginTop: '64px'}}>
         <p>Page Content</p>
       </main>
     </div>
   );
 }
}

export default Stylebar;