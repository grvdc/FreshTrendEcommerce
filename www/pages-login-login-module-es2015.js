(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n \n    <ion-title>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" />\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header> -->\n\n\n\n<ion-content>\n  <div style=\"width: 100%; height: 250px;display: flex; align-items: center;\n  justify-content: center;\">\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\" style=\"width: 50%;\" (click)=gotoHome() />\n  </div>\n  <h3 style=\"text-align: center;display: none;\">Login</h3>\n  <ion-item lines=\"none\">\n      <ion-label position=\"floating\" >Email</ion-label>\n      <ion-input clearInput style=\"border-bottom: solid 1px #b766b7;\" [(ngModel)]=\"email\" (ngModelChange)=\"emailvalidate()\"></ion-input>\n  </ion-item>\n  <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\" *ngIf=\"check && emailtest\">\n    <ion-col style=\"padding: 16px;color: red;padding-bottom: 0;padding-top: 5px;\n\">Enter email id</ion-col>\n  </ion-row>\n  <ion-item lines=\"none\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" style=\"border-bottom: solid 1px #b766b7;\" [(ngModel)]=\"password\"></ion-input>\n  </ion-item>\n  <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\"  *ngIf=\"check && !password\">\n    <ion-col style=\"padding: 16px;color: red;padding-bottom: 0;padding-top: 5px;\n\">Enter a password</ion-col>\n  </ion-row>\n  \n  <ion-item lines=\"none\">\n    <div style=\"width:100%;margin-top: 10px;\"> \n    <ion-row>\n      <ion-col size=\"12\" style=\"padding:0\">\n          <ion-button expand=\"full\" style=\"width: 100%; --background: #b766b7;height: 35px;\" (click)=\"login()\">LOGIN</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -10px;\">\n        <ion-col size=\"12\" style=\"padding:0\">\n            <p style=\"text-align: center;\" (click)=\"toForgotPassword()\">Forget Password?</p>\n        </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -10px;\">\n      <ion-col size=\"12\" style=\"padding:0;margin:0\">\n          <p style=\"text-align: center;margin: 0;\" >Don't have Account? <a class=\"sign-up-a\" style=\"color: #b766b7;font-size: 18px;\" (click)=\"signup()\">Sign Up</a></p>\n      </ion-col>\n  </ion-row>\n  </div>\n  </ion-item>\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDQVY7QURHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogNTUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
        this.email = '';
        this.password = '';
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
            if (this.password == '') {
                this.check = true;
            }
            else {
                this.check = false;
                this.router.navigateByUrl('/');
            }
        }
    }
    signup() {
        this.router.navigateByUrl('/signup');
    }
    gotoHome() {
        this.router.navigateByUrl('/');
    }
    toForgotPassword() {
        this.router.navigateByUrl('/forgot-password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map