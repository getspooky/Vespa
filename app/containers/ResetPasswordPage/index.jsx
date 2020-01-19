/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, {Component} from 'react';
import {AuthWrapper} from 'app/components/AuthWrapper';
import {withNamespaces} from 'react-i18next';
import {HTTP_REQUEST_RESET_PASSWORD} from './service';
import SimpleReactValidator from 'simple-react-validator';
import './index.scss';

class ResetPassword extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {password: '', confirm_password: '', token: null,};
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
      token: this.props.match.params.token
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
      await HTTP_REQUEST_RESET_PASSWORD(this.state);
      localStorage.removeItem('_token');
      this.props.history.push('/login');
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  render() {
    const {t:lang} = this.props;
    return (
      <AuthWrapper title={lang('ResetPassword.header.title')} links={[
        { href: '/register' , label: lang('Auth.form.footer.sign_up.label')},
        { href: '/login', label: lang('Auth.form.footer.sign_in.label')},
        { href: '/', label: lang('Auth.form.footer.need_help.label')}
      ]}>
        <form>
          {this.validator.message('old password', this.state.password, 'required|min:08|max:120')}
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="password" name="password" value={this.state.password} placeholder={lang('ResetPassword.input.old_password')} onChange={this.HandleInputChange} />
              <span className="icon is-medium is-left">
                <i className="fa fa-lock" />
              </span>
            </div>
          </div>
          {this.validator.message('new password', this.state.confirm_password, 'required|min:08|max:120')}
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="password" name="confirm_password" value={this.state.password} placeholder={lang('ResetPassword.input.new_password')} onChange={this.HandleInputChange} />
              <span className="icon is-medium is-left">
                <i className="fa fa-lock" />
              </span>
            </div>
          </div>
          <button type="button" className="button is-block is-info is-large is-fullwidth" onClick={this.HandleSubmit}>
            {lang('ResetPassword.button.submit')}
            <i className="fa fa-sign-in" aria-hidden="true" />
          </button>
        </form>
      </AuthWrapper>
    )
  }

}

ResetPassword.propTypes = {};

export default withNamespaces()(ResetPassword);
