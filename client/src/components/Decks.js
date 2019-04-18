import React, { Component } from 'react';
import { Container, Grid } from 'react';
import { connect } from 'react';
import Card from './Card';
import Button from 'react';
import ShowDeck from './ShowDeck';
import CreateDeck from './CreateDeck';
import {Link} from 'react-router-dom';

// class Deck extends React.Component {
//     state = {
//     Ruby:[front:'', back: ''],
//     React:[front:'', back: ''],
//     HTML:[front:'', back: ''],
//     CSS:[front:'', back: ''],
//     Focus_Deck:[]
//     }

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
        state = {
          decks: [
            { id: 1, name: "Ruby", complete: true, },
            { id: 2, name: "React", complete: true, },
            { id: 3, name: "HTML", complete: true, },
            { id: 4, name: "CSS", complete: true, },
            { id: 5, name: "Focus Deck", complete: true, },
          ]
        };
      

        //Links to ShowDeck from react-dom
      renderDeck = () => {
        const { decks, } = this.state;
        return decks.map( deck => {
          return (
            <Link to={{
              pathname:`/ShowDeck`,
              state: {
                Decks: true
            }
          }}>Ruby
          React
          HTML
          CSS
          Focus Deck</Link>

            //<Link to={`/Decks/${deck.id}`} key={deck.id}>{deck.name}</Link>
          )
        })
      };
      
        render() {
          return (
            <div>
              <ul>
                { this.renderDeck() }
              </ul>
            </div>
          )
        }
      }


        
            //1. get state established....reference first React todo lecture where Henry hard coded todos default states
            //2. get decks to render
            //3. map function after getting decks to render (mapping is done in render)


    // render() {
    //     const { name } = this.props
    //       return(
    //         <>
    //         <Grid>
    //         <Grid.Column>
    //         <Card>
    //           <Image src='https://seoexpertbrad.com/wp-content/uploads/2018/01/Fake-Amazon-Reviews.jpg' />
    //         <Card.Content>{name}</Card.Content>
    //         </Card>
    //         </Grid.Column>
    //         </Grid>
    //         </>
    //     )
    //   }
    // }
  
//     render() {
//       const {name} = this.props
  
//       return(
//           <div>kjgfjg</div>
//       )
//     }
// }

<<<<<<< HEAD
export default Decks;
=======
export default Decks;
>>>>>>> master
