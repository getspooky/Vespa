/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import AlertDialog from 'sweetalert2';
import { withNamespaces } from 'react-i18next';
import { MasterWrapper } from 'app/components/MasterWrapper';
import { HTTP_REQUEST_CREATE_POST } from './service';
import './index.scss';

class CreatePost extends Component {
  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.validator = new SimpleReactValidator();
    // bind event handlers in class components.
    this.HandleAddPost = this.HandleAddPost.bind(this);
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
   * Create New Post.
   * @async
   * @method
   * @name HandleSubmit
   * @returns {void}
   */
  HandleAddPost() {
    if (this.validator.allValid())
      HTTP_REQUEST_CREATE_POST(this.state).then(() => {
        AlertDialog.fire(
          'Good job!',
          `Post has been created successfully`,
          'success',
        );
      });
    else this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }

  render() {
    const { t: lang } = this.props;
    return (
      <MasterWrapper>
        <h1 className="page-title">Create Post</h1>
        <form className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">
                    {lang('CreatePostPage.label.title')}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message(
                    'title',
                    this.state.title,
                    'required|min:10|max:100',
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <label className="form-label">
                    {lang('CreatePostPage.label.content')}
                  </label>
                  <textarea
                    rows="10"
                    className="form-control"
                    name="content"
                    onChange={this.HandleInputChange}
                  />
                  {this.validator.message(
                    'content',
                    this.state.content,
                    'required|min:150',
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button
              type="button"
              onClick={this.HandleAddPost}
              className="btn btn-primary"
            >
              <i className="fa fa-plus-square p-r-5" />
              Create New Post
            </button>
          </div>
        </form>
      </MasterWrapper>
    );
  }
}

export default withNamespaces()(CreatePost);
