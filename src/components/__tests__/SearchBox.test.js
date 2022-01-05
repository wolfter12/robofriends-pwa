import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../SearchBox';

it('expect to render SearchBox component', () => {
  const wrapper = shallow(<SearchBox />);

  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
