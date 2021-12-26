(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/education/education.component */ "./src/app/pages/education/education.component.ts");
/* harmony import */ var _pages_donate_donate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/donate/donate.component */ "./src/app/pages/donate/donate.component.ts");











const routes = [
    {
        path: '',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'about',
        redirectTo: ''
    },
    {
        path: 'experience',
        component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]
    },
    {
        path: 'projects',
        component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]
    },
    {
        path: 'education',
        component: _pages_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"]
    },
    {
        path: 'skills',
        component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__["SkillsComponent"]
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"]
    },
    {
        path: 'donate',
        component: _pages_donate_donate_component__WEBPACK_IMPORTED_MODULE_8__["DonateComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/alert/alert.component */ "./src/app/component/alert/alert.component.ts");
/* harmony import */ var _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/layout/layout.component */ "./src/app/component/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






class AppComponent {
    constructor(stateService) {
        this.stateService = stateService;
        this.title = 'my-website';
    }
    changeOfRoutes() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener() { return ctx.changeOfRoutes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_state_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/layout/layout.component */ "./src/app/component/layout/layout.component.ts");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _app_component_custom_pipe_shorten_shorten_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/component/custom-pipe/shorten/shorten.pipe */ "./src/app/component/custom-pipe/shorten/shorten.pipe.ts");
/* harmony import */ var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/education/education.component */ "./src/app/pages/education/education.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _component_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/mobile-header/mobile-header.component */ "./src/app/component/mobile-header/mobile-header.component.ts");
/* harmony import */ var _pages_donate_donate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/donate/donate.component */ "./src/app/pages/donate/donate.component.ts");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm2015/rxweb-reactive-form-validators.js");
/* harmony import */ var _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/alert/alert.component */ "./src/app/component/alert/alert.component.ts");

















 // <-- #1 import module




const pk_test = 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_18__["RxReactiveFormsModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_16__["Angular4PaystackModule"].forRoot(pk_test)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
        _pages_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
        _app_component_custom_pipe_shorten_shorten_pipe__WEBPACK_IMPORTED_MODULE_10__["ShortenPipe"],
        _pages_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
        _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _component_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_14__["MobileHeaderComponent"],
        _pages_donate_donate_component__WEBPACK_IMPORTED_MODULE_15__["DonateComponent"],
        _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_18__["RxReactiveFormsModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_16__["Angular4PaystackModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                    _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
                    _pages_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                    _app_component_custom_pipe_shorten_shorten_pipe__WEBPACK_IMPORTED_MODULE_10__["ShortenPipe"],
                    _pages_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
                    _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                    _component_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_14__["MobileHeaderComponent"],
                    _pages_donate_donate_component__WEBPACK_IMPORTED_MODULE_15__["DonateComponent"],
                    _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_18__["RxReactiveFormsModule"],
                    angular4_paystack__WEBPACK_IMPORTED_MODULE_16__["Angular4PaystackModule"].forRoot(pk_test)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeAlert(); })("mouseover", function AlertComponent_div_0_Template_span_mouseover_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeButtonHover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.alertOptions.bgColor || "bg-success", " text-white text-center px-3 py-4 w-full");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.alertOptions.message || "This is a sample alert", " ");
} }
class AlertComponent {
    constructor(state) {
        this.state = state;
    }
    ngOnInit() {
        this.state.alert$.subscribe(res => {
            this.alertOptions = res;
            if (res.isShowing === true) {
                setTimeout(() => {
                    this.closeAlert();
                }, 2000);
            }
        });
    }
    closeAlert() {
        this.state.setAlert({
            isShowing: false
        });
    }
    closeButtonHover() {
        this.onCloseButton = true;
        setTimeout(() => {
            this.onCloseButton = false;
        }, 1000);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 1, consts: [["class", "z-50 absolute w-full pt-5", 4, "ngIf"], [1, "z-50", "absolute", "w-full", "pt-5"], [1, "row", "justify-content-center"], [1, "col-10", "col-md-6"], [1, "d-flex", "justify-content-center", "w-full"], [1, "cursor-pointer", "float-right", 3, "click", "mouseover"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 8, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertOptions.isShowing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnNvbHV0ZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uei01MHtcbiAgei1pbmRleDogNTA7XG59XG5cbi5mbG9hdC1yaWdodHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], function () { return [{ type: _services_state_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/custom-pipe/shorten/shorten.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/custom-pipe/shorten/shorten.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class ShortenPipe {
    transform(value, length = 30) {
        if (value.length > length) {
            let newString = value.slice(0, length) + ' ......read more';
            return newString;
        }
        return value;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shorten'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/layout/layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobile-header/mobile-header.component */ "./src/app/component/mobile-header/mobile-header.component.ts");




const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 11, vars: 0, consts: [[1, "layout-body"], [1, "container-fluid", "pt-5", "main"], [1, "row"], [1, "col-12"], [1, "row", "justify-content-center"], [1, "col-xl-11", "row"], [1, "col-lg-4", "d-none", "d-sm-none", "d-md-none", "d-lg-block", "d-xl-block", "d-xxl-block", "hidden"], [1, "col-lg-8", "col-md-12", "col-sm-12", "col-12", "body"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-mobile-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_2__["MobileHeaderComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  background-color: #262A3C;\n  min-height: 100vh;\n}\n\n.content-space[_ngcontent-%COMP%] {\n  min-height: 87vh;\n  border-radius: 8px;\n}\n\n.body[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cblxuLm1haW57XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjJBM0M7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudC1zcGFjZXtcbiAgbWluLWhlaWdodDogODd2aDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYm9keXtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/mobile-header/mobile-header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/mobile-header/mobile-header.component.ts ***!
  \********************************************************************/
/*! exports provided: MobileHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderComponent", function() { return MobileHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const _c0 = function (a0) { return { "router-link-active": a0 }; };
class MobileHeaderComponent {
    constructor(sidebarRouter, state) {
        this.sidebarRouter = sidebarRouter;
        this.state = state;
    }
    ngOnInit() {
    }
    changeRoute(route) {
        if (this.sidebarRouter.url === route[0]) {
            return;
        }
        this.state.runOnLoadAnimation();
        setTimeout(() => {
            this.sidebarRouter.navigate(route);
        }, 500);
    }
    rightRoute(route) {
        if (this.sidebarRouter.url === route) {
            return true;
        }
        else {
            return false;
        }
    }
}
MobileHeaderComponent.ɵfac = function MobileHeaderComponent_Factory(t) { return new (t || MobileHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
MobileHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileHeaderComponent, selectors: [["app-mobile-header"]], decls: 30, vars: 21, consts: [[1, "header-mobile", "ps-3", "d-block", "d-sm-block", "d-md-block", "d-lg-none", "d-xl-none", "d-xxl-none"], [1, "header-nav", "text-white"], [1, "nav-item", 3, "ngClass", "click"], [1, "title-holder"], [1, "title"]], template: function MobileHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_2_listener() { return ctx.changeRoute(["/"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_6_listener() { return ctx.changeRoute(["/experience"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_10_listener() { return ctx.changeRoute(["/projects"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_14_listener() { return ctx.changeRoute(["/education"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_18_listener() { return ctx.changeRoute(["/skills"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SKILLS & KNOWLEDGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_22_listener() { return ctx.changeRoute(["/contact"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_26_listener() { return ctx.changeRoute(["/donate"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DONATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.rightRoute("/")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.rightRoute("/experience")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.rightRoute("/projects")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.rightRoute("/education")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.rightRoute("/skills")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.rightRoute("/contact")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.rightRoute("/donate")));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".router-link-active[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--bs-primary);\n  font-weight: bold;\n}\n.router-link-active[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  color: var(--bs-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21vYmlsZS1oZWFkZXIvbW9iaWxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUdNO0VBQ0Usc0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tb2JpbGUtaGVhZGVyL21vYmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGVyLWxpbmstYWN0aXZle1xuICAgIC50aXRsZXtcbiAgICAgIGNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgLnRpdGxle1xuICAgICAgICBjb2xvcjp2YXIoLS1icy13aGl0ZSk7XG4gICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-header',
                templateUrl: './mobile-header.component.html',
                styleUrls: ['./mobile-header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const _c0 = function (a0) { return { "router-link-active": a0 }; };
class SidebarComponent {
    constructor(sidebarRouter, state) {
        this.sidebarRouter = sidebarRouter;
        this.state = state;
    }
    ngOnInit() {
    }
    changeRoute(route) {
        if (this.sidebarRouter.url === route[0]) {
            return;
        }
        this.state.runOnLoadAnimation();
        setTimeout(() => {
            this.sidebarRouter.navigate(route);
        }, 500);
        console.log(this.sidebarRouter.url);
    }
    rightRoute(route) {
        if (this.sidebarRouter.url === route) {
            return true;
        }
        else {
            return false;
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 41, vars: 21, consts: [[1, "sidebar"], [1, "sidebar-header", "text-center"], [1, "d-flex", "justify-content-center"], [1, "circle"], ["src", "../../../assets/img/profile_pic.png", "alt", "", 1, "img-fluid"], [1, "sidebar-body"], [1, "sidebar-item", 3, "ngClass", "click"], [1, "icon"], [1, "title-holder"], [1, "title"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_6_listener() { return ctx.changeRoute(["/"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_11_listener() { return ctx.changeRoute(["/experience"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_16_listener() { return ctx.changeRoute(["/projects"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_21_listener() { return ctx.changeRoute(["/education"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_26_listener() { return ctx.changeRoute(["/skills"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_31_listener() { return ctx.changeRoute(["/contact"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_36_listener() { return ctx.changeRoute(["/donate"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "DONATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.rightRoute("/")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.rightRoute("/experience")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.rightRoute("/projects")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.rightRoute("/education")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.rightRoute("/skills")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.rightRoute("/contact")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.rightRoute("/donate")));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  margin: 0 32px;\n  margin-bottom: 32px;\n  position: fixed;\n  width: 23%;\n  background-color: var(--bs-dark);\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0 12px 30px rgba(30, 31, 46, 0.1);\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 8px;\n}\n\n.sidebar-header[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 9rem;\n  border-radius: 50%;\n  border: 4px solid #a2d070;\n}\n\n.sidebar-body[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 16px 0;\n  width: 100%;\n  border-radius: 8px;\n  overflow-y: auto;\n}\n\n.sidebar-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  cursor: pointer;\n  text-align: center;\n}\n\n.sidebar-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #a2d070;\n  font-weight: 500;\n  font-size: 1rem;\n}\n\n.sidebar-item[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  color: #c5e09d;\n}\n\n.sidebar-item[_ngcontent-%COMP%]   .active.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #c5e09d;\n}\n\n.router-link-active[_ngcontent-%COMP%]   .title-holder[_ngcontent-%COMP%] {\n  background-color: #a2d070;\n  padding: 0.7rem 3rem;\n  border-radius: 24px;\n}\n\n.router-link-active[_ngcontent-%COMP%]   .title-holder[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--bs-white);\n  font-weight: bold;\n}\n\n.router-link-active[_ngcontent-%COMP%]   .title-holder[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  color: var(--bs-white);\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  font-size: 16px;\n}\n\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--bs-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRk47O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBTUU7RUFDRSxjQ3pDTztFRDBDUCxnQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPSTtFQUNFLGNDOUNNO0FEeUNaOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSxjQ25EUTtBRDZDWjs7QUFXRTtFQUNBLHlCQzFEUztFRDJEVCxvQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBU0k7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBUE47O0FBVU07RUFDRSxzQkFBQTtBQVJSOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBWkY7O0FBYUU7RUFDQSwwQkFBQTtBQVhGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuLnNpZGViYXJ7XG4gIG1hcmdpbjowIDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZGFyayk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiKDMwIDMxIDQ2IC8gMTAlKTtcbn1cblxuLnNpZGViYXItaGVhZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAuY2lyY2xle1xuXG4gICAgLmltZy1mbHVpZHtcbiAgICAgIGhlaWdodDoxMHJlbTtcbiAgICAgIHdpZHRoOjlyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6NHB4IHNvbGlkICRwcmltYXJ5O1xuICAgIH1cbiAgfVxufVxuXG4uc2lkZWJhci1ib2R5e1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxufVxuXG4uc2lkZWJhci1pdGVte1xuICBwYWRkaW5nOjFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAudGl0bGV7XG4gICAgY29sb3I6JHByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgJjpob3ZlcntcbiAgICAudGl0bGV7XG4gICAgICBjb2xvcjokc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxuICAuYWN0aXZlLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiRzZWNvbmRhcnk7XG4gIH1cbn1cblxuLnJvdXRlci1saW5rLWFjdGl2ZXtcbiAgLnRpdGxlLWhvbGRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gIHBhZGRpbmc6IDAuN3JlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIC50aXRsZXtcbiAgICAgIGNvbG9yOiB2YXIoLS1icy13aGl0ZSk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgJjpob3ZlcntcbiAgICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6dmFyKC0tYnMtd2hpdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5pY29ue1xuICBtYXJnaW4tcmlnaHQ6MTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBpe1xuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG5cbiIsIiRwcmltYXJ5IDogI2EyZDA3MDtcbiRzZWNvbmRhcnk6ICNjNWUwOWQ7XG4kZ3JleTojZjBmM2Y0O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var _services_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function AboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " HI MY NAME IS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " KWAKU BOOHENE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " AND I AM A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " SOFTWARE ENGINEER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " CONTACT ME ON MY SOCIALS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
} }
class AboutComponent {
    constructor(state) {
        this.state = state;
        this.load = true;
    }
    ngOnInit() {
        this.state.onLoadAnimation$.subscribe(res => this.load = res);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 1, vars: 1, consts: [["class", "container page ", 4, "ngIf"], [1, "container", "page"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xl-10", "col-lg-10", "col-md-7"], [1, "top-half", "d-flex", "align-items-end"], [1, "text-center", "text-white", "fw-bold", "fs-4"], [1, "fs-1", "text-secondary"], [1, "col-xl-10", "col-lg-10", "col-md-7", "col-sm-12"], [1, "d-flex", "bottom-half", "pb-3", "align-items-end"], [1, "text-white", "fs-5", "fw-bold"], ["href", "http://www.twitter.com/KwakuBoohene", 1, "text-primary", "ps-4"], [1, "fab", "fa-twitter"], ["href", "https://www.linkedin.com/in/kwakuboohene/", 1, "text-primary", "ps-4"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/KwakuBoohene", 1, "text-primary", "ps-4"], [1, "fab", "fa-github"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_div_0_Template, 24, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".top-half[_ngcontent-%COMP%] {\n  min-height: 40vh;\n}\n\n.bottom-half[_ngcontent-%COMP%] {\n  min-height: 35vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1oYWxme1xuICBtaW4taGVpZ2h0OiA0MHZoO1xufVxuLmJvdHRvbS1oYWxme1xuICBtaW4taGVpZ2h0OiAzNXZoO1xufVxuIl19 */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
                ]
            }]
    }], function () { return [{ type: _services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function ContactComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SEND ME AN EMAIL :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "KWAKU.KWAYISI@GMAIL.COM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONNECT WITH ME ON :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " TWITTER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " @KWAKUBOOHENE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " LINKEDIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "KWAKU BOOHENE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
} }
class ContactComponent {
    constructor(state) {
        this.state = state;
        this.load = true;
    }
    ngOnInit() {
        this.state.onLoadAnimation$.subscribe(res => this.load = res);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 1, vars: 1, consts: [["class", "page container", 4, "ngIf"], [1, "page", "container"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xl-10"], [1, "top-half", "text-center", "text-white"], [1, ""], [1, "fw-bold", "fs-4", "pe-3"], [1, "fs-4", "text-primary"], [1, "fw-bold", "fs-2"], ["href", "http://www.twitter.com/KwakuBoohene", 1, "fw-bold", "pe-3", "text-decoration-none", "text-secondary", "fs-4"], [1, "fab", "fa-twitter"], ["href", "https://www.linkedin.com/in/kwakuboohene/", 1, "fw-bold", "text-decoration-none", "text-secondary", "pe-3", "fs-4"], [1, "fab", "fa-linkedin"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactComponent_div_0_Template, 35, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".top-half[_ngcontent-%COMP%] {\n  justify-content: center;\n  min-height: 50vh;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1oYWxme1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
                ]
            }]
    }], function () { return [{ type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/donate/donate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/donate/donate.component.ts ***!
  \**************************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm2015/rxweb-reactive-form-validators.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");











function DonateComponent_div_10_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.donateForm.controls.email.errors.required.message, " ");
} }
function DonateComponent_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.donateForm.controls.email.errors.email.message, " ");
} }
function DonateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonateComponent_div_10_small_1_Template, 2, 1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DonateComponent_div_10_small_2_Template, 2, 1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.donateForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.donateForm.controls.email.errors.email);
} }
function DonateComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.donateForm.controls.amount.errors.required.message, " ");
} }
function DonateComponent_div_15_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.donateForm.controls.amount.errors.numeric.message, " ");
} }
function DonateComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonateComponent_div_15_small_1_Template, 2, 1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DonateComponent_div_15_small_2_Template, 2, 1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.donateForm.controls.amount.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.donateForm.controls.amount.errors.numeric);
} }
class DonateComponent {
    constructor(state) {
        this.state = state;
        this.donateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["RxwebValidators"].required({ message: 'Please enter an email' }),
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["RxwebValidators"].email({ message: 'Please enter a valid email' })
            ]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["RxwebValidators"].required({ message: 'Please enter an amount' }),
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["RxwebValidators"].numeric({ message: 'Please enter a valid amount' })
            ]),
        });
    }
    ngOnInit() {
        this.email = this.donateForm.controls.email.value;
        this.amount = Number(this.donateForm.controls.amount.value) * 100;
        this.key = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].key;
        this.ref = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
    }
    paymentInit() {
    }
    paymentDone(ref) {
        this.state.setAlert({
            isShowing: true,
            bgColor: 'bg-success',
            message: 'Payment Successful',
        });
        this.donateForm.reset();
    }
    PayWith(paystackButton) {
        console.log(this.donateForm.controls.email.errors);
        console.log(this.donateForm.controls.amount.errors);
        if (this.donateForm.valid) {
            paystackButton.click();
        }
        else {
            this.paymentCancel();
        }
    }
    convertToNumber(value) {
        return Number(value) * 100;
    }
    paymentCancel() {
        this.state.setAlert({
            isShowing: true,
            bgColor: 'bg-danger',
            message: 'Payment Failed',
        });
    }
    createUUID() {
        return Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
    }
}
DonateComponent.ɵfac = function DonateComponent_Factory(t) { return new (t || DonateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"])); };
DonateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonateComponent, selectors: [["app-donate"]], decls: 22, vars: 8, consts: [[1, "row", "justify-content-center", "text-white"], [1, "col-lg-5", "col-10"], [1, "text-center"], [1, "mt-5", "w-full"], ["action", "", 1, "w-full", 3, "formGroup"], [1, "form-group"], ["for", ""], ["type", "email", "formControlName", "email", "name", "", "id", "", 1, "form-control"], ["class", "", 4, "ngIf"], ["formControlName", "amount", "type", "text", "name", "", "id", "", 1, "form-control"], [1, "form-button", "my-3"], ["angular4-paystack", "", 1, "d-none", 3, "key", "email", "amount", "ref", "currency", "paymentInit", "onClose", "callback"], ["paystack", ""], [1, "btn", "btn-primary", "text-white", 3, "click"], [1, ""], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function DonateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DONATE OR PAY ME HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DonateComponent_div_10_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DonateComponent_div_15_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paymentInit", function DonateComponent_Template_button_paymentInit_17_listener() { return ctx.paymentInit(); })("onClose", function DonateComponent_Template_button_onClose_17_listener() { return ctx.paymentCancel(); })("callback", function DonateComponent_Template_button_callback_17_listener($event) { return ctx.paymentDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Pay with Paystack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonateComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.PayWith(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pay with Paystack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.donateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.donateForm.controls.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.donateForm.controls.amount.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx.key)("email", ctx.donateForm.controls.email.value)("amount", ctx.convertToNumber(ctx.donateForm.controls.amount.value))("ref", ctx.ref)("currency", "GHS");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["ɵe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular4_paystack__WEBPACK_IMPORTED_MODULE_7__["Angular4PaystackDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvbmF0ZS9kb25hdGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donate',
                templateUrl: './donate.component.html',
                styleUrls: ['./donate.component.scss']
            }]
    }], function () { return [{ type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/education/education.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/education/education.component.ts ***!
  \********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var _services_data_education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data/education */ "./src/app/services/data/education.ts");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






function EducationComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.school, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.course, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.duration, " ");
} }
function EducationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EducationComponent_div_0_div_3_Template, 11, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.education);
} }
class EducationComponent {
    constructor(state) {
        this.state = state;
        this.education = _services_data_education__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        this.state.onLoadAnimation$.subscribe(res => this.load = res);
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 1, vars: 1, consts: [["class", "page container", 4, "ngIf"], [1, "page", "container"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xl-12"], ["class", "education text-white mb-4", 4, "ngFor", "ngForOf"], [1, "education", "text-white", "mb-4"], [1, "education"], [1, "text-primary", "text-decoration-none", "fw-bold", "fs-2", 3, "href"], [1, "position", "row"], [1, "col-lg-7", "col-sm-12"], [1, "fw-bold", "fs-4", "text-white"], [1, "col-lg-4", "offset-lg-1", "col-sm-12"], [1, ""]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EducationComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
                ]
            }]
    }], function () { return [{ type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/experience/experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var _services_data_experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data/experience */ "./src/app/services/data/experience.ts");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






function ExperienceComponent_div_0_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r4.duration, " ");
} }
function ExperienceComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_div_0_div_3_div_4_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.position);
} }
function ExperienceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_div_0_div_3_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.experience);
} }
class ExperienceComponent {
    constructor(state) {
        this.state = state;
        this.experience = _services_data_experience__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        this.state.onLoadAnimation$.subscribe(res => this.load = res);
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 1, vars: 1, consts: [["class", "page container", 4, "ngIf"], [1, "page", "container"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xl-12"], ["class", "experience text-white mb-4", 4, "ngFor", "ngForOf"], [1, "experience", "text-white", "mb-4"], [1, "company"], [1, "text-primary", "fw-bold", "fs-2", 3, "href"], ["class", "position row", 4, "ngFor", "ngForOf"], [1, "position", "row"], [1, "col-lg-7", "col-sm-12"], [1, "fw-bold", "fs-4", "text-white"], [1, "col-lg-4", "col-sm-12", "offset-lg-1"], [1, ""]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UscUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55XG57XG4gIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
                ]
            }]
    }], function () { return [{ type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var src_app_services_data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data/projects */ "./src/app/services/data/projects.ts");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_custom_pipe_shorten_shorten_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/custom-pipe/shorten/shorten.pipe */ "./src/app/component/custom-pipe/shorten/shorten.pipe.ts");







function ProjectComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "shorten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/", item_r2.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 5, item_r2.description, 250), " ");
} }
function ProjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PROJECTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_div_0_div_6_Template, 15, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
class ProjectComponent {
    constructor(state) {
        this.state = state;
        this.projects = src_app_services_data_projects__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        console.log(this.projects);
        this.state.onLoadAnimation$.subscribe(res => this.load = res);
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 1, vars: 1, consts: [["class", "page container", 4, "ngIf"], [1, "page", "container"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xl-12"], [1, "h2", "text-white"], [1, "row"], ["class", "col-xl-12", 4, "ngFor", "ngForOf"], [1, "m-1", "mb-5"], [1, "project", "text-white"], [1, "text-primary", "pb-1", "text-decoration-none", "fw-bold", "fs-2", 3, "href"], [1, "description", "row"], [1, "col-lg-3", "col-sm-12"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "col-lg-2", "col-sm-12"], [1, "text-center", "fw-bold"], [1, "col-lg-6", "offset-lg-1", "col-sm-12"], [1, ""]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectComponent_div_0_Template, 7, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_component_custom_pipe_shorten_shorten_pipe__WEBPACK_IMPORTED_MODULE_5__["ShortenPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
                ]
            }]
    }], function () { return [{ type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/skills/skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function SkillsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SKILLS & KNOWLEDGE AREAS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WEB DEVELOPMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular (TypeScript) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Laravel (PhP) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ReactJS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NodeJS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bootstrap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Wordpress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "HTML ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "JavaScript ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "DATA STRUCTURES AND ALGORITHMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Python ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ADDITIONAL TOOLS I HAVE USED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Java ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Django");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Selenium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Flask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
} }
class SkillsComponent {
    constructor(state) {
        this.state = state;
    }
    ngOnInit() {
        this.state.onLoadAnimation$.subscribe(res => this.load = res);
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 1, vars: 1, consts: [["class", "page container", 4, "ngIf"], [1, "page", "container"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xl-12"], [1, "h2", "text-white"], [1, "row"], [1, "skill"], [1, "skill-heading"], [1, ""], [1, "tools", "row"], [1, "col-lg-3", "col-sm-6"], [1, "tool"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillsComponent_div_0_Template, 53, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".skill-heading[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 1rem 0;\n  box-sizing: border-box;\n  padding-bottom: 0.25rem !important;\n  font-weight: 700 !important;\n  text-decoration: none !important;\n  --bs-text-opacity: 1;\n  color: var(--bs-primary);\n  font-size: 2rem !important;\n}\n\n.tool[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--bs-white);\n  font-size: 1.2rem;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbC1oZWFkaW5ne1xuICBtYXJnaW46MXJlbSAxcmVtIDFyZW0gMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbi50b29se1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6dmFyKC0tYnMtd2hpdGUpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzo0cHg7XG59XG4iXX0= */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideInDownOnEnterAnimation"])(),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["slideOutDownOnLeaveAnimation"])()
                ]
            }]
    }], function () { return [{ type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data/education.ts":
/*!********************************************!*\
  !*** ./src/app/services/data/education.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let education = [
    {
        school: 'Ashesi University',
        location: 'Berekuso , Eastern Region, Ghana',
        course: 'BSc. Management Information Systems',
        duration: 'August 2016 - May 2020',
        url: 'https://www.ashesi.edu.gh/'
    },
    {
        school: 'Achimota School',
        location: 'Achimota, Greater Accra,Ghana',
        course: 'General Science (with Geography instead of Biology)',
        duration: 'November 2013 - May 2016',
        url: 'https://oldachimotan.org/contact/'
    },
];
/* harmony default export */ __webpack_exports__["default"] = (education);


/***/ }),

/***/ "./src/app/services/data/experience.ts":
/*!*********************************************!*\
  !*** ./src/app/services/data/experience.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let experience = [
    {
        company: 'interVAS Limited',
        url: 'https://www.intervas.com/',
        position: [
            {
                title: 'Web Developer',
                duration: 'November 2020 till Present'
            },
            {
                title: 'Web Developer Intern',
                duration: 'August 2020 - October 2020'
            }
        ]
    },
    {
        company: 'Ashesi University',
        url: 'https://www.ashesi.edu.gh/',
        position: [
            {
                title: 'Faculty Intern for CSIS Department',
                duration: 'August 2020 - July 2021'
            }
        ]
    },
    {
        company: 'Sylgam Travel and Tours',
        url: undefined,
        position: [
            {
                title: 'Social Media Marketing and Web Development Intern',
                duration: 'September 2018 - November 2018'
            }
        ]
    },
    {
        company: 'Akatuapa Limited',
        url: 'http://akatuapa.com/',
        position: [
            {
                title: 'Software Developer (Front End)',
                duration: 'June 2018 - July 2018'
            }
        ]
    }
];
/* harmony default export */ __webpack_exports__["default"] = (experience);


/***/ }),

/***/ "./src/app/services/data/projects.ts":
/*!*******************************************!*\
  !*** ./src/app/services/data/projects.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let projects = [
    {
        title: 'Asedas Finds',
        url: 'http://asedasfinds.com',
        image: 'asedas_finds_1.png',
        status: 'IN PROGRESS',
        description: `The Asedas Find website is an ecommerce store for
     the Asedas Find brand, to simplify and digitize the buying and selling of clothes online.
     The user interface was designed by Carl Imoru Ayarna and I built both the Front End
    and the Back End Layers`
    },
    {
        title: 'Savings Application',
        url: 'https://github.com/KwakuBoohene/saveme-ui',
        status: 'IN PROGRESS',
        image: 'saveme_ui.png',
        description: `This is the latest version of a finance app I began building for
    my final year capstone project. It was built to aid SMEs in bookkeeping and tracking their income
    and their expenditure. It was initially built using React+Express(NodeJS)+SQL.
    But was redesigned by Carl Imoru Aryana
    and is being built using Angular, Bootstrap, Laravel (PhP) and SQL.
    `
    },
    {
        title: 'Ashesi Hive Online',
        url: 'https://asc.ashesi.edu.gh/',
        status: 'COMPLETED',
        image: 'asc_1.png',
        description: `This is a website built for the Ashesi University Student Council to broadcast announcements
    and events to the general student body. It contains useful information which aids student
    life in the Ashesi University Community.
    It has a management dashboard which can be used to manage and update information
    on the website.
     I aided in the developement of the backend layer (using Laravel) of the website and worked with BR_DGE
     (a Ghanaian tech startup) to build this website
    `
    },
];
/* harmony default export */ __webpack_exports__["default"] = (projects);


/***/ }),

/***/ "./src/app/services/state/state.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/state/state.service.ts ***!
  \*************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class StateService {
    constructor() {
        this._onLoadAnimation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this._alert = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            isShowing: false,
        });
        this.onLoadAnimation$ = this._onLoadAnimation.asObservable();
        this.alert$ = this._alert.asObservable();
    }
    runOnLoadAnimation() {
        this._onLoadAnimation.next(false);
        setTimeout(() => {
            this._onLoadAnimation.next(true);
        }, 2000);
    }
    setAlert(alertOptions) {
        this._alert.next(alertOptions);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    key: 'pk_live_b94196b47bd3587384247edb33ac25a1f9b5505c',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kwakuboohene/github/my-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map