(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploads-uploads-module"],{

/***/ "./src/app/uploads/memos/memos.component.css":
/*!***************************************************!*\
  !*** ./src/app/uploads/memos/memos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/uploads/memos/memos.component.html":
/*!****************************************************!*\
  !*** ./src/app/uploads/memos/memos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"table-header\">\n        <h1 class=\"mat-headline center-align\">UPLOAD MEMOS</h1>\n      </mat-toolbar>\n  \n       \n          <div class=\"container-fluid\">\n              <div class=\"row header-section\">\n                  <span> File Upload </span>\n              </div>\n          \n              <div class=\"row\">\n                <!--   <div class=\"col-md-2\"></div> -->\n                  <div class=\"col-md-12\">\n                      <div class=\"row card\">\n                          <div class=\"col-sm-12\">\n                              <h4>Upload Section</h4>\n                              <div id=\"fileSelector\">\n                                  <input type=\"file\" name=\"fileUpload\" id=\"fileUpload\"\n                                  multiple ng2FileSelect [uploader]=\"uploader\">\n                              </div>\n                              <div>\n                                  <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                                      <div class=\"col-sm-4\">{{item.file.name}}</div>\n                                      <div class=\"col-sm-4\">\n                                          <div class=\"progress\">\n                                              <div class=\"progress-bar bg-success\" \n                                              [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                          </div>\n                                      </div>\n                                      <div class=\"col-sm-4\">\n                                              <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                              <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                                      </div>\n                                  </div>                        \n                              </div>\n                              <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                              </div>\n                          </div>                \n                      </div>\n          \n                   <div class=\"row card\">\n                          <h4>UPLOADED FILES SECTION</h4>\n          \n                          <div class=\"row\" *ngFor=\"let item of attachmentList; let i = index\"\n                          style=\"margin:10px;padding:5px;background-color:rgb(231, 229, 229); border-radius:5px; line-height:40px;\">\n                              <div class=\"col-sm-6\">{{item.originalname}}</div>\n                              <div class=\"col-sm-3\" style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"download(i)\">Download</button></div>\n                              <div class=\"col-sm-3\" style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(i)\">Delete</button></div>\n                            </div>\n                      </div> \n                  </div>\n             <!--      <div class=\"col-md-2\"></div> -->\n              </div>\n          </div>\n\n\n\n\n  \n      \n  \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/uploads/memos/memos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/uploads/memos/memos.component.ts ***!
  \**************************************************/
/*! exports provided: MemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemosComponent", function() { return MemosComponent; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploads_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../uploads.service */ "./src/app/uploads/uploads.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
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
        var _this = this;
        this._fileService = _fileService;
        this.globals = globals;
        this.uri = 'http://' + this.globals.ipaddress + ':3000/uploads/upload';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: this.uri });
        this.attachmentList = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    MemosComponent.prototype.download = function (index) {
        var filename = this.attachmentList[index].originalname;
        this._fileService.downloadFile(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
    };
    MemosComponent.prototype.delete = function (index) {
        var filename = this.attachmentList[index].originalname;
        this._fileService.DeleteFile(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
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
            template: __webpack_require__(/*! ./memos.component.html */ "./src/app/uploads/memos/memos.component.html"),
            styles: [__webpack_require__(/*! ./memos.component.css */ "./src/app/uploads/memos/memos.component.css")]
        }),
        __metadata("design:paramtypes", [_uploads_service__WEBPACK_IMPORTED_MODULE_3__["UploadsService"], _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], MemosComponent);
    return MemosComponent;
}());



/***/ }),

/***/ "./src/app/uploads/payslips/payslips.component.css":
/*!*********************************************************!*\
  !*** ./src/app/uploads/payslips/payslips.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/uploads/payslips/payslips.component.html":
/*!**********************************************************!*\
  !*** ./src/app/uploads/payslips/payslips.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">UPLOAD PAYSLIPS</h1>\n    </mat-toolbar>\n\n     \n        <div class=\"container-fluid\">\n            <div class=\"row header-section\">\n                <span> File Upload </span>\n            </div>\n        \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n                    <div class=\"row card\">\n                        <div class=\"col-sm-12\">\n                            <h4>Upload Section</h4>\n                            <div id=\"fileSelector\">\n                                <input type=\"file\" name=\"fileUpload\" id=\"fileUpload\"\n                                multiple ng2FileSelect [uploader]=\"uploader\">\n                            </div>\n                            <div>\n                                <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                                    <div class=\"col-sm-4\">{{item.file.name}}</div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-success\" \n                                            [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                            <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                                    </div>\n                                </div>                        \n                            </div>\n                            <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"uploader.clearQueue()\">Cancel All</button>\n                            </div>\n                        </div>                \n                    </div>\n        \n                \n                </div>\n           <!--      <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/uploads/payslips/payslips.component.ts":
/*!********************************************************!*\
  !*** ./src/app/uploads/payslips/payslips.component.ts ***!
  \********************************************************/
/*! exports provided: PayslipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayslipsComponent", function() { return PayslipsComponent; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploads_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../uploads.service */ "./src/app/uploads/uploads.service.ts");
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
    function PayslipsComponent(_fileService, globals) {
        var _this = this;
        this._fileService = _fileService;
        this.globals = globals;
        this.uri = 'http://' + this.globals.ipaddress + ':3000/uploads/uploadPayslips';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: this.uri });
        this.attachmentList = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    PayslipsComponent.prototype.ngOnInit = function () {
    };
    PayslipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payslips',
            template: __webpack_require__(/*! ./payslips.component.html */ "./src/app/uploads/payslips/payslips.component.html"),
            styles: [__webpack_require__(/*! ./payslips.component.css */ "./src/app/uploads/payslips/payslips.component.css")]
        }),
        __metadata("design:paramtypes", [_uploads_service__WEBPACK_IMPORTED_MODULE_3__["UploadsService"], _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], PayslipsComponent);
    return PayslipsComponent;
}());



/***/ }),

/***/ "./src/app/uploads/uploads.module.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/uploads.module.ts ***!
  \*******************************************/
/*! exports provided: highlightJsFactory, UploadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsModule", function() { return UploadsModule; });
/* harmony import */ var _memos_memos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memos/memos.component */ "./src/app/uploads/memos/memos.component.ts");
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
/* harmony import */ var _uploads_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./uploads.router */ "./src/app/uploads/uploads.router.ts");
/* harmony import */ var _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payslips/payslips.component */ "./src/app/uploads/payslips/payslips.component.ts");
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
var UploadsModule = /** @class */ (function () {
    function UploadsModule() {
    }
    UploadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _uploads_router__WEBPACK_IMPORTED_MODULE_21__["UploadsRouterModule"],
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
    ], UploadsModule);
    return UploadsModule;
}());



/***/ }),

/***/ "./src/app/uploads/uploads.router.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/uploads.router.ts ***!
  \*******************************************/
/*! exports provided: UploadsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsRouterModule", function() { return UploadsRouterModule; });
/* harmony import */ var _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payslips/payslips.component */ "./src/app/uploads/payslips/payslips.component.ts");
/* harmony import */ var _memos_memos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memos/memos.component */ "./src/app/uploads/memos/memos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UploadsRoutes = [
    { path: 'memos', component: _memos_memos_component__WEBPACK_IMPORTED_MODULE_1__["MemosComponent"], data: { animation: 'buttons' } },
    { path: 'payslips', component: _payslips_payslips_component__WEBPACK_IMPORTED_MODULE_0__["PayslipsComponent"], data: { animation: 'buttons' } },
    { path: '', redirectTo: '/auth/dashboard', pathMatch: 'full' }
];
var UploadsRouterModule = /** @class */ (function () {
    function UploadsRouterModule() {
    }
    UploadsRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(UploadsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], UploadsRouterModule);
    return UploadsRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=uploads-uploads-module.js.map