
/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 module.exports = [
    {
      type: 'checkbox',
      message: 'Select install mode',
      name: 'mode',
      choices: [
        {
          name: 'development'
        },
        {
          name: 'production'
        }
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose one mode.';
        }
  
        return true;
      }
    }
];