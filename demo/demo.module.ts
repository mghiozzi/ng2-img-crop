import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropModule } from '../src';
import { Demo } from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, ImageCropModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}