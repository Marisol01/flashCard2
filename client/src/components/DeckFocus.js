import React from 'react';
import axios from 'axios';
import Card from './Card'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {  Button, Icon } from 'semantic-ui-react';

class DeckFocus extends React.Component {
    state = { cards: [], };
  
    componentDidMount() {
      axios.get('/api/DeckFocus')
        .then( res => this.setState({ cards: res.data, }) );
    }
    render() {
        const { cards, } = this.state;
        return (
          <Card />
        
        )}
    
}
    
    export default DeckFocus;