import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from '../CounterButton';

describe('CounterButton component', () => {
  it('renders CounterButton component', () => {
    const mockColor = 'red';

    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    const mockColor = 'red';

    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
  });
});
