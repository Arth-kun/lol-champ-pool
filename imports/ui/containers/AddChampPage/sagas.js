import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_CHAMPS, LOAD_CHAMP_DETAILS } from './constants';
import { champsListLoaded, champsListLoadError, champDetailsLoaded, champDetailsLoadError } from './actions';

import request from '../../utils/request';
import { makeSelectChampId } from './selectors';
import { apiKey, lolChampApiUrl } from '../../utils/settings';


export function* getChamps() {
  const requestURL = `${lolChampApiUrl}?locale=en_US&dataById=true&api_key=${apiKey}`;

  try {
    // Call our request helper (see 'utils/request')
    const champsList = yield call(request, requestURL);
    yield put(champsListLoaded(champsList));
  } catch (err) {
    yield put(champsListLoadError(err));
  }
}

export function* getChampDetails() {
  // Select username from store
  const champId = yield select(makeSelectChampId());
  const requestURL = `${lolChampApiUrl}/${champId}?locale=en_US&tags=image&api_key=${apiKey}`;

  try {
    // Call our request helper (see 'utils/request')
    const champ = yield call(request, requestURL);
    yield put(champDetailsLoaded(champ));
  } catch (err) {
    yield put(champDetailsLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* champData() {
  // Watches for LOAD_CHAMPS and LOAD_CHAMP_DETAILS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcherChamps = yield takeLatest(LOAD_CHAMPS, getChamps);
  const watcherChamp = yield takeLatest(LOAD_CHAMP_DETAILS, getChampDetails);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcherChamps);
  yield cancel(watcherChamp);
}

// Bootstrap sagas
export default [
  champData,
];
