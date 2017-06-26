# ng2 img crop
[![Build Status](https://travis-ci.org/MarcelloGhiozzi/ng2-img-crop.svg?branch=master)](https://travis-ci.org/MarcelloGhiozzi/ng2-img-crop)
[![npm version](https://badge.fury.io/js/ng2-img-crop.svg)](http://badge.fury.io/js/ng2-img-crop)
[![devDependency Status](https://david-dm.org/MarcelloGhiozzi/ng2-img-crop/dev-status.svg)](https://david-dm.org/MarcelloGhiozzi/ng2-img-crop#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/MarcelloGhiozzi/ng2-img-crop.svg)](https://github.com/MarcelloGhiozzi/ng2-img-crop/issues)
[![GitHub stars](https://img.shields.io/github/stars/MarcelloGhiozzi/ng2-img-crop.svg)](https://github.com/MarcelloGhiozzi/ng2-img-crop/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/MarcelloGhiozzi/ng2-img-crop/master/LICENSE)

## Demo
https://MarcelloGhiozzi.github.io/ng2-img-crop/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

Cropping tool for angular

## Installation

Install through npm:
```
npm install --save ng2-img-crop
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'ng2-img-crop';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/MarcelloGhiozzi/ng2-img-crop/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/ng2-img-crop/ng2-img-crop.js"></script>
<script>
    // everything is exported ng2ImgCrop namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://MarcelloGhiozzi.github.io/ng2-img-crop/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
