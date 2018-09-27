import { fromJS } from 'immutable';
import noteListReducer from '../reducer';

describe('noteListReducer', () => {
  it('returns the initial state', () => {
    expect(noteListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
