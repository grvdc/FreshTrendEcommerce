(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-detail/product-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title >\n            <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n              style=\"width: 55%;vertical-align: text-bottom;\" />\n          </ion-title>\n          <ion-buttons slot=\"end\" (click)=\"goCartPage()\">\n            <ion-icon name=\"cart\" ></ion-icon>\n            <ion-badge color=\"success\" style=\"    border-radius: 35px;\n                background: #af7ddc;\n            width: 20px;\n            margin-top: -11px;\n            height: 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\">12</ion-badge>\n          </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row style=\"margin-top: 10px;\">\n\n        <ion-col size=\"10\" style=\"padding: 10px; display: flex;justify-content: center;\">\n          <ion-thumbnail style=\"height: 250px;width: 100%; display: flex; justify-content: center;\">\n            <img [src]=\"imageShow\" alt=\"image\" style=\"height: 275px;width: 100%;\" />\n          </ion-thumbnail>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding-top: 10px;\">\n          <ion-thumbnail *ngFor=\"let item of imageList\"\n            style=\"margin-bottom: 3px; display: flex;justify-content: center;\" (click)=\"highlightedOff(item.src)\"\n            [ngClass]=\"{'hilight':item.highlighted }\">\n            <img [src]=\"item.src\" style=\"    height: 100%;\n                 ;\">\n          </ion-thumbnail>\n    \n        </ion-col>\n      </ion-row>\n     \n      <div style=\"     width: 100%;\n      padding-top: 5%;\n      text-align: center;\n      position: absolute;\n      z-index: 99;\n      top: 255px;\n      color: white;\n      font-weight: bold;\n      font-size: 20px;\n      text-align: right;\n      padding-right: 15px;\n      \">\n        <ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108);margin-right: 10px;\"></ion-icon>\n        <ion-icon name=\"share\" style=\"color:rgb(106, 112, 108)\"></ion-icon>\n      </div>\n\n      <ion-card style=\"margin-bottom: 60px;position: sticky;box-shadow: none;\">\n          <ion-item lines=\"none\">\n            <ion-row style=\"width:100%\">\n              <ion-col size=\"8\">\n                <h6 style=\"color: #232323;font-weight: 550;\">{{product.title}}</h6>\n              </ion-col>\n              <ion-col size=\"4\" style=\"    display: flex;\n             align-items: flex-end;justify-content:flex-end;\">\n                <h6 style=\"font-weight: 550;\" class=\"t-color\">$350.00</h6>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n          <!-- <ion-item> -->\n            <!-- <ion-row style=\"width:100%\"> -->\n              <!-- <ion-col size=\"6\" style=\"display: flex;\n              align-items: center;\">\n                <h6 style=\"color: #232323;font-weight: 550;margin:0\">Color</h6>\n              </ion-col> -->\n              <!-- <ng-container *ngFor=\"let item of data.options\">\n                <ng-container *ngIf=\"item.name == 'Size'\">\n                  <ion-col size=\"6\" style=\"text-align: right;display: flex;\n                  align-items: center;justify-content: flex-end;\">\n                    <h6 style=\"color: #232323;font-weight: 550;margin:0\">Size options</h6>\n                  </ion-col>\n                </ng-container>\n              </ng-container> -->\n              <!-- <ion-col size=\"6\" style=\"display: flex;\n                align-items: flex-end;justify-content: space-between;\">\n                <div style=\"height: 25px;width: 25px;background: #4f39f5; margin-right: 10px; border-radius: 5px;\n               box-shadow: 0px 0px 9px #000000;\n               display: flex;\n          align-items: center;\n          justify-content: center;\" (click)=\"checkColor('purple')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n               color:rgb(255, 255, 255);\" *ngIf=\"color == 'purple'\" class=\"animated wobble\"></ion-icon>\n                </div>\n                <div style=\" height: 25px; width: 25px; background: #096f29; margin-right: 10px; \n                border-radius: 5px; box-shadow: 0px 0px 9px #000000;\" (click)=\"checkColor('green')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n                color:rgb(255, 255, 255);\" *ngIf=\"color == 'green'\" class=\"animated wobble\"></ion-icon>\n                </div>\n                <div style=\"height: 25px; width: 25px; background: #ff7979;margin-right: 10px;border-radius: 5px;\n               box-shadow: 0px 0px 9px #000000;\" (click)=\"checkColor('pink')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n               color:rgb(255, 255, 255);\" *ngIf=\"color == 'pink'\" class=\"animated wobble\"></ion-icon>\n                </div>\n                <div style=\"height: 25px;  width: 25px; border-radius: 5px;box-shadow: 0px 0px 9px #000000;\n               background: red;\" (click)=\"checkColor('red')\">\n                  <ion-icon name=\"checkmark\" style=\"font-size: 25px;\n               color:rgb(255, 255, 255);\" *ngIf=\"color == 'red'\" class=\"animated wobble\"></ion-icon>\n                </div>\n              </ion-col> -->\n              <!-- <ng-container *ngFor=\"let item of data.options\">\n                <ng-container *ngIf=\"item.name == 'Size'\">\n                  <ion-col size=\"6\" style=\"display: flex;\n                      align-items: flex-end;justify-content: flex-end;\">\n                    <div [ngStyle]=\"{'border':selectSize === size ? border : 'solid 1px grey' }\"\n                      style=\"border:solid 1px grey;width:25px; height:25px;float: left;margin-left:10px;text-align:center;\"\n                      class=\"flex-center\" *ngFor=\"let size of item.values\" (click)=\"getColor(size)\">{{size}}</div>\n                  </ion-col>\n                </ng-container>\n      \n      \n      \n              </ng-container> -->\n            <!-- </ion-row>  -->\n          <!-- </ion-item> -->\n      \n          <!-- <ion-row style=\"width:100%\">\n      \n            <ion-col size=\"12\">\n              <div>\n                <ion-segment color=\"secondary\" [(ngModel)]=\"page\">\n                  <ion-segment-button value=\"0\" checked>\n                    <label>Details</label>\n                  </ion-segment-button>\n                  <ion-segment-button value=\"1\">\n                    <label>Reviews</label>\n      \n                  </ion-segment-button>\n      \n                </ion-segment>\n              </div>\n      \n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"page == 0\">\n              <ion-row style=\"text-align: left;\">\n                <ion-col size=\"6\">Fabric</ion-col>\n                <ion-col size=\"6\">Rayon</ion-col>\n                <ion-col size=\"6\">Type</ion-col>\n                <ion-col size=\"6\">Top and Tshirt</ion-col>\n                <ion-col size=\"6\">Sales Package</ion-col>\n                <ion-col size=\"6\">1 Kurta||1 Trouser</ion-col>\n                <ion-col size=\"6\">Style Code</ion-col>\n                <ion-col size=\"6\">6483F-Green</ion-col>\n                <ion-col size=\"6\">Pattern</ion-col>\n                <ion-col size=\"6\">Solid</ion-col>\n                <ion-col size=\"6\">Color</ion-col>\n                <ion-col size=\"6\">Red</ion-col>\n                <ion-col size=\"6\">Neck</ion-col>\n                <ion-col size=\"6\">Key Hole Neck</ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"page == 1\">\n              <ion-list>\n                <ion-list-header>\n                  Recent Reviews\n                </ion-list-header>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img\n                      src=\"https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Listen, Good Product Ever seen.</h2>\n                    <p>Mr.Gaurav K</p>\n                  </ion-label>\n                </ion-item>\n      \n      \n              </ion-list>\n            </ion-col>\n          </ion-row>    -->\n          <ion-item lines=\"none\">\n              <p>Buy in monthly payments with Affirm on orders over $50. </p>\n          </ion-item>\n          <ion-item lines=\"none\">\n              <ion-label>Metal Type</ion-label>\n              <ion-select value=\"wGold\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"max-width: 100% !important;\">\n                <ion-select-option value=\"wGold\">14k White Gold</ion-select-option>\n                <ion-select-option value=\"yGold\">14k Yellow Gold</ion-select-option>\n                <ion-select-option value=\"rGold\">14k Rose Gold</ion-select-option>\n                <ion-select-option value=\"platinum\">Platinum</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label>Style</ion-label>\n                <ion-select value=\"twist\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"twist\">Twist</ion-select-option>\n                  <ion-select-option value=\"bone\">Bone</ion-select-option>\n                  <ion-select-option value=\"lpost\">L Post</ion-select-option>\n                  <ion-select-option value=\"pinpost\">Pin Post</ion-select-option>\n                </ion-select>\n              </ion-item>\n            \n              <ion-item lines=\"none\"> \n                  <ion-label>Guage</ion-label>\n                  <ion-select value=\"18G\" okText=\"Okay\" cancelText=\"Dismiss\">\n                    <ion-select-option value=\"18G\">18G</ion-select-option>\n                    <ion-select-option value=\"20G\">20G</ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <p style=\"color: #a88fb6;font-size: 16px;\">Need different size?</p>\n                </ion-item>\n\n                    <ion-row style=\"padding-left: 16px;padding-right: 16px;\">\n                    <ion-col style=\"padding: 0;\">Enter any special instructions:</ion-col>\n                  </ion-row>\n                    <ion-row style=\"padding-left: 16px; padding-right: 16px;margin-top: 5px\">\n                      <ion-col style=\"padding: 0;\">\n                        <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row style=\"padding-left: 16px;padding-right: 16px;margin-top: 10px;\">\n                      <ion-col style=\"padding: 0;\">Quantity</ion-col>\n                    </ion-row>\n                    <ion-row style=\"padding-left: 16px; padding-right: 16px; display: flex;align-items: center;\">                      \n                      <ion-col size=\"2\"style=\"padding: 0;\">\n                        <ion-input type=\"number\" style=\"border: solid 1px #b766b7;text-align: center; color: black;\" [(ngModel)]=\"qty\"></ion-input>\n                      </ion-col>\n                      <ion-col size=\"10\"style=\"padding: 0;\">\n                        <ion-button (click)=\"addToCart()\" style=\"--background: purple; width: 100%;--color:white;color:white;margin-left: 20px;\" type=\"submit\">ADD TO CART\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-item lines=\"none\">\n                      <p style=\"color: #242424;font-size: 16px;font-weight: 800;margin-bottom: 0;\">Description</p>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <p style=\"color: #242424;font-size: 16px;margin-top: 0;\">The 1.5mm diamond on this discrete nose stud is perfect\n                       for those who love their nostril piercing and want something that quietly shines. \n                       The prong setting allows the light to shine through this teeny-tiny diamond, producing a dazzle that surpasses its size.\n                       The diamond is placed in a low-profile setting which sits flat in the piercing so that it doesn't stick out.\n                       A must-have for someone who is looking for a teeny-tiny piece for their piercing</p>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-row style=\"text-align: left;border: solid 1px #c7c7c7;\">\n                    <ion-col size=\"12\" style=\"display: flex; align-items: center;justify-content: center;\n                    height: 45px;font-size: 16px;font-weight: 800;\">Product details</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Ships In</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\" >1</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Material</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">14K Rose Gold</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Gauge</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">18G (1.0mm)</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Length</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">1/4\" (6.4mm)</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Style</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">Twist</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Gemstone Type</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">Diamond</ion-col>\n                    <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Gemstone Size</ion-col>\n                    <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">1.5mm</ion-col>\n                  </ion-row>\n                </ion-item>\n        </ion-card>\n\n\n        <ion-card style=\"position: fixed;display: none;\n        bottom: 0;\n        width: 100%;\n        background: white;\n        margin:0;\n        padding:0\">\n            <ion-card-content style=\"padding-bottom: 0;\">\n              <ion-row *ngIf=\"!fromCart\">\n                <ion-col size=\"6\" class=\"p0\" *ngIf=\"!cartAdded\">\n                  <ion-button expand=\"block\" fill=\"outline\" style=\"width: 95%;\" class=\"checkout-btn\"\n                    (click)=\"goCartPage()\">Buy Now</ion-button>\n                </ion-col>\n                <ion-col size=\"6\" class=\"p0\" *ngIf=\"!cartAdded\">\n                  <ion-button expand=\"block\" style=\"width: 95%;\" class=\"background\"  (click)=\"goCartPage('')\">Add To Cart\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"12\" class=\"p0\" *ngIf=\"cartAdded\">\n                  <ion-button expand=\"block\" style=\"width: 100%\" class=\"background\" (click)=\"toHome()\">Continue Shopping\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/pages/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");







let ProductDetailPageModule = class ProductDetailPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.hilight {\n  border: solid 2px #a37bb9;\n}\n.background {\n  --background: #a37bb9 !important;\n}\n.t-color {\n  color: #a37bb9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRFI7QURFUTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQ0FWO0FER007RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNEUjtBRE1BO0VBQ0kseUJBQUE7QUNISjtBRE1BO0VBQ0ksZ0NBQUE7QUNISjtBREtBO0VBQ0kseUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICBpb24tdGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLmhpbGlnaHR7XG4gICAgYm9yZGVyOnNvbGlkIDJweCAjYTM3YmI5O1xuXG59XG4uYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQgOiAjYTM3YmI5ICFpbXBvcnRhbnQ7XG59XG4udC1jb2xvcntcbiAgICBjb2xvcjojYTM3YmI5ICFpbXBvcnRhbnQ7XG59XG5cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogNTUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oaWxpZ2h0IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2EzN2JiOTtcbn1cblxuLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICNhMzdiYjkgIWltcG9ydGFudDtcbn1cblxuLnQtY29sb3Ige1xuICBjb2xvcjogI2EzN2JiOSAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ProductDetailPage = class ProductDetailPage {
    constructor(auth, router, route, loadingController) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.imageList = [];
        this.qty = 1;
    }
    ngOnInit() {
        this.imageList = [];
        this.nn();
    }
    ionViewWillEnter() {
        this.page = 0;
        this.imageList = [];
        this.nn();
    }
    nn() {
        this.route.queryParams.subscribe(params => {
            if (params && params.productFromShopPage) {
                this.product = JSON.parse(params.productFromShopPage);
                console.log("this.product.images.length", this.product.images.length);
                for (let i = 0; i < this.product.images.length; i++) {
                    if (i < 4) {
                        this.imageList.push(this.product.images[i]);
                        this.imageList[i]['highlighted'] = false;
                    }
                }
                this.highlightedOff(this.imageList[0]['src']);
            }
            else {
            }
        });
    }
    heighlightedOnn(src) {
        this.imageShow = src;
        this.imageList.map((item) => {
            if (item.src === src) {
                item.highlighted = true;
            }
        });
    }
    highlightedOff(src) {
        console.log("imgClick", src);
        this.imageList.forEach((values) => {
            values.highlighted = false;
        });
        this.heighlightedOnn(src);
    }
    addToCart() {
        let a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
            a.push(this.product);
        }
        else {
            a = JSON.parse(localStorage.getItem('cartProducts'));
            a.push(this.product);
        }
        console.log('a', a);
        localStorage.setItem('cartProducts', JSON.stringify(a));
    }
    goCartPage() {
        this.router.navigateByUrl('/cart-page');
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-product-detail-product-detail-module-es2015.js.map