(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-detail/product-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=gotoHome()>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n        style=\"width: 55%;vertical-align: text-bottom;\" />\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"goCartPage()\">\n      <ion-icon name=\"cart\"></ion-icon>\n      <ion-badge color=\"success\" style=\"    border-radius: 35px;\n                background: #af7ddc;\n            width: 20px;\n            margin-top: -11px;\n            height: 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\">{{cartBadge}}</ion-badge>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"search-bar\">\n    <ion-input placeholder=\"Search\"></ion-input>\n    <div class=\"search-icon\">\n      <ion-icon name=\"search\"></ion-icon>\n    </div>\n\n  </div>\n  <div\n    style=\"display: flex;font-size: 0.68em;color: grey;justify-content: space-around;margin-bottom: 10px; margin-top: -5px\">\n    <div>look For:</div>\n    <div style=\"text-decoration: underline;\" (click)=\"shopPage()\">nose rings</div>\n    <div style=\"text-decoration: underline;\" (click)=\"shopPage()\">cartiliage earrings</div>\n    <div style=\"text-decoration: underline;\" (click)=\"shopPage()\">barbells</div>\n    <div style=\"text-decoration: underline;\" (click)=\"shopPage()\">septum</div>\n\n  </div>\n\n\n\n  <ion-row style=\"margin-top: 10px;border-top:solid 2px #a88fb6;\">\n\n    <ion-col size=\"10\" style=\"padding: 10px; display: flex;justify-content: center;\">\n      <ion-thumbnail style=\"height: 250px;width: 100%; display: flex; justify-content: center;align-items: center;\">\n        <img [src]=\"imageShow\" alt=\"image\" style=\"height: 190px;width: 190px;\" />\n      </ion-thumbnail>\n    </ion-col>\n    <ion-col size=\"2\" style=\"padding-top: 10px;\">\n      <ion-thumbnail *ngFor=\"let item of imageList\" style=\"margin-bottom: 3px; display: flex;justify-content: center;\"\n        (click)=\"highlightedOff(item.src)\" [ngClass]=\"{'hilight':item.highlighted }\">\n        <img [src]=\"item.src\" style=\"    height: 100%;\n                 ;\">\n      </ion-thumbnail>\n\n    </ion-col>\n  </ion-row>\n\n  <div style=\"     width: 100%;\n      padding-top: 5%;\n      text-align: center;\n      position: absolute;\n      z-index: 99;\n      top: 330px;\n      color: white;\n      font-weight: bold;\n      font-size: 20px;\n      text-align: right;\n      padding-right: 15px;\n      opacity: 0.5;\n      \">\n    <ion-icon name=\"heart\" style=\"color:#444444\" (click)=\"wishlist(product)\" [ngClass]=\"{wish: product.wish}\">\n    </ion-icon>\n  </div>\n\n  <ion-card style=\"margin-bottom: 60px;position: sticky;box-shadow: none;\">\n    <ion-item lines=\"none\" style=\"height:65px;\">\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"12\" style=\"padding-left: 0px;\">\n          <h6 style=\"color: #232323;font-weight: 700\">{{product.title}}</h6>\n        </ion-col>\n\n      </ion-row>\n    </ion-item>\n    <p style=\"padding-left: 16px;margin: 0\">${{product.variants[0].price}} </p>\n    <ion-item lines=\"none\" style=\"color: #242424\">\n      <p>Buy in monthly payments with Affirm on orders over $50. </p>\n    </ion-item>\n    <ion-item style=\"color: #242424\" lines=\"none\">\n      <div style=\"width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: solid 1px #b766b7;\">\n        <ion-label>Metal Type</ion-label>\n        <ion-select value=\"wGold\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"max-width: 100% !important;\">\n          <ion-select-option value=\"wGold\">14k White Gold</ion-select-option>\n          <ion-select-option value=\"yGold\">14k Yellow Gold</ion-select-option>\n          <ion-select-option value=\"rGold\">14k Rose Gold</ion-select-option>\n          <ion-select-option value=\"platinum\">Platinum</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-item>\n\n    <ion-item style=\"color: #242424\" lines=\"none\">\n      <div style=\"width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: solid 1px #b766b7;\">\n        <ion-label>Style</ion-label>\n        <ion-select value=\"twist\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option value=\"twist\">Twist</ion-select-option>\n          <ion-select-option value=\"bone\">Bone</ion-select-option>\n          <ion-select-option value=\"lpost\">L Post</ion-select-option>\n          <ion-select-option value=\"pinpost\">Pin Post</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-item>\n\n    <ion-item style=\"color: #242424\" lines=\"none\">\n      <div style=\"width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: solid 1px #b766b7;\">\n        <ion-label>Guage</ion-label>\n        <ion-select value=\"18G\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option value=\"18G\">18G</ion-select-option>\n          <ion-select-option value=\"20G\">20G</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-item>\n\n    <ion-item lines=\"none\" style=\"color: #242424\">\n      <p style=\"color: #a88fb6;font-size: 16px;\">Need different size?</p>\n    </ion-item>\n\n    <ion-row style=\"padding-left: 16px;padding-right: 16px;\">\n      <ion-col style=\"padding: 0;\">Enter any special instructions:</ion-col>\n    </ion-row>\n    <ion-row style=\"padding-left: 16px; padding-right: 16px;margin-top: 5px\">\n      <ion-col style=\"padding: 0;\">\n        <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"padding-left: 16px;padding-right: 16px;margin-top: 10px;\">\n      <ion-col style=\"padding: 0;\">Quantity</ion-col>\n    </ion-row>\n    <ion-row style=\"padding-left: 16px; padding-right: 16px; display: flex;align-items: center;\">\n      <ion-col size=\"2\" style=\"padding: 0;\">\n        <ion-input type=\"number\" style=\"border: solid 1px #b766b7;text-align: center; color: black;\" [(ngModel)]=\"qty\">\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"10\" style=\"padding: 0;\">\n        <ion-button (click)=\"addToCart()\"\n          style=\"--background: purple; width: 100%;--color:white;color:white;margin-left: 20px;\" type=\"submit\">ADD TO\n          CART\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-item lines=\"none\">\n      <p style=\"color: #242424;font-size: 16px;font-weight: 800;margin-bottom: 0;\">Description</p>\n    </ion-item>\n    <ion-item lines=\"none\" style=\"color: #242424\">\n      <p style=\"color: #242424;font-size: 16px;margin-top: 0;\">The 1.5mm diamond on this discrete nose stud is perfect\n        for those who love their nostril piercing and want something that quietly shines.\n        The prong setting allows the light to shine through this teeny-tiny diamond, producing a dazzle that surpasses\n        its size.\n        The diamond is placed in a low-profile setting which sits flat in the piercing so that it doesn't stick out.\n        A must-have for someone who is looking for a teeny-tiny piece for their piercing</p>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-row style=\"text-align: left;border: solid 1px #c7c7c7;\">\n        <ion-col size=\"12\" style=\"display: flex; align-items: center;justify-content: center;\n                    height: 45px;font-size: 16px;font-weight: 800;\">Product details</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Ships In</ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">1</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Material</ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">14K Rose Gold</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Gauge</ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">18G (1.0mm)</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Length</ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">1/4\" (6.4mm)</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Style</ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">Twist</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Gemstone Type\n        </ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">Diamond</ion-col>\n        <ion-col size=\"8\" style=\"background: #F3F3F3;border: 1px solid #ECECEC;padding: 10px 14px\">Gemstone Size\n        </ion-col>\n        <ion-col size=\"4\" style=\"border: 1px solid #ECECEC;padding: 10px 14px\">1.5mm</ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-card style=\"position: fixed;display: none;\n        bottom: 0;\n        width: 100%;\n        background: white;\n        margin:0;\n        padding:0\">\n    <ion-card-content style=\"padding-bottom: 0;\">\n      <ion-row *ngIf=\"!fromCart\">\n        <ion-col size=\"6\" class=\"p0\" *ngIf=\"!cartAdded\">\n          <ion-button expand=\"block\" fill=\"outline\" style=\"width: 95%;\" class=\"checkout-btn\" (click)=\"goCartPage()\">Buy\n            Now</ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"p0\" *ngIf=\"!cartAdded\">\n          <ion-button expand=\"block\" style=\"width: 95%;\" class=\"background\" (click)=\"goCartPage('')\">Add To Cart\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\" class=\"p0\" *ngIf=\"cartAdded\">\n          <ion-button expand=\"block\" style=\"width: 100%\" class=\"background\" (click)=\"toHome()\">Continue Shopping\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

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

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.hilight {\n  border: solid 2px #a37bb9;\n}\n.background {\n  --background: #a37bb9 !important;\n}\n.t-color {\n  color: #a37bb9 !important;\n}\n.search-bar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n  border-top: 1px solid #a88fb6;\n}\n.search-bar ion-input {\n  border: solid 1px #A88FB6;\n  height: 40px;\n}\n.search-bar .search-icon {\n  width: 10%;\n  background: #A88FB6;\n  border: solid 1px #A88FB6;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDQVY7QURHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FETUE7RUFDSSx5QkFBQTtBQ0hKO0FETUE7RUFDSSxnQ0FBQTtBQ0hKO0FES0E7RUFDSSx5QkFBQTtBQ0ZKO0FES0E7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUVBLDZCQUFBO0FDSEY7QURJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgaW9uLXRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbi5oaWxpZ2h0e1xuICAgIGJvcmRlcjpzb2xpZCAycHggI2EzN2JiOTtcblxufVxuLmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kIDogI2EzN2JiOSAhaW1wb3J0YW50O1xufVxuLnQtY29sb3J7XG4gICAgY29sb3I6I2EzN2JiOSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJhcntcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTg4ZmI2O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2E4OGZiNjtcbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNBODhGQjY7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5zZWFyY2gtaWNvbntcbiAgICB3aWR0aDogMTAlO1xuICAgIGJhY2tncm91bmQ6ICNBODhGQjY7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0E4OEZCNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGlsaWdodCB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNhMzdiYjk7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYTM3YmI5ICFpbXBvcnRhbnQ7XG59XG5cbi50LWNvbG9yIHtcbiAgY29sb3I6ICNhMzdiYjkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhODhmYjY7XG59XG4uc2VhcmNoLWJhciBpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uc2VhcmNoLWJhciAuc2VhcmNoLWljb24ge1xuICB3aWR0aDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjQTg4RkI2O1xuICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

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
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.imageList = [];
        this.qty = 1;
        this.cartBadge = 0;
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        this.imageList = [];
        this.nn();
    };
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        this.getCartCount();
        this.page = 0;
        this.imageList = [];
        this.nn();
    };
    ProductDetailPage.prototype.gotoHome = function () {
        this.router.navigateByUrl('/');
    };
    ProductDetailPage.prototype.ionViewDidEnter = function () {
        document.addEventListener("backbutton", function (e) {
            console.log("disable back button");
        }, false);
    };
    ProductDetailPage.prototype.nn = function () {
        var _this = this;
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
    ProductDetailPage.prototype.addToCart = function () {
        var a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
            a.push(this.product);
        }
        else {
            a = JSON.parse(localStorage.getItem('cartProducts'));
            a.push(this.product);
        }
        console.log('a', a);
        localStorage.setItem('cartProducts', JSON.stringify(a));
        this.cartBadge = a.length;
        this.router.navigateByUrl('/cart-page');
    };
    ProductDetailPage.prototype.goCartPage = function () {
        this.router.navigateByUrl('/cart-page');
    };
    ProductDetailPage.prototype.getCartCount = function () {
        var a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
        }
        else {
            a = JSON.parse(localStorage.getItem('cartProducts'));
        }
        console.log('a', a);
        localStorage.setItem('products', JSON.stringify(a));
        this.cartBadge = a.length;
    };
    ProductDetailPage.prototype.wishlist = function (product) {
        if (!product.wish) {
            product.wish = true;
        }
        else {
            product.wish = false;
        }
        console.log("product", product);
    };
    ProductDetailPage.prototype.shopPage = function () {
        this.router.navigateByUrl('/shop-page');
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