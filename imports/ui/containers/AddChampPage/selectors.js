/**
 * ChampSelect selectors
 */

import { createSelector } from 'reselect';

const selectAddChampPage = (state) => state.get('addChamp');

const makeSelectChampId = () => createSelector(
  selectAddChampPage,
  (addChampState) => addChampState.get('champId')
);

const makeSelectChampsList = () => createSelector(
  selectAddChampPage,
  (addChampState) => addChampState.get('champsList')
);

const makeSelectChamp = () => createSelector(
  selectAddChampPage,
  (addChampState) => addChampState.get('champ')
);

const makeSelectLoading = () => createSelector(
  selectAddChampPage,
  (addChampState) => addChampState.get('loading')
);

const makeSelectError = () => createSelector(
  selectAddChampPage,
  (addChampState) => addChampState.get('error')
);

export {
  selectAddChampPage,
  makeSelectChampId,
  makeSelectChampsList,
  makeSelectChamp,
  makeSelectLoading,
  makeSelectError
};
