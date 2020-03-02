(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" />\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\" (click)=\"goCartPage()\"></ion-icon>\n      <ion-badge color=\"success\" style=\"    border-radius: 35px;\n      background: #af7ddc;\n  width: 20px;\n  margin-top: -11px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\">{{cartBadge}}</ion-badge>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <!-- <ion-searchbar animated (keydown.enter)=\"onKeydown($event)\" class=\"animated bounceInDown\"></ion-searchbar> -->\n  <div class=\"search-bar\">\n    <ion-input placeholder=\"Search\"></ion-input>\n    <div class=\"search-icon\">\n      <ion-icon name=\"search\"></ion-icon>\n    </div>\n    \n  </div>\n  <div style=\"display: flex;font-size: 0.68em;color: grey;justify-content: space-around;margin-bottom: 10px; margin-top: -5px\">\n    <div>look For:</div>\n    <div style=\"text-decoration: underline;\" (click)=\"goToShopPage('')\">nose rings</div>\n    <div style=\"text-decoration: underline;\" (click)=\"goToShopPage('')\">cartiliage earrings</div>\n    <div style=\"text-decoration: underline;\" (click)=\"goToShopPage('')\">barbells</div>\n    <div style=\"text-decoration: underline;\" (click)=\"goToShopPage('')\">septum</div>\n\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"border-top: 2px solid #a88fb6;\">\n    <ion-slide *ngFor=\"let item of slide\">\n      <ion-card style=\"width: 100%;height:240px;\">\n        <img [src]=\"item.image\" style=\"height: 100%;\">\n        \n        <div class=\"over\">\n          \n        </div>\n        <div style=\"display: flex;\n          flex-direction: column;\">\n          <h3 class=\"animated fadeInRight\">\n            {{item.text}}\n          </h3>\n          <p style=\"margin: 0;\">{{item.subtext}}</p>\n        </div>\n      </ion-card>\n     \n    </ion-slide>\n  </ion-slides>\n  <!-- Categories Section Start -->\n  <div class=\"categories-secion\">\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let cat of categories;index as index\">\n        <ion-card >\n          <img [src]=\"cat.bimg\" (click)=\"goToShopPage(cat)\" class=\"cat-img\" />\n          <div class=\"cat-over\">\n          \n          </div>\n          <div class=\"cat-text\" (click)=\"goToShopPage(cat)\">\n            <h4 (click)=\"goToShopPage(cat)\">\n              {{cat.text}}\n            </h4>\n          </div>\n          \n        </ion-card>\n        \n      </ion-col>\n      <!-- </ng-container> -->\n    </ion-row>\n  </div>\n  <!-- categories section End -->\n\n\n  <!-- Favourite Section Start -->\n  <div class=\"favourite-section\">\n    <ion-text>\n      <h2>\n        Piercing Jewelry Favorites\n      </h2>\n    </ion-text>\n    <ion-card>\n      <img src=\"https://cdn.shopify.com/s/files/1/2395/3423/files/cabochon-post-image-1_540x.jpg?v=1579718384\" />\n      <ion-card-header>\n        <ion-card-subtitle>New Piercing Jewelry</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>Versatile Flat Back Studs</strong></em>- Fresh off the bench are these darling cabochon gemstone\n        cartilage earrings in genuine Pearl,\n        Onyx, Amethyst and Turquoise. Wear in your ear piercings, lip, or even nose piercing.\n        <br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n\n      <img\n        src=\"https://cdn.shopify.com/s/files/1/2395/3423/files/Twist-2.5mm_Perfect_Diamond_Flush_Bezel_Nose_Ring_Stud_8_540x.jpg?v=1579718405\" />\n      <ion-card-header>\n        <ion-card-subtitle>The Perfect Diamond Nose Ring</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>Diamonds Are Forever </strong></em>- Featuring a 2.5mm VS1 diamond,\n        this best-selling diamond nose stud is a must-have.<br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n\n      <img\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnMtmi6OV9sj0Q6s-o59h2Vfhsjhw8bGbP1KYEfwkfysee-Rg0\" />\n      <ion-card-header>\n        <ion-card-subtitle>Diamond Hoops</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>The Perfect Valentine's Gift</strong></em> - These\n        seamless hoops feature VS1 diamonds and are great for a variety of piercings\n        like nose, cartilage ear piercings, nipple, and more.<br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- favourite section End -->\n\n\n  <!-- Start of Bottom -->\n\n  <!-- end of bottom -->\n</ion-content>\n<ion-tab-bar slot=\"bottom\" style=\"--background: #a37bb9;\">\n  <ion-tab-button tab=\"schedule\" style=\"color:white\">\n    <ion-icon name=\"home\"></ion-icon>\n    <ion-label>Home</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button tab=\"map\" style=\"color:white\">\n    <ion-icon name=\"grid\"></ion-icon>\n    <ion-label>Collection</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"about\" style=\"color:white\">\n    <ion-icon name=\"person\"></ion-icon>\n    <ion-label>Profile</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\nion-content .search-bar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n  border-top: 1px solid #a88fb6;\n}\nion-content .search-bar ion-input {\n  border: solid 1px #A88FB6;\n  height: 40px;\n}\nion-content .search-bar .search-icon {\n  width: 10%;\n  background: #A88FB6;\n  border: solid 1px #A88FB6;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content ion-slides ion-slide ion-card {\n  height: 240px;\n  margin: 0;\n  border-radius: 0;\n}\nion-content ion-slides ion-slide ion-card div {\n  height: 240px;\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n  bottom: 0%;\n  font-weight: bold;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content ion-slides ion-slide ion-card div h3 {\n  color: white;\n}\nion-content ion-slides ion-slide ion-card div p {\n  color: white;\n}\nion-content ion-slides ion-slide ion-card .over {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 240px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #000;\n  opacity: 0.1;\n}\nion-content .categories-secion {\n  margin-top: 20px;\n}\nion-content .categories-secion ion-row {\n  padding-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\nion-content .categories-secion ion-row ion-col {\n  padding-bottom: 0;\n  padding-left: 20px !important;\n  padding-right: 0 !important;\n  padding-top: 0 !important;\n  margin-bottom: 20px;\n}\nion-content .categories-secion ion-row ion-col ion-card {\n  margin: 5px;\n  border-radius: 0;\n  margin: 0;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-img {\n  height: 120px !important;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-over {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #000;\n  opacity: 0.1;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-text {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .categories-secion ion-row ion-col h4 {\n  color: white;\n}\nion-content .favourite-section {\n  padding: 10px;\n}\nion-content .favourite-section ion-text h2 {\n  text-transform: uppercase;\n  font-size: 1.1875em;\n  text-align: center;\n}\nion-content .favourite-section ion-card {\n  box-shadow: none;\n  border-radius: 0;\n  margin-top: 15px !important;\n}\nion-content .favourite-section ion-card ion-card-header {\n  padding-left: 0;\n  padding-right: 0;\n}\nion-content .favourite-section ion-card ion-card-header ion-card-subtitle {\n  font-size: 15px;\n}\nion-content .favourite-section ion-card ion-card-content {\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 25px;\n}\nion-content .favourite-section ion-card ion-card-content em {\n  font-size: 14px;\n}\nion-content .favourite-section ion-card ion-card-content ion-button {\n  margin-left: 0;\n}\nion-slides {\n  --bullet-background: white;\n  --bullet-background-active: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FERU07RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUNBUjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRE47QURRRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7QUNOSjtBRE9JO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDTE47QURPSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNMTjtBRFdNO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEVVE7RUFDQSxhQUFBO0VBRUUsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDWFY7QURZVTtFQUNFLFlBQUE7QUNWWjtBRFlVO0VBQ0UsWUFBQTtBQ1ZaO0FEYVE7RUFDRSxXQUFBO0VBQ0Ysa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1hSO0FEa0JFO0VBQ0UsZ0JBQUE7QUNoQko7QURpQkk7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDZk47QURnQk07RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDZFI7QURlUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNiVjtBRGNVO0VBQ0Usd0JBQUE7QUNaWjtBRGNVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNaWjtBRGNVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNaWjtBRGdCUTtFQUNFLFlBQUE7QUNkVjtBRG9CRTtFQUNFLGFBQUE7QUNsQko7QURvQk07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QURxQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNuQk47QURvQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQlI7QURtQlE7RUFDRSxlQUFBO0FDakJWO0FEb0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNsQlI7QURtQlE7RUFDRSxlQUFBO0FDakJWO0FEbUJRO0VBQ0UsY0FBQTtBQ2pCVjtBRDBCQTtFQUNFLDBCQUFBO0VBQ0EsaUNBQUE7QUN2QkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgaW9uLXRvb2xiYXJ7XG4gICAgaW9uLXRpdGxle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b25ze1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudHtcblxuICAuc2VhcmNoLWJhcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhODhmYjY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhODhmYjY7XG4gICAgaW9uLWlucHV0e1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0E4OEZCNjtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLnNlYXJjaC1pY29ue1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNBODhGQjY7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICBpb24tc2xpZGVze1xuICAgIGlvbi1zbGlkZXtcbiAgICAgIGlvbi1jYXJke1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGRpdntcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcblxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgaDN7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3ZlcntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAuY2F0ZWdvcmllcy1zZWNpb257XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBpb24tcm93e1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGlvbi1jb2x7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOjAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAuY2F0LWltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhdC1vdmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXQtdGV4dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDR7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZhdm91cml0ZS1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaW9uLXRleHR7XG4gICAgICBoMntcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjE4NzVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgZW17XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICAgIFxuICAgIH1cbiAgfVxuICBcbn1cblxuaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogd2hpdGU7XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGltZyB7XG4gIHdpZHRoOiA1NSU7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQgLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhODhmYjY7XG59XG5pb24tY29udGVudCAuc2VhcmNoLWJhciBpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5pb24tY29udGVudCAuc2VhcmNoLWJhciAuc2VhcmNoLWljb24ge1xuICB3aWR0aDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjQTg4RkI2O1xuICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgZGl2IHtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGRpdiBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGRpdiBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgLm92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4xO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiBpb24tcm93IHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgLmNhdC1pbWcge1xuICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIC5jYXQtb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAwLjE7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIC5jYXQtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLXRleHQgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMTg3NWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HomePage = /** @class */ (function () {
    // Categories Defines To show Category in front Dynamically End
    function HomePage(auth, router) {
        this.auth = auth;
        this.router = router;
        this.shows = false;
        this.cartBadge = 0;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
            loop: true,
        };
        this.slide = [
            { id: 1, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg',
                text: 'Gold Flat-back Studs', subtext: 'for ear, lip, and nose piercings' },
            { id: 2, image: 'https://cdn.shopify.com/s/files/1/2395/3423/files/fine-body-jewelry-pink2_540x.jpg?v=1578795695%20540w',
                text: ' Diamond Nose Rings', subtext: 'handmade just for you' },
        ];
        // Categories Defines To show Category in front Dynamically Start
        this.categories = [
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/201912-ear-party_360x.jpg?v=1579718481',
                text: 'CARTILAGE EARRINGS',
                category: 'Cartilage',
                header: 'Cartilage Earrings & Piercing Jewelry',
            },
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/double-princess-cut-14k-gold-belly-ring_7_720x.jpg?v=1579718501',
                text: 'BELLY BUTTON RINGS',
                category: 'button',
                header: 'Belly Button Rings',
            },
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/nose-ring-group-5b-web_720x.jpg?v=1561424823',
                text: 'NOSE RINGS', category: 'nose',
                header: 'Nose Rings - 14k Gold & Diamond Nose Rings',
            },
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/straight-barbells_720x.jpg?v=1561424779',
                text: 'NIPPLE RINGS & BARBELLS', category: 'nippleRings',
                header: 'Nipple Rings & Piercing Jewelry',
            },
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/gold-plugs-group-concept-1_720x.jpg?v=1579718545',
                text: 'PLUGS & TUNNELS', category: 'plugg',
                header: 'Ear Plugs, Tunnels & Gauges',
            },
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/four-diamonds-seamless-ring-hoop-Font-facing-1-rose-67K_720x.jpg?v=1579718566',
                text: 'HOOPS & CAPTIVES', category: 'Necklace',
                header: 'Hoops - Captives - Clickers'
            },
        ];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var datas;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getCartCount();
                        return [4 /*yield*/, this.auth.newApi().subscribe(function (datar) {
                                console.log("this.newProducts", datar);
                            })];
                    case 1:
                        datas = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToShopPage = function (category) {
        // this.router.navigateByUrl('/shop-page');
        if (category) {
            var navigationExtras = {
                queryParams: {
                    special: JSON.stringify(category)
                }
            };
            this.router.navigate(['shop-page'], navigationExtras);
        }
        else {
            this.router.navigateByUrl('/shop-page');
        }
    };
    HomePage.prototype.onScroll = function (event) {
        var hi = event.detail.scrollTop;
        // console.log('scroll event scrollTop', event.detail.scrollTop);
        // console.log('content', this.content);
        // if (event.detail.deltaY > 0) {
        //   console.log("scrolling down, hiding footer...");
        // } else {
        //   console.log("scrolling up, revealing footer...");
        // };
    };
    ;
    HomePage.prototype.goCartPage = function () {
        this.router.navigateByUrl('/cart-page');
    };
    HomePage.prototype.getCartCount = function () {
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
    HomePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], HomePage.prototype, "content", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map