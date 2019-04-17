import React, { Component } from 'react';
import { Form, } from "semantic-ui-react";


//tie into cards

class ShowDeck extends Component {
  state = { name: '' }

  //Axios call when Decks have cards
  componentDidMount() {
    
    if (this.props.id) {
      const { name, id } = this.props
      this.setState({ name, id })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.editDeck(this.state)
      this.props.toggleEdit()
    } else {
      // debugger
      this.props.addDeck(this.state)
    }
    this.setState({ name: '' })
  }

  render () {
    const { name } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder='Name'
            label='name'
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <Form.Button type="submit" color="green">Submit</Form.Button>
      </Form.Group>
    </Form>
    )
  }
}

export default ShowDeck;
