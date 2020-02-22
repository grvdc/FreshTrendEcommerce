(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header> -->\n    <!-- <ion-toolbar style=\"--background: transparent ; background-image: url('../../../assets/login.jpg');\"> -->\n    <!-- <ion-toolbar>\n      <ion-title class=\"white\">Register</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button class=\"white\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header> -->\n  <div class=\"mylogin-page\">\n  \n    <div class=\"login-color\" >\n      \n      <!-- <div class=\"login-header\">Login</div> -->\n      <div class=\"content\" style=\"display: flex;flex-direction: column;\">\n        <h5>Sign Up</h5>\n        <!-- <img style=\"width: 40%;\"src=\"https://assets-ouch.icons8.com/thumb/962/7b8d4e8b-7b64-4f18-af4c-093f3b213c1a.png\"/> -->\n  \n        \n        <ion-row class=\"center\" >\n          <ion-col size=\"10\">\n              <ion-item lines=\"none\" style=\"--background: transparent;\" >\n                  <ion-label  position=\"floating\">First Name</ion-label>\n                  <ion-input clearInput style=\"border-bottom: solid 1px black;\" [(ngModel)]=\"firstName\"  type=\"text\" ></ion-input>\n                </ion-item>\n            <!-- <ion-item class=\"login transparent\">\n  \n              \n              <ion-input clearInput type=\"text\" placeholder=\"First Name\" name=\"firstname\" [(ngModel)]=\"firstName\"></ion-input>\n            </ion-item> -->\n          </ion-col>\n          <ion-col size=\"10\">\n              <ion-item lines=\"none\" style=\"--background: transparent;\" >\n                  <ion-label  position=\"floating\">Last Name</ion-label>\n                  <ion-input clearInput style=\"border-bottom: solid 1px black;\" [(ngModel)]=\"lastName\"  type=\"text\" ></ion-input>\n                </ion-item>\n           \n              <!-- <ion-input clearInput type=\"text\" placeholder=\"Last Name\" name=\"lastname\" [(ngModel)]=\"lastName\"></ion-input> -->\n           \n          </ion-col>\n          <ion-col size=\"10\">\n              <ion-item lines=\"none\" style=\"--background: transparent;\" >\n                  <ion-label  position=\"floating\">Email</ion-label>\n                  <ion-input clearInput style=\"border-bottom: solid 1px black;\" [(ngModel)]=\"email\"  type=\"email\" ></ion-input>\n                </ion-item>\n           <!-- <ion-item class=\"login transparent\"> -->\n             <!--   <ion-label class=\"icon-color\">\n                <ion-icon name=\"person\"></ion-icon>\n              </ion-label> -->\n              <!-- <ion-input clearInput type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\"></ion-input> -->\n              <!-- <ion-label class=\"icon-color\">\n                <ion-icon name=\"person\"></ion-icon>\n              </ion-label> -->\n            <!-- </ion-item> -->\n          </ion-col>\n          <ion-col size=\"10\">\n              <ion-item lines=\"none\" style=\"--background: transparent;\" >\n                  <ion-label  position=\"floating\">Password</ion-label>\n                  <ion-input clearInput style=\"border-bottom: solid 1px black;\" [(ngModel)]=\"password\"  type=\"password\"></ion-input>\n                </ion-item>\n            <!-- <ion-item class=\"login transparent\"> -->\n              <!-- <ion-label class=\"icon-color\">\n                <ion-icon name=\"lock\"></ion-icon>\n              </ion-label> -->\n              <!-- <ion-input clearInput type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\"></ion-input>\n            </ion-item> -->\n          </ion-col>\n          <ion-col size=\"10\">\n              <ion-item lines=\"none\" style=\"--background: transparent;\" >\n                  <ion-label  position=\"floating\">Confirm Password</ion-label>\n                  <ion-input clearInput style=\"border-bottom: solid 1px black;\" [(ngModel)]=\"confirmPassword\"  type=\"password\" ></ion-input>\n                </ion-item>\n            <!-- <ion-item class=\"login transparent\"> -->\n              <!-- <ion-label class=\"icon-color\">\n                <ion-icon name=\"lock\"></ion-icon>\n              </ion-label> -->\n              <!-- <ion-input clearInput type=\"password\" placeholder=\"Confirm Password\" name=\"confirmpassword\" [(ngModel)]=\"confirmPassword\"></ion-input>\n            </ion-item> -->\n          </ion-col>\n          <ion-col size=\"10\" style=\"margin-top: 5%;\">\n            <!-- <p class=\"forgot-password\" style=\"margin: 0;padding: 0;\">Forgot password?</p> -->\n              \n            <!-- <ion-button expand=\"full\" type=\"submit\" style=\"height: 48px;\" color=\"#fff !important\" class=\"butn bg-color\" (click)=\"validate()\">Create Account</ion-button> -->\n            <ion-item lines=\"none\" style=\"--background: transparent;\" >\n            <ion-button expand=\"full\" style=\"width: 100%;\n                  --background: #b766b7;\" (click)=\"validate()\">\n                     Create Account\n                    </ion-button>\n                  </ion-item>\n          </ion-col>\n          <ion-col size=\"10\" style=\"color: black;margin-top: -2%;\">\n            <!-- <p class=\"forgot-password\">Forgot password?</p> -->\n            <p style=\"margin: 0;\">Allready have an account? <a class=\"sign-up-a\" style=\"color: #b766b7;font-size: 18px;\" (click)=\"goTologinPage()\">Sign In</a><br><br></p>\n          </ion-col>\n         \n          \n        </ion-row>\n      </div>\n      <div class=\"sign-up\">\n        \n        \n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mylogin-page {\n  background-size: 225% 100%;\n  width: 100%;\n  height: 100%;\n}\n.mylogin-page .login-color {\n  height: 100%;\n}\n.mylogin-page .login-color .login-header {\n  width: 100%;\n  text-align: center;\n  font-size: 18pt;\n  color: #fff;\n  padding-top: 5%;\n}\n.mylogin-page .login-color .content {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.mylogin-page .login-color .content .center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.mylogin-page .login-color .content .center .butn {\n  background-color: #de6161;\n  border-radius: 25px;\n}\n.mylogin-page .login-color .content .login {\n  border: solid 1px grey;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  --highlight-color-focused: none;\n}\n.mylogin-page .login-color .content .login .icon-color {\n  color: #de6161 !important;\n}\n.mylogin-page .login-color .content .forgot-password {\n  color: #fff;\n  font-size: 12pt;\n}\n.mylogin-page .login-color .sign-up {\n  margin-top: -35%;\n  width: 100%;\n  text-align: center;\n  font-size: 12pt;\n  color: #fff !important;\n}\n.mylogin-page .login-color .sign-up .sign-up-a {\n  font-size: 14pt !important;\n  color: #fff !important;\n}\n.red {\n  background-color: red;\n}\n.red header {\n  background: yellow;\n}\nion-col {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvRnJlc2hUcmVuZEVjb21tZXJjZS9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDBCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBQ0ksWUFBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGWjtBRElTO0VBQ0csWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRlo7QURHWTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBREVnQjtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUNBcEI7QURHWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDRGhCO0FERWdCO0VBQ0kseUJBQUE7QUNBcEI7QURHWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRGhCO0FESVM7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0ZiO0FER2E7RUFDRywwQkFBQTtFQUNBLHNCQUFBO0FDRGhCO0FEUUE7RUFJSSxxQkFBQTtBQ1JKO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FEUUE7RUFDSSxxQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm15bG9naW4tcGFnZXtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyNSUgMTAwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2dpbi5qcGcnKTsgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICAvL2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XG4gICAgLmxvZ2luLWNvbG9ye1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE2NSw4NCwyMTYsMC4yKSAwJSwgcmdiYSg5MCw1NywxODMsMC40KSAxMDAlLCByZ2JhKDQ2LDY1LDE3MywwLjQpIDEwMCUpO1xuICAgICAgICAubG9naW4taGVhZGVye1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB0O1xuICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjUlO1xuICAgICAgICAgfVxuICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgIC5jZW50ZXJ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLmJ1dG57XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2RlNjE2MTsgLy8jNWIzOWI3XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ2lue1xuICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggZ3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xuICAgICAgICAgICAgICAgIC5pY29uLWNvbG9ye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RlNjE2MSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jnb3QtcGFzc3dvcmR7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAuc2lnbi11cHtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzUlO1xuICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB0O1xuICAgICAgICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAuc2lnbi11cC1he1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgIH1cbn1cblxuLnJlZHtcbiAgICBoZWFkZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICB9XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5pb24tY29se1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLy8gLnRyYW5zcGFyZW50e1xuLy8gICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIGJvcmRlcjogc29saWQgMXB4ICNkZTk1OTU7XG4vLyB9IiwiLm15bG9naW4tcGFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogMjI1JSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3Ige1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAubG9naW4taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAuY2VudGVyIC5idXRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlNjE2MTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5sb2dpbiB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAubG9naW4gLmljb24tY29sb3Ige1xuICBjb2xvcjogI2RlNjE2MSAhaW1wb3J0YW50O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHQ7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuc2lnbi11cCB7XG4gIG1hcmdpbi10b3A6IC0zNSU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5zaWduLXVwIC5zaWduLXVwLWEge1xuICBmb250LXNpemU6IDE0cHQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5yZWQgaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.page.html',
//   styleUrls: ['./signup.page.scss'],
// })
// export class SignupPage implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }



var SignupPage = /** @class */ (function () {
    function SignupPage(router, alertController) {
        this.router = router;
        this.alertController = alertController;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.test = function () {
        console.log("firstName", this.firstName);
        console.log("lastName", this.lastName);
        console.log("email", this.email);
        console.log("password", this.password);
        console.log("confirmPassword", this.confirmPassword);
    };
    SignupPage.prototype.validate = function () {
        var data = '';
        this.firstName = this.firstName.trim();
        this.email = this.email.trim();
        this.password = this.password.trim();
        this.confirmPassword = this.confirmPassword.trim();
        if (this.firstName === '') {
            data = 'Please Add Name';
            this.presentAlert(data);
            return false;
        }
        else if (this.email === '') {
            data = 'Please Add Email';
            this.presentAlert(data);
            return false;
        }
        else if (this.password === '') {
            data = 'Please Create Password';
            this.presentAlert(data);
            return false;
        }
        else if (this.password !== this.confirmPassword) {
            data = 'Password and Confirm not matched.';
            this.presentAlert(data);
            return false;
        }
        else {
            this.signUp();
        }
    };
    SignupPage.prototype.ngAfterContentInit = function () {
    };
    SignupPage.prototype.signUp = function () {
        this.router.navigateByUrl('/home');
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    };
    SignupPage.prototype.goTologinPage = function () {
        this.router.navigateByUrl('/login');
    };
    SignupPage.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            // subHeader: 'Subtitle',
                            message: data,
                            buttons: [{
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map