import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';

import * as actions from '../actions';
import { apiCall } from '../api/api';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

const mockStore = configureMockStore([thunkMiddleware]);

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then((data) =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error,
      })
    );
};

describe('actions', () => {
  describe('setSearchField', () => {
    it('should create an action to search robots', () => {
      const text = 'wooo';
      const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text,
      };

      expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
  });

  describe('requestRobots', () => {
    it('handles requesting robots API', () => {
      const store = mockStore();
      store.dispatch(actions.requestRobots());
      const action = store.getActions();

      const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });
});
