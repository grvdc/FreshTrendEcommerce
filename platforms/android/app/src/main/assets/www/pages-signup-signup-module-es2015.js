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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mylogin-page {\n  background-size: 225% 100%;\n  width: 100%;\n  height: 100%;\n}\n.mylogin-page .login-color {\n  height: 100%;\n}\n.mylogin-page .login-color .login-header {\n  width: 100%;\n  text-align: center;\n  font-size: 18pt;\n  color: #fff;\n  padding-top: 5%;\n}\n.mylogin-page .login-color .content {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.mylogin-page .login-color .content .center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.mylogin-page .login-color .content .center .butn {\n  background-color: #de6161;\n  border-radius: 25px;\n}\n.mylogin-page .login-color .content .login {\n  border: solid 1px grey;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  --highlight-color-focused: none;\n}\n.mylogin-page .login-color .content .login .icon-color {\n  color: #de6161 !important;\n}\n.mylogin-page .login-color .content .forgot-password {\n  color: #fff;\n  font-size: 12pt;\n}\n.mylogin-page .login-color .sign-up {\n  margin-top: -35%;\n  width: 100%;\n  text-align: center;\n  font-size: 12pt;\n  color: #fff !important;\n}\n.mylogin-page .login-color .sign-up .sign-up-a {\n  font-size: 14pt !important;\n  color: #fff !important;\n}\n.red {\n  background-color: red;\n}\n.red header {\n  background: yellow;\n}\nion-col {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMEJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDSSxZQUFBO0FDRlI7QURJUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FESVM7RUFDRyxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGWjtBREdZO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDRGhCO0FERWdCO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ0FwQjtBREdZO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNEaEI7QURFZ0I7RUFDSSx5QkFBQTtBQ0FwQjtBREdZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEaEI7QURJUztFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDRmI7QURHYTtFQUNHLDBCQUFBO0VBQ0Esc0JBQUE7QUNEaEI7QURRQTtFQUlJLHFCQUFBO0FDUko7QURLSTtFQUNJLGtCQUFBO0FDSFI7QURRQTtFQUNJLHFCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubXlsb2dpbi1wYWdle1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjI1JSAxMDAlO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ2luLmpwZycpOyBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIC8vYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcbiAgICAubG9naW4tY29sb3J7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTY1LDg0LDIxNiwwLjIpIDAlLCByZ2JhKDkwLDU3LDE4MywwLjQpIDEwMCUsIHJnYmEoNDYsNjUsMTczLDAuNCkgMTAwJSk7XG4gICAgICAgIC5sb2dpbi1oZWFkZXJ7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOjE4cHQ7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6NSU7XG4gICAgICAgICB9XG4gICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgLmNlbnRlcntcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAuYnV0bntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZGU2MTYxOyAvLyM1YjM5YjdcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9naW57XG4gICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDFweCBncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgLmljb24tY29sb3J7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGU2MTYxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcmdvdC1wYXNzd29yZHtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIC5zaWduLXVwe1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNSU7XG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgZm9udC1zaXplOjEycHQ7XG4gICAgICAgICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIC5zaWduLXVwLWF7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgfVxufVxuXG4ucmVke1xuICAgIGhlYWRlcntcbiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbmlvbi1jb2x7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4vLyAudHJhbnNwYXJlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2RlOTU5NTtcbi8vIH0iLCIubXlsb2dpbi1wYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjUlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5sb2dpbi1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAuY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5jZW50ZXIgLmJ1dG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU2MTYxO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmxvZ2luIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5sb2dpbiAuaWNvbi1jb2xvciB7XG4gIGNvbG9yOiAjZGU2MTYxICFpbXBvcnRhbnQ7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAuZm9yZ290LXBhc3N3b3JkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5zaWduLXVwIHtcbiAgbWFyZ2luLXRvcDogLTM1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLnNpZ24tdXAgLnNpZ24tdXAtYSB7XG4gIGZvbnQtc2l6ZTogMTRwdCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLnJlZCBoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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



let SignupPage = class SignupPage {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }
    ngOnInit() {
    }
    test() {
        console.log("firstName", this.firstName);
        console.log("lastName", this.lastName);
        console.log("email", this.email);
        console.log("password", this.password);
        console.log("confirmPassword", this.confirmPassword);
    }
    validate() {
        let data = '';
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
    }
    ngAfterContentInit() {
    }
    signUp() {
        this.router.navigateByUrl('/home');
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }
    goTologinPage() {
        this.router.navigateByUrl('/login');
    }
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                // subHeader: 'Subtitle',
                message: data,
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map