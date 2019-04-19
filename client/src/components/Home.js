import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Card, Image } from 'semantic-ui-react';
import code from './imgs/code.png';

const Home = () => (

  <>
  <Header as="h3" textAlign="center">Flash Cards
   <Link to="/card">Go to Cards</Link>
  </Header>
  
    <Card>
      <Image src={code}/>
    <Card.Content>
      <Card.Header>Focus Deck</Card.Header>
      <Card.Description>This Deck is for your cards to focus on.</Card.Description>
    </Card.Content>

    <Link to="/deckfocus">View your Focus deck</Link>

    </Card>
    </>
    )
  



export default Home;