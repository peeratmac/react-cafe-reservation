import React from 'react';
import ReactDOM from 'react-dom';
import ReservationsContainer from './ReservationsContainer';
import { shallow } from 'enzyme';

describe('RESERVATIONS CONTAINER', () => {
  let wrapper, reservations;
  beforeEach(() => {
    reservations = [
      {
        name: 'Peerat',
        date: '12/25',
        time: '8:00',
        number: '555'
      }
    ];
    wrapper = shallow(<ReservationsContainer reservations={reservations} />);
  });

  it('should match ReservationsContainer Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
