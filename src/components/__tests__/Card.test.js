import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

it('expect to render Card component', () => {
  const wrapper = shallow(<Card />);

  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
