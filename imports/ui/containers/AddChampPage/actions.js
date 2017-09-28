/*
 * AddChampPage Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CHAMPS,
  LOAD_CHAMPS_SUCCESS,
  LOAD_CHAMPS_ERROR,
  LOAD_CHAMP_DETAILS,
  LOAD_CHAMP_DETAILS_SUCCESS,
  LOAD_CHAMP_DETAILS_ERROR,
  CHANGE_CHAMP_ID,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function loadChamps() {
   return {
     type: LOAD_CHAMPS,
   }
}

export function champsListLoaded(champsList) {
 return {
   type: LOAD_CHAMPS_SUCCESS,
   champsList,
 }
}

export function champsListLoadError(error) {
 return {
   type: LOAD_CHAMPS_ERROR,
   error,
 }
}

export function loadChampDetails(id) {
  return {
    type: LOAD_CHAMP_DETAILS,
    id,
  }
}

export function champDetailsLoaded(champ) {
  return {
    type: LOAD_CHAMP_DETAILS_SUCCESS,
    champ,
  }
}

export function champDetailsLoadError(error) {
  return {
    type: LOAD_CHAMP_DETAILS_ERROR,
    error,
  }
}

export function changeChampId(champId) {
  return {
    type: CHANGE_CHAMP_ID,
    champId,
  }
}
