import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import FormInput from '../FormInput/FormInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  fetchExistingReservations() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }));
  }

  componentDidMount() {
    this.fetchExistingReservations();
  }

  fetchWithPost = dataFromFormInput => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataFromFormInput)
    })
      .then(response => response.json())
      .then(data =>
        this.setState({ reservations: [...this.state.reservations, data] })
      )
      .catch(error => console.log(error));
  };

  // ! deprecated with the use of fetchWithPost function above
  // Todo: write new test
  addReservation = newReservation => {
    this.setState({
      reservations: [...this.state.reservations, newReservation]
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <FormInput addReservation={this.fetchWithPost} />
        <div className='resy-form'></div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
