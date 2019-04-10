import React, { Component } from 'react';
import axios from 'axios';
import Decks from './Decks';
import ShowDeck from './ShowDeck';
      //CreateDeck
class CreateDeck extends Component {
            //{Deck: []}
  state = { Deck: [] }


  componentDidMount() {
    // grab post from db decks
    axios.get('/api/decks')
      .then( res => {    //decks
        this.setState({ decks: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayDeck = () => {
    // editPost={this.editPost} add   return this.state.decks.map( d => <Deck key= {d.id} {...d} />)
    return this.state.decks.map( d => <Decks key={d.id} {...d} />)
  }
  //addDeck = (Deck) {}
  addDeck = (deck) => {
    axios.post('/api/decks',  deck )
      .then( res => {
        const { decks } = this.state
        this.setState({ departments: [...decks, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }
    //editDeck = (deck)
  editDeck = (deck) => {
    axios.put(`/api/decks/${deck.id}`, { deck })
      .then( res => {
        const decks = this.state.decks.map( p => {
          if (p.id === deck.id)
            return res.data
          return p
        })
        this.setState({ decks })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {


    return(
      <div>
      <h1>Your Decks</h1>
        { this.displayDeck() }
        <ShowDeck addDepartment={this.addDepartment} editDepartment={this.editDepartment} />
    </div>

    )
  }
}

<<<<<<< HEAD
export default CreateDeck;
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  createDeckContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 300,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    lineHeight: 50,
    textAlign:'center',
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    height: 50,
  },
})

export default connect()(CreateDeck)
>>>>>>> deck added
