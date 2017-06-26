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
- [License](#licence)

## About

Cropping tool for angular

## Installation

Install through npm:

```
npm install --save https://github.com/marcelloghiozzi/ng2-img-crop

```

Import it in your app module;

```typescript
import { Ng2ImgCropModule } from 'ng2-img-crop';

@NgModule({
	...

	imports: [
		...
		Ng2ImgCropModule
	]
})
```
Then import the crop service where you need it:

```typescript
import { ImageCropService } from 'ng2-img-crop';

...

export class myComponent {
	constructor(private imageCropper: ImageCropService){}
}
```


## Documentation

Methods:

```typescript
crop (image: HTMLImageElement, startX: number = 0, startY: number = 0, clipWidth: number, clipHeight: number): Promise<string>

```




## License

MIT
