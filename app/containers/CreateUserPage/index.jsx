/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import AlertDialog from 'sweetalert2';
import {withNamespaces} from 'react-i18next';
import {MasterWrapper} from 'app/components/MasterWrapper';
import {HTTP_REQUEST_REGISTER} from 'app/shared/auth.service';
import Countries from 'app/data/Countries.json';
import './index.scss';

class CreateUser extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = { avatar: '', username: '', email: '', first_name: '', last_name: '', address: '', city: '', postal_code: '', country: '', bio: '' };
    this.validator = new SimpleReactValidator();
    // bind event handlers in class components.
    this.HandleAddUser = this.HandleAddUser.bind(this);
    this.HandleInputChange = this.HandleInputChange.bind(this);
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
   * Create User.
   * @async
   * @method
   * @name HandleSubmit
   * @returns {void}
   */
  HandleAddUser() {
    if (this.validator.allValid())
      HTTP_REQUEST_REGISTER(this.state).then(()=>{
        AlertDialog.fire(
          'Good job!',
          `The User ${this.username} has been created successfully`,
          'success'
        );
      });
    else
      this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }


  render() {
    const {t:lang} = this.props;
    return (
      <MasterWrapper>
        <h1 className="page-title">
          Create User
        </h1>
        <form className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.avatar_url')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="avatar"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message('avatar', this.state.avatar, 'required')}
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.username')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message('username', this.state.username, 'required|min:10')}
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.email')}</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message('email', this.state.email, 'required|email')}
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.first_name')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message('first name', this.state.first_name, 'required')}
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.last_name')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message('last name', this.state.last_name, 'required')}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.address')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.city')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.postal_code')}</label>
                  <input
                    type="number"
                    className="form-control"
                    name="postal_code"
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <label className="form-label">{lang('CreateUserPage.label.country')}</label>
                  <select className="form-control custom-select" name="country" onChange={this.HandleInputChange}
                  >
                    {Countries.map(c=>(
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <label className="form-label">{lang('CreateUserPage.label.about_me')}</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    name="bio"
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button type="button" onClick={this.HandleAddUser} className="btn btn-primary">
              <i className="fa fa-user-plus" />
              Create User
            </button>
          </div>
        </form>
      </MasterWrapper>
    )
  }

}

export default (withNamespaces()(CreateUser));
