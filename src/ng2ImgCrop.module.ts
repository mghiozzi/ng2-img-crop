import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImageCropService} from './image-crop.service';

@NgModule({
  imports: [CommonModule],
  providers: [
  	{provide: ImageCropService, useClass: ImageCropService}
  ]
})
export class Ng2ImgCropModule {}