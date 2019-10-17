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

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Guest Name'
          name='guestName'
          value={this.state.guestName}
          onChange={} />

          <input
          type='text'
          placeholder='Date X/XX or XX/XX'
          name='date'
          value={this.state.date}
          onChange={} />

          <input
          type='text'
          placeholder='Time X:XX am/pm'
          name='time'
          value={this.state.time}
          onChange={} />

          <input
          type='text'
          placeholder='Number of Guests'
          name='numberOfGuests'
          value={this.state.numberOfGuests}
          onChange={} />
      </form>
    );
  }
}

export default FormInput;
