import React from 'react';
import { shallow } from 'enzyme';

import Scroll from './Scroll';

it('expect to render Scroll component', () => {
  const wrapper = shallow(<Scroll />);

  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
