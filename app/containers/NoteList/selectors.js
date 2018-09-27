import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the noteList state domain
 */

const selectNoteListDomain = state => state.get('noteList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NoteList
 */

const makeSelectNoteList = () =>
  createSelector(selectNoteListDomain, substate => substate.toJS());

export default makeSelectNoteList;
export { selectNoteListDomain };
