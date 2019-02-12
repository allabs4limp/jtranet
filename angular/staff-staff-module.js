(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-module"],{

/***/ "./src/app/staff/dialogs/adddialog/adddialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/staff/dialogs/adddialog/adddialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 450px;\r\n  }\r\n  \r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form {\r\n    display: flex;\r\n    padding-top: 6px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/staff/dialogs/adddialog/adddialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/staff/dialogs/adddialog/adddialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 mat-dialog-title>ADD NEW STAFF  </h3>\n  \n    <form class=\"mat-dialog-content\" [formGroup]=\"AddNewStaff\" (ngSubmit)=\"submit()\" #formControl=\"ngForm\">\n\n      <!--Textarea for demo purposes-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <textarea matInput formControlName=\"idcard\" #inputidcard class=\"form-control\" placeholder=\"ID Card\" [(ngModel)]=\"data.IDcard\" name=\"idcard\" required ></textarea>\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <textarea matInput formControlName=\"staffname\" #inputstaffname class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"data.Staffname\" name=\"staffname\" required ></textarea>\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </div>\n  \n      <!--Contains mat-hint for characters count and has maxLengt set-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput formControlName=\"conraiss\" #inputconraiss class=\"form-control\" placeholder=\"Conraiss\" [(ngModel)]=\"data.Conraiss\" name=\"conraiss\" required >\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field> \n      </div>\n  \n      <div class=\"form\">\n\n          <mat-form-field color=\"accent\" >\n              <mat-select formControlName=\"department\"  [(ngModel)]=\"SelectedDept\"  name= \"department\" placeholder=\"Department\" required>\n                <mat-option *ngFor=\"let dept of department\" [value]=\"dept.DeptId\"> {{dept.DeptName}} </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n           \n            </mat-form-field>\n                  <!--  <mat-form-field color=\"accent\">\n                    <input matInput #inputdepartment class=\"form-control\" placeholder=\"Department\" [(ngModel)]=\"data.Department\" name=\"department\" required >\n                    <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field> -->\n      </div>\n  \n      <div class=\"form\">\n            <mat-form-field color=\"accent\">\n                    <input matInput formControlName=\"intercom\"  #inputintercom class=\"form-control\" placeholder=\"InterCom No\" [(ngModel)]=\"data.Intercom\" name=\"intercom\" required >\n                    <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n            <mat-form-field color=\"accent\">\n                    <input matInput formControlName=\"email\"  #inputemail class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"data.Email\" name=\"email\" required >\n                    <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n      </div>\n  \n      <div mat-dialog-actions>\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n      </div>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/staff/dialogs/adddialog/adddialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/staff/dialogs/adddialog/adddialog.component.ts ***!
  \****************************************************************/
/*! exports provided: AdddialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddialogComponent", function() { return AdddialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../staff.service */ "./src/app/staff/staff.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var AdddialogComponent = /** @class */ (function () {
    function AdddialogComponent(dialogRef, data, staffService, formbuilder, toastr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
        this.formbuilder = formbuilder;
        this.toastr = toastr;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.AddNewStaff = formbuilder.group({
            staffname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            idcard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            conraiss: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            intercom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    AdddialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    AdddialogComponent.prototype.showSuccess = function () {
        this.toastr.success('New Staff Details Added Succesully');
    };
    AdddialogComponent.prototype.showError = function () {
        this.toastr.error('New Staff Not Added, Please try again');
    };
    AdddialogComponent.prototype.ngOnInit = function () {
        this.LoadDepartment();
    };
    AdddialogComponent.prototype.LoadDepartment = function () {
        var _this = this;
        this.staffService.GetAllDepartment().subscribe(function (result) {
            _this.department = result;
        }, function (error) { return console.error(error); });
    };
    AdddialogComponent.prototype.submit = function () {
        var _this = this;
        this.staffService.AddNewStaff(this.AddNewStaff.value)
            .subscribe(function (res) {
            _this.showSuccess();
            // console.log('Done');
        }, function (error) {
            _this.showError();
            // console.log('Error');
        });
        //  .subscribe(result => {
        //  console.log(result);
        //  this.staffService.GetStaffdetails();
        //   return true;
    };
    // error => {
    // console.error('Error Inserting');
    // });
    // }
    AdddialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AdddialogComponent.prototype.confirmAdd = function () {
    };
    AdddialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adddialog',
            template: __webpack_require__(/*! ./adddialog.component.html */ "./src/app/staff/dialogs/adddialog/adddialog.component.html"),
            styles: [__webpack_require__(/*! ./adddialog.component.css */ "./src/app/staff/dialogs/adddialog/adddialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AdddialogComponent);
    return AdddialogComponent;
}());



/***/ }),

/***/ "./src/app/staff/dialogs/deletedialog/deletedialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/staff/dialogs/deletedialog/deletedialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 mat-dialog-title>Are you sure?</h3>\n    <div mat-dialog-content>\n      ID Card: {{data.idcard}}\n      <p></p>\n      Staff Name: {{data.staffname}}\n      <p></p>\n      Conraiss: {{data.conraiss}}\n      <p></p>\n      Department: {{data.department}}\n      <p></p>\n      Intercom: {{data.intercom}}\n      <p></p>\n      Email: {{data.email}}\n      <p></p>\n    </div>\n  \n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">Delete</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/staff/dialogs/deletedialog/deletedialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/staff/dialogs/deletedialog/deletedialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/staff/dialogs/deletedialog/deletedialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/staff/dialogs/deletedialog/deletedialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeletedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletedialogComponent", function() { return DeletedialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../staff.service */ "./src/app/staff/staff.service.ts");
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



var DeletedialogComponent = /** @class */ (function () {
    function DeletedialogComponent(dialogRef, data, staffService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
    }
    DeletedialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeletedialogComponent.prototype.confirmDelete = function () {
    };
    DeletedialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deletedialog',
            template: __webpack_require__(/*! ./deletedialog.component.html */ "./src/app/staff/dialogs/deletedialog/deletedialog.component.html"),
            styles: [__webpack_require__(/*! ./deletedialog.component.scss */ "./src/app/staff/dialogs/deletedialog/deletedialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
    ], DeletedialogComponent);
    return DeletedialogComponent;
}());



/***/ }),

/***/ "./src/app/staff/dialogs/editdialog/editdialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/staff/dialogs/editdialog/editdialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 450px;\r\n  }\r\n  \r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form {\r\n    display: flex;\r\n    padding-top: 6px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/staff/dialogs/editdialog/editdialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/staff/dialogs/editdialog/editdialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 mat-dialog-title>Staff Serial No: {{data.serial}} -- {{ data.staffname}}</h3>\n  \n    <form class=\"mat-dialog-content\" #formControl=\"ngForm\" (ngSubmit)=\"submit()\" >\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputserial class=\"form-control\" placeholder=\"Serial No\" [(ngModel)]=\"data.serial\" name=\"serial\" disabled required >\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </div>\n  \n      <!--Textarea for demo purposes-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <textarea matInput #inputidcrad class=\"form-control\" placeholder=\"ID Card\" [(ngModel)]=\"data.idcard\" name=\"idcard\" required ></textarea>\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <textarea matInput #inputstaffname class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"data.staffname\" name=\"staffname\" required ></textarea>\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </div>\n  \n      <!--Contains mat-hint for characters count and has maxLengt set-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputconraiss class=\"form-control\" placeholder=\"Conraiss\" [(ngModel)]=\"data.conraiss\" name=\"conraiss\" required >\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n\n          <mat-form-field color=\"accent\" >\n              <mat-select [(ngModel)]=\"selecteddept\" #inputdepartment=\"ngModel\" name = \"department\"  required placeholder=\"Department\" required>\n                <mat-option *ngFor=\"let dept of department\" [value]=\"dept.DeptId\"> {{dept.DeptName}} </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n\n        <!--     <mat-form-field color=\"accent\">\n                    <input matInput #inputdepartment class=\"form-control\" placeholder=\"Department\" [(ngModel)]=\"data.department\" name=\"department\" required >\n                    <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field> -->\n      </div>\n      \n      <div class=\"form\">\n            <mat-form-field color=\"accent\">\n                    <input matInput #inputintercom class=\"form-control\" placeholder=\"InterCom No\" [(ngModel)]=\"data.intercom\" name=\"intercom\" required >\n                    <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n            <mat-form-field color=\"accent\">\n                    <input matInput #inputemail class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"data.email\" name=\"email\" required >\n                    <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n      </div>\n  \n      <div mat-dialog-actions>\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n      </div>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/staff/dialogs/editdialog/editdialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/staff/dialogs/editdialog/editdialog.component.ts ***!
  \******************************************************************/
/*! exports provided: EditdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdialogComponent", function() { return EditdialogComponent; });
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../staff.service */ "./src/app/staff/staff.service.ts");
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





var EditdialogComponent = /** @class */ (function () {
    function EditdialogComponent(dialogRef, data, staffService, toastr, formbuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
        this.toastr = toastr;
        this.formbuilder = formbuilder;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            // Validators.email,
        ]);
        this.UpdateStaff = formbuilder.group({
            serial: [this.data.serial, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            staffname: [this.data.staffname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            idcard: [this.data.idcard, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conraiss: [this.data.conraiss, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: [this.selecteddept, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            intercom: [this.data.intercom, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.data.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    EditdialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditdialogComponent.prototype.ngOnInit = function () {
        this.loadDepartment();
    };
    EditdialogComponent.prototype.loadDepartment = function () {
        var _this = this;
        this.staffService.GetAllDepartment().subscribe(function (result) {
            _this.department = result;
        }, function (error) { return console.error(error); });
    };
    EditdialogComponent.prototype.showSuccess = function () {
        this.toastr.success('Staff Details Updated');
    };
    EditdialogComponent.prototype.showError = function () {
        this.toastr.error('Staff not Updated, Please try again');
    };
    EditdialogComponent.prototype.submit = function () {
        console.log(this.UpdateStaff.value);
        /*  this.staffService.UpdateStaff(this.UpdateStaff.value)
         .subscribe(res => {  this.showSuccess();
       
       },
           error => {
             this.showError();
       
            }); */
        /*   this.staffService.UpdateStaff({
            Serial: this.data.serial,
            IDcard: updateform.value.idcard,
            Staffname: updateform.value.staffname,
            Conraiss: updateform.value.conraiss,
            Department: updateform.value.department,
            Intercom: updateform.value.intercom,
            Email: updateform.value.email
          })
          .subscribe(res => {this.showSuccess();
           },
               error => {
                 this.showError();
                }); */
    };
    EditdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditdialogComponent.prototype.stopEdit = function () {
    };
    EditdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editdialog',
            template: __webpack_require__(/*! ./editdialog.component.html */ "./src/app/staff/dialogs/editdialog/editdialog.component.html"),
            styles: [__webpack_require__(/*! ./editdialog.component.css */ "./src/app/staff/dialogs/editdialog/editdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _staff_service__WEBPACK_IMPORTED_MODULE_0__["StaffService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditdialogComponent);
    return EditdialogComponent;
}());



/***/ }),

/***/ "./src/app/staff/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/staff/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/staff/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/staff/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\">EDIT PROFILE</h1>\n    </mat-toolbar>\n\n    <div class=\"row\">\n      <!--   <div class=\"col-md-2\"></div> -->\n        <div class=\"col-md-12\">\n            <div class=\"row card\">\n        <div class=\"container-fluid\">\n           \n            <div class=\"row\">\n              <!--   <div class=\"col-md-2\"></div> -->\n                <div class=\"col-md-12\">\n               \n                 <div class=\"row card\">\n\n  <form [formGroup]=\"ProfileUpdate\" #updateform=\"ngForm\" (ngSubmit)=\"submit()\" >\n\n    <div class=\"row\" style=\"text-align:center;\">\n      <mat-form-field color=\"accent\">\n        <input matInput  placeholder=\"IDCARD NO\" [(ngModel)]=\"idnum\" formControlName=\"IDNum\" [readonly]=\"true\" >\n      </mat-form-field>\n    </div>\n    <br>\n\n <!--    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputsession class=\"form-control\" placeholder=\"Session\" [(ngModel)]=\"data.session\" name=\"session\" disabled >\n      </mat-form-field>\n    </div> -->\n\n    <!--Textarea for demo purposes-->\n   <!--  <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputcaller class=\"form-control\" placeholder=\"Caller\" [(ngModel)]=\"data.caller\" name=\"caller\" disabled >\n      </mat-form-field>\n    </div> -->\n\n    <div class=\"row\" style=\"text-align:center;\">\n      <mat-form-field style=\"width:500px !important\"  color=\"accent\">\n        <input matInput class=\"form-control\" placeholder=\"STAFF NAME\" [(ngModel)]=\"staffname\" formControlName=\"StaffName\" required >\n        <mat-hint style=\"color: blue\">Edit name</mat-hint>\n      </mat-form-field>\n    </div>\n    <br>\n\n    <div class=\"row\" style=\"text-align:center;\">\n      <mat-form-field style=\"width:400px !important\" color=\"accent\">\n        <input matInput class=\"form-control\" placeholder=\"PHONE NUMBER\" [(ngModel)]=\"phonenum\" formControlName=\"PhoneNum\" required>\n        <mat-hint style=\"color: blue\">Edit phone number</mat-hint>\n      </mat-form-field>\n    </div>\n<br>\n    <div class=\"row\" style=\"text-align:center;\">\n      <mat-form-field style=\"width:300px !important\" color=\"accent\" >\n        <mat-select ngModel formControlName=\"level\"  required placeholder=\"CONRAISS\" required>\n            <mat-option value=\"6\">6</mat-option>\n            <mat-option value=\"7\">7 </mat-option>\n            <mat-option value=\"8\">8  </mat-option>\n            <mat-option value=\"9\">9</mat-option>\n            <mat-option value=\"10\">10</mat-option>\n            <mat-option value=\"11\">11 </mat-option>\n            <mat-option value=\"12\">12 </mat-option>\n            <mat-option value=\"13\">13 </mat-option>\n        </mat-select>\n        <mat-hint style=\"color: blue\">Select Level</mat-hint>\n      </mat-form-field>\n    </div>\n    <br>\n\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"row\" style=\"text-align:center;\">\n      <mat-form-field style=\"width:300px !important\" color=\"accent\">\n        <input matInput class=\"form-control\" placeholder=\"EMAIL\" [(ngModel)]=\"email\" formControlName=\"Email\"  required >\n        <mat-hint style=\"color: blue\">Edit email address</mat-hint>\n      </mat-form-field>\n      \n    </div>\n<br>\n    <div class=\"row\" style=\"text-align:center;\">\n\n        <mat-form-field style=\"width:300px !important\" color=\"accent\" >\n            <mat-select ngModel  formControlName=\"Department\" name =\"Department\"  required placeholder=\"DEPARTMENT\">\n                <mat-option *ngFor=\"let dept of department\" [value]=\"dept.DeptId\"> {{dept.DeptName}} </mat-option>           \n            </mat-select>\n            <mat-hint style=\"color: blue\">Select Department</mat-hint>\n          </mat-form-field>\n    </div>\n<br>\n<div class=\"row\" style=\"text-align:center;\">\n  <mat-form-field style=\"width:400px !important\" color=\"accent\">\n    <input matInput class=\"form-control\" placeholder=\"Certificate No\" [(ngModel)]=\"certnum\" formControlName=\"Certnum\" required>\n    <mat-hint style=\"color: blue\">Enter Certificate number</mat-hint>\n  </mat-form-field>\n</div>\n<br>\n\n    <div style=\"text-align:center;\">\n      <button style=\"text-align:center;\" [disabled]=\"!updateform.form.valid\" type=\"button\" class=\"btn btn-primary\" mat raised-button  (click)=\"UpdateProfile()\">Update</button>\n    </div>\n  </form>\n                 </div>\n                </div>\n            </div>\n        </div>\n  </div>\n</div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/staff/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../staff.service */ "./src/app/staff/staff.service.ts");
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





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(staffservice, authservice, toastr, formbuilder) {
        this.staffservice = staffservice;
        this.authservice = authservice;
        this.toastr = toastr;
        this.formbuilder = formbuilder;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.LoadDepartment();
        this.idnum = localStorage.getItem('idcard');
        this.staffname = localStorage.getItem('profilename');
        this.phonenum = localStorage.getItem('phoneno');
        this.level = localStorage.getItem('level');
        this.email = localStorage.getItem('email');
        this.conraiss = localStorage.getItem('conraiss');
        this.certnum = localStorage.getItem('certnum');
        this.ProfileUpdate = this.formbuilder.group({
            IDNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StaffName: [localStorage.getItem('profilename'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PhoneNum: [localStorage.getItem('phoneno'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            level: [localStorage.getItem('level'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Email: [localStorage.getItem('email'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Certnum: [localStorage.getItem('certnum'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        /*     this.loggedby = localStorage.getItem('profilename');
            this.UpdateReport = this.formbuilder.group({
             SerialNo: [this.data.serialno, Validators.required],
             /*   Session: [this.data.session, Validators.required],
               Caller: [this.data.caller, Validators.required], */
        /*        IssueCategory: [this.data.issuecategory, Validators.required],
               LoggedBy: [this.data.loggedby, Validators.required],
               LoggedDate: [this.data.loggeddate, Validators.required],
        });  */
    };
    ProfileComponent.prototype.submit = function () {
        /*     console.log(this.UpdateReport.value);
            console.log( this.SelectedIssueCat);
        this.examinationservice.UpdateRegistration(this.UpdateReport.value, this.SelectedIssueCat)
        .subscribe(result => {
          this.showSuccess();
          this.examinationservice.GetUTMERegistration(this.loggedby);
          this.dialogRef.close();
        },
        error => {
          this.showError();
        }); */
    };
    ProfileComponent.prototype.LoadDepartment = function () {
        var _this = this;
        this.staffservice.GetAllDepartment().subscribe(function (result) {
            _this.department = result;
        }, function (error) { return console.error(error); });
    };
    ProfileComponent.prototype.UpdateProfile = function () {
        var _this = this;
        this.staffservice.UpdateProfileDetails(this.ProfileUpdate.value).subscribe(function (result) {
            _this.showSuccess();
            _this.authservice.LogOut();
        }, function (error) {
            _this.showError();
        });
    };
    ProfileComponent.prototype.showSuccess = function () {
        this.toastr.success('Updated Succesfully');
    };
    ProfileComponent.prototype.showError = function () {
        this.toastr.error('Update Failed, Please try again');
    };
    ProfileComponent.prototype.stopEdit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/staff/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/staff/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_staff_service__WEBPACK_IMPORTED_MODULE_1__["StaffService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.module.ts":
/*!***************************************!*\
  !*** ./src/app/staff/staff.module.ts ***!
  \***************************************/
/*! exports provided: highlightJsFactory, StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var _staffdetails_staffdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staffdetails/staffdetails.component */ "./src/app/staff/staffdetails/staffdetails.component.ts");
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
/* harmony import */ var _dialogs_editdialog_editdialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs/editdialog/editdialog.component */ "./src/app/staff/dialogs/editdialog/editdialog.component.ts");
/* harmony import */ var _dialogs_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialogs/adddialog/adddialog.component */ "./src/app/staff/dialogs/adddialog/adddialog.component.ts");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _staff_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./staff.router */ "./src/app/staff/staff.router.ts");
/* harmony import */ var _dialogs_deletedialog_deletedialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialogs/deletedialog/deletedialog.component */ "./src/app/staff/dialogs/deletedialog/deletedialog.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/staff/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_19__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_21__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_19__;
}
var StaffModule = /** @class */ (function () {
    function StaffModule() {
    }
    StaffModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _staff_router__WEBPACK_IMPORTED_MODULE_22__["StaffRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
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
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_20__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_20__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
            ],
            declarations: [
                _staffdetails_staffdetails_component__WEBPACK_IMPORTED_MODULE_0__["StaffdetailsComponent"],
                _dialogs_editdialog_editdialog_component__WEBPACK_IMPORTED_MODULE_17__["EditdialogComponent"],
                _dialogs_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_18__["AdddialogComponent"],
                _dialogs_deletedialog_deletedialog_component__WEBPACK_IMPORTED_MODULE_23__["DeletedialogComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"]
            ],
            entryComponents: [
                _dialogs_editdialog_editdialog_component__WEBPACK_IMPORTED_MODULE_17__["EditdialogComponent"],
                _dialogs_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_18__["AdddialogComponent"],
                _dialogs_deletedialog_deletedialog_component__WEBPACK_IMPORTED_MODULE_23__["DeletedialogComponent"]
            ],
            exports: []
        })
    ], StaffModule);
    return StaffModule;
}());



/***/ }),

/***/ "./src/app/staff/staff.router.ts":
/*!***************************************!*\
  !*** ./src/app/staff/staff.router.ts ***!
  \***************************************/
/*! exports provided: StaffRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRouterModule", function() { return StaffRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/staff/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffRoutes = [
    /*  { path: 'staffdetails', component:  StaffdetailsComponent , data: { animation: 'buttons' }}, */
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], data: { animation: 'buttons' } },
    { path: '', redirectTo: '/auth/dashboard', pathMatch: 'full' }
];
var StaffRouterModule = /** @class */ (function () {
    function StaffRouterModule() {
    }
    StaffRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(StaffRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], StaffRouterModule);
    return StaffRouterModule;
}());



/***/ }),

/***/ "./src/app/staff/staffdetails/staffdetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/staff/staffdetails/staffdetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"table-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"table-header\">\n      <h1 class=\"mat-headline center-align\" >STAFF DETAILS</h1>\n    </mat-toolbar>\n   \n        \n    \n    <div class=\"table-container\">\n       \n       <mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator>\n       <mat-form-field style=\"font-size: 14px; width: 90%; padding: 8px 24px 0\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        </mat-form-field> \n       <mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">     \n          <ng-container matColumnDef=\"Serial\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>S/N</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{ staffdetails.Serial }}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"IDcard\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>ID CARD</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{ staffdetails.IDcard }}</mat-cell>\n            </ng-container>\n        \n          <ng-container matColumnDef=\"Staffname\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>STAFF NAME</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{ staffdetails.Staffname }}</mat-cell>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"Conraiss\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>CONRAISS</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{ staffdetails.Conraiss }}</mat-cell>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"Department\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>DEPARTMENT</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{staffdetails.Department }}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Intercom\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>INTERCOM NO</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{staffdetails.Intercom }}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Email\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>EMAIL</mat-header-cell>\n              <mat-cell *matCellDef=\"let staffdetails\">{{staffdetails.Email }}</mat-cell>\n            </ng-container>\n\n           \n            <ng-container  matColumnDef=\"actions\" >\n              <mat-header-cell *matHeaderCellDef>\n                <div *ngIf=\"Roletype === 1\">\n                <button mat-icon-button color=\"primary\" (click)=\"AddNew()\" >\n                  <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n                </button>   \n              </div>\n                <div *ngIf=\"Roletype === 2\">\n                  <button mat-icon-button color=\"primary\" >\n                   \n                  </button>   \n                </div>\n                <div *ngIf=\"Roletype === 3\">\n                  <button mat-icon-button color=\"primary\" >\n                   \n                  </button>   \n                </div>\n              </mat-header-cell> \n        \n              <mat-cell *matCellDef=\"let row; let i=index;\">\n              <div *ngIf=\"Roletype === 1\">\n                <button mat-icon-button color=\"primary\" (click)=\"StartEdit(i, row.Serial, row.IDcard, row.Staffname, row.Conraiss, row.Department, row.Intercom, row.Email)\">\n                  <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                </button>\n              </div>\n              <div *ngIf=\"Roletype === 2\">\n                  <button mat-icon-button color=\"accent\" >\n                  \n                  </button>\n              </div>\n              <div *ngIf=\"Roletype === 3\">\n                <button mat-icon-button color=\"accent\" >\n                \n                </button>\n            </div>\n              <div *ngIf=\"Roletype === 1\">\n                <button mat-icon-button color=\"accent\" (click)=\"StartDelete(i, row.Serial, row.IDcard, row.Staffname, row.Conraiss, row.Department, row.Intercom, row.Email)\">\n                  <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                </button>\n                </div>\n                <div *ngIf=\"Roletype === 2\">\n                 <button mat-icon-button color=\"accent\" >\n                </button>\n                 </div>\n                 <div *ngIf=\"Roletype === 3\">\n                  <button mat-icon-button color=\"accent\" >\n                 </button>\n                  </div>\n\n                 <div *ngIf=\"Roletype === 1\">\n                  <button mat-icon-button color=\"green\" (click)=\"StartFlag(i, row.Serial, row.IDcard, row.Staffname, row.Conraiss, row.Department, row.Intercom, row.Email)\">\n                    <mat-icon aria-label=\"Flag\">flag</mat-icon>\n                  </button>\n                  </div>\n                  <div *ngIf=\"Roletype === 2\">\n                   <button mat-icon-button color=\"accent\" >\n                  </button>\n                   </div>\n                   <div *ngIf=\"Roletype === 3\">\n                    <button mat-icon-button color=\"accent\" >\n                   </button>\n                    </div>\n              </mat-cell>\n            </ng-container>\n\n                       \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n    \n \n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/staff/staffdetails/staffdetails.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/staff/staffdetails/staffdetails.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/staff/staffdetails/staffdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/staff/staffdetails/staffdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: StaffdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailsComponent", function() { return StaffdetailsComponent; });
/* harmony import */ var _dialogs_deletedialog_deletedialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dialogs/deletedialog/deletedialog.component */ "./src/app/staff/dialogs/deletedialog/deletedialog.component.ts");
/* harmony import */ var _dialogs_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialogs/adddialog/adddialog.component */ "./src/app/staff/dialogs/adddialog/adddialog.component.ts");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../staff.service */ "./src/app/staff/staff.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialogs_editdialog_editdialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/editdialog/editdialog.component */ "./src/app/staff/dialogs/editdialog/editdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StaffdetailsComponent = /** @class */ (function () {
    function StaffdetailsComponent(toastr, staffservice, router, dialog) {
        this.toastr = toastr;
        this.staffservice = staffservice;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['Serial', 'IDcard', 'Staffname', 'Conraiss', 'Department', 'Intercom', 'Email', 'actions'];
    }
    StaffdetailsComponent.prototype.ngOnInit = function () {
        this.LoadStaffDetails();
    };
    StaffdetailsComponent.prototype.showSuccess = function () {
        this.toastr.success('New Staff Details Added Succesully');
    };
    StaffdetailsComponent.prototype.showError = function () {
        this.toastr.success('New Staff Not Added, Please try again');
    };
    StaffdetailsComponent.prototype.LoadStaffDetails = function () {
        var _this = this;
        this.staffservice.GetStaffdetails().subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](result);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.error(error); });
        this.FilterEditandDelete();
    };
    StaffdetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    StaffdetailsComponent.prototype.ngAfterViewInit = function () {
    };
    StaffdetailsComponent.prototype.ngOnDestroy = function () {
    };
    StaffdetailsComponent.prototype.FilterEditandDelete = function () {
        if (localStorage.getItem('role') === '1') {
            this.Roletype = 1;
        }
        else if (localStorage.getItem('role') === '2') {
            this.Roletype = 2;
        }
        else if (localStorage.getItem('role') === '3') {
            this.Roletype = 3;
        }
    };
    StaffdetailsComponent.prototype.StartDelete = function (i, serial, idcard, staffname, conraiss, depertment, intercom, email) {
        var dialogref = this.dialog.open(_dialogs_deletedialog_deletedialog_component__WEBPACK_IMPORTED_MODULE_0__["DeletedialogComponent"], {
            data: { serial: serial, idcard: idcard, staffname: staffname, conraiss: conraiss, department: depertment,
                intercom: intercom, email: email }
        });
    };
    StaffdetailsComponent.prototype.StartEdit = function (i, serial, idcard, staffname, conraiss, depertment, intercom, email) {
        var dialogref = this.dialog.open(_dialogs_editdialog_editdialog_component__WEBPACK_IMPORTED_MODULE_7__["EditdialogComponent"], {
            data: { serial: serial, idcard: idcard, staffname: staffname, conraiss: conraiss, department: depertment,
                intercom: intercom, email: email }
        });
    };
    StaffdetailsComponent.prototype.StartFlag = function (i, serial, idcard, staffname, conraiss, depertment, intercom, email) {
        var dialogref = this.dialog.open(_dialogs_deletedialog_deletedialog_component__WEBPACK_IMPORTED_MODULE_0__["DeletedialogComponent"], {
            data: { serial: serial, idcard: idcard, staffname: staffname, conraiss: conraiss, department: depertment,
                intercom: intercom, email: email }
        });
    };
    StaffdetailsComponent.prototype.AddNew = function (details) {
        var _this = this;
        var dialogref = this.dialog.open(_dialogs_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_1__["AdddialogComponent"], { data: { details: details } });
        dialogref.afterClosed().subscribe(function (data) {
            _this.LoadStaffDetails();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], StaffdetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], StaffdetailsComponent.prototype, "sort", void 0);
    StaffdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-staffdetails',
            template: __webpack_require__(/*! ./staffdetails.component.html */ "./src/app/staff/staffdetails/staffdetails.component.html"),
            styles: [__webpack_require__(/*! ./staffdetails.component.scss */ "./src/app/staff/staffdetails/staffdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], StaffdetailsComponent);
    return StaffdetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=staff-staff-module.js.map