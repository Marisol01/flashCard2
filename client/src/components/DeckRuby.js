import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {  Button, Icon } from 'semantic-ui-react';




class DeckRuby extends Component {
   state = { cards: [] };

   handleData = data => {
     this.setState({ cards: data })

   }

   render() {
     const keys = [
       "FrontSide",
       "BackSide",
     ]
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


     <h1 align="center">The ability to call any method on different objects, as long as those objects implement that method, without regard to the actual class of the object.</h1>

   </FrontSide>
   <BackSide
     style={{
         backgroundColor: '#000',
         color: '#fff',
         }}>
           <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Flip!</button>


         <h1 align="center"><pre>{`Polymorphism`}</pre></h1>
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

   <Button icon labelPosition='right'>
     Next
     <Icon name='right arrow' />
   </Button>
 </>
</>

)}}

export default DeckRuby;