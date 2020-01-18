/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthWrapper} from 'app/components/AuthWrapper/index';
import { LOGIN_ACTION } from './action';
import SimpleReactValidator from 'simple-react-validator';
import './index.scss';

function mapStateToProps(state) {
  return {
    STATE_GET_AUTH: state.AUTH_REDUCER.Auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_AUTHENTICATE_USER: (payload) => dispatch(LOGIN_ACTION(payload)),
  };
}

class Login extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};
    this.validator = new SimpleReactValidator();
    // bind event handlers in class components.
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  // The Component Lifecycle
  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { isAuthenticated, token } = nextProps.STATE_GET_AUTH;
    if (isAuthenticated && token !== null) {
      localStorage.setItem('_token', token);
      this.props.history.push('/profile/1');
    }
  }

  /**
   * Handle Input Change.
   * @method
   * @name HandleInputChange
   * @param event
   * @returns {void}
   */
  HandleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * Submit Data into redux.
   * @async
   * @method
   * @name HandleSubmit
   * @param event
   * @returns {void}
   */
  async HandleSubmit(event) {
    if (this.validator.allValid())
      await this.props.DISPATCH_AUTHENTICATE_USER(this.state);
    else
      this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }

  render() {
    return (
      <AuthWrapper title="Login" links={[
        { href: '/register' , label: 'Sign Up'},
        { href: '/forgot/password', label: ' Forgot Password'},
        { href: '/', label: 'Need Help?'}
      ]}>
        <form>
          {this.validator.message('email', this.state.email, 'required|email')}
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="email" name="email" placeholder="Email" onChange={this.HandleInputChange} />
              <span className="icon is-medium is-left">
                <i className="fa fa-envelope" />
              </span>
            </div>
          </div>
          {this.validator.message('password', this.state.password, 'required|min:08|max:120')}
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="password" name="password" placeholder="Password" onChange={this.HandleInputChange} />
              <span className="icon is-medium is-left">
                <i className="fa fa-lock" />
              </span>
            </div>
          </div>

          <button type="button" className="button is-block is-info is-large is-fullwidth" onClick={this.HandleSubmit}>
            Login
            <i className="fa fa-sign-in" aria-hidden="true" />
          </button>
        </form>
      </AuthWrapper>
    )
  }

}

Login.propTypes = {
  STATE_GET_AUTH: PropTypes.object.isRequired,
  DISPATCH_AUTHENTICATE_USER: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
