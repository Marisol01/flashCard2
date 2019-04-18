import React, { Fragment, Component} from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Card from './components/Card';
<<<<<<< HEAD

import Decks from './components/Decks';
import ShowDeck from './components/ShowDeck'

=======
>>>>>>> corrected conflicts again
import DeckFocus from './components/DeckFocus';
import Decks from './components/Decks';
import ShowDeck from './components/ShowDeck'


const App = () => (

<div>
 <Navbar />
 <FetchUser>
   <Container>
     <Switch>
       <ProtectedRoute exact path="/" component={Home} />
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/card" component={Card} />
       <Route exect path= "/Decks" component={Decks} />
       <Route exact path= "/Decks/:id" component={ShowDeck} />
       <Route exact path= "/Card/:id" component={Card} />
       <Route component={NoMatch} />
     </Switch>
   </Container>
 </FetchUser>
</div>
 
)


export default App;