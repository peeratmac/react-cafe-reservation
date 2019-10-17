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

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'TravisRobbie' } };
    const expected = 'TravisRobbie';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });
});
