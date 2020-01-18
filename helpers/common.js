/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Gets the value of an environment variable. Supports boolean, empty and null.
 *
 * @exports
 * @function
 * @name env
 * @param key
 * @param value
 * @returns {string | *}
 */
export function env(key, value = null) {
  return process.env[key] || value;
}
