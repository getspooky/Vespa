/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {env} from 'helpers/common';

module.exports = {
  /*
   |--------------------------------------------------------------------------
   | Application Name
   |--------------------------------------------------------------------------
   |
   | This value is the name of your application. This value is used when
   | Vespa needs to place the application's name in the browser tab.
   |
   */
    name : env('APP_NAME'),

  /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services the application utilizes. Set this in your ".env" file.
    | env: production, development, test
    |
    */
    env : env('APP_ENV', 'test'),

  /*
   |--------------------------------------------------------------------------
   | Application URL
   |--------------------------------------------------------------------------
   |
   | This value is the host of your application. This value is used when the
   | Vespa needs to start swagger api.
   |
   */
   url: env('APP_HOST', 'http://localhost'),

};
