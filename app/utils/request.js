/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import axios from 'axios';
import AlertDialog from 'sweetalert2';

/**
 * Parses the JSON returned by a network request
 *
 * @function
 * @name parseJSON
 * @param  {number} HTTP response status codes
 * @param  {object} A response from a network request
 * @return {object}  The parsed JSON from the request
 */
function parseJSON({status,data}) {
  if (status === 204 || status === 205) {
    return null;
  }
  return data.response;
}

/**
 * Show alert message.
 *
 * @function
 * @name showError
 * @param  {object} error A error response from a network request
 * @returns {function} AlertDialog
 */
function showError({response}) {
  const {statusText,data} = response;
  AlertDialog.fire({
    icon: 'error',
    title: statusText,
    text: data !== undefined && data.errors.length !== 0 ? data.errors.message : 'Something went wrong!'
  });
}

/**
 * Requests a URL, returning a promise
 *
 * @export
 * @function
 * @name request
 * @param  {string} url The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @returns {object} The response data
 */
export default function request(url, options) {
  return axios({
    url,
    ...options,
  })
    .then(parseJSON)
    .catch(showError)
}
