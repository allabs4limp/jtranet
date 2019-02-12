(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examinations-examinations-module"],{

/***/ "./src/app/examinations/dialog/viewdialog/viewdialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/examinations/dialog/viewdialog/viewdialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: float;\r\n    flex-direction: column;\r\n    width: 500px;\r\n  }\r\n  \r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form {\r\n    display: flex;\r\n    padding-top: 6px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/examinations/dialog/viewdialog/viewdialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/examinations/dialog/viewdialog/viewdialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 style=\"font-size: 16px;\" mat-dialog-title> {{ data.centrename}}</h1>\n  \n    <form  class=\"mat-dialog-content\" #formControl=\"ngForm\" (ngSubmit)=\"submit()\" >\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput  #inputsession class=\"form-control\" placeholder=\"Serial No\" [(ngModel)]=\"data.serialno\" name=\"serialno\" disabled >\n        </mat-form-field>\n      </div>\n\n   <!--    <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputsession class=\"form-control\" placeholder=\"Session\" [(ngModel)]=\"data.session\" name=\"session\" disabled >\n        </mat-form-field>\n      </div> -->\n  \n      <!--Textarea for demo purposes-->\n     <!--  <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputcaller class=\"form-control\" placeholder=\"Caller\" [(ngModel)]=\"data.caller\" name=\"caller\" disabled >\n        </mat-form-field>\n      </div> -->\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputissuecategory class=\"form-control\" placeholder=\"Issue Category\" [(ngModel)]=\"data.issuecategory\" name=\"issuecategory\" [readonly]=\"true\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <textarea matInput #inputproblemdesc class=\"form-control\" placeholder=\"Problem Description\" [(ngModel)]=\"data.problemdesc\" name=\"problemdesc\" [readonly]=\"true\"></textarea>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <textarea matInput #inputsolution class=\"form-control\" placeholder=\"Solution\" [(ngModel)]=\"data.solution\" name=\"solution\" [readonly]=\"true\"></textarea>\n        </mat-form-field>\n      </div>\n  \n      <!--Contains mat-hint for characters count and has maxLengt set-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputloggedby class=\"form-control\" placeholder=\"Logged By\" [(ngModel)]=\"data.loggedby\" name=\"loggedby\" disabled required >\n        </mat-form-field>\n      </div>\n      <div class=\"form\">\n          <mat-form-field color=\"accent\">\n            <input matInput #inputloggeddate class=\"form-control\" placeholder=\"Logged Date\" [(ngModel)]=\"data.loggeddate\" name=\"loggeddate\" disabled >\n          </mat-form-field>\n        </div>\n  \n      <div class=\"form\">\n\n          <mat-form-field color=\"accent\" >\n              <mat-select [(ngModel)]=\"SelectedIssueCat\" ngModel name =\"issuestatus\"  required placeholder=\"Issue Status\">\n                  <mat-option value=\"RESOLVED\">RESOLVED </mat-option>\n                  <mat-option value=\"OPEN\">OPEN  </mat-option>\n          <!--         <mat-option value=\"CLOSE\">CLOSE  </mat-option> -->\n                  <mat-option value=\"TRANSFERRED\">TRANSFERRED  </mat-option>\n              </mat-select>\n            </mat-form-field>\n      </div>\n\n  \n      <div mat-dialog-actions>\n        <button mat-button  [type]=\"submit\"  (click)=\"stopEdit()\">Update</button>\n      </div>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/examinations/dialog/viewdialog/viewdialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/examinations/dialog/viewdialog/viewdialog.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdialogComponent", function() { return ViewdialogComponent; });
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ViewdialogComponent = /** @class */ (function () {
    function ViewdialogComponent(dialogRef, data, examinationservice, toastr, formbuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.examinationservice = examinationservice;
        this.toastr = toastr;
        this.formbuilder = formbuilder;
    }
    ViewdialogComponent.prototype.ngOnInit = function () {
        this.loggedby = localStorage.getItem('profilename');
        this.UpdateReport = this.formbuilder.group({
            SerialNo: [this.data.serialno, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            /*   Session: [this.data.session, Validators.required],
              Caller: [this.data.caller, Validators.required], */
            IssueCategory: [this.data.issuecategory, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoggedBy: [this.data.loggedby, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoggedDate: [this.data.loggeddate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    ViewdialogComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.UpdateReport.value);
        console.log(this.SelectedIssueCat);
        this.examinationservice.UpdateRegistration(this.UpdateReport.value, this.SelectedIssueCat)
            .subscribe(function (result) {
            _this.showSuccess();
            _this.examinationservice.GetUTMERegistration(_this.loggedby);
            _this.dialogRef.close();
        }, function (error) {
            _this.showError();
        });
    };
    ViewdialogComponent.prototype.showSuccess = function () {
        this.toastr.success('Updated Succesfully');
    };
    ViewdialogComponent.prototype.showError = function () {
        this.toastr.error('Update Failed, Please try again');
    };
    ViewdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ViewdialogComponent.prototype.stopEdit = function () {
    };
    ViewdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-viewdialog',
            template: __webpack_require__(/*! ./viewdialog.component.html */ "./src/app/examinations/dialog/viewdialog/viewdialog.component.html"),
            styles: [__webpack_require__(/*! ./viewdialog.component.css */ "./src/app/examinations/dialog/viewdialog/viewdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _examinations_service__WEBPACK_IMPORTED_MODULE_0__["ExaminationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ViewdialogComponent);
    return ViewdialogComponent;
}());



/***/ }),

/***/ "./src/app/examinations/examinations.model.ts":
/*!****************************************************!*\
  !*** ./src/app/examinations/examinations.model.ts ***!
  \****************************************************/
/*! exports provided: Statess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statess", function() { return Statess; });
var Statess = /** @class */ (function () {
    function Statess(StateIds, StateNames) {
        this.StateIds = StateIds;
        this.StateNames = StateNames;
    }
    return Statess;
}());



/***/ }),

/***/ "./src/app/examinations/examinations.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/examinations/examinations.module.ts ***!
  \*****************************************************/
/*! exports provided: highlightJsFactory, ExaminationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationModule", function() { return ExaminationModule; });
/* harmony import */ var _utme_centres_utme_centres_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utme-centres/utme-centres.component */ "./src/app/examinations/utme-centres/utme-centres.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _examinations_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examinations.router */ "./src/app/examinations/examinations.router.ts");
/* harmony import */ var _postings_postings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./postings/postings.component */ "./src/app/examinations/postings/postings.component.ts");
/* harmony import */ var _sit_report_sit_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sit-report/sit-report.component */ "./src/app/examinations/sit-report/sit-report.component.ts");
/* harmony import */ var _dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog/viewdialog/viewdialog.component */ "./src/app/examinations/dialog/viewdialog/viewdialog.component.ts");
/* harmony import */ var _reg_report_reg_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reg-report/reg-report.component */ "./src/app/examinations/reg-report/reg-report.component.ts");
/* harmony import */ var _reg_reportadmin_reg_reportadmin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./reg-reportadmin/reg-reportadmin.component */ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.ts");
/* harmony import */ var _eyewitness_eyewitness_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./eyewitness/eyewitness.component */ "./src/app/examinations/eyewitness/eyewitness.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _eyewitnessadmin_eyewitnessadmin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./eyewitnessadmin/eyewitnessadmin.component */ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_17__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_17__;
}


var ExaminationModule = /** @class */ (function () {
    function ExaminationModule() {
    }
    ExaminationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _examinations_router__WEBPACK_IMPORTED_MODULE_20__["ExaminationRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
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
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
            ],
            declarations: [
                _utme_centres_utme_centres_component__WEBPACK_IMPORTED_MODULE_0__["UtmeCentresComponent"],
                _postings_postings_component__WEBPACK_IMPORTED_MODULE_21__["PostingsComponent"],
                _sit_report_sit_report_component__WEBPACK_IMPORTED_MODULE_22__["SitReportComponent"],
                _dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_23__["ViewdialogComponent"],
                _reg_report_reg_report_component__WEBPACK_IMPORTED_MODULE_24__["RegReportComponent"],
                _reg_reportadmin_reg_reportadmin_component__WEBPACK_IMPORTED_MODULE_25__["RegReportadminComponent"],
                _eyewitness_eyewitness_component__WEBPACK_IMPORTED_MODULE_26__["EyewitnessComponent"],
                _eyewitnessadmin_eyewitnessadmin_component__WEBPACK_IMPORTED_MODULE_28__["EyewitnessadminComponent"],
            ],
            entryComponents: [
                _dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_23__["ViewdialogComponent"]
            ],
            exports: [
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"]
            ]
        })
    ], ExaminationModule);
    return ExaminationModule;
}());



/***/ }),

/***/ "./src/app/examinations/examinations.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/examinations/examinations.router.ts ***!
  \*****************************************************/
/*! exports provided: ExaminationRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationRouterModule", function() { return ExaminationRouterModule; });
/* harmony import */ var _reg_reportadmin_reg_reportadmin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-reportadmin/reg-reportadmin.component */ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.ts");
/* harmony import */ var _sit_report_sit_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sit-report/sit-report.component */ "./src/app/examinations/sit-report/sit-report.component.ts");
/* harmony import */ var _postings_postings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postings/postings.component */ "./src/app/examinations/postings/postings.component.ts");
/* harmony import */ var _utme_centres_utme_centres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utme-centres/utme-centres.component */ "./src/app/examinations/utme-centres/utme-centres.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reg_report_reg_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reg-report/reg-report.component */ "./src/app/examinations/reg-report/reg-report.component.ts");
/* harmony import */ var _eyewitness_eyewitness_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eyewitness/eyewitness.component */ "./src/app/examinations/eyewitness/eyewitness.component.ts");
/* harmony import */ var _eyewitnessadmin_eyewitnessadmin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eyewitnessadmin/eyewitnessadmin.component */ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ExaminationRoutes = [
    { path: 'utmecentres', component: _utme_centres_utme_centres_component__WEBPACK_IMPORTED_MODULE_3__["UtmeCentresComponent"], data: { animation: 'buttons' } },
    { path: 'postings', component: _postings_postings_component__WEBPACK_IMPORTED_MODULE_2__["PostingsComponent"], data: { animation: 'buttons' } },
    { path: 'sitreport', component: _sit_report_sit_report_component__WEBPACK_IMPORTED_MODULE_1__["SitReportComponent"], data: { animation: 'buttons' } },
    { path: 'regreport', component: _reg_report_reg_report_component__WEBPACK_IMPORTED_MODULE_6__["RegReportComponent"], data: { animation: 'buttons' } },
    { path: 'regreportadmin', component: _reg_reportadmin_reg_reportadmin_component__WEBPACK_IMPORTED_MODULE_0__["RegReportadminComponent"], data: { animation: 'buttons' } },
    { path: 'eyewitness', component: _eyewitness_eyewitness_component__WEBPACK_IMPORTED_MODULE_7__["EyewitnessComponent"], data: { animation: 'buttons' } },
    { path: 'eyewitadm', component: _eyewitnessadmin_eyewitnessadmin_component__WEBPACK_IMPORTED_MODULE_8__["EyewitnessadminComponent"], data: { animation: 'buttons' } },
    { path: '', redirectTo: '/auth/dashboard', pathMatch: 'full' }
];
var ExaminationRouterModule = /** @class */ (function () {
    function ExaminationRouterModule() {
    }
    ExaminationRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(ExaminationRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ]
        })
    ], ExaminationRouterModule);
    return ExaminationRouterModule;
}());



/***/ }),

/***/ "./src/app/examinations/eyewitness/eyewitness.component.css":
/*!******************************************************************!*\
  !*** ./src/app/examinations/eyewitness/eyewitness.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/examinations/eyewitness/eyewitness.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/examinations/eyewitness/eyewitness.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">UPLOAD EYE WITNESS</h1>\n    </mat-toolbar>\n\n     \n        <div class=\"container-fluid\">\n            <div class=\"row header-section\">\n                <span> File Upload </span>\n            </div>\n        \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n                    <div class=\"row card\">\n                        <div class=\"container-fluid\">\n           \n                            <div class=\"row\">\n                              <!--   <div class=\"col-md-2\"></div> -->\n                                <div class=\"col-md-12\">\n                               \n                                 <div class=\"row card\">\n                                    <form [formGroup]=\"LogFormgroup\" (ngSubmit)=\"SubmitLog()\" #LogForm=\"ngForm\">\n                                                          \n                                     \n                                     <div class=\"row\" style=\"text-align:center;\">\n                                        <mat-form-field  color=\"accent\" >\n                                          <mat-select placeholder=\"STATE\" formControlName=\"LogState\" (selectionChange)=\"LoadCentres($event.value)\" name=\"logstate\"  required >  \n                                          <mat-option *ngFor=\"let stat of state\" [value]=\"stat.StateName\"> {{stat.StateName}} </mat-option>\n                                          </mat-select>\n                                         <mat-hint style=\"color: blue\">Select State</mat-hint>\n                                      </mat-form-field>\n                                     </div>\n                                     <br>                                    \n                                      <div class=\"row\" style=\"text-align:center;\">\n                                        <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                                          <mat-select placeholder=\"CENTRE\" ngModel formControlName=\"LogCentre\" name=\"logcentre\"  required >  \n                                            <mat-option *ngFor=\"let centre of DisplayedCentres\" [value]=\"centre.CentreName\">{{centre.CentreName}}</mat-option>\n                                           </mat-select>\n                                         <mat-hint style=\"color: blue\">Select Centre</mat-hint>\n                                      </mat-form-field>\n                                     </div>\n                                                 \n                                 <br>\n                                 <div class=\"row\" style=\"text-align:center;\">\n                                  <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                                    <textarea matInput placeholder=\"PROBLEM DESCRIPTION\" ngModel formControlName=\"LogProblem\" name=\"logproblem\"  required >  \n                  \n                                     </textarea>\n                                   <mat-hint style=\"color: blue\">Little explanation of the attached document</mat-hint>\n                                </mat-form-field>\n                               </div>\n                               <br>\n                               <div class=\"col-sm-12\">\n                                  <h4>Upload File(s)</h4>\n                                  <div id=\"fileSelector\">\n                                      <input type=\"file\" name=\"fileUpload\" id=\"fileUpload\"\n                                      multiple ng2FileSelect [uploader]=\"uploader\">\n                                  </div>\n                                  <div>\n                                      <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                                          <div class=\"col-sm-4\">{{item.file.name}}</div>\n                                          <div class=\"col-sm-4\">\n                                              <div class=\"progress\">\n                                                  <div class=\"progress-bar bg-success\" \n                                                  [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                              </div>\n                                          </div>\n                                          <div class=\"col-sm-4\">\n                                                  <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                                          </div>\n                                      </div>                        \n                                  </div>\n                                  <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                                          <button type=\"button\" class=\"btn btn-danger\" (click)=\"uploader.clearQueue()\">Clear All</button>\n                                  </div>\n                              </div>  \n  \n                                </form>                                    \n                                    </div> \n                                </div>\n                              <!--   <div class=\"col-md-2\"></div> -->\n                            </div>\n                        </div>\n                     \n                        \n                        \n                    </div>\n        \n                \n                </div>\n           <!--      <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/examinations/eyewitness/eyewitness.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examinations/eyewitness/eyewitness.component.ts ***!
  \*****************************************************************/
/*! exports provided: EyewitnessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyewitnessComponent", function() { return EyewitnessComponent; });
/* harmony import */ var _examinations_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../examinations.model */ "./src/app/examinations/examinations.model.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uploads_uploads_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../uploads/uploads.service */ "./src/app/uploads/uploads.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../examinations.service */ "./src/app/examinations/examinations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EyewitnessComponent = /** @class */ (function () {
    function EyewitnessComponent(_fileService, globals, _formBuilder, toastr, examinationservice) {
        var _this = this;
        this._fileService = _fileService;
        this.globals = globals;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.examinationservice = examinationservice;
        this.selectedstate = new _examinations_model__WEBPACK_IMPORTED_MODULE_0__["Statess"](1, 'ABIA');
        this.uri = 'http://' + this.globals.ipaddress + ':3000/uploads/uploadEyewitness';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: this.uri });
        this.attachmentList = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            _this.filename = item.file.name;
            _this.SubmitLog();
        };
    }
    EyewitnessComponent.prototype.ngOnInit = function () {
        this.loggedby = localStorage.getItem('profilename');
        this.LoadState();
        this.LoadCentre();
        this.LogFormgroup = this._formBuilder.group({
            LogState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LogCentre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LogProblem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EyewitnessComponent.prototype.SubmitLog = function () {
        var _this = this;
        this.examinationservice.InsertEyeWitnessReport(this.LogFormgroup.value, this.loggedby, this.filename).subscribe(function (result) {
            _this.showSuccess();
        }, function (error) {
            _this.showError();
        });
    };
    EyewitnessComponent.prototype.showSuccess = function () {
        this.toastr.success('Uploaded Succesfully');
    };
    EyewitnessComponent.prototype.showError = function () {
        this.toastr.error('Update Failed, Please try again');
    };
    EyewitnessComponent.prototype.LoadState = function () {
        var _this = this;
        this.examinationservice.GetUTMEState().subscribe(function (result) { _this.state = result; }, function (error) { return console.error(error); });
    };
    EyewitnessComponent.prototype.LoadCentre = function () {
        var _this = this;
        this.examinationservice.GetRegistrationCentres().subscribe(function (result) { _this.StoredCentres = result; }, function (error) { return console.error(error); });
    };
    EyewitnessComponent.prototype.LoadCentres = function (stat) {
        this.DisplayedCentres = this.StoredCentres.filter(function (item) { return item.StateName === stat; });
    };
    EyewitnessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-eyewitness',
            template: __webpack_require__(/*! ./eyewitness.component.html */ "./src/app/examinations/eyewitness/eyewitness.component.html"),
            styles: [__webpack_require__(/*! ./eyewitness.component.css */ "./src/app/examinations/eyewitness/eyewitness.component.css")]
        }),
        __metadata("design:paramtypes", [_uploads_uploads_service__WEBPACK_IMPORTED_MODULE_5__["UploadsService"],
            _Globals__WEBPACK_IMPORTED_MODULE_1__["Globals"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _examinations_service__WEBPACK_IMPORTED_MODULE_7__["ExaminationService"]])
    ], EyewitnessComponent);
    return EyewitnessComponent;
}());



/***/ }),

/***/ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n     \n       <div class=\"container-fluid\">     \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n               \n                 <div class=\"row card\">\n                  <div fxFlex class=\"table-component-holder mat-elevation-z4\">\n                    <mat-toolbar class=\"table-header\">\n                      <h1 class=\"mat-headline center-align\" >EYE WITNESS REPORTS</h1>\n                    </mat-toolbar>\n                          \n                    \n                    <div class=\"table-container\">\n                       \n                       <mat-paginator [pageSizeOptions]=\"[10, 50, 100, 500]\" showFirstLastButtons></mat-paginator>\n                     \n                     \n                       <mat-form-field style=\"font-size: 14px; width: 90%; padding: 8px 24px 0\">\n                          \n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                        </mat-form-field> \n                       <mat-table [dataSource]=\"dataSource\"  matSort class=\"mat-elevation-z8\">\n                          <ng-container matColumnDef=\"SerialNo\" >\n                              <mat-header-cell style=\"flex: 0 0 8%;;\" *matHeaderCellDef mat-sort-header>S/N</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 8%;\" *matCellDef=\"let registrationreport\">{{ registrationreport.SerialNo }}</mat-cell>\n                            </ng-container>\n                         <!--  <ng-container matColumnDef=\"Refnum\" >\n                              <mat-header-cell style=\"flex: 0 0 15%;;\" *matHeaderCellDef mat-sort-header>Refnum</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 15%;\" *matCellDef=\"let registrationreport\">{{ registrationreport.Refnum }}</mat-cell>\n                            </ng-container> -->\n  \n                            <ng-container matColumnDef=\"StateName\">\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATE NAME</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.StateName }}</mat-cell>\n                            </ng-container>\n                          \n                            <ng-container matColumnDef=\"CentreName\">\n                              <mat-header-cell style=\"flex: 0 0 30%;\" *matHeaderCellDef mat-sort-header>CENTRE NAME</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 30%;\" *matCellDef=\"let registrationreport\">{{registrationreport.CentreName }}</mat-cell>\n                            </ng-container>\n                          \n                           \n  \n                    \n                            <ng-container matColumnDef=\"ProblemDesc\">\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>PROBLEM</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.ProblemDesc }}</mat-cell>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"Filename\">\n                                <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>File Name</mat-header-cell>\n                                <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.Filename }}</mat-cell>\n                              </ng-container>\n  \n                           <!--  <ng-container matColumnDef=\"LoggedBy\">\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED BY</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.LoggedBy }}</mat-cell>\n                            </ng-container> -->\n  \n                            <ng-container matColumnDef=\"LoggedDate\">\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED DATE</mat-header-cell>\n                              <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.LoggedDate | date }}</mat-cell>\n                            </ng-container>\n  \n                            <ng-container  matColumnDef=\"actions\" >\n                                <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef>ACTIONS</mat-header-cell>\n                                <mat-cell *matCellDef=\"let row; let i=index;\" >\n                                  <div class=\"row\" >\n                                    <div style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"download(i)\">Download</button></div>\n                                 </div>\n                                  \n                                </mat-cell>\n                              </ng-container>\n                          \n                                       \n                            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                          </mat-table>\n                    \n                 \n                  </div>\n                  </div>\n                       \n                   \n                    \n                    </div> \n                </div>\n              <!--   <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n  \n  \n  \n  \n  \n  \n      \n  \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.ts ***!
  \***************************************************************************/
/*! exports provided: EyewitnessadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyewitnessadminComponent", function() { return EyewitnessadminComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _examinations_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../examinations.model */ "./src/app/examinations/examinations.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _downloads_downloads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../downloads/downloads.service */ "./src/app/downloads/downloads.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EyewitnessadminComponent = /** @class */ (function () {
    function EyewitnessadminComponent(_formBuilder, _fileService, toastr, examinationservice, exelservice, dialog) {
        this._formBuilder = _formBuilder;
        this._fileService = _fileService;
        this.toastr = toastr;
        this.examinationservice = examinationservice;
        this.exelservice = exelservice;
        this.dialog = dialog;
        this.selectedstate = new _examinations_model__WEBPACK_IMPORTED_MODULE_2__["Statess"](1, 'ABIA');
        this.attachmentList = [];
        /*  displayedColumns = ['CentreID', 'CentreName', 'Session', 'Caller', 'IssueCategory', 'IssueStatus', 'LoggedBy', 'LoggedDate']; */
        this.displayedColumns = ['SerialNo', 'StateName', 'CentreName', 'ProblemDesc', 'Filename', 'LoggedDate', 'actions'];
    }
    EyewitnessadminComponent.prototype.ngOnInit = function () {
        this.loggedby = localStorage.getItem('profilename');
        this.LoadEyeWitnessReport();
    };
    EyewitnessadminComponent.prototype.LoadEyeWitnessReport = function () {
        var _this = this;
        this.examinationservice.GetAllEyeWitnessReport().subscribe(function (result) {
            _this.eyewitnessreport = result;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](result);
            _this.dataSource.connect().subscribe(function (res) { return _this.renderedData = res; });
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.error(error); });
    };
    EyewitnessadminComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    EyewitnessadminComponent.prototype.download = function (index) {
        var filename = this.eyewitnessreport[index].Filename;
        console.log(filename);
        this._fileService.downloadEyeWitnessFile(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
    };
    EyewitnessadminComponent.prototype.getPageSizeOptions = function () {
        return [5, 10, 20, this.dataSource.data.length];
    };
    EyewitnessadminComponent.prototype.showSuccess = function () {
        this.toastr.success('Updated Succesfully');
    };
    EyewitnessadminComponent.prototype.showError = function () {
        this.toastr.error('Update Failed, Please try again');
    };
    EyewitnessadminComponent.prototype.ngAfterViewInit = function () {
    };
    EyewitnessadminComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], EyewitnessadminComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], EyewitnessadminComponent.prototype, "sort", void 0);
    EyewitnessadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-eyewitnessadmin',
            template: __webpack_require__(/*! ./eyewitnessadmin.component.html */ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.html"),
            styles: [__webpack_require__(/*! ./eyewitnessadmin.component.scss */ "./src/app/examinations/eyewitnessadmin/eyewitnessadmin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _downloads_downloads_service__WEBPACK_IMPORTED_MODULE_7__["DownloadsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _examinations_service__WEBPACK_IMPORTED_MODULE_1__["ExaminationService"], _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], EyewitnessadminComponent);
    return EyewitnessadminComponent;
}());



/***/ }),

/***/ "./src/app/examinations/postings/postings.component.html":
/*!***************************************************************!*\
  !*** ./src/app/examinations/postings/postings.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\" >POSTINGS</h1>\n    </mat-toolbar>\n\n    <div class=\"datepicker-container\">\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n    <div fxFlex.xs=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" >\n      <h4  class=\"mat-subheading-2 center-align\">PERSONAL POSTING</h4>\n      <mat-divider></mat-divider>\n      <div *ngFor=\"let postdet of postingdetails\">\n        <label style=\"font-style:normal; color: crimson\">TOWN CODE:-  </label> {{postdet.TwnCode }}\n      </div>\n      <mat-divider></mat-divider>\n      <div *ngFor=\"let postdet of postingdetails\">\n          <label style=\"font-style:normal; color: crimson\">TOWN NAME:-  </label> {{postdet.ExamTown }}\n        </div>\n        <mat-divider></mat-divider>\n        <div *ngFor=\"let postdet of postingdetails\">\n            <label style=\"font-style:normal; color: crimson\">STATE NAME:-  </label> {{postdet.StateName }}\n          </div>\n          <mat-divider></mat-divider>\n          <div *ngFor=\"let postdet of postingdetails\">\n              <label  style=\"font-style:normal; color: crimson\">CENTRE NAME:-  </label> {{postdet.CentreName }}\n            </div>\n            <mat-divider></mat-divider>\n\n            <div *ngFor=\"let postdet of postingdetails\">\n                <label style=\"font-style:normal; color: crimson\">STATUS:-  </label> {{postdet.Description }}\n              </div>\n              <mat-divider></mat-divider>\n            </div>\n    </div>\n    <div fxFlex.xs=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" >\n      <h4  class=\"mat-subheading-2 center-align\">TEAM TO WORK WITH</h4>\n      <mat-divider></mat-divider>\n      <div>\n        <ul *ngFor=\"let otherposting of otherpostingdetails\">\n          <li> {{ otherposting.IDcard}} | {{otherposting.Staffname}} | {{otherposting.Conraiss}} | {{otherposting.DeptName}} | {{otherposting.Description}} | {{otherposting.Phone}} </li>\n          <mat-divider></mat-divider>\n        </ul>\n       </div>\n      <mat-divider></mat-divider>\n     \n\n    </div>\n        </div>\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/examinations/postings/postings.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/examinations/postings/postings.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepicker-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.datepicker-container {\n  padding: 5px 15px 15px 15px; }\n\n.datepicker-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.datepicker-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.datepicker-component-holder mat-divider {\n    margin-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/examinations/postings/postings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/examinations/postings/postings.component.ts ***!
  \*************************************************************/
/*! exports provided: PostingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingsComponent", function() { return PostingsComponent; });
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostingsComponent = /** @class */ (function () {
    function PostingsComponent(examinationservice, toastr) {
        this.examinationservice = examinationservice;
        this.toastr = toastr;
    }
    PostingsComponent.prototype.ngOnInit = function () {
        this.idcard = localStorage.getItem('idcard');
        this.LoadPostingDetails();
    };
    PostingsComponent.prototype.showSuccess = function () {
        this.toastr.success('');
    };
    PostingsComponent.prototype.showError = function () {
        this.toastr.error('Sorry, You have not been posted');
    };
    PostingsComponent.prototype.LoadPostingDetails = function () {
        var _this = this;
        this.examinationservice.GetPostings(this.idcard).subscribe(function (result) {
            _this.postingdetails = result;
            if (result != null) {
                _this.LoadOtherPostingDetails(_this.postingdetails[0].TwnCode);
            }
            else {
                _this.showError();
            }
        }, function (error) {
            _this.showError();
        });
    };
    PostingsComponent.prototype.LoadOtherPostingDetails = function (twncod) {
        var _this = this;
        this.examinationservice.GetPostingsOthers(this.idcard, twncod).subscribe(function (result) {
            _this.otherpostingdetails = result;
        }, function (error) {
            _this.showError();
        });
    };
    PostingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postings',
            template: __webpack_require__(/*! ./postings.component.html */ "./src/app/examinations/postings/postings.component.html"),
            styles: [__webpack_require__(/*! ./postings.component.scss */ "./src/app/examinations/postings/postings.component.scss")]
        }),
        __metadata("design:paramtypes", [_examinations_service__WEBPACK_IMPORTED_MODULE_0__["ExaminationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], PostingsComponent);
    return PostingsComponent;
}());



/***/ }),

/***/ "./src/app/examinations/reg-report/reg-report.component.css":
/*!******************************************************************!*\
  !*** ./src/app/examinations/reg-report/reg-report.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.main-div{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }"

/***/ }),

/***/ "./src/app/examinations/reg-report/reg-report.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/examinations/reg-report/reg-report.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">UTME REGISTRATION HELP LINE LOG</h1>\n    </mat-toolbar>\n    \n\n     \n        <div class=\"container-fluid\">\n           \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n               \n                 <div class=\"row card\">\n                    <form [formGroup]=\"LogFormgroup\" (ngSubmit)=\"SubmitLog()\" #LogForm=\"ngForm\">\n                                          \n                     \n                     <div class=\"row\" style=\"text-align:center;\">\n                        <mat-form-field  color=\"accent\" >\n                          <mat-select placeholder=\"STATE\" formControlName=\"LogState\" (selectionChange)=\"LoadCentres($event.value)\" name=\"logstate\"  required >  \n                          <mat-option *ngFor=\"let stat of state\" [value]=\"stat.StateName\"> {{stat.StateName}} </mat-option>\n                          </mat-select>\n                         <mat-hint style=\"color: blue\">Select State</mat-hint>\n                      </mat-form-field>\n                     </div>\n                     <br> \n                    \n                      <div class=\"row\" style=\"text-align:center;\">\n                        <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                          <mat-select placeholder=\"CENTRE\" ngModel formControlName=\"LogCentre\" name=\"logcentre\"  required >  \n                            <mat-option *ngFor=\"let centre of DisplayedCentres\" [value]=\"centre.CentreName\">{{centre.CentreName}}</mat-option>\n                           </mat-select>\n                         <mat-hint style=\"color: blue\">Select Centre</mat-hint>\n                      </mat-form-field>\n                     </div>\n                     <br>\n                    \n                   <div class=\"row\" style=\"text-align:center;\">\n                    <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                      <mat-select placeholder=\"ISSUE CATEGORY\" ngModel formControlName=\"LogIssueCategory\" name=\"logissuecategory\"  required >  \n                        <mat-option value=\"NETWORK\">NETWORK </mat-option>\n                        <mat-option value=\"APPLICATION\">APPLICATION  </mat-option>\n                        <mat-option value=\"SIM CARD\">SIM CARD  </mat-option>\n                        <mat-option value=\"ROUTER\">ROUTER  </mat-option>\n                        <mat-option value=\"CANDIDATE\">CANDIDATE </mat-option>\n                        <mat-option value=\"ACCESS CODE\">ACCESS CODE </mat-option>\n                        <mat-option value=\"PASSWORD\">PASSWORD </mat-option>\n                        <mat-option value=\"OTHERS\">OTHERS </mat-option>\n                       </mat-select>\n                     <mat-hint style=\"color: blue\">Select Issue</mat-hint>\n                  </mat-form-field>\n                 </div>\n                 <br>\n                 <div class=\"row\" style=\"text-align:center;\">\n                  <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                    <textarea matInput placeholder=\"PROBLEM DESCRIPTION\" ngModel formControlName=\"LogProblem\" name=\"logproblem\"  required >  \n  \n                     </textarea>\n                   <mat-hint style=\"color: blue\">Enter problem</mat-hint>\n                </mat-form-field>\n               </div>\n               <br>\n               <div class=\"row\" style=\"text-align:center;\">\n                <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                  <textarea matInput placeholder=\"SUMMARY OF SOLUTION\" ngModel formControlName=\"LogSolution\" name=\"logsolution\"  required >  \n\n                   </textarea>\n                 <mat-hint style=\"color: blue\">Enter proposed solution</mat-hint>\n              </mat-form-field>\n             </div>\n             <br>\n             <div class=\"row\" style=\"text-align:center;\">\n              <mat-form-field  color=\"accent\" >\n                <mat-select placeholder=\"ISSUE STATUS\" ngModel formControlName=\"LogIssueStatus\" name=\"logissuestatus\"  required >  \n                  <mat-option value=\"RESOLVED\">RESOLVED </mat-option>\n              <mat-option value=\"OPEN\">OPEN  </mat-option>\n              <mat-option value=\"TRANSFERRED\">TRANSFERRED  </mat-option>\n                </mat-select>\n               <mat-hint style=\"color: blue\">Select Issue Status</mat-hint>\n            </mat-form-field>\n           </div>\n           <br>\n\n                   \n                 \n                   <div class=\"row\" style=\"text-align:center;\">\n                   <button class=\"primary\" [disabled]=\"!LogForm.form.valid\"  color=\"primary\" mat-raised-button>SUBMIT LOG</button>\n                   </div>\n                </form>                                    \n                    </div> \n                </div>\n              <!--   <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n\n\n        <div class=\"container-fluid\">     \n          <div class=\"row\">\n            <!--   <div class=\"col-md-2\"></div> -->\n              <div class=\"col-md-12\">\n             \n               <div class=\"row card\">\n                <div fxFlex class=\"table-component-holder mat-elevation-z4\">\n                  <mat-toolbar class=\"table-header\">\n                    <h1 class=\"mat-headline center-align\" >LOGGED COMPLAINTS</h1>\n                  </mat-toolbar>\n                        \n                  \n                  <div class=\"table-container\">\n                     \n                     <mat-paginator [pageSizeOptions]=\"[10, 50, 100]\" showFirstLastButtons></mat-paginator>\n                     <mat-form-field style=\"font-size: 14px; width: 90%; padding: 8px 24px 0\">\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                      </mat-form-field> \n                     <mat-table [dataSource]=\"dataSource\"  matSort class=\"mat-elevation-z8\">\n                        <ng-container matColumnDef=\"SerialNo\" >\n                            <mat-header-cell style=\"flex: 0 0 8%;;\" *matHeaderCellDef mat-sort-header>S/N</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 8%;\" *matCellDef=\"let registrationreport\">{{ registrationreport.SerialNo }}</mat-cell>\n                          </ng-container>\n                       <!--  <ng-container matColumnDef=\"Refnum\" >\n                            <mat-header-cell style=\"flex: 0 0 15%;;\" *matHeaderCellDef mat-sort-header>Refnum</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 15%;\" *matCellDef=\"let registrationreport\">{{ registrationreport.Refnum }}</mat-cell>\n                          </ng-container> -->\n\n                          <ng-container matColumnDef=\"StateName\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATE NAME</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.StateName }}</mat-cell>\n                          </ng-container>\n                        \n                          <ng-container matColumnDef=\"CentreName\">\n                            <mat-header-cell style=\"flex: 0 0 30%;\" *matHeaderCellDef mat-sort-header>CENTRE NAME</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 30%;\" *matCellDef=\"let registrationreport\">{{registrationreport.CentreName }}</mat-cell>\n                          </ng-container>\n                        \n                         \n\n                          <ng-container matColumnDef=\"IssueCategory\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>CATEGORY</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px;flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.IssueCategory }}</mat-cell>\n                          </ng-container> \n\n                          <ng-container matColumnDef=\"IssueStatus\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATUS</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.IssueStatus }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"ProblemDesc\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>PROBLEM</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.ProblemDesc }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"Solution\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATUS</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.Solution }}</mat-cell>\n                          </ng-container>\n\n\n                         <!--  <ng-container matColumnDef=\"LoggedBy\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED BY</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.LoggedBy }}</mat-cell>\n                          </ng-container> -->\n\n                          <ng-container matColumnDef=\"LoggedDate\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED DATE</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.LoggedDate | date }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container  matColumnDef=\"actions\" >\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef>ACTIONS</mat-header-cell>\n                              <mat-cell *matCellDef=\"let row; let i=index;\">\n                                  <button mat-icon-button color=\"primary\" (click)=\"StartView(i, row.SerialNo, row.CentreName, row.IssueCategory, row.IssueStatus, row.ProblemDesc, row.Solution, row.LoggedBy, row.LoggedDate)\">\n                                      <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                                    </button>\n                              </mat-cell>\n                            </ng-container>\n                        \n                                     \n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                        </mat-table>\n                  \n               \n                </div>\n                </div>\n                     \n                 \n                  \n                  </div> \n              </div>\n            <!--   <div class=\"col-md-2\"></div> -->\n          </div>\n      </div>\n\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/examinations/reg-report/reg-report.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examinations/reg-report/reg-report.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegReportComponent", function() { return RegReportComponent; });
/* harmony import */ var _dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dialog/viewdialog/viewdialog.component */ "./src/app/examinations/dialog/viewdialog/viewdialog.component.ts");
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _examinations_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../examinations.model */ "./src/app/examinations/examinations.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegReportComponent = /** @class */ (function () {
    function RegReportComponent(_formBuilder, toastr, examinationservice, dialog) {
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.examinationservice = examinationservice;
        this.dialog = dialog;
        this.selectedstate = new _examinations_model__WEBPACK_IMPORTED_MODULE_2__["Statess"](1, 'ABIA');
        /*  displayedColumns = ['CentreID', 'CentreName', 'Session', 'Caller', 'IssueCategory', 'IssueStatus', 'LoggedBy', 'LoggedDate']; */
        this.displayedColumns = ['SerialNo', 'StateName', 'CentreName', 'IssueCategory', 'IssueStatus', 'LoggedDate', 'actions'];
    }
    RegReportComponent.prototype.ngOnInit = function () {
        this.loggedby = localStorage.getItem('profilename');
        this.LoadState();
        this.LoadCentre();
        this.LoadRegistrationReport();
        this.LogFormgroup = this._formBuilder.group({
            LogState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogCentre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogIssueStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogIssueCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogProblem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogSolution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    RegReportComponent.prototype.LoadState = function () {
        var _this = this;
        this.examinationservice.GetUTMEState().subscribe(function (result) { _this.state = result; }, function (error) { return console.error(error); });
    };
    RegReportComponent.prototype.LoadCentre = function () {
        var _this = this;
        this.examinationservice.GetRegistrationCentres().subscribe(function (result) { _this.StoredCentres = result; }, function (error) { return console.error(error); });
    };
    RegReportComponent.prototype.LoadRegistrationReport = function () {
        var _this = this;
        this.examinationservice.GetUTMERegistration(this.loggedby).subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](result);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.error(error); });
    };
    RegReportComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    RegReportComponent.prototype.StartView = function (i, serialno, centrename, issuecategory, issuestatus, problemdesc, solution, loggedby, loggeddate) {
        var _this = this;
        var dialogref = this.dialog.open(_dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_0__["ViewdialogComponent"], {
            data: { i: i, serialno: serialno, centrename: centrename,
                issuecategory: issuecategory, problemdesc: problemdesc, solution: solution, issuestatus: issuestatus, loggedby: loggedby,
                loggeddate: loggeddate }
        });
        dialogref.afterClosed().subscribe(function () {
            _this.LoadRegistrationReport();
        });
    };
    RegReportComponent.prototype.LoadCentres = function (stat) {
        this.DisplayedCentres = this.StoredCentres.filter(function (item) { return item.StateName === stat; });
    };
    RegReportComponent.prototype.SubmitLog = function () {
        var _this = this;
        this.examinationservice.InsertRegistrationReport(this.LogFormgroup.value, this.loggedby).subscribe(function (result) {
            _this.showSuccess();
            _this.LoadRegistrationReport();
            _this.LogFormgroup.reset();
        }, function (error) {
            _this.showError();
        });
    };
    RegReportComponent.prototype.showSuccess = function () {
        this.toastr.success('Updated Succesfully');
    };
    RegReportComponent.prototype.showError = function () {
        this.toastr.error('Update Failed, Please try again');
    };
    RegReportComponent.prototype.ngAfterViewInit = function () {
    };
    RegReportComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], RegReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], RegReportComponent.prototype, "sort", void 0);
    RegReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reg-report',
            template: __webpack_require__(/*! ./reg-report.component.html */ "./src/app/examinations/reg-report/reg-report.component.html"),
            styles: [__webpack_require__(/*! ./reg-report.component.css */ "./src/app/examinations/reg-report/reg-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _examinations_service__WEBPACK_IMPORTED_MODULE_1__["ExaminationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], RegReportComponent);
    return RegReportComponent;
}());



/***/ }),

/***/ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/examinations/reg-reportadmin/reg-reportadmin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n   \n     <div class=\"container-fluid\">     \n          <div class=\"row\">\n            <!--   <div class=\"col-md-2\"></div> -->\n              <div class=\"col-md-12\">\n             \n               <div class=\"row card\">\n                <div fxFlex class=\"table-component-holder mat-elevation-z4\">\n                  <mat-toolbar class=\"table-header\">\n                    <h1 class=\"mat-headline center-align\" >LOGGED COMPLAINTS</h1>\n                  </mat-toolbar>\n                        \n                  \n                  <div class=\"table-container\">\n                     \n                     <mat-paginator [pageSizeOptions]=\"[10, 50, 100, 1000]\" showFirstLastButtons></mat-paginator>\n                    <button style=\"align-items: flex-end\" (click)=\"exportAsXLSX()\"><i class=\"fa fa-file-excel-o\" style=\"font-size:48px;color:blue\"></i></button>\n                   \n                     <mat-form-field style=\"font-size: 14px; width: 90%; padding: 8px 24px 0\">\n                        \n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                      </mat-form-field> \n                     <mat-table [dataSource]=\"dataSource\"  matSort class=\"mat-elevation-z8\">\n                        <ng-container matColumnDef=\"SerialNo\" >\n                            <mat-header-cell style=\"flex: 0 0 8%;;\" *matHeaderCellDef mat-sort-header>S/N</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 8%;\" *matCellDef=\"let registrationreport\">{{ registrationreport.SerialNo }}</mat-cell>\n                          </ng-container>\n                       <!--  <ng-container matColumnDef=\"Refnum\" >\n                            <mat-header-cell style=\"flex: 0 0 15%;;\" *matHeaderCellDef mat-sort-header>Refnum</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 15%;\" *matCellDef=\"let registrationreport\">{{ registrationreport.Refnum }}</mat-cell>\n                          </ng-container> -->\n\n                          <ng-container matColumnDef=\"StateName\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATE NAME</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.StateName }}</mat-cell>\n                          </ng-container>\n                        \n                          <ng-container matColumnDef=\"CentreName\">\n                            <mat-header-cell style=\"flex: 0 0 30%;\" *matHeaderCellDef mat-sort-header>CENTRE NAME</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 30%;\" *matCellDef=\"let registrationreport\">{{registrationreport.CentreName }}</mat-cell>\n                          </ng-container>\n                        \n                         \n\n                          <ng-container matColumnDef=\"IssueCategory\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>CATEGORY</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px;flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.IssueCategory }}</mat-cell>\n                          </ng-container> \n\n                          <ng-container matColumnDef=\"IssueStatus\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATUS</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.IssueStatus }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"ProblemDesc\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>PROBLEM</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.ProblemDesc }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"Solution\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATUS</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\" [ngClass]=\"{'green': cell == solved}\">{{registrationreport.Solution }}</mat-cell>\n                          </ng-container>\n\n\n                         <!--  <ng-container matColumnDef=\"LoggedBy\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED BY</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.LoggedBy }}</mat-cell>\n                          </ng-container> -->\n\n                          <ng-container matColumnDef=\"LoggedDate\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED DATE</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let registrationreport\">{{registrationreport.LoggedDate | date }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container  matColumnDef=\"actions\" >\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef>ACTIONS</mat-header-cell>\n                              <mat-cell *matCellDef=\"let row; let i=index;\">\n                                  <button mat-icon-button color=\"primary\" (click)=\"StartView(i, row.SerialNo, row.CentreName, row.IssueCategory, row.IssueStatus, row.ProblemDesc, row.Solution, row.LoggedBy, row.LoggedDate)\">\n                                      <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                                    </button>\n                              </mat-cell>\n                            </ng-container>\n                        \n                                     \n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                        </mat-table>\n                  \n               \n                </div>\n                </div>\n                     \n                 \n                  \n                  </div> \n              </div>\n            <!--   <div class=\"col-md-2\"></div> -->\n          </div>\n      </div>\n\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/examinations/reg-reportadmin/reg-reportadmin.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/examinations/reg-reportadmin/reg-reportadmin.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegReportadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegReportadminComponent", function() { return RegReportadminComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog/viewdialog/viewdialog.component */ "./src/app/examinations/dialog/viewdialog/viewdialog.component.ts");
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _examinations_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../examinations.model */ "./src/app/examinations/examinations.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegReportadminComponent = /** @class */ (function () {
    function RegReportadminComponent(_formBuilder, toastr, examinationservice, exelservice, dialog) {
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.examinationservice = examinationservice;
        this.exelservice = exelservice;
        this.dialog = dialog;
        this.selectedstate = new _examinations_model__WEBPACK_IMPORTED_MODULE_3__["Statess"](1, 'ABIA');
        /*  displayedColumns = ['CentreID', 'CentreName', 'Session', 'Caller', 'IssueCategory', 'IssueStatus', 'LoggedBy', 'LoggedDate']; */
        this.displayedColumns = ['SerialNo', 'StateName', 'CentreName', 'IssueCategory', 'IssueStatus', 'LoggedDate', 'actions'];
    }
    RegReportadminComponent.prototype.ngOnInit = function () {
        this.loggedby = localStorage.getItem('profilename');
        this.LoadRegistrationReport();
        this.LogFormgroup = this._formBuilder.group({
            LogCentre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            LogIssueStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            LogIssueCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            LogProblem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            LogSolution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    RegReportadminComponent.prototype.LoadRegistrationReport = function () {
        var _this = this;
        this.examinationservice.GetAllUTMERegistration().subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](result);
            _this.dataSource.connect().subscribe(function (res) { return _this.renderedData = res; });
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.error(error); });
    };
    RegReportadminComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    RegReportadminComponent.prototype.StartView = function (i, serialno, centrename, issuecategory, issuestatus, problemdesc, solution, loggedby, loggeddate) {
        var _this = this;
        var dialogref = this.dialog.open(_dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_1__["ViewdialogComponent"], {
            data: { i: i, serialno: serialno, centrename: centrename,
                issuecategory: issuecategory, problemdesc: problemdesc, solution: solution, issuestatus: issuestatus, loggedby: loggedby,
                loggeddate: loggeddate }
        });
        dialogref.afterClosed().subscribe(function () {
            _this.LoadRegistrationReport();
        });
    };
    RegReportadminComponent.prototype.getPageSizeOptions = function () {
        return [5, 10, 20, this.dataSource.data.length];
    };
    RegReportadminComponent.prototype.exportAsXLSX = function () {
        this.exelservice.exportAsExcelFile(this.renderedData, 'COMPLAINT-LOG ');
    };
    RegReportadminComponent.prototype.showSuccess = function () {
        this.toastr.success('Updated Succesfully');
    };
    RegReportadminComponent.prototype.showError = function () {
        this.toastr.error('Update Failed, Please try again');
    };
    RegReportadminComponent.prototype.ngAfterViewInit = function () {
    };
    RegReportadminComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], RegReportadminComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], RegReportadminComponent.prototype, "sort", void 0);
    RegReportadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-reg-reportadmin',
            template: __webpack_require__(/*! ./reg-reportadmin.component.html */ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.html"),
            styles: [__webpack_require__(/*! ./reg-reportadmin.component.scss */ "./src/app/examinations/reg-reportadmin/reg-reportadmin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _examinations_service__WEBPACK_IMPORTED_MODULE_2__["ExaminationService"], _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], RegReportadminComponent);
    return RegReportadminComponent;
}());



/***/ }),

/***/ "./src/app/examinations/sit-report/sit-report.component.css":
/*!******************************************************************!*\
  !*** ./src/app/examinations/sit-report/sit-report.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.main-div{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }"

/***/ }),

/***/ "./src/app/examinations/sit-report/sit-report.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/examinations/sit-report/sit-report.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">UTME HELP LINE LOG</h1>\n    </mat-toolbar>\n\n     \n        <div class=\"container-fluid\">\n           \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n               \n                 <div class=\"row card\">\n                    <form [formGroup]=\"LogFormgroup\" (ngSubmit)=\"SubmitLog()\" #LogForm=\"ngForm\">\n                      <div class=\"row\" style=\"text-align:center;\">\n                        <mat-form-field  color=\"accent\" >\n                          <mat-select placeholder=\"CALLER\" ngModel formControlName=\"LogCaller\" name=\"logcaller\"  required >  \n                         <mat-option value=\"SUPERVISOR\">SUPERVISOR </mat-option>\n                        <mat-option value=\"TECHNICAL OFFICER\">TECHNICAL OFFICER  </mat-option>\n                        <mat-option value=\"BVM OPERATOR\">BVM OPERATOR  </mat-option>\n                        <mat-option value=\"OTHERS\">OTHERS  </mat-option>\n                          </mat-select>\n                         <mat-hint style=\"color: blue\">Select Caller</mat-hint>\n                      </mat-form-field>\n                     </div>\n                     <br>\n                     \n                     \n                      <div class=\"row\" style=\"text-align:center;\">\n                        <mat-form-field  color=\"accent\" >\n                          <mat-select placeholder=\"STATE\" formControlName=\"LogState\" (selectionChange)=\"LoadCentres($event.value)\" name=\"logstate\"  required >  \n                          <mat-option *ngFor=\"let stat of state\" [value]=\"stat.StateName\"> {{stat.StateName}} </mat-option>\n                          </mat-select>\n                         <mat-hint style=\"color: blue\">Select State</mat-hint>\n                      </mat-form-field>\n                     </div>\n                     <br>\n                    \n                      <div class=\"row\" style=\"text-align:center;\">\n                        <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                          <mat-select placeholder=\"CENTRE\" ngModel formControlName=\"LogCentre\" name=\"logcentre\"  required >  \n                            <mat-option *ngFor=\"let centre of DisplayedCentres\" [value]=\"centre.CentreName\">{{centre.CentreName}}</mat-option>\n                           </mat-select>\n                         <mat-hint style=\"color: blue\">Select Centre</mat-hint>\n                      </mat-form-field>\n                     </div>\n                     <br>\n                    \n                   <div class=\"row\" style=\"text-align:center;\">\n                    <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                      <mat-select placeholder=\"ISSUE CATEGORY\" ngModel formControlName=\"LogIssueCategory\" name=\"logissuecategory\"  required >  \n                        <mat-option value=\"ADMINISTRATIVE\">ADMINISTRATIVE </mat-option>\n                        <mat-option value=\"FINANCIAL\">FINANCIAL  </mat-option>\n                        <mat-option value=\"DELIVERY SERVER\">DELIVERY SERVER  </mat-option>\n                        <mat-option value=\"HARDWARE\">HARDWARE  </mat-option>\n                        <mat-option value=\"SECURITY\">SECURITY </mat-option>\n                        <mat-option value=\"SIM NETWORK \">SIM NETWORK </mat-option>\n                        <mat-option value=\"LAN NETWORK\">LAN NETWORK  </mat-option>\n                        <mat-option value=\"TEST SOFTWARE\">TEST SOFTWARE  </mat-option>\n                      </mat-select>\n                     <mat-hint style=\"color: blue\">Select Issue</mat-hint>\n                  </mat-form-field>\n                 </div>\n                 <br>\n                 <div class=\"row\" style=\"text-align:center;\">\n                  <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                    <textarea matInput placeholder=\"PROBLEM DESCRIPTION\" ngModel formControlName=\"LogProblem\" name=\"logproblem\"  required >  \n  \n                     </textarea>\n                   <mat-hint style=\"color: blue\">Enter problem</mat-hint>\n                </mat-form-field>\n               </div>\n               <br>\n               <div class=\"row\" style=\"text-align:center;\">\n                <mat-form-field  style=\"width:500px !important\"  color=\"accent\" >\n                  <textarea matInput placeholder=\"SUMMARY OF SOLUTION\" ngModel formControlName=\"LogSolution\" name=\"logsolution\"  required >  \n\n                   </textarea>\n                 <mat-hint style=\"color: blue\">Enter proposed solution</mat-hint>\n              </mat-form-field>\n             </div>\n             <br>\n             <div class=\"row\" style=\"text-align:center;\">\n              <mat-form-field  color=\"accent\" >\n                <mat-select placeholder=\"ISSUE STATUS\" ngModel formControlName=\"LogIssueStatus\" name=\"logissuestatus\"  required >  \n                  <mat-option value=\"RESOLVED\">RESOLVED </mat-option>\n              <mat-option value=\"OPEN\">OPEN  </mat-option>\n              <mat-option value=\"TRANSFERRED\">TRANSFERRED  </mat-option>\n                </mat-select>\n               <mat-hint style=\"color: blue\">Select Issue Status</mat-hint>\n            </mat-form-field>\n           </div>\n           <br>\n\n                   \n                 \n                   <div class=\"row\" style=\"text-align:center;\">\n                   <button class=\"primary\" [disabled]=\"!LogForm.form.valid\"  color=\"primary\" mat-raised-button>SUBMIT LOG</button>\n                   </div>\n                </form>                                    \n                    </div> \n                </div>\n              <!--   <div class=\"col-md-2\"></div> -->\n            </div>\n        </div>\n\n\n        <div class=\"container-fluid\">     \n          <div class=\"row\">\n            <!--   <div class=\"col-md-2\"></div> -->\n              <div class=\"col-md-12\">\n             \n               <div class=\"row card\">\n                <div fxFlex class=\"table-component-holder mat-elevation-z4\">\n                  <mat-toolbar class=\"table-header\">\n                    <h1 class=\"mat-headline center-align\" >LOGGED COMPLAINTS</h1>\n                  </mat-toolbar>\n                        \n                  \n                  <div class=\"table-container\">\n                     \n                     <mat-paginator [pageSizeOptions]=\"[10, 50, 100]\" showFirstLastButtons></mat-paginator>\n                     <mat-form-field style=\"font-size: 14px; width: 90%; padding: 8px 24px 0\">\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                      </mat-form-field> \n                     <mat-table [dataSource]=\"dataSource\"  matSort class=\"mat-elevation-z8\">\n                        <ng-container matColumnDef=\"SerialNo\" >\n                            <mat-header-cell style=\"flex: 0 0 8%;;\" *matHeaderCellDef mat-sort-header>S/N</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 8%;\" *matCellDef=\"let situationreport\">{{ situationreport.SerialNo }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"StateName\" >\n                            <mat-header-cell style=\"flex: 0 0 10%;;\" *matHeaderCellDef mat-sort-header>STATE</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 10%;\" *matCellDef=\"let situationreport\">{{ situationreport.StateName }}</mat-cell>\n                          </ng-container>\n\n                        <ng-container matColumnDef=\"CentreID\" >\n                            <mat-header-cell style=\"flex: 0 0 10%;;\" *matHeaderCellDef mat-sort-header>CTR-ID</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 10%;\" *matCellDef=\"let situationreport\">{{ situationreport.CentreID }}</mat-cell>\n                          </ng-container>\n                        \n                          <ng-container matColumnDef=\"CentreName\">\n                            <mat-header-cell style=\"flex: 0 0 35%;\" *matHeaderCellDef mat-sort-header>CENTRE NAME</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 35%;\" *matCellDef=\"let situationreport\">{{situationreport.CentreName }}</mat-cell>\n                          </ng-container>\n                        \n                          <ng-container matColumnDef=\"Session\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>SESSION</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px;\" *matCellDef=\"let situationreport\">{{situationreport.Session }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"Caller\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>CALLER</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px;\" *matCellDef=\"let situationreport\">{{situationreport.Caller}}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"IssueCategory\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>CATEGORY</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px;\" *matCellDef=\"let situationreport\">{{situationreport.IssueCategory }}</mat-cell>\n                          </ng-container> \n\n                          <ng-container matColumnDef=\"IssueStatus\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATUS</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let situationreport\" [ngClass]=\"{'green': cell == solved}\">{{situationreport.IssueStatus }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"ProblemDesc\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>PROBLEM</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let situationreport\" [ngClass]=\"{'green': cell == solved}\">{{situationreport.ProblemDesc }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container matColumnDef=\"Solution\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>STATUS</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let situationreport\" [ngClass]=\"{'green': cell == solved}\">{{situationreport.Solution }}</mat-cell>\n                          </ng-container>\n\n<!-- \n                          <ng-container matColumnDef=\"LoggedBy\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED BY</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let situationreport\">{{situationreport.LoggedBy }}</mat-cell>\n                          </ng-container> -->\n\n                          <ng-container matColumnDef=\"LoggedDate\">\n                            <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef mat-sort-header>LOGGED DATE</mat-header-cell>\n                            <mat-cell style=\"font-size: 10px; flex: 0 0 13%;\" *matCellDef=\"let situationreport\">{{situationreport.LoggedDate | date }}</mat-cell>\n                          </ng-container>\n\n                          <ng-container  matColumnDef=\"actions\" >\n                              <mat-header-cell style=\"flex: 0 0 13%;\" *matHeaderCellDef>ACTIONS</mat-header-cell>\n                              <mat-cell *matCellDef=\"let row; let i=index;\">\n                                  <button mat-icon-button color=\"primary\" (click)=\"StartView(i, row.SerialNo, row.CentreID, row.StateName, row.CentreName, row.Session, row.Caller, row.IssueCategory, row.IssueStatus, row.ProblemDesc, row.Solution, row.LoggedBy, row.LoggedDate)\">\n                                      <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                                    </button>\n                              </mat-cell>\n                            </ng-container>\n                        \n                                     \n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                        </mat-table>\n                  \n               \n                </div>\n                </div>\n                     \n                 \n                  \n                  </div> \n              </div>\n            <!--   <div class=\"col-md-2\"></div> -->\n          </div>\n      </div>\n\n\n\n\n\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/examinations/sit-report/sit-report.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examinations/sit-report/sit-report.component.ts ***!
  \*****************************************************************/
/*! exports provided: SitReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitReportComponent", function() { return SitReportComponent; });
/* harmony import */ var _dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dialog/viewdialog/viewdialog.component */ "./src/app/examinations/dialog/viewdialog/viewdialog.component.ts");
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _examinations_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../examinations.model */ "./src/app/examinations/examinations.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SitReportComponent = /** @class */ (function () {
    function SitReportComponent(_formBuilder, toastr, examinationservice, dialog) {
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.examinationservice = examinationservice;
        this.dialog = dialog;
        this.selectedstate = new _examinations_model__WEBPACK_IMPORTED_MODULE_2__["Statess"](1, 'ABIA');
        /*  displayedColumns = ['CentreID', 'CentreName', 'Session', 'Caller', 'IssueCategory', 'IssueStatus', 'LoggedBy', 'LoggedDate']; */
        this.displayedColumns = ['SerialNo', 'CentreID', 'StateName', 'CentreName', 'IssueStatus', 'LoggedDate', 'actions'];
    }
    SitReportComponent.prototype.ngOnInit = function () {
        this.LoadState();
        this.LoadCentre();
        this.LoadSituationReport();
        this.LogFormgroup = this._formBuilder.group({
            LogState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogCentre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogCaller: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogIssue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogIssueStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogIssueCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogProblem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LogSolution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    SitReportComponent.prototype.LoadCentres = function (stat) {
        console.log(stat);
        this.DisplayedCentres = this.StoredCentres.filter(function (item) { return item.StateName === stat; });
    };
    SitReportComponent.prototype.LoadState = function () {
        var _this = this;
        this.examinationservice.GetUTMEState().subscribe(function (result) { _this.state = result; }, function (error) { return console.error(error); });
    };
    SitReportComponent.prototype.LoadCentre = function () {
        var _this = this;
        this.examinationservice.GetUTMECentres().subscribe(function (result) { _this.StoredCentres = result; }, function (error) { return console.error(error); });
    };
    SitReportComponent.prototype.LoadSituationReport = function () {
        var _this = this;
        this.examinationservice.GetUTMESituation().subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](result);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.error(error); });
    };
    SitReportComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    SitReportComponent.prototype.StartView = function (i, serialno, centreid, statename, centrename, session, caller, issuecategory, issuestatus, problemdesc, solution, loggedby, loggeddate) {
        var _this = this;
        var dialogref = this.dialog.open(_dialog_viewdialog_viewdialog_component__WEBPACK_IMPORTED_MODULE_0__["ViewdialogComponent"], {
            data: { i: i, serialno: serialno, centreid: centreid, statename: statename, centrename: centrename, session: session, caller: caller,
                issuecategory: issuecategory, problemdesc: problemdesc, solution: solution, issuestatus: issuestatus, loggedby: loggedby,
                loggeddate: loggeddate }
        });
        dialogref.afterClosed().subscribe(function () {
            _this.LoadSituationReport();
        });
    };
    SitReportComponent.prototype.SubmitLog = function () {
    };
    SitReportComponent.prototype.ngAfterViewInit = function () {
    };
    SitReportComponent.prototype.ngOnDestroy = function () {
    };
    SitReportComponent.prototype.onSelect = function (stateid) {
        console.log(stateid);
        this.centres = this.StoredCentres.filter(function (item) {
            return item.StateId === stateid;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], SitReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], SitReportComponent.prototype, "sort", void 0);
    SitReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sit-report',
            template: __webpack_require__(/*! ./sit-report.component.html */ "./src/app/examinations/sit-report/sit-report.component.html"),
            styles: [__webpack_require__(/*! ./sit-report.component.css */ "./src/app/examinations/sit-report/sit-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _examinations_service__WEBPACK_IMPORTED_MODULE_1__["ExaminationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], SitReportComponent);
    return SitReportComponent;
}());



/***/ }),

/***/ "./src/app/examinations/utme-centres/utme-centres.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/examinations/utme-centres/utme-centres.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"table-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"table-header\">\n        <h1 class=\"mat-headline center-align\" >UTME CENTRES</h1>\n      </mat-toolbar>\n     \n          \n      \n      <div class=\"table-container\">\n         \n         <mat-paginator [pageSizeOptions]=\"[5, 10, 50, 100]\" showFirstLastButtons></mat-paginator>\n         <mat-form-field style=\"font-size: 14px; width: 90%; padding: 8px 24px 0\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n          </mat-form-field> \n         <mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"statename\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>STATE</mat-header-cell>\n                <mat-cell *matCellDef=\"let utmecentres\">{{ utmecentres.Statename }}</mat-cell>\n              </ng-container>\n            \n              <ng-container matColumnDef=\"Examtown\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>TOWN</mat-header-cell>\n                <mat-cell *matCellDef=\"let utmecentres\">{{utmecentres.ExamTown }}</mat-cell>\n              </ng-container>\n            \n              <ng-container matColumnDef=\"CentreName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>CENTRE NAME</mat-header-cell>\n                <mat-cell *matCellDef=\"let utmecentres\">{{utmecentres.CentreName }}</mat-cell>\n              </ng-container>\n            \n                         \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n      \n   \n    </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/examinations/utme-centres/utme-centres.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/examinations/utme-centres/utme-centres.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examinations/utme-centres/utme-centres.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/examinations/utme-centres/utme-centres.component.ts ***!
  \*********************************************************************/
/*! exports provided: UtmeCentresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtmeCentresComponent", function() { return UtmeCentresComponent; });
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _examinations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtmeCentresComponent = /** @class */ (function () {
    function UtmeCentresComponent(examinationservice, loaderservice, router) {
        this.examinationservice = examinationservice;
        this.loaderservice = loaderservice;
        this.router = router;
        this.displayedColumns = ['statename', 'Examtown', 'CentreName'];
    }
    UtmeCentresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderservice.show();
        this.examinationservice.GetUTMECentres().subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.loaderservice.hide();
        }, function (error) { return console.error(error); });
    };
    UtmeCentresComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    UtmeCentresComponent.prototype.ngAfterViewInit = function () {
        //  this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    };
    UtmeCentresComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UtmeCentresComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], UtmeCentresComponent.prototype, "sort", void 0);
    UtmeCentresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-utme-centres',
            template: __webpack_require__(/*! ./utme-centres.component.html */ "./src/app/examinations/utme-centres/utme-centres.component.html"),
            styles: [__webpack_require__(/*! ./utme-centres.component.scss */ "./src/app/examinations/utme-centres/utme-centres.component.scss")]
        }),
        __metadata("design:paramtypes", [_examinations_service__WEBPACK_IMPORTED_MODULE_1__["ExaminationService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_0__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UtmeCentresComponent);
    return UtmeCentresComponent;
}());



/***/ })

}]);
//# sourceMappingURL=examinations-examinations-module.js.map