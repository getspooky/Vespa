/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const express = require('express');
const app = express();
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const env = require('dotenv');
env.config({ path: path.resolve(__dirname,'../','.env') });
const logger = require('../logs/logger');
const {appStarted} = logger;

swaggerDocument.paths = {
  ...require('./definitions/login'),
  ...require('./definitions/register'),
  ...require('./definitions/password/forgot'),
  ...require('./definitions/password/reset'),
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(appStarted(process.env.SWAGGER_PORT,process.env.SWAGGER_HOST));
