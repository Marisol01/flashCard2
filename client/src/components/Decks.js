import React, { Component } from 'react';
import { Container, Grid } from 'react';
import { connect } from 'react';
import Card from './Card';
import Button from 'react';
import ShowDeck from './ShowDeck';
import CreateDeck from './CreateDeck';
import {Link} from 'react-router-dom';
import CsvParse from '@vtex/react-csv-parse';


// const Decks = (props) => (
//   <div>
//     <h2>{props.name}</h2>
//     <ul>
//       { props.items.map( item => <li key={item.id}>{item.name}</li>) }
//     </ul>
//   </div>
// );

// const Deck = ({ items, name }) => (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         { items.map( item => <li key={item.id}>{item.name}</li>) }
//       </ul>
//     </div>
//    )

    class Decks extends Component {
      
      constructor (props){
        super(props);
        this.state = {
          cards: []
        };
      }

        // state = {
        //   decks: [
        //     { id: 1, name: "Ruby", complete: true, },
        //     { id: 2, name: "React", complete: true, },
        //     { id: 3, name: "HTML", complete: true, },
        //     { id: 4, name: "CSS", complete: true, },
        //     { id: 5, name: "Focus Deck", complete: true, },
        //   ]
        // };
      
        handleData = data => {
          this.setState({ cards: data })
     
        }
        //Links to ShowDeck from react-dom
      renderDeck = () => {
        const { decks, } = this.state;
        return decks.map( deck => {
          return (
            <div>
              <Link to={{
                pathname:`/card`, //api flow for this?
                state: {
                  Decks: true
              }
            }}>{deck.name}</Link>
          </div>
            //<Link to={`/Decks/${deck.id}`} key={deck.id}>{deck.name}</Link>
          )
        })
      };
      
        render() {
          const keys = [
            "FrontSide",
            "BackSide",
          ]
          return (
            <>
            <CsvParse
             keys={keys}
             onDataUploaded={this.handleData}
             render={onChange => <input type="file" onChange={onChange} />}
          
           />
            <div>
              <ul>
                { this.renderDeck() }
              </ul>
            </div>
            </>
          )
        }
      }

    

export default Decks;

