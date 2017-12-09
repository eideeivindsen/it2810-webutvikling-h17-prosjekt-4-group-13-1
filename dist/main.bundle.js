webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = (function () {
    function LoggedInGuard(user) {
        this.user = user;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.user.isLoggedIn();
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoggedInGuard);

var _a;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProfile = function () {
        var auth_token = localStorage.getItem('auth_token');
        return this.http
            .get('/api/profile', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token)
        })
            .map(function (res) {
            if (res.status == 200) {
                return res.data;
            }
        });
    };
    ProfileService.prototype.getProfileHistory = function () {
        var auth_token = localStorage.getItem('auth_token');
        return this.http
            .get('/api/profile/history', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token)
        })
            .map(function (res) {
            if (res.status == 200) {
                return res.data; // Returns array of all searches done by user
            }
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/results.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResultsService = (function () {
    function ResultsService() {
        this.step = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ResultsService.prototype.setStep = function (index) {
        this.step.next(index);
    };
    ResultsService.prototype.getStep = function () {
        return this.step.asObservable();
    };
    return ResultsService;
}());
ResultsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ResultsService);

//# sourceMappingURL=results.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.results = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.isLoading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.filter = {};
    }
    SearchService.prototype.addProduct = function (product) {
        var auth_token = localStorage.getItem('auth_token');
        var body = product;
        this.http
            .post('/api/products/add', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token),
        })
            .subscribe();
    };
    SearchService.prototype.addToHistory = function (product) {
        var auth_token = localStorage.getItem('auth_token');
        var body = product;
        body['search_date'] = new Date(); // Adds the date the search was conducted
        this.http
            .post('/api/user/update/history', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token),
        })
            .subscribe();
    };
    SearchService.prototype.get = function (filter, index, sort) {
        var _this = this;
        this.isLoading.next(true);
        var auth_token = localStorage.getItem('auth_token');
        return this.http
            .get('/api/products/get', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token),
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("filter", JSON.stringify(filter)).set("index", JSON.stringify(index)).set("sort", JSON.stringify(sort)),
        })
            .map(function (res) {
            if (res.status) {
                _this.filter = filter;
                _this.isLoading.next(false);
                _this.results.next(res.data);
            }
        });
    };
    SearchService.prototype.getAll = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("filter", JSON.stringify(this.filter));
        var auth_token = localStorage.getItem('auth_token');
        return this.http
            .get('/api/products/getAll', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token),
            params: params,
        })
            .map(function (res) {
            if (res.status) {
                return res.data;
            }
        });
    };
    SearchService.prototype.update = function (index, sort) {
        var _this = this;
        this.isLoading.next(true);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("filter", JSON.stringify(this.filter)).set("index", JSON.stringify(index)).set("sort", JSON.stringify(sort));
        var auth_token = localStorage.getItem('auth_token');
        return this.http
            .get('/api/products/get', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + auth_token),
            params: params,
        })
            .map(function (res) {
            if (res.status) {
                _this.isLoading.next(false);
                _this.results.next(res.data);
            }
        });
    };
    SearchService.prototype.getResults = function () {
        return this.results.asObservable();
    };
    SearchService.prototype.getIsLoading = function () {
        return this.isLoading.asObservable();
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    // Register new user
    UserService.prototype.register = function (user) {
        return this.http
            .post('/api/register', user)
            .map(function (res) {
            if (res.status == 200) {
                res.credentials = {
                    username: user.username,
                    password: user.password
                };
                return res;
            }
            else {
                return res;
            }
        });
    };
    // Login user
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return this.http
            .post('/api/authenticate', { username: username, password: password })
            .map(function (res) {
            if (res.status == 200) {
                localStorage.setItem('auth_token', res.data[0]);
                _this.loggedIn = true;
            }
            return res.status;
        });
    };
    // Logout user and clears LocalStorage
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('createdAt');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <app-navigation></app-navigation>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular4_word_cloud__ = __webpack_require__("../../../../angular4-word-cloud/angular4-word-cloud.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular4_word_cloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular4_word_cloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router_testing__ = __webpack_require__("../../../router/@angular/router/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__barrel__ = __webpack_require__("../../../../../src/app/barrel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Components

// Services

// Routes

// Material Design

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__barrel__["b" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["o" /* SearchViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["h" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["e" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["d" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["m" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["k" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["a" /* AddnewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["j" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["q" /* WordcloudComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barrel__["i" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_8_angular4_word_cloud__["AgWordCloudModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__barrel__["f" /* PlunkerMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router_testing__["a" /* RouterTestingModule */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__barrel__["q" /* WordcloudComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__barrel__["p" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__barrel__["c" /* LoggedInGuard */], __WEBPACK_IMPORTED_MODULE_10__barrel__["g" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_10__barrel__["n" /* SearchService */], __WEBPACK_IMPORTED_MODULE_10__barrel__["l" /* ResultsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__barrel__["b" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_view_search_view_component__ = __webpack_require__("../../../../../src/app/search-view/search-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_view_profile_view_component__ = __webpack_require__("../../../../../src/app/profile-view/profile-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logged_in_guard__ = __webpack_require__("../../../../../src/app/_services/logged-in.guard.ts");





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__search_view_search_view_component__["a" /* SearchViewComponent */], pathMatch: 'full' },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__profile_view_profile_view_component__["a" /* ProfileViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/barrel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PlunkerMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_view_search_view_component__ = __webpack_require__("../../../../../src/app/search-view/search-view.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__search_view_search_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__ = __webpack_require__("../../../../../src/app/profile-view/profile-view.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_view_search_search_component__ = __webpack_require__("../../../../../src/app/search-view/search/search.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_8__search_view_search_search_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_view_results_results_component__ = __webpack_require__("../../../../../src/app/search-view/results/results.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__search_view_results_results_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_view_addnew_addnew_component__ = __webpack_require__("../../../../../src/app/search-view/addnew/addnew.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__search_view_addnew_addnew_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_view_results_result_result_component__ = __webpack_require__("../../../../../src/app/search-view/results/result/result.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__search_view_results_result_result_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_view_results_wordcloud_wordcloud_component__ = __webpack_require__("../../../../../src/app/search-view/results/wordcloud/wordcloud.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_12__search_view_results_wordcloud_wordcloud_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_logged_in_guard__ = __webpack_require__("../../../../../src/app/_services/logged-in.guard.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_15__services_logged_in_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_profile_service__ = __webpack_require__("../../../../../src/app/_services/profile.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_16__services_profile_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_17__services_search_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_results_service__ = __webpack_require__("../../../../../src/app/_services/results.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_18__services_results_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Material Design


// Components











// Services





// Material Design Plunker
var PlunkerMaterialModule = (function () {
    function PlunkerMaterialModule() {
    }
    return PlunkerMaterialModule;
}());
PlunkerMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTooltipModule */],
        ]
    })
], PlunkerMaterialModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    width: 60%;\r\n    height: 400px;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n}\r\n\r\nform {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\nform > * {\r\n    width: 60%;\r\n    margin: auto;\r\n}\r\n\r\nbutton {\r\n    margin-top: 30px !important;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  margin-top: 1em !important;\r\n}\r\n\r\n.mat-card>:first-child {\r\n    margin: 30px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\r\n<h1 class=\"mat-display-1\">Login:</h1>\r\n  <form #heroForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\r\n    <mat-form-field>\r\n      <input matInput  placeholder=\"Username\" name=\"Username\" [(ngModel)]=\"username\" required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput  type=\"password\" placeholder=\"Password\" name=\"Password\" [(ngModel)]=\"password\" required>\r\n    </mat-form-field>\r\n    <button mat-raised-button>Login</button>\r\n    <p class=\"error\">{{errorMessage}}</p>\r\n  </form>\r\n  <div>\r\n    <button mat-button routerLink=\"/register\">Register</button>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.username = "";
        this.password = "";
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // Navigates to the search page if login is successful
        this.userService.login(this.username, this.password).subscribe(function (result) {
            if (result == 200) {
                _this.errorMessage = "";
                _this.router.navigate(['']);
            }
            else if ((result >= 400) && (result <= 410)) {
                _this.errorMessage = "Wrong username or password.";
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 0 8vw;\r\n    height: 60px;\r\n    background-color: #463F65;    \r\n}\r\n\r\nnav > a {\r\n    margin: 15px 0 15px;\r\n    padding: 5px 10px;\r\n    box-sizing: border-box;\r\n    color: #FCFCFF;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n    transition: all .3s ease;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nnav > a.navlink-separator {\r\n  font-size: 2em;\r\n  margin-top: 5px;\r\n  margin-right: 24px;\r\n  cursor: default;\r\n}\r\n\r\nnav > a.navlink-search .mat-icon {\r\n  position: absolute;\r\n  margin-left: -26px;\r\n  margin-top: -3px;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nnav > a.navlink-profile {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 60px;\r\n  width: auto;\r\n  margin: 0px 0 0px auto;\r\n  padding: 0 30px;\r\n  font-size: .85em;\r\n  line-height: 1em;\r\n  text-align: left;\r\n  background-color: rgba(0, 0, 0, 0.10);\r\n  min-width: 17%;\r\n}\r\n\r\n.navlink-profile-info p:first-child {\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\n.navlink-profile-info p:last-child {\r\n    margin: 0;\r\n    font-size: .8em;\r\n}\r\n\r\nnav > a.navlink-profile.not-logged-in a {\r\n  font-size: 1.3em;\r\n  padding: 23px 15px;\r\n}\r\n\r\nnav > a.navlink-profile:hover {\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\nnav > a.navlink-profile.logged-in div {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\nnav > a.navlink-profile.logged-in div:nth-child(2) {\r\n  -webkit-box-flex: 4;\r\n      -ms-flex-positive: 4;\r\n          flex-grow: 4;\r\n}\r\n\r\nnav > a.navlink-logout {\r\n  height: 60px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 1em;\r\n  background-color: rgba(0, 0, 0, 0.10);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-left: 2px solid #463F65;\r\n}\r\n\r\nnav > a.navlink-logout:hover {\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\nnav > a:not(.navlink-logo):hover {\r\n  color: #38a6a6;\r\n}\r\n\r\nnav > a:nth-child(2):hover,\r\nnav > a.navlink-profile:hover,\r\nnav > a.navlink-logout:hover {\r\n  color: #FCFCFF;\r\n}\r\n\r\n.navlink-profile-avatar mat-icon {\r\n  margin-top: 15px;\r\n  margin-right: 20px;\r\n  -webkit-transform: scale(1.8);\r\n          transform: scale(1.8);\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .navlink-logo,\r\n    .navlink-separator,\r\n    .navlink-profile-info {\r\n      display: none;\r\n    }\r\n\r\n    .navlink-profile-avatar mat-icon {\r\n      margin-right: 0px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n    <nav>\r\n        <a class=\"navlink-logo\" routerLink=\"/\"><b>WARE</b>WOLF</a>\r\n        <a class=\"navlink-separator\">|</a>\r\n        <a class=\"navlink-search\" routerLink=\"/\"><mat-icon>search</mat-icon>Search</a>\r\n        <a *ngIf=\"userService.isLoggedIn()\" class=\"navlink-profile logged-in\" routerLink=\"/profile\">\r\n          <div class=\"navlink-profile-avatar\">\r\n            <mat-icon>account_circle</mat-icon>\r\n          </div>\r\n          <div class=\"navlink-profile-info\">\r\n            <p>{{ name }}</p>\r\n            <p class=\"small\">{{ role }}</p>\r\n          </div>\r\n        </a>\r\n          <a *ngIf=\"!userService.isLoggedIn()\" class=\"navlink-profile not-logged-in\" routerLink=\"/login\">\r\n              <div class=\"navlink-profile-avatar\">\r\n                <mat-icon>account_circle</mat-icon>\r\n              </div>\r\n            <a><label>Sign in</label></a>\r\n          </a>\r\n          <a *ngIf=\"userService.isLoggedIn()\" class=\"navlink-logout\" (click)=\"logout()\">\r\n            <div class=\"navlink-profile-logout\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n            </div>\r\n          </a>\r\n    </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__("../../../../../src/app/_services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(userService, router, profileService) {
        this.userService = userService;
        this.router = router;
        this.profileService = profileService;
        this.name = "";
        this.role = "";
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Checks for navigationEnd (when the page is finished loading).
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */] && _this.router.url == '/' && _this.userService.isLoggedIn()) {
                _this.updateProfileCard();
            }
        });
        // If you manage to refresh the profile page, the navbar updates as well.
        if (localStorage.getItem("name")) {
            this.name = localStorage.getItem("name");
            this.role = localStorage.getItem("role");
        }
    };
    NavigationComponent.prototype.updateProfileCard = function () {
        var _this = this;
        // Fetches name and role from profile and stores in Localstorage
        this.profileService.getProfile().subscribe(function (result) {
            _this.name = result[0].name;
            _this.role = result[0].role;
            localStorage.setItem("name", result[0].name);
            localStorage.setItem("role", result[0].role);
        });
    };
    NavigationComponent.prototype.logout = function () {
        // Logs the user out
        this.userService.logout();
        this.router.navigate(['/login']);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */]) === "function" && _c || Object])
], NavigationComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  margin: 8vh 8vw;\r\n}\r\n\r\n.userinfo {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin-bottom: 8vh;\r\n  padding: 3em 5em;\r\n  text-align: left;\r\n}\r\n\r\n.userinfo .userinfo-img {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-right: 1em;\r\n  text-align: center;\r\n}\r\n.userinfo .userinfo-about {\r\n  -webkit-box-flex: 3;\r\n      -ms-flex-positive: 3;\r\n          flex-grow: 3;\r\n  padding-top: 2em;\r\n}\r\n\r\n.search-history {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.search-history mat-card {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-bottom: 20px;\r\n}\r\n.search-history mat-card:first-child {\r\n  margin-right: 2em;\r\n}\r\n\r\n.search-history h3 {\r\n  text-transform: uppercase;\r\n  font-weight: 400;\r\n}\r\n\r\n.search-piechart {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.search-barchart {\r\n  display: none !important;\r\n  max-width: 250px;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .search-history mat-card:first-child {\r\n    margin-right: 0em;\r\n  }\r\n\r\n  .userinfo-img {\r\n    text-align: center;\r\n  }\r\n\r\n  .userinfo-img img {\r\n    max-width: 150px;\r\n  }\r\n\r\n  .search-piechart {\r\n    display: none !important;\r\n  }\r\n\r\n  .search-barchart {\r\n    display: block !important;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n    <h1 class=\"mat-display-1\">My Profile:</h1>\r\n    <h3 class=\"mat-subheading-2\">Name: {{name}}</h3>\r\n    <h3 class=\"mat-subheading-2\">Role: {{role}}</h3>\r\n    <h3 class=\"mat-subheading-2\">Member Since: {{createdAt}}</h3>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <mat-card class=\"userinfo\">\r\n    <div class=\"userinfo-img\">\r\n      <img src=\"../assets/img/avatar-large-male.png\" alt=\"avatar\">\r\n    </div>\r\n    <div class=\"userinfo-about\">\r\n      <h1>{{name}}</h1>\r\n      <h2><mat-icon>work</mat-icon> {{role}}</h2>\r\n      <h3>Member since: {{createdAt}}</h3>\r\n    </div>\r\n  </mat-card>\r\n  <div class=\"search-history\">\r\n\r\n    <mat-card class=\"recent-searches\">\r\n      <mat-card-header>\r\n        <h3>Recently viewed products</h3>\r\n      </mat-card-header>\r\n\r\n      <p *ngIf=\"(chartLabels.length < 1 || chartLabels.length == undefined)\">No recently viewed products</p>\r\n\r\n      <mat-table *ngIf=\"(chartLabels.length > 0)\" #table [dataSource]=\"dataSource\">\r\n\r\n        <!-- Search Column -->\r\n        <ng-container matColumnDef=\"search\">\r\n          <mat-header-cell *matHeaderCellDef> Products </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.search}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n          <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{formatDate(element.date)}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n\r\n    </mat-card>\r\n\r\n    <mat-card class=\"search-visualization\">\r\n      <mat-card-header>\r\n        <h3>Viewed products visualized</h3>\r\n      </mat-card-header>\r\n\r\n      <p *ngIf=\"(chartLabels.length < 1 || chartLabels.length == undefined)\">No recently viewed products</p>\r\n\r\n      <canvas *ngIf=\"(chartLabels.length > 0)\" class=\"search-piechart\"\r\n              baseChart\r\n              [data]=\"chartData\"\r\n              [labels]=\"chartLabels\"\r\n              [chartType]=\"pieChartType\"\r\n              [options]=\"chartOptions\"\r\n              (chartHover)=\"chartHovered($event)\"></canvas>\r\n\r\n      <canvas *ngIf=\"(chartLabels.length > 0)\" class=\"search-barchart\"\r\n              baseChart\r\n              [legend]=\"false\"\r\n              [data]=\"chartData\"\r\n              [labels]=\"chartLabels\"\r\n              [chartType]=\"barChartType\"\r\n              [options]=\"chartOptions\"\r\n              (chartHover)=\"chartHovered($event)\"></canvas>\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_profile_service__ = __webpack_require__("../../../../../src/app/_services/profile.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileViewComponent = (function () {
    function ProfileViewComponent(profileService, router) {
        var _this = this;
        this.profileService = profileService;
        this.router = router;
        this.name = "";
        this.role = "";
        this.displayedColumns = ['search', 'date'];
        this.chartLabels = [];
        this.chartData = [];
        this.pieChartType = 'pie';
        this.barChartType = 'horizontalBar';
        this.chartOptions = {
            'responsive': true,
            'animation.animateScale': true
        };
        this.getProfileHistory().subscribe(function (userHistory) {
            _this.createPieChartData(userHistory);
            _this.dataSource = new ExampleDataSource(_this.refineProfileHistory(userHistory));
        });
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // On pageload, checks if createdAt is in LocalStorage (usually not on a fresh login) and fetches it from the database if not.
        // Fetches name, role and createdAt from LocalStorage if not.
        if (!localStorage.getItem("createdAt")) {
            this.profileService.getProfile().subscribe(function (result) {
                _this.createdAt = _this.formatDate(new Date(result[0].createdAt));
                _this.name = localStorage.getItem("name");
                _this.role = localStorage.getItem("role");
                localStorage.setItem("createdAt", _this.createdAt);
            });
        }
        else {
            this.name = localStorage.getItem("name");
            this.role = localStorage.getItem("role");
            this.createdAt = localStorage.getItem("createdAt");
        }
        this.getProfileHistory();
    };
    ProfileViewComponent.prototype.formatDate = function (d) {
        var month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ProfileViewComponent.prototype.refineProfileHistory = function (searchHistory) {
        var refined = [];
        var usedSearches = [];
        for (var i = searchHistory.length - 1; i >= 0; i--) {
            if (usedSearches.length == 4) {
                break;
            }
            else {
                if (usedSearches.indexOf(searchHistory[i].name) < 0) {
                    usedSearches.push(searchHistory[i].name);
                    refined.push({ date: new Date(searchHistory[i].search_date), search: searchHistory[i].name });
                }
            }
        }
        return refined;
    };
    ProfileViewComponent.prototype.getProfileHistory = function () {
        return this.profileService.getProfileHistory();
    };
    ProfileViewComponent.prototype.createPieChartData = function (dic) {
        var keyCount = {};
        for (var _i = 0, dic_1 = dic; _i < dic_1.length; _i++) {
            var searchword = dic_1[_i];
            if (!(searchword.name in keyCount)) {
                keyCount[searchword.name] = 1;
            }
            else {
                keyCount[searchword.name] += 1;
            }
        }
        for (var search in keyCount) {
            if (this.chartLabels.length > 9) {
                break;
            }
            else {
                this.chartLabels.push(search);
                this.chartData.push(keyCount[search]);
            }
        }
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-view',
        template: __webpack_require__("../../../../../src/app/profile-view/profile-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-view/profile-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _b || Object])
], ProfileViewComponent);

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    // Connect function called by the table to retrieve one stream containing the data to render.
    function ExampleDataSource(profileHistory) {
        var _this = _super.call(this) || this;
        _this.profileHistory = profileHistory;
        return _this;
    }
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(this.profileHistory);
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    width: 60%;\r\n    margin: 50px auto;\r\n}\r\n\r\nform {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\nform > * {\r\n    width: 60%;\r\n    margin: auto;\r\n}\r\n\r\nbutton {\r\n    margin-top: 30px !important;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  margin-top: 1em !important;\r\n}\r\n\r\n.mat-card>:first-child {\r\n    margin: 30px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\r\n  <h1 class=\"mat-display-1\">Register:</h1>\r\n    <form #heroForm=\"ngForm\" name=\"register\" (ngSubmit)=\"onSubmit()\" >\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" name=\"fullName\" [(ngModel)]=\"fullName\" [formControl]=\"nameFormControl\" required>\r\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n          Name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput\r\n        type=\"email\"\r\n        placeholder=\"E-mail\"\r\n        name=\"username\"\r\n        [(ngModel)]=\"username\"\r\n        [formControl]=\"emailFormControl\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"\r\n        !emailFormControl.hasError('required')&&\r\n        emailFormControl.errors\">\r\n          Please enter a valid email address\r\n        </mat-error>\r\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n          Email is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Role\" name=\"role\" [(value)]=\"chosenRole\" required>\r\n          <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\r\n            {{role}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"chosenRole!='Customer'\">\r\n        <input matInput\r\n          type=\"password\"\r\n          placeholder=\"Secret\"\r\n          name=\"secret\"\r\n          [(ngModel)]=\"typedSecret\"\r\n          [formControl]=\"secretFormControl\"\r\n          required>\r\n        <mat-error *ngIf=\"secretFormControl.errors\">\r\n          The secret password is wrong\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput  type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" required>\r\n      </mat-form-field>\r\n      <button mat-raised-button>Register</button>\r\n      <p class=\"error\">{{errorMessage}}</p>\r\n    </form>\r\n    <div>\r\n      <button mat-button routerLink=\"/login\">Login</button>\r\n    </div>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* unused harmony export secretValidator */
/* unused harmony export validateEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Error when invalid control is dirty, touched, or submitted
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

// Validator function for the secret admin password
function secretValidator(control) {
    var secret = "turtleneck";
    var typedSecret = control.value;
    if (secret == typedSecret) {
        return null;
    }
    else {
        return control.value;
    }
}
function validateEmail(control) {
    var email = control.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        return null;
    }
    else {
        return control.value;
    }
}
var RegisterComponent = (function () {
    ///////////////////////////////////
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.fullName = "";
        this.username = "";
        this.password = "";
        this.chosenRole = "Customer";
        this.roles = [
            "Admin",
            "CEO",
            "Employee",
            "Customer"
        ];
        this.secret = "turtleneck";
        this.typedSecret = "";
        this.wrongSecret = false;
        /////// Form validators ////////////
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            validateEmail
        ]);
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
        ]);
        this.secretFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.typedSecret, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            secretValidator
        ]);
        this.errorMessage = "";
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    // Server result checker
    RegisterComponent.prototype.validateRegisterFeedback = function (res) {
        var _this = this;
        if (res.status == 200) {
            this.userService.login(res.credentials.username, res.credentials.password).subscribe(function (result) {
                if (result == 200) {
                    _this.router.navigate(['']);
                }
                else {
                    _this.errorMessage = "Ops! Something went wrong. Please try again laster.";
                    _this.router.navigate(['/login']);
                }
            });
        }
        else if (res.status == 409) {
            this.errorMessage = res.message;
        }
        else if (res.status == 501) {
            this.errorMessage = "Problems with the servers. Try again later.";
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.createdAt = new Date;
        var user = {
            name: this.fullName,
            username: this.username,
            password: this.password,
            createdAt: this.createdAt,
            role: this.chosenRole,
            search_history: []
        };
        // No empty strings allowed
        if (this.fullName === "" || this.username === "" || this.password === "") {
            this.errorMessage = "All fields must be filled out";
        }
        else {
            // If user wants to register as admin, check secret
            if (this.chosenRole != "Customer") {
                if (this.typedSecret === this.secret) {
                    this.userService.register(user).subscribe(function (res) {
                        _this.validateRegisterFeedback(res);
                    });
                }
                // Otherwise create user of type 'Customer'
            }
            else {
                this.userService.register(user).subscribe(function (res) {
                    _this.validateRegisterFeedback(res);
                });
            }
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/addnew/addnew.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addnew-container {\r\n    margin: 0vh 8vw;\r\n}\r\n\r\n.addButton {\r\n    text-align: right;\r\n}\r\n\r\n.form {\r\n    background-color: #FCFDFD;\r\n    margin-top: 20px;\r\n    margin-bottom: 8vh;\r\n}\r\n\r\n.btn-color {\r\n    color: #38a6a6;\r\n}\r\n.btn-color-inverse {\r\n    background-color: #38a6a6;\r\n    color: #fff;\r\n}\r\n\r\n.form-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.display-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.display-image,\r\n.display-content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.display-image img {\r\n    height: 250px;\r\n    width: 250px\r\n}\r\n\r\n.right-align {\r\n  text-align: right;\r\n}\r\ninput.right-align::-webkit-outer-spin-button,\r\ninput.right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\n\r\nmat-icon {\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n}\r\n\r\nmat-form-field {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    padding: 25px;\r\n    width: 80%;\r\n    min-width: 200px;\r\n}\r\nmat-form-field button{\r\n    float: right;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n    text-align: left;\r\n    padding: 5px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/addnew/addnew.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"addnew-container\">\r\n    <div class=\"addButton\">\r\n        <button *ngIf=\"!showForm\" (click)=\"showForm = !showForm\" mat-raised-button class=\"btn-color\">+ ADD NEW</button>\r\n        <button *ngIf=\"showForm\" (click)=\"showForm = !showForm\" mat-raised-button class=\"btn-color\">HIDE SECTION</button>\r\n    </div>\r\n    <div *ngIf=\"showForm\" class=\"form\">\r\n        <mat-card>\r\n            <form [formGroup]=\"formGroup\" *ngIf=\"!successful\" (keydown.enter)=\"$event.preventDefault()\" (ngSubmit)=\"onSubmit()\">\r\n                <mat-horizontal-stepper  formArrayName=\"formArray\" linear>\r\n\r\n                  <mat-step formGroupName=\"0\" [stepControl]=\"formArray.get([0])\">\r\n                      <ng-template matStepLabel>Name</ng-template>\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Product Name\" formControlName=\"name\">\r\n                      </mat-form-field>\r\n                      <div>\r\n                        <button mat-button matStepperNext class=\"btn-color\" type=\"button\">Next</button>\r\n                      </div>\r\n                  </mat-step>\r\n\r\n              <mat-step formGroupName=\"1\" [stepControl]=\"formArray.get([1])\">\r\n                  <ng-template matStepLabel>General Information</ng-template>\r\n                  <div class=\"form-container\">\r\n                      <mat-form-field>\r\n                          <mat-select placeholder=\"Category\" formControlName=\"category\" name=\"Category\">\r\n                            <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\r\n                              {{category}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                      </mat-form-field>\r\n                      <mat-form-field>\r\n                          <mat-select placeholder=\"Producer\" formControlName=\"producer\" name=\"Producer\">\r\n                            <mat-option *ngFor=\"let producer of producers\" [value]=\"producer\">\r\n                              {{producer}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                      </mat-form-field>\r\n                      <mat-form-field>\r\n                          <mat-select placeholder=\"Origin\" formControlName=\"origin\" name=\"Origin\">\r\n                            <mat-option *ngFor=\"let origin of origins\" [value]=\"origin\">\r\n                              {{origin}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                      </mat-form-field>\r\n                  </div>\r\n                  <div>\r\n                    <button mat-button matStepperPrevious class=\"btn-color\" type=\"button\">Back</button>\r\n                    <button mat-button matStepperNext class=\"btn-color\" type=\"button\">Next</button>\r\n                  </div>\r\n              </mat-step>\r\n\r\n              <mat-step formGroupName=\"2\" [stepControl]=\"formArray.get([2])\">\r\n                  <ng-template matStepLabel>Weight/Price</ng-template>\r\n                  <div class=\"form-container\">\r\n                      <mat-form-field>\r\n                        <input matInput type=\"number\" class=\"right-align\" placeholder=\"Product Price\" formControlName=\"price\">\r\n                        <span matSuffix>.00</span>\r\n                        <mat-hint align=\"end\">Price in NOK</mat-hint>\r\n                      </mat-form-field>\r\n                      <mat-form-field>\r\n                        <input matInput type=\"number\" class=\"right-align\" placeholder=\"Product Weight\" formControlName=\"weight\">\r\n                        <span matSuffix>&nbsp;G</span>\r\n                        <mat-hint align=\"end\">Weight in Gram</mat-hint>\r\n                      </mat-form-field>\r\n                  </div>\r\n                  <div>\r\n                    <button mat-button matStepperPrevious class=\"btn-color\" type=\"button\">Back</button>\r\n                    <button mat-button matStepperNext class=\"btn-color\" type=\"button\">Next</button>\r\n                  </div>\r\n              </mat-step>\r\n\r\n              <mat-step formGroupName=\"3\" [stepControl]=\"formArray.get([3])\">\r\n                  <ng-template matStepLabel>Description</ng-template>\r\n                  <mat-form-field>\r\n                    <textarea matInput placeholder=\"Product Description\" formControlName=\"description\"></textarea>\r\n                  </mat-form-field>\r\n                  <div>\r\n                    <button mat-button matStepperPrevious class=\"btn-color\" type=\"button\">Back</button>\r\n                    <button mat-button matStepperNext class=\"btn-color\" type=\"button\">Next</button>\r\n                  </div>\r\n              </mat-step>\r\n\r\n                  <mat-step>\r\n                    <ng-template matStepLabel>Complete</ng-template>\r\n                    <h1 class=\"mat-display-1\">{{formGroup.value.formArray[0].name}}</h1>\r\n                    <div class=\"display-container\">\r\n                        <div class=\"display-image\">\r\n                            <img src=\"'../../assets/img/categories/{{this.formGroup.value.formArray[1].category}}.png\"alt=\"bilde\">\r\n                        </div>\r\n                        <div class=\"display-content\">\r\n                            <ul>\r\n                                <li><mat-icon>list</mat-icon><span>{{formGroup.value.formArray[1].category}}</span></li>\r\n                                <li><mat-icon>domain</mat-icon><span>{{formGroup.value.formArray[1].producer}}</span></li>\r\n                                <li><mat-icon>public</mat-icon><span>{{formGroup.value.formArray[1].origin}}</span></li>\r\n                                <li><mat-icon>attach_money</mat-icon><span>{{formGroup.value.formArray[2].price}},- NOK</span></li>\r\n                                <li><mat-icon>fitness_center</mat-icon><span>{{formGroup.value.formArray[2].weight}}G</span></li>\r\n                                <li><mat-icon>edit</mat-icon><span>{{formGroup.value.formArray[3].description}}</span></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                      <button mat-button matStepperPrevious class=\"btn-color\" type=\"button\">Back</button>\r\n                      <button mat-raised-button class=\"btn-color-inverse\">ADD NEW PRODUCT</button>\r\n                    </div>\r\n                  </mat-step>\r\n                </mat-horizontal-stepper>\r\n            </form>\r\n            <div *ngIf=\"successful\">\r\n                <h2 class=\"mat-h2\">{{formGroup.value.formArray[0].name}} has been added to the assortment.</h2>\r\n                <div>\r\n                  <button mat-raised-button (click)=\"resetForm()\" class=\"btn-color-inverse\">Add another item</button>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-view/addnew/addnew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_variables__ = __webpack_require__("../../../../../src/assets/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddnewComponent = (function () {
    function AddnewComponent(_formBuilder, searchService) {
        this._formBuilder = _formBuilder;
        this.searchService = searchService;
        this.showForm = false;
        this.successful = false;
        this.categories = __WEBPACK_IMPORTED_MODULE_5__assets_variables__["a" /* categories */];
        this.producers = __WEBPACK_IMPORTED_MODULE_5__assets_variables__["c" /* producers */];
        this.origins = __WEBPACK_IMPORTED_MODULE_5__assets_variables__["b" /* countries */];
    }
    AddnewComponent.prototype.ngOnInit = function () {
        this.formArray = this._formBuilder.array([
            this._formBuilder.group({
                name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3)]],
            }),
            this._formBuilder.group({
                category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
                producer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
                origin: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
            }),
            this._formBuilder.group({
                price: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern("^[0-9]+$")]],
                weight: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern("^[0-9]+$")]]
            }),
            this._formBuilder.group({
                description: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10)]]
            }),
        ]);
        this.formGroup = this._formBuilder.group({
            formArray: this.formArray,
        });
    };
    AddnewComponent.prototype.onSubmit = function () {
        this.successful = true;
        var product = {
            'name': this.formGroup.value.formArray[0].name,
            'category': this.formGroup.value.formArray[1].category,
            'producer': this.formGroup.value.formArray[1].producer,
            'origin': this.formGroup.value.formArray[1].origin,
            'price': parseInt(this.formGroup.value.formArray[2].price),
            'weight': parseInt(this.formGroup.value.formArray[2].weight),
            'description': this.formGroup.value.formArray[3].description,
            'quantity': 0,
            'in_stock': false,
            'kilo_price': this.formGroup.value.formArray[2].price / (this.formGroup.value.formArray[2].weight / 1000) //Weight is in gram
        };
        this.searchService.addProduct(product);
    };
    AddnewComponent.prototype.resetForm = function () {
        this.formGroup.reset();
        this.successful = false;
    };
    return AddnewComponent;
}());
AddnewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addnew',
        template: __webpack_require__("../../../../../src/app/search-view/addnew/addnew.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/addnew/addnew.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], AddnewComponent);

var _a, _b;
//# sourceMappingURL=addnew.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/results/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-panel-title {\r\n    margin-left: 20px;\r\n}\r\n\r\nimg {\r\n    margin: auto;\r\n    height: 250px;\r\n    width: 250px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.stock-info h1{\r\n    margin-top: 20px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.inStock {\r\n    color: green;\r\n    margin-left: 10px;\r\n}\r\n.outOfStock {\r\n    color: red;\r\n    margin-left: 10px;\r\n}\r\n\r\nmat-icon {\r\n    padding-right: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.content-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    padding: 20px 50px;\r\n}\r\n\r\n.content-container div {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    min-width: 250px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: auto;\r\n}\r\n\r\n.list-info {\r\n    padding: 20px;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n    text-align: left;\r\n    padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/results/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [expanded]=\"step === index\" (opened)=\"setStep(index); addToViewed()\">\r\n    <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n         <span>{{data.name}}</span>\r\n        </mat-panel-title>\r\n        <mat-panel-title>\r\n         <span>{{data.producer}}</span>\r\n        </mat-panel-title>\r\n        <mat-panel-title>\r\n            <span *ngIf=\"data.in_stock\" class=\"inStock\">IN STOCK</span>\r\n            <span *ngIf=\"!data.in_stock\" class=\"outOfStock\">OUT OF STOCK</span>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div class=\"content-container\">\r\n          <div class=\"\">\r\n              <h1 class=\"mat-display-1\">{{data.name}}</h1>\r\n              <img [src]=\"pictureUrl\" [alt]=\"pictureUrl\" />\r\n          </div>\r\n          <div class=\"list-info\">\r\n              <ul>\r\n                  <li><mat-icon>list</mat-icon><span>{{data.category}}</span></li>\r\n                  <li><mat-icon>domain</mat-icon><span>{{data.producer}}</span></li>\r\n                  <li><mat-icon>public</mat-icon><span>{{data.origin}}</span></li>\r\n                  <li><mat-icon>attach_money</mat-icon><span>{{data.price}},- NOK</span></li>\r\n                  <li><mat-icon>fitness_center</mat-icon><span>{{data.weight}}G</span></li>\r\n                  <li><mat-icon>edit</mat-icon><span>{{data.description}}</span></li>\r\n              </ul>\r\n          </div>\r\n          <div class=\"stock-info\">\r\n              <h1 class=\"mat-display-1\">STOCK STATUS:</h1>\r\n              <h2 class=\"mat-display-2\" *ngIf=\"data.in_stock\" class=\"inStock\">IN STOCK</h2>\r\n              <h3 class=\"mat-display-3\" *ngIf=\"!data.in_stock\" class=\"outOfStock\">OUT OF STOCK</h3>\r\n              <span><strong>{{data.quantity}}</strong> UNITS AVAILABLE</span>\r\n          </div>\r\n      </div>\r\n\r\n</mat-expansion-panel>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-view/results/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("../../../../../src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_results_service__ = __webpack_require__("../../../../../src/app/_services/results.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultComponent = (function () {
    function ResultComponent(resultsService, searchService, userService) {
        var _this = this;
        this.resultsService = resultsService;
        this.searchService = searchService;
        this.userService = userService;
        this.subscription = this.resultsService.getStep().subscribe(function (result) {
            _this.step = result;
        });
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.pictureUrl = '../../../assets/img/categories/' + this.data.category.toLowerCase() + '.png';
    };
    ResultComponent.prototype.setStep = function (index) {
        this.resultsService.setStep(index);
    };
    ResultComponent.prototype.addToViewed = function () {
        if (this.userService.isLoggedIn()) {
            this.searchService.addToHistory(this.data);
        }
    };
    return ResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */]) === "function" && _a || Object)
], ResultComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultComponent.prototype, "index", void 0);
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-result',
        template: __webpack_require__("../../../../../src/app/search-view/results/result/result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/results/result/result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_results_service__["a" /* ResultsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_results_service__["a" /* ResultsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ResultComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".results-container {\r\n    margin: 2vh 8vw 8vh;\r\n}\r\n\r\nh1, h2 {\r\n    text-transform: uppercase;\r\n    color: rgba(0,0,0,0.4);\r\n    padding: 20px;\r\n    margin: 0px;\r\n}\r\n\r\nh1 mat-icon {\r\n    position: relative;\r\n    top: 5px;\r\n}\r\n\r\nmat-card {\r\n    padding: 0px;\r\n}\r\n\r\nmat-paginator {\r\n    border-top: 1px solid rgba(0,0,0,0.1);\r\n}\r\n\r\nmat-toolbar {\r\n    padding-left: 2%;\r\n    padding-right: 50px;\r\n}\r\n\r\n\r\nmat-toolbar * {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.modalButton {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    color: #38a6a6;\r\n}\r\n\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"results-container\">\r\n    <mat-card>\r\n        <mat-toolbar>\r\n            <button mat-button type=\"button\" (click)=\"sort('name')\">Name <mat-icon *ngIf=\"sortBy=='name'\">{{sortAsc ? 'arrow_downward' : 'arrow_upward'}}</mat-icon></button>\r\n            <button mat-button type=\"button\" (click)=\"sort('producer')\">Producer <mat-icon *ngIf=\"sortBy=='producer'\">{{sortAsc ? 'arrow_downward' : 'arrow_upward'}}</mat-icon></button>\r\n            <button mat-button type=\"button\" (click)=\"sort('in_stock')\">Stock Status <mat-icon *ngIf=\"sortBy=='in_stock'\">{{sortAsc ? 'arrow_downward' : 'arrow_upward'}}</mat-icon></button>\r\n        </mat-toolbar>\r\n        <div class=\"loading-shade\"\r\n           *ngIf=\"isLoading\">\r\n           <mat-spinner></mat-spinner>\r\n        </div>\r\n        <mat-accordion class=\"example-headers-align\">\r\n            <div *ngFor=\"let result of results; index as index;\">\r\n                <app-result [data]=\"result\" [index]=\"index\"></app-result>\r\n            </div>\r\n        </mat-accordion>\r\n        <div *ngIf=\"results.length == 0\">\r\n            <h1 class=\"mat-h1\" *ngIf=\"searched\"><mat-icon>search</mat-icon> NO PRODUCTS FOUND</h1>\r\n            <h1 class=\"mat-h2\" *ngIf=\"!searched\">NO PRODUCTS</h1>\r\n        </div>\r\n        <mat-paginator [length]=\"listLength\" [pageSize]=\"5\" (page)=\"onPaginateChange($event)\"> </mat-paginator>\r\n    </mat-card>\r\n    <button *ngIf=\"results.length > 1\" mat-button class=\"modalButton\" (click)=\"openDialog()\" type=\"button\">DISPLAY WORD CLOUD OF RESULTS</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-view/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordcloud_wordcloud_component__ = __webpack_require__("../../../../../src/app/search-view/results/wordcloud/wordcloud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsComponent = (function () {
    function ResultsComponent(dialog, searchService) {
        var _this = this;
        this.dialog = dialog;
        this.searchService = searchService;
        this.results = [];
        this.listLength = 0;
        this.pageEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* PageEvent */];
        this.searched = false;
        this.sortBy = '';
        this.sortAsc = true;
        this.pageEvent = { pageIndex: 0, pageSize: 5, length: 10 };
        this.subscription = this.searchService.getResults().subscribe(function (results) {
            _this.results = results[0];
            _this.listLength = results[1];
            _this.searched = true;
        });
        this.subscription = this.searchService.getIsLoading().subscribe(function (results) {
            _this.isLoading = results;
        });
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__wordcloud_wordcloud_component__["a" /* WordcloudComponent */], {
            width: '75%',
            height: '75%',
            data: { results: this.searchService.getAll().subscribe(function (result) { return result; }) }
        });
    };
    ResultsComponent.prototype.onPaginateChange = function (event) {
        this.pageEvent = event;
        var sort = {
            "sortBy": this.sortBy,
            "order": this.sortBy === 'in_stock' ? this.sortAsc ? -1 : 1 : this.sortAsc ? 1 : -1,
        };
        this.searchService.update(event.pageIndex, this.sortBy.length > 0 ? sort : 0).subscribe();
    };
    ResultsComponent.prototype.sort = function (sortParam) {
        if (this.results.length != 0) {
            this.sortBy === sortParam ? this.sortAsc = !this.sortAsc : this.sortAsc = true;
            this.sortBy = sortParam;
            var sort = {
                "sortBy": sortParam,
                "order": sortParam === 'in_stock' ? this.sortAsc ? -1 : 1 : this.sortAsc ? 1 : -1,
            };
            this.searchService.update(this.pageEvent.pageIndex, sort).subscribe();
        }
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/search-view/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], ResultsComponent);

var _a, _b;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/results/wordcloud/wordcloud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-icon {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    transition: all .2s ease-in-out;\r\n    font-size: 4em;\r\n    float: right;\r\n    margin-right: 40px;\r\n}\r\n\r\nmat-icon:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n    margin-top: 100px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    padding-top: 50px;\r\n    text-transform: uppercase;\r\n    color: rgba(0,0,0,0.8);\r\n    font-weight: 500;\r\n    font-size: 3.5em;\r\n    line-height: 110%;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.descText {\r\n    text-align: center;    \r\n}\r\n\r\nsvg {\r\n    position: relative;\r\n    top: 100%;\r\n    left: 5%;\r\n    -webkit-transform: scale(1.5) !important;\r\n            transform: scale(1.5) !important;\r\n}\r\n\r\n.wordcloud {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/results/wordcloud/wordcloud.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wordcloud-container\">\r\n    <mat-icon (click)=\"this.dialogRef.close()\">close</mat-icon>\r\n    <h1 class=\"mat-display-1\">Word Cloud</h1>\r\n    <div class=\"descText\">Stock quantity of searched items</div>\r\n    <div class=\"wordcloud\" *ngIf=\"wordData.length > 0\" AgWordCloud [wordData]=\"wordData\" [options]=\"options\"></div>\r\n    <mat-spinner *ngIf=\"wordData.length === 0\"></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-view/results/wordcloud/wordcloud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordcloudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var WordcloudComponent = (function () {
    function WordcloudComponent(searchService, dialogRef, data) {
        this.searchService = searchService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.wordData = [];
        this.options = {
            settings: {
                minFontSize: 10,
                maxFontSize: 100,
            },
            margin: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            },
            labels: false
        };
    }
    WordcloudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getAll().subscribe(function (result) {
            result.map(function (object) { return _this.wordData.push({ text: object.name, size: object.quantity }); });
        });
    };
    WordcloudComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return WordcloudComponent;
}());
WordcloudComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wordcloud',
        template: __webpack_require__("../../../../../src/app/search-view/results/wordcloud/wordcloud.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/results/wordcloud/wordcloud.component.css")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]) === "function" && _b || Object, Object])
], WordcloudComponent);

var _a, _b;
//# sourceMappingURL=wordcloud.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/search-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/search-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-view-comtainer\">\r\n    <app-search></app-search>\r\n    <app-addnew *ngIf=\"isEmployee()\"></app-addnew>\r\n    <app-results></app-results>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-view/search-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchViewComponent = (function () {
    function SearchViewComponent(userService) {
        this.userService = userService;
    }
    SearchViewComponent.prototype.ngOnInit = function () {
    };
    SearchViewComponent.prototype.isEmployee = function () {
        return this.userService.isLoggedIn() && localStorage.role === 'Employee';
    };
    return SearchViewComponent;
}());
SearchViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-view',
        template: __webpack_require__("../../../../../src/app/search-view/search-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/search-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SearchViewComponent);

var _a;
//# sourceMappingURL=search-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-container {\r\n    margin: 8vh 8vw;\r\n    background-color: #FCFDFD;\r\n}\r\n\r\nmat-card {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\ntr {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\ntd {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    min-width: 225px;\r\n}\r\n\r\nmat-checkbox {\r\n    display: inline-block;\r\n    margin: 50px auto 30px;\r\n\r\n}\r\n\r\ninput {\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n}\r\n\r\n.search-icon {\r\n    margin: auto;\r\n    display: block;\r\n    font-size: 5em;\r\n    height: 80px;\r\n    width: 80px;\r\n    transition: all .2s ease-in-out;\r\n    color: #fff;\r\n    font-weight: 500;\r\n}\r\n\r\nmat-form-field {\r\n    margin: 5px;\r\n}\r\n\r\n.main-search {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    -webkit-box-flex: 10;\r\n        -ms-flex: 10;\r\n            flex: 10;\r\n}\r\n\r\n.searchButton:hover > mat-icon {\r\n    -webkit-transform: scale(1.08);\r\n            transform: scale(1.08);\r\n}\r\n\r\n.searchBar {\r\n    padding: 50px 80px 20px 80px;\r\n}\r\n\r\n@media (max-width: 415px) {\r\n    .searchBar {\r\n        padding: 10px 20px 5px 20px;\r\n    }\r\n}\r\n\r\n.expandButton {\r\n    float: right;\r\n    color: #38a6a6;\r\n}\r\n\r\n.searchButton {\r\n    background-color: #38a6a6;\r\n    transition: all .3s ease;\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2;\r\n            flex: 2;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n.searchButton:hover {\r\n    cursor: pointer;\r\n    background-color: #2B9999;\r\n}\r\n\r\n.expansionTable {\r\n  margin: 50px 80px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.expanded {\r\n    padding-bottom: 0;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  height: 100%\r\n}\r\n\r\n.last-row {\r\n    height: 100px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.last-row p {\r\n    float: left;\r\n    font-size: 12px;\r\n}\r\n\r\n@media (max-width: 585px) {\r\n    mat-card {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n    .expansionTable {\r\n        margin: 10px 5% 50px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 898px) {\r\n    .collapseButton {\r\n        margin-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #38a6a6;\r\n}\r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: #38a6a6;\r\n}\r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #38a6a6;\r\n}\r\n::ng-deep .mat-accent .mat-slider-thumb-label-text {\r\n    color: #fff;\r\n}\r\n\r\n::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background {\r\n    background-color: #38a6a6;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\r\n    <mat-card>\r\n        <div class=\"main-search\">\r\n            <div class=\"searchBar\" [class.expanded]=\"showExpantion\">\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input matInput [style.fontSize.px]=\"30\" id=\"input-field\"  name=\"query\" (keyup.enter)=\"search()\" [(ngModel)]=\"query\">\r\n                    <mat-placeholder><mat-icon>search</mat-icon> SEARCH TO FIND PRODUCTS</mat-placeholder>\r\n                  </mat-form-field>\r\n                </form>\r\n                <button mat-button class=\"expandButton\" type=\"button\" *ngIf=\"!showExpantion\" (click)=\"expandSearch()\">Show advanced settings</button>\r\n            </div>\r\n            <div class=\"expansionTable\" *ngIf=\"showExpantion\">\r\n                <form class=\"example-form\">\r\n                    <table class=\"full-width\" cellspacing=\"0\">\r\n                      <tr>\r\n                         <td><mat-form-field class=\"full-width margin-right\">\r\n                            <mat-select placeholder=\"Category\" [(ngModel)]=\"category\" name=\"category\">\r\n                              <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\r\n                                {{category}}\r\n                              </mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field></td>\r\n                          <td><mat-form-field class=\"full-width margin-left\">\r\n                            <mat-select placeholder=\"Producer\" [(ngModel)]=\"producer\" name=\"producer\">\r\n                              <mat-option *ngFor=\"let producer of producers\" [value]=\"producer\">\r\n                                {{producer}}\r\n                              </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field></td>\r\n                      </tr>\r\n                      <tr class=\"last-row\">\r\n                        <td><p class=\"mat-subheading-1\">Maximum price:</p>\r\n                            <mat-slider class=\"full-width\" [(ngModel)]=\"price\" [max]=\"200\" [min]=\"5\" [step]=\"5\" [thumb-label]=\"true\" name=\"price\"></mat-slider></td>\r\n                        <td><mat-checkbox class=\"full-width theme-color\" name=\"inStock\" [(ngModel)]=\"inStock\">Only display products in stock</mat-checkbox></td>\r\n                      </tr>\r\n                    </table>\r\n                </form>\r\n                <button mat-button class=\"expandButton collapseButton\" type=\"button\" *ngIf=\"showExpantion\" (click)=\"expandSearch()\">Hide advanced settings</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchButton\" (click)=\"search()\">\r\n            <mat-icon class=\"search-icon\">search</mat-icon>\r\n        </div>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-view/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_variables__ = __webpack_require__("../../../../../src/assets/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.query = '';
        this.showExpantion = false;
        this.categories = ["Show all"].concat(__WEBPACK_IMPORTED_MODULE_2__assets_variables__["a" /* categories */]);
        this.producers = ["Show all"].concat(__WEBPACK_IMPORTED_MODULE_2__assets_variables__["c" /* producers */]);
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.category = this.categories[0];
        this.producer = this.producers[0];
        this.price = 1000;
        this.inStock = false;
    };
    SearchComponent.prototype.expandSearch = function () {
        this.showExpantion = !this.showExpantion;
    };
    SearchComponent.prototype.search = function () {
        $("#input-field").blur();
        var filter = {
            "query": this.query,
            "advanced": this.showExpantion,
        };
        if (this.showExpantion) {
            filter.category = this.category;
            filter.producer = this.producer;
            filter.price = this.price;
            filter.inStock = this.inStock;
        }
        this.searchService.get(filter, 0, 0).subscribe();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search-view/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/assets/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return producers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre and Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
var producers = ["Bama", "Coca Cola", "Define", "Diplom-is", "Dr. Oetker", "E.C. Dahls", "Evergood", "First Price", "Freia", "Gilde", "Jacobs", "Nidar", "Pink Lady", "Prior", "Q-meieriene", "Ringnes", "Tine", "Toro"];
var categories = ["Alcoholic beverages", "Beverages", "Bread", "Candy", "Canned food", "Chicken", "Chips", "Chocolate", "Coffee", "Dairy", "Dry foods", "Fish", "Frozen foods", "Fruit and vegetables", "Household items", "Hygiene", "Ice cream", "Meat", "Pastry", "Pet food", "Spices", "Uncategorized"];
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map