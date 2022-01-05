import React from 'react';
import { shallow } from 'enzyme';

import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    },
  ];

  const wrapper = shallow(<CardList robots={mockRobots} />);

  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
