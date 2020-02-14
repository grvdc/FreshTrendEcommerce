(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-detail/product-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title >\n            <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n              style=\"width: 55%;vertical-align: text-bottom;\" />\n          </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row style=\"margin-top: 10px;\">\n\n        <ion-col size=\"10\" style=\"padding: 10px; display: flex;justify-content: center;\">\n          <ion-thumbnail style=\"height: 250px; width: 250px;\">\n            <img [src]=\"imageShow\" alt=\"image\" style=\"height: 275px;\" />\n          </ion-thumbnail>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding-top: 10px;\">\n          <ion-thumbnail *ngFor=\"let item of imageList\"\n            style=\"margin-bottom: 3px; display: flex;justify-content: center;\" (click)=\"highlightedOff(item.src)\"\n            [ngClass]=\"{'hilight':item.highlighted }\">\n            <img [src]=\"item.src\" style=\"    height: 100%;\n                 ;\">\n          </ion-thumbnail>\n    \n        </ion-col>\n      </ion-row>\n      <div style=\"     width: 100%;\n      padding-top: 5%;\n      text-align: center;\n      position: absolute;\n      z-index: 99;\n      top: 255px;\n      color: white;\n      font-weight: bold;\n      font-size: 20px;\n      text-align: right;\n      padding-right: 15px;\n      \">\n        <ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108);margin-right: 10px;\"></ion-icon>\n        <ion-icon name=\"share\" style=\"color:rgb(106, 112, 108)\"></ion-icon>\n      </div>\n\n      <ion-card style=\"margin-bottom: 60px;position: sticky;\">\n          <ion-item>\n            <ion-row style=\"width:100%\">\n              <ion-col size=\"8\">\n                <h6 style=\"color: #232323;font-weight: 550;\">{{product.title}}</h6>\n              </ion-col>\n              <ion-col size=\"4\" style=\"    display: flex;\n             align-items: flex-end;justify-content:flex-end;\">\n                <h6 style=\"font-weight: 550;\" class=\"t-color\">Rs. 350.00</h6>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n      \n            <ion-row style=\"width:100%\">\n              <ion-col size=\"6\" style=\"display: flex;\n              align-items: center;\">\n                <h6 style=\"color: #232323;font-weight: 550;margin:0\">Color</h6>\n              </ion-col>\n              <!-- <ng-container *ngFor=\"let item of data.options\">\n                <ng-container *ngIf=\"item.name == 'Size'\">\n                  <ion-col size=\"6\" style=\"text-align: right;display: flex;\n                  align-items: center;justify-content: flex-end;\">\n                    <h6 style=\"color: #232323;font-weight: 550;margin:0\">Size options</h6>\n                  </ion-col>\n                </ng-container>\n              </ng-container> -->\n              <ion-col size=\"6\" style=\"display: flex;\n                align-items: flex-end;justify-content: space-between;\">\n                <div style=\"height: 25px;width: 25px;background: #4f39f5; margin-right: 10px; border-radius: 5px;\n               box-shadow: 0px 0px 9px #000000;\n               display: flex;\n          align-items: center;\n          justify-content: center;\" (click)=\"checkColor('purple')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n               color:rgb(255, 255, 255);\" *ngIf=\"color == 'purple'\" class=\"animated wobble\"></ion-icon>\n                </div>\n                <div style=\" height: 25px; width: 25px; background: #096f29; margin-right: 10px; \n                border-radius: 5px; box-shadow: 0px 0px 9px #000000;\" (click)=\"checkColor('green')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n                color:rgb(255, 255, 255);\" *ngIf=\"color == 'green'\" class=\"animated wobble\"></ion-icon>\n                </div>\n                <div style=\"height: 25px; width: 25px; background: #ff7979;margin-right: 10px;border-radius: 5px;\n               box-shadow: 0px 0px 9px #000000;\" (click)=\"checkColor('pink')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n               color:rgb(255, 255, 255);\" *ngIf=\"color == 'pink'\" class=\"animated wobble\"></ion-icon>\n                </div>\n                <div style=\"height: 25px;  width: 25px; border-radius: 5px;box-shadow: 0px 0px 9px #000000;\n               background: red;\" (click)=\"checkColor('red')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n               color:rgb(255, 255, 255);\" *ngIf=\"color == 'red'\" class=\"animated wobble\"></ion-icon>\n                </div>\n              </ion-col>\n              <!-- <ng-container *ngFor=\"let item of data.options\">\n                <ng-container *ngIf=\"item.name == 'Size'\">\n                  <ion-col size=\"6\" style=\"display: flex;\n                      align-items: flex-end;justify-content: flex-end;\">\n                    <div [ngStyle]=\"{'border':selectSize === size ? border : 'solid 1px grey' }\"\n                      style=\"border:solid 1px grey;width:25px; height:25px;float: left;margin-left:10px;text-align:center;\"\n                      class=\"flex-center\" *ngFor=\"let size of item.values\" (click)=\"getColor(size)\">{{size}}</div>\n                  </ion-col>\n                </ng-container>\n      \n      \n      \n              </ng-container> -->\n      \n            </ion-row>\n          </ion-item>\n      \n          <ion-row style=\"width:100%\">\n      \n            <ion-col size=\"12\">\n              <div>\n                <ion-segment color=\"secondary\" [(ngModel)]=\"page\">\n                  <ion-segment-button value=\"0\" checked>\n                    <label>Details</label>\n                  </ion-segment-button>\n                  <ion-segment-button value=\"1\">\n                    <label>Reviews</label>\n      \n                  </ion-segment-button>\n      \n                </ion-segment>\n              </div>\n      \n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"page == 0\">\n              <ion-row style=\"text-align: left;\">\n                <ion-col size=\"6\">Fabric</ion-col>\n                <ion-col size=\"6\">Rayon</ion-col>\n                <ion-col size=\"6\">Type</ion-col>\n                <ion-col size=\"6\">Top and Tshirt</ion-col>\n                <ion-col size=\"6\">Sales Package</ion-col>\n                <ion-col size=\"6\">1 Kurta||1 Trouser</ion-col>\n                <ion-col size=\"6\">Style Code</ion-col>\n                <ion-col size=\"6\">6483F-Green</ion-col>\n                <ion-col size=\"6\">Pattern</ion-col>\n                <ion-col size=\"6\">Solid</ion-col>\n                <ion-col size=\"6\">Color</ion-col>\n                <ion-col size=\"6\">Red</ion-col>\n                <ion-col size=\"6\">Neck</ion-col>\n                <ion-col size=\"6\">Key Hole Neck</ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"page == 1\">\n              <ion-list>\n                <ion-list-header>\n                  Recent Reviews\n                </ion-list-header>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n      \n      \n              </ion-list>\n            </ion-col>\n          </ion-row>               \n        </ion-card>\n\n\n        <ion-card style=\"position: fixed;\n        bottom: 0;\n        width: 100%;\n        background: white;\n        margin:0;\n        padding:0\">\n            <ion-card-content style=\"padding-bottom: 0;\">\n              <ion-row *ngIf=\"!fromCart\">\n                <ion-col size=\"6\" class=\"p0\" *ngIf=\"!cartAdded\">\n                  <ion-button expand=\"block\" fill=\"outline\" style=\"width: 95%;\" class=\"checkout-btn\"\n                    (click)=\"sendToInvoicePage()\">Buy Now</ion-button>\n                </ion-col>\n                <ion-col size=\"6\" class=\"p0\" *ngIf=\"!cartAdded\">\n                  <ion-button expand=\"block\" style=\"width: 95%;\" class=\"background\"  (click)=\"addToCart('')\">Add To Cart\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"12\" class=\"p0\" *ngIf=\"cartAdded\">\n                  <ion-button expand=\"block\" style=\"width: 100%\" class=\"background\" (click)=\"toHome()\">Continue Shopping\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");




var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
var ProductDetailPageRoutingModule = /** @class */ (function () {
    function ProductDetailPageRoutingModule() {
    }
    ProductDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductDetailPageRoutingModule);
    return ProductDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/pages/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");







var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"]
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hilight {\n  border: solid 2px #a37bb9;\n}\n\n.background {\n  --background: #a37bb9 !important;\n}\n\n.t-color {\n  color: #a37bb9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpbGlnaHR7XG4gICAgYm9yZGVyOnNvbGlkIDJweCAjYTM3YmI5O1xuXG59XG4uYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQgOiAjYTM3YmI5ICFpbXBvcnRhbnQ7XG59XG4udC1jb2xvcntcbiAgICBjb2xvcjojYTM3YmI5ICFpbXBvcnRhbnQ7XG59IiwiLmhpbGlnaHQge1xuICBib3JkZXI6IHNvbGlkIDJweCAjYTM3YmI5O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogI2EzN2JiOSAhaW1wb3J0YW50O1xufVxuXG4udC1jb2xvciB7XG4gIGNvbG9yOiAjYTM3YmI5ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(auth, router, route, loadingController) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.imageList = [];
        this.route.queryParams.subscribe(function (params) {
            if (params && params.productFromShopPage) {
                _this.product = JSON.parse(params.productFromShopPage);
                console.log("this.product.images.length", _this.product.images.length);
                for (var i = 0; i < _this.product.images.length; i++) {
                    if (i < 4) {
                        _this.imageList.push(_this.product.images[i]);
                        _this.imageList[i]['highlighted'] = false;
                    }
                }
                _this.highlightedOff(_this.imageList[0]['src']);
            }
            else {
            }
        });
    }
    ProductDetailPage.prototype.ngOnInit = function () {
    };
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        this.page = 0;
    };
    ProductDetailPage.prototype.heighlightedOnn = function (src) {
        this.imageShow = src;
        this.imageList.map(function (item) {
            if (item.src === src) {
                item.highlighted = true;
            }
        });
    };
    ProductDetailPage.prototype.highlightedOff = function (src) {
        console.log("imgClick", src);
        this.imageList.forEach(function (values) {
            values.highlighted = false;
        });
        this.heighlightedOnn(src);
    };
    ProductDetailPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/pages/product-detail/product-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-detail-product-detail-module-es5.js.map