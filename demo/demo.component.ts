import {Component} from '@angular/core';
import {ImageCropService} from '../src';

@Component({
  selector: 'demo-app',
  templateUrl: 'demo.html',
})
export class Demo {

	url: string;
  	image: HTMLImageElement;
  	cropped: HTMLImageElement;
  	sx: number;
  	sy: number;
  	w: number;
  	h: number;

	constructor(private cropper:ImageCropService){
		this.sx = 100;
		this.sy = 0;
		this.w = 300;
		this.h = 300;
		console.log(cropper);
		this.image = new Image();
		this.cropped = new Image();
		this.image.onload = () => {
			this.crop(this.sx,this.sy,this.w,this.h);
		}
		this.image.src = 'kiddo.jpg';
	}


	crop(sx: number, sy: number, w: number, h: number): void {
		this.cropper.crop(this.image,sx,sy,w,h)
		.then(b64 => this.cropped.src = b64)
		.catch(err => console.log(err));
	}
}
