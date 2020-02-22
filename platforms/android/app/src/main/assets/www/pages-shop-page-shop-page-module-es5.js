(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-page-shop-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shop-page/shop-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shop-page/shop-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title >\n        <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n          style=\"width: 55%;vertical-align: text-bottom;\" />\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-icon name=\"cart\" (click)=\"goCartPage()\"></ion-icon>\n  \n      </ion-buttons>\n    <!-- <ion-title>shop-page</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher>\n    <!-- <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"filterItems($event)\"></ion-searchbar> -->\n\n    <div style=\"width: 100%;display: flex;padding: 10px;\">\n        <ion-input style=\"border: solid 1px #A88FB6;height: 40px;\" type=\"text\" debounce=\"500\"  placeholder=\"Search\" (ionInput)=\"filterItems($event)\"></ion-input>\n        <div style=\"width: 10%;\n        background: #A88FB6;\n        border: solid 1px #A88FB6;\n        display: flex;\n        align-items: center;\n        justify-content: center;\">\n          <ion-icon name=\"search\" ></ion-icon>\n        </div>\n      </div>\n\n      <div style=\"display: flex;font-size: 0.68em;color: grey;justify-content: space-around;margin-bottom: 10px; margin-top: -5px\">\n        <div>look For:</div>\n        <div style=\"text-decoration: underline;\">nose rings</div>\n        <div style=\"text-decoration: underline;\">cartiliage earrings</div>\n        <div style=\"text-decoration: underline;\">barbells</div>\n        <div style=\"text-decoration: underline;\">septum</div>\n    \n      </div>\n      \n  <h4 style=\"    text-align: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-top: 2px solid #a88fb6;\n  padding-top: 10px;\">{{this.categoryType ? this.categoryType.header : 'Shop Page' }}</h4>\n  \n \n  \n   <ion-row style=\"padding-top:10px; padding-right: 10px;\" *ngIf=\"productList.length\">\n    <ion-col style=\"padding-left: 10px !important;padding-right: 0 !important;padding-top:0 !important\" sizeLg=\"4\"\n      sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let product of productList\" class=\"animated fadeIn\">\n      <ion-card  class=\"m0\">\n        <img [src]=\"product.image.src\" style=\"height: 185px !important\" (click)=\"productDetail(product)\" />\n        <div style=\" width: 100%;\n        padding-top: 5%;\n        text-align: center;\n        position: absolute;\n        z-index: 99;\n        /* bottom: 31%; */\n        opacity: 0.5;\n        top: 0px;\n        color: white;\n        font-weight: bold;\n        /* background-color: #dc0000; */\n        left: -40%;\n        font-size:20px;\n        \"><ion-icon name=\"heart\" style=\"color:rgb(155, 87, 177)\" (click)=\"wishlist(product.id)\" [ngClass]=\"{wish: product.wish}\"></ion-icon></div>\n        <ion-card-header style=\"padding-top: 0px;padding-bottom: 0; text-align: center;\">\n          <div *ngIf=\"product.options[0].name == 'Metal Color'\" style=\"width: 100%;    display: flex;   justify-content: center; align-content: center;\">\n              <div style=\"opacity: 0.7;width: 15px;height: 15px; background: #f3a800;border-radius: 50%;margin: 3px;\"></div>\n              <div style=\"opacity: 0.7;width: 15px;height: 15px; background: #d2d2d2;border-radius: 50%;margin: 3px;\"></div>\n              <div style=\"opacity: 0.7;width: 15px;height: 15px; background: #ffa793;border-radius: 50%;margin: 3px;\"> </div>\n          </div>\n          <ion-card-subtitle>\n            <h6 style=\"margin-bottom: -10px;word-wrap: break-word;\n            overflow: hidden;\n            max-height: 2.4em;\n            line-height: 1.2em;\n           font-weight: 700 !important;color: black;\" >{{product.title}}\n            </h6>\n          </ion-card-subtitle>\n          <ion-card-subtitle>\n            <ion-row style=\"margin-top: 20px;\">\n\n              <ion-col size=\"12\" style=\"padding-left: 0 !important;\n            padding-right: 0 !important;\">\n                <label style=\"color:black\">{{product.variants[0].price | currency}}</label>\n              </ion-col>\n            </ion-row>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n      </ion-card>\n    </ion-col>\n  </ion-row>\n \n \n \n  <ion-infinite-scroll threshold=\"1%\" (ionInfinite)=\"loadData($event)\" *ngIf=\"!search\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n      >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf=\"!productList.length && getResponse\" style=\"display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n  \">\n    <h5 style=\"margin:0\">Sorry No data Found</h5>\n    <img src=\"https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=338&ext=jpg\"/>\n    <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"productBycategory()\">Try Again</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/shop-page/shop-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/shop-page/shop-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShopPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPagePageRoutingModule", function() { return ShopPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shop_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-page.page */ "./src/app/pages/shop-page/shop-page.page.ts");




var routes = [
    {
        path: '',
        component: _shop_page_page__WEBPACK_IMPORTED_MODULE_3__["ShopPagePage"]
    }
];
var ShopPagePageRoutingModule = /** @class */ (function () {
    function ShopPagePageRoutingModule() {
    }
    ShopPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShopPagePageRoutingModule);
    return ShopPagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shop-page/shop-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/shop-page/shop-page.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPagePageModule", function() { return ShopPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-page-routing.module */ "./src/app/pages/shop-page/shop-page-routing.module.ts");
/* harmony import */ var _shop_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-page.page */ "./src/app/pages/shop-page/shop-page.page.ts");







var ShopPagePageModule = /** @class */ (function () {
    function ShopPagePageModule() {
    }
    ShopPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shop_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopPagePageRoutingModule"]
            ],
            declarations: [_shop_page_page__WEBPACK_IMPORTED_MODULE_6__["ShopPagePage"]]
        })
    ], ShopPagePageModule);
    return ShopPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/shop-page/shop-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/shop-page/shop-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL3BhZ2VzL3Nob3AtcGFnZS9zaG9wLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaG9wLXBhZ2Uvc2hvcC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FERVE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUNBVjtBREdNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wLXBhZ2Uvc2hvcC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICBpb24tdGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/shop-page/shop-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/shop-page/shop-page.page.ts ***!
  \***************************************************/
/*! exports provided: ShopPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPagePage", function() { return ShopPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ShopPagePage = /** @class */ (function () {
    function ShopPagePage(auth, router, route, loadingController, platform) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.platform = platform;
        this.productList = [];
        this.getResponse = false;
        this.oldproductsList = [];
        this.length = 7;
        this.search = false;
        this.platform.backButton.subscribe(function () {
            console.log("testbk");
        });
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.categoryType = JSON.parse(params.special);
                console.log("Category from Home page", _this.categoryType);
                _this.productBycategory();
            }
            else {
                _this.getProduct();
            }
        });
    }
    ShopPagePage.prototype.ngOnInit = function () {
    };
    ShopPagePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ShopPagePage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    ShopPagePage.prototype.getProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait!',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.productList = [];
                        this.auth.newApi().subscribe(function (data_) {
                            if (data_) {
                                _this.getResponse = true;
                                loading.dismiss();
                                data_['products'].map(function (item) {
                                    if (item.image && item.image.src) {
                                        _this.productList.push(item);
                                        _this.oldproductsList.push(item);
                                    }
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopPagePage.prototype.productBycategory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getResponse = false;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait!',
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.auth.getProductsByCategories(this.categoryType.category).subscribe(function (data_) {
                            if (data_) {
                                loading.dismiss();
                                _this.getResponse = true;
                                // this.productList = data_['products'];
                                _this.id = setInterval(function () { return _this.anitest(); }, 120);
                                _this.oldproductsList = data_['products'];
                                // this.oldproductsList['titleLength'] =  this.oldproductsList['title'].split(' ').length;
                                // console.log('this.oldproductsList',this.oldproductsList['title'].split(' ').length);
                                _this.oldproductsList.map(function (item) {
                                    item.titleLength = item.title.split(' ').length;
                                });
                                console.log('this.oldproductsList', _this.oldproductsList);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopPagePage.prototype.anitest = function () {
        var length = this.productList.length;
        if (this.length != length) {
            if (length < this.oldproductsList.length) {
                this.productList.push(this.oldproductsList[length]);
            }
            else {
                clearInterval(this.id);
                this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
            }
        }
        else {
            clearInterval(this.id);
        }
    };
    ShopPagePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.length = _this.length + 8;
            _this.id = setInterval(function () { return _this.anitest(); }, 210);
            event.target.complete();
            if (_this.productList.length == _this.oldproductsList.length) {
                event.target.disabled = true;
            }
        }, 700);
    };
    ShopPagePage.prototype.productDetail = function (product) {
        localStorage.setItem('products', JSON.stringify(product));
        console.log("click PRoduct", product);
        var navigationExtras = {
            queryParams: {
                productFromShopPage: JSON.stringify(product)
            }
        };
        this.router.navigate(['product-detail'], navigationExtras);
    };
    ShopPagePage.prototype.filterItems = function (ev) {
        if (ev.target.value !== '') {
            this.search = true;
        }
        else {
            this.search = false;
        }
        console.log("this.oldproductsList;", this.oldproductsList);
        this.productList = this.oldproductsList;
        var searchTerm = ev.target.value;
        this.productList = this.productList.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
        console.log("this.productList;", this.productList);
    };
    ShopPagePage.prototype.goCartPage = function () {
        this.router.navigateByUrl('/cart-page');
    };
    ShopPagePage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('IonInfiniteScroll', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], ShopPagePage.prototype, "infiniteScroll", void 0);
    ShopPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-page',
            template: __webpack_require__(/*! raw-loader!./shop-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/shop-page/shop-page.page.html"),
            styles: [__webpack_require__(/*! ./shop-page.page.scss */ "./src/app/pages/shop-page/shop-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], ShopPagePage);
    return ShopPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-shop-page-shop-page-module-es5.js.map