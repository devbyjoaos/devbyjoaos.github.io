function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-settings-user-settings-module"], {
  /***/
  "./src/app/user-settings/character/character.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/user-settings/character/character.component.ts ***!
    \****************************************************************/

  /*! exports provided: CharacterComponent */

  /***/
  function srcAppUserSettingsCharacterCharacterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterComponent", function () {
      return CharacterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CharacterComponent = /*#__PURE__*/function () {
      function CharacterComponent() {
        _classCallCheck(this, CharacterComponent);
      }

      _createClass(CharacterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CharacterComponent;
    }();

    CharacterComponent.ɵfac = function CharacterComponent_Factory(t) {
      return new (t || CharacterComponent)();
    };

    CharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CharacterComponent,
      selectors: [["app-character"]],
      decls: 4,
      vars: 0,
      consts: [[2, "width", "100%", "height", "100%", "background-color", "blueviolet"]],
      template: function CharacterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "character works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "dale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2V0dGluZ3MvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-character',
          templateUrl: './character.component.html',
          styleUrls: ['./character.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-settings/configuration/configuration.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/user-settings/configuration/configuration.component.ts ***!
    \************************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppUserSettingsConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
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


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    var ConfigurationComponent = /*#__PURE__*/function () {
      function ConfigurationComponent(router, route) {
        _classCallCheck(this, ConfigurationComponent);

        this.router = router;
        this.route = route;
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToOvervie",
        value: function goToOvervie() {
          window.history.back();
        }
      }, {
        key: "changeMenu",
        value: function changeMenu(menu) {
          switch (menu) {
            case 'character':
              this.router.navigate(['configuracao', 'personagens'], {
                relativeTo: this.route.root
              });
              this.personagens = true;
              break;

            default:
              this.router.navigate(['configuracao'], {
                relativeTo: this.route.root
              });
          }
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) {
      return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigurationComponent,
      selectors: [["app-configuration"]],
      decls: 26,
      vars: 0,
      consts: [[2, "display", "flex", "width", "100%", "align-items", "center"], [2, "justify-content", "flex-start", "margin", "15px", "color", "coral"], [2, "flex", "1 1 auto"], ["mat-raised-button", "", 2, "margin", "15px", 3, "click"], [2, "width", "90%"], [2, "height", "100%!important", "margin-top", "30px", "padding-left", "10px"], ["mode", "side", "opened", ""], [1, "sidebar-profile"], [1, "sidebar-profile-header"], ["color", "warn"], [1, "sidebar-profile-menus"], ["mat-list-item", "", 3, "click"], ["mat-list-item", "", "href", "configuracao/personagens"], [1, "sidebar-profile-content"]],
      template: function ConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mutum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_Template_button_click_5_listener() {
            return ctx.goToOvervie();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Configura\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_Template_a_click_19_listener() {
            return ctx.changeMenu("character");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Personagens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".mat-drawer {\n  background-color: #ffffff;\n  color: #4d5156 !important;\n}\n\n  .mat-list-item {\n  height: 24px !important;\n  font-size: 13px !important;\n}\n\n  .mat-drawer-container {\n  background-color: #ffffff !important;\n}\n\n  .mat-drawer-content {\n  color: black !important;\n  margin-left: 0px !important;\n}\n\n.sidebar-profile[_ngcontent-%COMP%] {\n  width: 230px;\n  float: left;\n}\n\n.sidebar-profile[_ngcontent-%COMP%]   .sidebar-profile-header[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n\n.sidebar-profile[_ngcontent-%COMP%]   .sidebar-profile-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.sidebar-profile[_ngcontent-%COMP%]   .sidebar-profile-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: coral;\n  font-weight: bold;\n  font-size: 16px;\n  padding-top: 3px;\n  padding-left: 6px;\n}\n\n.sidebar-profile[_ngcontent-%COMP%]   .sidebar-profile-header[_ngcontent-%COMP%]   .sidebar-profile-menus[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n.sidebar-profile[_ngcontent-%COMP%]   .sidebar-profile-header[_ngcontent-%COMP%]   .sidebar-profile-menus[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  height: 24px;\n  font-size: 13px;\n}\n\n.sidebar-profile[_ngcontent-%COMP%]   .sidebar-profile-header[_ngcontent-%COMP%]   .sidebar-profile-menus[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.sidebar-profile-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 0 0 30px 250px;\n}\n\n  .mat-list-base {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zZXR0aW5ncy9jb25maWd1cmF0aW9uL0M6XFxVc2Vyc1xcdmljdG9cXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xcS2FzcHBlclxcZXN0dWRvXFxhbmFKdWxpYUZyb250L3NyY1xcYXBwXFx1c2VyLXNldHRpbmdzXFxjb25maWd1cmF0aW9uXFxjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXNldHRpbmdzL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURHQTtFQUNFLG9DQUFBO0FDQUY7O0FERUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7QUNDSjs7QURDSTtFQUNFLG9CQUFBO0FDQ047O0FEQU07RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSOztBRENJO0VBQ0Usa0JBQUE7QUNDTjs7QURDTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERU07RUFDRSxpQkFBQTtBQ0FSOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURNQTtFQUNFLDJCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNldHRpbmdzL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRyYXdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogIzRkNTE1NiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWxpc3QtaXRlbSB7XHJcbiAgaGVpZ2h0OiAyNHB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZWJhci1wcm9maWxlIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gIC5zaWRlYmFyLXByb2ZpbGUtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG5cclxuICAgID4gcCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogY29yYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyLXByb2ZpbGUtbWVudXMge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblxyXG4gICAgICAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLXByb2ZpbGUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDMwcHggMjUwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWxpc3QtYmFzZSB7XHJcbiAgcGFkZGluZy10b3A6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIjo6bmctZGVlcCAubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjNGQ1MTU2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci1wcm9maWxlIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaWRlYmFyLXByb2ZpbGUgLnNpZGViYXItcHJvZmlsZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cbi5zaWRlYmFyLXByb2ZpbGUgLnNpZGViYXItcHJvZmlsZS1oZWFkZXIgPiBwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uc2lkZWJhci1wcm9maWxlIC5zaWRlYmFyLXByb2ZpbGUtaGVhZGVyID4gcCBzcGFuIHtcbiAgY29sb3I6IGNvcmFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5zaWRlYmFyLXByb2ZpbGUgLnNpZGViYXItcHJvZmlsZS1oZWFkZXIgLnNpZGViYXItcHJvZmlsZS1tZW51cyB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5zaWRlYmFyLXByb2ZpbGUgLnNpZGViYXItcHJvZmlsZS1oZWFkZXIgLnNpZGViYXItcHJvZmlsZS1tZW51cyAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNpZGViYXItcHJvZmlsZSAuc2lkZWJhci1wcm9maWxlLWhlYWRlciAuc2lkZWJhci1wcm9maWxlLW1lbnVzIC5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGViYXItcHJvZmlsZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMzBweCAyNTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-configuration',
          templateUrl: './configuration.component.html',
          styleUrls: ['./configuration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-settings/user-configutarion/user-configutarion.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/user-settings/user-configutarion/user-configutarion.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserConfigutarionComponent */

  /***/
  function srcAppUserSettingsUserConfigutarionUserConfigutarionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserConfigutarionComponent", function () {
      return UserConfigutarionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserConfigutarionComponent = /*#__PURE__*/function () {
      function UserConfigutarionComponent() {
        _classCallCheck(this, UserConfigutarionComponent);
      }

      _createClass(UserConfigutarionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserConfigutarionComponent;
    }();

    UserConfigutarionComponent.ɵfac = function UserConfigutarionComponent_Factory(t) {
      return new (t || UserConfigutarionComponent)();
    };

    UserConfigutarionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserConfigutarionComponent,
      selectors: [["app-user-configutarion"]],
      decls: 2,
      vars: 0,
      template: function UserConfigutarionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-configutarion works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2V0dGluZ3MvdXNlci1jb25maWd1dGFyaW9uL3VzZXItY29uZmlndXRhcmlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserConfigutarionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-configutarion',
          templateUrl: './user-configutarion.component.html',
          styleUrls: ['./user-configutarion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-settings/user-settings-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user-settings/user-settings-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: UserSettingsRoutingModule */

  /***/
  function srcAppUserSettingsUserSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsRoutingModule", function () {
      return UserSettingsRoutingModule;
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


    var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration/configuration.component */
    "./src/app/user-settings/configuration/configuration.component.ts");
    /* harmony import */


    var _auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/guards/random.guard */
    "./src/app/auth/guards/random.guard.ts");
    /* harmony import */


    var _character_character_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./character/character.component */
    "./src/app/user-settings/character/character.component.ts");
    /* harmony import */


    var _user_configutarion_user_configutarion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-configutarion/user-configutarion.component */
    "./src/app/user-settings/user-configutarion/user-configutarion.component.ts");

    var routes = [{
      path: '',
      component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__["ConfigurationComponent"],
      canActivate: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__["RandomGuard"]],
      canLoad: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__["RandomGuard"]],
      children: [{
        path: '',
        component: _user_configutarion_user_configutarion_component__WEBPACK_IMPORTED_MODULE_5__["UserConfigutarionComponent"],
        canActivate: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__["RandomGuard"]],
        canLoad: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__["RandomGuard"]]
      }, {
        path: 'personagens',
        component: _character_character_component__WEBPACK_IMPORTED_MODULE_4__["CharacterComponent"],
        canActivate: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__["RandomGuard"]],
        canLoad: [_auth_guards_random_guard__WEBPACK_IMPORTED_MODULE_3__["RandomGuard"]]
      }]
    }];

    var UserSettingsRoutingModule = function UserSettingsRoutingModule() {
      _classCallCheck(this, UserSettingsRoutingModule);
    };

    UserSettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserSettingsRoutingModule
    });
    UserSettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserSettingsRoutingModule_Factory(t) {
        return new (t || UserSettingsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSettingsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-settings/user-settings.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user-settings/user-settings.module.ts ***!
    \*******************************************************/

  /*! exports provided: UserSettingsModule */

  /***/
  function srcAppUserSettingsUserSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsModule", function () {
      return UserSettingsModule;
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


    var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration/configuration.component */
    "./src/app/user-settings/configuration/configuration.component.ts");
    /* harmony import */


    var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-settings-routing.module */
    "./src/app/user-settings/user-settings-routing.module.ts");
    /* harmony import */


    var _character_character_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./character/character.component */
    "./src/app/user-settings/character/character.component.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_configutarion_user_configutarion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-configutarion/user-configutarion.component */
    "./src/app/user-settings/user-configutarion/user-configutarion.component.ts");

    var UserSettingsModule = function UserSettingsModule() {
      _classCallCheck(this, UserSettingsModule);
    };

    UserSettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserSettingsModule
    });
    UserSettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserSettingsModule_Factory(t) {
        return new (t || UserSettingsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserSettingsRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSettingsModule, {
        declarations: [_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__["ConfigurationComponent"], _character_character_component__WEBPACK_IMPORTED_MODULE_4__["CharacterComponent"], _user_configutarion_user_configutarion_component__WEBPACK_IMPORTED_MODULE_7__["UserConfigutarionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserSettingsRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__["ConfigurationComponent"], _character_character_component__WEBPACK_IMPORTED_MODULE_4__["CharacterComponent"], _user_configutarion_user_configutarion_component__WEBPACK_IMPORTED_MODULE_7__["UserConfigutarionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserSettingsRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=user-settings-user-settings-module-es5.js.map