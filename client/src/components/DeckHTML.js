import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CsvParse from '@vtex/react-csv-parse';
import {Header} from 'semantic-ui-react';
import Card from './Card';
import cards from 'semantic-ui-react';
      

class DeckHTML extends Component {
    state = {
      deck: [
        ]
    };
  
    handleData = data => {
      this.setState({ cards: data })
 
    }
    //Links to ShowDeck from react-dom
    renderDeck = () => {
        const { deck, } = this.state;
        //return deck.map( deck => {
        return (
            <div>
            <Link to={{
                pathname:`/card`, //api flow for this?
                state: {
                Deck: true
            }
            }}>{deck.name}</Link>
        </div>
            //<Link to={`/Decks/${deck.id}`} key={deck.id}>{deck.name}</Link>
        )
        };
    };
    
    state = { cards: [], };

    render(); {
    const keys = [
        "FrontSide",
        "BackSide",
    ]
    const  {cards,} = this.state;
    
      return (  
          <div>
            <Header>HTML</Header>
            <CsvParse
                keys={keys}
                onDataUploaded={this.handleData}
                render={onChange => <input type="file" onChange={onChange} />}
            />
            <ul>
                { this.renderDeck() }
            </ul>
        </div>
      )
    
    //    (
    //      <>
    //  <div class="ui cards"><div class="ui card"><div class="content"><div class="header">HTML Deck</div><div class="description">Foundationl language to create basic websites, akin to the websites that came out in the 90's.</div></div>;
    //      <Card />
    //      </>
    //    )
    }
}

export default DeckHTML;

//decks: [
        // { id: 1, name: "Ruby", complete: true, },
        // { id: 2, name: "React", complete: true, },
        // { id: 3, name: "HTML", complete: true, },
        // { id: 4, name: "CSS", complete: true, },
        // { id: 5, name: "Focus Deck", complete: true, },
      //]