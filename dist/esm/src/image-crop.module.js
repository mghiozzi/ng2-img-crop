import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropService } from './image-crop.service';
export var ImageCropModule = (function () {
    function ImageCropModule() {
    }
    ImageCropModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [
                        { provide: ImageCropService, useClass: ImageCropService }
                    ]
                },] },
    ];
    /** @nocollapse */
    ImageCropModule.ctorParameters = [];
    return ImageCropModule;
}());
//# sourceMappingURL=image-crop.module.js.map