import React from 'react';
import FormInput from './FormInput';
import { shallow } from 'enzyme';

describe('FORMINPUT', () => {
  let wrapper;
  const mockAddReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FormInput addReservation={mockAddReservation} />);
  });

  it('should match FormInput Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
