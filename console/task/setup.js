
/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const shell = require('shelljs');
const { exec } = require('child_process');

/**
 * Clone Vespa repo from github.
 * @async
 * @exports
 * @function
 * @name cloneVespaRepository
 * @param {string} name
 * @return {Promise<any>}
 */
exports.cloneVespaRepository = function(name) {
  return new Promise((resolve, reject) => {
    exec(`git clone https://github.com/getspooky/Vespa.git ${name}`, (err, stdout) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(` ${name} was successfully generated`);
      }
    });
  });
}

/**
 * Remove files and folders.
 * @async
 * @exports
 * @function
 * @name removeSomeFilesAndFolders
 * @param {string} dir
 * @param {string} res
 * @return {Promise<any>}
 */
exports.removeFilesAndFolders = function(dir,{mode}) {
  return new Promise((resolve, reject) => {
    try {
      if(mode[0] = 'production') {
        shell.cd(dir);
        shell.rm('-rf', '.git/');
        shell.rm('-rf', '.vscode');
        shell.rm('-rf', '.github');
        shell.rm('-rf', 'console');
        shell.rm('-rf', 'CONTRIBUTING.md');
        shell.rm('-rf', 'CHANGELOG.md');
        shell.rm('-rf', 'README.md');
      }
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Initialize a new Git repository.
 * @async
 * @exports
 * @function
 * @name initGitRepository
 * @return {Promise<any>}
 */
exports.initGitRepository = function () {
  return new Promise((resolve, reject) => {
    exec('git init', (err, stdout) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(stdout);
      }
    });
  });
}

