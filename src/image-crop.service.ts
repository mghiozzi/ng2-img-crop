import { Injectable } from '@angular/core';

@Injectable()
export class ImageCropService {

	public crop (image: HTMLImageElement, startx: number = 0, starty: number = 0, w: number, h: number): Promise<string> {		
		return new Promise (function (resolve: any, reject: any): void {
			let cvs: HTMLCanvasElement = document.createElement ('canvas');
			cvs.width = w;
			cvs.height = h;
			let ctx: CanvasRenderingContext2D  = cvs.getContext ('2d');
			ctx.drawImage(image,startx,starty,w,h,0,0,w,h);
			let b64: string = cvs.toDataURL ();
			if (b64) {
				resolve(b64);
			} else {
				reject('Error');
			}
		});
	}
}
