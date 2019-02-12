(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forms_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.router */ "./src/app/forms/forms.router.ts");
/* harmony import */ var _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactive-forms/reactive-forms.component */ "./src/app/forms/reactive-forms/reactive-forms.component.ts");
/* harmony import */ var _template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-driven-forms/template-driven-forms.component */ "./src/app/forms/template-driven-forms/template-driven-forms.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forms_router__WEBPACK_IMPORTED_MODULE_2__["FormsRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsComponent"], _template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_4__["TemplateDrivenFormsComponent"]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.router.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.router.ts ***!
  \***************************************/
/*! exports provided: FormsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRouterModule", function() { return FormsRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactive-forms/reactive-forms.component */ "./src/app/forms/reactive-forms/reactive-forms.component.ts");
/* harmony import */ var _template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-driven-forms/template-driven-forms.component */ "./src/app/forms/template-driven-forms/template-driven-forms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormsRoutes = [
    { path: 'reactive_forms', component: _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsComponent"] },
    { path: 'template_forms', component: _template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_3__["TemplateDrivenFormsComponent"] },
];
var FormsRouterModule = /** @class */ (function () {
    function FormsRouterModule() {
    }
    FormsRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(FormsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], FormsRouterModule);
    return FormsRouterModule;
}());



/***/ }),

/***/ "./src/app/forms/reactive-forms/reactive-forms.component.html":
/*!********************************************************************!*\
  !*** ./src/app/forms/reactive-forms/reactive-forms.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"form-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"form-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Reactive Forms</h1>\n\t\t</mat-toolbar>\n\t\t    <div [hidden]=\"submitted\" fxLayout=\"column\"  class=\"widgetHolder-content\" fxLayoutAlign=\"space-around stretch\" style=\"background-color: white;\">\n       \n\t\t\n        <form [formGroup]=\"profileForm\"  (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxFlex=\"100\" >\n\t\t\t<mat-form-field class=\"width\">\n\t\t\t\t<input type=\"text\" matInput placeholder=\"Enter Username\"  formControlName=\"username\" required>\n\t\t\t\n\t\t\t</mat-form-field>\n\t\t\t<mat-error *ngIf=\"username.invalid&& (username.dirty || username.touched)\" align=\"end\" style=\"color: red;\" class=\"mat-body-1 center-align \"> \n\t\t\t\t\n\t\t\t\t\tName must be at least 6 characters long.\n\t\t\t\t\n\t\t\t</mat-error>\n\n\t\t\t\n\t\t\t<mat-form-field  class=\"width\">\n\t\t\t\t<input type=\"email\" matInput placeholder=\"Enter Your Email\"  formControlName=\"email\"  required\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"  required >\n\t\t\t</mat-form-field>\n\t\t\t<mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\" align=\"end\" style=\"color: red;\" class=\"mat-body-1 center-align\" >\n\t\t\t\t\n\t\t\t\t\tPlease enter valid email \n\t\t\t</mat-error>\n\t\t\t<mat-form-field  class=\"width\">\n\t\t\t\t<input type=\"text\" matInput placeholder=\"Enter your Number\"  \n\t\t\t\tformControlName=\"number\" required pattern=\"[0-9]*\">\n\t\t\t</mat-form-field>\n\t\t\t<mat-error *ngIf=\"number.hasError('minlength') && (number.dirty || number.touched)\" align=\"end\" style=\"color: red;\" class=\"mat-body-1 center-align\">\n\t\t\t\t\n\t\t\t\t\tPlease enter valid number \n\t\t\t</mat-error>\n\n\t\t\t<mat-form-field>\n    \t\t\t   <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"pwd\" >\n    \t\t\t   <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    \t\t</mat-form-field>\n\t\t\t<button style=\"font-weight: bold;\" mat-raised-button type=\"submit\" *ngIf=\"username.valid && email.valid && number.valid\" class=\"mat-headline center-align\">Submit</button>\n\t\t</form>\n    </div>\n    <div [hidden]=\"!submitted\" style=\"background-color: white;\">\n\t\t<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n\t\t\t<h2 class=\"mat-headline center-align\">You submitted the following:</h2>\n\t\t<div fxLayout=\"row\"  fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n\t\t\t<div >Name</div>\n\t\t\t<div>{{ profileForm.value.username}}</div>\n\t\t</div>\n\t\t<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n\t\t\t<div>Number</div>\n\t\t\t<div>{{profileForm.value.number }}</div>\n\t\t</div>\n\t\t<div fxLayout=\"row\" fxLayoutGap=\"20px\"  class=\"mat-body center-align\">\n\t\t\t<div >Password</div>\n\t\t\t<div>{{ profileForm.value.pwd}}</div>\n\t\t</div>\n\t\t<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n\t\t\t<div >Email</div>\n\t\t\t<div>{{ profileForm.value.email}}</div>\n\t\t</div>\n\t\t<br>\n\t\t<button mat-raised-button type=\"submit\" (click)=\"submitted=false\">Edit</button>\n\t</div>\n\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/forms/reactive-forms/reactive-forms.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/forms/reactive-forms/reactive-forms.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.mat-form-field {\n  padding-left: 10px; }\n\n.validation-message {\n  background-color: #00BCD4; }\n\n.container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.form-container {\n  padding: 5px 15px 15px 15px; }\n\n.form-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/forms/reactive-forms/reactive-forms.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/forms/reactive-forms/reactive-forms.component.ts ***!
  \******************************************************************/
/*! exports provided: ReactiveFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsComponent", function() { return ReactiveFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveFormsComponent = /** @class */ (function () {
    function ReactiveFormsComponent(form) {
        this.form = form;
        this.submitted = false;
        this.profileForm = this.form.group({
            username: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)], updateOn: 'blur' }],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            number: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)], updateOn: 'blur' }],
            pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    Object.defineProperty(ReactiveFormsComponent.prototype, "number", {
        get: function () {
            return this.profileForm.get('number');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormsComponent.prototype, "username", {
        get: function () {
            return this.profileForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormsComponent.prototype, "email", {
        get: function () {
            return this.profileForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    // checkUserExists() {
    //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
    // }
    ReactiveFormsComponent.prototype.onSubmit = function () {
        console.log('');
        this.submitted = true;
    };
    ReactiveFormsComponent.prototype.ngOnInit = function () {
    };
    ReactiveFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-reactive-forms',
            template: __webpack_require__(/*! ./reactive-forms.component.html */ "./src/app/forms/reactive-forms/reactive-forms.component.html"),
            styles: [__webpack_require__(/*! ./reactive-forms.component.scss */ "./src/app/forms/reactive-forms/reactive-forms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ReactiveFormsComponent);
    return ReactiveFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven-forms/template-driven-forms.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/forms/template-driven-forms/template-driven-forms.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"form-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"form-header\">\n\t\t\t<h1 class=\"mat-headline center-align\">Template Driven Forms</h1>\n\t\t</mat-toolbar>\n\t\t<div [hidden]=\"submitted\" style=\"background-color: white;\">\n\n\t\t\t<form (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" >\n\t\t\t\t<mat-form-field >\n\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\" required minlength=\"4\">\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<div  style=\"color:red\" *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n\n\t\t\t\t\t<div *ngIf=\"name.errors.required\">\n\t\t\t\t\t\tName is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"name.errors.minlength\">\n\t\t\t\t\t\tName must be at least 4 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput type=\"number\"  [(ngModel)]=\"model.number\"  name=\"number\" #number=\"ngModel\" required minlength=\"10\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<div  style=\"color:red\" *ngIf=\"number.invalid && (number.dirty || number.touched)\"\n\t\t\t\t>\n\t\t\t\t\t<div *ngIf=\"number.errors.required\">\n\t\t\t\t\t\tnumber is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"number.errors.minlength\">\n\t\t\t\t\t\tnumber must be at least 10 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<mat-input-container fxFlex>\n      \t\t\t\t<input matInput placeholder=\"Character count (max. 100)\" maxlength=\"100\"\t#characterCountHintExample value=\"Hello! How are you today?\">\n      \t\t\t\t<mat-hint align=\"end\">{{ characterCountHintExample.value.length }} / 100\n      \t\t\t\t</mat-hint>\n    \t\t\t</mat-input-container>\n    \t\t\t<mat-form-field>\n    \t\t\t   <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" >\n    \t\t\t   <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    \t\t\t </mat-form-field>\n\t\t\t\t<button mat-raised-button type=\"submit\"  [disabled]=\"name.invalid||number.invalid\" class=\"mat-subheading-2 center-align button-style\">Submit</button>\n\t\t\t</form>\n\t\t\t\n\t\t</div>\n\n\t\t<div [hidden]=\"!submitted\" style=\"background-color: white;\">\n\t\t\t<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n\t\t\t\t<h2 class=\"mat-subheading-2 center-align\">You submitted the following:</h2>\n\t\t\t\t<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n\t\t\t\t\t<div >Name</div>\n\t\t\t\t\t<div>{{ model.name }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n\t\t\t\t\t<div>Number</div>\n\t\t\t\t\t<div>{{ model.number }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n\t\t\t\t\t<div >Password</div>\n\t\t\t\t\t<div>{{ model.pwd}}</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<button mat-raised-button  type=\"submit\" class=\"button-style\" (click)=\"submitted=false\">Edit</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/template-driven-forms/template-driven-forms.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/forms/template-driven-forms/template-driven-forms.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.mat-form-field {\n  padding-left: 10px; }\n\n.container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.form-container {\n  padding: 5px 15px 15px 15px; }\n\n.form-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-style {\n  background-color: #327ebd;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/forms/template-driven-forms/template-driven-forms.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/forms/template-driven-forms/template-driven-forms.component.ts ***!
  \********************************************************************************/
/*! exports provided: TemplateDrivenFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenFormsComponent", function() { return TemplateDrivenFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/forms/template-driven-forms/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateDrivenFormsComponent = /** @class */ (function () {
    function TemplateDrivenFormsComponent() {
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](18, 'User', '', 8086824175);
        this.submitted = false;
    }
    TemplateDrivenFormsComponent.prototype.onSubmit = function () { this.submitted = true; };
    TemplateDrivenFormsComponent.prototype.newUser = function () {
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](42, '', ' ');
    };
    TemplateDrivenFormsComponent.prototype.ngOnInit = function () {
    };
    TemplateDrivenFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-template-driven-forms',
            template: __webpack_require__(/*! ./template-driven-forms.component.html */ "./src/app/forms/template-driven-forms/template-driven-forms.component.html"),
            styles: [__webpack_require__(/*! ./template-driven-forms.component.scss */ "./src/app/forms/template-driven-forms/template-driven-forms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateDrivenFormsComponent);
    return TemplateDrivenFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/template-driven-forms/user.ts":
/*!*****************************************************!*\
  !*** ./src/app/forms/template-driven-forms/user.ts ***!
  \*****************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name, pwd, number) {
        this.id = id;
        this.name = name;
        this.pwd = pwd;
        this.number = number;
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map