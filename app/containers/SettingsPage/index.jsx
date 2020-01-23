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
import AlertDialog from 'sweetalert2';
import {connect} from 'react-redux';
import {MasterWrapper} from 'app/components/MasterWrapper';
import {GET_AUTH_USER_ACTION,UPDATE_SETTINGS_AUTH_USER_ACTION} from 'app/shared/auth.action';
import Countries from 'app/data/Countries.json';

function mapStateToProps(state) {
  return {
    STATE_GET_SETTINGS : state.SETTINGS_REDUCER.Settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_GET_AUTH_USER: () => dispatch(GET_AUTH_USER_ACTION()),
    DISPATCH_UPDATE_SETTINGS: (payload) => dispatch(UPDATE_SETTINGS_AUTH_USER_ACTION(payload)),
  };
}

class Settings extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = { avatar: '', username: '', email: '', first_name: '', last_name: '', address: '', city: '', postal_code: '', country: '', bio: '' };
    // bind event handlers in class components.
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleUpdateSettings = this.HandleUpdateSettings.bind(this);
  }

  // The Component Lifecycle
  async componentDidMount() {
    await this.props.DISPATCH_GET_AUTH_USER();
  }

  async UNSAFE_componentWillReceiveProps(nextProps) {
     this.setState({
       ... await nextProps.STATE_GET_SETTINGS
     });
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
      ...this.state,
      [event.target.name]:event.target.value,
    });
  }

  /**
   * Submit updated Data into redux.
   * @method
   * @name HandleUpdateSettings
   * @param event
   * @returns {void}
   */
   HandleUpdateSettings(event) {
    this.props.DISPATCH_UPDATE_SETTINGS(this.state).then(()=>{
      AlertDialog.fire(
        'Good job!',
        'Your Profile is updated successfully',
        'success'
      );
    });
   }

  render() {
    const {
      avatar,
      username,
      email,
      first_name,
      last_name,
      address,
      city,
      postal_code,
      country,
      bio
    } = this.state;

    return (
      <MasterWrapper>
        <h1 className="page-title">
          Settings
        </h1>
        <form className="card">
          <div className="card-body">
            <h3 className="card-title">Edit Profile</h3>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label className="form-label">Avatar URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="avatar"
                    placeholder={avatar}
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder={username}
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder={email}
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={this.HandleInputChange}
                    placeholder={first_name}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    onChange={this.HandleInputChange}
                    placeholder={last_name}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={this.HandleInputChange}
                    placeholder={address}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    onChange={this.HandleInputChange}
                    placeholder={city}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label className="form-label">Postal Code</label>
                  <input
                    type="number"
                    className="form-control"
                    name="postal_code"
                    onChange={this.HandleInputChange}
                    placeholder={postal_code}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select className="form-control custom-select" name="country" onChange={this.HandleInputChange}
                  >
                    {Countries.map(c=>(
                      <option key={c} defaultValue={c === country} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <label className="form-label">About Me</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    name="bio"
                    onChange={this.HandleInputChange}
                    placeholder={bio}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button type="button" onClick={this.HandleUpdateSettings} className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </form>
      </MasterWrapper>
    )
  }

}

Settings.propTypes = {
  STATE_GET_SETTINGS: PropTypes.any.isRequired,
  DISPATCH_UPDATE_SETTINGS: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
