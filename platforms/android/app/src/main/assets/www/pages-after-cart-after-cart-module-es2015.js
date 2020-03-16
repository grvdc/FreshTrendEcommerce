(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-after-cart-after-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/after-cart/after-cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/after-cart/after-cart.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=gotoHome()>\n      <img src=\"https://image4.owler.com/logo/freshtrends_owler_20160228_045955_original.png\"\n        style=\"width: 55%;vertical-align: text-bottom;\" />\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"order-summary-text\">\n    <p class=\"p-text\" (click)=\"toggle()\" *ngIf=\"!show\">\n      <ion-icon name=\"cart\" ></ion-icon> Show order summary <img\n        src='../../../assets/img/down.png' style=\"width: 14px; margin-left: 5px;\" />\n    </p>\n    <p class=\"p-text\"(click)=\"toggle()\" *ngIf=\"show\">\n      <ion-icon name=\"cart\" ></ion-icon> Hide srder summary <img\n        src='../../../assets/img/up.png' style=\"width: 14px; margin-left: 5px;\" />\n    </p>\n\n    <p class=\"p-font600\">{{totalAmount  | currency}}</p>\n  </div>\n\n  <div\n    style=\"background: #fafafa;height: 0px; width: 100%;  overflow: auto;transition: height 0.7s;border-bottom:solid 1px #d8d8d8\"\n    [ngStyle]=\"{'height':show === true ? height : '0px' }\">\n    <ion-list style=\"background: transparent;    padding: 0\">\n      <div *ngFor=\"let item of cartItems; index as index\" style=\"--background: transparent;display:flex;height: 85px;\">\n        <ion-item-divider style=\"    padding: 0;\n          margin-left: 16px;--background: transparent;\n          margin-right: 16px;padding-bottom: 10px;padding-top: 10px;;\">\n          <div style=\" width: 20%;  display: flex;  align-items: center;justify-content: center;\">\n            <ion-thumbnail slot=\"start\">\n              <img [src]=\"item.image.src\" style=\"border: solid 1px #cacaca;border-radius: 5px;\">\n              <div style=\"margin-top: -55px;margin-left: 40px;\">\n                <ion-badge color=\"medium\" style=\"border-radius: 50%;font-size:7pt\">{{item.productQuantity}}</ion-badge>\n              </div>\n            </ion-thumbnail>\n          </div>\n          <div style=\"width: 60%;\">\n            <p style=\"font-size: 0.9em; color:#242424;margin: 0;\">{{item.title}}</p>\n            <p style=\"margin: 0;font-size: 0.8em;color:#717171;margin-top: 5px;\">Yellow Gold / 18G / 3/16\" (5mm)</p>\n          </div>\n          <div style=\"width: 20%;color: #323232;text-align: right;\">\n            <p>{{item.variants[0].price | currency}}</p>\n          </div>\n        </ion-item-divider>\n      </div>\n\n\n      <ion-row style=\"padding-left: 16px; padding-right: 16px;margin-top: 5px;display: flex;\n        align-items: center;\">\n        <ion-col style=\"padding: 0;\" size=\"10\">\n          <ion-input type=\"text\" style=\"border: solid 1px #b766b7;height: 40px;\"\n            placeholder=\"Gift card or discount code\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding: 0;\">\n          <ion-button (click)=\"addToCart()\"\n            style=\"--background: purple;height: 40px; width: 100%;--color:white;color:white;margin-left: 4px;\"\n            type=\"submit\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-item-divider style=\"    padding: 0;\n      margin-left: 16px;--background: transparent;\n      margin-right: 16px;margin-top: 16px;\">\n        <div style=\"width:100%;color:#535353\">\n\n          <div style=\"    display: flex;\n            width: 100%;\n           \">\n            <div style=\"width: 50%;\">Sub Total</div>\n            <div style=\"width: 50%;text-align: right;padding-right: 32px;\">{{totalAmount | currency}}</div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 10px;  margin-bottom: 16px; align-items: center;\">\n            <div style=\"width: 50%;\">Shipping</div>\n            <div style=\"width: 50%;text-align: right;padding-right: 32px;font-size: 0.8em;\">Calculated at next step\n            </div>\n          </div>\n        </div>\n      </ion-item-divider>\n      <div style=\"width:100%;display:flex;color:#535353;padding-right: 16px; height: 80px;padding-left: 16px;\">\n        <div style=\"    display: flex;\n            width: 100%;\n            justify-content: space-between;    align-items: center;\">\n          <div>Total</div>\n          <div style=\"font-size: 18px; font-weight: 600;\"> {{totalAmount | currency}}</div>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n\n  <!-- Info Start -->\n  <div *ngIf=\"infoSection\">\n    <div style=\"padding-left: 16px;padding-right: 16px;margin-top: 20px;\">\n      <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;text-align: center;\">Express checkout</div>\n      <div>\n        <ion-row style=\"margin-top: 16px;display: flex;\n    align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-button (click)=\"addToCart()\"\n              style=\"--background: black;height: 48px; width: 98%;--color:white;color:white;margin-left: 4px;\"\n              type=\"submit\">\n              <ion-icon name=\"logo-google\"></ion-icon>Pay\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row style=\"margin-top: 16px;display: flex;\n    align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-button (click)=\"addToCart()\"\n              style=\"--background: #ffc439;height: 48px; width: 98%;--color:white;color:white;margin-left: 4px;\"\n              type=\"submit\">\n              <img src='../../../assets/img/paypal.png' style=\"width: 85px;\" />\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row style=\"margin-top: 16px;display: flex;\n    align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-button (click)=\"addToCart()\"\n              style=\"--background: #fad676 !important;height: 48px; width: 98%;--color:white;color:white;margin-left: 4px;\"\n              type=\"submit\">\n              <img src='../../../assets/img/amazon--pay.png' style=\"width: 85px;\" />\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n\n    <div class=\"or-section\"\n      style=\"margin-top: 16px;width: 100%;display: flex;justify-content: space-around;align-items: center;\">\n      <div style=\"width: 40%; border-bottom: solid 1px #d8d8d8;\"></div>\n      <div>OR</div>\n      <div style=\"width: 40%;border-bottom: solid 1px #d8d8d8;\"></div>\n\n    </div>\n\n    <div style=\"padding-left: 16px;padding-right: 16px;margin-top: 20px;\">\n      <div style=\"width:100%\">\n        <div>\n          <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;\">Contact information</div>\n          <div class=\"sub-color\" style=\"font-size: 14px;margin-top: 10px;\">Already have an account? Login</div>\n        </div>\n\n        <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"text\" (ngModelChange)=\"emailvalidate()\" style=\"border: solid 1px #b766b7;\"\n              placeholder=\"Email\" name=\"email\" [(ngModel)]=\"form.email\"></ion-input>\n          </ion-col>\n          <!-- [ngStyle]=\"{'border-color':check && emailtest ? 'red' : '#b766b7' }\" -->\n        </ion-row>\n        <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && emailtest\">\n          <ion-col style=\"padding: 0;color: red;\">Please Enter valid email</ion-col>\n        </ion-row>\n        <div style=\"    margin-top: 15px;\n        display: flex;\n        \">\n          <ion-checkbox color=\"dark\" checked slot=\"start\"></ion-checkbox>\n          <ion-label style=\"margin-left: 10px;\" class=\"sub-color\">\n            Keep me up to date on news and exclusive offers\n          </ion-label>\n        </div>\n\n        <div style=\"margin-top: 16px;font-size: 18px;font-weight: 600;\">\n          <div class=\"head-color\">Shipping address</div>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"First name\" name='fname'\n                [(ngModel)]=\"form.fName\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.fName\">\n            <ion-col style=\"padding: 0;color: red;\">Enter a first name</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Last name\" name='lname'\n                [(ngModel)]=\"form.lName\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.lName\">\n            <ion-col style=\"padding: 0;color: red;\">Enter a last name</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Company (optional)\" name='company'\n                [(ngModel)]=\"form.company\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top:16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Address\" name='address'\n                [(ngModel)]=\"form.address\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.address\">\n            <ion-col style=\"padding: 0;color: red;\">Enter a address</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top:16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Apartment, suite, etc. (optional)\"\n                name='appartment' [(ngModel)]=\"form.appartment\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"City\" name='city'\n                [(ngModel)]=\"form.city\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.city\">\n            <ion-col style=\"padding: 0;color: red;\">Enter a city</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-select value=\"us\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"max-width: 100% !important;padding-left: 8px;border: solid 1px #b766b7;padding-right: 10px;\n            border-radius: 5px;\" name='country' [(ngModel)]=\"form.country\">\n                <ion-select-option value=\"\">Select Country</ion-select-option>\n                <ion-select-option value=\"us\">United States</ion-select-option>\n                <ion-select-option value=\"ca\">Canada</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.country\">\n            <ion-col style=\"padding: 0;color: red;\">Select a country</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-select value=\"al\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"padding-right: 10px;;max-width: 100% !important;padding-left: 8px;border: solid 1px #b766b7;\n            border-radius: 5px;\" name='state' [(ngModel)]=\"form.state\">\n                <ion-select-option value=\"\">Select State</ion-select-option>\n                <ion-select-option value=\"al\">Alabama</ion-select-option>\n                <ion-select-option value=\"ak\">Alaska</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.state\">\n            <ion-col style=\"padding: 0;color: red;\">Select a state</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"number\" style=\"border: solid 1px #b766b7;\" placeholder=\"ZIP code\" name='pin'\n                [(ngModel)]=\"form.pin\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"check && !form.pin\">\n            <ion-col style=\"padding: 0;color: red;\">Enter a zip code</ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-input type=\"number\"  style=\"border: solid 1px #b766b7;\" placeholder=\"Phone (optional)\" name='mobile'\n                [(ngModel)]=\"form.mobile\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n            <ion-col style=\"padding: 0;\" size=\"12\">\n              <ion-button (click)=\"validate()\"\n                style=\"--background: purple;height: 40px; width: 100%;--color:white;color:white;margin-left: 4px;\"\n                type=\"submit\">\n                Continue to shipping\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div>\n          <ion-row style=\"display: flex;\n        align-items: center;height: 50px;\">\n            <ion-col style=\"padding: 0;display: flex;justify-content: center;color: #545454;align-items: center\"\n              size=\"12\" (click)=\"cartPage()\">\n              <img src='../../../assets/img/back.png' style=\"height: 14px; margin-right: 5px;\" /> Return to cart\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n  <!-- Info End -->\n\n\n  <!-- Shipping address Start -->\n  <div *ngIf=\"shippingAddressSection\" style=\"padding-left: 16px; padding-right: 16px; margin-top: 20px;\">\n    <div style=\"border-radius: 5px;padding-top:10px;padding-bottom:10px;margin-top: 20px;border:solid 1px #d9d9d9;\">\n      <ion-item-divider>\n        <div style=\"width:100%;color:#535353\">\n\n          <div style=\"    display: flex;\n        width: 100%;\n       \">\n            <div style=\"width: 50%;font-size: 15px;\">Contact</div>\n            <div style=\"width: 50%;text-align: right;padding-right: 16px;font-size: 14px;\" (click)=\"toInfo()\">Change\n            </div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 5px;  margin-bottom: 16px; align-items: center;\">\n            <div style=\"width: 80%;\">{{form.email}}</div>\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n        <div style=\"width:100%;color:#535353\">\n\n          <div style=\"    display: flex;\n      width: 100%;\n     \">\n            <div style=\"width: 50%;font-size: 15px;\">Ship to</div>\n            <div style=\"width: 50%;text-align: right;font-size: 14px;\" (click)=\"toInfo()\">Change</div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 5px; align-items: center;\">\n            <div style=\"width:80%;\">{{form.appartment?form.appartment+',':''}} {{form.address}}, {{form.city}},\n              {{form.state}}, {{form.pin}}, {{form.country}} </div>\n          </div>\n        </div>\n      </ion-item>\n    </div>\n\n\n    <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;margin-top: 16px;\">Shipping method</div>\n    <ion-list style=\"border-radius: 5px;padding:0;margin-top: 10px;margin-bottom: 10px;border: solid 1px #d9d9d9;\">\n      <ion-radio-group  [(ngModel)]=\"shipMethod\">\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label>Standard Shipping</ion-label>\n            </div>\n            <div>\n              <ion-label>Free</ion-label>\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\"Standard Shipping free\" color=\"dark\"></ion-radio>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label> USPS Priority Mail</ion-label>\n            </div>\n            <div>\n              <ion-label>$8.95</ion-label>\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\"USPS Priority Mail $8.95\" color=\"dark\"></ion-radio>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label> UPS 2nd Day Air</ion-label>\n            </div>\n            <div>\n              <ion-label>$21.95</ion-label>\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\" UPS 2nd Day Air $21.95\" color=\"dark\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label> UPS Next Day Air</ion-label>\n            </div>\n            <div>\n              <ion-label>$34.95</ion-label>\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\"UPS Next Day Air $34.95\" color=\"dark\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n    <div>\n      <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n        <ion-col style=\"padding: 0;\" size=\"12\">\n          <ion-button (click)=\"toPayment()\"\n            style=\"--background: purple;height: 50px; width: 100%;--color:white;color:white;margin-left: 4px;\"\n            type=\"submit\">\n            Continue to payment\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div>\n      <ion-row style=\"display: flex;\n        align-items: center;height: 50px;\">\n        <ion-col style=\"padding: 0;display: flex;justify-content: center;color: #545454;align-items: center\" size=\"12\"\n          (click)=\"toInfo()\">\n          <img src='../../../assets/img/back.png' style=\"height: 14px; margin-right: 5px;\" /> Return to information\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <!-- Shipping address End -->\n\n  <!-- Payment Section Start -->\n  <div *ngIf=\"paymentSection\" style=\"padding-left: 16px; padding-right: 16px; margin-top: 20px;\">\n    <div style=\"border-radius: 5px;padding-top:10px;padding-bottom:10px;margin-top: 20px;border:solid 1px #d9d9d9;\">\n      <ion-item-divider>\n        <div style=\"width:100%;color:#535353\">\n\n          <div style=\"    display: flex;\n        width: 100%;\n       \">\n            <div style=\"width: 50%;font-size: 15px;\">Contact</div>\n            <div style=\"width: 50%;text-align: right;padding-right: 16px;font-size: 14px;\" (click)=\"toInfo()\">Change\n            </div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 5px;  margin-bottom: 16px; align-items: center;\">\n            <div style=\"width: 80%;\">{{form.email}}</div>\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item-divider style=\"margin-top: 10px;padding-bottom: 10px;\">\n        <div style=\"width:100%;color:#535353\">\n\n          <div style=\"    display: flex;\n      width: 100%;\n     \">\n            <div style=\"width: 50%;font-size: 15px;\">Ship to</div>\n            <div style=\"width: 50%;text-align: right;padding-right: 16px;font-size: 14px;\" (click)=\"toInfo()\">Change\n            </div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 5px; align-items: center;\">\n            <div style=\"width:80%;\">\n              555, erfvfdg rt4w, Near fds, Montgomery AL 35005, United States\n            </div>\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n        <div style=\"width:100%;color:#535353\">\n\n          <div style=\"    display: flex;\n        width: 100%;\n       \">\n            <div style=\"width: 50%;font-size: 15px;\">Method</div>\n            <div style=\"width: 50%;text-align: right;font-size: 14px;\" (click)=\"toShip()\">Change</div>\n          </div>\n          <div style=\"display: flex; width: 100%; margin-top: 5px;  margin-bottom: 16px; align-items: center;\">\n            <div style=\"width: 80%;\"> {{shipMethod}}</div>\n          </div>\n        </div>\n      </ion-item>\n    </div>\n\n    <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;margin-top: 16px;\">Gift card or discount code</div>\n    <ion-row style=\"margin-top: 5px;display: flex;\n    align-items: center;\">\n      <ion-col style=\"padding: 0;\" size=\"10\">\n        <ion-input type=\"text\" style=\"border: solid 1px #b766b7;height: 40px;\" placeholder=\"Gift card or discount code\">\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"2\" style=\"padding: 0;\">\n        <ion-button (click)=\"addToCart()\"\n          style=\"--background: purple;height: 40px; width: 100%;--color:white;color:white;margin-left: 4px;\"\n          type=\"submit\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;margin-top: 16px;\">Payment</div>\n    <ion-list style=\"border-radius: 5px;padding:0;margin-top: 10px;margin-bottom: 10px;border: solid 1px #d9d9d9;\">\n      <ion-radio-group [(ngModel)]=\"radioSelectPayment\">\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label>Credit Card</ion-label>\n            </div>\n            <div>\n              <!-- <ion-label>Free</ion-label> -->\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\"creditCard\" color=\"dark\"></ion-radio>\n        </ion-item>\n        <div *ngIf=\"radioSelectPayment == 'creditCard'\" style=\" display: flex;\n        align-items: center;justify-content: center;flex-direction: column; border-bottom:solid 1px #d9d9d9;\n        background:#fafafa;padding-top: 10px;padding-bottom: 10px;\">\n         <ion-input placeholder=\"Card number\" type=\"number\" [(ngModel)]=\"creditCard.cardNumber\" style=\"border: solid 1px #d9d9d9; width: 90%; margin-bottom: 5px;\"></ion-input>\n         <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\" *ngIf=\"creditCardCheck && !creditCard.cardNumber\">\n          <ion-col style=\"padding: 0;color: red;\">Enter a card number</ion-col>\n        </ion-row>\n         <ion-input placeholder=\"Name on card\" [(ngModel)]=\"creditCard.name\"  style=\"border: solid 1px #d9d9d9; width: 90%; margin-bottom: 5px;\"></ion-input>\n         <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\" *ngIf=\"creditCardCheck && !creditCard.name\">\n          <ion-col style=\"padding: 0;color: red;\">Enter a name on card</ion-col>\n        </ion-row>\n         <ion-input placeholder=\"Expity Date\"  [(ngModel)]=\"creditCard.expiry\" style=\"border: solid 1px #d9d9d9; width: 90%; margin-bottom: 5px;\"></ion-input>\n         <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\" *ngIf=\"creditCardCheck && !creditCard.expiry\">\n          <ion-col style=\"padding: 0;color: red;\">Enter expiry date</ion-col>\n        </ion-row>\n         <ion-input placeholder=\"Security code\" [(ngModel)]=\"creditCard.cvv\" style=\"border: solid 1px #d9d9d9; width: 90%;\"></ion-input>\n         <ion-row style=\"margin-top: -2px; width: 90%;text-align: left; margin-bottom: 5px;\" *ngIf=\"creditCardCheck && !creditCard.cvv\">\n          <ion-col style=\"padding: 0;color: red;\">Enter a cvv</ion-col>\n        </ion-row>\n        </div>\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div> <img src='../../../assets/img/paypal.png' style=\"width: 47px;height: 32px;\" /></div>\n            <!-- <div><ion-label>$8.95</ion-label></div> -->\n          </div>\n          <ion-radio slot=\"start\" value=\"paypal\" color=\"dark\"></ion-radio>\n        </ion-item>\n        <div *ngIf=\"radioSelectPayment == 'paypal'\" style=\"height:200px; display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        border-bottom:solid 1px #d9d9d9;\n        background:#fafafa;\n        \">\n          <ion-icon name=\"card\" style=\"font-size: 50pt;color: #b5b5b5;\"></ion-icon>\n          <p style=\"text-align: center;color:#545454;font-size: 14px;\">After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</p>\n        </div>\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div style=\"display:flex\"> <img src='../../../assets/img/amazon--pay.png' style=\"width: 85px;\" /></div>\n            <!-- <div><ion-label>amazonPay</ion-label></div>\n                <div><ion-label>$21.95</ion-label></div> -->\n          </div>\n          <ion-radio slot=\"start\" value=\"amazonPay\" color=\"dark\"></ion-radio>\n        </ion-item>\n        <div *ngIf=\"radioSelectPayment == 'amazonPay'\" style=\"height:200px; display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        border-bottom:solid 1px #d9d9d9;\n        background:#fafafa;\n        \">\n          <ion-icon name=\"card\" style=\"font-size: 50pt;color: #b5b5b5;\"></ion-icon>\n          <p style=\"text-align: center;color:#545454;font-size: 14px;\">You will be asked to login with Amazon.</p>\n        </div>\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div style=\"display:flex\"> <img src='../../../assets/img/affirm.png' style=\"width: 48px; height: 35px;\" /></div>\n           \n          </div>\n          <ion-radio slot=\"start\" value=\"affrim\" color=\"dark\"></ion-radio>\n        </ion-item>\n        <div *ngIf=\"radioSelectPayment == 'affrim'\" style=\"height:200px; display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        border-bottom:solid 1px #d9d9d9;\n        background:#fafafa;\n        \">\n          <ion-icon name=\"card\" style=\"font-size: 50pt;color: #b5b5b5;\"></ion-icon>\n          <p style=\"text-align: center;color:#545454;font-size: 14px;\">After clicking “Complete order”, you will be redirected to Affirm to complete your purchase securely.</p>\n        </div>\n\n      </ion-radio-group>\n    </ion-list>\n\n    <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;margin-top: 16px;\">Billing address</div>\n    <ion-list style=\"border-radius: 5px;padding:0;margin-top: 10px;margin-bottom: 10px;border: solid 1px #d9d9d9;\">\n      <ion-radio-group value=\"same\" [(ngModel)]=\"differentAddress\">\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label>Same as shipping address</ion-label>\n            </div>\n            <div>\n              <ion-label></ion-label>\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\"same\" color=\"dark\"></ion-radio>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <ion-label> Use a different billing address</ion-label>\n            </div>\n            <div>\n              <ion-label></ion-label>\n            </div>\n          </div>\n          <ion-radio slot=\"start\" value=\"different\" color=\"dark\"></ion-radio>\n        </ion-item>\n        <div *ngIf=\"differentAddress == 'different'\" style=\"display: flex;\n        align-items: center; justify-content: center; flex-direction: column;\n        border-bottom:solid 1px #d9d9d9; background:#fafafa; padding-left: 10px; padding-right: 10px; padding-bottom: 10px;\n        \">\n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"First name\" name='fname'\n                  [(ngModel)]=\"dform.fName\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.fName\">\n              <ion-col style=\"padding: 0;color: red;\">Enter a first name</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Last name\" name='lname'\n                  [(ngModel)]=\"dform.lName\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.lName\">\n              <ion-col style=\"padding: 0;color: red;\">Enter a last name</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Company (optional)\" name='company'\n                  [(ngModel)]=\"dform.company\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top:16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Address\" name='address'\n                  [(ngModel)]=\"dform.address\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.address\">\n              <ion-col style=\"padding: 0;color: red;\">Enter a address</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top:16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"Apartment, suite, etc. (optional)\"\n                  name='appartment' [(ngModel)]=\"dform.appartment\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"text\" style=\"border: solid 1px #b766b7;\" placeholder=\"City\" name='city'\n                  [(ngModel)]=\"dform.city\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.city\">\n              <ion-col style=\"padding: 0;color: red;\">Enter a city</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-select value=\"us\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"padding-right: 10px;max-width: 100% !important;padding-left: 8px;border: solid 1px #b766b7;\n              border-radius: 5px;\" name='country' [(ngModel)]=\"dform.country\">\n                  <ion-select-option value=\"\">Select Country</ion-select-option>\n                  <ion-select-option value=\"us\">United States</ion-select-option>\n                  <ion-select-option value=\"ca\">Canada</ion-select-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.country\">\n              <ion-col style=\"padding: 0;color: red;\">Select a country</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-select value=\"al\" okText=\"Okay\" cancelText=\"Dismiss\" style=\"padding-right: 10px;max-width: 100% !important;padding-left: 8px;border: solid 1px #b766b7;\n              border-radius: 5px;\" name='state' [(ngModel)]=\"dform.state\">\n                  <ion-select-option value=\"\">Select State</ion-select-option>\n                  <ion-select-option value=\"al\">Alabama</ion-select-option>\n                  <ion-select-option value=\"ak\">Alaska</ion-select-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.state\">\n              <ion-col style=\"padding: 0;color: red;\">Select a state</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"number\" style=\"border: solid 1px #b766b7;\" placeholder=\"ZIP code\" name='pin'\n                  [(ngModel)]=\"dform.pin\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 5px;\" *ngIf=\"dcheck && !dform.pin\">\n              <ion-col style=\"padding: 0;color: red;\">Enter a zip code</ion-col>\n            </ion-row>\n          </div>\n  \n          <div style=\" width: 100%;\">\n            <ion-row style=\"margin-top: 16px;display: flex;\n          align-items: center;\">\n              <ion-col style=\"padding: 0;\" size=\"12\">\n                <ion-input type=\"number\" maxlength=\"10\" style=\"border: solid 1px #b766b7;\" placeholder=\"Phone (optional)\" name='mobile'\n                  [(ngModel)]=\"dform.mobile\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n      </ion-radio-group>\n    </ion-list>\n\n    <div class=\"head-color\" style=\"font-size: 18px;font-weight: 600;margin-top: 16px;\">Remember me</div>\n    <ion-list style=\"border-radius: 5px;padding:0;margin-top: 10px;margin-bottom: 10px;border: solid 1px #d9d9d9;\">\n\n        <ion-item lines=\"none\" style=\"border-bottom:solid 1px #d9d9d9 \">\n          <div style=\"width: 100%; display: flex;justify-content: space-between;color: #545454;\">\n            <div>\n              <p>Save my information for a faster checkout</p>\n            </div>\n            \n          </div>\n          <ion-checkbox color=\"dark\"  slot=\"start\" [(ngModel)]=\"rememberMe\"></ion-checkbox>\n        </ion-item>\n        <div *ngIf=\"rememberMe\" style=\"height:200px; display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        border-bottom:solid 1px #d9d9d9;\n        background:#fafafa;\n        color: #545454;\n        \">\n        <p style=\"margin: 0; width: 90%;font-size: 14px;\">Mobile number</p>\n        <ion-row style=\"margin-top: 5px;display: flex;width:100%;margin-bottom: 5px;\n        align-items: center;width:90%\">\n          <ion-col style=\"padding: 0;\" size=\"12\">\n            <ion-input type=\"number\" [(ngModel)]=\"mobile\" style=\"border: solid 1px #b766b7;height: 40px;\" placeholder=\"88888-88888\">\n            </ion-input>\n           \n          </ion-col>\n          <ion-row style=\"margin-top: 5px;\" *ngIf=\"mcheck && !mobile\" >\n            <ion-col style=\"padding: 0;color: red;\">Please add phone number</ion-col>\n          </ion-row>\n        </ion-row>\n        <p  style=\"margin: 0; width: 90%;font-size: 14px\">Next time you check out here or on other stores powered by Shopify, you’ll receive a code by text message to securely purchase with Shop Pay.</p>\n        </div>\n\n    </ion-list>\n\n<!-- Component Added -->\n\n    <app-payment></app-payment>\n\n<!-- Component End -->\n\n    <div>\n      <ion-row style=\"margin-top: 16px;display: flex;\n        align-items: center;\">\n        <ion-col style=\"padding: 0;\" size=\"12\">\n          <ion-button (click)=\"validateDifferent()\"\n            style=\"--background: purple;height: 50px; width: 100%;--color:white;color:white;margin-left: 4px;\"\n            type=\"submit\">\n            Complete order\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div>\n      <ion-row style=\"display: flex;\n        align-items: center;height: 50px;\">\n        <ion-col style=\"padding: 0;display: flex;justify-content: center;color: #545454;align-items: center\" size=\"12\"\n          (click)=\"toShip()\">\n          <img src='../../../assets/img/back.png' style=\"height: 14px; margin-right: 5px;\" /> Return to shipping\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n  </div>\n  <!-- Payment Section End -->\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/after-cart/payment/payment.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/after-cart/payment/payment.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payment works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/after-cart/after-cart-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AfterCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPageRoutingModule", function() { return AfterCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _after_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./after-cart.page */ "./src/app/pages/after-cart/after-cart.page.ts");




const routes = [
    {
        path: '',
        component: _after_cart_page__WEBPACK_IMPORTED_MODULE_3__["AfterCartPage"]
    }
];
let AfterCartPageRoutingModule = class AfterCartPageRoutingModule {
};
AfterCartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AfterCartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/after-cart/after-cart.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart.module.ts ***!
  \*******************************************************/
/*! exports provided: AfterCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPageModule", function() { return AfterCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _after_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./after-cart-routing.module */ "./src/app/pages/after-cart/after-cart-routing.module.ts");
/* harmony import */ var _after_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./after-cart.page */ "./src/app/pages/after-cart/after-cart.page.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/pages/after-cart/payment/payment.component.ts");








let AfterCartPageModule = class AfterCartPageModule {
};
AfterCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _after_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["AfterCartPageRoutingModule"],
        ],
        declarations: [_after_cart_page__WEBPACK_IMPORTED_MODULE_6__["AfterCartPage"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"]],
        entryComponents: [_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"]]
    })
], AfterCartPageModule);



/***/ }),

/***/ "./src/app/pages/after-cart/after-cart.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding-left: 0;\n}\nion-header ion-toolbar ion-title img {\n  width: 55%;\n  vertical-align: text-bottom;\n}\nion-header ion-toolbar ion-buttons {\n  margin-right: 13px;\n  font-size: 20px;\n}\n.order-summary-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  background: #fafafa;\n  height: 65px;\n  border-bottom: solid 1px #d8d8d8;\n  color: #242424;\n}\n.order-summary-text .p-text {\n  display: -webkit-box;\n  display: flex;\n}\n.order-summary-text .p-text ion-icon {\n  margin-right: 10px;\n}\n.order-summary-text .p-font600 {\n  font-weight: 600;\n}\n.height {\n  min-height: 250px !important;\n}\n.head-color {\n  color: #333333;\n}\n.sub-color {\n  color: #545454;\n}\nion-input {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmV3RnJlc2hUcmVuZC9GcmVzaFRyZW5kRWNvbW1lcmNlL3NyYy9hcHAvcGFnZXMvYWZ0ZXItY2FydC9hZnRlci1jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWZ0ZXItY2FydC9hZnRlci1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FERVE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUNBVjtBREdNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRFI7QURPQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ0pGO0FETUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNKSjtBREtJO0VBQ0Usa0JBQUE7QUNITjtBRE1FO0VBQ0UsZ0JBQUE7QUNKSjtBRFVBO0VBQ0ksNEJBQUE7QUNQSjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEU0E7RUFDRSxjQUFBO0FDTkY7QURRQTtFQUNFLGtCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZnRlci1jYXJ0L2FmdGVyLWNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbi5vcmRlci1zdW1tYXJ5LXRleHR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDhkOGQ4O1xuICBjb2xvcjojMjQyNDI0O1xuXG4gIC5wLXRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG4gIC5wLWZvbnQ2MDB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG5cblxuLmhlaWdodHtcbiAgICBtaW4taGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZC1jb2xvcntcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uc3ViLWNvbG9ye1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cbmlvbi1pbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGltZyB7XG4gIHdpZHRoOiA1NSU7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm9yZGVyLXN1bW1hcnktdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDhkOGQ4O1xuICBjb2xvcjogIzI0MjQyNDtcbn1cbi5vcmRlci1zdW1tYXJ5LXRleHQgLnAtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ub3JkZXItc3VtbWFyeS10ZXh0IC5wLXRleHQgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ub3JkZXItc3VtbWFyeS10ZXh0IC5wLWZvbnQ2MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWQtY29sb3Ige1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnN1Yi1jb2xvciB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/after-cart/after-cart.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/after-cart/after-cart.page.ts ***!
  \*****************************************************/
/*! exports provided: AfterCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPage", function() { return AfterCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AfterCartPage = class AfterCartPage {
    constructor(router) {
        this.router = router;
        this.show = false;
        this.cartItems = [];
        this.infoSection = false;
        this.shippingAddressSection = false;
        this.paymentSection = false;
        this.check = false;
        this.emailtest = false;
        this.shipMethod = '';
        this.form = {
            email: '',
            fName: '',
            lName: '',
            company: '',
            address: '',
            appartment: '',
            city: '',
            country: '',
            state: '',
            pin: '',
            mobile: '',
        };
        this.dform = {
            email: '',
            fName: '',
            lName: '',
            company: '',
            address: '',
            appartment: '',
            city: '',
            country: '',
            state: '',
            pin: '',
            mobile: '',
        };
        this.creditCard = {
            cardNumber: '',
            name: '',
            expiry: '',
            cvv: '',
        };
        this.mcheck = false;
        this.mobile = '';
        // creditCard = '';
        this.differentAddress = '';
        this.rememberMe = false;
        this.dcheck = false;
        this.creditCardCheck = false;
        this.radioSelectPayment = '';
    }
    ngOnInit() {
        let _ = this;
        console.log('vm', _.infoSection);
        this.infoSection = true;
    }
    toggle() {
        this.show = !this.show;
    }
    ionViewWillEnter() {
        let a = [];
        if (!JSON.parse(localStorage.getItem('cartProducts'))) {
        }
        else {
            this.totalAmount = 0;
            a = JSON.parse(localStorage.getItem('cartProducts'));
            a.map((item) => {
                this.totalAmount = this.totalAmount + item.itemTotal;
            });
        }
        this.cartItems = a;
        this.height = ((this.cartItems.length * 72) + 248) + 'px';
        console.log('cartItems', this.cartItems);
    }
    gotoHome() {
        this.router.navigateByUrl('/');
    }
    cartPage() {
        this.router.navigateByUrl('/cart-page');
    }
    recheck() {
        console.log("Fname", this.form);
        this.check = true;
        this.form.fName = this.form.fName.trim();
        if (!this.emailvalidate()) {
            this.emailtest = true;
            return false;
        }
        if (this.form.fName == '') {
            return false;
        }
        else if (this.form.lName == '') {
            return false;
        }
        else if (this.form.address == '') {
            return false;
        }
        else if (this.form.city == '') {
            return false;
        }
        else if (this.form.country == '') {
            return false;
        }
        else if (this.form.pin == '') {
            return false;
        }
        else if (this.form.state == '') {
            return false;
        }
        else {
            this.check = false;
            return true;
        }
    }
    emailvalidate() {
        if (this.form.email == '') {
            this.emailtest = true;
            // return false;
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
            console.log("inside the Email validation");
            this.emailtest = true;
            // return false;
        }
        else {
            this.emailtest = false;
            return true;
        }
    }
    validate() {
        if (this.recheck()) {
            console.log("testing Clear");
            this.infoSection = false;
            this.shippingAddressSection = true;
        }
        else {
            console.log("testing Stuck");
        }
    }
    toInfo() {
        this.infoSection = true;
        this.shippingAddressSection = false;
        this.paymentSection = false;
    }
    // else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)){
    //   return false; 
    // }
    ionViewDidEnter() {
        document.addEventListener("backbutton", function (e) {
            console.log("disable back button");
        }, false);
    }
    toShip() {
        this.infoSection = false;
        this.shippingAddressSection = true;
        this.paymentSection = false;
    }
    toPayment() {
        this.infoSection = false;
        this.shippingAddressSection = false;
        this.paymentSection = true;
    }
    validateDifferent() {
        if (this.differentAddress == 'different') {
            this.dcheck = true;
            if (this.dform.fName == '') {
                return false;
            }
            else if (this.dform.lName == '') {
                return false;
            }
            else if (this.dform.address == '') {
                return false;
            }
            else if (this.dform.city == '') {
                return false;
            }
            else if (this.dform.country == '') {
                return false;
            }
            else if (this.dform.pin == '') {
                return false;
            }
            else if (this.dform.state == '') {
                return false;
            }
            else {
                this.dcheck = false;
                return true;
            }
        }
        if (this.rememberMe) {
            this.mcheck = true;
        }
        else {
            this.mcheck = false;
        }
        if (this.radioSelectPayment === 'creditCard') {
            this.creditCardCheck = true;
            if (this.creditCard.cardNumber == '') {
                return false;
            }
            else if (this.creditCard.name == '') {
                return false;
            }
            else if (this.creditCard.expiry == '') {
                return false;
            }
            else if (this.creditCard.cvv == '') {
                return false;
            }
            else {
                this.creditCardCheck = false;
            }
        }
        else {
            this.creditCardCheck = false;
        }
        if (!this.creditCardCheck && !this.dcheck) {
            this.router.navigateByUrl('/order-success');
        }
    }
};
AfterCartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AfterCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-after-cart',
        template: __webpack_require__(/*! raw-loader!./after-cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/after-cart/after-cart.page.html"),
        styles: [__webpack_require__(/*! ./after-cart.page.scss */ "./src/app/pages/after-cart/after-cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AfterCartPage);



/***/ }),

/***/ "./src/app/pages/after-cart/payment/payment.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/after-cart/payment/payment.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FmdGVyLWNhcnQvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/after-cart/payment/payment.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/after-cart/payment/payment.component.ts ***!
  \***************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentComponent = class PaymentComponent {
    constructor() { }
    ngOnInit() { }
};
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/after-cart/payment/payment.component.html"),
        styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/pages/after-cart/payment/payment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaymentComponent);



/***/ })

}]);
//# sourceMappingURL=pages-after-cart-after-cart-module-es2015.js.map