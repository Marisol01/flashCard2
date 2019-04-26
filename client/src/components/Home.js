import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Card, Image, Grid, GridColumn } from 'semantic-ui-react';
import code from './imgs/code.png';
import HTMLimg from './imgs/HTMLimg.png';
import CSSimg from './imgs/CSSimg.png';
import JSimg from './imgs/JSimg.png';
import Rubyimg from './imgs/Rubyimg.png';





const Home = () => (

  <>

  
  <Header as="h3" textAlign="center">

  </Header>

  <Grid columns={3} divided>
  <Grid.Row>
    <Grid.Column>
  
    
    </Grid.Column>


    
    <Grid.Column>
    <Card>
      <Image src={HTMLimg}/>
    <Card.Content>
      <Card.Header>HTML Deck</Card.Header>
      <Card.Description>This Deck is for studying HTML.</Card.Description>
    </Card.Content>

    <Link to="/deckhtml">View your HTML deck</Link>

    </Card>
    </Grid.Column>


    <Grid.Column>
    <Card>
      <Image src={JSimg}/>
    <Card.Content>
      <Card.Header>JavaScript Deck</Card.Header>
      <Card.Description>This Deck is for studying JavaScript.</Card.Description>
    </Card.Content>

    <Link to="/deckjavascript">View your JavaScript deck</Link>

    </Card>
    </Grid.Column>


  <Grid.Column>
    <Card>
      <Image src={Rubyimg}/>
    <Card.Content>
      <Card.Header>Ruby Deck</Card.Header>
      <Card.Description>This Deck is for studying Ruby.</Card.Description>
    </Card.Content>

    <Link to="/deckruby">View your Ruby deck</Link>

    </Card>
    </Grid.Column>

    <Grid.Column>
    <Card>
      <Image src={CSSimg}/>
    <Card.Content>
      <Card.Header>CSS Deck</Card.Header>
      <Card.Description>This Deck is for studying CSS.</Card.Description>
    </Card.Content>

    <Link to="/deckCSS">View your CSS deck</Link>

    </Card>
    </Grid.Column>


    <Grid.Column>
    <Card>
      <Image src={code}/>
    <Card.Content>
      <Card.Header>Focus Deck</Card.Header>
      <Card.Description>This Deck is for your cards to focus on.</Card.Description>
    </Card.Content>

    <Link to="/deckfocus">View your Focus deck</Link>

    </Card>


    </Grid.Column>
    </Grid.Row>
    </Grid>
    </>
    )


    
  



export default Home;