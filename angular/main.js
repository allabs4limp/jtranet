(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../applications/applications.module": [
		"./src/app/applications/applications.module.ts",
		"applications-applications-module~downloads-downloads-module~examinations-examinations-module~staff-s~ccd00301",
		"applications-applications-module"
	],
	"../auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"../downloads/downloads.module": [
		"./src/app/downloads/downloads.module.ts",
		"applications-applications-module~downloads-downloads-module~examinations-examinations-module~staff-s~ccd00301",
		"downloads-downloads-module~examinations-examinations-module~uploads-uploads-module",
		"downloads-downloads-module"
	],
	"../examinations/examinations.module": [
		"./src/app/examinations/examinations.module.ts",
		"applications-applications-module~downloads-downloads-module~examinations-examinations-module~staff-s~ccd00301",
		"downloads-downloads-module~examinations-examinations-module~uploads-uploads-module",
		"examinations-examinations-module"
	],
	"../forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"forms-forms-module"
	],
	"../pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"pages-login-login-module"
	],
	"../staff/staff.module": [
		"./src/app/staff/staff.module.ts",
		"applications-applications-module~downloads-downloads-module~examinations-examinations-module~staff-s~ccd00301",
		"staff-staff-module"
	],
	"../uploads/uploads.module": [
		"./src/app/uploads/uploads.module.ts",
		"applications-applications-module~downloads-downloads-module~examinations-examinations-module~staff-s~ccd00301",
		"downloads-downloads-module~examinations-examinations-module~uploads-uploads-module",
		"uploads-uploads-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Globals.ts":
/*!****************************!*\
  !*** ./src/app/Globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        /* ipaddress: string = '192.168.16.120'; */
        /* ipaddress: string = 'jtranet.herokuapp.com'; */
        this.ipaddress = 'localhost';
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n<router-outlet ></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _downloads_downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloads/downloads.service */ "./src/app/downloads/downloads.service.ts");
/* harmony import */ var _uploads_uploads_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploads/uploads.service */ "./src/app/uploads/uploads.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lazy-load/lazy-load.module */ "./src/app/lazy-load/lazy-load.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _examinations_examinations_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examinations/examinations.service */ "./src/app/examinations/examinations.service.ts");
/* harmony import */ var _staff_staff_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staff/staff.service */ "./src/app/staff/staff.service.ts");
/* harmony import */ var _applications_applications_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./applications/applications.service */ "./src/app/applications/applications.service.ts");
/* harmony import */ var _dashboard_crm_dashboard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-crm/dashboard.service */ "./src/app/dashboard-crm/dashboard.service.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Globals */ "./src/app/Globals.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _applications_chat_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./applications/chat.service */ "./src/app/applications/chat.service.ts");
/* harmony import */ var _applications_pusher_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./applications/pusher.service */ "./src/app/applications/pusher.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_9__["LazyLoadModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _dashboard_crm_dashboard_service__WEBPACK_IMPORTED_MODULE_18__["DashboardService"], _examinations_examinations_service__WEBPACK_IMPORTED_MODULE_15__["ExaminationService"],
                _staff_staff_service__WEBPACK_IMPORTED_MODULE_16__["StaffService"], _applications_applications_service__WEBPACK_IMPORTED_MODULE_17__["ApplicationService"], _uploads_uploads_service__WEBPACK_IMPORTED_MODULE_3__["UploadsService"], _Globals__WEBPACK_IMPORTED_MODULE_19__["Globals"], _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"],
                _applications_pusher_service__WEBPACK_IMPORTED_MODULE_24__["PusherService"], _applications_chat_service__WEBPACK_IMPORTED_MODULE_23__["ChatService"], _downloads_downloads_service__WEBPACK_IMPORTED_MODULE_2__["DownloadsService"], _loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    AppService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + new Date() + EXCEL_EXTENSION);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/applications/applications.service.ts":
/*!******************************************************!*\
  !*** ./src/app/applications/applications.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationService = /** @class */ (function () {
    function ApplicationService(router, http, globals) {
        this.router = router;
        this.http = http;
        this.globals = globals;
        this.applicationdetails = [];
        this.leavetype = [];
        // UtmeCentresChanged = new Subject<StaffDetails[]>();
        // FetchedUtmeCentres = new Subject<StaffDetails[]>();
        this.baseURL = 'hhttp://' + this.globals.ipaddress + ':3000/applications/';
    }
    ApplicationService.prototype.GetStaffdetails = function () {
        return this.http.get(this.baseURL + 'staffdetails');
    };
    ApplicationService.prototype.GetLeaveType = function () {
        return this.http.get(this.baseURL + 'leave');
    };
    ApplicationService.prototype.SaveLeaveApplication = function () {
    };
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/applications/chat.service.ts":
/*!**********************************************!*\
  !*** ./src/app/applications/chat.service.ts ***!
  \**********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pusher.service */ "./src/app/applications/pusher.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(_pusherService, _http, globals) {
        this._pusherService = _pusherService;
        this._http = _http;
        this.globals = globals;
        this._endPoint = 'http://' + this.globals.ipaddress + ':2000'; // normally you use environment.ts
        this._channel = this._pusherService.getPusher().subscribe('chat-group');
    }
    ChatService.prototype.join = function (param) {
        var _this = this;
        return this._http.post(this._endPoint + "/join", param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.user = param;
        }));
    };
    ChatService.prototype.sendMessage = function (message) {
        var param = __assign({ message: message, type: 'human' }, this.user);
        return this._http.post(this._endPoint + "/message", param);
    };
    ChatService.prototype.getChannel = function () {
        return this._channel;
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_pusher_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/applications/pusher.service.ts":
/*!************************************************!*\
  !*** ./src/app/applications/pusher.service.ts ***!
  \************************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PusherService = /** @class */ (function () {
    function PusherService() {
        this._pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_1__('ae6421390bb11fc21749', {
            cluster: 'eu',
            encrypted: true
        });
    }
    // any time it is needed we simply call this method
    PusherService.prototype.getPusher = function () {
        return this._pusher;
    };
    PusherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PusherService);
    return PusherService;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authservice.IsAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AngularFirestore } from 'angularfire2/firestore';
var AuthService = /** @class */ (function () {
    function AuthService(router, globals, 
    // private AfAuth: AngularFireAuth,
    // private db: AngularFirestore,
    http) {
        this.router = router;
        this.globals = globals;
        this.http = http;
        this.authchange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Remeber to change isauthenticated to False, if you want page to be loggng out every time page refreshes
        this.isAuthenticated = false;
        var settings = { timestampsInSnapshots: true };
        // db.app.firestore().settings(settings);
    }
    /*  LoginUser (authdata: AuthData) {
       this.AfAuth.auth.signInWithEmailAndPassword(
           authdata.email,
           authdata.password
        )
        .then (result => {
            this.isAuthenticated = true;
            this.router.navigate(['/auth/dashboard']);
        })
        .catch (err => {
            this.errorMessage = 'Invalid Login Credentials';
            console.log(err);
        });
    } */
    AuthService.prototype.LoginUser = function (authdata) {
        var baseURL = 'http://' + this.globals.ipaddress + ':3000/user/';
        this.isAuthenticated = true;
        return this.http.get(baseURL + authdata.email + '/' + authdata.password);
    };
    AuthService.prototype.LogOut = function () {
        this.isAuthenticated = false;
        this.authchange.next(false);
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.GetUser = function () {
    };
    AuthService.prototype.IsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/core/sidemenu/sidemenu.component.ts");
/* harmony import */ var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu-item/sidemenu-item.component */ "./src/app/core/sidemenu-item/sidemenu-item.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.component */ "./src/app/core/toolbar-notification/toolbar-notification.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/core/search-bar/search-bar.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/core/fullscreen/fullscreen.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/core/user-menu/user-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            ],
            exports: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [fxHide]=\"true\" [fxHide.gt-xs]=\"false\" (click)=\"toggleFullscreen()\">\n    <mat-icon *ngIf=\"!isFullscreen\">fullscreen</mat-icon>\n    <mat-icon *ngIf=\"isFullscreen\">fullscreen_exit</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.ts ***!
  \*********************************************************/
/*! exports provided: FullscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function() { return FullscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullscreenComponent = /** @class */ (function () {
    function FullscreenComponent() {
        this.isFullscreen = false;
    }
    FullscreenComponent.prototype.ngOnInit = function () {
    };
    FullscreenComponent.prototype.toggleFullscreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    FullscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/core/fullscreen/fullscreen.component.html"),
            styles: [__webpack_require__(/*! ./fullscreen.component.scss */ "./src/app/core/fullscreen/fullscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FullscreenComponent);
    return FullscreenComponent;
}());



/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search\"  [ngClass]=\"{'search-open': open == true}\"> \n  <input matInput placeholder=\"Search\" autocomplete=\"off\" (focus)=\"bigMenu = true\" (focusout)=\"bigMenu = false\">\n</mat-form-field>"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n\n.search.search-open {\n  width: 250px;\n  visibility: visible;\n  opacity: 1;\n  margin-top: 11px; }\n"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "open", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/core/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/core/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Overview\">\n\n        <div class=\"sidebar\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"padding: 30px 0; background: url('./assets/images/bg/bg.png');\">\n                <div style=\"width: 100%; height: 22%; position: absolute;background: #17161642;z-index: 1\"></div>\n                <div class=\"mat-display-2\" style=\"margin: 0; color: white;z-index: 2\">{{today | date:'shortTime'}}</div>\n                <div class=\"mat-subheading-2\" style=\"margin: 0;color: white;z-index: 2\">{{today | date:'EEEE'}}, {{today | date:'MMMM'}} {{today | date:'dd'}}\n                </div>\n            </div>\n\n\n            <mat-divider></mat-divider>\n\n            <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Upcoming Events</h3>\n            <mat-nav-list>\n                <div *ngFor=\"let event of events;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ event.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ event.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n\n         \n        \n\n        </div>\n    </mat-tab>\n\n    <mat-tab label=\"Notifications\">\n        <div class=\"sidebar\">\n            <div>\n               \n\n              \n            </div>\n        </div>\n\n    </mat-tab>\n</mat-tab-group>\n\n\n"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 2px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.today {\n  width: 100%;\n  height: 22%;\n  position: absolute;\n  background: '#17161642';\n  z-index: 1; }\n\n/* .today-bg{\n\tpadding: 30px 0;\n\tbackground: url('../../../assets/images/bg/city1.jpg');\n} */\n\n.today-time {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n\n.today-date {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.today = Date.now();
        // public bufferValue;
        this.events = [
            {
                id: 'id',
                title: 'Business Meeting',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Ask for a Vacation',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Dinner with Micheal',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Deadline for Project ABC',
                time: '05:00 PM',
                state: 'state'
            },
        ];
        this.todolists = [
            {
                id: 'id',
                title: 'Get to know Angular more',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Configure new Router',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Invite Joy to play Carroms',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Check SRS of Project X',
                time: 'Added:4 days ago',
            },
        ];
        this.messages = [
            { from: 'Catherin', subject: 'Shopping', content: 'hi there??' },
            { from: 'Jack', subject: 'Function', content: 'yes' },
            { from: 'Karina', subject: 'Get together', content: 'nice' },
            { from: 'Micheal', subject: 'Trip', content: 'ya.. I will' },
            { from: 'Ashik', subject: 'Meeting', content: 'Time??' },
            { from: 'Joy', subject: 'Party', content: 'Lets enjoy' },
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list [style.maxHeight]=\"(menu.open)?'500px':'48px'\"  [ngClass]=\"{'secondaryMenu': secondaryMenu, 'primary': !secondaryMenu}\">\n    <mat-list-item *ngIf = \"menu.link==false\" (click)=\"menu.open = !menu.open\" >\n        <mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n        <mat-chip-list *ngIf=\"menu?.chip && !iconOnly\">\n            <mat-chip >{{menu?.chip?.value}} </mat-chip>\n        </mat-chip-list>        \n        <mat-icon *ngIf=\"chechForChildMenu()\" class=\"sidenav-dropdown-indicator rotate \" [ngClass]=\"{'indicateOpen':menu.open}\"> expand_more</mat-icon>\n    </mat-list-item>\n\n    <mat-list-item *ngIf = \"menu.link!=false\" (click)=\"menu.open = !menu.open\" [routerLink]=\"[menu.link]\">\n    \t<mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n    </mat-list-item>\n\n    <cdk-sidemenu-item *ngFor=\"let submenu of menu?.sub\" [menu]=\"submenu\" [iconOnly]=\"iconOnly\" [secondaryMenu]=\"true\"> </cdk-sidemenu-item>\n\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SidemenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuItemComponent", function() { return SidemenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuItemComponent = /** @class */ (function () {
    function SidemenuItemComponent() {
        this.secondaryMenu = false;
    }
    SidemenuItemComponent.prototype.ngOnInit = function () {
    };
    SidemenuItemComponent.prototype.openLink = function () {
        this.menu.open = this.menu.open;
    };
    SidemenuItemComponent.prototype.chechForChildMenu = function () {
        return (this.menu && this.menu.sub) ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuItemComponent.prototype, "iconOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "secondaryMenu", void 0);
    SidemenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu-item',
            template: __webpack_require__(/*! ./sidemenu-item.component.html */ "./src/app/core/sidemenu-item/sidemenu-item.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu-item.component.scss */ "./src/app/core/sidemenu-item/sidemenu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuItemComponent);
    return SidemenuItemComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu/menu-element.ts":
/*!***********************************************!*\
  !*** ./src/app/core/sidemenu/menu-element.ts ***!
  \***********************************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open': false,
        'chip': { 'color': 'accent' },
    },
    {
        'name': 'Staff',
        'icon': 'account_circle',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Profile',
                'link': 'staff/profile',
                'icon': 'account_circle',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Staff Directory',
                'link': 'staff/staffdetails',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            }
        ]
    },
    {
        'name': 'Examinations',
        'icon': 'assignment',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'UTME Centres',
                'link': 'examinations/utmecentres',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Postings',
                'link': 'examinations/postings',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Eye Witness',
                'link': 'examinations/eyewitness',
                'icon': 'view_week',
                'chip': false,
                'open': false,
            }
            /* {

                'name': 'Reports',
                'link': 'material-widgets/stepper',
                'icon': 'view_week',
                'chip': false,
                'open': false,

            } */
            /*  {
                 'name': 'Expansion',
                 'link': 'material-widgets/expansion',
                 'icon': 'web_aaset',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Progress Spinner',
                 'link': 'material-widgets/spinner',
                 'icon': 'cached',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Cards',
                 'link': 'material-widgets/cards',
                 'icon': 'crop_16_9',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Icons',
                 'link': 'material-widgets/icons',
                 'icon': 'gif',
                 'chip': false,
                 'open': false,
             },
             {
 
                 'name': 'AutoComplete',
                 'link': 'material-widgets/autocomplete',
                 'icon': 'get_app',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'CheckBox',
                 'link': 'material-widgets/checkbox',
                 'icon': 'check_box',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'DatePicker',
                 'link': 'material-widgets/datepicker',
                 'icon': 'date_range',
                 'chip': false,
                 'open': false,
             },
 
             {
                 'name': 'Slider',
                 'link': 'material-widgets/slider',
                 'icon': 'keyboard_tab',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Slide Toggle',
                 'link': 'material-widgets/slide-toggle',
                 'icon': 'album',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Menu',
                 'icon': 'menu',
                 'link': 'material-widgets/menu',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Progress Bar',
                 'link': 'material-widgets/progress-bar',
                 'icon': 'trending_flat',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Input',
                 'icon': 'input',
                 'link': 'material-widgets/input',
                 'open': false,
             },
             {
                 'name': 'Radio',
                 'icon': 'radio_button_checked',
                 'link': 'material-widgets/radio',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Select',
                 'icon': 'select_all',
                 'link': 'material-widgets/select',
                 'open': false,
             }, */
        ]
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Downloads',
        'icon': 'list',
        'link': false,
        'open': false,
        // 'chip': {'color': 'accent' },
        'sub': [
            {
                'name': 'Memos',
                'icon': 'filter_list',
                'link': 'downloads/memos',
                'open': false,
            },
            {
                'name': 'PaySlips',
                'icon': 'done_all',
                'link': 'downloads/payslips',
                'open': false,
            },
            {
                'name': 'Others',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]
    }
    /* {
        'name': 'Guarded Routes',
        'icon': 'mode_edit',
        'link': '/auth/guarded-routes',
        'open': false,
    }, {
        'name': 'Scrumboard',
        'open': false,
        'link': '/auth/scrumboard',
        'icon': 'grade',
    }, */ /*  {
        'name': 'Applications',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Chat',
                'icon': 'chat',
                'link': 'applications/chatlogin',
                'open': false,
            },
            {
                'name': 'mail',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
           {
                'name': 'Leave',
                'icon': 'mode_edit',
                'link': 'applications/leave',
                'open': false,
            }
        ]
    } */
    /* {
       'name': 'Pages',
       'icon': 'content_copy',
       'open': false,
       'link': false,
       'sub': [
           {
               'name': 'Login',
               'icon': 'work',
               'open': false,
               'link': '../login',
           }, {
               'name': 'Services',
               'icon': 'local_laundry_service',
               'open': false,
               'link': 'pages/services',
           }, {
               'name': 'Contact',
               'icon': 'directions',
               'open': false,
               'link': 'pages/contact'
           }
       ]
   }
   , {

       'name': 'Charts',
       'icon': 'pie_chart_outlined',
       'open': false,
       'link': false,
       'sub': [
           {
               'name': 'chartjs',
               'icon': 'view_list',
               'link': 'charts/chartjs',
               'open': false,

           },
           {
               'name': 'ngx-chart',
               'icon': 'show_chart',
               'open': false,
               'link': 'charts/ngx-charts',
           },
           {
               'name': 'nvd3',
               'icon': 'pie_chart',
               'open': false,
               'link': 'charts/nvd3-charts',
           }
       ]
   }, {
       'name': 'maps',
       'icon': 'map',
       'open': false,
       'link': false,
       'sub': [
           {
               'name': 'google-map',
               'icon': 'directions',
               'link': 'maps/googlemap',
               'open': false,
           },
           {
               'name': 'leaflet-map',
               'icon': 'directions',
               'link': 'maps/leafletmap',
               'open': false,
           }
       ]
   } */
];


/***/ }),

/***/ "./src/app/core/sidemenu/menu-elementSituationRoom.ts":
/*!************************************************************!*\
  !*** ./src/app/core/sidemenu/menu-elementSituationRoom.ts ***!
  \************************************************************/
/*! exports provided: menusSituationRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menusSituationRoom", function() { return menusSituationRoom; });
var menusSituationRoom = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open': false,
        'chip': { 'color': 'accent' },
    },
    {
        'name': 'Staff',
        'icon': 'account_circle',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Staff Directory',
                'link': 'staff/staffdetails',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
        ]
    },
    {
        'name': 'Examinations',
        'icon': 'assignment',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'UTME Centres',
                'link': 'examinations/utmecentres',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Check Postings',
                'link': 'examinations/postings',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {
                'name': 'S-Room Reports',
                'link': 'examinations/sitreport',
                'icon': 'view_week',
                'chip': false,
                'open': false,
            },
            {
                'name': '2019 Registration Reports',
                'link': 'examinations/regreport',
                'icon': 'view_week',
                'chip': false,
                'open': false,
            }
            /*  {
                 'name': 'Expansion',
                 'link': 'material-widgets/expansion',
                 'icon': 'web_aaset',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Progress Spinner',
                 'link': 'material-widgets/spinner',
                 'icon': 'cached',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Cards',
                 'link': 'material-widgets/cards',
                 'icon': 'crop_16_9',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Icons',
                 'link': 'material-widgets/icons',
                 'icon': 'gif',
                 'chip': false,
                 'open': false,
             },
             {
 
                 'name': 'AutoComplete',
                 'link': 'material-widgets/autocomplete',
                 'icon': 'get_app',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'CheckBox',
                 'link': 'material-widgets/checkbox',
                 'icon': 'check_box',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'DatePicker',
                 'link': 'material-widgets/datepicker',
                 'icon': 'date_range',
                 'chip': false,
                 'open': false,
             },
 
             {
                 'name': 'Slider',
                 'link': 'material-widgets/slider',
                 'icon': 'keyboard_tab',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Slide Toggle',
                 'link': 'material-widgets/slide-toggle',
                 'icon': 'album',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Menu',
                 'icon': 'menu',
                 'link': 'material-widgets/menu',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Progress Bar',
                 'link': 'material-widgets/progress-bar',
                 'icon': 'trending_flat',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Input',
                 'icon': 'input',
                 'link': 'material-widgets/input',
                 'open': false,
             },
             {
                 'name': 'Radio',
                 'icon': 'radio_button_checked',
                 'link': 'material-widgets/radio',
                 'chip': false,
                 'open': false,
             },
             {
                 'name': 'Select',
                 'icon': 'select_all',
                 'link': 'material-widgets/select',
                 'open': false,
             }, */
        ]
    },
];


/***/ }),

/***/ "./src/app/core/sidemenu/menu-elementadmin.ts":
/*!****************************************************!*\
  !*** ./src/app/core/sidemenu/menu-elementadmin.ts ***!
  \****************************************************/
/*! exports provided: menusadmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menusadmin", function() { return menusadmin; });
var menusadmin = [
    {
        'name': 'Dashboard (Admin)',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open': false,
        'chip': { 'color': 'accent' },
    },
    {
        'name': 'Accounts',
        'icon': 'account_circle',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Create Account',
                'link': '',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Staff Directory',
                'link': 'staff/staffdetails',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
        ]
    },
    {
        'name': 'Administration',
        'icon': 'assignment',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Add/Edit Centres',
                'link': '',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Add/Edit Departments',
                'link': '',
                'icon': 'list',
                'chip': false,
                'open': false,
            }
        ]
    },
    {
        'name': 'Uploads',
        'icon': 'list',
        'link': false,
        'open': false,
        // 'chip': {'color': 'accent' },
        'sub': [
            {
                'name': 'Memos',
                'icon': 'filter_list',
                'link': 'uploads/memos',
                'open': false,
            },
            {
                'name': 'PaySlips',
                'icon': 'done_all',
                'link': 'uploads/payslips',
                'open': false,
            },
            {
                'name': 'Others',
                'icon': 'filter_center_focus',
                'link': '',
                'open': false,
            }
        ]
    },
    {
        'name': 'Examination',
        'icon': 'album',
        'link': false,
        'open': false,
        // 'chip': {'color': 'accent' },
        'sub': [
            {
                'name': '2019 UTME-Reg Reports',
                'icon': 'filter_list',
                'link': 'examinations/regreportadmin',
                'open': false,
            },
            {
                'name': 'Eye Witness Reports',
                'icon': 'filter_center_focus',
                'link': 'examinations/eyewitadm',
                'open': false,
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<perfect-scrollbar style=\"height: calc(100% - 33px);\">\n    <div fxLayout=\"column\" >\n        <div *ngIf=\"!iconOnly\" fxLayoutAlign=\"space-around center\" [style.margin]=\"'10px 0px'\" >\n          <img width=\"100\" [style.borderRadius]=\"'50%'\" src=\"./assets/profile.jpg\">\n        </div>\n        <div *ngIf=\"iconOnly\" style=\"height: 100px;\" fxLayoutAlign=\"space-around center\"  >\n            <img width=\"50\" [style.borderRadius]=\"'50%'\" src=\"./assets/profile.jpg\">\n        </div>\n        <div *ngIf=\"Roletype === 2\">\n             <cdk-sidemenu-item *ngFor=\"let menu of menus\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item>\n        </div>\n        <div *ngIf=\"Roletype === 1\">\n            <cdk-sidemenu-item *ngFor=\"let menu of menusadmin\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item>\n       </div>\n       <div *ngIf=\"Roletype === 3\">\n        <cdk-sidemenu-item *ngFor=\"let menu of menusSituationRoom\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item>\n   </div>\n       \n    </div>\n</perfect-scrollbar>\n"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.ts ***!
  \*****************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _menu_elementSituationRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-elementSituationRoom */ "./src/app/core/sidemenu/menu-elementSituationRoom.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-element */ "./src/app/core/sidemenu/menu-element.ts");
/* harmony import */ var _menu_elementadmin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-elementadmin */ "./src/app/core/sidemenu/menu-elementadmin.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
        this.iconOnly = false;
        this.menus = _menu_element__WEBPACK_IMPORTED_MODULE_2__["menus"];
        this.menusadmin = _menu_elementadmin__WEBPACK_IMPORTED_MODULE_3__["menusadmin"];
        this.menusSituationRoom = _menu_elementSituationRoom__WEBPACK_IMPORTED_MODULE_0__["menusSituationRoom"];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuComponent.prototype, "iconOnly", void 0);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/core/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/core/sidemenu/sidemenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-notification-container\">\n\t<button mat-icon-button (click)=\"isOpen = !isOpen;\" [ngClass]=\"[cssPrefix+'-btn']\" [class.open]=\"isOpen\">\n    \t<mat-icon>notifications_none</mat-icon>\n    \t<span class=\"badge\" *ngIf=\"notifications && notifications?.length !== 0\">{{ notifications?.length }}</span>\n  </button>\n\n\n\t<div class=\"dropdown mat-elevation-z4\" [class.open]=\"isOpen\">\n\n\t<div class=\"card\">\n      \t<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        \t<div class=\"title\">\n         \t\t <div class=\"name\">Notifications</div>\n          \t\t<div class=\"extra\">\nYou have {{ notifications?.length }} new notifications</div>\n        \t</div>\n        \t<button type=\"button\" mat-icon-button>\n          \t\t<mat-icon class=\"icon\">settings</mat-icon>\n        \t</button>\n      \t</div>\n      \t<div *ngIf=\"notifications?.length !== 0; then thenBlock else elseBlock;\"></div>\n      \t<div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        \t<div class=\"action\">Mark all as read</div>\n    \t</div>\n    </div>\n\n\t</div>\n\n</div>\n\n<ng-template #thenBlock>\n  <perfect-scrollbar class=\"content\">\n    <div *ngFor=\"let notification of notifications; last as isLast\">\n      <div class=\"notification\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n        <mat-icon class=\"icon\">notifications</mat-icon>\n        <div class=\"title\" fxLayout=\"column\">\n          <div class=\"name\">{{ notification.title }}</div>\n          <div class=\"time\">{{ notification.lastTime }}</div>\n        </div>\n        <span fxFlex></span>\n        <button type=\"button\" mat-icon-button (click)=\"delete(notification)\">\n          <mat-icon class=\"close\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"divider\" *ngIf=\"!isLast\"></div>\n    </div>\n  </perfect-scrollbar>\n</ng-template>\n\n<ng-template #elseBlock>\n  <div class=\"no\" fxLayout=\"row\" fxLayoutAlign=\"center center\">暂无通知</div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  line-height: 13px;\n  height: 13px;\n  padding: 5px;\n  border-radius: 26%;\n  width: 30%;\n  background-color: #f44336;\n  color: #fff;\n  border-color: #f44336; }\n\n.toolbar-notification-container {\n  position: relative;\n  display: flex;\n  align-items: center; }\n\n.toolbar-notification-btn {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.dropdown {\n  background: white;\n  position: absolute;\n  top: 42px;\n  right: 28px;\n  min-width: 350px;\n  z-index: 2;\n  -webkit-transform: translateY(0) scale(0);\n          transform: translateY(0) scale(0);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  visibility: hidden;\n  transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@media screen and (max-width: 599px) {\n    .dropdown {\n      min-width: 50vw;\n      right: 5px;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: hidden;\n      transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } }\n\n.dropdown.open {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n    visibility: visible; }\n\n.dropdown .card .header {\n    background: #EEEEEE;\n    min-height: 54px;\n    padding-left: 16px;\n    padding-right: 8px;\n    color: #555;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    border-bottom: 1px solid #e0e0e0; }\n\n.dropdown .card .header .extra {\n      font-size: 12px;\n      color: #888; }\n\n.dropdown .content {\n    overflow: hidden;\n    max-height: 256px; }\n\n.dropdown .content .notification {\n      min-height: 64px;\n      padding: 0 16px 0 14px;\n      position: relative;\n      color: #666;\n      cursor: pointer; }\n\n.dropdown .content .notification .icon {\n        height: 28px;\n        width: 28px;\n        line-height: 28px;\n        font-size: 18px;\n        margin-right: 13px;\n        text-align: center;\n        border-radius: 50%;\n        background: #FFF;\n        color: #888;\n        border: 1px solid #EEE; }\n\n.dropdown .content .notification .title {\n        font-weight: 500;\n        font-size: 14px; }\n\n.dropdown .content .notification .time {\n        font-size: 12px; }\n\n.dropdown .content .notification .close {\n        font-size: 18px;\n        width: 18px;\n        height: 18px;\n        line-height: 18px; }\n\n.dropdown .content .notification.primary .icon {\n        background: #ccc;\n        color: #ddd; }\n\n.dropdown .content .notification.accent .icon {\n        background: #aaa;\n        color: #bbb; }\n\n.dropdown .content .notification.warn .icon {\n        background: #eee;\n        color: #ddd; }\n\n.dropdown .content .notification.read {\n        color: #999; }\n\n.dropdown .content .notification.read .name {\n          font-weight: normal; }\n\n.dropdown .footer {\n    min-height: 42px;\n    border-top: 1px solid #EEE; }\n\n.dropdown .footer .action {\n      cursor: pointer;\n      color: #AAA;\n      text-align: center;\n      font-size: 13px; }\n\n.dropdown .divider {\n    width: calc(100% - 30px);\n    height: 1px;\n    background: #EEE;\n    margin: 0 16px 0 14px; }\n"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function() { return ToolbarNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarNotificationComponent = /** @class */ (function () {
    // @HostListener('document:click', ['$event', '$event.target'])
    // onClick(event: MouseEvent, targetElement: HTMLElement) {
    //     if (!targetElement) {
    //           return;
    //     }
    //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    //     if (!clickedInside) {
    //          this.isOpen = false;
    //     }
    // }
    function ToolbarNotificationComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssPrefix = 'toolbar-notification';
        this.isOpen = false;
        this.notifications = [];
    }
    ToolbarNotificationComponent.prototype.ngOnInit = function () {
    };
    ToolbarNotificationComponent.prototype.select = function () {
    };
    ToolbarNotificationComponent.prototype.delete = function (notification) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarNotificationComponent.prototype, "notifications", void 0);
    ToolbarNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar-notification',
            template: __webpack_require__(/*! ./toolbar-notification.component.html */ "./src/app/core/toolbar-notification/toolbar-notification.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-notification.component.scss */ "./src/app/core/toolbar-notification/toolbar-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ToolbarNotificationComponent);
    return ToolbarNotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <stbui-loading *ngIf=\"showLoading\"></stbui-loading> -->\n<mat-toolbar   class=\"mat-elevation-z4\">  \n\t<button mat-icon-button (click)=\"sidenav.toggle();drawer.toggle();\" *ngIf=\"matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button> \n    <button mat-icon-button (click)=\"sidenav.toggle();\" *ngIf=\"!matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n\n    <span class=\"spacer\"></span>\n\n    \n\n    <cdk-fullscreen></cdk-fullscreen>\n\n  \n\n    <cdk-user-menu ></cdk-user-menu>\n    \n     <button mat-icon-button (click)=\"sidebar.toggle();\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n    \n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 4; }\n\n.main-toolbar {\n  height: 64px;\n  padding-left: 16px; }\n\n.more-btn {\n  height: 100%;\n  min-width: 70px; }\n\n.mat-icon-button {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.helpers */ "./src/app/core/toolbar/toolbar.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.searchOpen = false;
        this.toolbarHelpers = _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__["ToolbarHelpers"];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "drawer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "matDrawerShow", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.helpers.ts":
/*!*************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.helpers.ts ***!
  \*************************************************/
/*! exports provided: ToolbarHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarHelpers", function() { return ToolbarHelpers; });
var ToolbarHelpers = {
    currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: localStorage.getItem('profilename')
    }
};


/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\n\t<button mat-button (click)=\"isOpen = !isOpen\" class=\"toolbar-user-btn\" [class.open]=\"isOpen\" [ngStyle.xs]=\"{'min-width': '70px'}\">\n  \t\t<span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    \t\n    \t\t<span class=\"name\" fxHide fxShow.gt-xs>{{ profilename }}</span>\n    \t\t<mat-icon class=\"icon\" fxHide fxShow.gt-xs>keyboard_arrow_down</mat-icon>\n  \t\t</span>\n  \t</button>\n\n\n  \t<div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    \t<div class=\"content\">\n      \t\t<mat-nav-list>\n      \t\t<!-- \t<mat-list-item>\n      \t\t\t\t<a matLine >Profile</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>account_circle</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item> -->\n      \t\t\t<!-- <mat-list-item>\n      \t\t\t\t<a matLine >Settings</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>settings</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine >Help</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>help</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item> -->\n<!-- \n      \t\t\t<mat-divider></mat-divider> -->\n      \t\t\t<mat-list-item *ngIf=\"!isAuth\">\n\t\t\t\t\t<a matLine  (click)=\"logout()\" >Logout</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>exit_to_app</mat-icon>\n\t\t\t\t\t</button>\t\n      \t\t\t</mat-list-item>\n      \t\t</mat-nav-list>\n    \t</div>\n  \t</div>\n</div>"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .avatar {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    z-index: 2;\n    position: absolute;\n    width: 100%;\n    min-width: 160px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all .25s linear, max-height .25s linear, opacity .25s linear; }\n\n@media screen and (max-width: 599px) {\n      .toolbar-user-container .dropdown {\n        min-width: 65px; } }\n\n.toolbar-user-container .dropdown.open {\n      opacity: 1;\n      visibility: visible; }\n"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(elementRef, authservice) {
        this.elementRef = elementRef;
        this.authservice = authservice;
        this.isOpen = false;
        this.isAuth = false;
        this.currentUser = null;
    }
    UserMenuComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    UserMenuComponent.prototype.ngOnDestroy = function () {
        this.authsubscription.unsubscribe();
    };
    UserMenuComponent.prototype.logout = function () {
        this.authservice.LogOut();
    };
    UserMenuComponent.prototype.LoadEditProfilePage = function () {
    };
    UserMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authsubscription = this.authservice.authchange.subscribe(function (authstatus) {
            _this.isAuth = authstatus;
        });
        this.profilename = localStorage.getItem('profilename');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UserMenuComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], UserMenuComponent.prototype, "onClick", null);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/core/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/core/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-crm/dashboard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard.service.ts ***!
  \****************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(router, http, globals) {
        this.router = router;
        this.http = http;
        this.globals = globals;
        this.baseURL = 'http://' + this.globals.ipaddress + ':3000/dashboard/';
        var settings = { timestampsInSnapshots: true };
    }
    DashboardService.prototype.GetTotalDepartments = function () {
        return this.http.get(this.baseURL + 'department');
    };
    DashboardService.prototype.GetTotalUser = function () {
        return this.http.get(this.baseURL + 'users');
    };
    DashboardService.prototype.GetTotalLog = function () {
        return this.http.get(this.baseURL + 'reglog');
    };
    DashboardService.prototype.GetTotalLogOpen = function () {
        return this.http.get(this.baseURL + 'regopen');
    };
    DashboardService.prototype.GetTotalLogResolve = function () {
        return this.http.get(this.baseURL + 'regresolve');
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _Globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/downloads/downloads.service.ts":
/*!************************************************!*\
  !*** ./src/app/downloads/downloads.service.ts ***!
  \************************************************/
/*! exports provided: DownloadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsService", function() { return DownloadsService; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadsService = /** @class */ (function () {
    function DownloadsService(router, http, globals) {
        this.router = router;
        this.http = http;
        this.globals = globals;
        this.baseURL = 'http://' + this.globals.ipaddress + ':3000/uploads/';
    }
    DownloadsService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        return this.http.post(this.baseURL + 'downloadfile', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    DownloadsService.prototype.downloadFilePayslip = function (file) {
        var body = { filename: file };
        return this.http.post(this.baseURL + 'downloadfilePayslip', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    DownloadsService.prototype.downloadEyeWitnessFile = function (file) {
        var body = { filename: file };
        return this.http.post(this.baseURL + 'downloadfileEyewitness', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    DownloadsService.prototype.GetListofAllMemos = function () {
        return this.http.get(this.baseURL + 'getallfiles');
    };
    DownloadsService.prototype.GetListofAllPayslips = function (payslipyearmonth) {
        return this.http.post(this.baseURL + 'getallpayslip', payslipyearmonth);
    };
    DownloadsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], DownloadsService);
    return DownloadsService;
}());



/***/ }),

/***/ "./src/app/examinations/examinations.service.ts":
/*!******************************************************!*\
  !*** ./src/app/examinations/examinations.service.ts ***!
  \******************************************************/
/*! exports provided: ExaminationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function() { return ExaminationService; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExaminationService = /** @class */ (function () {
    function ExaminationService(router, http, globals) {
        this.router = router;
        this.http = http;
        this.globals = globals;
        this.baseURL = 'http://' + this.globals.ipaddress + ':3000/examination/';
    }
    ExaminationService.prototype.GetUTMECentres = function () {
        return this.http.get(this.baseURL + 'utmecentres');
    };
    ExaminationService.prototype.GetRegistrationCentres = function () {
        return this.http.get(this.baseURL + 'regcentres');
    };
    ExaminationService.prototype.GetPostings = function (idcard) {
        return this.http.get(this.baseURL + 'postings' + '/' + idcard);
    };
    ExaminationService.prototype.GetPostingsOthers = function (idcard, twncode) {
        return this.http.get(this.baseURL + 'otherpostings' + '/' + idcard + '/' + twncode);
    };
    ExaminationService.prototype.GetUTMEState = function () {
        return this.http.get(this.baseURL + 'utmestates');
    };
    ExaminationService.prototype.GetUTMESituation = function () {
        return this.http.get(this.baseURL + 'sitreport');
    };
    ExaminationService.prototype.GetAllUTMERegistration = function () {
        return this.http.get(this.baseURL + 'regreportall');
    };
    ExaminationService.prototype.GetAllEyeWitnessReport = function () {
        return this.http.get(this.baseURL + 'eyewitnessreport');
    };
    ExaminationService.prototype.GetUTMERegistration = function (loggedby) {
        return this.http.get(this.baseURL + 'regreport' + '/' + loggedby);
    };
    ExaminationService.prototype.UpdateUTMESituation = function (sitreport, issuestat) {
        return this.http.post(this.baseURL + 'updatesitreport', { sitreport: sitreport.SerialNo, issuestat: issuestat });
    };
    ExaminationService.prototype.UpdateRegistration = function (regreport, issuestat) {
        return this.http.post(this.baseURL + 'updateregreport', { regreport: regreport.SerialNo, issuestat: issuestat });
    };
    ExaminationService.prototype.InsertRegistrationReport = function (regreport, loggedby) {
        return this.http.post(this.baseURL + 'insertregreport', { StateName: regreport.LogState,
            CentreName: regreport.LogCentre,
            IssueCategory: regreport.LogIssueCategory,
            ProblemDesc: regreport.LogProblem,
            Solution: regreport.LogSolution,
            IssueStatus: regreport.LogIssueStatus,
            loggedby: loggedby });
    };
    ExaminationService.prototype.InsertEyeWitnessReport = function (regreport, loggedby, filename) {
        return this.http.post(this.baseURL + 'eyewitnessreport', { StateName: regreport.LogState,
            CentreName: regreport.LogCentre,
            ProblemDesc: regreport.LogProblem,
            filename: filename,
            loggedby: loggedby });
    };
    ExaminationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], ExaminationService);
    return ExaminationService;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
    //  {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    { path: 'login', loadChildren: '../pages/login/login.module#LoginModule' },
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},
    { path: '**', redirectTo: 'auth/dashboard' },
];
var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\r\n    visibility: hidden;\r\n}\r\n.loader-overlay {\r\n    position: absolute;\r\n    width:100%;\r\n    top:0;\r\n    left: 0;\r\n    opacity: 1;\r\n    z-index: 500000;\r\n}"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.loader-hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n          <div>\n              <mat-progress-bar mode=\"indeterminate\" *ngIf=\"show\"></mat-progress-bar>\n          </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/staff/staff.service.ts":
/*!****************************************!*\
  !*** ./src/app/staff/staff.service.ts ***!
  \****************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffService = /** @class */ (function () {
    function StaffService(router, http, globals) {
        this.router = router;
        this.http = http;
        this.globals = globals;
        // private staffdetails: StaffDetails[] = [];
        this.department = [];
        // UtmeCentresChanged = new Subject<StaffDetails[]>();
        // FetchedUtmeCentres = new Subject<StaffDetails[]>();
        this.baseURL = 'http://' + this.globals.ipaddress + ':3000/staff/';
    }
    StaffService.prototype.GetStaffdetails = function () {
        return this.http.get(this.baseURL + 'staffdetails');
    };
    StaffService.prototype.GetAllDepartment = function () {
        return this.http.get(this.baseURL + 'department');
    };
    StaffService.prototype.AddNewStaff = function (newstaffdetails) {
        return this.http.post(this.baseURL + 'addnew', newstaffdetails);
    };
    StaffService.prototype.UpdateStaff = function (staffdetails) {
        console.log(staffdetails);
        return this.http.post(this.baseURL + 'updatestaff', staffdetails);
    };
    StaffService.prototype.UpdateProfileDetails = function (updateprof) {
        return this.http.post(this.baseURL + 'updateprof', updateprof);
    };
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/uploads/uploads.service.ts":
/*!********************************************!*\
  !*** ./src/app/uploads/uploads.service.ts ***!
  \********************************************/
/*! exports provided: UploadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsService", function() { return UploadsService; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadsService = /** @class */ (function () {
    function UploadsService(router, http, globals) {
        this.router = router;
        this.http = http;
        this.globals = globals;
        this.baseURL = 'http://' + this.globals.ipaddress + ':3000/uploads/';
    }
    UploadsService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        return this.http.post(this.baseURL + 'downloadfile', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UploadsService.prototype.DeleteFile = function (file) {
        var body = { filename: file };
        return this.http.post(this.baseURL + 'deletefile', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UploadsService.prototype.GetListofAllMemos = function () {
        return this.http.get(this.baseURL + 'getallfiles');
    };
    UploadsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _Globals__WEBPACK_IMPORTED_MODULE_0__["Globals"]])
    ], UploadsService);
    return UploadsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBwlk0KMM75nBsZ8L7j9cZ5N5x0fwqfBjg',
        authDomain: 'newproject-5d731.firebaseapp.com',
        databaseURL: 'https://newproject-5d731.firebaseio.com',
        projectId: 'newproject-5d731',
        storageBucket: 'newproject-5d731.appspot.com',
        messagingSenderId: '737689833575'
    },
    mailApi: '/assets/list.json'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Solutions\Angular\J-Tranet\Clients\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map