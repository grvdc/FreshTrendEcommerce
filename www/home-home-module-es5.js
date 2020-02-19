(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" />\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\"></ion-icon>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <!-- <ion-searchbar animated (keydown.enter)=\"onKeydown($event)\" class=\"animated bounceInDown\"></ion-searchbar> -->\n  <div class=\"search-bar\">\n    <ion-input placeholder=\"Search\"></ion-input>\n    <div class=\"search-icon\">\n      <ion-icon name=\"search\"></ion-icon>\n    </div>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let item of slide\">\n      <ion-card>\n        <img [src]=\"item.image\">\n        \n        <div class=\"over\">\n          \n        </div>\n        <div>\n          <h3 class=\"animated fadeInRight\">\n            {{item.text}}\n          </h3>\n        </div>\n      </ion-card>\n     \n    </ion-slide>\n  </ion-slides>\n  <!-- Categories Section Start -->\n  <div class=\"categories-secion\">\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let cat of categories;index as index\">\n        <ion-card >\n          <img [src]=\"cat.bimg\" (click)=\"goToShopPage(cat)\" class=\"cat-img\" />\n          <div class=\"cat-over\">\n          \n          </div>\n          <div class=\"cat-text\" (click)=\"goToShopPage(cat)\">\n            <h4 (click)=\"goToShopPage(cat)\">\n              {{cat.text}}\n            </h4>\n          </div>\n          \n        </ion-card>\n        \n      </ion-col>\n      <!-- </ng-container> -->\n    </ion-row>\n  </div>\n  <!-- categories section End -->\n\n\n  <!-- Favourite Section Start -->\n  <div class=\"favourite-section\">\n    <ion-text>\n      <h2>\n        Piercing Jewelry Favorites\n      </h2>\n    </ion-text>\n    <ion-card>\n      <img src=\"https://cdn.shopify.com/s/files/1/2395/3423/files/cabochon-post-image-1_540x.jpg?v=1579718384\" />\n      <ion-card-header>\n        <ion-card-subtitle>New Piercing Jewelry</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>Versatile Flat Back Studs</strong></em>- Fresh off the bench are these darling cabochon gemstone\n        cartilage earrings in genuine Pearl,\n        Onyx, Amethyst and Turquoise. Wear in your ear piercings, lip, or even nose piercing.\n        <br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n\n      <img\n        src=\"https://cdn.shopify.com/s/files/1/2395/3423/files/Twist-2.5mm_Perfect_Diamond_Flush_Bezel_Nose_Ring_Stud_8_540x.jpg?v=1579718405\" />\n      <ion-card-header>\n        <ion-card-subtitle>The Perfect Diamond Nose Ring</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>Diamonds Are Forever </strong></em>- Featuring a 2.5mm VS1 diamond,\n        this best-selling diamond nose stud is a must-have.<br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n\n      <img\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnMtmi6OV9sj0Q6s-o59h2Vfhsjhw8bGbP1KYEfwkfysee-Rg0\" />\n      <ion-card-header>\n        <ion-card-subtitle>Diamond Hoops</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>The Perfect Valentine's Gift</strong></em> - These\n        seamless hoops feature VS1 diamonds and are great for a variety of piercings\n        like nose, cartilage ear piercings, nipple, and more.<br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- favourite section End -->\n\n\n  <!-- Start of Bottom -->\n\n  <!-- end of bottom -->\n</ion-content>\n<ion-tab-bar slot=\"bottom\" style=\"--background: #a37bb9;\">\n  <ion-tab-button tab=\"schedule\" style=\"color:white\">\n    <ion-icon name=\"home\"></ion-icon>\n    <ion-label>Home</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button tab=\"map\" style=\"color:white\">\n    <ion-icon name=\"grid\"></ion-icon>\n    <ion-label>Shop</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"about\" style=\"color:white\">\n    <ion-icon name=\"person\"></ion-icon>\n    <ion-label>Profile</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>"

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

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\nion-content .search-bar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n  border-bottom: 2px solid #a88fb6;\n  border-top: 1px solid #a88fb6;\n}\nion-content .search-bar ion-input {\n  border: solid 1px #A88FB6;\n  height: 40px;\n}\nion-content .search-bar .search-icon {\n  width: 10%;\n  background: #A88FB6;\n  border: solid 1px #A88FB6;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content ion-slides ion-slide ion-card {\n  height: 240px;\n  margin: 0;\n  border-radius: 0;\n}\nion-content ion-slides ion-slide ion-card div {\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n  bottom: 30%;\n  font-weight: bold;\n}\nion-content ion-slides ion-slide ion-card div h3 {\n  color: white;\n}\nion-content ion-slides ion-slide ion-card .over {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 240px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #000;\n  opacity: 0.1;\n}\nion-content .categories-secion {\n  margin-top: 20px;\n}\nion-content .categories-secion ion-row {\n  padding-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\nion-content .categories-secion ion-row ion-col {\n  padding-bottom: 0;\n  padding-left: 20px !important;\n  padding-right: 0 !important;\n  padding-top: 0 !important;\n  margin-bottom: 20px;\n}\nion-content .categories-secion ion-row ion-col ion-card {\n  margin: 5px;\n  border-radius: 0;\n  margin: 0;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-img {\n  height: 120px !important;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-over {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #000;\n  opacity: 0.1;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-text {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .categories-secion ion-row ion-col h4 {\n  color: white;\n}\nion-content .favourite-section {\n  padding: 10px;\n}\nion-content .favourite-section ion-text h2 {\n  text-transform: uppercase;\n  font-size: 1.1875em;\n  text-align: center;\n}\nion-content .favourite-section ion-card {\n  box-shadow: none;\n  border-radius: 0;\n  margin-top: 15px !important;\n}\nion-content .favourite-section ion-card ion-card-header {\n  padding-left: 0;\n  padding-right: 0;\n}\nion-content .favourite-section ion-card ion-card-header ion-card-subtitle {\n  font-size: 15px;\n}\nion-content .favourite-section ion-card ion-card-content {\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 25px;\n}\nion-content .favourite-section ion-card ion-card-content em {\n  font-size: 14px;\n}\nion-content .favourite-section ion-card ion-card-content ion-button {\n  margin-left: 0;\n}\nion-slides {\n  --bullet-background: white;\n  --bullet-background-active: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDQVI7QURHSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FEUUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNMSjtBRE1JO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDSk47QURNSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKTjtBRFVNO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEU1E7RUFDRSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDVFY7QURVVTtFQUNFLFlBQUE7QUNSWjtBRFdRO0VBQ0UsV0FBQTtFQUNGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNUUjtBRGdCRTtFQUNFLGdCQUFBO0FDZEo7QURlSTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGNNO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEYVE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDWFY7QURZVTtFQUNFLHdCQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDVlo7QURjUTtFQUNFLFlBQUE7QUNaVjtBRGtCRTtFQUNFLGFBQUE7QUNoQko7QURrQk07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNoQlI7QURtQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNqQk47QURrQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQlI7QURpQlE7RUFDRSxlQUFBO0FDZlY7QURrQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCUjtBRGlCUTtFQUNFLGVBQUE7QUNmVjtBRGlCUTtFQUNFLGNBQUE7QUNmVjtBRHdCQTtFQUNFLDBCQUFBO0VBQ0EsaUNBQUE7QUNyQkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgaW9uLXRvb2xiYXJ7XG4gICAgaW9uLXRpdGxle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b25ze1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudHtcblxuICAuc2VhcmNoLWJhcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhODhmYjY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhODhmYjY7XG4gICAgaW9uLWlucHV0e1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0E4OEZCNjtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLnNlYXJjaC1pY29ue1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNBODhGQjY7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICBpb24tc2xpZGVze1xuICAgIGlvbi1zbGlkZXtcbiAgICAgIGlvbi1jYXJke1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGRpdntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgIGJvdHRvbTogMzAlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGgze1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vdmVye1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIC5jYXRlZ29yaWVzLXNlY2lvbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGlvbi1yb3d7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgaW9uLWNvbHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6MCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIC5jYXQtaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2F0LW92ZXJ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhdC10ZXh0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoNHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmF2b3VyaXRlLXNlY3Rpb257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpb24tdGV4dHtcbiAgICAgIGgye1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEuMTg3NWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9IFxuICAgICAgfVxuICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBlbXtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHhcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgICAgXG4gICAgfVxuICB9XG4gIFxufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB3aGl0ZTtcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY29udGVudCAuc2VhcmNoLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2E4OGZiNjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhODhmYjY7XG59XG5pb24tY29udGVudCAuc2VhcmNoLWJhciBpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5pb24tY29udGVudCAuc2VhcmNoLWJhciAuc2VhcmNoLWljb24ge1xuICB3aWR0aDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjQTg4RkI2O1xuICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMzAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGRpdiBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIC5vdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMTtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIC5jYXQtaW1nIHtcbiAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCAuY2F0LW92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4xO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCAuY2F0LXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiBpb24tcm93IGlvbi1jb2wgaDQge1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi10ZXh0IGgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjE4NzVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB3aGl0ZTtcbn0iXX0= */"

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
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
            loop: true,
        };
        this.slide = [
            { id: 1, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg',
                text: 'Gold Flat-back Studs' },
            { id: 2, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg',
                text: ' Diamond Nose Rings' },
        ];
        // Categories Defines To show Category in front Dynamically Start
        this.categories = [
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/201912-ear-party_360x.jpg?v=1579718481',
                text: 'CARTILAGE EARRING',
                category: 'Cartilage',
                header: 'Cartilage Earrings & Piercing Jewelry',
            },
            {
                bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/double-princess-cut-14k-gold-belly-ring_7_720x.jpg?v=1579718501',
                text: 'BUTTON RINGS',
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
                text: 'PLUGG & TUNNELS', category: 'plugg',
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
                    case 0: return [4 /*yield*/, this.auth.newApi().subscribe(function (datar) {
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