import { Injectable } from '@angular/core';
export var ImageCropService = (function () {
    function ImageCropService() {
    }
    ImageCropService.prototype.crop = function (image, startx, starty, w, h) {
        if (startx === void 0) { startx = 0; }
        if (starty === void 0) { starty = 0; }
        return new Promise(function (resolve, reject) {
            var cvs = document.createElement('canvas');
            cvs.width = w;
            cvs.height = h;
            var ctx = cvs.getContext('2d');
            ctx.drawImage(image, startx, starty, w, h, 0, 0, w, h);
            var b64 = cvs.toDataURL();
            if (b64) {
                resolve(b64);
            }
            else {
                reject('Error');
            }
        });
    };
    ImageCropService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ImageCropService.ctorParameters = [];
    return ImageCropService;
}());
//# sourceMappingURL=image-crop.service.js.map