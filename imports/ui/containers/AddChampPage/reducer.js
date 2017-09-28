/*
 * ChampSelect reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_CHAMPS,
  LOAD_CHAMPS_SUCCESS,
  LOAD_CHAMPS_ERROR,
  LOAD_CHAMP_DETAILS,
  LOAD_CHAMP_DETAILS_SUCCESS,
  LOAD_CHAMP_DETAILS_ERROR,
  CHANGE_CHAMP_ID,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  champsList: {},
  champ: {},
  champId: 1,
});

function createReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHAMPS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('champsList', {});
    case LOAD_CHAMPS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('champsList', action.champsList);
    case LOAD_CHAMPS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('champsList', {});
    case LOAD_CHAMP_DETAILS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('champ', {});
    case LOAD_CHAMP_DETAILS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('champ', action.champ);
    case LOAD_CHAMP_DETAILS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('champ', {});
    case CHANGE_CHAMP_ID:
      return state
        .set('champId', action.champId);
    default:
      return state;
  }
}

export default createReducer;
