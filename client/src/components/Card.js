import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {  Button, Icon } from 'semantic-ui-react';




class Card extends Component {
    state = { cards: [], };
    
    render() {
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
                style={{ width: '800px', height: '500px' }} /// these are optional style, it is not necessary
            >
    <FrontSide
      style={{
        backgroundColor: '#fff',
        }}
      >
        <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Flip!</button>
      Question
    </FrontSide>
    <BackSide
      style={{ 
          backgroundColor: '#000',
          color: '#fff',
          }}>
            <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Flip!</button>
        Answer
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

    <Button floated='middle' icon labelPosition='right'>
     Save to Foucs Deck
     <Icon name='star outline' />
    </Button>

    <Button icon inverted color='red'>
       <Icon name='thumbs down' />
      </Button>

    <Button floated='right' icon labelPosition='right'>
      Next
      <Icon name='right arrow' />
    </Button>
  </>
</>

)}}

export default Card;