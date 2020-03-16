(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-page-cart-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart-page/cart-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart-page/cart-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=gotoHome()>\n        <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n          style=\"width: 55%;vertical-align: text-bottom;\" />\n      </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-icon name=\"cart\"></ion-icon>\n  \n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n    <div *ngIf=\"skeleton\">\n        <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </div>\n\n\n     \n     \n  <div class=\"list-item-div\" *ngIf=\"!skeleton && cartItems.length\">\n    <ion-list>\n      \n      <ion-card *ngFor=\"let item of cartItems; index as index\" style=\"box-shadow: none;border-bottom: solid 2px #d4a7d4;\n      padding-bottom: 20px;\">\n      \n        <div class=\"tt\">\n\n          <ion-thumbnail slot=\"start\" class=\"list-thumb\" (click)=\"goToProductDetailPage(item.id)\">\n            <img [src]=\"item.image.src\">\n            <div Style=\"width: 100%;\n            padding-top: 0;\n            text-align: right;\n            position: absolute;\n            z-index: 99;\n            /* bottom: 31%; */\n            opacity: 0.5;\n            top: 0px;\n            color: #020202;\n            font-weight: bold;\n            /* background-color: #dc0000; */\n            left: 0%;\n            padding-right: 10px;\n            font-size: 20px;\" ><ion-icon name=\"close\" (click)=\"indexFinding(index)\"></ion-icon></div>\n          </ion-thumbnail>\n          <div class=\"detail-section\">\n            <ion-row >\n              <ion-col class=\"col-title\" size=\"12\">\n                <h5 style=\"font-size: 16px;font-weight: 800;color: #4c4c4c;\">{{item.title}}</h5>\n              </ion-col>\n              <ion-col  size=\"12\">\n                <p class=\"price-p\">Metal color.  {{item.options[0].values[0]}}</p>\n              </ion-col>\n              <ion-col size=\"12\">\n                <p >Guage. {{item.variants[0].grams}}G</p>\n              </ion-col>\n              <ion-col size=\"12\">\n                <p >Price. {{item.variants[0].price | currency}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"action-section\">\n                <ion-col size=\"8\" class=\"qty-section\" style=\"justify-content: start !important;\">\n                    <div style=\"height: 25px; width: 100px;justify-content: space-around;background: #ececec;\">\n                      <ion-icon name=\"remove\" (click)=\"removeQty(item,index)\"></ion-icon>\n                      <ion-label style=\"width: 35px;\">{{item.productQuantity}}</ion-label>\n                      <!-- <ion-label>{{item.productQuantity>-1?item.productQuantity:1}}</ion-label> -->\n                      <ion-icon name=\"add\" (click)=\"addQty(item,index)\" ></ion-icon>\n                    </div>\n                  </ion-col>\n              <ion-col size=\"4\" class=\"trash-section\" style=\"justify-content: flex-end;\">\n                <!-- <ion-icon name=\"trash\" (click)=\"indexFinding(index)\"></ion-icon> -->\n                {{item.itemTotal? (item.itemTotal | currency): (item.variants[0].price | currency)}}\n              </ion-col>\n              \n            </ion-row>\n\n          </div>\n        </div>\n        \n      </ion-card>\n\n    </ion-list>\n  </div>\n  <ion-card class=\"checkout-section\" *ngIf=\"!skeleton && cartItems.length\" style=\"box-shadow: none;\">\n    <ion-row >\n      <ion-row>\n        <!-- <ion-col size=\"6\" class=\"left-side-text\">Sub Total</ion-col>\n        <ion-col size=\"6\" class=\"right-side-text\">Rs. {{gtotal}}\n        </ion-col> -->\n        <!-- <ion-col size=\"6\" class=\"left-side-text\">Sub Total ex. Tax</ion-col>\n        <ion-col size=\"6\" class=\"right-side-text\">Rs. 0</ion-col> -->\n        <ion-col size=\"6\" class=\"left-bold\">Subtotal</ion-col> \n        <ion-col size=\"6\" class=\"right-bold\">{{totalAmount |currency}}</ion-col>\n        <ion-col size=\"12\" class=\"btn-section\">\n          <ion-button  class=\"checkout-btn\" type=\"submit\" (click)=\"checkout()\">CHECK OUt\n          </ion-button>\n        </ion-col>\n\n\n      </ion-row>\n\n\n    </ion-row>\n  </ion-card>\n\n  <div *ngIf=\"!skeleton && !cartItems.length\">\n      <h5 style=\"text-align: center;\">Your cart is currently empty</h5>\n  </div>\n   \n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/cart-page/cart-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CartPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPagePageRoutingModule", function() { return CartPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-page.page */ "./src/app/pages/cart-page/cart-page.page.ts");




const routes = [
    {
        path: '',
        component: _cart_page_page__WEBPACK_IMPORTED_MODULE_3__["CartPagePage"]
    }
];
let CartPagePageRoutingModule = class CartPagePageRoutingModule {
};
CartPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.module.ts ***!
  \*****************************************************/
/*! exports provided: CartPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPagePageModule", function() { return CartPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-page-routing.module */ "./src/app/pages/cart-page/cart-page-routing.module.ts");
/* harmony import */ var _cart_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-page.page */ "./src/app/pages/cart-page/cart-page.page.ts");







let CartPagePageModule = class CartPagePageModule {
};
CartPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPagePageRoutingModule"]
        ],
        declarations: [_cart_page_page__WEBPACK_IMPORTED_MODULE_6__["CartPagePage"]]
    })
], CartPagePageModule);



/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.footer {\n  padding: 5pt;\n  background-color: rgba(0, 150, 0, 0.8);\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n}\n.item-inner {\n  padding-right: 0px !important;\n}\n.checkout-btn {\n  --color:white;\n  --border-color: purple;\n  --background: purple;\n  width: 100%;\n  --color-activated: #a88fb6;\n}\n.list-item-div {\n  overflow: scroll;\n}\n.list-item-div ion-list {\n  padding-top: 0;\n}\n.list-item-div .tt {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n.list-item-div .tt .list-thumb {\n  width: 50%;\n  height: 0%;\n  margin: 0;\n}\n.list-item-div .tt .detail-section {\n  padding-left: 10px;\n  width: 100%;\n}\n.list-item-div .tt .detail-section ion-row {\n  height: 75%;\n  display: -webkit-box;\n  display: flex;\n}\n.list-item-div .tt .detail-section ion-row .col-title {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n}\n.list-item-div .tt .detail-section ion-row .col-title h5 {\n  text-align: left;\n  margin: 0;\n}\n.list-item-div .tt .detail-section ion-row ion-col {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.list-item-div .tt .detail-section ion-row ion-col .price-p {\n  margin: 0;\n  font-size: 15px;\n  margin-bottom: 2px;\n}\n.list-item-div .tt .detail-section ion-row ion-col p {\n  margin: 0;\n  font-size: 14px;\n}\n.list-item-div .tt .detail-section .action-section {\n  height: 25%;\n  margin-top: 10px;\n}\n.list-item-div .tt .detail-section .action-section .trash-section {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.list-item-div .tt .detail-section .action-section .trash-section ion-icon {\n  color: red;\n  font-size: 18pt;\n}\n.list-item-div .tt .detail-section .action-section .qty-section {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  padding-top: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.list-item-div .tt .detail-section .action-section .qty-section div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: solid 1px grey;\n}\n.list-item-div .tt .detail-section .action-section .qty-section div ion-icon {\n  font-size: 20px;\n}\n.list-item-div .tt .detail-section .action-section .qty-section div ion-label {\n  border-right: solid 1px grey;\n  border-left: solid 1px grey;\n  align-self: center;\n  font-size: 17px;\n  width: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.checkout-section {\n  max-height: 25%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.checkout-section ion-row {\n  width: 100%;\n}\n.checkout-section ion-row .left-side-text {\n  padding-left: 10px;\n  padding-bottom: 0;\n}\n.checkout-section ion-row .right-side-text {\n  text-align: right;\n  padding-bottom: 0;\n  padding-right: 10px;\n}\n.checkout-section ion-row .left-bold {\n  padding-left: 10px;\n  font-weight: 800;\n  font-size: 18px;\n}\n.checkout-section ion-row .right-bold {\n  font-size: 18px;\n  text-align: right;\n  padding-right: 10px;\n  font-weight: 800;\n}\n.checkout-section ion-row .btn-section {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVVO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRFo7QURFWTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQ0FkO0FER1U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNEWjtBRE9BO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7QUNKSjtBRE9BO0VBQ0ksNkJBQUE7QUNKSjtBRE1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNISjtBREtBO0VBRUksZ0JBQUE7QUNISjtBRElJO0VBQ1EsY0FBQTtBQ0ZaO0FESUk7RUFDUSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRlo7QURHWTtFQUNRLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RwQjtBREdZO0VBQ1Esa0JBQUE7RUFDQSxXQUFBO0FDRHBCO0FERW9CO0VBQ1EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0E1QjtBREU0QjtFQUNRLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0FDQXBDO0FEQ29DO0VBQ1EsZ0JBQUE7RUFDQSxTQUFBO0FDQzVDO0FERTRCO0VBQ1Esb0JBQUE7RUFBQSxhQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDRHBDO0FERW9DO0VBQ1EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0E1QztBRElvQztFQUNRLFNBQUE7RUFDQSxlQUFBO0FDRjVDO0FET29CO0VBQ1EsV0FBQTtFQUNBLGdCQUFBO0FDTDVCO0FETTRCO0VBQ1Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNKcEM7QURLb0M7RUFDUSxVQUFBO0VBQ0EsZUFBQTtBQ0g1QztBRE00QjtFQUNRLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0pwQztBREtvQztFQUNRLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtBQ0g1QztBREk0QztFQUNRLGVBQUE7QUNGcEQ7QURJNEM7RUFDUSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGcEQ7QURVQTtFQUlLLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNWTDtBRFlJO0VBQ1EsV0FBQTtBQ1ZaO0FEV1k7RUFDUSxrQkFBQTtFQUNBLGlCQUFBO0FDVHBCO0FEV1k7RUFDUSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNUcEI7QURXWTtFQUNRLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVHBCO0FEV1k7RUFDUSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVHBCO0FEV1k7RUFDUSxrQkFBQTtFQUNBLG1CQUFBO0FDVHBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgICAgICBpb24tdG9vbGJhcntcbiAgICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuLmZvb3RlcntcbiAgICBwYWRkaW5nOiA1cHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDAsIC44KTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMDtcbn1cblxuLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG4gfVxuLmNoZWNrb3V0LWJ0bntcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG4gICAgLS1iYWNrZ3JvdW5kOiBwdXJwbGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2E4OGZiNjtcbn1cbi5saXN0LWl0ZW0tZGl2e1xuLy8gICAgIG1heC1oZWlnaHQ6NzUlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaW9uLWxpc3R7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgLnR0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLmxpc3QtdGh1bWJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsLXNlY3Rpb257XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2wtdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoNXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlLXB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uLXNlY3Rpb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFzaC1zZWN0aW9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MThwdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF0eS1zZWN0aW9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIH1cbn1cbi5jaGVja291dC1zZWN0aW9ue1xuLy8gICAgIHBhZGRpbmc6IDBweDtcbi8vICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICBib3R0b206IDA7XG4gICAgIG1heC1oZWlnaHQ6IDI1JTtcbiAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGlvbi1yb3d7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUtdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodC1zaWRlLXRleHR7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdC1ib2xke1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodC1ib2xke1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bi1zZWN0aW9ue1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgfVxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogNTUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiA1cHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAwLCAwLjgpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja291dC1idG4ge1xuICAtLWNvbG9yOndoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogcHVycGxlO1xuICAtLWJhY2tncm91bmQ6IHB1cnBsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjYTg4ZmI2O1xufVxuXG4ubGlzdC1pdGVtLWRpdiB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ubGlzdC1pdGVtLWRpdiBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAubGlzdC10aHVtYiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMCU7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiBpb24tcm93IHtcbiAgaGVpZ2h0OiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIGlvbi1yb3cgLmNvbC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiBpb24tcm93IC5jb2wtdGl0bGUgaDUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDA7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIGlvbi1yb3cgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gaW9uLXJvdyBpb24tY29sIC5wcmljZS1wIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gaW9uLXJvdyBpb24tY29sIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gLmFjdGlvbi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIC5hY3Rpb24tc2VjdGlvbiAudHJhc2gtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiAuYWN0aW9uLXNlY3Rpb24gLnRyYXNoLXNlY3Rpb24gaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHQ7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIC5hY3Rpb24tc2VjdGlvbiAucXR5LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gLmFjdGlvbi1zZWN0aW9uIC5xdHktc2VjdGlvbiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiAuYWN0aW9uLXNlY3Rpb24gLnF0eS1zZWN0aW9uIGRpdiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gLmFjdGlvbi1zZWN0aW9uIC5xdHktc2VjdGlvbiBkaXYgaW9uLWxhYmVsIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBncmV5O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2hlY2tvdXQtc2VjdGlvbiB7XG4gIG1heC1oZWlnaHQ6IDI1JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5jaGVja291dC1zZWN0aW9uIGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGVja291dC1zZWN0aW9uIGlvbi1yb3cgLmxlZnQtc2lkZS10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5jaGVja291dC1zZWN0aW9uIGlvbi1yb3cgLnJpZ2h0LXNpZGUtdGV4dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jaGVja291dC1zZWN0aW9uIGlvbi1yb3cgLmxlZnQtYm9sZCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNoZWNrb3V0LXNlY3Rpb24gaW9uLXJvdyAucmlnaHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2hlY2tvdXQtc2VjdGlvbiBpb24tcm93IC5idG4tc2VjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.page.ts ***!
  \***************************************************/
/*! exports provided: CartPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPagePage", function() { return CartPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let CartPagePage = class CartPagePage {
    constructor(router, auth, alertController) {
        this.router = router;
        this.auth = auth;
        this.alertController = alertController;
        this.cartItems = [];
        this.rate = 4;
        this.skeleton = true;
        this.login = '';
        this.address = [];
        this.clientAddress = [];
        this.dummyTotal = 0;
        this.animationClass = "";
        this.oldproductsList = [];
        // new
        this.qty = 1;
        this.totalprice = 0;
    }
    ngOnInit() {
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
        }
        this.cartItems = a;
        console.log('cartItems', this.cartItems);
        this.skeleton = false;
    }
    addQty(item, i) {
        let newamt = 0;
        let float = parseFloat(item.variants[0].price);
        this.totalAmount = this.totalAmount - (item.productQuantity * float);
        item.productQuantity = item.productQuantity + 1;
        newamt = item.productQuantity * float;
        this.totalAmount = this.totalAmount + newamt;
        item.itemTotal = item.productQuantity * item.variants[0].price;
        console.log("cartItems", this.cartItems);
    }
    removeQty(item, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let newamt = 0;
            let float = parseFloat(item.variants[0].price);
            if (item.productQuantity != 1) {
                this.totalAmount = this.totalAmount - (item.productQuantity * float);
                item.productQuantity = item.productQuantity - 1;
                newamt = item.productQuantity * float;
                this.totalAmount = this.totalAmount + newamt;
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Confirm!',
                    message: 'Oops! you can\'t choose the quantity less than 1 if you want then you have to delete this item ',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Okay',
                            handler: () => {
                                this.totalAmount = this.totalAmount - float;
                                this.totalAmount = this.totalAmount - (item.productQuantity * float);
                                this.indexFinding(i);
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                alert.present();
            }
            item.itemTotal = item.productQuantity * item.variants[0].price;
            console.log("cartItems", this.cartItems);
        });
    }
    removeItemFromPage() {
        this.cartItems = [];
    }
    indexFinding(index) {
        this.totalAmount = 0;
        this.cartItems.splice(index, 1);
        this.cartItems.map((item) => {
            item.variants[0].price;
            this.totalAmount = this.totalAmount + parseFloat(item.variants[0].price);
        });
        localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
    }
    checkout() {
        localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
        this.router.navigateByUrl('/after-cart');
    }
    gotoHome() {
        this.router.navigateByUrl('/');
    }
    ionViewDidEnter() {
        document.addEventListener("backbutton", function (e) {
            console.log("disable back button");
        }, false);
    }
};
CartPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CartPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-page',
        template: __webpack_require__(/*! raw-loader!./cart-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart-page/cart-page.page.html"),
        styles: [__webpack_require__(/*! ./cart-page.page.scss */ "./src/app/pages/cart-page/cart-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], CartPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-cart-page-cart-page-module-es2015.js.map