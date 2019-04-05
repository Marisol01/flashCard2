import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const CSS = () => (
  <Header as="h1" textAlign="center">
    CSS Flashcards
    <Link to="/"> Home</Link>
  </Header>
)

export default CSS;