/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
 
const { exec } = require('child_process');
exec('npm -v', (err, stdout) => {
  if (err) throw err;
  if (parseFloat(stdout) < 6) {
    // NOTE: This can happen if you have a dependency which lists an old version of npm in its own dependencies.
    throw new Error(`[ERROR] You need npm version @>=5 but you have ${stdout}`);
  }
});
