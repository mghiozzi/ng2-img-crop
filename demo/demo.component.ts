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
		this.sx = 0;
		this.sy = 0;
		this.w = 500;
		this.h = 500;
		console.log(cropper);
		this.image = new Image();
		this.cropped = new Image();
		this.image.onload = (event) => {
			this.doCrop(this.sx,this.sy,this.w,this.h);
		}
		this.image.src = 'kiddo.jpg';
	}


	doCrop(sx,sy,w,h){
		console.log(sx,sy,h,w);
		this.cropper.crop(this.image,sx,sy,w,h)
		.then(b64 => {
			//console.log(b64);
			this.cropped.src = b64;
		})
		.catch(err => console.log(err));
	}
}
