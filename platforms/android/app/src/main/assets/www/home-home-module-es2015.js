(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" />\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\"></ion-icon>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <!-- <ion-searchbar animated (keydown.enter)=\"onKeydown($event)\" class=\"animated bounceInDown\"></ion-searchbar> -->\n  <div class=\"search-bar\">\n    <ion-input placeholder=\"Search\"></ion-input>\n    <div class=\"search-icon\">\n      <ion-icon name=\"search\"></ion-icon>\n    </div>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let item of slide\">\n      <ion-card>\n        <img [src]=\"item.image\">\n        <div>\n          <h3 class=\"animated fadeInRight\">\n            {{item.text}}\n          </h3>\n        </div>\n      </ion-card>\n     \n    </ion-slide>\n  </ion-slides>\n  <!-- Categories Section Start -->\n  <div class=\"categories-secion\">\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let cat of categories;index as index\">\n        <ion-card style=\"margin: 5px;\">\n          <img [src]=\"cat.bimg\" (click)=\"goToShopPage(cat)\" class=\"cat-img\" />\n          <div class=\"cat-over\">\n          \n          </div>\n          <div class=\"cat-text\" (click)=\"goToShopPage(cat)\">\n            <h4 (click)=\"goToShopPage(cat)\">\n              {{cat.text}}\n            </h4>\n          </div>\n          \n        </ion-card>\n        \n      </ion-col>\n      <!-- </ng-container> -->\n    </ion-row>\n  </div>\n  <!-- categories section End -->\n\n\n  <!-- Favourite Section Start -->\n  <div class=\"favourite-section\">\n    <ion-text>\n      <h2>\n        Piercing Jewelry Favorites\n      </h2>\n    </ion-text>\n    <ion-card>\n      <img src=\"https://cdn.shopify.com/s/files/1/2395/3423/files/cabochon-post-image-1_540x.jpg?v=1579718384\" />\n      <ion-card-header>\n        <ion-card-subtitle>New Piercing Jewelry</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>Versatile Flat Back Studs</strong></em>- Fresh off the bench are these darling cabochon gemstone\n        cartilage earrings in genuine Pearl,\n        Onyx, Amethyst and Turquoise. Wear in your ear piercings, lip, or even nose piercing.\n        <br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n\n      <img\n        src=\"https://cdn.shopify.com/s/files/1/2395/3423/files/Twist-2.5mm_Perfect_Diamond_Flush_Bezel_Nose_Ring_Stud_8_540x.jpg?v=1579718405\" />\n      <ion-card-header>\n        <ion-card-subtitle>The Perfect Diamond Nose Ring</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>Diamonds Are Forever </strong></em>- Featuring a 2.5mm VS1 diamond,\n        this best-selling diamond nose stud is a must-have.<br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n\n      <img\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnMtmi6OV9sj0Q6s-o59h2Vfhsjhw8bGbP1KYEfwkfysee-Rg0\" />\n      <ion-card-header>\n        <ion-card-subtitle>Diamond Hoops</ion-card-subtitle>\n        <!-- <ion-card-title>Versatile Flat Back Studs</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <em><strong>The Perfect Valentine's Gift</strong></em> - These\n        seamless hoops feature VS1 diamonds and are great for a variety of piercings\n        like nose, cartilage ear piercings, nipple, and more.<br />\n        <ion-button class=\"checkout-btn\" size=\"small\" fill=\"outline\" (click)=\"goToShopPage('')\">Shop now</ion-button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- favourite section End -->\n\n\n  <!-- Start of Bottom -->\n\n  <!-- end of bottom -->\n</ion-content>\n<ion-tab-bar slot=\"bottom\" style=\"--background: #a37bb9;\">\n  <ion-tab-button tab=\"schedule\" style=\"color:white\">\n    <ion-icon name=\"home\"></ion-icon>\n    <ion-label>Home</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button tab=\"map\" style=\"color:white\">\n    <ion-icon name=\"grid\"></ion-icon>\n    <ion-label>Shop</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"about\" style=\"color:white\">\n    <ion-icon name=\"person\"></ion-icon>\n    <ion-label>Profile</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\nion-content .search-bar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n}\nion-content .search-bar ion-input {\n  border: solid 1px #A88FB6;\n  height: 40px;\n}\nion-content .search-bar .search-icon {\n  width: 10%;\n  background: #A88FB6;\n  border: solid 1px #A88FB6;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content ion-slides ion-slide ion-card {\n  height: 240px;\n  margin: 0;\n  border-radius: 0;\n}\nion-content ion-slides ion-slide ion-card div {\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n  bottom: 30%;\n  font-weight: bold;\n}\nion-content .categories-secion {\n  margin-top: 10px;\n}\nion-content .categories-secion ion-row {\n  padding-right: 10px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\nion-content .categories-secion ion-row ion-col {\n  padding-bottom: 0;\n  padding-left: 10px !important;\n  padding-right: 0 !important;\n  padding-top: 0 !important;\n  margin-bottom: 10px;\n}\nion-content .categories-secion ion-row ion-col ion-card {\n  margin: 0;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-img {\n  height: 120px !important;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-over {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #000;\n  opacity: 0.1;\n}\nion-content .categories-secion ion-row ion-col ion-card .cat-text {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .categories-secion ion-row ion-col h4 {\n  color: white;\n}\nion-content .favourite-section {\n  padding: 10px;\n}\nion-content .favourite-section ion-text h2 {\n  text-transform: uppercase;\n  font-size: 1.1875em;\n  text-align: center;\n}\nion-content .favourite-section ion-card {\n  box-shadow: none;\n  border-radius: 0;\n  margin-top: 15px !important;\n}\nion-content .favourite-section ion-card ion-card-header {\n  padding-left: 0;\n  padding-right: 0;\n}\nion-content .favourite-section ion-card ion-card-header ion-card-subtitle {\n  font-size: 15px;\n}\nion-content .favourite-section ion-card ion-card-content {\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 25px;\n}\nion-content .favourite-section ion-card ion-card-content em {\n  font-size: 14px;\n}\nion-content .favourite-section ion-card ion-card-content ion-button {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDQVI7QURHSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FEUUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtBQ0xKO0FETUk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNKTjtBRE1JO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0pOO0FEVU07RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDUlI7QURTUTtFQUNFLFdBQUE7RUFHQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNUVjtBRGdCRTtFQUNFLGdCQUFBO0FDZEo7QURlSTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGNNO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEYVE7RUFDRSxTQUFBO0FDWFY7QURZVTtFQUNFLHdCQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDVlo7QURjUTtFQUNFLFlBQUE7QUNaVjtBRGtCRTtFQUNFLGFBQUE7QUNoQko7QURrQk07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNoQlI7QURtQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNqQk47QURrQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQlI7QURpQlE7RUFDRSxlQUFBO0FDZlY7QURrQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCUjtBRGlCUTtFQUNFLGVBQUE7QUNmVjtBRGlCUTtFQUNFLGNBQUE7QUNmViIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICBpb24tdG9vbGJhcntcbiAgICBpb24tdGl0bGV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbnN7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50e1xuXG4gIC5zZWFyY2gtYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpb24taW5wdXR7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjQTg4RkI2O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAuc2VhcmNoLWljb257XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgYmFja2dyb3VuZDogI0E4OEZCNjtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNBODhGQjY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zbGlkZXN7XG4gICAgaW9uLXNsaWRle1xuICAgICAgaW9uLWNhcmR7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgYm90dG9tOiAzMCU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIC5jYXRlZ29yaWVzLXNlY2lvbntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGlvbi1yb3d7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgaW9uLWNvbHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6MCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAuY2F0LWltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhdC1vdmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXQtdGV4dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDR7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZhdm91cml0ZS1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaW9uLXRleHR7XG4gICAgICBoMntcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjE4NzVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgZW17XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICAgIFxuICAgIH1cbiAgfVxuICBcbn1cblxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGltZyB7XG4gIHdpZHRoOiA1NSU7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQgLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5zZWFyY2gtYmFyIGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNBODhGQjY7XG4gIGhlaWdodDogNDBweDtcbn1cbmlvbi1jb250ZW50IC5zZWFyY2gtYmFyIC5zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQ6ICNBODhGQjY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNBODhGQjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQge1xuICBoZWlnaHQ6IDI0MHB4O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAzMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiBpb24tcm93IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXMtc2VjaW9uIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCAuY2F0LWltZyB7XG4gIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgLmNhdC1vdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMTtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzLXNlY2lvbiBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgLmNhdC10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcy1zZWNpb24gaW9uLXJvdyBpb24tY29sIGg0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tdGV4dCBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4xODc1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmZhdm91cml0ZS1zZWN0aW9uIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5pb24tY29udGVudCAuZmF2b3VyaXRlLXNlY3Rpb24gaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC5mYXZvdXJpdGUtc2VjdGlvbiBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let HomePage = class HomePage {
    // Categories Defines To show Category in front Dynamically End
    constructor(auth, router) {
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
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let datas = yield this.auth.newApi().subscribe(datar => {
                console.log("this.newProducts", datar);
            });
        });
    }
    goToShopPage(category) {
        // this.router.navigateByUrl('/shop-page');
        if (category) {
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(category)
                }
            };
            this.router.navigate(['shop-page'], navigationExtras);
        }
        else {
            this.router.navigateByUrl('/shop-page');
        }
    }
    onScroll(event) {
        let hi = event.detail.scrollTop;
        // console.log('scroll event scrollTop', event.detail.scrollTop);
        // console.log('content', this.content);
        // if (event.detail.deltaY > 0) {
        //   console.log("scrolling down, hiding footer...");
        // } else {
        //   console.log("scrolling up, revealing footer...");
        // };
    }
    ;
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
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



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map