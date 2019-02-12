(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["downloads-downloads-module"],{

/***/ "./src/app/downloads/downloads.module.ts":
/*!***********************************************!*\
  !*** ./src/app/downloads/downloads.module.ts ***!
  \***********************************************/
/*! exports provided: highlightJsFactory, DownloadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsModule", function() { return DownloadsModule; });
/* harmony import */ var _memos_memos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memos/memos.component */ "./src/app/downloads/memos/memos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _downloads_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./downloads.router */ "./src/app/downloads/downloads.router.ts");
/* harmony import */ var _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payslips/payslips.component */ "./src/app/downloads/payslips/payslips.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_18__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_18__;
}
var DownloadsModule = /** @class */ (function () {
    function DownloadsModule() {
    }
    DownloadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _downloads_router__WEBPACK_IMPORTED_MODULE_21__["DownloadsRouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_19__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_19__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
            ],
            declarations: [
                _memos_memos_component__WEBPACK_IMPORTED_MODULE_0__["MemosComponent"],
                _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_22__["PayslipsComponent"]
            ],
            exports: [
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"]
            ]
        })
    ], DownloadsModule);
    return DownloadsModule;
}());



/***/ }),

/***/ "./src/app/downloads/downloads.router.ts":
/*!***********************************************!*\
  !*** ./src/app/downloads/downloads.router.ts ***!
  \***********************************************/
/*! exports provided: DownloadsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsRouterModule", function() { return DownloadsRouterModule; });
/* harmony import */ var _memos_memos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memos/memos.component */ "./src/app/downloads/memos/memos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payslips/payslips.component */ "./src/app/downloads/payslips/payslips.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DownloadsRoutes = [
    { path: 'memos', component: _memos_memos_component__WEBPACK_IMPORTED_MODULE_0__["MemosComponent"], data: { animation: 'buttons' } },
    { path: 'payslips', component: _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_3__["PayslipsComponent"], data: { animation: 'buttons' } },
    { path: '', redirectTo: '/auth/dashboard', pathMatch: 'full' }
];
var DownloadsRouterModule = /** @class */ (function () {
    function DownloadsRouterModule() {
    }
    DownloadsRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(DownloadsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], DownloadsRouterModule);
    return DownloadsRouterModule;
}());



/***/ }),

/***/ "./src/app/downloads/memos/memos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/downloads/memos/memos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/downloads/memos/memos.component.html":
/*!******************************************************!*\
  !*** ./src/app/downloads/memos/memos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">DOWNLOAD MEMOS</h1>\n    </mat-toolbar>\n\n     \n        <div class=\"container-fluid\">\n           \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n                    \n                 <div class=\"row card\">\n                        <div class=\"row\" *ngFor=\"let item of attachmentList; let i = index\"\n                        style=\"margin:10px;padding:5px;background-color:rgb(172, 172, 172); border-radius:5px; line-height:40px;\">\n                            <div class=\"col-sm-7\">{{item.originalname}}</div>\n                          <!--   <div class=\"col-sm-2\">Date</div> -->\n                            <div class=\"col-sm-5\" style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"download(i)\">Download</button></div>\n                        </div>\n                    </div> \n                </div>\n              <!--   <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/downloads/memos/memos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/downloads/memos/memos.component.ts ***!
  \****************************************************/
/*! exports provided: MemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemosComponent", function() { return MemosComponent; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../downloads.service */ "./src/app/downloads/downloads.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemosComponent = /** @class */ (function () {
    function MemosComponent(_fileService, globals) {
        this._fileService = _fileService;
        this.globals = globals;
        this.uri = 'http://' + this.globals.ipaddress + ':3000/uploads/upload';
        this.attachmentList = [];
        this.attachmentList.push(JSON.parse('"Text"'));
    }
    MemosComponent.prototype.download = function (index) {
        var filename = this.attachmentList[index].originalname;
        console.log(filename);
        this._fileService.downloadFile(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
    };
    MemosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fileService.GetListofAllMemos().subscribe(function (result) {
            _this.attachmentList = result;
        }, function (error) { return console.error(error); });
    };
    MemosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-memos',
            template: __webpack_require__(/*! ./memos.component.html */ "./src/app/downloads/memos/memos.component.html"),
            styles: [__webpack_require__(/*! ./memos.component.css */ "./src/app/downloads/memos/memos.component.css")]
        }),
        __metadata("design:paramtypes", [_downloads_service__WEBPACK_IMPORTED_MODULE_2__["DownloadsService"], _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], MemosComponent);
    return MemosComponent;
}());



/***/ }),

/***/ "./src/app/downloads/payslips/payslips.component.css":
/*!***********************************************************!*\
  !*** ./src/app/downloads/payslips/payslips.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/downloads/payslips/payslips.component.html":
/*!************************************************************!*\
  !*** ./src/app/downloads/payslips/payslips.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">DOWNLOAD PAYSLIPS</h1>\n    </mat-toolbar>\n\n     \n        <div class=\"container-fluid\">\n           \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n               \n                 <div class=\"row card\">\n                    <form [formGroup]=\"PayslipFormgroup\" (ngSubmit)=\"ViewPayslips()\" #PaySlipForm=\"ngForm\">\n                    <div class=\"row\" style=\"text-align:center;\">\n                        <mat-form-field  color=\"accent\" >\n                          <mat-select placeholder=\"YEAR\" ngModel formControlName=\"PayslipYear\" name=\"payyear\"  required >  \n                            <mat-option value=\"2018\">2018</mat-option>\n                            <mat-option value=\"2019\">2019</mat-option>\n                           </mat-select>\n                         <mat-hint style=\"color: blue\">Select Year</mat-hint>\n                      </mat-form-field>\n                     </div>\n                     <br>\n\n                   <div class=\"row\" style=\"text-align:center;\">\n                      <mat-form-field  color=\"accent\" >\n                        <mat-select placeholder=\"MONTH\" ngModel formControlName=\"PayslipMonth\" name=\"paymonth\"  required >  \n                          <mat-option value=\"JAN\">JANUARY</mat-option>\n                          <mat-option value=\"FEB\">FEBRUARY</mat-option>\n                         </mat-select>\n                       <mat-hint style=\"color: blue\">Select Month</mat-hint>\n                    </mat-form-field>\n                   </div>\n                   <br>\n                   <div class=\"row\" style=\"text-align:center;\">\n                      <mat-form-field  color=\"accent\">\n                          <input matInput [(ngModel)]=\"ippisno\" placeholder=\"IPPIS NO\" formControlName=\"PayslipIPPIS\" [readonly]=\"true\">\n                        </mat-form-field>\n                   </div>\n                   <div class=\"row\" style=\"text-align:center;\">\n                   <button class=\"primary\" [disabled]=\"!PaySlipForm.form.valid\"  color=\"primary\" mat-raised-button>VIEW</button>\n                   </div>\n                </form>  \n                   \n                        <div class=\"row\" *ngFor=\"let item of fileData; let i = index\"\n                        style=\"margin:10px;padding:5px;background-color:rgb(172, 172, 172); border-radius:5px; line-height:40px;\">\n                            <div class=\"col-sm-7\">{{item.originalname}}</div>\n                          <!--   <div class=\"col-sm-2\">Date</div> -->\n                            <div class=\"col-sm-5\" style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"download(i)\">Download</button></div>\n                        </div>\n                    </div> \n                </div>\n              <!--   <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/downloads/payslips/payslips.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/downloads/payslips/payslips.component.ts ***!
  \**********************************************************/
/*! exports provided: PayslipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayslipsComponent", function() { return PayslipsComponent; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../downloads.service */ "./src/app/downloads/downloads.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayslipsComponent = /** @class */ (function () {
    function PayslipsComponent(_fileService, globals, _formBuilder, toastr) {
        this._fileService = _fileService;
        this.globals = globals;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.attachmentList = [];
        this.attachmentList.push(JSON.parse('"Text"'));
    }
    PayslipsComponent.prototype.download = function (index) {
        var filename = this.fileData[0].originalname;
        console.log(filename);
        this._fileService.downloadFilePayslip(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
    };
    PayslipsComponent.prototype.ViewPayslips = function () {
        var _this = this;
        this._fileService.GetListofAllPayslips(this.PayslipFormgroup.value).subscribe(function (result) {
            _this.fileData = result;
        }, function (error) {
            _this.showError();
        });
    };
    PayslipsComponent.prototype.showSuccess = function () {
        this.toastr.success('New Staff Details Added Succesully');
    };
    PayslipsComponent.prototype.showError = function () {
        this.toastr.error('File Not available for download');
    };
    PayslipsComponent.prototype.ngOnInit = function () {
        this.ippisno = localStorage.getItem('ippisno');
        this.PayslipFormgroup = this._formBuilder.group({
            PayslipYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PayslipMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PayslipIPPIS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    PayslipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payslips',
            template: __webpack_require__(/*! ./payslips.component.html */ "./src/app/downloads/payslips/payslips.component.html"),
            styles: [__webpack_require__(/*! ./payslips.component.css */ "./src/app/downloads/payslips/payslips.component.css")]
        }),
        __metadata("design:paramtypes", [_downloads_service__WEBPACK_IMPORTED_MODULE_2__["DownloadsService"], _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], PayslipsComponent);
    return PayslipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=downloads-downloads-module.js.map