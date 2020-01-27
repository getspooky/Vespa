## 🔥 Beautifully designed administration panel for (Nodejs, Laravel, Java Spring, Ruby On Rails , Django , Asp.net Core ...) 🛵🛵🛵

🚦Vespa is not a CMS or a blogging platform but it can be used to create a CMS or a blogging platform, but out of the box it is neither of those. With Vespa you can create any kind of application your heart desires.

<p align="center">
    <img src="docs/media/cover.png" alt="vespa" style="margin-bottom:20px;margin-top:20px;">
    </br>
  <a href="#">
	<img alt="vespa npm version" src="https://img.shields.io/npm/v/getvespa">
	</a>  
	<a href="#">
	<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/getspooky/vespa">
	</a>
    <a href="#">
    <img alt="npm" src="https://img.shields.io/npm/l/getvespa">
    </a>
    <a href="https://spectrum.chat/vespa">
    <img alt="Chat with us on Spectrum" src="https://withspectrum.github.io/badge/badge.svg" />
     </a>
</p>
<div align="center">
  <sub>Created and maintained with ❤️ by  <a href="https://github.com/getspooky">getspooky</a>.</sub>
</div>

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation Steps](#Installation-Steps)
- [Deployment](#Deployment)
- [Browser Support](#Browser-Support)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Features

Here are some of the awesome Vespa features you'll enjoy ✌💪

- Scalable and Maintainable architecture
- Back-end agnostic (Connect to any server side including 
([Asp.net core](https://docs.microsoft.com/en-us/aspnet/?view=aspnetcore-3.1),[Laravel](https://laravel.com/)/[symphony](https://symfony.com/),[Nestjs](https://nestjs.com/)...)
- (Redux, Swagger, Docker) integration
- CRUD Builder
- JWT authentication
- Command-line interface

## Requirements
Vespa has a few requirements you should be aware of before installing:

- Node.js >= 8.0.0
- npm >= 6.10.3

## Installation Steps

[![NPM](https://nodei.co/npm/getvespa.png)](https://nodei.co/npm/getvespa/)

### using GitHub:

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/getspooky/Vespa.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
npm run start
```

### using npm:

### 1. Require the Package
This is a Node.js module available through the npm registry.
Installation is done using the [npm install command](https://docs.npmjs.com/downloading-and-installing-packages-locally):

```bash
 npm install -g getvespa
```

### 2. Add the APP_URL & Swagger host/port
```bash
APP_NAME=
APP_KEY=
APP_ENV=env
APP_HOST=
APP_PORT=
APP_DEBUG=
SWAGGER_PORT=
SWAGGER_HOST=
```

### 3. Run The Installer
Lastly, we can install vespa.
```bash
 getvespa install demo
```

And we're all good to go! 
Start up a local development server with `npm run start` 

To see your application in action, open a browser window and navigate to http://localhost:8080. You should see the Vespa default information page:

![Welcome to our Vespa ❤](docs/media/Hello.png)

## Deployment

npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html

```bash
# build for production environment
npm run build
```

You don’t necessarily need a static server in order to run a Create React App project in production. It also works well when integrated into an existing server side app.

Here’s a programmatic example using Node and Express:

```js
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);
```

## Browser Support

Vespa supports reasonably recent versions of the following browsers:

- IE 10+
- Google Chrome
- Apple Safari
- Microsoft Edge
- Mozilla Firefox

## Security Vulnerabilities

If you discover a security vulnerability within Vespa, please send an e-mail to `Yasser Ameur El Idrissi` via getspookydev@gmail.com . All security vulnerabilities will be promptly addressed.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing
Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## How Can I Help?

- Contribute to the core repository.
- Ask your employer to use Vespa in projects.
- Make a tutorial that you explain Vespa.
- Follow our Vespa repository.

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
