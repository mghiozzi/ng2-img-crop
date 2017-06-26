import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropService } from './image-crop.service';
export var Ng2ImgCropModule = (function () {
    function Ng2ImgCropModule() {
    }
    Ng2ImgCropModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [
                        { provide: ImageCropService, useClass: ImageCropService }
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2ImgCropModule.ctorParameters = [];
    return Ng2ImgCropModule;
}());
//# sourceMappingURL=ng2ImgCrop.module.js.map