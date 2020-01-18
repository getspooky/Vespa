/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

module.exports = {
  roots: ['./'],
  testRegex: '\\.(test|spec)\\.js$',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/(build|docs|node_modules|packages)/'],
  setupFiles: ['./setupTests.js'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/internals/mocks/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/internals/mocks/fileMock.js"
  },
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
