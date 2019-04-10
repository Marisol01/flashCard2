import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const JS = () => (
  <Header as="h1" textAlign="center">
    JavaScript Flashcards
    <Link to="/"> Home</Link>
  </Header>
)

export default JS;