import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from '../CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';

  const wrapper = shallow(<CounterButton color={mockColor} />);

  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
