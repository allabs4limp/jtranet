(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlexFill fxLayoutAlign=\"center center\"  style=\"\nheight: 100%;\nbackground-repeat: no-repeat;\nbackground-position: center;\nbackground-size: cover; \">\n\n<section class=\"loginForm\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\"  style=\"height: 700px;\">\n            <div class=\"logo\">\n                    <img alt=\"\" class=\"auto-style1\" src=\"../../../assets/jamb.jpg\" /> \n                                              \n                     </div>\n        <mat-card>\n            <mat-card-title>\n                    \n            \n            </mat-card-title>\t\n            <mat-card-content>\n        <form fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" #LoginForm=\"ngForm\" (ngSubmit)=\"OnLogin(LoginForm)\">\n            <div>\n                    <mat-form-field class=\"full-width\">\n                            <input type=\"email\" matInput email ngModel placeholder=\"IDcard\" name=\"email\" #emailInput=\"ngModel\" required >\n                            <mat-error *ngIf=\"emailInput.hasError('required')\">Field must not be empty</mat-error>\n                            <mat-error *ngIf=\"!emailInput.hasError('required')\">Email is invalid</mat-error>\n                     </mat-form-field>\n             </div>\n             <div> \n                         <mat-form-field class=\"full-width\">\n                            <input type=\"password\" matInput ngModel placeholder=\"Password\" #passInput=\"ngModel\" name=\"pass\" required >\n                        </mat-form-field>\n             </div>\n             <div>\n                <button mat-raised-button color=\"primary\" type=\"submit\" >Log in</button>\n               </div>    \n            \n        </form>\n    </mat-card-content>\n</mat-card>\n    </div>  \n </section>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigin-conainer {\n  min-height: 100%;\n  background-size: cover;\n  padding: 100px; }\n\n.sigin-main {\n  position: relative;\n  margin: 0 auto;\n  width: 500px; }\n\n.full-width {\n  width: 100%; }\n\n.redirect {\n  font-size: 14px;\n  margin-left: 10px;\n  color: #00AAAA; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.OnLogin = function (loginform) {
        var _this = this;
        this.authservice.LoginUser({ email: loginform.value.email, password: loginform.value.pass })
            .subscribe(function (result) {
            _this.userDetails = result;
            //   console.log(this.userDetails[0]);
            if (_this.userDetails[0] != null) {
                localStorage.setItem('profilename', _this.userDetails[0].Fullname);
                localStorage.setItem('department', _this.userDetails[0].Department);
                localStorage.setItem('conraiss', _this.userDetails[0].Conraiss);
                localStorage.setItem('role', _this.userDetails[0].Role);
                localStorage.setItem('idcard', _this.userDetails[0].IDcard);
                localStorage.setItem('email', _this.userDetails[0].Email);
                localStorage.setItem('phoneno', _this.userDetails[0].PhoneNo);
                localStorage.setItem('certnum', _this.userDetails[0].CertNo);
                localStorage.setItem('ippisno', _this.userDetails[0].IPPISNo);
                _this.router.navigate(['/auth/dashboard']);
            }
            else {
                console.log('Nothing is here');
                //  this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map