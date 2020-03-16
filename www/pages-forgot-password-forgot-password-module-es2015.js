(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forgot-password/forgot-password.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>forgot-password</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div style=\"width: 100%; height: 250px;display: flex; align-items: center;\n  justify-content: center;\">\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" style=\"width: 50%;\" (click)=\"gotoHome()\" />\n  </div>\n  <h3 style=\"text-align: center;display: none;\">Login</h3>\n  <ion-item lines=\"none\">\n      <ion-label position=\"floating\" >Email</ion-label>\n      <ion-input clearInput style=\"border-bottom: solid 1px #b766b7;\" [(ngModel)]=\"email\" (ngModelChange)=\"emailvalidate()\"></ion-input>\n  </ion-item>\n  <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\" *ngIf=\"check && emailtest\">\n    <ion-col style=\"padding: 16px;color: red;padding-bottom: 0;padding-top: 5px;\n\">Enter email id</ion-col>\n  </ion-row>\n\n  <ion-item lines=\"none\">\n    <div style=\"width:100%;margin-top: 10px;\"> \n    <ion-row>\n      <ion-col size=\"12\" style=\"padding:0\">\n          <ion-button expand=\"full\" style=\"width: 100%; --background: #b766b7;height: 35px;\" (click)=\"login()\">Forgot Password</ion-button>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row style=\"margin-top: -10px;\">\n        <ion-col size=\"12\" style=\"padding:0\">\n            <p style=\"text-align: center;\" (click)=\"toForgotPassword()\">Forget Password?</p>\n        </ion-col>\n    </ion-row> -->\n    <ion-row >\n      <ion-col size=\"12\" style=\"padding:0;margin:0\">\n          <p style=\"text-align: center;margin: 0;\" >Go back to login?<a class=\"sign-up-a\" style=\"color: #b766b7;font-size: 18px;\" (click)=\"goLogin()\">Login</a></p>\n      </ion-col>\n  </ion-row>\n  </div>\n  </ion-item>\n  \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/pages/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(router) {
        this.router = router;
        this.email = '';
        this.emailtest = false;
        this.check = false;
    }
    ngOnInit() {
    }
    emailvalidate() {
        if (this.email == '') {
            this.emailtest = true;
            // return false;
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
            console.log("inside the Email validation");
            this.emailtest = true;
            // return false;
        }
        else {
            this.emailtest = false;
            return true;
        }
    }
    ionViewDidEnter() {
        document.addEventListener("backbutton", function (e) {
            console.log("disable back button");
        }, false);
    }
    login() {
        this.check = true;
        if (!this.emailvalidate()) {
            this.emailtest = true;
            return false;
        }
        else {
            this.check = false;
            this.router.navigate(['home']);
        }
    }
    gotoHome() {
        this.router.navigate(['home']);
    }
    goLogin() {
        this.router.navigate(['login']);
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forgot-password/forgot-password.page.html"),
        styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/forgot-password/forgot-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es2015.js.map