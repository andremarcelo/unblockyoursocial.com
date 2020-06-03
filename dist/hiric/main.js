(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"default~home-home-module~pages-pages-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"default~home-home-module~pages-pages-module",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout/layout.component */ "./src/app/layout/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-forget/password-forget.component */ "./src/app/password-forget/password-forget.component.ts");







var routes = [
    { path: '', component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], loadChildren: './pages/pages.module#PagesModule' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'password-forget', component: _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_6__["PasswordForgetComponent"] }
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



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'Hiric';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password-forget/password-forget.component */ "./src/app/password-forget/password-forget.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_9__["PasswordForgetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings\n{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3NcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 margin-t-20\">\n                <h4>HIRIC</h4>\n                <div class=\"text-muted margin-t-20\">\n                    <ul class=\"list-unstyled footer-list\">\n                        <li><a href=\"#\">Home</a></li>\n                        <li><a href=\"#\">About us</a></li>\n                        <li><a href=\"#\">Careers</a></li>\n                        <li><a href=\"#\">Contact us</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 margin-t-20\">\n                <h4>Information</h4>\n                <div class=\"text-muted margin-t-20\">\n                    <ul class=\"list-unstyled footer-list\">\n                        <li><a href=\"#\">Terms & Condition</a></li>\n                        <li><a href=\"#\">About us</a></li>\n                        <li><a href=\"#\">Jobs</a></li>\n                        <li><a href=\"#\">Bookmarks</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 margin-t-20\">\n                <h4>Support</h4>\n                <div class=\"text-muted margin-t-20\">\n                    <ul class=\"list-unstyled footer-list\">\n                        <li><a href=\"\">FAQ</a></li>\n                        <li><a href=\"\">Contact</a></li>\n                        <li><a href=\"\">Disscusion</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 margin-t-20\">\n                <h4>Subscribe</h4>\n                <div class=\"text-muted margin-t-20\">\n                    <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>\n                </div>\n                <form class=\"form subscribe\">\n                    <input placeholder=\"Email\" class=\"form-control\" required>\n                    <a href=\"#\" class=\"submit\"><i class=\"pe-7s-paper-plane\"></i></a>\n                </form>\n            </div>\n        </div>\n    </div>\n</footer>\n<!--END FOOTER-->\n\n<!--START FOOTER ALTER-->\n<div class=\"footer-alt\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"float-left pull-none\">\n                    <p class=\"copy-rights text-muted mb-3 mb-sm-0\">{{ cur_year }} © unblockyoursocial.com</p>\n                </div>\n                <div class=\"float-right pull-none \">\n                    <ul class=\"list-inline social m-0\">\n                        <li class=\"list-inline-item\"><a href=\"\" class=\"social-icon ml-1\"><i class=\"mdi mdi-bitcoin\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"\" class=\"social-icon ml-1\"><i class=\"mdi mdi-credit-card\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"\" class=\"social-icon ml-1\"><i class=\"mdi mdi-bank-transfer-in\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.switch = 1;
        this.cur_year = 0;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.cur_year = new Date().getFullYear();
    };
    FooterComponent.prototype.onChangeSwitch = function () {
        this.switch == 1 ? this.switch = 0 : this.switch = 1;
    };
    FooterComponent.prototype.onChangeColor = function (color) {
        document.getElementById("theme_id").className = "";
        document.getElementById('theme_id').classList.add('theme-' + color);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a\n{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhXG57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark\" id=\"navbar1\">\n    <div class=\"container\">\n        <!-- LOGO -->\n        <a class=\"navbar-brand logo text-uppercase\" routerLink=\"/\">\n            <i class=\"mdi mdi-alien\"></i>unblock Social\n        </a>\n\n        <button class=\"navbar-toggler\" (click)=\"toggleMenu()\" type=\"button\" id=\"menu_button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <i class=\"mdi mdi-menu\"></i>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" scrollSpy>\n            <ul class=\"navbar-nav navbar-center\" id=\"mySidenav\">\n                <li class=\"nav-item\">\n                    <a data=\"id_home\"  [ngx-scroll-to]=\"'#home'\" class=\"nav-link\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a data=\"id_features\"  [ngx-scroll-to]=\"'#features'\" class=\"nav-link\">Features</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a data=\"id_services\"  [ngx-scroll-to]=\"'#services'\" class=\"nav-link\">Services</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a data=\"id_pricing\"  [ngx-scroll-to]=\"'#pricing'\" class=\"nav-link\">Pricing</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a data=\"id_contact\" [ngx-scroll-to]=\"'#contact'\" class=\"nav-link\">Contact</a>\n                </li>\n            </ul>\n            <div class=\"nav-button ml-auto\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                      <a routerLink=\"/login\" class=\"nav-link\">LOGIN</a>\n                    </li>\n                  <li>\n                    <button type=\"button\" routerLink=\"/register\" class=\"btn btn-custom navbar-btn btn-rounded waves-effect waves-light\">Try it Free</button>\n                  </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(scrollSpyService, router) {
        this.scrollSpyService = scrollSpyService;
        this.router = router;
        this.sections = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.router.url == "/index1" || this.router.url == "/") {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#1bbc9d!important');
        }
        else if (this.router.url == "/index2" || this.router.url == "/index3" || this.router.url == "/index6" || this.router.url == "/index5" || this.router.url == "/index7" || this.router.url == "/index8" || this.router.url == "/index9") {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#ffffff!important');
        }
        else if (this.router.url == "/index4") {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#f85f89!important');
        }
        else {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#000000!important');
        }
        window.onscroll = function () {
            myFunction();
        };
        var navbar1 = document.getElementById("navbar1");
        function myFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                navbar1.style.backgroundColor = "#272a33";
                navbar1.style.padding = "10px";
            }
            else {
                navbar1.style.backgroundColor = "";
                navbar1.style.padding = "20px";
            }
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        document.getElementById('navbarCollapse').classList.toggle('show');
        document.getElementById('menu_button').classList.toggle('collapsed');
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var sections = document.querySelectorAll(".section");
        var self = this;
        Array.prototype.forEach.call(sections, function (e) {
            self.sections[e.id] = parseFloat(e.offsetTop);
        });
        console.log(JSON.stringify(self.sections));
        this.scrollSpyService.getObservable('window').subscribe(function (e) {
            var scrollPosition = document.documentElement.scrollTop;
            for (var menu in _this.sections) {
                if (_this.sections[menu] <= scrollPosition) {
                    if (menu == "" || menu == "testi") { }
                    else {
                        if (_this.router.url == "/index1" || _this.router.url == "/") {
                            _this.clearMenu('#393f4f');
                            document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#1bbc9d!important');
                        }
                        else if (_this.router.url == "/index2" || _this.router.url == "/index3" || _this.router.url == "/index5" || _this.router.url == "/index6" || _this.router.url == "/index7" || _this.router.url == "/index8" || _this.router.url == "/index9") {
                            _this.clearMenu('#ffffff99');
                            document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#ffffff!important');
                        }
                        else if (_this.router.url == "/index4") {
                            _this.clearMenu('#393f4f');
                            document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#f85f89 !important');
                        }
                        else {
                            _this.clearMenu('#000000');
                        }
                        //   document.getElementById('navbarCollapse').classList.remove('show');
                    }
                }
            }
        });
    };
    HeaderComponent.prototype.clearMenu = function (color) {
        document.querySelector('a[data="id_home"]').setAttribute('style', 'color:' + color + '!important');
        document.querySelector('a[data="id_services"]').setAttribute('style', 'color:' + color + '!important');
        document.querySelector('a[data="id_features"]').setAttribute('style', 'color:' + color + '!important');
        document.querySelector('a[data="id_pricing"]').setAttribute('style', 'color:' + color + '!important');
        document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:' + color + '!important');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout/layout.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ngx_scrollspy__WEBPACK_IMPORTED_MODULE_10__["ScrollSpyModule"].forRoot(),
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__["ScrollToModule"].forRoot()
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout/layout.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/layout/layout.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/layout/layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/layout/layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"theme_id\" class=\"\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/layout/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        document.body.classList.remove('bg-account-pages');
        document.body.classList.remove('py-4');
        document.body.classList.remove('py-sm-0');
        document.getElementById('theme_id').classList.remove('theme-cyan');
        if (this.router.url == '/') {
            document.getElementById('theme_id').classList.add('theme-cyan');
        }
        if (this.router.url == '/index1') {
            document.getElementById('theme_id').classList.add('theme-cyan');
        }
        else if (this.router.url == '/index2') {
            document.getElementById('theme_id').classList.add('theme-red');
        }
        else if (this.router.url == '/index3') {
            document.getElementById('theme_id').classList.add('theme-green');
        }
        else if (this.router.url == '/index4') {
            document.getElementById('theme_id').classList.add('theme-pink');
        }
        else if (this.router.url == '/index5') {
            document.getElementById('theme_id').classList.add('theme-blue');
        }
        else if (this.router.url == '/index6') {
            document.getElementById('theme_id').classList.add('theme-purple');
        }
        else if (this.router.url == '/index7') {
            document.getElementById('theme_id').classList.add('theme-cyan');
        }
        else if (this.router.url == '/index8') {
            document.getElementById('theme_id').classList.add('theme-orange');
        }
        else if (this.router.url == '/index9') {
            document.getElementById('theme_id').classList.add('theme-yellow');
        }
        else { }
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"theme_id\" class=\"theme-red\">\n<div class=\"account-home-btn d-none d-sm-block\">\n  <a routerLink=\"/\" class=\"text-white\"><i class=\"mdi mdi-home h1\"></i></a>\n</div>\n\n<section class=\"height-100vh\">\n  <div class=\"display-table\">\n      <div class=\"display-table-cell\">\n          <div class=\"container\">\n              <div class=\"row justify-content-center\">\n                  <div class=\"col-lg-5\">\n                      <div class=\"card account-card\">\n                          <div class=\"card-body\">\n                              <div class=\"text-center mt-3\">\n                                  <h3 class=\"font-weight-bold\"><a routerLink=\"/\" class=\"text-dark text-uppercase account-pages-logo\"><i class=\"mdi mdi-alien\"></i>unblockyoursocial.com</a></h3>\n                                  <p class=\"text-muted\">Input your credentials to login or signup.\n                                  </p>\n                              </div>\n                              <div class=\"p-3\">\n                                  <form action=\"#\">\n                                      <div class=\"form-group\">\n                                          <label for=\"username\">Username</label>\n                                          <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter username\">\n                                      </div>\n\n                                      <div class=\"form-group\">\n                                          <label for=\"userpassword\">Password</label>\n                                          <input type=\"password\" class=\"form-control\" id=\"userpassword\" placeholder=\"Enter password\">\n                                      </div>\n\n                                      <div class=\"custom-control custom-checkbox\">\n                                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n                                          <label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>\n                                      </div>\n\n                                      <div class=\"mt-3\">\n                                          <button type=\"button\" class=\"btn btn-custom btn-block\">Log In</button>\n                                      </div>\n\n                                      <div class=\"mt-4 mb-0 text-center\">\n                                          <a routerLink=\"/password-forget\" class=\"text-dark\"><i class=\"mdi mdi-lock\"></i> Forgot your password?</a>\n                                      </div>\n                                  </form>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n      </div>\n  </div>\n</section>\n</div>\n"

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


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/password-forget/password-forget.component.css":
/*!***************************************************************!*\
  !*** ./src/app/password-forget/password-forget.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFzc3dvcmQtZm9yZ2V0L3Bhc3N3b3JkLWZvcmdldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/password-forget/password-forget.component.html":
/*!****************************************************************!*\
  !*** ./src/app/password-forget/password-forget.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"theme_id\" class=\"theme-red\">\n  <div class=\"account-home-btn d-none d-sm-block\">\n    <a routerLink=\"/\" class=\"text-white\"><i class=\"mdi mdi-home h1\"></i></a>\n</div>\n\n<section class=\"height-100vh\">\n    <div class=\"display-table\">\n        <div class=\"display-table-cell\">\n            <div class=\"container\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-5\">\n                        <div class=\"card account-card\">\n                            <div class=\"card-body\">\n                                <div class=\"text-center mt-3\">\n                                    <h3 class=\"font-weight-bold\"><a routerLink=\"/\" class=\"text-dark text-uppercase account-pages-logo\"><i class=\"mdi mdi-alien\"></i>unblockyoursocial.com</a></h3>\n                                    <p class=\"text-muted\">Reset Password</p>\n                                </div>\n                                <div class=\"p-3\">\n                                    <div class=\"alert alert-warning  text-center\" role=\"alert\">\n                                        Enter your email address and we'll send you an email with instructions to reset your password.\n                                    </div>\n                                    <form>\n                                        <div class=\"form-group\">\n                                            <label for=\"email\">Email</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\">\n                                        </div>\n\n                                        <div class=\"mt-3\">\n                                            <button type=\"button\" class=\"btn btn-custom btn-block\">Reset your Password</button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n</div>\n"

/***/ }),

/***/ "./src/app/password-forget/password-forget.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/password-forget/password-forget.component.ts ***!
  \**************************************************************/
/*! exports provided: PasswordForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetComponent", function() { return PasswordForgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PasswordForgetComponent = /** @class */ (function () {
    function PasswordForgetComponent() {
    }
    PasswordForgetComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');
    };
    PasswordForgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-forget',
            template: __webpack_require__(/*! ./password-forget.component.html */ "./src/app/password-forget/password-forget.component.html"),
            styles: [__webpack_require__(/*! ./password-forget.component.css */ "./src/app/password-forget/password-forget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordForgetComponent);
    return PasswordForgetComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"theme_id\" class=\"theme-red\">\n  <div class=\"account-home-btn d-none d-sm-block\">\n    <a  routerLink=\"/\" class=\"text-white\"><i class=\"mdi mdi-home h1\"></i></a>\n</div>\n\n<section class=\"height-100vh\">\n    <div class=\"display-table\">\n        <div class=\"display-table-cell\">\n            <div class=\"container\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-5\">\n                        <div class=\"card account-card\">\n                            <div class=\"card-body\">\n                                <div class=\"text-center mt-3\">\n                                    <h3 class=\"font-weight-bold\"><a routerLink=\"/\" class=\"text-dark text-uppercase account-pages-logo\"><i class=\"mdi mdi-alien\"></i>unblockyoursocial.com</a></h3>\n                                    <p class=\"text-muted\">Sign up for a new Account</p>\n                                </div>\n                                <div class=\"p-3\">\n                                    <form>\n                                        <div class=\"form-group\">\n                                            <label for=\"firstname\">First Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"First Name\">\n                                        </div>\n\n                                        <div class=\"form-group\">\n                                            <label for=\"email\">Email</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\">\n                                        </div>\n\n                                        <div class=\"form-group\">\n                                            <label for=\"userpassword\">Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"userpassword\" placeholder=\"Enter password\">\n                                        </div>\n\n                                        <div class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n                                            <label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>\n                                        </div>\n\n                                        <div class=\"mt-3\">\n                                            <button type=\"button\" class=\"btn btn-custom btn-block\">Sign in</button>\n                                        </div>\n\n                                        <div class=\"mt-4 mb-0 text-center\">\n                                            <p class=\"mb-0\">Don't have an account ? <a routerLink=\"/login\" class=\"text-danger\">Sign in</a></p>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n</div>\n"

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


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/vhosts/unblockyoursocial.com/kl23j4pkj.unblockyoursocial.com/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map