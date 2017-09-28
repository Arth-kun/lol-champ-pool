/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_CHAMPS = 'boilerplate/AddChampPage/LOAD_CHAMPS';
export const LOAD_CHAMPS_SUCCESS = 'boilerplate/AddChampPage/LOAD_CHAMPS_SUCCESS';
export const LOAD_CHAMPS_ERROR = 'boilerplate/AddChampPage/LOAD_CHAMPS_ERROR';

export const LOAD_CHAMP_DETAILS = 'boilerplate/AddChampPage/LOAD_CHAMP_DETAILS';
export const LOAD_CHAMP_DETAILS_SUCCESS = 'boilerplate/AddChampPage/LOAD_CHAMP_DETAILS_SUCCESS';
export const LOAD_CHAMP_DETAILS_ERROR = 'boilerplate/AddChampPage/LOAD_CHAMP_DETAILS_ERROR';

export const CHANGE_CHAMP_ID = 'boilerplate/AddChampPage/CHANGE_CHAMP_ID';
