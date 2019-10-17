import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match App Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with a reservation when addReservation is called', () => {
    // Setup
    const mockReservation = {
      name: 'Joshua',
      date: '6/5',
      time: '12:00',
      number: 10
    };
    const expected = [mockReservation];

    // Expectation
    expect(wrapper.state('reservations')).toEqual([]);

    // Execution
    wrapper.instance().addReservation(mockReservation);

    // Expectaion
    expect(wrapper.state('reservations')).toEqual(expected);
  });
});
