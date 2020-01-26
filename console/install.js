#!/usr/bin/env node

/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const program = require('commander');
const inquirer = require('inquirer');
const chalk  = require('chalk');
const banner = require('./ui/banner');
const info   = require('./info/description'); 
const question = require('./question/mode');
const {CHECK_MARK} = require('./ui/emojis');
const {cloneVespaRepository, removeFilesAndFolders} = require('./task/setup');
const log = console.log;

log(chalk.bold(banner));
log(chalk.blue(info));

program
  .command('install <dir>')
  .action(function (dir, cmdObj) {
    inquirer
    .prompt(question).then(answers => {
      cloneVespaRepository(dir).then(response => {
        removeFilesAndFolders(dir,answers).then(()=>{
          log(`${chalk.green(CHECK_MARK)} ${response}`);
        });
      });
    });
  });

program.parse(process.argv);