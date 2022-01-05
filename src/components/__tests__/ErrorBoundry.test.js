import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundry from '../ErrorBoundry';

it('expect to render ErrorBoundry component', () => {
  const wrapper = shallow(<ErrorBoundry />);

  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
