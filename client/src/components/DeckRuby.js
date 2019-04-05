import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const Ruby = () => (
  <Header as="h1" textAlign="center">
    Ruby Flashcards
    <Link to="/"> Home</Link>
  </Header>
)

export default Ruby;