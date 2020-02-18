(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-page-shop-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shop-page/shop-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shop-page/shop-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title >\n        <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n          style=\"width: 55%;vertical-align: text-bottom;\" />\n      </ion-title>\n    <!-- <ion-title>shop-page</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher>\n    <!-- <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"filterItems($event)\"></ion-searchbar> -->\n\n    <div style=\"width: 100%;display: flex;padding: 10px;\">\n        <ion-input style=\"border: solid 1px #A88FB6;height: 40px;\" type=\"text\" debounce=\"500\"  placeholder=\"Search\" (ionInput)=\"filterItems($event)\"></ion-input>\n        <div style=\"width: 10%;\n        background: #A88FB6;\n        border: solid 1px #A88FB6;\n        display: flex;\n        align-items: center;\n        justify-content: center;\">\n          <ion-icon name=\"search\" ></ion-icon>\n        </div>\n      </div>\n      \n  <h4 style=\"text-align: center;\">{{this.categoryType ? this.categoryType.header : 'Shop Page' }}</h4>\n  <ion-row style=\"padding-top:10px; padding-right: 10px;\" *ngIf=\"productList.length\">\n    <ion-col style=\"padding-left: 10px !important;padding-right: 0 !important;padding-top:0 !important\" sizeLg=\"4\"\n      sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let product of productList\" class=\"animated fadeIn\">\n      <ion-card  class=\"m0\">\n        <img [src]=\"product.image.src\" style=\"height: 185px !important\" (click)=\"productDetail(product)\" />\n\n        <ion-card-header style=\"padding-top: 0px;padding-bottom: 0;\">\n          <ion-card-title>\n            <h6 style=\"margin-bottom: -10px;\" >{{product.title}}\n            </h6>\n          </ion-card-title>\n          <ion-card-subtitle>\n            <ion-row>\n\n              <ion-col size=\"12\" style=\"padding-left: 0 !important;\n            padding-right: 0 !important;\">\n                <label style=\"color:black\"><strong>{{product.variants[0].price | currency}}</strong></label>\n              </ion-col>\n            </ion-row>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll threshold=\"1%\" (ionInfinite)=\"loadData($event)\" *ngIf=\"!search\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n      >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf=\"!productList.length && getResponse\" style=\"display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n  \">\n    <h5 style=\"margin:0\">Sorry No data Found</h5>\n    <img src=\"https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=338&ext=jpg\"/>\n    <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"productBycategory()\">Try Again</ion-button>\n  </div>\n</ion-content>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtcGFnZS9zaG9wLXBhZ2UucGFnZS5zY3NzIn0= */"

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