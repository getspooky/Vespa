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
import {MasterWrapper} from 'app/components/MasterWrapper';
import {Card} from 'app/components/Card';
import {GET_POSTS_ACTION} from './action';
import './index.scss';

function mapStateToProps(state) {
  return {
    STATE_GET_POSTS: state.POSTS_REDUCER.Posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_GET_POSTS: () => dispatch(GET_POSTS_ACTION()),
  };
}

class Posts extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      Posts: []
    };
    // bind event handlers in class components.
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  // The Component Lifecycle
  async componentDidMount() {
     await this.props.DISPATCH_GET_POSTS();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  /**
   * Handle Input Change.
   * @method
   * @name HandleInputChange
   * @param event
   * @returns {void}
   */
  HandleInputChange(event) {}

  /**
   * Submit Data into redux.
   * @method
   * @name HandleSubmit
   * @param event
   * @returns {void}
   */
  HandleSubmit(event) {

  }

  render() {
    return (
      <MasterWrapper>
        <h1 className="page-title">
          Posts
        </h1>
        <Card data={this.props.STATE_GET_POSTS} />
      </MasterWrapper>
    )
  }

}

Posts.propTypes = {
  STATE_GET_POSTS: PropTypes.array.isRequired,
  DISPATCH_GET_POSTS: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
