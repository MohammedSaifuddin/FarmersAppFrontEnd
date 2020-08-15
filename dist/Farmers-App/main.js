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

/***/ "./src/app/admin-nav-bar/admin-nav-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-nav-bar/admin-nav-bar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW5hdi1iYXIvYWRtaW4tbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-nav-bar/admin-nav-bar.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-nav-bar/admin-nav-bar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n            <a class=\"navbar-brand\" href=\"#\" style=\"font-size: 16px;\">Farmer Assistant Web Service</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/admin_page\">Complaints Page <span class=\"sr-only\">(current)</span></a></li>\n                <li><a routerLink=\"/post_farming_tips\">Post Farming Tips</a></li>\n\n            </ul>\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/admin-nav-bar/admin-nav-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-nav-bar/admin-nav-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavBarComponent", function() { return AdminNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminNavBarComponent = /** @class */ (function () {
    function AdminNavBarComponent() {
    }
    AdminNavBarComponent.prototype.ngOnInit = function () {
    };
    AdminNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-nav-bar',
            template: __webpack_require__(/*! ./admin-nav-bar.component.html */ "./src/app/admin-nav-bar/admin-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./admin-nav-bar.component.css */ "./src/app/admin-nav-bar/admin-nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminNavBarComponent);
    return AdminNavBarComponent;
}());



/***/ }),

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n/*\t\n\tSide Navigation Menu V2, RWD\n\t===================\n\tLicense:\n\thttps://goo.gl/EaUPrt\n\t===================\n\tAuthor: @PableraShow\n\n */\n@charset \"UTF-8\";\nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 300;\n    line-height: 1.42em;\n    color: #A7A1AE;\n    background-color: #1F2739;\n}\nh1 {\n    font-size: 3em;\n    font-weight: 300;\n    line-height: 1em;\n    text-align: center;\n    color: #4DC3FA;\n}\nh2 {\n    font-size: 1em;\n    font-weight: 300;\n    text-align: center;\n    display: block;\n    line-height: 1em;\n    padding-bottom: 2em;\n    color: #FB667A;\n}\nh2 a {\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #FB667A;\n    text-decoration: none;\n}\n.blue {\n    color: #185875;\n}\n.yellow {\n    color: #FFF842;\n}\n.container th h1 {\n    font-weight: bold;\n    font-size: 1em;\n    text-align: left;\n    color: #185875;\n}\n.container td {\n    font-weight: normal;\n    font-size: 1em;\n    box-shadow: 0 2px 2px -2px #0E1119;\n}\n.container {\n    text-align: left;\n    overflow: hidden;\n    width: 80%;\n    margin: 0 auto;\n    display: table;\n    padding: 0 0 8em 0;\n}\n.container td,\n.container th {\n    padding-bottom: 2%;\n    padding-top: 2%;\n    padding-left: 2%;\n    color: white;\n}\n/* Background-color of the odd rows */\n.container tr:nth-child(odd) {\n    background-color: #323C50;\n}\n/* Background-color of the even rows */\n.container tr:nth-child(even) {\n    background-color: #2C3446;\n}\n.container th {\n    background-color: #1F2739;\n    color: white;\n}\n.container td:first-child {\n    color: #FB667A;\n}\n.container tr:hover {\n    background-color: #464A52;\n    box-shadow: 0 6px 6px -6px #0E1119;\n    color: white;\n}\n.container td:hover {\n    background-color: #FFF842;\n    color: #403E10;\n    font-weight: bold;\n    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;\n    -webkit-transform: translate3d(6px, -6px, 0);\n            transform: translate3d(6px, -6px, 0);\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s;\n    -webkit-transition-property: all;\n    transition-property: all;\n    -webkit-transition-timing-function: line;\n            transition-timing-function: line;\n}\n/* @media (max-width: 800px) {\n    .container td:nth-child(4),\n    .container th:nth-child(4) {\n        display: none;\n    }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLDJFQUEyRTtBQVgzRTs7Ozs7Ozs7R0FRRztBQUVILGlCQUFpQjtBQUVqQjtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBR2YsbUNBQW1DO0NBQ3RDO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUVEOztJQUVJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7QUFHRCxzQ0FBc0M7QUFFdEM7SUFDSSwwQkFBMEI7Q0FDN0I7QUFHRCx1Q0FBdUM7QUFFdkM7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFHMUIsbUNBQW1DO0lBQ25DLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVIQUF1SDtJQUN2SCw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEM7QUFHRDs7Ozs7SUFLSSIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcdFxuXHRTaWRlIE5hdmlnYXRpb24gTWVudSBWMiwgUldEXG5cdD09PT09PT09PT09PT09PT09PT1cblx0TGljZW5zZTpcblx0aHR0cHM6Ly9nb28uZ2wvRWFVUHJ0XG5cdD09PT09PT09PT09PT09PT09PT1cblx0QXV0aG9yOiBAUGFibGVyYVNob3dcblxuICovXG5cbkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDApO1xuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDJlbTtcbiAgICBjb2xvcjogI0E3QTFBRTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyNzM5O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzREQzNGQTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICBjb2xvcjogI0ZCNjY3QTtcbn1cblxuaDIgYSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjRkI2NjdBO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsdWUge1xuICAgIGNvbG9yOiAjMTg1ODc1O1xufVxuXG4ueWVsbG93IHtcbiAgICBjb2xvcjogI0ZGRjg0Mjtcbn1cblxuLmNvbnRhaW5lciB0aCBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzE4NTg3NTtcbn1cblxuLmNvbnRhaW5lciB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG59XG5cbi5jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBhZGRpbmc6IDAgMCA4ZW0gMDtcbn1cblxuLmNvbnRhaW5lciB0ZCxcbi5jb250YWluZXIgdGgge1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLyogQmFja2dyb3VuZC1jb2xvciBvZiB0aGUgb2RkIHJvd3MgKi9cblxuLmNvbnRhaW5lciB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyM0M1MDtcbn1cblxuXG4vKiBCYWNrZ3JvdW5kLWNvbG9yIG9mIHRoZSBldmVuIHJvd3MgKi9cblxuLmNvbnRhaW5lciB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM0NDY7XG59XG5cbi5jb250YWluZXIgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI3Mzk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogI0ZCNjY3QTtcbn1cblxuLmNvbnRhaW5lciB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NEE1MjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDZweCA2cHggLTZweCAjMEUxMTE5O1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHRkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGODQyO1xuICAgIGNvbG9yOiAjNDAzRTEwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6ICM3RjdDMjEgLTFweCAxcHgsICM3RjdDMjEgLTJweCAycHgsICM3RjdDMjEgLTNweCAzcHgsICM3RjdDMjEgLTRweCA0cHgsICM3RjdDMjEgLTVweCA1cHgsICM3RjdDMjEgLTZweCA2cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2cHgsIC02cHgsIDApO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lO1xufVxuXG5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jb250YWluZXIgdGQ6bnRoLWNoaWxkKDQpLFxuICAgIC5jb250YWluZXIgdGg6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-nav-bar></app-admin-nav-bar>\n<div>\n    <h5 style=\"text-align: center;\">Management of Complaints by Admin</h5>\n    <!-- <table class=\"table\"> -->\n    <table class=\"container\">\n        <thead>\n            <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Complaint Details</th>\n                <th scope=\"col\">Complaint Status</th>\n                <th scope=\"col\">Edit Status</th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- \n            <tr *ngFor=\"let data of datas; let i = index\" (click)=\"selectedRow=i;getSupplier(data.id)\">\n                //code\n            </tr> -->\n            <tr *ngFor=\"let product of this.cropModel; let index = index\">\n                <td scope=\"row\">{{product['id']}}</td>\n                <td>{{product['complaint_details']}}</td>\n                <td>{{product['complaint_status']}}</td>\n                <td><button type=\"button\" (click)=\" selectedRow=index;changeStatus(product)\" class=\"glyphicon glyphicon-check\"></button>\n                </td>\n                <!-- <td><button (click)=\"changeStatus(item)\"></button></td> -->\n\n            </tr>\n\n        </tbody>\n    </table>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");



var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(userService) {
        this.userService = userService;
        this.cropModel = {};
        this.statusModel = {};
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
        this.sendFormData();
    };
    AdminPageComponent.prototype.sendFormData = function () {
        var _this = this;
        // alert(JSON.stringify(this.cropModel))
        this.search_id = this.new_user[0].id;
        // alert(this.search_id)
        this.userService.getAllComplaintDataForAdmin().subscribe(function (data) {
            // alert("Details Retrieved Successfully"+JSON.stringify(data))
            _this.cropModel = data;
            console.log("Response::" + JSON.stringify(data));
        });
    };
    AdminPageComponent.prototype.setComplaintStatus = function () {
    };
    AdminPageComponent.prototype.changeStatus = function (selectedItem) {
        this.set_complaint_status_id = selectedItem.id;
        this.statusModel.id = this.set_complaint_status_id;
        this.userService.setComplaintStatus(this.set_complaint_status_id).subscribe(function (data) {
            // alert("Details Retrieved Successfully"+JSON.stringify(data))
            console.log("Response::" + JSON.stringify(data));
        });
        console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
        window.location.reload();
    };
    AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/angular.material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular.material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");









var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]],
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _registration_for_login_registration_for_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-for-login/registration-for-login.component */ "./src/app/registration-for-login/registration-for-login.component.ts");
/* harmony import */ var _buyers_buyers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyers/buyers.component */ "./src/app/buyers/buyers.component.ts");
/* harmony import */ var src_buyer_product_details_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/buyer-product-details/buyer-product-details.component */ "./src/buyer-product-details/buyer-product-details.component.ts");
/* harmony import */ var src_farmer_form_details_farmer_form_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/farmer-form-details/farmer-form-details.component */ "./src/farmer-form-details/farmer-form-details.component.ts");
/* harmony import */ var _single_crop_single_crop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single-crop/single-crop.component */ "./src/app/single-crop/single-crop.component.ts");
/* harmony import */ var _post_complaints_page_post_complaints_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-complaints-page/post-complaints-page.component */ "./src/app/post-complaints-page/post-complaints-page.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _complaint_status_complaint_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./complaint-status/complaint-status.component */ "./src/app/complaint-status/complaint-status.component.ts");
/* harmony import */ var _post_farming_tips_post_farming_tips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-farming-tips/post-farming-tips.component */ "./src/app/post-farming-tips/post-farming-tips.component.ts");
/* harmony import */ var _farming_tips_farming_tips_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./farming-tips/farming-tips.component */ "./src/app/farming-tips/farming-tips.component.ts");
/* harmony import */ var _buyer_form_buyer_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buyer-form/buyer-form.component */ "./src/app/buyer-form/buyer-form.component.ts");
/* harmony import */ var _farmer_crop_requiements_farmer_crop_requiements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./farmer-crop-requiements/farmer-crop-requiements.component */ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.ts");
/* harmony import */ var _single_required_crop_single_required_crop_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./single-required-crop/single-required-crop.component */ "./src/app/single-required-crop/single-required-crop.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");



















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _registration_for_login_registration_for_login_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationForLoginComponent"] },
    // { path: 'buyers', component: BuyersComponent },
    //############################################################
    //Suppplier
    { path: 'farmer', component: src_farmer_form_details_farmer_form_details_component__WEBPACK_IMPORTED_MODULE_8__["FarmerFormDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'post_complaints', component: _post_complaints_page_post_complaints_page_component__WEBPACK_IMPORTED_MODULE_10__["PostComplaintsPageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'complaint_status', component: _complaint_status_complaint_status_component__WEBPACK_IMPORTED_MODULE_12__["ComplaintStatusComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'farming_tips', component: _farming_tips_farming_tips_component__WEBPACK_IMPORTED_MODULE_14__["FarmingTipsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'single_buyer/:id', component: _single_required_crop_single_required_crop_component__WEBPACK_IMPORTED_MODULE_17__["SingleRequiredCropComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'required_crops', component: _farmer_crop_requiements_farmer_crop_requiements_component__WEBPACK_IMPORTED_MODULE_16__["FarmerCropRequiementsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    //############################################################
    //Admin
    { path: 'admin_page', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_11__["AdminPageComponent"] },
    { path: 'post_farming_tips', component: _post_farming_tips_post_farming_tips_component__WEBPACK_IMPORTED_MODULE_13__["PostFarmingTipsComponent"] },
    //############################################################
    //Buyer
    { path: 'crops', component: src_buyer_product_details_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_7__["BuyerProductDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'buyer_form', component: _buyer_form_buyer_form_component__WEBPACK_IMPORTED_MODULE_15__["BuyerFormComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'single/:id', component: _single_crop_single_crop_component__WEBPACK_IMPORTED_MODULE_9__["SingleCropComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'test', component: _buyers_buyers_component__WEBPACK_IMPORTED_MODULE_6__["BuyersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n  <span>My First App</span>\n      <span class=\"example-fill-remaining-space\"></span>\n      <span class=\"align-center\"></span>\n      <span class=\"example-spacer\"></span>\n      <button mat-button>About</button>\n      <button mat-button>Contact</button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>dialpad</mat-icon>\n      <span>Redial</span>\n    </button>\n    <button mat-menu-item disabled>\n      <mat-icon>voicemail</mat-icon>\n      <span>Check voicemail</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      <span>Disable alerts</span>\n    </button>\n  </mat-menu>\n   </mat-toolbar-row> -->\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Farmers-App';
        this.name = 'Karthik';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular.material.module */ "./src/app/angular.material.module.ts");
/* harmony import */ var _registration_for_login_registration_for_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration-for-login/registration-for-login.component */ "./src/app/registration-for-login/registration-for-login.component.ts");
/* harmony import */ var _buyers_buyers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buyers/buyers.component */ "./src/app/buyers/buyers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _buyer_product_details_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../buyer-product-details/buyer-product-details.component */ "./src/buyer-product-details/buyer-product-details.component.ts");
/* harmony import */ var _farmer_form_details_farmer_form_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../farmer-form-details/farmer-form-details.component */ "./src/farmer-form-details/farmer-form-details.component.ts");
/* harmony import */ var _single_crop_single_crop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./single-crop/single-crop.component */ "./src/app/single-crop/single-crop.component.ts");
/* harmony import */ var _post_complaints_page_post_complaints_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post-complaints-page/post-complaints-page.component */ "./src/app/post-complaints-page/post-complaints-page.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _complaint_status_complaint_status_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./complaint-status/complaint-status.component */ "./src/app/complaint-status/complaint-status.component.ts");
/* harmony import */ var _post_farming_tips_post_farming_tips_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./post-farming-tips/post-farming-tips.component */ "./src/app/post-farming-tips/post-farming-tips.component.ts");
/* harmony import */ var _farming_tips_farming_tips_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./farming-tips/farming-tips.component */ "./src/app/farming-tips/farming-tips.component.ts");
/* harmony import */ var _buyer_form_buyer_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./buyer-form/buyer-form.component */ "./src/app/buyer-form/buyer-form.component.ts");
/* harmony import */ var _farmer_crop_requiements_farmer_crop_requiements_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./farmer-crop-requiements/farmer-crop-requiements.component */ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.ts");
/* harmony import */ var _single_required_crop_single_required_crop_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./single-required-crop/single-required-crop.component */ "./src/app/single-required-crop/single-required-crop.component.ts");
/* harmony import */ var _supplier_nav_bar_supplier_nav_bar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./supplier-nav-bar/supplier-nav-bar.component */ "./src/app/supplier-nav-bar/supplier-nav-bar.component.ts");
/* harmony import */ var _buyer_nav_bar_buyer_nav_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./buyer-nav-bar/buyer-nav-bar.component */ "./src/app/buyer-nav-bar/buyer-nav-bar.component.ts");
/* harmony import */ var _admin_nav_bar_admin_nav_bar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin-nav-bar/admin-nav-bar.component */ "./src/app/admin-nav-bar/admin-nav-bar.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _registration_for_login_registration_for_login_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationForLoginComponent"],
                _buyers_buyers_component__WEBPACK_IMPORTED_MODULE_9__["BuyersComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"],
                _buyer_product_details_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_17__["BuyerProductDetailsComponent"],
                _farmer_form_details_farmer_form_details_component__WEBPACK_IMPORTED_MODULE_18__["FarmerFormDetailsComponent"],
                _single_crop_single_crop_component__WEBPACK_IMPORTED_MODULE_19__["SingleCropComponent"],
                _post_complaints_page_post_complaints_page_component__WEBPACK_IMPORTED_MODULE_20__["PostComplaintsPageComponent"],
                _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_21__["AdminPageComponent"],
                _complaint_status_complaint_status_component__WEBPACK_IMPORTED_MODULE_22__["ComplaintStatusComponent"],
                _post_farming_tips_post_farming_tips_component__WEBPACK_IMPORTED_MODULE_23__["PostFarmingTipsComponent"],
                _farming_tips_farming_tips_component__WEBPACK_IMPORTED_MODULE_24__["FarmingTipsComponent"],
                _buyer_form_buyer_form_component__WEBPACK_IMPORTED_MODULE_25__["BuyerFormComponent"],
                _farmer_crop_requiements_farmer_crop_requiements_component__WEBPACK_IMPORTED_MODULE_26__["FarmerCropRequiementsComponent"],
                _single_required_crop_single_required_crop_component__WEBPACK_IMPORTED_MODULE_27__["SingleRequiredCropComponent"],
                _supplier_nav_bar_supplier_nav_bar_component__WEBPACK_IMPORTED_MODULE_28__["SupplierNavBarComponent"],
                _buyer_nav_bar_buyer_nav_bar_component__WEBPACK_IMPORTED_MODULE_29__["BuyerNavBarComponent"],
                _admin_nav_bar_admin_nav_bar_component__WEBPACK_IMPORTED_MODULE_30__["AdminNavBarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_32__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"], _user_service_service__WEBPACK_IMPORTED_MODULE_13__["UserServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.myRoute.navigate(["login"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(myRoute) {
        this.myRoute = myRoute;
    }
    AuthService.prototype.sendToken = function (token) {
        localStorage.setItem("users", token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem("users");
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getToken() !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("users");
        this.myRoute.navigate(["login"]);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/buyer-form/buyer-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/buyer-form/buyer-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tp-container {\n    margin-top: 20px;\n    margin-right: 20px;\n    margin-left: 20px;\n}\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXItZm9ybS9idXllci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvYnV5ZXItZm9ybS9idXllci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHAtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/buyer-form/buyer-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/buyer-form/buyer-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-nav-bar></app-buyer-nav-bar>\n\n<div class=\"tp-container\">\n    <form class=\"example-form\" (ngSubmit)=\"upload()\">\n        <mat-card-header>\n            <mat-card-title>Required Crop Details </mat-card-title>\n        </mat-card-header>\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Name</mat-label>\n            <input matInput placeholder=\"Enter Crop Name\" [(ngModel)]=\"cropModel.crop_name\" name=\"crop_name\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Type</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Type\" [(ngModel)]=\"cropModel.crop_type\" name=\"crop_type\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Quantity</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Quantity\" [(ngModel)]=\"cropModel.crop_quantity\" name=\"crop_quantity\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Price</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Price\" [(ngModel)]=\"cropModel.crop_price\" name=\"crop_price\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Quantity Unit </mat-label>\n            <input matInput placeholder=\"Enter Crop Quantity Unit\" value=\"Kg\" [(ngModel)]=\"cropModel.crop_unit_type\" name=\"crop_unit_type\">\n        </mat-form-field>\n\n        <label class=\"btn btn-default\"> <input type=\"file\"\n          (change)=\"selectFile($event)\">\n        </label>\n        <br>\n        <button mat-stroked-button color=\"accent\" [disabled]=\"!selectedFiles\" type=\"submit\" class=\"btn-block\">Add Crop</button>\n\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/buyer-form/buyer-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/buyer-form/buyer-form.component.ts ***!
  \****************************************************/
/*! exports provided: BuyerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerFormComponent", function() { return BuyerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/file-upload */ "./src/app/file-upload.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");








var BuyerFormComponent = /** @class */ (function () {
    function BuyerFormComponent(db, userService, http) {
        this.db = db;
        this.userService = userService;
        this.http = http;
        this.cropModel = {};
        this.selectedFile = null;
        this.progress = { percentage: 0 };
        this.basePath = '/uploads_buyer';
    }
    BuyerFormComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
    };
    BuyerFormComponent.prototype.sendFormData = function () {
        // alert(JSON.stringify(this.cropModel))
        this.cropModel.posted_user_email = this.new_user[0].email;
        this.cropModel.posted_user_role = this.new_user[0].role;
        this.cropModel.posted_user_id = this.new_user[0].id;
        // alert(this.new_user[0].id)
        this.userService.postBuyerProductData(this.cropModel).subscribe(function (data) {
            alert("Details Entered Successfully");
            console.log("Response::" + JSON.stringify(data));
        });
    };
    BuyerFormComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(event);
    };
    // pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    //   const storageRef = firebase.storage().ref();
    //   const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //     (snapshot) => {
    //       // in progress
    //       const snap = snapshot as firebase.storage.UploadTaskSnapshot;
    //       progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
    //     },
    //     (error) => {
    //       // fail
    //       console.log(error);
    //     },
    //     () => {
    //       // success
    //       uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //         console.log('File available at', downloadURL);
    //         fileUpload.url = downloadURL;
    //         fileUpload.name = fileUpload.file.name;
    //         this.saveFileData(fileUpload);
    //       });
    //     }
    //   );
    // }
    // private saveFileData(fileUpload: FileUpload) {
    //   this.db.list(`${this.basePath}/`).push(fileUpload);
    // }
    BuyerFormComponent.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                _this.cropModel.crop_image_url = downloadURL;
                _this.sendFormData();
                // alert("URLL"+fileUpload.url)
                // this.saveFileData(fileUpload);
            });
            // fileUpload.url = uploadTask.snapshot.downloadURL
            // fileUpload.name = fileUpload.file.name
            // this.saveFileData(fileUpload)
            //   fileUpload.url.subscribe(url=>{
            //     if(url){
            //         console.log(url);
            //         //wirte the url to firestore
            //     }
            //  })
        });
    };
    BuyerFormComponent.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    BuyerFormComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    BuyerFormComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.currentFileUpload = new src_app_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](file);
        this.pushFileToStorage(this.currentFileUpload, this.progress);
    };
    BuyerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-form',
            template: __webpack_require__(/*! ./buyer-form.component.html */ "./src/app/buyer-form/buyer-form.component.html"),
            styles: [__webpack_require__(/*! ./buyer-form.component.css */ "./src/app/buyer-form/buyer-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BuyerFormComponent);
    return BuyerFormComponent;
}());



/***/ }),

/***/ "./src/app/buyer-nav-bar/buyer-nav-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/buyer-nav-bar/buyer-nav-bar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eWVyLW5hdi1iYXIvYnV5ZXItbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/buyer-nav-bar/buyer-nav-bar.component.html":
/*!************************************************************!*\
  !*** ./src/app/buyer-nav-bar/buyer-nav-bar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n\n            <a class=\"navbar-brand\" href=\"#\" style=\"font-size: 16px;\">Farmer Assistant Web Service</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/crops\">Browse Crops <span class=\"sr-only\">(current)</span></a></li>\n                <li class=\"active\"><a routerLink=\"/buyer_form\">Post Advertisement <span class=\"sr-only\"></span></a></li>\n                <li style=\"padding-left:15px;\"><button (click)=\"logOut()\" class=\"btn btn-danger navbar-btn\">Log Out</button></li>\n\n            </ul>\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/buyer-nav-bar/buyer-nav-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/buyer-nav-bar/buyer-nav-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: BuyerNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerNavBarComponent", function() { return BuyerNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BuyerNavBarComponent = /** @class */ (function () {
    function BuyerNavBarComponent(router) {
        this.router = router;
    }
    BuyerNavBarComponent.prototype.ngOnInit = function () {
    };
    BuyerNavBarComponent.prototype.logOut = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
        if (this.new_user) {
            localStorage.removeItem('users');
            this.router.navigate(['/home']);
            window.location.reload();
        }
        else {
        }
    };
    BuyerNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-nav-bar',
            template: __webpack_require__(/*! ./buyer-nav-bar.component.html */ "./src/app/buyer-nav-bar/buyer-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./buyer-nav-bar.component.css */ "./src/app/buyer-nav-bar/buyer-nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuyerNavBarComponent);
    return BuyerNavBarComponent;
}());



/***/ }),

/***/ "./src/app/buyers/buyers.component.css":
/*!*********************************************!*\
  !*** ./src/app/buyers/buyers.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eWVycy9idXllcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/buyers/buyers.component.html":
/*!**********************************************!*\
  !*** ./src/app/buyers/buyers.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buyers/buyers.component.ts":
/*!********************************************!*\
  !*** ./src/app/buyers/buyers.component.ts ***!
  \********************************************/
/*! exports provided: BuyersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersComponent", function() { return BuyersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuyersComponent = /** @class */ (function () {
    function BuyersComponent() {
    }
    BuyersComponent.prototype.ngOnInit = function () {
    };
    BuyersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyers',
            template: __webpack_require__(/*! ./buyers.component.html */ "./src/app/buyers/buyers.component.html"),
            styles: [__webpack_require__(/*! ./buyers.component.css */ "./src/app/buyers/buyers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuyersComponent);
    return BuyersComponent;
}());



/***/ }),

/***/ "./src/app/complaint-status/complaint-status.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/complaint-status/complaint-status.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n@charset \"UTF-8\";\nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 300;\n    line-height: 1.42em;\n    color: #A7A1AE;\n    background-color: #1F2739;\n}\nh1 {\n    font-size: 3em;\n    font-weight: 300;\n    line-height: 1em;\n    text-align: center;\n    color: #4DC3FA;\n}\nh2 {\n    font-size: 1em;\n    font-weight: 300;\n    text-align: center;\n    display: block;\n    line-height: 1em;\n    padding-bottom: 2em;\n    color: #FB667A;\n}\nh2 a {\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #FB667A;\n    text-decoration: none;\n}\n.blue {\n    color: #185875;\n}\n.yellow {\n    color: #FFF842;\n}\n.container th h1 {\n    font-weight: bold;\n    font-size: 1em;\n    text-align: left;\n    color: #185875;\n}\n.container td {\n    font-weight: normal;\n    font-size: 1em;\n    box-shadow: 0 2px 2px -2px #0E1119;\n}\n.container {\n    text-align: left;\n    overflow: hidden;\n    width: 80%;\n    margin: 0 auto;\n    display: table;\n    padding: 0 0 8em 0;\n}\n.container td,\n.container th {\n    padding-bottom: 2%;\n    padding-top: 2%;\n    padding-left: 2%;\n    color: white;\n}\n/* Background-color of the odd rows */\n.container tr:nth-child(odd) {\n    background-color: #323C50;\n}\n/* Background-color of the even rows */\n.container tr:nth-child(even) {\n    background-color: #2C3446;\n}\n.container th {\n    background-color: #1F2739;\n    color: white;\n}\n.container td:first-child {\n    color: #FB667A;\n}\n.container tr:hover {\n    background-color: #464A52;\n    box-shadow: 0 6px 6px -6px #0E1119;\n    color: white;\n}\n.container td:hover {\n    background-color: #FFF842;\n    color: #403E10;\n    font-weight: bold;\n    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;\n    -webkit-transform: translate3d(6px, -6px, 0);\n            transform: translate3d(6px, -6px, 0);\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s;\n    -webkit-transition-property: all;\n    transition-property: all;\n    -webkit-transition-timing-function: line;\n            transition-timing-function: line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxhaW50LXN0YXR1cy9jb21wbGFpbnQtc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJFQUEyRTtBQUQzRSxpQkFBaUI7QUFFakI7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUdmLG1DQUFtQztDQUN0QztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFFRDs7SUFFSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBR0Qsc0NBQXNDO0FBRXRDO0lBQ0ksMEJBQTBCO0NBQzdCO0FBR0QsdUNBQXVDO0FBRXZDO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBRzFCLG1DQUFtQztJQUNuQyxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1SEFBdUg7SUFDdkgsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0NBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcGxhaW50LXN0YXR1cy9jb21wbGFpbnQtc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwKTtcbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyZW07XG4gICAgY29sb3I6ICNBN0ExQUU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjczOTtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0REMzRkE7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gICAgY29sb3I6ICNGQjY2N0E7XG59XG5cbmgyIGEge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI0ZCNjY3QTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogIzE4NTg3NTtcbn1cblxuLnllbGxvdyB7XG4gICAgY29sb3I6ICNGRkY4NDI7XG59XG5cbi5jb250YWluZXIgdGggaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMxODU4NzU7XG59XG5cbi5jb250YWluZXIgdGQge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwYWRkaW5nOiAwIDAgOGVtIDA7XG59XG5cbi5jb250YWluZXIgdGQsXG4uY29udGFpbmVyIHRoIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi8qIEJhY2tncm91bmQtY29sb3Igb2YgdGhlIG9kZCByb3dzICovXG5cbi5jb250YWluZXIgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjNDNTA7XG59XG5cblxuLyogQmFja2dyb3VuZC1jb2xvciBvZiB0aGUgZXZlbiByb3dzICovXG5cbi5jb250YWluZXIgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNDQ2O1xufVxuXG4uY29udGFpbmVyIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyNzM5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICNGQjY2N0E7XG59XG5cbi5jb250YWluZXIgdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjRBNTI7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCA2cHggLTZweCAjMEUxMTE5O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggIzBFMTExOTtcbiAgICBib3gtc2hhZG93OiAwIDZweCA2cHggLTZweCAjMEUxMTE5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB0ZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjg0MjtcbiAgICBjb2xvcjogIzQwM0UxMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAjN0Y3QzIxIC0xcHggMXB4LCAjN0Y3QzIxIC0ycHggMnB4LCAjN0Y3QzIxIC0zcHggM3B4LCAjN0Y3QzIxIC00cHggNHB4LCAjN0Y3QzIxIC01cHggNXB4LCAjN0Y3QzIxIC02cHggNnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNnB4LCAtNnB4LCAwKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/complaint-status/complaint-status.component.html":
/*!******************************************************************!*\
  !*** ./src/app/complaint-status/complaint-status.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supplier-nav-bar></app-supplier-nav-bar>\n\n<div>\n    <table class=\"container\">\n        <thead>\n            <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Complaint Details</th>\n                <th scope=\"col\">Complaint Status</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let product of this.cropModel; let index = index\">\n                <td>{{product['id']}}</td>\n                <td>{{product['complaint_details']}}</td>\n                <td>{{product['complaint_status']}}</td>\n            </tr>\n\n        </tbody>\n    </table>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/complaint-status/complaint-status.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/complaint-status/complaint-status.component.ts ***!
  \****************************************************************/
/*! exports provided: ComplaintStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintStatusComponent", function() { return ComplaintStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");



var ComplaintStatusComponent = /** @class */ (function () {
    function ComplaintStatusComponent(userService) {
        this.userService = userService;
        this.cropModel = {};
    }
    ComplaintStatusComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
        this.sendFormData();
    };
    ComplaintStatusComponent.prototype.sendFormData = function () {
        var _this = this;
        // alert(JSON.stringify(this.cropModel))
        this.search_id = this.new_user[0].id;
        // alert(this.search_id)
        this.userService.getComplaintData(this.search_id).subscribe(function (data) {
            // alert("Details Retrieved Successfully"+JSON.stringify(data))
            _this.cropModel = data;
            console.log("Response::" + JSON.stringify(data));
        });
    };
    ComplaintStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-status',
            template: __webpack_require__(/*! ./complaint-status.component.html */ "./src/app/complaint-status/complaint-status.component.html"),
            styles: [__webpack_require__(/*! ./complaint-status.component.css */ "./src/app/complaint-status/complaint-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], ComplaintStatusComponent);
    return ComplaintStatusComponent;
}());



/***/ }),

/***/ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/farmer-crop-requiements/farmer-crop-requiements.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 400px;\n}\n\n.example-header-image {\n    background-image: url('https://firebasestorage.googleapis.com/v0/b/farmers-app-b1428.appspot.com/o/overviewbg-res.jpg?alt=media&token=1878a15e-6874-4456-bbbe-b466e5512ccc');\n    background-size: cover;\n}\n\n.center {\n    width: 100%;\n    margin: 0 auto;\n    padding: 20px;\n    background: #f0e68c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyLWNyb3AtcmVxdWllbWVudHMvZmFybWVyLWNyb3AtcmVxdWllbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDZLQUE2SztJQUM3Syx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9mYXJtZXItY3JvcC1yZXF1aWVtZW50cy9mYXJtZXItY3JvcC1yZXF1aWVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZmFybWVycy1hcHAtYjE0MjguYXBwc3BvdC5jb20vby9vdmVydmlld2JnLXJlcy5qcGc/YWx0PW1lZGlhJnRva2VuPTE4NzhhMTVlLTY4NzQtNDQ1Ni1iYmJlLWI0NjZlNTUxMmNjYycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jZW50ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2YwZTY4Yztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/farmer-crop-requiements/farmer-crop-requiements.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supplier-nav-bar></app-supplier-nav-bar>\n\n<div class=\"center\" style=\"align-items: center;\" *ngFor=\"let product of this.cropsData; let index = index\">\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>{{product['crop_name']}}</mat-card-title>\n            <mat-card-subtitle>{{product['crop_type']}}</mat-card-subtitle>\n        </mat-card-header>\n        <a routerLink=\"/single_buyer/{{product['id']}}\" routerLinkActive=\"active\">\n            <img mat-card-image src=\"{{product['crop_image_url']}}\" alt=\"Photo of a Rice\"></a>\n        <!-- <mat-card-content>\n      <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n      </p>\n  </mat-card-content> -->\n        <mat-card-actions>\n            <button mat-button>Rs. {{product['crop_price']}}</button>\n            <button mat-button style=\"text-align: right;\">Qty. {{product['crop_quantity']}}  {{product['crop_unit_type']}}</button>\n\n        </mat-card-actions>\n    </mat-card>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/farmer-crop-requiements/farmer-crop-requiements.component.ts ***!
  \******************************************************************************/
/*! exports provided: FarmerCropRequiementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerCropRequiementsComponent", function() { return FarmerCropRequiementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");



var FarmerCropRequiementsComponent = /** @class */ (function () {
    function FarmerCropRequiementsComponent(userService) {
        this.userService = userService;
    }
    FarmerCropRequiementsComponent.prototype.ngOnInit = function () {
        this.getCropsData();
    };
    FarmerCropRequiementsComponent.prototype.getCropsData = function () {
        var _this = this;
        this.userService.getBuyerCropsData().subscribe(function (data) {
            console.log("Retrieved Buyer Crop Data Is:: " + JSON.stringify(data));
            _this.cropsData = data;
        });
    };
    FarmerCropRequiementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmer-crop-requiements',
            template: __webpack_require__(/*! ./farmer-crop-requiements.component.html */ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.html"),
            styles: [__webpack_require__(/*! ./farmer-crop-requiements.component.css */ "./src/app/farmer-crop-requiements/farmer-crop-requiements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], FarmerCropRequiementsComponent);
    return FarmerCropRequiementsComponent;
}());



/***/ }),

/***/ "./src/app/farming-tips/farming-tips.component.css":
/*!*********************************************************!*\
  !*** ./src/app/farming-tips/farming-tips.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n@charset \"UTF-8\";\nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 300;\n    line-height: 1.42em;\n    color: #A7A1AE;\n    background-color: #1F2739;\n}\nh1 {\n    font-size: 3em;\n    font-weight: 300;\n    line-height: 1em;\n    text-align: center;\n    color: #4DC3FA;\n}\nh2 {\n    font-size: 1em;\n    font-weight: 300;\n    text-align: center;\n    display: block;\n    line-height: 1em;\n    padding-bottom: 2em;\n    color: #FB667A;\n}\nh2 a {\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #FB667A;\n    text-decoration: none;\n}\n.blue {\n    color: #185875;\n}\n.yellow {\n    color: #FFF842;\n}\n.container th h1 {\n    font-weight: bold;\n    font-size: 1em;\n    text-align: left;\n    color: #185875;\n}\n.container td {\n    font-weight: normal;\n    font-size: 1em;\n    box-shadow: 0 2px 2px -2px #0E1119;\n}\n.container {\n    text-align: left;\n    overflow: hidden;\n    width: 80%;\n    margin: 0 auto;\n    display: table;\n    padding: 0 0 8em 0;\n}\n.container td,\n.container th {\n    padding-bottom: 2%;\n    padding-top: 2%;\n    padding-left: 2%;\n    color: white;\n}\n/* Background-color of the odd rows */\n.container tr:nth-child(odd) {\n    background-color: #323C50;\n}\n/* Background-color of the even rows */\n.container tr:nth-child(even) {\n    background-color: #2C3446;\n}\n.container th {\n    background-color: #1F2739;\n    color: white;\n}\n.container td:first-child {\n    color: #FB667A;\n}\n.container tr:hover {\n    background-color: #464A52;\n    box-shadow: 0 6px 6px -6px #0E1119;\n    color: white;\n}\n.container td:hover {\n    background-color: #FFF842;\n    color: #403E10;\n    font-weight: bold;\n    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;\n    -webkit-transform: translate3d(6px, -6px, 0);\n            transform: translate3d(6px, -6px, 0);\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s;\n    -webkit-transition-property: all;\n    transition-property: all;\n    -webkit-transition-timing-function: line;\n            transition-timing-function: line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWluZy10aXBzL2Zhcm1pbmctdGlwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyRUFBMkU7QUFEM0UsaUJBQWlCO0FBRWpCO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFHZixtQ0FBbUM7Q0FDdEM7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBRUQ7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtDQUNoQjtBQUdELHNDQUFzQztBQUV0QztJQUNJLDBCQUEwQjtDQUM3QjtBQUdELHVDQUF1QztBQUV2QztJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUcxQixtQ0FBbUM7SUFDbkMsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUhBQXVIO0lBQ3ZILDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIseUNBQWlDO1lBQWpDLGlDQUFpQztDQUNwQyIsImZpbGUiOiJzcmMvYXBwL2Zhcm1pbmctdGlwcy9mYXJtaW5nLXRpcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDApO1xuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDJlbTtcbiAgICBjb2xvcjogI0E3QTFBRTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyNzM5O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzREQzNGQTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICBjb2xvcjogI0ZCNjY3QTtcbn1cblxuaDIgYSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjRkI2NjdBO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsdWUge1xuICAgIGNvbG9yOiAjMTg1ODc1O1xufVxuXG4ueWVsbG93IHtcbiAgICBjb2xvcjogI0ZGRjg0Mjtcbn1cblxuLmNvbnRhaW5lciB0aCBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzE4NTg3NTtcbn1cblxuLmNvbnRhaW5lciB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG59XG5cbi5jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBhZGRpbmc6IDAgMCA4ZW0gMDtcbn1cblxuLmNvbnRhaW5lciB0ZCxcbi5jb250YWluZXIgdGgge1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLyogQmFja2dyb3VuZC1jb2xvciBvZiB0aGUgb2RkIHJvd3MgKi9cblxuLmNvbnRhaW5lciB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyM0M1MDtcbn1cblxuXG4vKiBCYWNrZ3JvdW5kLWNvbG9yIG9mIHRoZSBldmVuIHJvd3MgKi9cblxuLmNvbnRhaW5lciB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM0NDY7XG59XG5cbi5jb250YWluZXIgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI3Mzk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogI0ZCNjY3QTtcbn1cblxuLmNvbnRhaW5lciB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NEE1MjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDZweCA2cHggLTZweCAjMEUxMTE5O1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHRkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGODQyO1xuICAgIGNvbG9yOiAjNDAzRTEwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6ICM3RjdDMjEgLTFweCAxcHgsICM3RjdDMjEgLTJweCAycHgsICM3RjdDMjEgLTNweCAzcHgsICM3RjdDMjEgLTRweCA0cHgsICM3RjdDMjEgLTVweCA1cHgsICM3RjdDMjEgLTZweCA2cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2cHgsIC02cHgsIDApO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/farming-tips/farming-tips.component.html":
/*!**********************************************************!*\
  !*** ./src/app/farming-tips/farming-tips.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supplier-nav-bar></app-supplier-nav-bar>\n\n\n<div>\n    <table class=\"container\">\n        <thead>\n            <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Farming Tips</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let product of this.cropModel; let index = index\">\n                <td>{{product['id']}}</td>\n                <td>{{product['farming_tip']}}</td>\n            </tr>\n\n        </tbody>\n    </table>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/farming-tips/farming-tips.component.ts":
/*!********************************************************!*\
  !*** ./src/app/farming-tips/farming-tips.component.ts ***!
  \********************************************************/
/*! exports provided: FarmingTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmingTipsComponent", function() { return FarmingTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");



var FarmingTipsComponent = /** @class */ (function () {
    function FarmingTipsComponent(userService) {
        this.userService = userService;
        this.cropModel = {};
    }
    FarmingTipsComponent.prototype.ngOnInit = function () {
        this.sendFormData();
    };
    FarmingTipsComponent.prototype.sendFormData = function () {
        // alert(JSON.stringify(this.cropModel))
        // alert(this.search_id)
        var _this = this;
        this.userService.getFarmingTips().subscribe(function (data) {
            // alert("Details Retrieved Successfully"+JSON.stringify(data))
            _this.cropModel = data;
            console.log("Response::" + JSON.stringify(data));
        });
    };
    FarmingTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farming-tips',
            template: __webpack_require__(/*! ./farming-tips.component.html */ "./src/app/farming-tips/farming-tips.component.html"),
            styles: [__webpack_require__(/*! ./farming-tips.component.css */ "./src/app/farming-tips/farming-tips.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], FarmingTipsComponent);
    return FarmingTipsComponent;
}());



/***/ }),

/***/ "./src/app/file-upload.ts":
/*!********************************!*\
  !*** ./src/app/file-upload.ts ***!
  \********************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0b1 | 201101 \n   NOTE: WORK IN PROGRESS\n   USE WITH CAUTION AND TEST WITH ABANDON */\n    \n    html,\n    body,\n    div,\n    span,\n    applet,\n    object,\n    iframe,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    blockquote,\n    pre,\n    a,\n    abbr,\n    acronym,\n    address,\n    big,\n    cite,\n    code,\n    del,\n    dfn,\n    em,\n    img,\n    ins,\n    kbd,\n    q,\n    s,\n    samp,\n    small,\n    strike,\n    strong,\n    sub,\n    sup,\n    tt,\n    var,\n    b,\n    u,\n    i,\n    center,\n    dl,\n    dt,\n    dd,\n    ol,\n    ul,\n    li,\n    fieldset,\n    form,\n    label,\n    legend,\n    table,\n    caption,\n    tbody,\n    tfoot,\n    thead,\n    tr,\n    th,\n    td,\n    article,\n    aside,\n    canvas,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    section,\n    summary,\n    time,\n    mark,\n    audio,\n    video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n    }\n    \n    /* HTML5 display-role reset for older browsers */\n    \n    article,\n    aside,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    section {\n        display: block;\n    }\n    \n    body {\n        line-height: 1;\n    }\n    \n    ol,\n    ul {\n        list-style: none;\n    }\n    \n    blockquote,\n    q {\n        quotes: none;\n    }\n    \n    blockquote:before,\n    blockquote:after,\n    q:before,\n    q:after {\n        content: ’’;\n        content: none;\n    }\n    \n    /* remember to highlight inserts somehow! */\n    \n    ins {\n        text-decoration: none;\n    }\n    \n    del {\n        text-decoration: line-through;\n    }\n    \n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    \n    .bgimg {\n        background: url('Switch_FarmTogether_01.jpg') no-repeat center center fixed;\n    }\n    \n    .login-wrapper .example-full-width,\n    .login-wrapper .btn-block {\n        width: 100%;\n    }\n    \n    .div1 {\n        width: 300px;\n        height: 100px;\n        /* background-color: red; */\n        position: relative;\n        top: 100px;\n        bottom: 0;\n        left: 30px;\n        right: 0;\n        margin: auto;\n    }\n    \n    @media (min-width: 800px) {\n        .nh1 {\n            font-size: 56px;\n            color: #C70039;\n            font-weight: bold;\n        }\n    }\n    \n    @media (max-width: 800px) {\n        .nh1 {\n            font-size: 39.3px;\n            color: #C70039;\n            font-weight: bold;\n        }\n        /* CSS that should be displayed if width is equal to or less than 800px goes here */\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJOzs7NENBR3dDOztJQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBOEVJLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHlCQUF5QjtLQUM1Qjs7SUFDRCxpREFBaUQ7O0lBRWpEOzs7Ozs7Ozs7OztRQVdJLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEOztRQUVJLGlCQUFpQjtLQUNwQjs7SUFFRDs7UUFFSSxhQUFhO0tBQ2hCOztJQUVEOzs7O1FBSUksWUFBWTtRQUNaLGNBQWM7S0FDakI7O0lBQ0QsNENBQTRDOztJQUU1QztRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLDhCQUE4QjtLQUNqQzs7SUFFRDtRQUNJLDBCQUEwQjtRQUMxQixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSw0RUFBZ0c7S0FDbkc7O0lBRUQ7O1FBRUksWUFBWTtLQUNmOztJQUVEO1FBQ0ksYUFBYTtRQUNiLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztRQUNYLFNBQVM7UUFDVCxhQUFhO0tBQ2hCOztJQUVEO1FBQ0k7WUFDSSxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGtCQUFrQjtTQUNyQjtLQUNKOztJQUVEO1FBQ0k7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGtCQUFrQjtTQUNyQjtRQUNELG9GQUFvRjtLQUN2RiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjBiMSB8IDIwMTEwMSBcbiAgIE5PVEU6IFdPUksgSU4gUFJPR1JFU1NcbiAgIFVTRSBXSVRIIENBVVRJT04gQU5EIFRFU1QgV0lUSCBBQkFORE9OICovXG4gICAgXG4gICAgaHRtbCxcbiAgICBib2R5LFxuICAgIGRpdixcbiAgICBzcGFuLFxuICAgIGFwcGxldCxcbiAgICBvYmplY3QsXG4gICAgaWZyYW1lLFxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0LFxuICAgIGg1LFxuICAgIGg2LFxuICAgIHAsXG4gICAgYmxvY2txdW90ZSxcbiAgICBwcmUsXG4gICAgYSxcbiAgICBhYmJyLFxuICAgIGFjcm9ueW0sXG4gICAgYWRkcmVzcyxcbiAgICBiaWcsXG4gICAgY2l0ZSxcbiAgICBjb2RlLFxuICAgIGRlbCxcbiAgICBkZm4sXG4gICAgZW0sXG4gICAgaW1nLFxuICAgIGlucyxcbiAgICBrYmQsXG4gICAgcSxcbiAgICBzLFxuICAgIHNhbXAsXG4gICAgc21hbGwsXG4gICAgc3RyaWtlLFxuICAgIHN0cm9uZyxcbiAgICBzdWIsXG4gICAgc3VwLFxuICAgIHR0LFxuICAgIHZhcixcbiAgICBiLFxuICAgIHUsXG4gICAgaSxcbiAgICBjZW50ZXIsXG4gICAgZGwsXG4gICAgZHQsXG4gICAgZGQsXG4gICAgb2wsXG4gICAgdWwsXG4gICAgbGksXG4gICAgZmllbGRzZXQsXG4gICAgZm9ybSxcbiAgICBsYWJlbCxcbiAgICBsZWdlbmQsXG4gICAgdGFibGUsXG4gICAgY2FwdGlvbixcbiAgICB0Ym9keSxcbiAgICB0Zm9vdCxcbiAgICB0aGVhZCxcbiAgICB0cixcbiAgICB0aCxcbiAgICB0ZCxcbiAgICBhcnRpY2xlLFxuICAgIGFzaWRlLFxuICAgIGNhbnZhcyxcbiAgICBkZXRhaWxzLFxuICAgIGZpZ2NhcHRpb24sXG4gICAgZmlndXJlLFxuICAgIGZvb3RlcixcbiAgICBoZWFkZXIsXG4gICAgaGdyb3VwLFxuICAgIG1lbnUsXG4gICAgbmF2LFxuICAgIHNlY3Rpb24sXG4gICAgc3VtbWFyeSxcbiAgICB0aW1lLFxuICAgIG1hcmssXG4gICAgYXVkaW8sXG4gICAgdmlkZW8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgfVxuICAgIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgICBcbiAgICBhcnRpY2xlLFxuICAgIGFzaWRlLFxuICAgIGRldGFpbHMsXG4gICAgZmlnY2FwdGlvbixcbiAgICBmaWd1cmUsXG4gICAgZm9vdGVyLFxuICAgIGhlYWRlcixcbiAgICBoZ3JvdXAsXG4gICAgbWVudSxcbiAgICBuYXYsXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBcbiAgICBib2R5IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICAgIFxuICAgIG9sLFxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgYmxvY2txdW90ZSxcbiAgICBxIHtcbiAgICAgICAgcXVvdGVzOiBub25lO1xuICAgIH1cbiAgICBcbiAgICBibG9ja3F1b3RlOmJlZm9yZSxcbiAgICBibG9ja3F1b3RlOmFmdGVyLFxuICAgIHE6YmVmb3JlLFxuICAgIHE6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiDigJnigJk7XG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxuICAgIC8qIHJlbWVtYmVyIHRvIGhpZ2hsaWdodCBpbnNlcnRzIHNvbWVob3chICovXG4gICAgXG4gICAgaW5zIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBcbiAgICBkZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgXG4gICAgdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgXG4gICAgLmJnaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL1N3aXRjaF9GYXJtVG9nZXRoZXJfMDEuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXG4gICAgLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuZGl2MSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIC5uaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICAgICAgY29sb3I6ICNDNzAwMzk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgLm5oMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM5LjNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjQzcwMDM5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ1NTIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBpZiB3aWR0aCBpcyBlcXVhbCB0byBvciBsZXNzIHRoYW4gODAwcHggZ29lcyBoZXJlICovXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg\" style=\"width: 100%; height: 100%;\">\n\n    <div class=\"div1\">\n        <h1 class=\"nh1\">Farmer Assistant Web Service</h1>\n        <a routerLink=\"/login\" routerLinkActive=\"active\">\n            <button mat-raised-button color=\"primary\">LOGIN/REGISTER</button></a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router) {
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
        if (this.new_user) {
            localStorage.clear();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(http://t.wallpaperweb.org/wallpaper/nature/1920x1200/Rural_land.jpg);\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\n.app-header {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n.login-wrapper {\n    height: 100%;\n}\n\n.positronx {\n    text-decoration: none;\n    color: #ffffff;\n}\n\n.box {\n    position: relative;\n    top: 0;\n    opacity: 1;\n    float: left;\n    padding: 60px 50px 40px 50px;\n    width: 100%;\n    background: #fff;\n    border-radius: 10px;\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    z-index: 5;\n    max-width: 330px;\n}\n\n.box.back {\n    transform: scale(.95);\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    top: -20px;\n    opacity: .8;\n    z-index: -1;\n}\n\n.box:before {\n    content: \"\";\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    position: absolute;\n    top: -10px;\n    background: rgba(255, 255, 255, .6);\n    left: 0;\n    transform: scale(.95);\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    z-index: -1;\n}\n\n.login-wrapper .example-form {\n    min-width: 100%;\n    max-width: 300px;\n    width: 100%;\n}\n\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n    width: 100%;\n}\n\n.login-wrapper mat-card-header {\n    text-align: center;\n    width: 100%;\n    display: block;\n    font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n    font-size: 30px;\n    margin: 0;\n}\n\n.login-wrapper .mat-card {\n    padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-stroked-button {\n    border: 1px solid currentColor;\n    line-height: 54px;\n    background: #FFF7FA;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n    padding: 0.8375em 0;\n}\n\n.login-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLDJGQUEyRjtJQUMzRiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0NBQWtDO0NBQ3JDOztBQUVEO0lBQ0ksMEJBQStCO1lBQS9CLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLCtHQUErRztDQUNsSDs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjs7QUFFRDs7SUFFSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtDQUNiOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLHlCQUF3QjtZQUF4Qix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly90LndhbGxwYXBlcndlYi5vcmcvd2FsbHBhcGVyL25hdHVyZS8xOTIweDEyMDAvUnVyYWxfbGFuZC5qcGcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9zaXRyb254IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB6LWluZGV4OiA1O1xuICAgIG1heC13aWR0aDogMzMwcHg7XG59XG5cbi5ib3guYmFjayB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgdG9wOiAtMjBweDtcbiAgICBvcGFjaXR5OiAuODtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJveDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXG4ubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDQwcHggNzBweCA1MHB4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjdGQTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n\n\n            <a class=\"navbar-brand\" href=\"#\" style=\"font-size: 20px; text-align: center;\">Farmer Assistant Web Service</a>\n        </div>\n\n    </div>\n</nav>\n\n<body>\n    <div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n        <mat-card class=\"box\">\n            <mat-card-header>\n                <mat-card-title>LOG IN</mat-card-title>\n            </mat-card-header>\n            <div class=\"example-button-row\">\n\n                <button mat-raised-button color=\"primary\" (click)=\"setBuyer()\" *ngIf=\"buyer_btn\">Buyer</button>\n                <button mat-raised-button color=\"accent\" (click)=\"setSupplier()\" *ngIf=\"supplier_btn\">Supplier</button>\n            </div>\n            <form class=\"example-form\" (ngSubmit)=\"compareUserNameAndPassword()\">\n\n                <mat-card-content>\n                    <mat-form-field>\n                        <input name=\"u_name\" [(ngModel)]=\"u_name\" matInput placeholder=\"Email\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <input matInput name=\"p_word\" type=\"password\" [(ngModel)]=\"p_word\" placeholder=\"Password\">\n                    </mat-form-field>\n                </mat-card-content>\n                <button type=\"submit\" mat-stroked-button color=\"accent\" class=\"btn-block\">Log in</button>\n                <!-- <a routerLink=\"/buyers\"> <button mat-stroked-button color=\"accent\" class=\"btn-block\">Log in</button></a> -->\n            </form>\n            Not Registered ?\n            <a routerLink=\"/register\">Register!</a>\n        </mat-card>\n\n    </div>\n\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.buyer_btn = true;
        this.supplier_btn = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.compareUserNameAndPassword = function () {
        var _this = this;
        if (this.u_name == 'admin') {
            this.router.navigate(['/admin_page']);
        }
        else {
            this.userService.getAccountData(this.u_name, this.p_word, this.role).subscribe(function (data) {
                if (data) {
                    _this.userData = JSON.stringify(data);
                    console.log("DATA retrieved is ::" + _this.userData);
                    localStorage.clear();
                    localStorage.setItem('users', JSON.stringify(data));
                    if (!data[0]) {
                        alert("Wrong Credentials :: Unsuccessfull Login");
                    }
                    else if (data[0]['role'] == 'Supplier') {
                        alert("Successful Login !!!");
                        _this.router.navigate(['/farmer']);
                    }
                    else if (data[0]['role'] == 'Buyer') {
                        alert("Successful Login !!!");
                        _this.router.navigate(['/crops']);
                    }
                }
            });
        }
        //   if(this.buyer=='buyer'){
        // this.userName = 'gohar';
        //   this.password = 'mgw@123';
        //   if (this.u_name == this.userName && this.p_word == this.password) {
        //     alert("Login Successful");
        //     this.router.navigate(['/buyers']);
        //   }
        //   else {
        //     alert("Wrong Username or Password")
        //   }
        // }else{
        //   alert("Invalid User Type")
        //   window.location.reload();
        // }
    };
    LoginComponent.prototype.setBuyer = function () {
        this.supplier_btn = false;
        this.role = 'buyer';
    };
    LoginComponent.prototype.setSupplier = function () {
        this.buyer_btn = false;
        this.role = 'supplier';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/post-complaints-page/post-complaints-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/post-complaints-page/post-complaints-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtY29tcGxhaW50cy1wYWdlL3Bvc3QtY29tcGxhaW50cy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/post-complaints-page/post-complaints-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/post-complaints-page/post-complaints-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supplier-nav-bar></app-supplier-nav-bar>\n\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n        <mat-card-header>\n            <mat-card-title>Post Complaint</mat-card-title>\n        </mat-card-header>\n\n        <form (ngSubmit)=\"sendFormData()\">\n\n            <textarea cols=\"50\" rows=\"5\" style=\"border:solid 1px orange; width: 100%;\" matInput placeholder=\"Complaint Description\" [(ngModel)]=\"cropModel.complaint_details\" name=\"complaint_details\">\n                      </textarea>\n\n\n\n            <button mat-stroked-button color=\"primary\" type=\"submit\" class=\"btn-block\">Submit Complaint</button>\n\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/post-complaints-page/post-complaints-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/post-complaints-page/post-complaints-page.component.ts ***!
  \************************************************************************/
/*! exports provided: PostComplaintsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComplaintsPageComponent", function() { return PostComplaintsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");




var PostComplaintsPageComponent = /** @class */ (function () {
    function PostComplaintsPageComponent(userService, http) {
        this.userService = userService;
        this.http = http;
        this.cropModel = {};
    }
    PostComplaintsPageComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
    };
    PostComplaintsPageComponent.prototype.sendFormData = function () {
        // alert(JSON.stringify(this.cropModel))
        this.cropModel.complaint_by_farmer_id = this.new_user[0].id;
        this.cropModel.complaint_status = 0;
        this.userService.postComplaintData(this.cropModel).subscribe(function (data) {
            alert("Details Entered Successfully");
            console.log("Response::" + JSON.stringify(data));
        });
    };
    PostComplaintsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-complaints-page',
            template: __webpack_require__(/*! ./post-complaints-page.component.html */ "./src/app/post-complaints-page/post-complaints-page.component.html"),
            styles: [__webpack_require__(/*! ./post-complaints-page.component.css */ "./src/app/post-complaints-page/post-complaints-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostComplaintsPageComponent);
    return PostComplaintsPageComponent;
}());



/***/ }),

/***/ "./src/app/post-farming-tips/post-farming-tips.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/post-farming-tips/post-farming-tips.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZmFybWluZy10aXBzL3Bvc3QtZmFybWluZy10aXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/post-farming-tips/post-farming-tips.component.html":
/*!********************************************************************!*\
  !*** ./src/app/post-farming-tips/post-farming-tips.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-nav-bar></app-admin-nav-bar>\n\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n        <mat-card-header>\n            <mat-card-title>Post Tips</mat-card-title>\n        </mat-card-header>\n\n        <form (ngSubmit)=\"sendFormData()\" style=\"padding-right: 20px ;\">\n\n            <textarea cols=\"50\" rows=\"5\" style=\"border:solid 1px orange; width: 100%;\" matInput placeholder=\"Farming Tip\" [(ngModel)]=\"farmingTip.farming_tip\" name=\"farming_tip\">\n                    </textarea>\n\n\n\n            <button mat-stroked-button color=\"primary\" type=\"submit\" class=\"btn-block\">Submit Tip</button>\n\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/post-farming-tips/post-farming-tips.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/post-farming-tips/post-farming-tips.component.ts ***!
  \******************************************************************/
/*! exports provided: PostFarmingTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFarmingTipsComponent", function() { return PostFarmingTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PostFarmingTipsComponent = /** @class */ (function () {
    function PostFarmingTipsComponent(userService, http) {
        this.userService = userService;
        this.http = http;
        this.farmingTip = {};
    }
    PostFarmingTipsComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
    };
    PostFarmingTipsComponent.prototype.sendFormData = function () {
        // alert(JSON.stringify(this.farmingTip))
        this.userService.postFarmingTipData(this.farmingTip).subscribe(function (data) {
            alert("Details Entered Successfully");
            console.log("Response::" + JSON.stringify(data));
        });
    };
    PostFarmingTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-farming-tips',
            template: __webpack_require__(/*! ./post-farming-tips.component.html */ "./src/app/post-farming-tips/post-farming-tips.component.html"),
            styles: [__webpack_require__(/*! ./post-farming-tips.component.css */ "./src/app/post-farming-tips/post-farming-tips.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PostFarmingTipsComponent);
    return PostFarmingTipsComponent;
}());



/***/ }),

/***/ "./src/app/registration-for-login/registration-for-login.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/registration-for-login/registration-for-login.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(http://t.wallpaperweb.org/wallpaper/nature/1920x1200/Rural_land.jpg);\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\n.app-header {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n.login-wrapper {\n    height: 100%;\n}\n\n.positronx {\n    text-decoration: none;\n    color: #ffffff;\n}\n\n.box {\n    position: relative;\n    top: 0;\n    opacity: 1;\n    float: left;\n    padding: 60px 50px 40px 50px;\n    width: 100%;\n    background: #fff;\n    border-radius: 10px;\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    z-index: 5;\n    max-width: 330px;\n}\n\n.box.back {\n    transform: scale(.95);\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    top: -20px;\n    opacity: .8;\n    z-index: -1;\n}\n\n.box:before {\n    content: \"\";\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    position: absolute;\n    top: -10px;\n    background: rgba(255, 255, 255, .6);\n    left: 0;\n    transform: scale(.95);\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    z-index: -1;\n}\n\n.login-wrapper .example-form {\n    min-width: 100%;\n    max-width: 300px;\n    width: 100%;\n}\n\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n    width: 100%;\n}\n\n.login-wrapper mat-card-header {\n    text-align: center;\n    width: 100%;\n    display: block;\n    font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n    font-size: 30px;\n    margin: 0;\n}\n\n.login-wrapper .mat-card {\n    padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-stroked-button {\n    border: 1px solid currentColor;\n    line-height: 54px;\n    background: #FFF7FA;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n    padding: 0.8375em 0;\n}\n\n.login-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uLWZvci1sb2dpbi9yZWdpc3RyYXRpb24tZm9yLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwyRkFBMkY7SUFDM0YsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLDBCQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCwrR0FBK0c7Q0FDbEg7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0kscUJBQWM7SUFBZCxjQUFjO0lBQ2QsMEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQix5QkFBd0I7WUFBeEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uLWZvci1sb2dpbi9yZWdpc3RyYXRpb24tZm9yLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL3Qud2FsbHBhcGVyd2ViLm9yZy93YWxscGFwZXIvbmF0dXJlLzE5MjB4MTIwMC9SdXJhbF9sYW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG59XG5cbi5sb2dpbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3NpdHJvbngge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHotaW5kZXg6IDU7XG4gICAgbWF4LXdpZHRoOiAzMzBweDtcbn1cblxuLmJveC5iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYm94OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcbi5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registration-for-login/registration-for-login.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/registration-for-login/registration-for-login.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n\n\n            <a class=\"navbar-brand\" href=\"#\" style=\"font-size: 20px; text-align: center;\">Farmer Assistant Web Service</a>\n        </div>\n\n    </div>\n</nav>\n\n<body>\n    <div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-card class=\"box\">\n            <mat-card-header>\n                <mat-card-title>Register</mat-card-title>\n            </mat-card-header>\n\n            <form class=\"example-form\" (ngSubmit)=\"getUserData()\">\n\n                <mat-card-content>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Username\" [(ngModel)]=\"accountsModel.username\" name=\"username\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Email\" [(ngModel)]=\"accountsModel.email\" name=\"email\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Password\" type=\"password\" maxlength=\"10\" [(ngModel)]=\"accountsModel.password\" name=\"password\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Confirm Password\" maxlength=\"10\" type=\"password\" [(ngModel)]=\"accountsModel.confirm_password\" name=\"confirm_password\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input maxlength=\"10\" matInput placeholder=\"Mobile\" [(ngModel)]=\"accountsModel.mobile\" name=\"mobile\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Choose a role...</mat-label>\n                        <mat-select name=\"role\" placeholder=\"Role\" [(ngModel)]=\"role\">\n                            <mat-option value=\"Buyer\">Buyer </mat-option>\n                            <mat-option value=\"Supplier\">Supplier\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </mat-card-content>\n\n                <button mat-stroked-button color=\"accent\" type=\"submit\" class=\"btn-block\">Register</button>\n\n            </form>\n        </mat-card>\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/registration-for-login/registration-for-login.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/registration-for-login/registration-for-login.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegistrationForLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationForLoginComponent", function() { return RegistrationForLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationForLoginComponent = /** @class */ (function () {
    function RegistrationForLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.accountsModel = {};
    }
    RegistrationForLoginComponent.prototype.ngOnInit = function () {
    };
    RegistrationForLoginComponent.prototype.selectChangeHandler = function (event) {
        this.role = event.target.value;
        console.log(this.role);
    };
    RegistrationForLoginComponent.prototype.getUserData = function () {
        var _this = this;
        this.accountsModel.role = this.role;
        // alert("Accounts Model : " + JSON.stringify(this.accountsModel));
        if (this.accountsModel.password == this.accountsModel.confirm_password) {
            this.userService.postAccountData(this.accountsModel).subscribe(function (data) {
                alert("User Registered Successfully");
                console.log("Response::" + JSON.stringify(data));
                _this.router.navigate(['/login']);
            });
        }
        else {
            alert("Passwords Do Not Match");
        }
        // this.userService.getNews().subscribe(heroes => this.userData = heroes);
        // alert(this.userData);
        // console.log(this.userData);
    };
    RegistrationForLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-for-login',
            template: __webpack_require__(/*! ./registration-for-login.component.html */ "./src/app/registration-for-login/registration-for-login.component.html"),
            styles: [__webpack_require__(/*! ./registration-for-login.component.css */ "./src/app/registration-for-login/registration-for-login.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationForLoginComponent);
    return RegistrationForLoginComponent;
}());



/***/ }),

/***/ "./src/app/single-crop/single-crop.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-crop/single-crop.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n@charset \"UTF-8\";\nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 300;\n    line-height: 1.42em;\n    color: #A7A1AE;\n    background-color: #1F2739;\n}\nh1 {\n    font-size: 3em;\n    font-weight: 300;\n    line-height: 1em;\n    text-align: center;\n    color: #4DC3FA;\n}\nh2 {\n    font-size: 1em;\n    font-weight: 300;\n    text-align: center;\n    display: block;\n    line-height: 1em;\n    padding-bottom: 2em;\n    color: #FB667A;\n}\nh2 a {\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #FB667A;\n    text-decoration: none;\n}\n.blue {\n    color: #185875;\n}\n.yellow {\n    color: #FFF842;\n}\n.container th h1 {\n    font-weight: bold;\n    font-size: 1em;\n    text-align: left;\n    color: #185875;\n}\n.container td {\n    font-weight: normal;\n    font-size: 1em;\n    box-shadow: 0 2px 2px -2px #0E1119;\n}\n.container {\n    text-align: left;\n    overflow: hidden;\n    width: 80%;\n    margin: 0 auto;\n    display: table;\n    padding: 0 0 8em 0;\n}\n.container td,\n.container th {\n    padding-bottom: 2%;\n    padding-top: 2%;\n    padding-left: 2%;\n    color: white;\n}\n/* Background-color of the odd rows */\n.container tr:nth-child(odd) {\n    background-color: #323C50;\n}\n/* Background-color of the even rows */\n.container tr:nth-child(even) {\n    background-color: #2C3446;\n}\n.container th {\n    background-color: #1F2739;\n    color: white;\n}\n.container td:first-child {\n    color: #FB667A;\n}\n.container tr:hover {\n    background-color: #464A52;\n    box-shadow: 0 6px 6px -6px #0E1119;\n    color: white;\n}\n.container td:hover {\n    background-color: #FFF842;\n    color: #403E10;\n    font-weight: bold;\n    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;\n    -webkit-transform: translate3d(6px, -6px, 0);\n            transform: translate3d(6px, -6px, 0);\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s;\n    -webkit-transition-property: all;\n    transition-property: all;\n    -webkit-transition-timing-function: line;\n            transition-timing-function: line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLWNyb3Avc2luZ2xlLWNyb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkVBQTJFO0FBRDNFLGlCQUFpQjtBQUVqQjtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBR2YsbUNBQW1DO0NBQ3RDO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUVEOztJQUVJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7QUFHRCxzQ0FBc0M7QUFFdEM7SUFDSSwwQkFBMEI7Q0FDN0I7QUFHRCx1Q0FBdUM7QUFFdkM7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFHMUIsbUNBQW1DO0lBQ25DLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVIQUF1SDtJQUN2SCw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEMiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtY3JvcC9zaW5nbGUtY3JvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDcwMCk7XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS40MmVtO1xuICAgIGNvbG9yOiAjQTdBMUFFO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI3Mzk7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNERDM0ZBO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIGNvbG9yOiAjRkI2NjdBO1xufVxuXG5oMiBhIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNGQjY2N0E7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6ICMxODU4NzU7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjRkZGODQyO1xufVxuXG4uY29udGFpbmVyIHRoIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMTg1ODc1O1xufVxuXG4uY29udGFpbmVyIHRkIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcGFkZGluZzogMCAwIDhlbSAwO1xufVxuXG4uY29udGFpbmVyIHRkLFxuLmNvbnRhaW5lciB0aCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiBCYWNrZ3JvdW5kLWNvbG9yIG9mIHRoZSBvZGQgcm93cyAqL1xuXG4uY29udGFpbmVyIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzQzUwO1xufVxuXG5cbi8qIEJhY2tncm91bmQtY29sb3Igb2YgdGhlIGV2ZW4gcm93cyAqL1xuXG4uY29udGFpbmVyIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMzQ0Njtcbn1cblxuLmNvbnRhaW5lciB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjczOTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjRkI2NjdBO1xufVxuXG4uY29udGFpbmVyIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0QTUyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggIzBFMTExOTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggIzBFMTExOTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgdGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY4NDI7XG4gICAgY29sb3I6ICM0MDNFMTA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNoYWRvdzogIzdGN0MyMSAtMXB4IDFweCwgIzdGN0MyMSAtMnB4IDJweCwgIzdGN0MyMSAtM3B4IDNweCwgIzdGN0MyMSAtNHB4IDRweCwgIzdGN0MyMSAtNXB4IDVweCwgIzdGN0MyMSAtNnB4IDZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDZweCwgLTZweCwgMCk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/single-crop/single-crop.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-crop/single-crop.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-nav-bar></app-buyer-nav-bar>\n\n\n<div>\n    <table class=\"container\" style=\"margin-left: 10px; margin-right: 10px;\">\n        <tr>\n            <th scope=\"col\">Supplier Name</th>\n            <td>{{this.usersData[0].username}}</td>\n        </tr>\n\n\n        <tr>\n            <th scope=\"col\">Supplier Email</th>\n            <!-- <td>{{this.usersData[0].email}}</td> -->\n\n            <td><a href=\"mailto:{{this.usersData[0].email}}\">{{this.usersData[0].email}}</a></td>\n        </tr>\n\n        <tr>\n            <th scope=\"col\">Supplier Mobile No.</th>\n            <!-- <td>{{this.usersData[0].mobile}}</td>\n             -->\n            <td> <a href=\"tel:{{this.usersData[0].mobile}}\">{{this.usersData[0].mobile}}</a></td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Id</th>\n            <td>{{this.cropsData[0].id}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Name</th>\n            <td>{{this.cropsData[0].crop_name}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Type</th>\n            <td>{{this.cropsData[0].crop_type}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Quantity</th>\n            <td>{{this.cropsData[0].crop_quantity}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Price</th>\n            <td>{{this.cropsData[0].crop_price}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Image</th>\n            <td><img style=\"width: 250px; height: 80px;\" src=\"{{this.cropsData[0]['crop_image_url']}}\" alt=\"Photo of a Rice\">\n            </td>\n        </tr>\n\n\n\n    </table>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/single-crop/single-crop.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-crop/single-crop.component.ts ***!
  \******************************************************/
/*! exports provided: SingleCropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCropComponent", function() { return SingleCropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");




var SingleCropComponent = /** @class */ (function () {
    function SingleCropComponent(actRoute, userService) {
        this.actRoute = actRoute;
        this.userService = userService;
    }
    SingleCropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.paramMap.subscribe(function (params) {
            _this.product_id = params.get('id');
            // alert(this.product_id)
            _this.getCropsData();
        });
    };
    SingleCropComponent.prototype.getCropsData = function () {
        var _this = this;
        this.userService.getCropsDataById(this.product_id).subscribe(function (data) {
            console.log("Retrieved Crop Data Is:: " + JSON.stringify(data));
            _this.cropsData = data;
            _this.posted_user_id = _this.cropsData[0].posted_user_id;
            _this.userService.getUserDataById(_this.posted_user_id).subscribe(function (data) {
                console.log("Retrieved User Data Is:: " + JSON.stringify(data));
                _this.usersData = data;
            });
        });
    };
    SingleCropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-crop',
            template: __webpack_require__(/*! ./single-crop.component.html */ "./src/app/single-crop/single-crop.component.html"),
            styles: [__webpack_require__(/*! ./single-crop.component.css */ "./src/app/single-crop/single-crop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], SingleCropComponent);
    return SingleCropComponent;
}());



/***/ }),

/***/ "./src/app/single-required-crop/single-required-crop.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/single-required-crop/single-required-crop.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n@charset \"UTF-8\";\nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 300;\n    line-height: 1.42em;\n    color: #A7A1AE;\n    background-color: #1F2739;\n}\nh1 {\n    font-size: 3em;\n    font-weight: 300;\n    line-height: 1em;\n    text-align: center;\n    color: #4DC3FA;\n}\nh2 {\n    font-size: 1em;\n    font-weight: 300;\n    text-align: center;\n    display: block;\n    line-height: 1em;\n    padding-bottom: 2em;\n    color: #FB667A;\n}\nh2 a {\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #FB667A;\n    text-decoration: none;\n}\n.blue {\n    color: #185875;\n}\n.yellow {\n    color: #FFF842;\n}\n.container th h1 {\n    font-weight: bold;\n    font-size: 1em;\n    text-align: left;\n    color: #185875;\n}\n.container td {\n    font-weight: normal;\n    font-size: 1em;\n    box-shadow: 0 2px 2px -2px #0E1119;\n}\n.container {\n    text-align: left;\n    overflow: hidden;\n    width: 80%;\n    margin: 0 auto;\n    display: table;\n    padding: 0 0 8em 0;\n}\n.container td,\n.container th {\n    padding-bottom: 2%;\n    padding-top: 2%;\n    padding-left: 2%;\n    color: white;\n}\n/* Background-color of the odd rows */\n.container tr:nth-child(odd) {\n    background-color: #323C50;\n}\n/* Background-color of the even rows */\n.container tr:nth-child(even) {\n    background-color: #2C3446;\n}\n.container th {\n    background-color: #1F2739;\n    color: white;\n}\n.container td:first-child {\n    color: #FB667A;\n}\n.container tr:hover {\n    background-color: #464A52;\n    box-shadow: 0 6px 6px -6px #0E1119;\n    color: white;\n}\n.container td:hover {\n    background-color: #FFF842;\n    color: #403E10;\n    font-weight: bold;\n    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;\n    -webkit-transform: translate3d(6px, -6px, 0);\n            transform: translate3d(6px, -6px, 0);\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s;\n    -webkit-transition-property: all;\n    transition-property: all;\n    -webkit-transition-timing-function: line;\n            transition-timing-function: line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXJlcXVpcmVkLWNyb3Avc2luZ2xlLXJlcXVpcmVkLWNyb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkVBQTJFO0FBRDNFLGlCQUFpQjtBQUVqQjtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBR2YsbUNBQW1DO0NBQ3RDO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUVEOztJQUVJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7QUFHRCxzQ0FBc0M7QUFFdEM7SUFDSSwwQkFBMEI7Q0FDN0I7QUFHRCx1Q0FBdUM7QUFFdkM7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFHMUIsbUNBQW1DO0lBQ25DLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVIQUF1SDtJQUN2SCw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEMiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcmVxdWlyZWQtY3JvcC9zaW5nbGUtcmVxdWlyZWQtY3JvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDcwMCk7XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS40MmVtO1xuICAgIGNvbG9yOiAjQTdBMUFFO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI3Mzk7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNERDM0ZBO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIGNvbG9yOiAjRkI2NjdBO1xufVxuXG5oMiBhIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNGQjY2N0E7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6ICMxODU4NzU7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjRkZGODQyO1xufVxuXG4uY29udGFpbmVyIHRoIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMTg1ODc1O1xufVxuXG4uY29udGFpbmVyIHRkIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcGFkZGluZzogMCAwIDhlbSAwO1xufVxuXG4uY29udGFpbmVyIHRkLFxuLmNvbnRhaW5lciB0aCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiBCYWNrZ3JvdW5kLWNvbG9yIG9mIHRoZSBvZGQgcm93cyAqL1xuXG4uY29udGFpbmVyIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzQzUwO1xufVxuXG5cbi8qIEJhY2tncm91bmQtY29sb3Igb2YgdGhlIGV2ZW4gcm93cyAqL1xuXG4uY29udGFpbmVyIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMzQ0Njtcbn1cblxuLmNvbnRhaW5lciB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjczOTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjRkI2NjdBO1xufVxuXG4uY29udGFpbmVyIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0QTUyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggIzBFMTExOTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggIzBFMTExOTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgdGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY4NDI7XG4gICAgY29sb3I6ICM0MDNFMTA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNoYWRvdzogIzdGN0MyMSAtMXB4IDFweCwgIzdGN0MyMSAtMnB4IDJweCwgIzdGN0MyMSAtM3B4IDNweCwgIzdGN0MyMSAtNHB4IDRweCwgIzdGN0MyMSAtNXB4IDVweCwgIzdGN0MyMSAtNnB4IDZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDZweCwgLTZweCwgMCk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/single-required-crop/single-required-crop.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/single-required-crop/single-required-crop.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supplier-nav-bar></app-supplier-nav-bar>\n\n<div>\n    <table class=\"container\" style=\"margin-left: 10px; margin-right: 10px;\">\n        <tr>\n            <th scope=\"col\">Buyer Name</th>\n            <td>{{this.usersData[0].username}}</td>\n        </tr>\n\n\n        <tr>\n            <th scope=\"col\">Buyer Email</th>\n            <!-- <td>{{this.usersData[0].email}}</td> -->\n\n            <td><a href=\"mailto:{{this.usersData[0].email}}\">{{this.usersData[0].email}}</a></td>\n        </tr>\n\n        <tr>\n            <th scope=\"col\">Buyer Mobile No.</th>\n            <!-- <td>{{this.usersData[0].mobile}}</td>\n           -->\n            <td> <a href=\"tel:{{this.usersData[0].mobile}}\">{{this.usersData[0].mobile}}</a></td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Id</th>\n            <td>{{this.cropsData[0].id}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Name</th>\n            <td>{{this.cropsData[0].crop_name}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Type</th>\n            <td>{{this.cropsData[0].crop_type}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Quantity</th>\n            <td>{{this.cropsData[0].crop_quantity}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Price</th>\n            <td>{{this.cropsData[0].crop_price}}</td>\n        </tr>\n        <tr>\n            <th scope=\"col\">Crop Image</th>\n            <td><img style=\"width: 250px; height: 80px;\" src=\"{{this.cropsData[0]['crop_image_url']}}\" alt=\"Photo of a Rice\">\n            </td>\n        </tr>\n\n\n\n    </table>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/single-required-crop/single-required-crop.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/single-required-crop/single-required-crop.component.ts ***!
  \************************************************************************/
/*! exports provided: SingleRequiredCropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleRequiredCropComponent", function() { return SingleRequiredCropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");




var SingleRequiredCropComponent = /** @class */ (function () {
    function SingleRequiredCropComponent(actRoute, userService) {
        this.actRoute = actRoute;
        this.userService = userService;
    }
    SingleRequiredCropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.paramMap.subscribe(function (params) {
            _this.product_id = params.get('id');
            // alert(this.product_id)
            _this.getCropsData();
        });
    };
    SingleRequiredCropComponent.prototype.getCropsData = function () {
        var _this = this;
        this.userService.getBuyerCropsDataById(this.product_id).subscribe(function (data) {
            console.log("Retrieved Buyer Crop Data Is:: " + JSON.stringify(data));
            _this.cropsData = data;
            _this.posted_user_id = _this.cropsData[0].posted_user_id;
            _this.userService.getUserDataById(_this.posted_user_id).subscribe(function (data) {
                console.log("Retrieved User Data Is:: " + JSON.stringify(data));
                _this.usersData = data;
            });
        });
    };
    SingleRequiredCropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-required-crop',
            template: __webpack_require__(/*! ./single-required-crop.component.html */ "./src/app/single-required-crop/single-required-crop.component.html"),
            styles: [__webpack_require__(/*! ./single-required-crop.component.css */ "./src/app/single-required-crop/single-required-crop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], SingleRequiredCropComponent);
    return SingleRequiredCropComponent;
}());



/***/ }),

/***/ "./src/app/supplier-nav-bar/supplier-nav-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/supplier-nav-bar/supplier-nav-bar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyLW5hdi1iYXIvc3VwcGxpZXItbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/supplier-nav-bar/supplier-nav-bar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/supplier-nav-bar/supplier-nav-bar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n            <a class=\"navbar-brand\" href=\"#\" style=\"font-size: 16px;\">Farmer Assistant Web Service</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/farmer\">Home Page <span class=\"sr-only\">(current)</span></a></li>\n                <li><a routerLink=\"/post_complaints\">Complaints</a></li>\n                <li><a routerLink=\"/complaint_status\">Complaint's Status</a></li>\n                <li><a routerLink=\"/farming_tips\">Farming Tips</a></li>\n                <li><a routerLink=\"/required_crops\">Crop Advertisements</a></li>\n                <li style=\"padding-left:15px;\"><button (click)=\"logOut()\" class=\"btn btn-danger navbar-btn\">Log Out</button></li>\n                <!-- <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Home Page</a></li>\n                    <li><a href=\"#\">Complaints</a></li>\n                    <li><a href=\"#\">Details</a></li> -->\n                <!-- <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">Separated link</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">One more separated link</a></li> -->\n                <!-- </ul>\n            </li> -->\n            </ul>\n            <!-- <form class=\"navbar-form navbar-left\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form> -->\n            <!-- <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\">Link</a></li>\n            <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Action</a></li>\n                    <li><a href=\"#\">Another action</a></li>\n                    <li><a href=\"#\">Something else here</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">Separated link</a></li>\n                </ul>\n            </li>\n        </ul> -->\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/supplier-nav-bar/supplier-nav-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/supplier-nav-bar/supplier-nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: SupplierNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierNavBarComponent", function() { return SupplierNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SupplierNavBarComponent = /** @class */ (function () {
    function SupplierNavBarComponent(router) {
        this.router = router;
    }
    SupplierNavBarComponent.prototype.ngOnInit = function () {
    };
    SupplierNavBarComponent.prototype.logOut = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
        if (this.new_user) {
            localStorage.clear();
            this.router.navigate(['/home']);
            window.location.reload();
        }
        else {
        }
    };
    SupplierNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier-nav-bar',
            template: __webpack_require__(/*! ./supplier-nav-bar.component.html */ "./src/app/supplier-nav-bar/supplier-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./supplier-nav-bar.component.css */ "./src/app/supplier-nav-bar/supplier-nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SupplierNavBarComponent);
    return SupplierNavBarComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




// https://farmer-npm.herokuapp.com
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    UserServiceService.prototype.getNews = function () {
        return this.http.get("http://localhost:8080/event");
    };
    UserServiceService.prototype.postAccountData = function (data) {
        console.log("Inside Post Account");
        return this.http.post("http://localhost:8080/account_data", JSON.stringify(data), this.httpOptions);
    };
    UserServiceService.prototype.postProductData = function (data) {
        console.log("Inside Post Product");
        return this.http.post("http://localhost:8080/product_data", JSON.stringify(data), this.httpOptions);
    };
    UserServiceService.prototype.postBuyerProductData = function (data) {
        console.log("Inside Post Product");
        return this.http.post("http://localhost:8080/buyer_product_data", JSON.stringify(data), this.httpOptions);
    };
    UserServiceService.prototype.postComplaintData = function (data) {
        console.log("Inside Post Complaint");
        return this.http.post("http://localhost:8080/complaint_data", JSON.stringify(data), this.httpOptions);
    };
    UserServiceService.prototype.postFarmingTipData = function (data) {
        console.log("Inside Post Farming Tip");
        return this.http.post("http://localhost:8080/farming_tip", JSON.stringify(data), this.httpOptions);
    };
    UserServiceService.prototype.getComplaintData = function (id) {
        console.log("00000000000000" + id);
        return this.http.get("http://localhost:8080/get_complaint_data/" + id);
    };
    UserServiceService.prototype.setComplaintStatus = function (id) {
        console.log("00000000000000" + id);
        return this.http.get("http://localhost:8080/set_complaint_status/" + id);
    };
    UserServiceService.prototype.getAllComplaintDataForAdmin = function () {
        return this.http.get("http://localhost:8080/get_all_complaint_data");
    };
    UserServiceService.prototype.getFarmingTips = function () {
        return this.http.get("http://localhost:8080/get_all_farming_tips");
    };
    // setComplaintStatus(id){
    //   console.log("00000000000000"+id)
    //   // return this.http.put(`http://localhost:8080/set_complaint_status/status/`,id);
    //   return this.http.post(`http://localhost:8080/set_complaint_status/status`, JSON.stringify(id), this.httpOptions);
    // }
    UserServiceService.prototype.getAccountData = function (email, password, type) {
        return this.http.get("http://localhost:8080/get_account/data/" + email + '/' + password + '/' + type);
    };
    UserServiceService.prototype.getCropsData = function () {
        return this.http.get("http://localhost:8080/crops");
    };
    UserServiceService.prototype.getBuyerCropsData = function () {
        return this.http.get("http://localhost:8080/buyer_crops_for_farmer");
    };
    UserServiceService.prototype.getCropsDataById = function (id) {
        console.log("00000000000000" + id);
        return this.http.get("http://localhost:8080/crops_by_id/" + id);
    };
    UserServiceService.prototype.getBuyerCropsDataById = function (id) {
        console.log("00000000000000" + id);
        return this.http.get("http://localhost:8080/buyer_crops_by_id/" + id);
    };
    UserServiceService.prototype.getUserDataById = function (id) {
        console.log("00000000000000" + id);
        return this.http.get("http://localhost:8080/userdata_for_crops/" + id);
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/buyer-product-details/buyer-product-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/buyer-product-details/buyer-product-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 400px;\n}\n\n.example-header-image {\n    background-image: url('https://firebasestorage.googleapis.com/v0/b/farmers-app-b1428.appspot.com/o/overviewbg-res.jpg?alt=media&token=1878a15e-6874-4456-bbbe-b466e5512ccc');\n    background-size: cover;\n}\n\n.center {\n    width: 100%;\n    margin: 0 auto;\n    padding: 20px;\n    background: #f0e68c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9idXllci1wcm9kdWN0LWRldGFpbHMvYnV5ZXItcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSw2S0FBNks7SUFDN0ssdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9idXllci1wcm9kdWN0LWRldGFpbHMvYnV5ZXItcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9mYXJtZXJzLWFwcC1iMTQyOC5hcHBzcG90LmNvbS9vL292ZXJ2aWV3YmctcmVzLmpwZz9hbHQ9bWVkaWEmdG9rZW49MTg3OGExNWUtNjg3NC00NDU2LWJiYmUtYjQ2NmU1NTEyY2NjJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNlbnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjBlNjhjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/buyer-product-details/buyer-product-details.component.html":
/*!************************************************************************!*\
  !*** ./src/buyer-product-details/buyer-product-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-nav-bar></app-buyer-nav-bar>\n<div class=\"center\" style=\"align-items: center;\" *ngFor=\"let product of this.cropsData; let index = index\">\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>{{product['crop_name']}}</mat-card-title>\n            <mat-card-subtitle>{{product['crop_type']}}</mat-card-subtitle>\n        </mat-card-header>\n        <a routerLink=\"/single/{{product['id']}}\" routerLinkActive=\"active\">\n            <img mat-card-image src=\"{{product['crop_image_url']}}\" alt=\"Photo of a Rice\"></a>\n        <!-- <mat-card-content>\n        <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n        </p>\n    </mat-card-content> -->\n        <mat-card-actions>\n            <button mat-button>Rs. {{product['crop_price']}}</button>\n            <button mat-button style=\"text-align: right;\">Qty. {{product['crop_quantity']}}  {{product['crop_unit_type']}}</button>\n\n        </mat-card-actions>\n    </mat-card>\n    <br><br><br>\n</div>"

/***/ }),

/***/ "./src/buyer-product-details/buyer-product-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/buyer-product-details/buyer-product-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: BuyerProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerProductDetailsComponent", function() { return BuyerProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/user-service.service */ "./src/app/user-service.service.ts");



var BuyerProductDetailsComponent = /** @class */ (function () {
    function BuyerProductDetailsComponent(userService) {
        this.userService = userService;
    }
    BuyerProductDetailsComponent.prototype.ngOnInit = function () {
        this.getCropsData();
    };
    BuyerProductDetailsComponent.prototype.getCropsData = function () {
        var _this = this;
        this.userService.getCropsData().subscribe(function (data) {
            console.log("Retrieved Crop Data Is:: " + JSON.stringify(data));
            _this.cropsData = data;
        });
    };
    BuyerProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-product-details',
            template: __webpack_require__(/*! ./buyer-product-details.component.html */ "./src/buyer-product-details/buyer-product-details.component.html"),
            styles: [__webpack_require__(/*! ./buyer-product-details.component.css */ "./src/buyer-product-details/buyer-product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], BuyerProductDetailsComponent);
    return BuyerProductDetailsComponent;
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
    production: false,
    // Your web app's Firebase configuration
    firebase: {
        apiKey: "AIzaSyC5DdEG0g3YkOyMpdAOK_3kNpzDas8IMsg",
        authDomain: "farmers-app-b1428.firebaseapp.com",
        databaseURL: "https://farmers-app-b1428.firebaseio.com",
        projectId: "farmers-app-b1428",
        storageBucket: "farmers-app-b1428.appspot.com",
        messagingSenderId: "1052487716965",
        appId: "1:1052487716965:web:4ea0aba35827ba6ddaf68c",
        measurementId: "G-FLBF5YFWL7"
    }
    // Initialize Firebase
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

/***/ "./src/farmer-form-details/farmer-form-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/farmer-form-details/farmer-form-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tp-container {\n    margin-top: 20px;\n    margin-right: 20px;\n    margin-left: 20px;\n}\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mYXJtZXItZm9ybS1kZXRhaWxzL2Zhcm1lci1mb3JtLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2Zhcm1lci1mb3JtLWRldGFpbHMvZmFybWVyLWZvcm0tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRwLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/farmer-form-details/farmer-form-details.component.html":
/*!********************************************************************!*\
  !*** ./src/farmer-form-details/farmer-form-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supplier-nav-bar></app-supplier-nav-bar>\n<div class=\"tp-container\">\n    <form class=\"example-form\" (ngSubmit)=\"upload()\">\n        <mat-card-header>\n            <mat-card-title>Selling Crop Details </mat-card-title>\n        </mat-card-header>\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Name</mat-label>\n            <input matInput placeholder=\"Enter Crop Name\" [(ngModel)]=\"cropModel.crop_name\" name=\"crop_name\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Type</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Type\" [(ngModel)]=\"cropModel.crop_type\" name=\"crop_type\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Quantity</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Quantity\" [(ngModel)]=\"cropModel.crop_quantity\" name=\"crop_quantity\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Price</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Price\" [(ngModel)]=\"cropModel.crop_price\" name=\"crop_price\"></textarea>\n        </mat-form-field>\n\n\n        <!-- <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Image URL</mat-label>\n            <textarea matInput placeholder=\"Enter Crop Image URL\" [(ngModel)]=\"cropModel.crop_image_url\" name=\"crop_image_url\"></textarea>\n        </mat-form-field> -->\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Crop Quantity Unit </mat-label>\n            <input matInput placeholder=\"Enter Crop Quantity Unit\" value=\"Kg\" [(ngModel)]=\"cropModel.crop_unit_type\" name=\"crop_unit_type\">\n        </mat-form-field>\n\n        <label class=\"btn btn-default\"> <input type=\"file\"\n            (change)=\"selectFile($event)\">\n          </label>\n        <br>\n        <button mat-stroked-button color=\"accent\" [disabled]=\"!selectedFiles\" type=\"submit\" class=\"btn-block\">Add Crop</button>\n\n        <!-- \n        <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n                {{progress.percentage}}%</div>\n        </div> -->\n\n\n\n        <!-- <button class=\"btn btn-success\" (click)=\"()\">Upload</button> -->\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/farmer-form-details/farmer-form-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/farmer-form-details/farmer-form-details.component.ts ***!
  \******************************************************************/
/*! exports provided: FarmerFormDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerFormDetailsComponent", function() { return FarmerFormDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/file-upload */ "./src/app/file-upload.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");








var FarmerFormDetailsComponent = /** @class */ (function () {
    function FarmerFormDetailsComponent(db, userService, http) {
        this.db = db;
        this.userService = userService;
        this.http = http;
        this.cropModel = {};
        this.selectedFile = null;
        this.progress = { percentage: 0 };
        this.basePath = '/uploads';
    }
    FarmerFormDetailsComponent.prototype.ngOnInit = function () {
        this.new_user = JSON.parse(localStorage.getItem("users"));
    };
    FarmerFormDetailsComponent.prototype.sendFormData = function () {
        // alert(JSON.stringify(this.cropModel))
        this.cropModel.posted_user_email = this.new_user[0].email;
        this.cropModel.posted_user_role = this.new_user[0].role;
        this.cropModel.posted_user_id = this.new_user[0].id;
        // alert(this.new_user[0].id)
        this.userService.postProductData(this.cropModel).subscribe(function (data) {
            alert("Details Entered Successfully");
            console.log("Response::" + JSON.stringify(data));
        });
    };
    FarmerFormDetailsComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(event);
    };
    // pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    //   const storageRef = firebase.storage().ref();
    //   const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //     (snapshot) => {
    //       // in progress
    //       const snap = snapshot as firebase.storage.UploadTaskSnapshot;
    //       progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
    //     },
    //     (error) => {
    //       // fail
    //       console.log(error);
    //     },
    //     () => {
    //       // success
    //       uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //         console.log('File available at', downloadURL);
    //         fileUpload.url = downloadURL;
    //         fileUpload.name = fileUpload.file.name;
    //         this.saveFileData(fileUpload);
    //       });
    //     }
    //   );
    // }
    // private saveFileData(fileUpload: FileUpload) {
    //   this.db.list(`${this.basePath}/`).push(fileUpload);
    // }
    FarmerFormDetailsComponent.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                _this.cropModel.crop_image_url = downloadURL;
                _this.sendFormData();
                // alert("URLL"+fileUpload.url)
                // this.saveFileData(fileUpload);
            });
            // fileUpload.url = uploadTask.snapshot.downloadURL
            // fileUpload.name = fileUpload.file.name
            // this.saveFileData(fileUpload)
            //   fileUpload.url.subscribe(url=>{
            //     if(url){
            //         console.log(url);
            //         //wirte the url to firestore
            //     }
            //  })
        });
    };
    FarmerFormDetailsComponent.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    FarmerFormDetailsComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FarmerFormDetailsComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.currentFileUpload = new src_app_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](file);
        this.pushFileToStorage(this.currentFileUpload, this.progress);
    };
    FarmerFormDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmer-form-details',
            template: __webpack_require__(/*! ./farmer-form-details.component.html */ "./src/farmer-form-details/farmer-form-details.component.html"),
            styles: [__webpack_require__(/*! ./farmer-form-details.component.css */ "./src/farmer-form-details/farmer-form-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FarmerFormDetailsComponent);
    return FarmerFormDetailsComponent;
}());



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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/saif/Desktop/Vishaal/Farmers-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map