/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Chart} from 'app/components/Chart';
import {withNamespaces} from 'react-i18next';
import {MasterWrapper} from 'app/components/MasterWrapper';
import {HTTP_REQUEST_DASHBOARD} from './service';
import './index.scss';

class Dashboard extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  // The Component Lifecycle
  async componentDidMount() {
    this.setState({
      ...await HTTP_REQUEST_DASHBOARD()
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    const {t:lang} = this.props;
    return (
      <MasterWrapper>
        <h1 className="page-title">
          {lang('Dashboard.page.title')}
        </h1>
        { Object.getOwnPropertyNames(this.state).length !== 0
          ?
          (<Fragment>
            <div className="row row-cards">
              <div className="col-sm-6 col-lg-3">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-blue mr-3">
                      <i className="fa fa-users" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        132 <small>Users</small>
                      </h4>
                      <small className="text-muted">12 registered last week</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-green mr-3">
                      <i className="fa fa-users" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        132 <small>Sales</small>
                      </h4>
                      <small className="text-muted">12 waiting payments</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-red mr-3">
                      <i className="fa fa-users" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        132 <small>Sales</small>
                      </h4>
                      <small className="text-muted">12 waiting payments</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-yellow mr-3">
                      <i className="fa fa-users" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        132 <small>Sales</small>
                      </h4>
                      <small className="text-muted">12 waiting payments</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cards row-deck py-5">
              <div className="col-sm-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">{lang('Dashboard.page.browser.title')}</h4>
                  </div>
                  <table className="table card-table">
                    <tbody>
                    <tr>
                      <td width={1}>
                        <i className="fa fa-chrome text-muted" />
                      </td>
                      <td>Google Chrome</td>
                      <td className="text-right">
                        <span className="text-muted">{this.state.browsers['Google Chrome']}%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-firefox text-muted" />
                      </td>
                      <td>Mozila Firefox</td>
                      <td className="text-right">
                        <span className="text-muted">{this.state.browsers['Mozila Firefox']}%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-safari text-muted" />
                      </td>
                      <td>Apple Safari</td>
                      <td className="text-right">
                        <span className="text-muted">{this.state.browsers['Apple Safari']}%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-internet-explorer text-muted" />
                      </td>
                      <td>Internet Explorer</td>
                      <td className="text-right">
                        <span className="text-muted">{this.state.browsers['Internet Explorer']}%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-opera text-muted" />
                      </td>
                      <td>Opera mini</td>
                      <td className="text-right">
                        <span className="text-muted">{this.state.browsers['Opera mini']}%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-edge text-muted" />
                      </td>
                      <td>Microsoft edge</td>
                      <td className="text-right">
                        <span className="text-muted">{this.state.browsers['Microsoft edge']}%</span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-10 col-lg-8">
                <Chart title={lang('Dashboard.page.activity.title')} data={[
                  {
                    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
                  },
                  {
                    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
                  },
                  {
                    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
                  },
                  {
                    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
                  },
                  {
                    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
                  },
                  {
                    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
                  },
                  {
                    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
                  },
                ]} />
              </div>
            </div>
          </Fragment>)
          :
          null
        }
      </MasterWrapper>
    )
  }

}

Dashboard.propTypes = {
  t: PropTypes.func.isRequired
};

export default (withNamespaces()(Dashboard));
