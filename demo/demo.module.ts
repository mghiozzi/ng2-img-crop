import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2ImgCropModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, Ng2ImgCropModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}