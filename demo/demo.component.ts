import {Component} from '@angular/core';
import {ImageCropService} from '../src';

@Component({
  selector: 'demo-app',
  template: '<p><img [src]="image.src"/></p><p><img [src]="cropped.src"/></p>'
})
export class Demo {

	url: string;
  	image: HTMLImageElement;
  	cropped: HTMLImageElement;

	constructor(private cropper:ImageCropService){
		console.log(cropper);
		this.image = new Image();
		this.cropped = new Image();
		this.image.onload = (event) => {
			this.cropper.crop(this.image,250,100,150,100)
			.then(b64 => {
				this.cropped.src = b64;
			})
			.catch(err => console.log(err));
		}
		this.image.src = 'kiddo.jpg';
	}
}
