import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropService } from './image-crop.service';


@NgModule({
  imports: [CommonModule],
  providers: [
  	{provide: ImageCropService, useClass: ImageCropService}
  ]
})
export class ImageCropModule {}