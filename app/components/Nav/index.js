/**
 *
 * Nav
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Nav() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/notes">
        <button>Notes</button>
      </Link>
    </div>
  );
}

Nav.propTypes = {};

export default Nav;
