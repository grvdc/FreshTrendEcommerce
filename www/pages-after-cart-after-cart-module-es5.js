(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-after-cart-after-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/after-cart/after-cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/after-cart/after-cart.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  (click)=gotoHome()>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n        style=\"width: 55%;vertical-align: text-bottom;\" />\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  background: #fafafa;\n  height: 65px;\n  border-bottom: solid 1px #d8d8d8;\n  color:#242424\n  \">\n    <p style=\" display: flex;\" (click)=\"toggle()\" *ngIf=\"!show\">\n      <ion-icon name=\"cart\" style=\"margin-right: 10px;\"></ion-icon> Show order summary  <img src='../../../assets/img/down.png' style=\"width: 14px; margin-left: 5px;\" />\n    </p>\n    <p style=\" display: flex;\" (click)=\"toggle()\" *ngIf=\"show\">\n      <ion-icon name=\"cart\" style=\"margin-right: 10px;\"></ion-icon> Hide srder summary <img src='../../../assets/img/up.png' style=\"width: 14px; margin-left: 5px;\" />\n    </p>\n\n    <p style=\"font-weight: 600;\">{{totalAmount  | currency}}</p>\n  </div>\n  <div style=\"background: #fafafa;height: 0px; width: 100%;  overflow: auto;transition: height 0.7s;border-bottom:solid 1px #d8d8d8\"\n    [ngStyle]=\"{'height':show === true ? height : '0px' }\">\n    <ion-list style=\"background: transparent;    padding: 0\">\n      <div *ngFor=\"let item of cartItems; index as index\" style=\"--background: transparent;display:flex;height: 85px;\">\n          <ion-item-divider style=\"    padding: 0;\n          margin-left: 16px;--background: transparent;\n          margin-right: 16px;padding-bottom: 10px;padding-top: 10px;;\">\n       <div style=\" width: 20%;  display: flex;  align-items: center;justify-content: center;\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"item.image.src\" style=\"border: solid 1px #cacaca;border-radius: 5px;\">\n            <div style=\"margin-top: -60px;margin-left: 40px;\">\n              <ion-badge color=\"medium\" style=\"border-radius: 50%;\">{{item.productQuantity}}</ion-badge>\n            </div>\n        </ion-thumbnail>\n       </div> \n       <div style=\"width: 60%;\">\n        <p style=\"font-size: 0.9em; color:#242424;margin: 0;\">{{item.title}}</p>\n        <p style=\"margin: 0;font-size: 0.8em;color:#717171;margin-top: 5px;\">Yellow Gold / 18G / 3/16\" (5mm)</p>\n       </div>\n        <div style=\"width: 20%;color: #323232;text-align: right;\">\n          <p>{{item.variants[0].price | currency}}</p>\n        </div>\n        </ion-item-divider>\n      </div>\n\n\n      <!-- <ion-row style=\"padding-left: 16px;padding-right: 16px;margin-top: 16px;\">\n        <ion-col style=\"padding: 0;\">Gift card or discount code:</ion-col>\n      </ion-row> -->\n      <ion-row style=\"padding-left: 16px; padding-right: 16px;margin-top: 5px;display: flex;\n        align-items: center;\">\n        <ion-col style=\"padding: 0;\" size=\"10\">\n          <ion-input type=\"text\" style=\"border: solid 1px #b766b7;height: 40px;\" placeholder=\"Gift card or discount code\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding: 0;\">\n          <ion-button (click)=\"addToCart()\"\n            style=\"--background: purple;height: 40px; width: 100%;--color:white;color:white;margin-left: 4px;\" type=\"submit\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-item-divider style=\"    padding: 0;\n      margin-left: 16px;--background: transparent;\n      margin-right: 16px;margin-top: 16px;\">\n        <div style=\"width:100%;color:#535353\">\n          \n          <div style=\"    display: flex;\n            width: 100%;\n           \">\n            <div style=\"width: 50%;\">Sub Total</div>\n            <div  style=\"width: 50%;text-align: right;padding-right: 32px;\">{{totalAmount | currency}}</div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 10px;  margin-bottom: 16px; align-items: center;\">\n            <div  style=\"width: 50%;\">Shipping</div>\n            <div  style=\"width: 50%;text-align: right;padding-right: 32px;font-size: 0.8em;\">Calculated at next step </div>\n          </div>\n        </div>\n      </ion-item-divider>\n<!--     \n      <ion-item-divider style=\"padding-right: 16px; height: 80px;\n      --background: transparent;\" lines=\"none\"> -->\n        <div style=\"width:100%;display:flex;color:#535353;padding-right: 16px; height: 80px;padding-left: 16px;\">\n          <div style=\"    display: flex;\n            width: 100%;\n            justify-content: space-between;    align-items: center;\">\n            <div>Total</div>\n            <div style=\"font-size: 18px; font-weight: 600;\"> {{totalAmount | currency}}</div>\n          </div>\n        </div>\n      <!-- </ion-item-divider> -->\n    </ion-list>\n  </div>\n\n\n<div  style=\"padding-left: 16px;padding-right: 16px;margin-top: 20px;\">\n  <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;text-align: center;\">Express checkout</div>\n  <div>\n    <ion-row style=\"margin-top: 16px;display: flex;\n    align-items: center;\">\n      <ion-col style=\"padding: 0;\" size=\"12\">\n        <ion-button (click)=\"addToCart()\"\n        style=\"--background: black;height: 48px; width: 98%;--color:white;color:white;margin-left: 4px;\" type=\"submit\">\n        <ion-icon name=\"logo-google\"></ion-icon>Pay\n      </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div>\n    <ion-row style=\"margin-top: 16px;display: flex;\n    align-items: center;\">\n      <ion-col style=\"padding: 0;\" size=\"12\">\n        <ion-button (click)=\"addToCart()\"\n        style=\"--background: #ffc439;height: 48px; width: 98%;--color:white;color:white;margin-left: 4px;\" type=\"submit\">\n        <img src='../../../assets/img/paypal.png' style=\"width: 85px;\" />\n      </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div>\n    <ion-row style=\"margin-top: 16px;display: flex;\n    align-items: center;\">\n      <ion-col style=\"padding: 0;\" size=\"12\">\n        <ion-button (click)=\"addToCart()\"\n        style=\"--background: #fad676 !important;height: 48px; width: 98%;--color:white;color:white;margin-left: 4px;\" type=\"submit\">\n        <img src='../../../assets/img/amazon--pay.png' style=\"width: 85px;\" />\n      </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n\n<div class=\"or-section\" style=\"margin-top: 16px;width: 100%;display: flex;justify-content: space-around;align-items: center;\">\n  <div style=\"width: 40%; border-bottom: solid 1px #d8d8d8;\"></div>\n  <div>OR</div>\n  <div style=\"width: 40%;border-bottom: solid 1px #d8d8d8;\"></div>\n\n</div>\n\n\n\n  <div style=\"padding-left: 16px;padding-right: 16px;margin-top: 20px;\">\n    <div style=\"width:100%\">\n      <div>\n        <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;\">Contact information</div>\n        <div  class=\"sub-color\" style=\"font-size: 14px;margin-top: 10px;\">Already have an account? Login</div>\n      </div>\n\n      <!-- <ion-row style=\"margin-top: 16px;\">\n        <ion-col style=\"padding: 0;\">Email</ion-col>\n      </ion-row> -->\n      <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n        <ion-col style=\"padding: 0;\" size=\"12\">\n          <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Email\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <div style=\"    margin-top: 15px;\n        display: flex;\n        \">\n        <ion-checkbox color=\"dark\" checked slot=\"start\"></ion-checkbox>\n        <ion-label style=\"margin-left: 10px;\" class=\"sub-color\">\n          Keep me up to date on news and exclusive offers\n        </ion-label>\n      </div>\n\n      <div style=\"margin-top: 16px;font-size: 18px;font-weight: 600;\">\n        <div class=\"head-color\">Shipping address</div>\n      </div>\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">First name</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"First name\" name='fname' [(ngModel)]=\"form.fName\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row style=\"margin-top: 5px;\">\n          <ion-col style=\"padding: 0;\">First name</ion-col>\n        </ion-row>  -->\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Last name</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Last name\" name='lname' [(ngModel)]=\"form.lName\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Company (optional)</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Company (optional)\" name='company' [(ngModel)]=\"form.company\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Address</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top:16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Address\" name='address' [(ngModel)]=\"form.address\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Apartment, suite, etc. (optional)</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top:16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Apartment, suite, etc. (optional)\" name='appartment' [(ngModel)]=\"form.appartment\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">City</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"City\" name='city' [(ngModel)]=\"form.city\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Country/Region</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-select value=\"us\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"max-width: 100% !important;padding-left: 8px;border: solid 1px #b766b7;\n            border-radius: 5px;\" name='country' [(ngModel)]=\"form.country\">\n              <ion-select-option value=\"\">Select Country</ion-select-option>\n              <ion-select-option value=\"us\">United States</ion-select-option>\n              <ion-select-option value=\"ca\">Canada</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">State</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <!-- <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"State\"></ion-input> -->\n            <ion-select value=\"al\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"max-width: 100% !important;padding-left: 8px;border: solid 1px #b766b7;\n            border-radius: 5px;\" name='state' [(ngModel)]=\"form.state\">\n              <ion-select-option value=\"\">Select State</ion-select-option>\n              <ion-select-option value=\"al\">Alabama</ion-select-option>\n              <ion-select-option value=\"ak\">Alaska</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">ZIP code</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"ZIP code\" name='pin' [(ngModel)]=\"form.pin\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Phone (optional)</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Phone (optional)\" name='mobile' [(ngModel)]=\"form.mobile\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Phone (optional)</ion-col>\n        </ion-row> -->\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-button (click)=\"validate()\" style=\"--background: purple;height: 40px; width: 100%;--color:white;color:white;margin-left: 4px;\" type=\"submit\">\n            Continue to shipping\n          </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <!-- <ion-row style=\"margin-top: 16px;\">\n          <ion-col style=\"padding: 0;\">Phone (optional)</ion-col>\n        </ion-row> -->\n        <ion-row style=\"display: flex;\n        align-items: center;height: 50px;\">\n          <ion-col style=\"padding: 0;display: flex;justify-content: center;color: #545454;align-items: center\" size=\"12\" (click)=\"cartPage()\">\n      <img src='../../../assets/img/back.png' style=\"height: 14px; margin-right: 5px;\" /> Return to cart\n          </ion-col>\n        </ion-row>\n      </div>\n     \n\n    </div>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/after-cart/after-cart-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AfterCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPageRoutingModule", function() { return AfterCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _after_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./after-cart.page */ "./src/app/pages/after-cart/after-cart.page.ts");




var routes = [
    {
        path: '',
        component: _after_cart_page__WEBPACK_IMPORTED_MODULE_3__["AfterCartPage"]
    }
];
var AfterCartPageRoutingModule = /** @class */ (function () {
    function AfterCartPageRoutingModule() {
    }
    AfterCartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AfterCartPageRoutingModule);
    return AfterCartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/after-cart/after-cart.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart.module.ts ***!
  \*******************************************************/
/*! exports provided: AfterCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPageModule", function() { return AfterCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _after_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./after-cart-routing.module */ "./src/app/pages/after-cart/after-cart-routing.module.ts");
/* harmony import */ var _after_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./after-cart.page */ "./src/app/pages/after-cart/after-cart.page.ts");







var AfterCartPageModule = /** @class */ (function () {
    function AfterCartPageModule() {
    }
    AfterCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _after_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["AfterCartPageRoutingModule"]
            ],
            declarations: [_after_cart_page__WEBPACK_IMPORTED_MODULE_6__["AfterCartPage"]]
        })
    ], AfterCartPageModule);
    return AfterCartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/after-cart/after-cart.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.height {\n  min-height: 250px !important;\n}\n.head-color {\n  color: #333333;\n}\n.sub-color {\n  color: #545454;\n}\nion-input {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvYWZ0ZXItY2FydC9hZnRlci1jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWZ0ZXItY2FydC9hZnRlci1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FERVE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUNBVjtBREdNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRFI7QURNRTtFQUNFLDRCQUFBO0FDSEo7QURNQTtFQUNFLGNBQUE7QUNIRjtBREtBO0VBQ0UsY0FBQTtBQ0ZGO0FESUE7RUFDRSxrQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWZ0ZXItY2FydC9hZnRlci1jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICBpb24tdGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGVpZ2h0e1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkLWNvbG9ye1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5zdWItY29sb3J7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuaW9uLWlucHV0e1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWQtY29sb3Ige1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnN1Yi1jb2xvciB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/after-cart/after-cart.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart.page.ts ***!
  \*****************************************************/
/*! exports provided: AfterCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPage", function() { return AfterCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AfterCartPage = /** @class */ (function () {
    function AfterCartPage(router) {
        this.router = router;
        this.show = false;
        this.cartItems = [];
        this.form = {
            fName: '',
            lName: '',
            company: '',
            address: '',
            appartment: '',
            city: '',
            country: '',
            state: '',
            pin: '',
            mobile: '',
        };
    }
    AfterCartPage.prototype.ngOnInit = function () {
    };
    AfterCartPage.prototype.toggle = function () {
        this.show = !this.show;
    };
    AfterCartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
        }
        else {
            this.totalAmount = 0;
            a = JSON.parse(localStorage.getItem('cartProducts'));
            a.map(function (item) {
                _this.totalAmount = _this.totalAmount + item.itemTotal;
            });
        }
        this.cartItems = a;
        this.height = ((this.cartItems.length * 72) + 248) + 'px';
        console.log('cartItems', this.cartItems);
    };
    AfterCartPage.prototype.gotoHome = function () {
        this.router.navigateByUrl('/');
    };
    AfterCartPage.prototype.cartPage = function () {
        this.router.navigateByUrl('/cart-page');
    };
    AfterCartPage.prototype.validate = function () {
        console.log("Fname", this.form);
    };
    AfterCartPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AfterCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-after-cart',
            template: __webpack_require__(/*! raw-loader!./after-cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/after-cart/after-cart.page.html"),
            styles: [__webpack_require__(/*! ./after-cart.page.scss */ "./src/app/pages/after-cart/after-cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AfterCartPage);
    return AfterCartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-after-cart-after-cart-module-es5.js.map