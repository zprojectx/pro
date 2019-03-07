(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-new/add-new.component.html":
/*!************************************************!*\
  !*** ./src/app/add-new/add-new.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enter new job data</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field *ngFor=\"let field of fields\">\r\n    <input required matInput [(ngModel)]=\"data[field]\" [placeholder]=\"field.replace('_', ' ')\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!formValid\" [mat-dialog-close]=\"data\" cdkFocusInitial>Create</button>\r\n</div>"

/***/ }),

/***/ "./src/app/add-new/add-new.component.scss":
/*!************************************************!*\
  !*** ./src/app/add-new/add-new.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-label {\n  text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5ldy9EOlxcYVxcMVxccy9zcmNcXGFwcFxcYWRkLW5ld1xcYWRkLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLW5ldy9hZGQtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7IFxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-new/add-new.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-new/add-new.component.ts ***!
  \**********************************************/
/*! exports provided: AddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewComponent", function() { return AddNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var AddNewComponent = /** @class */ (function () {
    function AddNewComponent(dialogRef, service, data) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.data = data;
        this.fields = Object.keys(this.service.job).filter(function (f) { return f != "created_at"; });
    }
    Object.defineProperty(AddNewComponent.prototype, "formValid", {
        get: function () {
            var _this = this;
            var truthy = true;
            this.fields.forEach(function (e) {
                truthy = !_this.data[e] ? false : true;
            });
            return truthy;
        },
        enumerable: true,
        configurable: true
    });
    AddNewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-new",
            template: __webpack_require__(/*! ./add-new.component.html */ "./src/app/add-new/add-new.component.html"),
            styles: [__webpack_require__(/*! ./add-new.component.scss */ "./src/app/add-new/add-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], Object])
    ], AddNewComponent);
    return AddNewComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_test_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/test-data */ "./src/app/shared/test-data.ts");





var ELEMENT_DATA = [
    { position: 1, name: "Željzo štange 2m", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Šarafi", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Ulje", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Materijali", weight: 9.0122, symbol: "Be" },
    { position: 10, name: "Alati", weight: 20.1797, symbol: "Ne" }
];
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.url = "https://projectx-api.azurewebsites.net";
    }
    ApiService.prototype.getOffers = function () {
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(_shared_test_data__WEBPACK_IMPORTED_MODULE_4__["offers"].filter(function (i) { return !i.parent_id; }));
    };
    ApiService.prototype.getOfferDetail = function (id) {
        var offer = _shared_test_data__WEBPACK_IMPORTED_MODULE_4__["offers"].find(function (i) { return i.id === id; });
        if (!offer) {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
        if (offer && offer["items"]) {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(offer);
        }
        var o = {
            id: offer.id,
            created_at: offer.created_at,
            name: offer.name,
            items: ELEMENT_DATA
        };
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(o);
    };
    ApiService.prototype.createOffer = function (o) {
        return this.http.post(this.url + "/v1/offer", o);
    };
    ApiService.prototype.removeOffer = function (id) {
        var index = _shared_test_data__WEBPACK_IMPORTED_MODULE_4__["offers"].findIndex(function (i) { return i.id === id; });
        _shared_test_data__WEBPACK_IMPORTED_MODULE_4__["offers"].splice(index, 1);
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])("done");
    };
    ApiService.prototype.getJobFields = function () {
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(JSON.parse(localStorage.getItem("job")));
    };
    ApiService.prototype.addJobFields = function (o) {
        localStorage.setItem("job", JSON.stringify(o));
    };
    ApiService.prototype.removeJobField = function (o) {
        localStorage.setItem("job", JSON.stringify(o));
    };
    ApiService.prototype.register = function (email, password) {
        return this.http.post(this.url + "/account/register", {
            email: email,
            password: password,
            confirmPassword: password
        });
    };
    ApiService.prototype.addressSearch = function () {
        var a = "https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDgdcZQLAIbJlwa84JdjS1_DKI1MpbCPFs";
        return this.http.get(a);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _secure_layout_secure_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./secure-layout/secure-layout.component */ "./src/app/secure-layout/secure-layout.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./today/today.component */ "./src/app/today/today.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");













var routes = [
    {
        path: "",
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]
    },
    {
        path: "",
        component: _secure_layout_secure_layout_component__WEBPACK_IMPORTED_MODULE_8__["SecureLayoutComponent"],
        canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: "new",
                component: _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"],
                data: { title: "Heroes List" }
            },
            {
                path: "new/:id",
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"],
                data: { title: "Heroes List" }
            },
            {
                path: "today",
                component: _today_today_component__WEBPACK_IMPORTED_MODULE_10__["TodayComponent"],
                data: { title: "Heroes List" }
            },
            {
                path: "calendar",
                component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"],
                data: { title: "Heroes List" }
            },
            {
                path: "user",
                component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                data: { title: "User" }
            },
            {
                path: "services",
                component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                data: { title: "Services List" }
            }
        ]
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        data: { title: "Register" }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { initialNavigation: false, useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: authConfig, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");





var authConfig = {
    issuer: "https://projectx-identity-test.azurewebsites.net",
    redirectUri: window.location.origin.indexOf("zprojectx") > -1
        ? window.location.origin + "/pro"
        : window.location.origin,
    requestAccessToken: true,
    clientId: "ng",
    scope: "openid profile projectx-api"
};
var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, router, oauthService) {
        this.dialog = dialog;
        this.router = router;
        this.oauthService = oauthService;
        this.configureWithNewConfigApi();
    }
    AppComponent.prototype.configureWithNewConfigApi = function () {
        var _this = this;
        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["JwksValidationHandler"]();
        this.oauthService
            .loadDiscoveryDocumentAndTryLogin({ customHashFragment: location.hash })
            .then(function (e) {
            if (e) {
                _this.oauthService.loadUserProfile();
            }
            _this.router.initialNavigation();
        })
            .catch(function (e) { return console.log(e); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/esm5/google-maps-autocomplete.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-new/add-new.component */ "./src/app/add-new/add-new.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptor */ "./src/app/interceptor.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _secure_layout_secure_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./secure-layout/secure-layout.component */ "./src/app/secure-layout/secure-layout.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./today/today.component */ "./src/app/today/today.component.ts");
/* harmony import */ var _user_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/add-property/add-property.component */ "./src/app/user/add-property/add-property.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _view_preview_preview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./view/preview/preview.component */ "./src/app/view/preview/preview.component.ts");
/* harmony import */ var _view_send_send_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./view/send/send.component */ "./src/app/view/send/send.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");





























var googleMapsParams = {
    apiKey: "AIzaSyAFdkp7b5VrPPHGUtAQPmygp5vBHZz5BDw",
    libraries: ["places"],
    language: "en"
    // region: 'DE'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_17__["NewComponent"],
                _today_today_component__WEBPACK_IMPORTED_MODULE_23__["TodayComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["CalendarComponent"],
                _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_12__["AddNewComponent"],
                _user_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_24__["AddPropertyComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_28__["ViewComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_25__["UserComponent"],
                _view_send_send_component__WEBPACK_IMPORTED_MODULE_27__["SendComponent"],
                _view_preview_preview_component__WEBPACK_IMPORTED_MODULE_26__["PreviewComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_21__["ServicesComponent"],
                _secure_layout_secure_layout_component__WEBPACK_IMPORTED_MODULE_20__["SecureLayoutComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
                }),
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_11__["OAuthModule"].forRoot({
                    resourceServer: {
                        allowedUrls: ["https://projectx-api.azurewebsites.net"],
                        sendAccessToken: true
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"].forRoot(googleMapsParams),
                _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatGoogleMapsAutocompleteModule"].forRoot()
            ],
            providers: [
                _shared_service__WEBPACK_IMPORTED_MODULE_22__["SharedService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor__WEBPACK_IMPORTED_MODULE_16__["DefaultOAuthInterceptor"],
                    multi: true
                },
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_6__["GestureConfig"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            entryComponents: [
                _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_12__["AddNewComponent"],
                _user_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_24__["AddPropertyComponent"],
                _view_send_send_component__WEBPACK_IMPORTED_MODULE_27__["SendComponent"],
                _view_preview_preview_component__WEBPACK_IMPORTED_MODULE_26__["PreviewComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(oauthService) {
        this.oauthService = oauthService;
    }
    AuthGuard.prototype.canActivate = function () {
        var hasIdToken = this.oauthService.hasValidIdToken();
        var hasAccessToken = this.oauthService.hasValidAccessToken();
        if (!this.oauthService.hasValidAccessToken()) {
            this.oauthService.initImplicitFlow();
        }
        this.oauthService.loadUserProfile();
        return hasIdToken && hasAccessToken;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mwl-calendar-month-view\r\n  [viewDate]=\"viewDate\"\r\n  [events]=\"events\"\r\n  [refresh]=\"refresh\"\r\n  [activeDayIsOpen]=\"activeDayIsOpen\"\r\n  (dayClicked)=\"dayClicked($event.day)\"\r\n  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n  (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n</mwl-calendar-month-view>\r\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);



var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        var _this = this;
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.viewDate = new Date();
    }
    CalendarComponent.prototype.ngOnInit = function () { };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        alert(event.title);
        // this.modalData = { event, action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/interceptor.ts":
/*!********************************!*\
  !*** ./src/app/interceptor.ts ***!
  \********************************/
/*! exports provided: DefaultOAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultOAuthInterceptor", function() { return DefaultOAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");



var DefaultOAuthInterceptor = /** @class */ (function () {
    function DefaultOAuthInterceptor(oauthService, authStorage //private errorHandler: OAuthResourceServerErrorHandler, //@Optional() private moduleConfig: OAuthModuleConfig
    ) {
        this.oauthService = oauthService;
        this.authStorage = authStorage;
    }
    DefaultOAuthInterceptor.prototype.checkUrl = function (url) {
        /*
          let found = this.moduleConfig.resourceServer.allowedUrls.find(u =>
            url.startsWith(u)
          );
          return !!found;
          */
        return true;
    };
    DefaultOAuthInterceptor.prototype.intercept = function (req, next) {
        var url = req.url.toLowerCase();
        /*
          if (!this.moduleConfig) return next.handle(req);
          if (!this.moduleConfig.resourceServer) return next.handle(req);
          if (!this.moduleConfig.resourceServer.allowedUrls) return next.handle(req);
          if (!this.checkUrl(url)) return next.handle(req);
      
          let sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;
          */
        if (true) {
            var token = this.oauthService.getAccessToken(); //this.authStorage.getItem("access_token");
            var header = "Bearer " + token;
            var headers = req.headers.set("Authorization", header);
            req = req.clone({ headers: headers });
        }
        return next.handle(req);
        //.catch(err => /*this.errorHandler.handleError(err)*/ null);
    };
    DefaultOAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthStorage"] //private errorHandler: OAuthResourceServerErrorHandler, //@Optional() private moduleConfig: OAuthModuleConfig
        ])
    ], DefaultOAuthInterceptor);
    return DefaultOAuthInterceptor;
}());



/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1 full-width\">\r\n\r\n  <ng-container matColumnDef=\"no\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element;let i = index;\"> {{ i + 1 }}. </td>\r\n  </ng-container>\r\n\r\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of iterableDisplayedColumns\">\r\n    <th style=\"text-transform: capitalize;\" mat-header-cell *matHeaderCellDef> {{ column.replace(\"_\", \" \") }} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n  \r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr class=\"clickable\" routerLink=\"/new/{{ row.id }}\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>"

/***/ }),

/***/ "./src/app/new/new.component.scss":
/*!****************************************!*\
  !*** ./src/app/new/new.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-created_at {\n  width: 160px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L0Q6XFxhXFwxXFxzL3NyY1xcYXBwXFxuZXdcXG5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1jcmVhdGVkX2F0IHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");







var NewComponent = /** @class */ (function () {
    function NewComponent(service, api) {
        this.service = service;
        this.api = api;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ["no"];
        this.iterableDisplayedColumns = [""];
        this.unsub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.load();
        var fields = Object.keys(this.service.job);
        fields.push(fields.splice(fields.findIndex(function (v) { return v == "created_at"; }), 1)[0]);
        this.displayedColumns = this.displayedColumns.concat(fields);
        this.iterableDisplayedColumns = this.iterableDisplayedColumns.concat(fields);
    }
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsub)).subscribe(function (res) {
            _this.api.createOffer(res).subscribe(function (r) {
                _this.load();
            });
        });
        this.api
            .createOffer({
            name: "blae",
            companyId: 22
        })
            .subscribe(function (r) {
            _this.load();
        });
    };
    NewComponent.prototype.ngOnDestroy = function () {
        this.unsub.next();
        this.unsub.complete();
    };
    NewComponent.prototype.load = function () {
        var _this = this;
        this.api.getOffers().subscribe(function (r) {
            _this.ELEMENT_DATA = r;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](r);
        });
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-new",
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.scss */ "./src/app/new/new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\r\n  <h1 style=\"text-align:center\">ProjectX</h1>\r\n\r\n  <form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        matInput\r\n        type=\"email\"\r\n        placeholder=\"e-mail\"\r\n        [(ngModel)]=\"user.email\"\r\n        name=\"email\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        type=\"password\"\r\n        matInput\r\n        placeholder=\"Password\"\r\n        [(ngModel)]=\"user.pass\"\r\n        name=\"password\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button (click)=\"register(user)\" color=\"primary\">\r\n      Register\r\n    </button>\r\n    <button mat-raised-button (click)=\"autoLogin()\">\r\n      Auto Login\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  border: 1px solid gray;\n  border-radius: 20px;\n  padding: 30px;\n  width: 260px;\n  margin: auto;\n  margin-top: 100px; }\n  .login-container .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%; }\n  .login-container .example-full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXGFcXDFcXHMvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFObkI7SUFTSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQVhmO0lBZUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, api, snackBar, oauthService) {
        this.router = router;
        this.api = api;
        this.snackBar = snackBar;
        this.oauthService = oauthService;
        this.user = {
            username: "",
            password: ""
        };
    }
    RegisterComponent.prototype.autoLogin = function () {
        var _this = this;
        this.oauthService
            .fetchTokenUsingPasswordFlow("Sime", "KajIma100$$$")
            .then(function (resp) {
            // Loading data about the user
            return _this.oauthService.loadUserProfile();
        })
            .then(function () {
            // Using the loaded user data
            var claims = _this.oauthService.getIdentityClaims();
            if (claims)
                console.debug("given_name", claims.given_name);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        this.api.register(user.email, user.pass).subscribe(function (r) {
            console.log("registered");
            _this.router.navigate(["/new"]);
        }, function (e) {
            var message;
            if (e.error.errors) {
                if (e.error.errors.email) {
                    message = e.error.errors.email;
                }
            }
            if (e.error.message) {
                message = e.error.message;
            }
            _this.snackBar.open(message, "Close");
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\"></div>\r\n\r\n<div class=\"nav-container\">\r\n  <a href=\"/register\">Register</a>\r\n</div>\r\n\r\n<img id=\"logo\" src=\"assets/truck.svg\" alt=\"\" />\r\n\r\n<h1 style=\"text-align: center\">Delivery made simple</h1>\r\n\r\n<div class=\"video-section\">\r\n  <iframe\r\n    width=\"560\"\r\n    height=\"315\"\r\n    src=\"https://www.youtube.com/embed/rMk7CKwJ8OM\"\r\n    frameborder=\"0\"\r\n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n    allowfullscreen\r\n  ></iframe>\r\n</div>\r\n\r\n<div class=\"example-container\">\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Pickup Location</mat-label>\r\n    <input\r\n      matInput\r\n      matGoogleMapsAutocomplete\r\n      [country]=\"country\"\r\n      (onAutocompleteSelected)=\"onAutocompleteSelected($event)\"\r\n      (onLocationSelected)=\"onLocationSelected($event)\"\r\n    />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Delivery Location</mat-label>\r\n    <input\r\n      matInput\r\n      matGoogleMapsAutocomplete\r\n      [country]=\"country\"\r\n      (onAutocompleteSelected)=\"onAutocompleteSelected($event)\"\r\n      (onLocationSelected)=\"onLocationSelected($event)\"\r\n    />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\" (click)=\"picker.open()\">\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" />\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n  <div>\r\n    <h3>Weight: {{ value }} kg</h3>\r\n\r\n    <a *ngIf=\"value === 10000\" href=\"\">Do you need more?</a>\r\n\r\n    <mat-slider\r\n      [max]=\"max\"\r\n      [min]=\"min\"\r\n      [tickInterval]=\"tickInterval\"\r\n      [(ngModel)]=\"value\"\r\n      style=\"width: 100%\"\r\n    ></mat-slider>\r\n  </div>\r\n\r\n  <button\r\n    style=\"width: 100%;background-color: #006cc7;font-size: 20px;padding: 6px;\"\r\n    mat-raised-button\r\n    (click)=\"onSearch()\"\r\n    color=\"primary\"\r\n  >\r\n    <span *ngIf=\"!isSearching\">Find delivery</span>\r\n    <mat-spinner\r\n      style=\"margin:auto\"\r\n      [color]=\"'white'\"\r\n      [diameter]=\"40\"\r\n      *ngIf=\"isSearching\"\r\n    ></mat-spinner>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo {\n  width: 500px;\n  margin: auto;\n  display: block; }\n\n.nav-container {\n  padding: 20px;\n  text-align: right;\n  margin-bottom: 60px; }\n\n::ng-deep html,\n::ng-deep body {\n  height: 100%; }\n\n::ng-deep .mat-spinner circle {\n  stroke: white; }\n\n.example-container {\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  background: white;\n  padding: 32px;\n  border-radius: 6px; }\n\n.example-container mat-form-field {\n    width: 100%; }\n\n.bg {\n  /* The image used */\n  background-image: url(\"https://zprojectx.github.io/pro/assets/search.jpg\");\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.video-section {\n  margin-top: 100px;\n  text-align: center;\n  margin-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxhXFwxXFxzL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUdJLFlBQVksRUFBQTs7QUFIaEI7RUFPSSxhQUFhLEVBQUE7O0FBSWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFOcEI7SUFTSSxXQUFXLEVBQUE7O0FBSWY7RUFDRSxtQkFBQTtFQUNBLDBFQUEwRTtFQUUxRSxnQkFBQTtFQUNBLFlBQVk7RUFFWixzQ0FBQTtFQUNBLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICBodG1sLFxyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmcge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly96cHJvamVjdHguZ2l0aHViLmlvL3Byby9hc3NldHMvc2VhcmNoLmpwZ1wiKTtcclxuXHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi52aWRlby1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 10000;
        this.min = 0;
        this.showTicks = false;
        this.step = 50;
        this.thumbLabel = false;
        this.value = 20;
        this.vertical = false;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isSearching = false;
        this.country = ["at", "de"];
        this.stateCtrl.valueChanges.subscribe(function (r) {
            console.log(r);
        });
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.formatLabel = function (value) {
        /*
        console.log("alo", value);
    
        if (!value) {
          return 0;
        }
    
        if (value >= 1000) {
          return Math.round(value / 1000) + "k";
        }
        */
        return value + "kg";
    };
    SearchComponent.prototype.onLocationSelected = function (result) {
        console.log("onAddressSelected: ", result);
    };
    SearchComponent.prototype.onAutocompleteSelected = function (location) {
        console.log("onLocationSelected: ", location);
        // this.latitude = location.latitude;
        //this.longitude = location.longitude;
    };
    SearchComponent.prototype.onSearch = function () {
        console.log("onSearch");
        this.isSearching = true;
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/secure-layout/secure-layout.component.html":
/*!************************************************************!*\
  !*** ./src/app/secure-layout/secure-layout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\r\n  <span class=\"title\">\r\n    ProjectX\r\n  </span>\r\n\r\n  <div style=\"float: right;cursor: pointer;\">\r\n    <mat-menu #appMenu=\"matMenu\">\r\n      <button [routerLink]=\"['/user']\" mat-menu-item>\r\n        {{ claims.name }}\r\n      </button>\r\n      <button (click)=\"logout()\" mat-menu-item>Logout</button>\r\n    </mat-menu>\r\n\r\n    <button\r\n      style=\"margin-right: 12px;\"\r\n      mat-icon-button\r\n      [matMenuTriggerFor]=\"appMenu\"\r\n    >\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display: flex;margin-right: 12px\">\r\n  <div class=\"side-nav-bar\">\r\n    <div (click)=\"addNew()\" class=\"add mat-elevation-z1\">\r\n      <mat-icon>add</mat-icon> New Offer\r\n    </div>\r\n\r\n    <br />\r\n\r\n    <div routerLink=\"/new\" routerLinkActive=\"active\" class=\"item\">\r\n      <mat-icon>perm_identity</mat-icon> Offers\r\n    </div>\r\n\r\n    <div routerLink=\"/services\" routerLinkActive=\"active\" class=\"item\">\r\n      <mat-icon>event_note</mat-icon> Services\r\n    </div>\r\n\r\n    <div [routerLink]=\"['calendar']\" routerLinkActive=\"active\" class=\"item\">\r\n      <mat-icon>date_range</mat-icon> Calendar\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/secure-layout/secure-layout.component.scss":
/*!************************************************************!*\
  !*** ./src/app/secure-layout/secure-layout.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar {\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .nav-bar .title {\n    font-size: 20px;\n    background: #0096ff;\n    color: white;\n    height: 70px;\n    width: 220px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom-right-radius: 22px; }\n  .side-nav-bar {\n  width: 220px;\n  margin-top: 4px;\n  margin-right: 20px; }\n  .side-nav-bar .item {\n    display: flex;\n    align-items: center;\n    padding: 10px 0px;\n    padding-left: 14px;\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    cursor: pointer;\n    font-weight: bold; }\n  .side-nav-bar .item mat-icon {\n      margin-right: 8px; }\n  .side-nav-bar .item.active {\n      background: rgba(0, 153, 255, 0.1);\n      color: #0099ff; }\n  .side-nav-bar .item:hover:not(.active) {\n      background: rgba(0, 0, 0, 0.03); }\n  .side-nav-bar .add {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n    border-radius: 42px;\n    margin: 10px;\n    padding: 10px 24px; }\n  .side-nav-bar .add mat-icon {\n      height: 40px;\n      width: 40px;\n      font-size: 40px;\n      color: #0099ff; }\n  .container {\n  padding: 12px;\n  margin-top: 38px;\n  flex: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdXJlLWxheW91dC9EOlxcYVxcMVxccy9zcmNcXGFwcFxcc2VjdXJlLWxheW91dFxcc2VjdXJlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0VBSnJCO0lBT0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0MsRUFBQTtFQUlwQztFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFIcEI7SUFNSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFickI7TUFnQk0saUJBQWlCLEVBQUE7RUFoQnZCO01Bb0JNLGtDQUFrQztNQUNsQyxjQUF1QixFQUFBO0VBckI3QjtNQXlCTSwrQkFBK0IsRUFBQTtFQXpCckM7SUE4QkksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFwQ3RCO01Bc0NNLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLGNBOUR5QixFQUFBO0VBbUUvQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VjdXJlLWxheW91dC9zZWN1cmUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlZmF1bHRDb2xvcjogcmdiKDAsIDE1MywgMjU1KTtcclxuXHJcbi5uYXYtYmFyIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDk2ZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZS1uYXYtYmFyIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNTMsIDI1NSwgMC4xKTtcclxuICAgICAgY29sb3I6IHJnYigwLCAxNTMsIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQycHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgY29sb3I6ICRkZWZhdWx0Q29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgZmxleDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/secure-layout/secure-layout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/secure-layout/secure-layout.component.ts ***!
  \**********************************************************/
/*! exports provided: SecureLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureLayoutComponent", function() { return SecureLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-new/add-new.component */ "./src/app/add-new/add-new.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");







var SecureLayoutComponent = /** @class */ (function () {
    function SecureLayoutComponent(dialog, oauthService, service) {
        this.dialog = dialog;
        this.oauthService = oauthService;
        this.service = service;
        this.title = "projectX";
        this.claims = {};
        this.isRegister = false;
    }
    SecureLayoutComponent.prototype.ngOnInit = function () {
        this.oauthService.loadUserProfile();
        this.claims = this.oauthService.getIdentityClaims();
    };
    SecureLayoutComponent.prototype.logout = function () {
        this.oauthService.logOut();
    };
    SecureLayoutComponent.prototype.addNew = function () {
        var _this = this;
        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(), "DD.MM.YYYY HH:mm");
        var dialogRef = this.dialog.open(_add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__["AddNewComponent"], {
            width: "250px",
            data: {
                created_at: date
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result || (result && Object.keys(result).length === 0)) {
                return;
            }
            _this.service.newEvent(result);
        });
    };
    SecureLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-secure-layout",
            template: __webpack_require__(/*! ./secure-layout.component.html */ "./src/app/secure-layout/secure-layout.component.html"),
            styles: [__webpack_require__(/*! ./secure-layout.component.scss */ "./src/app/secure-layout/secure-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"],
            _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], SecureLayoutComponent);
    return SecureLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  services works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");




var SharedService = /** @class */ (function () {
    function SharedService(api) {
        var _this = this;
        this.api = api;
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.job = {
            name: {
                type: "string",
                default: true
            },
            created_at: {
                type: "date",
                default: true
            }
        };
        this.api.getJobFields().subscribe(function (res) {
            if (res) {
                _this.job = res;
            }
        });
    }
    SharedService.prototype.addJobFields = function (o) {
        this.job = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.job, o);
        this.api.addJobFields(this.job);
    };
    SharedService.prototype.removeJobField = function (o) {
        delete this.job[o.name];
        this.api.removeJobField(this.job);
    };
    SharedService.prototype.newEvent = function (event) {
        this._subject.next(event);
    };
    Object.defineProperty(SharedService.prototype, "events$", {
        get: function () {
            return this._subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/test-data.ts":
/*!*************************************!*\
  !*** ./src/app/shared/test-data.ts ***!
  \*************************************/
/*! exports provided: offers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offers", function() { return offers; });
var offers = [
    { id: 1, name: "Anfrage 1", created_at: "22.12.2018 10:23" },
    { id: 2, name: "Offer 2", created_at: "22.12.2018 10:23" },
    { id: 3, name: "Job for Mark", created_at: "22.12.2018 10:23" }
];


/***/ }),

/***/ "./src/app/today/today.component.html":
/*!********************************************!*\
  !*** ./src/app/today/today.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1 full-width\">\r\n  \r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>"

/***/ }),

/***/ "./src/app/today/today.component.scss":
/*!********************************************!*\
  !*** ./src/app/today/today.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/today/today.component.ts":
/*!******************************************!*\
  !*** ./src/app/today/today.component.ts ***!
  \******************************************/
/*! exports provided: TodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var TodayComponent = /** @class */ (function () {
    function TodayComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    TodayComponent.prototype.ngOnInit = function () {
    };
    TodayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-today',
            template: __webpack_require__(/*! ./today.component.html */ "./src/app/today/today.component.html"),
            styles: [__webpack_require__(/*! ./today.component.scss */ "./src/app/today/today.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodayComponent);
    return TodayComponent;
}());



/***/ }),

/***/ "./src/app/user/add-property/add-property.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/add-property/add-property.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enter new property value</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field style=\"margin-bottom: 30px;\" class=\"full-width\">\r\n    <input required matInput [formControl]=\"name\" placeholder=\"Name\">\r\n    <mat-hint style=\"color: red; font-weight: bold\" *ngIf=\"name.value && !name.hasError('valid')\">Numbers, big letters and special characters are not allowed</mat-hint>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-select [(ngModel)]=\"data.type\" placeholder=\"Type\">\r\n      <mat-option *ngFor=\"let type of types\" [value]=\"type.value\">\r\n        {{ type.viewValue }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!name.hasError('valid')\" [mat-dialog-close]=\"data\">Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/user/add-property/add-property.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/add-property/add-property.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWRkLXByb3BlcnR5L2FkZC1wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/add-property/add-property.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/add-property/add-property.component.ts ***!
  \*************************************************************/
/*! exports provided: AddPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropertyComponent", function() { return AddPropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




function isValid(input) {
    var re = new RegExp("^[a-z]+$");
    return input.value.match(re) ? { valid: true } : null;
}
var AddPropertyComponent = /** @class */ (function () {
    function AddPropertyComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, isValid]);
        this.types = [
            { value: 'string', viewValue: 'string' },
            { value: 'number', viewValue: 'number' },
            { value: 'date', viewValue: 'date' }
        ];
        this.name.setValue(data.name);
        this.name.valueChanges.subscribe(function (r) {
            data.name = r;
        });
    }
    AddPropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-property',
            template: __webpack_require__(/*! ./add-property.component.html */ "./src/app/user/add-property/add-property.component.html"),
            styles: [__webpack_require__(/*! ./add-property.component.scss */ "./src/app/user/add-property/add-property.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddPropertyComponent);
    return AddPropertyComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [selectedIndex]=\"1\">\r\n  <mat-tab label=\"Company Info\">\r\n    <div style=\"padding: 12px;\">\r\n      <h2>Company Info</h2>\r\n\r\n      <form class=\"example-form\" style=\"margin-top: 12px\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Username\" [value]=\"user\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            type=\"password\"\r\n            placeholder=\"Password\"\r\n            [value]=\"pass\"\r\n          />\r\n        </mat-form-field>\r\n      </form>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Services\">\r\n    <div style=\"padding: 12px;\">\r\n      <h2>\r\n        Services\r\n        <button\r\n          class=\"right\"\r\n          (click)=\"addNewParameter()\"\r\n          mat-raised-button\r\n          color=\"primary\"\r\n        >\r\n          Add new service\r\n        </button>\r\n      </h2>\r\n\r\n      <div>\r\n        <table\r\n          mat-table\r\n          [dataSource]=\"dataSource\"\r\n          class=\"mat-elevation-z1 full-width\"\r\n        >\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef>Name</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\r\n          </ng-container>\r\n\r\n          <!-- Type Column -->\r\n          <ng-container matColumnDef=\"type\">\r\n            <th mat-header-cell *matHeaderCellDef>Info</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element.type }}</td>\r\n          </ng-container>\r\n\r\n          <!-- Type Column -->\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef>Action</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button\r\n                (click)=\"delete(element)\"\r\n                mat-icon-button\r\n                *ngIf=\"!element.isDefault\"\r\n              >\r\n                <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"User Settings\">\r\n    <div style=\"padding: 12px;\">\r\n      <h2>User Settings</h2>\r\n\r\n      <form class=\"example-form\" style=\"margin-top: 12px\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Username\" [value]=\"user\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            type=\"password\"\r\n            placeholder=\"Password\"\r\n            [value]=\"pass\"\r\n          />\r\n        </mat-form-field>\r\n      </form>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-column-action {\n  width: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9EOlxcYVxcMVxccy9zcmNcXGFwcFxcdXNlclxcdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tYWN0aW9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _add_property_add_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-property/add-property.component */ "./src/app/user/add-property/add-property.component.ts");






var UserComponent = /** @class */ (function () {
    function UserComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ["name", "type", "action"];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.load();
    }
    Object.defineProperty(UserComponent.prototype, "user", {
        get: function () {
            return localStorage.getItem("user");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "pass", {
        get: function () {
            return localStorage.getItem("pass");
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent.prototype.addNewParameter = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_5__["AddPropertyComponent"], {
            width: "350px",
            data: { name: "", type: "string" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            var o = {};
            o[result.name] = result.type;
            _this.service.addJobFields(o);
            _this.load();
        });
    };
    UserComponent.prototype.delete = function (e) {
        var _this = this;
        var type = "warning";
        var options = {
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this property!",
            type: type,
            showCancelButton: true
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(options).then(function (willDelete) {
            if (willDelete.value) {
                _this.service.removeJobField(e);
                _this.load();
            }
        });
    };
    UserComponent.prototype.load = function () {
        this.ELEMENT_DATA = [
            {
                name: "Service 1",
                type: "Some info "
            }
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/view/preview/preview.component.html":
/*!*****************************************************!*\
  !*** ./src/app/view/preview/preview.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ data.name }} preview</h1>\r\n<div mat-dialog-content>\r\n  <p>Dear Google,</p>\r\n\r\n  <p>We are requesting offer for the following items</p>\r\n\r\n  <div *ngFor=\"let item of data.items\">\r\n    {{ item | json }}\r\n  </div>\r\n\r\n  <table></table>\r\n\r\n  <p>Looking forward for your reply!</p>\r\n  <br />\r\n  <p>Best Regards</p>\r\n  <p>MY COMPANY</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"send()\" cdkFocusInitial>\r\n    Send\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view/preview/preview.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/view/preview/preview.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/preview/preview.component.ts":
/*!***************************************************!*\
  !*** ./src/app/view/preview/preview.component.ts ***!
  \***************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    PreviewComponent.prototype.ngOnInit = function () { };
    PreviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PreviewComponent.prototype.send = function () {
        var type = "success";
        var options = {
            title: "Congratulations!",
            text: "Your offer has been sent to the Google.",
            type: type
        };
        this.dialogRef.close();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(options).then(function (willDelete) {
            if (willDelete.value) {
            }
        });
    };
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-preview",
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/view/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.scss */ "./src/app/view/preview/preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/view/send/send.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/send/send.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Send Offer To</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input\r\n      type=\"text\"\r\n      placeholder=\"Pick one\"\r\n      aria-label=\"Number\"\r\n      matInput\r\n      [formControl]=\"myControl\"\r\n      [matAutocomplete]=\"auto\"\r\n    />\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option\r\n        *ngFor=\"let option of (filteredOptions | async)\"\r\n        [value]=\"option\"\r\n      >\r\n        {{ option }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button\r\n    mat-raised-button\r\n    color=\"accent\"\r\n    [disabled]=\"!formValid\"\r\n    (click)=\"preview()\"\r\n  >\r\n    Preview\r\n  </button>\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    [disabled]=\"!formValid\"\r\n    [mat-dialog-close]=\"data\"\r\n    cdkFocusInitial\r\n  >\r\n    Create\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view/send/send.component.scss":
/*!***********************************************!*\
  !*** ./src/app/view/send/send.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvc2VuZC9zZW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/send/send.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/send/send.component.ts ***!
  \*********************************************/
/*! exports provided: SendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComponent", function() { return SendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preview/preview.component */ "./src/app/view/preview/preview.component.ts");






var SendComponent = /** @class */ (function () {
    function SendComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ["Company 1", "Google", "Facebook"];
    }
    Object.defineProperty(SendComponent.prototype, "formValid", {
        get: function () {
            var truthy = true;
            /*
            this.fields.forEach(e => {
              truthy = !this.data[e] ? false : true;
            });
            */
            return truthy;
        },
        enumerable: true,
        configurable: true
    });
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
    };
    SendComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SendComponent.prototype.preview = function () {
        this.dialogRef.close();
        var dialogRef = this.dialog.open(_preview_preview_component__WEBPACK_IMPORTED_MODULE_5__["PreviewComponent"], {
            width: "900px",
            data: this.data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result || (result && Object.keys(result).length === 0)) {
                return;
            }
            console.log(result);
        });
    };
    SendComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
        });
    };
    SendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-send",
            template: __webpack_require__(/*! ./send.component.html */ "./src/app/view/send/send.component.html"),
            styles: [__webpack_require__(/*! ./send.component.scss */ "./src/app/view/send/send.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(offer$ | async) as offer; else notFound\">\r\n  <h1>\r\n    {{ offer.name }}\r\n    <span class=\"right\">\r\n      <button\r\n        (click)=\"delete(offer)\"\r\n        matTooltip=\"Delete This Offer\"\r\n        mat-icon-button\r\n      >\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n      <button\r\n        (click)=\"showHistory(offer)\"\r\n        matTooltip=\"Sent Offers\"\r\n        mat-icon-button\r\n      >\r\n        <mat-icon aria-label=\"Delete\">history</mat-icon>\r\n      </button>\r\n    </span>\r\n  </h1>\r\n  <hr />\r\n  <h3>{{ offer.created_at }}</h3>\r\n\r\n  <div style=\"display: flex;justify-content: space-between;\">\r\n    <div>\r\n      <div *ngFor=\"let o of (offer | keyvalue)\">\r\n        <label\r\n          style=\"font-weight: bold;text-transform: capitalize;\"\r\n          for=\"{{ o.key }}\"\r\n          >{{ o.key.replace(\"_\", \" \") }}:\r\n        </label>\r\n        <div style=\"display: inline-block;\" id=\"{{ o.key }}\">\r\n          {{ o.key === \"items\" ? o.value.length : o.value }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <button\r\n        *ngIf=\"hasSelection()\"\r\n        class=\"right\"\r\n        (click)=\"createSubOffer()\"\r\n        mat-raised-button\r\n        color=\"primary\"\r\n      >\r\n        Create new offer\r\n      </button>\r\n      <button\r\n        *ngIf=\"!hasSelection()\"\r\n        class=\"right\"\r\n        (click)=\"send()\"\r\n        mat-raised-button\r\n        color=\"primary\"\r\n      >\r\n        Send Offer\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <br />\r\n\r\n  <table\r\n    mat-table\r\n    [dataSource]=\"dataSource\"\r\n    class=\"mat-elevation-z1\"\r\n    style=\"width: 100%\"\r\n  >\r\n    <!-- Checkbox Column -->\r\n    <ng-container matColumnDef=\"select\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <mat-checkbox\r\n          (change)=\"$event ? masterToggle() : null\"\r\n          [checked]=\"selection.hasValue() && isAllSelected()\"\r\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n        >\r\n        </mat-checkbox>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <mat-checkbox\r\n          (click)=\"$event.stopPropagation()\"\r\n          (change)=\"$event ? selection.toggle(row) : null\"\r\n          [checked]=\"selection.isSelected(row)\"\r\n        >\r\n        </mat-checkbox>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef>Status</th>\r\n      <td mat-cell *matCellDef=\"let element; let i = index\">\r\n        <span class=\"status received\" *ngIf=\"i === 0\">OFFER RECEIVED</span>\r\n        <span class=\"status new\" *ngIf=\"i > 0\">NEW</span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef>Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.weight }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef>Price</th>\r\n      <td mat-cell *matCellDef=\"let element\"></td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"reply\">\r\n      <th mat-header-cell *matHeaderCellDef>Offer Received</th>\r\n      <td mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button (click)=\"send()\" mat-raised-button color=\"primary\">\r\n          Details\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let row; columns: displayedColumns\"\r\n      (click)=\"selection.toggle(row)\"\r\n    ></tr>\r\n  </table>\r\n</div>\r\n\r\n<ng-template #notFound>\r\n  <div>\r\n    Oopps, we did not found this offer :(\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n  color: white;\n  border-radius: 6px;\n  font-weight: bold;\n  padding: 2px 10px; }\n\n.received {\n  background: green; }\n\n.new {\n  background: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9EOlxcYVxcMVxccy9zcmNcXGFwcFxcdmlld1xcdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuXHJcbi5yZWNlaXZlZCB7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5uZXcge1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-new/add-new.component */ "./src/app/add-new/add-new.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _shared_test_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/test-data */ "./src/app/shared/test-data.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./send/send.component */ "./src/app/view/send/send.component.ts");











var ViewComponent = /** @class */ (function () {
    function ViewComponent(dialog, api, route, router) {
        this.dialog = dialog;
        this.api = api;
        this.route = route;
        this.router = router;
        this.displayedColumns = [
            "select",
            "position",
            "name",
            "weight",
            "symbol",
            "reply"
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (p) {
            var id = Number(p["params"].id);
            _this.offer$ = _this.api.getOfferDetail(id);
            _this.offer$.subscribe(function (o) {
                if (!o) {
                    return;
                }
                _this.offer = o;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](o.items);
            });
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ViewComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ViewComponent.prototype.hasSelection = function () {
        return this.selection.selected.length > 0;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ViewComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ViewComponent.prototype.createSubOffer = function () {
        var _this = this;
        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(), "DD.MM.YYYY HH:mm");
        var dialogRef = this.dialog.open(_add_new_add_new_component__WEBPACK_IMPORTED_MODULE_7__["AddNewComponent"], {
            width: "250px",
            data: {
                created_at: date
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result || (result && Object.keys(result).length === 0)) {
                return;
            }
            var o = {
                id: _shared_test_data__WEBPACK_IMPORTED_MODULE_9__["offers"].length,
                parent_id: _this.offer.id,
                name: result.name,
                created_at: result.created_at,
                items: _this.selection.selected
            };
            _this.api.createOffer(o).subscribe(function (r) {
                _this.selection.clear();
                _this.router.navigate(["/new", r.id]);
            });
        });
    };
    ViewComponent.prototype.send = function () {
        var dialogRef = this.dialog.open(_send_send_component__WEBPACK_IMPORTED_MODULE_10__["SendComponent"], {
            width: "300px",
            data: this.offer
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result || (result && Object.keys(result).length === 0)) {
                return;
            }
            console.log(result);
        });
    };
    ViewComponent.prototype.delete = function (o) {
        var _this = this;
        var type = "warning";
        var options = {
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this offer!",
            type: type,
            showCancelButton: true
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(options).then(function (willDelete) {
            if (willDelete.value) {
                _this.api.removeOffer(o.id);
                _this.router.navigate(["/new"]);
            }
        });
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-view",
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewComponent);
    return ViewComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\a\1\s\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map