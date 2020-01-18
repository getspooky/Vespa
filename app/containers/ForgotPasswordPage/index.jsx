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
import {AuthWrapper} from 'app/components/AuthWrapper';
import {HTTP_REQUEST_FORGOT_PASSWORD} from './service';
import SimpleReactValidator from 'simple-react-validator';
import './index.scss';

class ForgotPassword extends Component {

  /*
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {email:''};
    this.validator = new SimpleReactValidator();
    // bind event handlers in class components.
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  // The Component Lifecycle
  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {}

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
   * @method
   * @name HandleSubmit
   * @param event
   * @returns {void}
   */
  async HandleSubmit(event) {
    if (this.validator.allValid()) {
      await HTTP_REQUEST_FORGOT_PASSWORD(this.state);
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  render() {
    return (
      <AuthWrapper title="Reset Password" links={[
        { href: '/register' , label: 'Sign Up'},
        { href: '/login', label: 'Sign In'},
        { href: '/', label: 'Need Help?'}
      ]}>
        <div className="alert alert-success">
          Enter your email address and your password will be reset and emailed to you.
        </div>
        <form>
          {this.validator.message('email', this.state.email, 'required|email')}
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.HandleInputChange} />
              <span className="icon is-medium is-left">
                <i className="fa fa-lock" />
              </span>
            </div>
          </div>
          <button type="button" className="button is-block is-info is-large is-fullwidth" onClick={this.HandleSubmit}>
            Submit
            <i className="fa fa-sign-in" aria-hidden="true" />
          </button>
        </form>
      </AuthWrapper>
    )
  }

}

export default ForgotPassword;
