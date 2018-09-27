/**
 *
 * NoteList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNoteList from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class NoteList extends React.Component {
  render() {
    return (
      <div>
        Here are all your notes
      </div>
    );
  }
}

NoteList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notelist: makeSelectNoteList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'noteList', reducer });
const withSaga = injectSaga({ key: 'noteList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NoteList);
