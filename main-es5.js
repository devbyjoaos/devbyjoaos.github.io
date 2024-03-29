function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/guards/auth.guard */
    "./src/app/auth/guards/auth.guard.ts");
    /* harmony import */


    var _auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/guards/random.guard */
    "./src/app/auth/guards/random.guard.ts");
    /* harmony import */


    var _selec_itens_selec_itens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./selec-itens/selec-itens.component */
    "./src/app/selec-itens/selec-itens.component.ts");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confirmation/confirmation.component */
    "./src/app/confirmation/confirmation.component.ts");
    /* harmony import */


    var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./thanks/thanks.component */
    "./src/app/thanks/thanks.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'escolha/:name',
      component: _selec_itens_selec_itens_component__WEBPACK_IMPORTED_MODULE_5__["SelecItensComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'confirmar/:name',
      component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'obrigado/:name',
      component: _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_7__["ThanksComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'inicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | overview-overview-module */
        "overview-overview-module").then(__webpack_require__.bind(null,
        /*! ./overview/overview.module */
        "./src/app/overview/overview.module.ts")).then(function (m) {
          return m.OverviewModule;
        });
      },
      canActivate: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_4__["RandomGuard"]],
      canLoad: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_4__["RandomGuard"]]
    }, {
      path: 'configuracao',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-settings-user-settings-module */
        "user-settings-user-settings-module").then(__webpack_require__.bind(null,
        /*! ./user-settings/user-settings.module */
        "./src/app/user-settings/user-settings.module.ts")).then(function (m) {
          return m.UserSettingsModule;
        });
      },
      canActivate: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_4__["RandomGuard"]],
      canLoad: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_4__["RandomGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: '<router-outlet></router-outlet>'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _overview_services_overview_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./overview/services/overview.service */
    "./src/app/overview/services/overview.service.ts");
    /* harmony import */


    var _login_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/register/register.component */
    "./src/app/login/register/register.component.ts");
    /* harmony import */


    var _selec_itens_selec_itens_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./selec-itens/selec-itens.component */
    "./src/app/selec-itens/selec-itens.component.ts");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./confirmation/confirmation.component */
    "./src/app/confirmation/confirmation.component.ts");
    /* harmony import */


    var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./thanks/thanks.component */
    "./src/app/thanks/thanks.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_auth_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _overview_services_overview_service__WEBPACK_IMPORTED_MODULE_10__["OverviewService"]],
      imports: [[_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _login_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _selec_itens_selec_itens_component__WEBPACK_IMPORTED_MODULE_12__["SelecItensComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationComponent"], _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_14__["ThanksComponent"]],
        imports: [_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _login_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _selec_itens_selec_itens_component__WEBPACK_IMPORTED_MODULE_12__["SelecItensComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationComponent"], _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_14__["ThanksComponent"]],
          imports: [_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"]],
          providers: [_auth_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _overview_services_overview_service__WEBPACK_IMPORTED_MODULE_10__["OverviewService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/auth/guards/auth.guard.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./token.interceptor */
    "./src/app/auth/token.interceptor.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_random_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/random.guard */
    "./src/app/auth/guards/random.guard.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _guards_random_guard__WEBPACK_IMPORTED_MODULE_7__["RandomGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _guards_random_guard__WEBPACK_IMPORTED_MODULE_7__["RandomGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"],
            multi: true
          }],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/guards/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/auth/guards/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(loginService, router) {
        _classCallCheck(this, AuthGuard);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.loginService.isLoggedIn()) {
            this.router.navigate(['/inicio']);
          }

          return !this.loginService.isLoggedIn();
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/guards/random.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/guards/random.guard.ts ***!
    \*********************************************/

  /*! exports provided: RandomGuard */

  /***/
  function srcAppAuthGuardsRandomGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomGuard", function () {
      return RandomGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RandomGuard = /*#__PURE__*/function () {
      function RandomGuard(loginService, router) {
        _classCallCheck(this, RandomGuard);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(RandomGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.canLoad();
        }
      }, {
        key: "canLoad",
        value: function canLoad() {
          if (!this.loginService.isLoggedIn()) {
            this.router.navigate(['/login']);
          }

          return this.loginService.isLoggedIn();
        }
      }]);

      return RandomGuard;
    }();

    RandomGuard.ɵfac = function RandomGuard_Factory(t) {
      return new (t || RandomGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RandomGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RandomGuard,
      factory: RandomGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/services/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppAuthServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/snackbar/snackbar.service */
    "./src/app/components/snackbar/snackbar.service.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(httpClient, dialog, snackbar) {
        _classCallCheck(this, LoginService);

        this.httpClient = httpClient;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.options = {};
        this.JWT_TOKEN = 'JWT_TOKEN';
        this.REFRESH_TOKEN = 'REFRESH_TOKEN';
        this.LOGGED_USER = 'LOGGED_USER';
        this.options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('no-error', 'true').set('Content-Type', 'application/x-www-form-urlencoded');
        this.options.responseType = 'json';
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(user) {
          var _this = this;

          return this.httpClient.post('http://localhost:8080/autenticar', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (info) {
            return _this.doLoginUser(info.userInfo, info.tokens);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.snackbar.error('Usuário ou senha inválidos.');

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.getJwtToken();
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.doLogoutUser();
          return this.httpClient.post('http://localhost:8080/sair', {
            refreshToken: this.getRefreshToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return _this2.doLogoutUser();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            alert(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }));
        }
      }, {
        key: "doLoginUser",
        value: function doLoginUser(loginInfo, tokens) {
          this.loggedUser = loginInfo;
          this.storeLoggedUser(this.loggedUser);
          this.storeTokens(tokens);
        }
      }, {
        key: "doLogoutUser",
        value: function doLogoutUser() {
          this.loggedUser = null;
          this.removeLoggedUser();
          this.removeTokens();
        }
      }, {
        key: "storeTokens",
        value: function storeTokens(tokens) {
          sessionStorage.setItem(this.JWT_TOKEN, tokens.token);
          sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
        }
      }, {
        key: "storeLoggedUser",
        value: function storeLoggedUser(userInfo) {
          sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(userInfo));
        }
      }, {
        key: "removeLoggedUser",
        value: function removeLoggedUser() {
          sessionStorage.removeItem(this.LOGGED_USER);
        }
      }, {
        key: "removeTokens",
        value: function removeTokens() {
          sessionStorage.removeItem(this.JWT_TOKEN);
          sessionStorage.removeItem(this.REFRESH_TOKEN);
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this3 = this;

          return this.httpClient.post("http://localhost:8080/refresh", {
            refreshToken: this.getRefreshToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tokens) {
            _this3.storeJwtToken(tokens.token);
          }));
        }
      }, {
        key: "storeJwtToken",
        value: function storeJwtToken(jwt) {
          sessionStorage.setItem(this.JWT_TOKEN, jwt);
        }
      }, {
        key: "getJwtToken",
        value: function getJwtToken() {
          return sessionStorage.getItem(this.JWT_TOKEN);
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return sessionStorage.getItem(this.REFRESH_TOKEN);
        }
      }, {
        key: "getLoggedUser",
        value: function getLoggedUser() {
          return JSON.parse(sessionStorage.getItem(this.LOGGED_USER));
        }
      }, {
        key: "registerUser",
        value: function registerUser(registerDto) {
          return this.httpClient.post('http://localhost:8080/registrar', registerDto);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/token.interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/auth/token.interceptor.ts ***!
    \*******************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppAuthTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(loginService, router) {
        _classCallCheck(this, TokenInterceptor);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this4 = this;

          if (this.loginService.getJwtToken()) {
            var token = this.loginService.getJwtToken();
            var authReq = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return _this4.handleError(error);
            }));
          }

          return next.handle(request);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.error);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_error_login_error_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./login-error/login-error.component */
    "./src/app/components/login-error/login-error.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/header/header.component.ts");

    var MaterialModules = [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      imports: [[MaterialModules], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_login_error_login_error_component__WEBPACK_IMPORTED_MODULE_36__["LoginErrorComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"]],
        imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"]],
        exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_error_login_error_component__WEBPACK_IMPORTED_MODULE_36__["LoginErrorComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"]],
          imports: [MaterialModules],
          exports: [MaterialModules, _header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_login_login_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/login/login-objects */
    "./src/app/login/login-objects.ts");
    /* harmony import */


    var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(loginService, router) {
        _classCallCheck(this, HeaderComponent);

        this.loginService = loginService;
        this.router = router;
        this.userInfo = new src_app_login_login_objects__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]();
        this.userInfo = this.loginService.getLoggedUser();
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          this.loginService.logout();
          window.location.reload();
        }
      }, {
        key: "goToConfiguration",
        value: function goToConfiguration() {
          this.router.navigate(['/configuracao']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 22,
      vars: 2,
      consts: [[2, "height", "50px", "background", "coral", "background-size", "cover", "background-repeat", "no-repeat", "overflow", "visible", "display", "flex", "align-items", "center"], [2, "display", "flex"], ["mat-icon-button", ""], [2, "flex", "1 1 auto"], ["mat-icon-button", "", 1, "example-icon", 3, "click"], ["mat-icon-button", "", 1, "example-icon", 3, "matMenuTriggerFor"], ["xPosition", "before", 2, "padding", "0"], ["user", "matMenu"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "color", "coral"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "cursor", "pointer", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() {
            return ctx.goToConfiguration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_17_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.nickname);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"]],
      styles: [".mat-toolbar-row, .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n  .mat-toolbar-multiple-rows {\n  min-height: 50px !important;\n}\n\n  .mat-button-ripple.mat-ripple, .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n  .mat-menu-panel {\n  max-height: 230px !important;\n  max-width: 498px !important;\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFx2aWN0b1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxLYXNwcGVyXFxlc3R1ZG9cXGFuYUp1bGlhRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURHQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzIHtcclxuICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1idXR0b24tcmlwcGxlLm1hdC1yaXBwbGUsIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgbWF4LWhlaWdodDogMjMwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDQ5OHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjo6bmctZGVlcCAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xuICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUubWF0LXJpcHBsZSwgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC1oZWlnaHQ6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDk4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login-error/login-error.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/login-error/login-error.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LoginErrorComponent */

  /***/
  function srcAppComponentsLoginErrorLoginErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginErrorComponent", function () {
      return LoginErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoginErrorComponent = /*#__PURE__*/function () {
      function LoginErrorComponent(dialogRef) {
        _classCallCheck(this, LoginErrorComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(LoginErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return LoginErrorComponent;
    }();

    LoginErrorComponent.ɵfac = function LoginErrorComponent_Factory(t) {
      return new (t || LoginErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    LoginErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginErrorComponent,
      selectors: [["app-login-error"]],
      decls: 5,
      vars: 0,
      consts: [["mat-mat-dialog-title", "", 2, "width", "200"], ["mat-dialog-content", ""], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "200px", 3, "click"]],
      template: function LoginErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usu\xE1rio ou senha incorretos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginErrorComponent_Template_button_click_3_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-error',
          templateUrl: './login-error.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/snackbar/snackbar.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/snackbar/snackbar.service.ts ***!
    \*********************************************************/

  /*! exports provided: SnackBarService */

  /***/
  function srcAppComponentsSnackbarSnackbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
      return SnackBarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackBarService = /*#__PURE__*/function () {
      function SnackBarService(snackBar) {
        _classCallCheck(this, SnackBarService);

        this.snackBar = snackBar;
      }

      _createClass(SnackBarService, [{
        key: "success",
        value: function success(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Fechar';
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
          this.snackBar.open(message, action, {
            duration: duration,
            panelClass: ['success-snackbar']
          });
        }
      }, {
        key: "warning",
        value: function warning(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Fechar';
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
          this.snackBar.open(message, action, {
            duration: duration,
            panelClass: ['warn-snackbar']
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Fechar';
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
          this.snackBar.open(message, action, {
            duration: duration,
            panelClass: ['error-snackbar']
          });
        }
      }]);

      return SnackBarService;
    }();

    SnackBarService.ɵfac = function SnackBarService_Factory(t) {
      return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackBarService,
      factory: SnackBarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/confirmation/confirmation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/confirmation/confirmation.component.ts ***!
    \********************************************************/

  /*! exports provided: ConfirmationComponent */

  /***/
  function srcAppConfirmationConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _selec_itens_itens_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../selec-itens/itens-objects */
    "./src/app/selec-itens/itens-objects.ts");
    /* harmony import */


    var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/service.service */
    "./src/app/service/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ConfirmationComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "star_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "star_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.name, " ");
      }
    }

    var ConfirmationComponent = /*#__PURE__*/function () {
      function ConfirmationComponent(service, route, router) {
        var _this5 = this;

        _classCallCheck(this, ConfirmationComponent);

        this.service = service;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.productList = this.service.productList;
        this.route.params.subscribe(function (params) {
          _this5.name = params.name;

          if (!(_this5.service.productList.length > 0)) {
            _this5.router.navigate(["escolha", _this5.name]);
          }
        });
      }

      _createClass(ConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "conclude",
        value: function conclude() {
          var _this6 = this;

          this.productList.forEach(function (product) {
            var person = new _selec_itens_itens_objects__WEBPACK_IMPORTED_MODULE_1__["Person"]();
            person.name = _this6.name;
            person.productId = product.id;

            _this6.service.concludeSelection(person).subscribe();
          });
          this.router.navigate(["obrigado", this.name]);
        }
      }]);

      return ConfirmationComponent;
    }();

    ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) {
      return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationComponent,
      selectors: [["app-confirmation"]],
      decls: 9,
      vars: 2,
      consts: [[2, "background", "linear-gradient(27deg, rgb(255, 245, 248) 2%, rgba(255,179,169) 100%)", "background-size", "cover", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], [2, "background-color", "white", "bottom", "0", "max-height", "70% !important", "color", "black", "min-height", "35%", "align-content", "space-between", "min-width", "20%"], [2, "opacity", "1 !important", "text-align", "center", "margin-bottom", "10px", "color", "rgba(255,179,169)"], ["class", "row", "style", "align-content: center; margin-top: 0.3em; margin-bottom: 0.3em;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "center", "min-height", "10%"], ["mat-raised-button", "", 2, "margin-top", "5px", "margin-bottom", "5px", "bottom", "0", "position", "absolute", "background-color", "rgba(255,179,169)", 3, "click"], [1, "row", 2, "align-content", "center", "margin-top", "0.3em", "margin-bottom", "0.3em"], ["readonly", "true", "disabled", "true", 2, "text-align", "center", "font-size", "16px", "align-items", "center"], [2, "color", "rgba(255,179,169)"]],
      template: function ConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfirmationComponent_div_5_Template, 7, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_7_listener() {
            return ctx.conclude();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Concluir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: [".mat-form-field-wrapper {\n  padding-bottom: 0.34375em;\n}\n\n.mat-raised-button[_ngcontent-cnd-c102][_ngcontent-%COMP%], .mat-fab[_ngcontent-cnd-c102][_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-cnd-c102][_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #2b5feb !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0aW9uL0M6XFxVc2Vyc1xcdmljdG9cXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xcS2FzcHBlclxcZXN0dWRvXFxhbmFKdWxpYUZyb250L3NyY1xcYXBwXFxjb25maXJtYXRpb25cXGNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0FDQUY7O0FET0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4zNDM3NWVtO1xyXG59XHJcblxyXG4uYTpob3ZlcntcclxuXHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbltfbmdjb250ZW50LWNuZC1jMTAyXSwgLm1hdC1mYWJbX25nY29udGVudC1jbmQtYzEwMl0sIC5tYXQtbWluaS1mYWJbX25nY29udGVudC1jbmQtYzEwMl0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjVmZWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMzQzNzVlbTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uW19uZ2NvbnRlbnQtY25kLWMxMDJdLCAubWF0LWZhYltfbmdjb250ZW50LWNuZC1jMTAyXSwgLm1hdC1taW5pLWZhYltfbmdjb250ZW50LWNuZC1jMTAyXSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1ZmViICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirmation',
          templateUrl: './confirmation.component.html',
          styleUrls: ['./confirmation.component.scss']
        }]
      }], function () {
        return [{
          type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login-objects.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login-objects.ts ***!
    \****************************************/

  /*! exports provided: LoginDto, Tokens, UserInfo, LoginInfo, RegisterDto */

  /***/
  function srcAppLoginLoginObjectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginDto", function () {
      return LoginDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tokens", function () {
      return Tokens;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfo", function () {
      return UserInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginInfo", function () {
      return LoginInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterDto", function () {
      return RegisterDto;
    });

    var LoginDto = function LoginDto() {
      _classCallCheck(this, LoginDto);
    };

    var Tokens = function Tokens() {
      _classCallCheck(this, Tokens);
    };

    var UserInfo = function UserInfo() {
      _classCallCheck(this, UserInfo);
    };

    var LoginInfo = function LoginInfo() {
      _classCallCheck(this, LoginInfo);
    };

    var RegisterDto = function RegisterDto() {
      _classCallCheck(this, RegisterDto);
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login-objects */
    "./src/app/login/login-objects.ts");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/snackbar/snackbar.service */
    "./src/app/components/snackbar/snackbar.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, router, snackbar) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
        this.snackbar = snackbar;
        this.loginDto = new _login_objects__WEBPACK_IMPORTED_MODULE_1__["LoginDto"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginClick",
        value: function loginClick() {
          this.router.navigate(["escolha", this.name]);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 14,
      vars: 1,
      consts: [[2, "background", "linear-gradient(27deg, rgb(255, 245, 248) 2%, rgba(255,179,169) 100%)", "background-size", "cover", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], [2, "background-color", "white", "bottom", "0"], [2, "opacity", "1 !important", "text-align", "center", "margin-bottom", "10px", "color", "coral"], ["width", "320", "height", "240", "src", "../../assets/foto-inicio-cha.jpg"], [2, "opacity", "1 !important", "color", "black"], [1, "row", 2, "justify-content", "center", "display", "flex"], [2, "width", "80%"], [2, "justify-content", "center", "display", "flex"], ["matInput", "", "name", "nickname", "color", "blue", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 2, "width", "80%", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
            return ctx.loginClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".mat-form-field-ripple {\n  background-color: black !important;\n}\n\n .mat-focused .mat-form-field-label {\n  color: black !important;\n}\n\n .mat-form-field-label {\n  color: black !important;\n}\n\n .mat-form-field-underline {\n  background-color: black !important;\n}\n\n  .mat-flat-button, .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ffb3a9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx2aWN0b1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxLYXNwcGVyXFxlc3R1ZG9cXGFuYUp1bGlhRnJvbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURBQztFQUNDLHVCQUFBO0FDR0Y7O0FEREM7RUFDQyxrQ0FBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7O1xyXG4gfVxyXG46Om5nLWRlZXAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuIH1cclxuIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMTc5LDE2OSkgIWltcG9ydGFudDtcclxufVxyXG4iLCI6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzYTkgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/login/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppLoginRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login-objects */
    "./src/app/login/login-objects.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var src_app_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/snackbar/snackbar.service */
    "./src/app/components/snackbar/snackbar.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, loginService, snackbar) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.loginService = loginService;
        this.snackbar = snackbar;
        this.registerDto = new _login_objects__WEBPACK_IMPORTED_MODULE_1__["RegisterDto"]();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "voltar",
        value: function voltar() {
          this.router.navigate(['login']);
        }
      }, {
        key: "passwordMatch",
        value: function passwordMatch() {
          return this.registerDto.password === this.repeatPassword;
        }
      }, {
        key: "registerNewUser",
        value: function registerNewUser() {
          var _this7 = this;

          this.loginService.registerUser(this.registerDto).subscribe(function (dale) {
            _this7.snackbar.success('Registrado com sucesso');

            _this7.router.navigate(['login']);
          }, function (error) {
            _this7.snackbar.error(error.error.message);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 36,
      vars: 5,
      consts: [[2, "background-image", "url(https://i.imgur.com/P7TgD2J.jpg)", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], [2, "background-color", "white"], [2, "opacity", "1 !important", "text-align", "center", "margin-bottom", "10px", "color", "coral"], [2, "opacity", "1 !important", "color", "black"], [1, "row", 2, "justify-content", "center", "display", "flex"], ["appearance", "outline", 1, "col-4"], [2, "justify-content", "center", "display", "flex"], ["matInput", "", "name", "email", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "floatLabel", "never", 1, "col-4"], ["matInput", "", "type", "password", "name", "email", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "row", 2, "display", "flex", "justify-content", "center"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registrar Conta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Endere\xE7o de e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.registerDto.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.registerDto.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Apelido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.registerDto.nickname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.registerDto.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Repetir Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.repeatPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_32_listener() {
            return ctx.voltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_34_listener() {
            return ctx.registerNewUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Registrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerDto.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerDto.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerDto.nickname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerDto.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repeatPassword);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".mat-form-field-ripple {\n  background-color: black !important;\n}\n\n .mat-focused .mat-form-field-label {\n  color: black !important;\n}\n\n .mat-form-field-label {\n  color: black !important;\n}\n\n .mat-form-field-underline {\n  background-color: black !important;\n}\n\n .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #D6D6D6;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvQzpcXFVzZXJzXFx2aWN0b1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxLYXNwcGVyXFxlc3R1ZG9cXGFuYUp1bGlhRnJvbnQvc3JjXFxhcHBcXGxvZ2luXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQUM7RUFDQyx1QkFBQTtBQ0dGOztBRERDO0VBQ0Msa0NBQUE7QUNJRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QUREQTtFQUNFLHVCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7O1xyXG4gfVxyXG46Om5nLWRlZXAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuIH1cclxuIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogI0Q2RDZENjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiAjRDZENkQ2O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: src_app_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/overview/services/overview.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/overview/services/overview.service.ts ***!
    \*******************************************************/

  /*! exports provided: OverviewService */

  /***/
  function srcAppOverviewServicesOverviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewService", function () {
      return OverviewService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OverviewService = /*#__PURE__*/function () {
      function OverviewService(httpClient) {
        _classCallCheck(this, OverviewService);

        this.httpClient = httpClient;
      }

      _createClass(OverviewService, [{
        key: "ver",
        value: function ver() {
          return this.httpClient.get('http://localhost:8080/login/v1/see');
        }
      }]);

      return OverviewService;
    }();

    OverviewService.ɵfac = function OverviewService_Factory(t) {
      return new (t || OverviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    OverviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverviewService,
      factory: OverviewService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/selec-itens/itens-objects.ts":
  /*!**********************************************!*\
    !*** ./src/app/selec-itens/itens-objects.ts ***!
    \**********************************************/

  /*! exports provided: Product, Person */

  /***/
  function srcAppSelecItensItensObjectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Person", function () {
      return Person;
    });

    var Product = function Product() {
      _classCallCheck(this, Product);
    };

    var Person = function Person() {
      _classCallCheck(this, Person);
    };
    /***/

  },

  /***/
  "./src/app/selec-itens/selec-itens.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/selec-itens/selec-itens.component.ts ***!
    \******************************************************/

  /*! exports provided: SelecItensComponent */

  /***/
  function srcAppSelecItensSelecItensComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelecItensComponent", function () {
      return SelecItensComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/service.service */
    "./src/app/service/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/snackbar/snackbar.service */
    "./src/app/components/snackbar/snackbar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function SelecItensComponent_mat_card_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelecItensComponent_mat_card_1_div_4_Template_mat_checkbox_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var product_r3 = ctx.$implicit;
          return product_r3.checked = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r3.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
      }
    }

    function SelecItensComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Selecione o(s) presente(s) que desejar. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelecItensComponent_mat_card_1_div_4_Template, 3, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelecItensComponent_mat_card_1_Template_mat_checkbox_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.outro.checked = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Outro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelecItensComponent_mat_card_1_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.outroNome = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-footer", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecItensComponent_mat_card_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.selectProducts();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Finalizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.outro.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.outroNome)("disabled", !ctx_r0.outro.checked);
      }
    }

    function SelecItensComponent_mat_spinner_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var SelecItensComponent = /*#__PURE__*/function () {
      function SelecItensComponent(service, activatedRoute, router, snackbar) {
        var _this8 = this;

        _classCallCheck(this, SelecItensComponent);

        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.snackbar = snackbar;
        this.outro = {
          id: 0,
          name: "",
          quantity: 1,
          checked: false
        };
        this.productList = [];
        this.size = 0;
        this.service.getProducts().subscribe(function (result) {
          _this8.productList = result;
          _this8.size = _this8.productList.length;
        });
        this.activatedRoute.params.subscribe(function (params) {
          _this8.name = params.name;
        });
      }

      _createClass(SelecItensComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectProducts",
        value: function selectProducts() {
          if (this.outro.checked) {
            this.outro.name = this.outroNome;
            this.productList.push(this.outro);
          }

          var selectedList = this.productList.filter(function (x) {
            return x.checked;
          });

          if (!(selectedList.length > 0)) {
            this.snackbar.error("Selecione ao menos uma opção");
          } else {
            console.log(this.outro);
            this.service.name = this.name;
            this.service.productList = selectedList;
            this.router.navigate(["confirmar", this.name]);
          }
        }
      }]);

      return SelecItensComponent;
    }();

    SelecItensComponent.ɵfac = function SelecItensComponent_Factory(t) {
      return new (t || SelecItensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]));
    };

    SelecItensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelecItensComponent,
      selectors: [["app-selec-itens"]],
      decls: 3,
      vars: 2,
      consts: [[2, "background", "linear-gradient(27deg, rgb(255, 245, 248) 2%, rgba(255,179,169) 100%)", "background-size", "cover", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], ["style", "background-color: white; bottom: 0; max-height: 70% !important; color: black; min-width: 40%; max-width: 80%;", 4, "ngIf"], [4, "ngIf"], [2, "background-color", "white", "bottom", "0", "max-height", "70% !important", "color", "black", "min-width", "40%", "max-width", "80%"], [2, "opacity", "1 !important", "text-align", "center", "margin-bottom", "10px", "color", "rgba(255,179,169)"], [2, "overflow-y", "scroll", "max-height", "360px"], ["class", "row", "style", "margin-left: 10px; margin-top: 10px;", 4, "ngFor", "ngForOf"], [1, "row", 2, "margin-left", "10px", "margin-top", "10px"], [2, "margin-right", "10px", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 2, "width", "60%"], [2, "justify-content", "center", "display", "flex"], ["matInput", "", "name", "nickname", "color", "blue", 3, "ngModel", "disabled", "ngModelChange"], [2, "display", "flex", "justify-content", "center", "min-height", "10%"], ["mat-raised-button", "", 2, "margin-top", "5px", "margin-bottom", "5px", 3, "click"], [3, "ngModel", "ngModelChange"]],
      template: function SelecItensComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelecItensComponent_mat_card_1_Template, 14, 4, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelecItensComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.size > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.size == 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
      styles: [".mat-checkbox-frame {\n  border-color: #ffb3a9;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ffb3a9 !important;\n}\n\n  .mat-checkbox-checkmark-path {\n  stroke: #ffffff !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ffb3a9;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ffb3a9;\n  border-radius: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.mat-pink[_ngcontent-%COMP%] {\n  background-color: #ffb3a9;\n}\n\n  .mat-spinner circle {\n  stroke: #ffb3a9;\n}\n\n.mat-raised-button[_ngcontent-cnd-c102][_ngcontent-%COMP%], .mat-fab[_ngcontent-cnd-c102][_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-cnd-c102][_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ffb3a9 !important;\n}\n\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ffb3a9 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #ffb3a9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWMtaXRlbnMvQzpcXFVzZXJzXFx2aWN0b1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxLYXNwcGVyXFxlc3R1ZG9cXGFuYUp1bGlhRnJvbnQvc3JjXFxhcHBcXHNlbGVjLWl0ZW5zXFxzZWxlYy1pdGVucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VsZWMtaXRlbnMvc2VsZWMtaXRlbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREdFO0VBQ0Usb0NBQUE7QUNBSjs7QURJQTtFQUNFLDBCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjLWl0ZW5zL3NlbGVjLWl0ZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMTc5LDE2OSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCB7XHJcbiAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDE3OSwxNjkpIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcclxuICBzdHJva2U6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMTc5LDE2OSk7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMTc5LDE2OSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXBpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDE3OSwxNjkpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgc3Ryb2tlOiByZ2JhKDI1NSwxNzksMTY5KTtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uW19uZ2NvbnRlbnQtY25kLWMxMDJdLCAubWF0LWZhYltfbmdjb250ZW50LWNuZC1jMTAyXSwgLm1hdC1taW5pLWZhYltfbmdjb250ZW50LWNuZC1jMTAyXSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwxNzksMTY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDE3OSwxNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogcmdiKDI1NSwxNzksMTY5KSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZiM2E5O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjNhOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmYjNhOTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNmZmIzYTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5tYXQtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzYTk7XG59XG5cbjo6bmctZGVlcCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmZiM2E5O1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b25bX25nY29udGVudC1jbmQtYzEwMl0sIC5tYXQtZmFiW19uZ2NvbnRlbnQtY25kLWMxMDJdLCAubWF0LW1pbmktZmFiW19uZ2NvbnRlbnQtY25kLWMxMDJdIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzYTkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiM2E5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICNmZmIzYTkgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelecItensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selec-itens',
          templateUrl: './selec-itens.component.html',
          styleUrls: ['./selec-itens.component.scss']
        }]
      }], function () {
        return [{
          type: _service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/service.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/service.service.ts ***!
    \********************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServiceServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ServiceService = /*#__PURE__*/function () {
      function ServiceService(httpClient) {
        _classCallCheck(this, ServiceService);

        this.httpClient = httpClient;
        this.productList = [];
      }

      _createClass(ServiceService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.httpClient.get('https://cha-casa-nova-joao-e-mari-9bb1be120706.herokuapp.com/produto/v1');
        }
      }, {
        key: "concludeSelection",
        value: function concludeSelection(person) {
          return this.httpClient.post('https://cha-casa-nova-joao-e-mari-9bb1be120706.herokuapp.com/pessoa/v1', person);
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ɵfac = function ServiceService_Factory(t) {
      return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceService,
      factory: ServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/thanks/thanks.component.ts":
  /*!********************************************!*\
    !*** ./src/app/thanks/thanks.component.ts ***!
    \********************************************/

  /*! exports provided: ThanksComponent */

  /***/
  function srcAppThanksThanksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThanksComponent", function () {
      return ThanksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "height": a0
      };
    };

    var ThanksComponent = /*#__PURE__*/function () {
      function ThanksComponent() {
        _classCallCheck(this, ThanksComponent);

        this.height = "30%";
        this.width = "30%";
        console.log(this.height);
      }

      _createClass(ThanksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.screen.width <= 425) {
            // 768px portrait
            this.mobile = true;
          }
        }
      }]);

      return ThanksComponent;
    }();

    ThanksComponent.ɵfac = function ThanksComponent_Factory(t) {
      return new (t || ThanksComponent)();
    };

    ThanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThanksComponent,
      selectors: [["app-thanks"]],
      decls: 2,
      vars: 3,
      consts: [[2, "background", "linear-gradient(27deg, rgb(255, 245, 248) 2%, rgba(255,179,169) 100%)", "background-size", "cover", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "../../assets/Obrigado_tti.png", "width", "65%", 3, "ngStyle"]],
      template: function ThanksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.mobile ? "25%" : "60%"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rcy90aGFua3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThanksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-thanks',
          templateUrl: './thanks.component.html',
          styleUrls: ['./thanks.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\victo\OneDrive\Área de Trabalho\Kaspper\estudo\anaJuliaFront\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map