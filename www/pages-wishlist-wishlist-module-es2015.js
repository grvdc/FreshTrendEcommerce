(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wishlist/wishlist.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=gotoHome()>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" />\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\" ></ion-icon>\n      <ion-badge color=\"success\" style=\"    border-radius: 35px;\n      background: #af7ddc;\n  width: 20px;\n  margin-top: -11px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\">9</ion-badge>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"width:100%;height: 50px;\" *ngIf=\"totalItem !== 0\">\n    <ion-row>\n      <ion-col size=\"6\" style=\"padding: 15px;\n      font-size: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\">\n        Wishlist ({{totalItem}})\n      </ion-col>\n      <ion-col size=\"6\" style=\"padding: 15px;\n      display: flex;\n      font-size: 18pt;\n      align-items: center;\n      justify-content: flex-end;\">\n        <ion-badge color=\"light\" style=\"font-size: 20px;margin-right:5px;display: flex;\" (click)=\"gridView()\" [ngStyle]=\"{'background': listView ? '' : '#de6161'}\"><ion-icon name=\"apps\"></ion-icon>\n        </ion-badge>\n        <ion-badge color=\"light\" style=\"font-size: 20px;display: flex;\" (click)=\"toggleListView()\" [ngStyle]=\"{'background': listView ? '#de6161' : ''}\"><ion-icon name=\"list\"></ion-icon>\n        </ion-badge>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row style=\"padding-top:10px; padding-right: 10px;\" >\n    <ion-col style=\"margin-bottom: 10px;padding-left: 10px !important;padding-right: 0 !important;padding-top:0 !important\" sizeLg=\"4\"\n    sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products; index as index\" \n>\n    <ion-card class=\"m0\" >\n      <img [src]=\"item.image.src\" style=\"height: 132px !important;width: 132px !important\" (click)=\"testDetail()\"  />\n      <div style=\" width: 100%;\n      padding-top: 5%;\n      text-align: center; \n      position: absolute;\n      z-index: 99;\n      top: 0px;\n      color: white;\n      font-weight: bold;\n      left: 40%;\n      font-size:20px;\n      \">\n        <ion-icon name=\"trash\" style=\"color:rgb(255, 0, 0)\" ></ion-icon>\n      </div>\n      <ion-card-header style=\"padding-top: 0px;padding-bottom: 0;text-align: center;\">\n        <ion-card-title>\n          <h6 style=\"    margin-bottom: -10px;\n          word-wrap: break-word;\n          overflow: hidden;\n          max-height: 2.4em;\n          line-height: 1.2em;\n          font-weight: 600;\n          color: black;\">{{item.title}}\n          </h6>\n        </ion-card-title>\n        <ion-card-subtitle>\n          <ion-row>\n            <ion-col size=\"12\">\n                {{item.variants[0].title?item.variants[0].title : '' }}\n              \n            </ion-col>\n            <ion-col size=\"12\">\n                {{item.variants[0].price? (item.variants[0].price | currency) : '' }}\n            </ion-col>\n          </ion-row>\n          <ion-button style=\"--background: #3c3c3c;\">Add to Cart</ion-button>\n          <p style=\"font-size: 18px; margin: 5px;\">Remove</p>\n          <!-- <ion-row>\n            <ion-col size=\"8\" style=\"padding-left: 0 !important;    display: flex;\n            align-items: center;\">\n              <label style=\"color:black\"><s style=\"color:grey\">₹ 99/-</s> $ 25</label>\n            </ion-col>\n            <ion-col size=\"4\" style=\"text-align:right;font-size: 16pt;\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\">\n              <ion-icon name=\"cart\" style=\"color:orange\" ></ion-icon>\n            </ion-col>\n          </ion-row> -->\n        </ion-card-subtitle>\n      </ion-card-header>\n     \n    </ion-card>\n  </ion-col>\n  </ion-row> \n\n  <!-- <div swipeAll\n           (swipe)=\"swipeAll($event)\"\n           (swipeleft)=\"swipeLeft($event)\"\n           (swiperight)=\"swipeRight($event)\"\n           (swipeup)=\"swipeUp($event)\"\n           (swipedown)=\"swipeDown($event)\"\n      class=\"animated \" [ngClass]=\"fade\" style=\"height:250px; background:red\"></div> -->\n\n     \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WishlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function() { return WishlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/pages/wishlist/wishlist.page.ts");




const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-routing.module */ "./src/app/pages/wishlist/wishlist-routing.module.ts");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/pages/wishlist/wishlist.page.ts");







let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
    })
], WishlistPageModule);



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.inner {\n  position: absolute;\n  height: 250px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDQVY7QURHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FET0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgaW9uLXRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuXG4gIC5pbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDoyNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogNTUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.ts ***!
  \*************************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WishlistPage = class WishlistPage {
    constructor(router) {
        this.router = router;
        this.totalAmount = 0;
        this.products = [];
        this.fade = "";
        this.totalItem = 0;
    }
    ngOnInit() {
    }
    gotoHome() {
        this.router.navigateByUrl('/');
    }
    ionViewWillEnter() {
        let a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
        }
        else {
            this.totalAmount = 0;
            a = JSON.parse(localStorage.getItem('cartProducts'));
            a.map((item) => {
                item.productQuantity = 1;
                item.itemTotal = item.productQuantity * item.variants[0].price;
                this.totalAmount = this.totalAmount + parseFloat(item.variants[0].price);
            });
            this.cartItems = a;
            this.products = this.cartItems;
            this.totalItem = this.products.length;
            console.log('this.products', this.products);
        }
    }
    swipeLeft(event, index) {
        console.log('Swipe Left', event);
    }
    swipeRight(event, index) {
        console.log('Swipe Right', event);
    }
};
WishlistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.page.html"),
        styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/pages/wishlist/wishlist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WishlistPage);



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module-es2015.js.map