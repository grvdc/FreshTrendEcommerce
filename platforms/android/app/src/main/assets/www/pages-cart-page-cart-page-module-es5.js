(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-page-cart-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart-page/cart-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart-page/cart-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title >\n        <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n          style=\"width: 55%;vertical-align: text-bottom;\" />\n      </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-icon name=\"cart\"></ion-icon>\n  \n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n    <div *ngIf=\"skeleton\">\n        <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </div>\n\n\n     \n     \n  <div class=\"list-item-div\" *ngIf=\"!skeleton && cartItems.length\">\n    <ion-list>\n      \n      <ion-card *ngFor=\"let item of cartItems; index as index\" style=\"box-shadow: none;border-bottom: solid 2px #d4a7d4;\n      padding-bottom: 20px;\">\n      \n        <div class=\"tt\">\n\n          <ion-thumbnail slot=\"start\" class=\"list-thumb\" (click)=\"goToProductDetailPage(item.id)\">\n            <img [src]=\"item.image.src\">\n            <div Style=\"width: 100%;\n            padding-top: 0;\n            text-align: right;\n            position: absolute;\n            z-index: 99;\n            /* bottom: 31%; */\n            opacity: 0.5;\n            top: 0px;\n            color: #020202;\n            font-weight: bold;\n            /* background-color: #dc0000; */\n            left: 0%;\n            padding-right: 10px;\n            font-size: 20px;\" ><ion-icon name=\"close\" (click)=\"removeItemFromPage()\"></ion-icon></div>\n          </ion-thumbnail>\n          <div class=\"detail-section\">\n            <ion-row >\n              <ion-col class=\"col-title\" size=\"12\">\n                <h5 style=\"font-size: 16px;font-weight: 800;color: #4c4c4c;\">{{item.title}}</h5>\n              </ion-col>\n              <ion-col  size=\"12\">\n                <p class=\"price-p\">Metal color.  {{item.options[0].values[0]}}</p>\n              </ion-col>\n              <ion-col size=\"12\">\n                <p >Guage. {{item.variants[0].grams}}G</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"action-section\">\n                <ion-col size=\"8\" class=\"qty-section\" style=\"justify-content: start !important;\">\n                    <div style=\"height: 25px; width: 100px;justify-content: space-around;background: #ececec;\">\n                      <ion-icon name=\"remove\" (click)=\"removeQty(item,index)\"></ion-icon>\n                      <ion-label style=\"width: 35px;\">{{qty}}</ion-label>\n                      <!-- <ion-label>{{item.productQuantity>-1?item.productQuantity:1}}</ion-label> -->\n                      <ion-icon name=\"add\" (click)=\"addQty(item,index)\" ></ion-icon>\n                    </div>\n                  </ion-col>\n              <ion-col size=\"4\" class=\"trash-section\" style=\"justify-content: flex-end;\">\n                <!-- <ion-icon name=\"trash\" (click)=\"indexFinding(index)\"></ion-icon> -->\n                {{totalAmount | currency}}\n              </ion-col>\n              \n            </ion-row>\n\n          </div>\n        </div>\n        \n      </ion-card>\n\n    </ion-list>\n  </div>\n  <ion-card class=\"checkout-section\" *ngIf=\"!skeleton && cartItems.length\" style=\"box-shadow: none;\">\n    <ion-row >\n      <ion-row>\n        <!-- <ion-col size=\"6\" class=\"left-side-text\">Sub Total</ion-col>\n        <ion-col size=\"6\" class=\"right-side-text\">Rs. {{gtotal}}\n        </ion-col> -->\n        <!-- <ion-col size=\"6\" class=\"left-side-text\">Sub Total ex. Tax</ion-col>\n        <ion-col size=\"6\" class=\"right-side-text\">Rs. 0</ion-col> -->\n        <ion-col size=\"6\" class=\"left-bold\">Subtotal</ion-col> \n        <ion-col size=\"6\" class=\"right-bold\">{{gtotal |currency}}</ion-col>\n        <ion-col size=\"12\" class=\"btn-section\">\n          <ion-button  class=\"checkout-btn\" type=\"submit\" (click)=\"checkOutPage()\">CHECK OUt\n          </ion-button>\n        </ion-col>\n\n\n      </ion-row>\n\n\n    </ion-row>\n  </ion-card>\n\n  <div *ngIf=\"!skeleton && !cartItems.length\">\n      <h5 style=\"text-align: center;\">Your cart is currently empty</h5>\n  </div>\n   \n\n\n</ion-content>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-page.page */ "./src/app/pages/cart-page/cart-page.page.ts");




var routes = [
    {
        path: '',
        component: _cart_page_page__WEBPACK_IMPORTED_MODULE_3__["CartPagePage"]
    }
];
var CartPagePageRoutingModule = /** @class */ (function () {
    function CartPagePageRoutingModule() {
    }
    CartPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CartPagePageRoutingModule);
    return CartPagePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-page-routing.module */ "./src/app/pages/cart-page/cart-page-routing.module.ts");
/* harmony import */ var _cart_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-page.page */ "./src/app/pages/cart-page/cart-page.page.ts");







var CartPagePageModule = /** @class */ (function () {
    function CartPagePageModule() {
    }
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
    return CartPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.footer {\n  padding: 5pt;\n  background-color: rgba(0, 150, 0, 0.8);\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n}\n.item-inner {\n  padding-right: 0px !important;\n}\n.checkout-btn {\n  --color:white;\n  --border-color: purple;\n  --background: purple;\n  width: 100%;\n  --color-activated: #a88fb6;\n}\n.list-item-div {\n  overflow: scroll;\n}\n.list-item-div ion-list {\n  padding-top: 0;\n}\n.list-item-div .tt {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n.list-item-div .tt .list-thumb {\n  width: 50%;\n  height: 0%;\n  margin: 0;\n}\n.list-item-div .tt .detail-section {\n  padding-left: 10px;\n  width: 100%;\n}\n.list-item-div .tt .detail-section ion-row {\n  height: 75%;\n  display: -webkit-box;\n  display: flex;\n}\n.list-item-div .tt .detail-section ion-row .col-title {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n}\n.list-item-div .tt .detail-section ion-row .col-title h5 {\n  text-align: left;\n  margin: 0;\n}\n.list-item-div .tt .detail-section ion-row ion-col {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.list-item-div .tt .detail-section ion-row ion-col .price-p {\n  margin: 0;\n  font-size: 15px;\n  margin-bottom: 2px;\n}\n.list-item-div .tt .detail-section ion-row ion-col p {\n  margin: 0;\n  font-size: 14px;\n}\n.list-item-div .tt .detail-section .action-section {\n  height: 25%;\n  margin-top: 10px;\n}\n.list-item-div .tt .detail-section .action-section .trash-section {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.list-item-div .tt .detail-section .action-section .trash-section ion-icon {\n  color: red;\n  font-size: 18pt;\n}\n.list-item-div .tt .detail-section .action-section .qty-section {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  padding-top: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.list-item-div .tt .detail-section .action-section .qty-section div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: solid 1px grey;\n}\n.list-item-div .tt .detail-section .action-section .qty-section div ion-icon {\n  font-size: 20px;\n}\n.list-item-div .tt .detail-section .action-section .qty-section div ion-label {\n  border-right: solid 1px grey;\n  border-left: solid 1px grey;\n  align-self: center;\n  font-size: 17px;\n  width: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.checkout-section {\n  max-height: 25%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.checkout-section ion-row {\n  width: 100%;\n}\n.checkout-section ion-row .left-side-text {\n  padding-left: 10px;\n  padding-bottom: 0;\n}\n.checkout-section ion-row .right-side-text {\n  text-align: right;\n  padding-bottom: 0;\n  padding-right: 10px;\n}\n.checkout-section ion-row .left-bold {\n  padding-left: 10px;\n  font-weight: 800;\n  font-size: 18px;\n}\n.checkout-section ion-row .right-bold {\n  font-size: 18px;\n  text-align: right;\n  padding-right: 10px;\n  font-weight: 800;\n}\n.checkout-section ion-row .btn-section {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RaO0FERVk7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUNBZDtBREdVO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRFo7QURPQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNJLDZCQUFBO0FDSko7QURNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDSEo7QURLQTtFQUVJLGdCQUFBO0FDSEo7QURJSTtFQUNRLGNBQUE7QUNGWjtBRElJO0VBQ1EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZaO0FER1k7RUFDUSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNEcEI7QURHWTtFQUNRLGtCQUFBO0VBQ0EsV0FBQTtBQ0RwQjtBREVvQjtFQUNRLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBNUI7QURFNEI7RUFDUSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtBQ0FwQztBRENvQztFQUNRLGdCQUFBO0VBQ0EsU0FBQTtBQ0M1QztBREU0QjtFQUNRLG9CQUFBO0VBQUEsYUFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQ0RwQztBREVvQztFQUNRLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBNUM7QURJb0M7RUFDUSxTQUFBO0VBQ0EsZUFBQTtBQ0Y1QztBRE9vQjtFQUNRLFdBQUE7RUFDQSxnQkFBQTtBQ0w1QjtBRE00QjtFQUNRLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSnBDO0FES29DO0VBQ1EsVUFBQTtFQUNBLGVBQUE7QUNINUM7QURNNEI7RUFDUSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNKcEM7QURLb0M7RUFDUSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUNINUM7QURJNEM7RUFDUSxlQUFBO0FDRnBEO0FESTRDO0VBQ1EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRnBEO0FEVUE7RUFJSyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDVkw7QURZSTtFQUNRLFdBQUE7QUNWWjtBRFdZO0VBQ1Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RwQjtBRFdZO0VBQ1EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDVHBCO0FEV1k7RUFDUSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1RwQjtBRFdZO0VBQ1EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1RwQjtBRFdZO0VBQ1Esa0JBQUE7RUFDQSxtQkFBQTtBQ1RwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICAgICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbi5mb290ZXJ7XG4gICAgcGFkZGluZzogNXB0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAwLCAuOCk7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDA7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xuIH1cbi5jaGVja291dC1idG57XG4gICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcHVycGxlO1xuICAgIC0tYmFja2dyb3VuZDogcHVycGxlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNhODhmYjY7XG59XG4ubGlzdC1pdGVtLWRpdntcbi8vICAgICBtYXgtaGVpZ2h0Ojc1JTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC50dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC5saXN0LXRodW1ie1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbC1zZWN0aW9ue1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29sLXRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZS1we1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1zZWN0aW9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhc2gtc2VjdGlvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdHktc2VjdGlvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG59XG4uY2hlY2tvdXQtc2VjdGlvbntcbi8vICAgICBwYWRkaW5nOiAwcHg7XG4vLyAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgYm90dG9tOiAwO1xuICAgICBtYXgtaGVpZ2h0OiAyNSU7XG4gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBpb24tcm93e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAubGVmdC1zaWRlLXRleHR7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQtc2lkZS10ZXh0e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlZnQtYm9sZHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQtYm9sZHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tc2VjdGlvbntcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogNXB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMCwgMC44KTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tvdXQtYnRuIHtcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgLS1iYWNrZ3JvdW5kOiBwdXJwbGU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2E4OGZiNjtcbn1cblxuLmxpc3QtaXRlbS1kaXYge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmxpc3QtaXRlbS1kaXYgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmxpc3QtdGh1bWIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDAlO1xuICBtYXJnaW46IDA7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gaW9uLXJvdyB7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiBpb24tcm93IC5jb2wtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gaW9uLXJvdyAuY29sLXRpdGxlIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiBpb24tcm93IGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIGlvbi1yb3cgaW9uLWNvbCAucHJpY2UtcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIGlvbi1yb3cgaW9uLWNvbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIC5hY3Rpb24tc2VjdGlvbiB7XG4gIGhlaWdodDogMjUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiAuYWN0aW9uLXNlY3Rpb24gLnRyYXNoLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gLmFjdGlvbi1zZWN0aW9uIC50cmFzaC1zZWN0aW9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxOHB0O1xufVxuLmxpc3QtaXRlbS1kaXYgLnR0IC5kZXRhaWwtc2VjdGlvbiAuYWN0aW9uLXNlY3Rpb24gLnF0eS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIC5hY3Rpb24tc2VjdGlvbiAucXR5LXNlY3Rpb24gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbn1cbi5saXN0LWl0ZW0tZGl2IC50dCAuZGV0YWlsLXNlY3Rpb24gLmFjdGlvbi1zZWN0aW9uIC5xdHktc2VjdGlvbiBkaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubGlzdC1pdGVtLWRpdiAudHQgLmRldGFpbC1zZWN0aW9uIC5hY3Rpb24tc2VjdGlvbiAucXR5LXNlY3Rpb24gZGl2IGlvbi1sYWJlbCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggZ3JleTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNoZWNrb3V0LXNlY3Rpb24ge1xuICBtYXgtaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uY2hlY2tvdXQtc2VjdGlvbiBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hlY2tvdXQtc2VjdGlvbiBpb24tcm93IC5sZWZ0LXNpZGUtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uY2hlY2tvdXQtc2VjdGlvbiBpb24tcm93IC5yaWdodC1zaWRlLXRleHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uY2hlY2tvdXQtc2VjdGlvbiBpb24tcm93IC5sZWZ0LWJvbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jaGVja291dC1zZWN0aW9uIGlvbi1yb3cgLnJpZ2h0LWJvbGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmNoZWNrb3V0LXNlY3Rpb24gaW9uLXJvdyAuYnRuLXNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var CartPagePage = /** @class */ (function () {
    function CartPagePage(router, auth) {
        this.router = router;
        this.auth = auth;
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
    }
    CartPagePage.prototype.ngOnInit = function () {
    };
    CartPagePage.prototype.ionViewWillEnter = function () {
        var a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
        }
        else {
            this.totalAmount = 0;
            a = JSON.parse(localStorage.getItem('cartProducts'));
        }
        // localStorage.setItem('products', JSON.stringify(a));
        this.cartItems = a;
        console.log('cartItems', this.cartItems);
        this.skeleton = false;
        // this.auth.newApi().subscribe(data_ => {
        //   if (data_) {
        //     this.skeleton = false;
        //     data_['products'].map(item => {
        //       if (item.image && item.image.src) {
        //         this.oldproductsList.push(item);
        //       }
        //     })
        //   }
        // this.cartItems=this.oldproductsList;
        // console.log(this.cartItems,'this.cartItems')
        //   console.log('odf',this.oldproductsList);
        //   this.totalAmount= this.cartItems[0]['variants'][0].price;
        //   this.gtotal = this.totalAmount;
        // })
    };
    CartPagePage.prototype.addQty = function () {
        this.qty = this.qty + 1;
        this.gtotal = this.qty * this.totalAmount;
    };
    CartPagePage.prototype.removeQty = function () {
        this.qty = this.qty - 1;
        this.gtotal = this.qty * this.totalAmount;
    };
    CartPagePage.prototype.removeItemFromPage = function () {
        this.cartItems = [];
    };
    CartPagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    CartPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__(/*! raw-loader!./cart-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart-page/cart-page.page.html"),
            styles: [__webpack_require__(/*! ./cart-page.page.scss */ "./src/app/pages/cart-page/cart-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CartPagePage);
    return CartPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-page-cart-page-module-es5.js.map