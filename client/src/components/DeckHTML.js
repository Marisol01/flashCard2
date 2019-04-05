import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const HTML = () => (
  <Header as="h1" textAlign="center">
    HTML Flashcards
    <Link to="/"> Home</Link>
  </Header>
)

export default HTML;