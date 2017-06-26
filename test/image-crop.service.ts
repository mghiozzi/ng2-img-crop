import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {ImageCropService} from './../src/image-crop.service';
import {Ng2ImgCropModule} from '../src';

describe('hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [Ng2ImgCropModule]});
  });

  it('should say hello world', () => {
    var fixture: ComponentFixture<ImageCropService> = TestBed.createComponent(ImageCropService);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the ng2 img crop module!');
  });

});
