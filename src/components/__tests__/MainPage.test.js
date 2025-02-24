import React from 'react';
import { shallow } from 'enzyme';

import MainPage from '../MainPage';

let wrapper;

describe('MainPage component', () => {
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false,
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('renders MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    expect(wrapper.instance().filteredRobots()).toEqual([]);
  });

  it('filters robots correctly 2', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'john@gmail.com',
        },
      ],
      searchField: 'John',
      isPending: false,
    };

    const wrapper2 = shallow(<MainPage {...mockProps2} />);

    expect(wrapper2.instance().filteredRobots()).toEqual([
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ]);
  });

  it('filters robots correctly 3', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'john@gmail.com',
        },
      ],
      searchField: 'a',
      isPending: false,
    };

    const filteredRobots = [];

    const wrapper3 = shallow(<MainPage {...mockProps3} />);

    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
  });
});
