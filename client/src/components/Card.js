import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {  Button, Icon } from 'semantic-ui-react';
import axios from 'axios';


class Card extends Component {
    state = { cards: [], };

    focused = id => {
      let { cards, } = this.state;
      axios.put(`/api/cards/${id}`)
      .then( ({ data }) => {
        const cards = this.state.cards.map( card => {
          if (card.id === id)
            return data
          return card
        });

        this.setState({ cards });
      });
  }

    constructor() {
      super();
      this.state = {
        focused: false,
      };
      this.handleClick = this.handleClick.bind(this);
    } 

    handleClick() {
      this.setState({ active: !this.state.active })
      this.setState({
        focused: !this.state.focused,
        });
    }
    
    render() {

      const label = this.state.focused ? 'Focus Deck' : 'Add to Focus';
      const { active } = this.state



        return(
  <>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => this.flippy.toggle() } 
                ref={(r) => this.flippyHorizontal = r}
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
                style={{ width: '40em', height: '20em' }} /// these are optional style, it is not necessary
            >
    <FrontSide
      style={{
        backgroundColor: '#fff',
        }}
      >
        <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Flip!</button>
        <h1 align="center">Your saved Focus card</h1>
    </FrontSide>
    <BackSide
      style={{ 
          backgroundColor: '#000',
          color: '#fff',
          }}>
            <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Flip!</button>
            <h1 align="center">Answer to your Focus question</h1>
    </BackSide>
  </Flippy>

  <>
    <Button icon labelPosition='left'>
        <Icon name='left arrow' />
        Previous
      </Button>
      
      <Button icon inverted color='green'>
       <Icon name='thumbs up' />
      </Button>

    <Button toggle active={active} onClick={this.handleClick} 
      onClick={this.handleClick}>
      {label}
    
    </Button>

    <Button icon inverted color='red'>
       <Icon name='thumbs down' />
      </Button>

    <Button icon labelPosition='right'>
      Next
      <Icon name='right arrow' />
    </Button>
  </>
</>

)}}

export default Card;