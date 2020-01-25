import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {
    STATE_GET_AUTH: state.AUTH_REDUCER.Auth,
  };
}

/**
 * Protect private routes for unauthorized access.
 *
 * @export
 * @function
 * @name PrivateRoute
 * @param component
 * @param rest
 * @returns {*}
 */
function PrivateRoute({ component: Component, ...rest }) {
  const { STATE_GET_AUTH } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        STATE_GET_AUTH.token !== null && STATE_GET_AUTH.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, {})(withRouter(PrivateRoute));
