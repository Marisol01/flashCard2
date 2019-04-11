import React, { Component } from 'react';
import { Container, Card, Grid } from 'react';
import { connect } from 'react';
import Card from './components/Card';
import Button from 'react';
import ShowDeck from './components/ShowDeck';
import CreateDeck from './components/CreateDeck';

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "New Deck",
            
        }
        
    }
    


    //Ruby[]
    //React[]
    //HTML[]
    //CSS[]
    //Focus_Deck[]

  
    render() {
      const {name} = this.props
  
      return(
          <div>kjgfjg</div>
      )
    }
}

export default Deck;
