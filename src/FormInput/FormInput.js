import React, { Component } from 'react';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      guestName: '',
      date: '',
      time: '',
      numberOfGuests: ''
    };
  }

  handleAddReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    };
    console.log(this.props);
    this.props.addReservation(newReservation);
  };

  clearInputs = () => {
    this.setState({ guestName: '', date: '', time: '', numberOfGuests: '' });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Guest Name'
          name='guestName'
          value={this.state.guestName}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Date X/XX or XX/XX'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Time X:XX am/pm'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Number of Guests'
          name='numberOfGuests'
          value={this.state.numberOfGuests}
          onChange={event => this.handleChange(event)}
        />
      </form>
    );
  }
}

export default FormInput;
