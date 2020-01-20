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
import {Link} from 'react-router-dom';
import AlertDialog from 'sweetalert2';
import {connect} from 'react-redux';
import {MasterWrapper} from 'app/components/MasterWrapper';
import {GET_USERS_ACTION,DELETE_USERS_ACTION} from './action';
import './index.scss';

function mapStateToProps(state) {
  return {
    STATE_GET_USERS: state.USERS_REDUCER.Users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_GET_USERS: () => dispatch(GET_USERS_ACTION()),
    DISPATCH_DELETE_USERS: (id) => dispatch(DELETE_USERS_ACTION(id))
  };
}

class Users extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {};
    // bind event handlers in class components.
    this.HandleDeleteUser = this.HandleDeleteUser.bind(this);
  }

  // The Component Lifecycle
  async componentDidMount() {
    await this.props.DISPATCH_GET_USERS();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}


  /**
   * Submit deleted data into redux.
   * @method
   * @name HandleSubmit
   * @param id
   * @returns {void}
   */
  HandleDeleteUser(id) {
    return e => this.props.DISPATCH_DELETE_USERS(id)
      .then(()=> AlertDialog.fire(
        'Deleted!',
        'The User has been deleted',
        'success'
      ));
  }

  render() {
    return (
      <MasterWrapper>
        <h1 className="page-title">
          Users
        </h1>
        <div className="row row-cards row-deck">
          <div className="col-12">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                  <thead>
                  <tr>
                    <th className="text-center">id</th>
                    <th className="text-center w-1">
                      <i className="icon-people" />
                    </th>
                    <th>User</th>
                    <th className="text-center">email</th>
                    <th>Usage</th>
                    <th className="text-center">Payment</th>
                    <th>Activity</th>
                    <th className="text-center">
                      <i className="icon-settings" />
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.STATE_GET_USERS.map(({id,avatar,username,email,email_verified,usage,activity,created_at})=>(
                      <tr key={id}>
                        <td>
                          <div className="small text-center text-muted">
                            {id}
                          </div>
                        </td>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style={{
                              backgroundImage: `url(${avatar})`
                            }}
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>{username}</div>
                          <div className="small text-muted">
                            Registered: {created_at}
                          </div>
                        </td>
                        <td>
                          <div className="small text-muted">
                            {email}
                          </div>
                          <span className={`badge ${email_verified ? 'badge-success' : 'badge-danger'}`}>
                            Verified
                          </span>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>{usage.progress}%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                {usage.range}
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-yellow"
                              role="progressbar"
                              style={{ width: `${usage.progress}%` }}
                              aria-valuenow={42}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-visa" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>{activity}</div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <button className="btn btn-danger"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                            >
                              <i className="fa fa-navicon" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-right"
                              style={{
                                position: "absolute",
                                transform: "translate3d(0px, 20px, 0px)",
                                top: "0px",
                                left: "0px",
                                willChange: "transform"
                              }}
                            >
                              <Link to={`/profile/${id}`}
                                className="dropdown-item"
                              >
                                Show
                              </Link>
                              <a onClick={this.HandleDeleteUser(id)}
                                className="dropdown-item"
                              >
                               Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </MasterWrapper>
    )
  }

}

Users.propTypes = {
  STATE_GET_USERS: PropTypes.array.isRequired,
  DISPATCH_GET_USERS: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
