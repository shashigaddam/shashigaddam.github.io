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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'skills',
        component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"]
    },
    {
        path: 'experience',
        component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"]
    },
    {
        path: 'education',
        component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"]
    },
    {
        path: 'portfolio',
        component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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

module.exports = "p {\n  font-family: Lato;\n}\n\n.d3-chart {\n  width: 100%;\n  height: 400px;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999;\n}\n\n.d3-chart .axis text {\n  fill: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4uZDMtY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmQzLWNoYXJ0IC5heGlzIHBhdGgsXG4uZDMtY2hhcnQgLmF4aXMgbGluZSB7XG4gIHN0cm9rZTogIzk5OTtcbn1cblxuLmQzLWNoYXJ0IC5heGlzIHRleHQge1xuICBmaWxsOiAjOTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/portfolio.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/barchart/barchart.component */ "./src/app/components/barchart/barchart.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/piechart/piechart.component */ "./src/app/components/piechart/piechart.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {  PieChartComponent, BarChartComponent } from 'angular-d3-charts';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                // PieChartComponent,
                // BarChartComponent,
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_11__["BarchartComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                _components_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_13__["PiechartComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"].forRoot()
            ],
            providers: [_portfolio_service__WEBPACK_IMPORTED_MODULE_8__["PortfolioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/barchart/barchart.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/barchart/barchart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3-chart {\n  width: 100%;\n  height: 400px;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999;\n}\n\n.d3-chart .axis text {\n  fill: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXJjaGFydC9iYXJjaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhcmNoYXJ0L2JhcmNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZDMtY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmQzLWNoYXJ0IC5heGlzIHBhdGgsXG4uZDMtY2hhcnQgLmF4aXMgbGluZSB7XG4gIHN0cm9rZTogIzk5OTtcbn1cblxuLmQzLWNoYXJ0IC5heGlzIHRleHQge1xuICBmaWxsOiAjOTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/barchart/barchart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/barchart/barchart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/barchart/barchart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/barchart/barchart.component.ts ***!
  \***********************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BarchartComponent = /** @class */ (function () {
    function BarchartComponent(element) {
        this.screenWidth = 610;
        this.screenHeight = 400;
        this.margin = { top: 40, right: 20, bottom: 40, left: 50 };
        // public colors = ['red', 'blue', 'green']
        this.colors = ['#ff5c33', '#0066cc', '#009900', '#003366', '#e60000', '#00cc99', '#00b300', '#ff9900', '#33ccff'];
        this.dataColumns = [1];
        this.barChartData = [
            {
                id: 0,
                label: 'Html',
                value: 6,
                type: '6 Years'
            },
            {
                id: 1,
                label: 'Css',
                value: 6,
                type: '6 Years'
            },
            {
                id: 2,
                label: 'Javascript',
                value: 6,
                type: '6 Years'
            },
            {
                id: 3,
                label: 'Jquery',
                value: 4,
                type: '4 Years'
            },
            {
                id: 4,
                label: 'Angular js',
                value: 4,
                type: '4 Years'
            },
            {
                id: 5,
                label: 'Vue Js',
                value: 0.8,
                type: ' 8 Months'
            },
            {
                id: 6,
                label: 'React Js',
                value: 0.6,
                type: '6 Months'
            },
            {
                id: 7,
                label: 'Node js',
                value: 3,
                type: ' 3 Years'
            },
            {
                id: 8,
                label: 'D3 js',
                value: 3,
                type: '3 Years'
            },
        ];
        this.host = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"](element.nativeElement);
    }
    BarchartComponent.prototype.ngOnInit = function () {
        var self = this;
        this.svg = this.host.append('svg');
        var scrn_margin = 30;
        // Define the div for the tooltip
        var divTooltip = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        this.svg
            .attr("width", this.screenWidth - 70)
            .attr("height", this.screenHeight + scrn_margin);
        var width = +this.svg.attr("width") - this.margin.left - this.margin.right;
        var height = +this.svg.attr("height") - this.margin.top - this.margin.bottom - 40;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + (this.margin.left + 15) + "," + (this.margin.top * .9) + ")");
        var xScale = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().range([0, width]).padding(0.4), yScale = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().range([height, 0]);
        xScale.domain(this.barChartData.map(function (d) { return d.label; }));
        yScale.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_3__["max"](this.barChartData, function (d) { return d.value; })]);
        this.g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](xScale));
        this.g.append("g")
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](yScale).tickFormat(function (d) {
            return d;
        }).ticks(10))
            .append("text")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("value");
        var bars = this.g.selectAll(".bar")
            .data(this.barChartData)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return xScale(d.label); })
            .attr("y", function (d) { return yScale(d.value); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) { return height - yScale(d.value); })
            .style("fill", function (d, i) {
            // var letters = '0123456789ABCDEF';
            // var color = '#';
            // var i;
            // for (i = 0; i < 6; i++) {
            //   color += letters[Math.floor(Math.random() * 16)];
            // }
            var color = self.colors[i];
            return color;
        }).on("mouseover", function (d) {
            divTooltip.style("opacity", 0.9);
            // divTooltip.html(d.label + "<br/>"  + d.value + " " + d.type )
            divTooltip.html(d.label + "<br/>" + " " + d.type)
                .style("left", (d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].pageX) + "px")
                .style("top", (d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].pageY - 28) + "px");
        }).on("mouseout", function () {
            divTooltip.style("opacity", 0);
        });
    };
    BarchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barchart',
            template: __webpack_require__(/*! ./barchart.component.html */ "./src/app/components/barchart/barchart.component.html"),
            styles: [__webpack_require__(/*! ./barchart.component.css */ "./src/app/components/barchart/barchart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BarchartComponent);
    return BarchartComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact{\n  position: relative;\n  left: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3R7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header globalTop setColor\">Contact Details</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24917.73824515794!2d-90.39844966093447!3d38.67836504470192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df336140168653%3A0x3c64a264e82829eb!2sSt.%20Louis%2C%20MO%2063132!5e0!3m2!1sen!2sus!4v1586226390838!5m2!1sen!2sus\" width=\"700\" height=\"500\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n    </div>\n\n    <div class=\"col-md-4\">\n      <h3 class=\"contact\">Get in Touch</h3>\n        <h4 class=\"contact\"> Email: shashi.uidev88@gmail.com</h4>\n        <h4 class=\"contact\">Contact No:314-384-2427</h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".workDetails .rightArea {\n  border-left: solid 1px #eaeaea;\n  padding-bottom: 47px;\n}\n.arrowpart {\n  float: left;\n  width: 15px;\n  height: 50px;\n  background: url(/../assets/images/arrow-left.png) no-repeat 0 23px;\n}\n.workYear {\n  font-size: 17px;\n  color: #fff;\n  background: #00bdbd;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n  padding: 40px 0 40px 0;\n  border-radius: 50%;\n  /* For Firefox and other Gecko browsers */\n  -moz-border-radius: 50%;\n  /* For Chrome/Safari and other Webkit browsers */\n  -webkit-border-radius: 50%;\n  /* For others */\n}\n@media screen and (min-width: 1200px)\n  .workYear {\n    width: 140px;\n    height: 140px;\n    padding-top: 50px;\n\n\n  }\n.exCon {\n    width: auto;\n    background: #f3f3f3;\n    border-bottom: solid 4px #eeeeee;\n    padding: 22px 47px 6px 47px;\n    margin-left: 15px;\n    text-align: left;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrRUFBa0U7QUFDcEU7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLHVCQUF1QjtFQUN2QixnREFBZ0Q7RUFDaEQsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjs7O0VBR25CO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmtEZXRhaWxzIC5yaWdodEFyZWEge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNlYWVhZWE7XG4gIHBhZGRpbmctYm90dG9tOiA0N3B4O1xufVxuLmFycm93cGFydCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctbGVmdC5wbmcpIG5vLXJlcGVhdCAwIDIzcHg7XG59XG4ud29ya1llYXIge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDBiZGJkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLyogRm9yIEZpcmVmb3ggYW5kIG90aGVyIEdlY2tvIGJyb3dzZXJzICovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKiBGb3IgQ2hyb21lL1NhZmFyaSBhbmQgb3RoZXIgV2Via2l0IGJyb3dzZXJzICovXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKiBGb3Igb3RoZXJzICovXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcbiAgLndvcmtZZWFyIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuXG4gIH1cbiAgLmV4Q29uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjZWVlZWVlO1xuICAgIHBhZGRpbmc6IDIycHggNDdweCA2cHggNDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/education/education.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header globalTop setColor\">Education\n\n      </h1>\n    </div>\n\n  </div>\n   <div class=\"row workDetails\">\n        <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n          <div class=\"workYear\">2012 - 2013</div>\n        </div>\n        <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n          <div class=\"arrowpart\"></div>\n          <div class=\"exCon\">\n            <h4>Master Degree - Information Technology </h4>\n            <h5>University of Central Missouri, Missouri</h5>\n            <p> Few courses include: Software Engineering,Adv App Dev Using Visual C#,Application Dev using Java,Project Management,Advanced Systems Project   <br> Through out my academic career at UCM, I worked with many professors and Developed few applications using web technologies like Html,css,Javascript,Jquery,c#,java.</p>\n          </div>\n        </div>\n      </div>\n  <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">2006 -2010</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n      <div class=\"arrowpart\"></div>\n      <div class=\"exCon\">\n        <h4>Bachelors Degree - Computer Science</h4>\n        <h5>Jawaharlal Nehru Technological University, Hyderabad, India</h5>\n        <p> Few courses include: C programming,Advance Data Structures, Ooops through Java,Data Base Mgmt Systems,Web Technologies <br> Through out my acadamic career at JNTU, I worked with many academic projects using technologies like Html,Css,Java script,C,C++,Java </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".workYear {\n  font-size: 17px;\n  color: #fff;\n  background: #00bdbd;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n  padding: 40px 0 40px 0;\n  border-radius: 50%;\n  /* For Firefox and other Gecko browsers */\n  -moz-border-radius: 50%;\n  /* For Chrome/Safari and other Webkit browsers */\n  -webkit-border-radius: 50%;\n  /* For others */\n}\n@media screen and (min-width: 1200px)\n  .workYear {\n    width: 140px;\n    height: 140px;\n    padding-top: 50px;\n\n\n  }\n.exCon {\n    width: auto;\n    background: #f3f3f3;\n    border-bottom: solid 4px #eeeeee;\n    padding: 22px 47px 6px 47px;\n    margin-left: 15px;\n    text-align: left;\n  }\n.arrowpart {\n    float: left;\n    width: 15px;\n    height: 50px;\n    background: url(/../assets/images/arrow-left.png) no-repeat 0 23px;\n  }\n.workDetails .rightArea {\n    border-left: solid 1px #eaeaea;\n    padding-bottom: 47px;\n  }\n.exCon p {\n    color: #84868d;\n    line-height: 21px;\n  }\n.contact{\n    position: relative;\n    left: 40px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLHVCQUF1QjtFQUN2QixnREFBZ0Q7RUFDaEQsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjs7O0VBR25CO0FBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0VBQWtFO0VBQ3BFO0FBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrWWVhciB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMGJkYmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKiBGb3IgRmlyZWZveCBhbmQgb3RoZXIgR2Vja28gYnJvd3NlcnMgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIEZvciBDaHJvbWUvU2FmYXJpIGFuZCBvdGhlciBXZWJraXQgYnJvd3NlcnMgKi9cbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIEZvciBvdGhlcnMgKi9cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcbiAgLndvcmtZZWFyIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuXG4gIH1cblxuICAuZXhDb24ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICNlZWVlZWU7XG4gICAgcGFkZGluZzogMjJweCA0N3B4IDZweCA0N3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmFycm93cGFydCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1sZWZ0LnBuZykgbm8tcmVwZWF0IDAgMjNweDtcbiAgfVxuICAud29ya0RldGFpbHMgLnJpZ2h0QXJlYSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZWFlYWVhO1xuICAgIHBhZGRpbmctYm90dG9tOiA0N3B4O1xuICB9XG4gIC5leENvbiBwIHtcbiAgICBjb2xvcjogIzg0ODY4ZDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgfVxuICAuY29udGFjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/experience/experience.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header globalTop setColor\">Experience</h1>\n    </div>\n\n  </div>\n  <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">Sept 2019<br>\n        Present</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n\n      <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Koch Industries INC<img height=\"102px\" width=\"200\" class=\"iconAlign\" align=\"right\" src=\"assets/images/koch.jpg\"> </h4>\n      <h5>UI Developer</h5>\n      <p>Koch Industries, Inc. is an American multinational corporation based in Wichita, Kansas. Its subsidiaries are involved in the manufacturing, refining, distribution of petroleum, finance, chemicals, energy, minerals, fertilizers, finance etc. I am part of Energy Dashboard where it is used by various auto manufacturing companies around the world to gather and analyze the Energy utilization of their products.\n      </p>\n      <h5>Wichita,KS</h5>\n    </div>\n    </div>\n  </div>\n  <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">April 2017<br>\n        Aug 2019</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n\n      <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Bayer <img height=\"102px\" width=\"136\" class=\"iconAlign\" align=\"right\" src=\"assets/images/bayer.png\"> </h4>\n      <h5>UI Developer</h5>\n      <p>Monsanto Company was an agrochemical and agricultural biotechnology corporation. It was headquartered in Creve Coeur, Greater St. Louis, Missouri. I am part of  many data visualization projects like Center of Excellence dashboard,\n      Sales order streaming Dashboard,Uploadfilestos3 and Enterprise Dashboard</p>\n      <h5>Saint Louis, MO</h5>\n    </div>\n    </div>\n  </div>\n  <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">June 2016<br>\n        March 2017</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n\n      <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Walt Disney (Accenture)<img height=\"102px\" class=\"iconAlign\" align=\"right\" src=\"assets/images/waltdisney.jpeg\"> </h4>\n      <h5>UI Developer</h5>\n      <p>The Walt Disney World Resort is an entertainment complex located in  Lake Buena Vista, Florida.The resort is owned and operated by Walt Disney Parks and Resorts, a division of The Walt Disney Company. I am part of  DLR Cast Application which is used by the cast members in the park.This application can scan the tickets and pull up the tickets reservation information of the guests.</p>\n      <h5>Orlando, FL</h5>\n    </div>\n    </div>\n  </div>\n  <!-- <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">Jan 2016<br>\n        May 2016</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n\n      <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Subaru of America<img height=\"102px\" class=\"iconAlign\" align=\"right\" src=\"assets/images/subaru.png\"> </h4>\n      <h5>UI Developer</h5>\n      <p>Subaru of America, Inc. (SOA) is the U.S. Sales and Marketing subsidiary of Fuji Heavy Industries (FHI) of Japan and is responsible for the distribution, marketing, sales and service of Subaru vehicles in the United States. Iam part of the new subarunet look and feel project which is used by the dealers throughout us and canada.\n      </p>\n      <h5>CherryHill, NJ</h5>\n    </div>\n    </div>\n  </div> -->\n  <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">June 2015<br>\n        May 2016</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n\n      <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Quicken Loans<img height=\"102px\" class=\"iconAlign\" align=\"right\" src=\"assets/images/ql.jpg\"> </h4>\n      <h5>UI Developer</h5>\n      <p>Quicken Loans is the second largest overall retail lender in the U.S and it is the no. one I.T place to work in U.S by Computer World.I was involved in the Drive 2.0 project where it is used to set communication between team leader and team members.It is also used by team members to set goals for them and team leaders uses Drive 2.0 to give feedback to the team members.\n      </p>\n      <h5>Detroit, MI</h5>\n    </div>\n    </div>\n  </div>\n  <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">Jan 2014<br>\n        May 2015</div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">\n\n      <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Independence Blue Cross<img height=\"102px\" class=\"iconAlign\" align=\"right\" src=\"assets/images/ibx.png\"> </h4>\n      <h5>UI Developer</h5>\n      <p>Independence Blue cross is the leading insurance company in southeastern Pennsylvania. I was involved in a project to develop the web site for Scheduling Nurses to collect information from the providers and also involved in implementing Data Entry module where Nurses can enter the information for the members with different indicators.\n      </p>\n      <h5>Philadelphia, PA</h5>\n    </div>\n    </div>\n  </div>\n  <!-- <div class=\"row workDetails\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">\n      <div class=\"workYear\">May 2013<br>\n        Dec 2013</div>\n    </div> -->\n    <!-- <div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\"> -->\n\n      <!-- <div class=\"arrowpart\"></div><div class=\"exCon\">\n      <h4>Citius Tech <img height=\"102px\" class=\"iconAlign\" align=\"right\" src=\"assets/images/cititech.png\"> </h4>\n      <h5>Web Developer</h5>\n      <p>Citius Tech plays a key role in enabling healthcare technology partners, large hospitals/IDNs, payers, and life sciences companies accelerate innovation in their business - across care delivery models and workflows, and leverage new technologies to enhance patient care and engagement.\n      </p>\n      <h5>Princeton, NJ</h5>\n    </div> -->\n    <!-- </div>\n  </div> --> \n  <!--<div class=\"row workDetails\">-->\n    <!--<div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\">-->\n      <!--<div class=\"workYear\">June 2010<br>-->\n        <!--July 2012</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea\">-->\n\n      <!--<div class=\"arrowpart\"></div><div class=\"exCon\">-->\n      <!--<h4>Maruthi Suzuki<img height=\"102px\" class=\"iconAlign\" align=\"right\" src=\"assets/images/maruthi.jpg\"> </h4>-->\n      <!--<h5>UI Developer</h5>-->\n      <!--<p>Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India. It is a subsidiary of Japanese automobile and motorcycle manufacturer Suzuki Motor Corporation.Created Front-end Applications using HTML, CSS and JavaScript.-->\n      <!--</p>-->\n      <!--<h5>Hyderabad, India</h5>-->\n    <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".well{\n  background-color: #00bdbd !important;\n}\n.nameSet{\n  color: #fff;\n  margin-top: -10px;\n}\n.titleSet{\n  margin-top: 4px;\n  color: #fff;\n}\n.aboutSet{\n  color:#fff;\n  font-weight:400;\n  font-size:17px;\n  font-family: 'Open Sans', sans-serif;\n  line-height:30px;\n}\n#main{\npadding-bottom:20px;\n}\n.mftr {\n  display: block;\n  background-color:#e4c14e;\n  color: #ffffff;\n  height: 40px;\n  width: 100%;\n  margin-top: 0 0 0 0;\n  position:absolute;\n  bottom:0;\n  left:0;\n}\n.legal-copy {\n  margin: 0 auto;\n  padding: .75em;\n  text-align: center;\n  color: #333;\n}\n.barSet{\n  width: 593px;\n  height: 420px;\n  border: 2px solid #00bdbd ;\n  margin-left: 54px;\n  padding-left: 3px;\n  padding-top: 10px;\n}\n.pieSet{\n  width: 593px;\n  height: 420px;\n  border: 2px solid #00bdbd ;\n  margin-left: 27px;\n  padding-left: 95px;\n  padding-top: 5px;\n}\n.footer {\n  position: absolute;\n  right: 0;\n  bottom: -200px;\n  left: 0;\n  padding: 1rem;\n  background-color: #262b37 ;\n  text-align: center;\n  height:45px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE1BQU07QUFDUjtBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGx7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJkYmQgIWltcG9ydGFudDtcbn1cbi5uYW1lU2V0e1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4udGl0bGVTZXR7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hYm91dFNldHtcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC13ZWlnaHQ6NDAwO1xuICBmb250LXNpemU6MTdweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDozMHB4O1xufVxuI21haW57XG5wYWRkaW5nLWJvdHRvbToyMHB4O1xufVxuXG4ubWZ0ciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlNGMxNGU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwIDAgMCAwO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbn1cblxuXG4ubGVnYWwtY29weSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAuNzVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJhclNldHtcbiAgd2lkdGg6IDU5M3B4O1xuICBoZWlnaHQ6IDQyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBiZGJkIDtcbiAgbWFyZ2luLWxlZnQ6IDU0cHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnBpZVNldHtcbiAgd2lkdGg6IDU5M3B4O1xuICBoZWlnaHQ6IDQyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBiZGJkIDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIHBhZGRpbmctbGVmdDogOTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogLTIwMHB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYjM3IDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6NDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" style=\"background-color: #e1e1e1\">\n\n<div class=\"row\" style=\"margin-top:59px;\">\n  <div class=\"well col-md-9\" style=\"position:relative;left:58px;background: #00bdbd;\">\n    <h2 class=\"nameSet\">Gaddam Shashi Kanth</h2>\n    <h3 class=\"titleSet\">Front End Web Developer / User Interface Developer </h3>\n    <p class=\"aboutSet\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Shashi Gaddam, I'm a Front End Developer.My Focus is on developing Front End Applications using technologies like Angular Js, Vue Js, React Js, Html 5, Css 3, Java script, Jquery, Bootstrap and Node Js.I like creating clean User Interfaces and Responsive web pages.I'm very Passionate to\n    learn and adapt quickly to the emerging new technologies.I have experience in creating web applications in W3C Standards.</p>\n\n\n  </div>\n<div class=\"col-md-3\">\n  <img src=\"./assets/images/profile.jpg\" alt=\"Trulli\" width=\"200\" height=\"238\" style=\"float:right;\"  style=\"position:relative;left:50px;\">\n\n</div>\n</div>\n\n\n<!--<div class=\"row\">-->\n\n  <!--&lt;!&ndash;<br/>&ndash;&gt;-->\n  <!--&lt;!&ndash;<br/>&ndash;&gt;-->\n  <!--&lt;!&ndash;<br/>&ndash;&gt;-->\n  <!--<div class=\"col-md-11\">-->\n <!--<div  style=\"background-color: #00bdbd;position: relative;-->\n    <!--left: 55px;border:1px solid black;\">-->\n<!--<h4 style=\"color:#fff;position:relative;left:10px;font-family: 'Open Sans', sans-serif;font-size: 26px;font-weight:300\">About Me</h4>-->\n   <!--<p style=\"color:#fff;font-weight:400;font-family: 'Open Sans', sans-serif;line-height:30px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Shashi Gaddam, I'm a Front End Developer.My Focus is on developing Front End Applications using technologies like Angular Js, React Js, Html 5, Css 3, Java script, Jquery, Bootstrap and Node Js.I like creating clean User Interfaces and Responsive web pages.I'm very Passionate to-->\n     <!--learn and adapt quickly to the emerging new technologies.I have experience in creating web applications in W3C Standards.</p>-->\n\n\n\n  <!--</div>-->\n\n\n\n  <!--</div>-->\n<!--</div>-->\n\n\n\n\n<div class=\"row\">\n\n  <div class=\"col-md-6 barSet\">\n    <app-barchart></app-barchart>\n\n</div>\n  <div class=\"col-md-6 pieSet\">\n\n    <app-piechart></app-piechart>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"footer\">\n\n    <span>hello</span>\n  </div>\n\n  <!--<div class=\"panel panel-default\">-->\n\n    <!--<div class=\"panel-footer\" style=\"background-color: #00bdbd;height:100px;margin-top:0px;padding-top:0px;\"></div>-->\n  <!--</div>-->\n</div>\n</div>\n  <!-- <div class=\"mftr\">-->\n    <!-- <div class=\"legal-copy\">&copy; 2017 Monsanto Company - All Rights Reserved</div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ "./src/app/portfolio.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_portfolio, document) {
        this._portfolio = _portfolio;
        this.document = document;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._portfolio.getBarchart()
            .subscribe(function (data) { return _this.chartData = data; }, function (error) { return _this.errorMsg = error; });
        this.document.body.classList.add('homePage');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.document.body.classList.remove('homePage');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"], Document])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-inverse{\n  background-color: #262b37 !important;\n  color: #c3c8d6;\n}\n\n.navbar{\n  min-height:60px !important;\n}\n\n.navbar-nav>li>a {\n  line-height:27px;\n}\n\n@media (min-width: 768px){\n  .navbar-nav>li>a {\n    padding-top: 17px;\n  }\n\n}\n\n.navbar-inverse .navbar-nav>li>a {\n   color: #c3c8d6;\n}\n\n/*a{*/\n\n/*width:90px;*/\n\n/*}*/\n\n.tabSize{\n  width:130px !important;\n  text-align: center;\n}\n\n.tabContent{\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n}\n\n.nav>li>a:focus {\n  background: #080808;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7O0FBRUE7R0FDRyxjQUFjO0FBQ2pCOztBQUVBLEtBQUs7O0FBQ0gsY0FBYzs7QUFDaEIsSUFBSTs7QUFFSjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFDQztFQUNDLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWludmVyc2V7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjJiMzcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNjM2M4ZDY7XG59XG5cbi5uYXZiYXJ7XG4gIG1pbi1oZWlnaHQ6NjBweCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLW5hdj5saT5hIHtcbiAgbGluZS1oZWlnaHQ6MjdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XG4gIC5uYXZiYXItbmF2PmxpPmEge1xuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xuICB9XG5cbn1cblxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2PmxpPmEge1xuICAgY29sb3I6ICNjM2M4ZDY7XG59XG5cbi8qYXsqL1xuICAvKndpZHRoOjkwcHg7Ki9cbi8qfSovXG5cbi50YWJTaXple1xuICB3aWR0aDoxMzBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFiQ29udGVudHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4gLm5hdj5saT5hOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzA4MDgwODtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n\n\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\" style=\"background: red;\">\n        <div class=\"container-fluid\">\n          <!--<div class=\"navbar-header\">-->\n            <!--<a class=\"navbar-brand\" href=\"#\">WebSiteName</a>-->\n          <!--</div>-->\n          <ul class=\"nav navbar-nav\" style=\"margin-left:180px;\">\n            <li class=\" tabSize tabContent \"><a  routerLink=\"/\" routerLinkActive=\"active\">HOME</a></li>\n            <li class=\"tabSize\"><a routerLink=\"skills\" routerLinkActive=\"active\">SKILLS</a></li>\n            <li class=\"tabSize\"><a routerLink=\"experience\" routerLinkActive=\"active\">EXPERIENCE</a></li>\n            <li class=\"tabSize\"><a  routerLink=\"education\" routerLinkActive=\"active\">EDUCATION</a></li>\n            <li class=\"tabSize\"><a  routerLink=\"portfolio\" routerLinkActive=\"active\">PORTFOLIO</a></li>\n            <li class=\"tabSize\"><a  routerLink=\"contact\" routerLinkActive=\"active\">CONTACT</a></li>\n          </ul>\n        </div>\n      </nav>\n\n    </div>\n  </div>\n\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-lg-12\">-->\n      <!--<router-outlet></router-outlet>-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/piechart/piechart.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/piechart/piechart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGllY2hhcnQvcGllY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/piechart/piechart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/piechart/piechart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div id=\"pieChartId\"></div>\n\n\n"

/***/ }),

/***/ "./src/app/components/piechart/piechart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/piechart/piechart.component.ts ***!
  \***********************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
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

var PiechartComponent = /** @class */ (function () {
    function PiechartComponent(element) {
        this.screenWidth = 650;
        this.screenHeight = 470;
        this.margin = { top: 40, right: 20, bottom: 40, left: 50 };
        this.pieChartData = [
            {
                id: 0,
                label: 'Html',
                value: 6,
                color: '#ff5c33',
                level: 'Expert',
            },
            {
                id: 1,
                label: 'Css',
                value: 6,
                color: '#0066cc',
                level: 'Expert',
            },
            {
                id: 2,
                label: 'Javascript',
                value: 6,
                color: '#009900',
                level: 'Expert',
            },
            {
                id: 3,
                label: 'Jquery',
                value: 4,
                color: '#003366',
                level: 'Expert',
            },
            {
                id: 4,
                label: 'Angular js',
                value: 4,
                color: '#e60000',
                level: 'Expert',
            },
            {
                id: 5,
                label: 'Vue js',
                value: 1,
                color: '#00cc99',
                level: 'Advanced',
            },
            {
                id: 6,
                label: 'React js',
                value: 1,
                color: '#33ccff',
                level: 'Intermediate',
            },
            {
                id: 7,
                label: 'Node js',
                value: 3,
                color: '#00b300',
                level: 'Advanced',
            },
            {
                id: 8,
                label: 'D3 js',
                value: 3,
                color: '#ff9900',
                level: 'Advanced',
            },
        ];
        this.host = d3.select(element.nativeElement);
    }
    PiechartComponent.prototype.ngOnInit = function () {
        var chartComponent = this;
        // let imageWidth = this.iconWidth ? this.iconWidth : 40;
        // let imageHeight = this.iconHeight ? this.iconHeight : 40;
        // let width = this.width ? this.width : 700;
        // let height = this.height ? this.height : 400;
        var radius = 200;
        var piedata = this.pieChartData;
        var outerRadius = 150;
        var chartID = 'pieChartId';
        // this.outerRadius > 150 ? this.outerRadius = 150 : this.outerRadius;
        // Define the div for the tooltip
        var divTooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        var pie = d3.layout.pie()
            .startAngle(Math.PI / 2)
            .endAngle(Math.PI * 2 + Math.PI / 2)
            .value(function (d) {
            return d.value;
        }).sort(null);
        var arc = d3.svg.arc()
            .outerRadius(outerRadius);
        var arcNew = d3.svg.arc()
            .outerRadius(outerRadius + 10);
        var svg = d3.select('#' + chartID).append('svg')
            .attr('width', this.screenWidth)
            .attr('height', this.screenHeight)
            .append('g')
            .attr('transform', 'translate(' + (400 - radius + 10) + ',' + (400 - radius + 10) + ')');
        var g = svg.selectAll('.arc')
            .data(pie(piedata))
            .enter().append('g')
            .attr('class', 'arc');
        var pp = g.append('path')
            .attr('d', arc)
            .style('stroke', 'white').style('fill', function (d, i) {
            return [d.data.color];
        })
            .attr('id', function (d) {
            return 'iconId' + d.data.event;
        })
            .on('click', function (d) {
            d3.selectAll('path').transition()
                .duration(50)
                .attr('d', function (d) {
                if (this.selectedId === d.data.id) {
                    d.data.expanded = true;
                    this.selectedId = null;
                    return arc(d);
                }
                else {
                    d.data.expanded = false;
                    this.selectedId = null;
                    return arc(d);
                }
            });
        }).on("mouseover", function (d) {
            divTooltip.style("opacity", .9);
            divTooltip.html(d.data.label + "<br/>" + d.data.level)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        }).on("mouseout", function () {
            divTooltip.style("opacity", 0);
        });
        var legendLabels = [];
        var legendColors = [];
        for (var i = 0; i < piedata.length; i++) {
            legendLabels.push(piedata[i].label);
            legendColors.push(piedata[i].color);
        }
        var color = d3.scale.ordinal()
            .domain(legendLabels)
            .range(legendColors);
        var legendItemSize = 18;
        var legendSpacing = 4;
        var legend = svg
            .selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function (d, i) {
            var multiplicationFactor = 9;
            var height = legendItemSize + legendSpacing;
            var offset = height * color.domain().length / 2;
            var x = legendItemSize * multiplicationFactor;
            var y = ((i * height) - offset);
            return "translate(" + x + ", " + y + ")";
        });
        legend
            .append('rect')
            .attr('width', legendItemSize)
            .attr('height', legendItemSize)
            .style('fill', color);
        legend
            .append('text')
            .attr('x', legendItemSize + legendSpacing)
            .attr('y', legendItemSize - legendSpacing)
            .text(function (d) { return d; });
    };
    PiechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piechart',
            template: __webpack_require__(/*! ./piechart.component.html */ "./src/app/components/piechart/piechart.component.html"),
            styles: [__webpack_require__(/*! ./piechart.component.css */ "./src/app/components/piechart/piechart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PiechartComponent);
    return PiechartComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n}\n\n.carousel-inner{\n  width:100%;\n  max-height: 600px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi5jYXJvdXNlbC1pbm5lcntcbiAgd2lkdGg6MTAwJTtcbiAgbWF4LWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header globalTop setColor\">Portfolio</h1>\n    </div>\n  </div>\n  <div class=\"row\" >\n    <div class=\"bs-example\">\n      <carousel [interval]=\"myInterval\">\n        <slide>\n          <img src=\"assets/images/ui screens/kochone.png\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/kochtwo.png\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/kochthree.png\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/coeone.png\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/salesorder.png\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/uploadtos3.png\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/disney.JPG\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/disney2.JPG\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/disney3.JPG\"  alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/disney4.JPG\"  alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/IBX.JPG\"  alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/IBX2.JPG\"  alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/IBX3.JPG\"  alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/IBX4.JPG\"  alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/QL.JPG\"  alt=\"third slide\" style=\"display: block; width: 50%;height:100%;margin: auto;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/QL2.JPG\"  alt=\"third slide\" style=\"display: block; width: 50%;height:100%;margin: auto;\">\n        </slide>\n        <slide>\n          <img src=\"assets/images/ui screens/QL3.JPG\"  alt=\"third slide\" style=\"display: block; width: 50%;height:100%;margin: auto;\">\n        </slide>\n      </carousel>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.myInterval = 2000;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgAlign{\n  padding-left: 83px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdBbGlnbntcbiAgcGFkZGluZy1sZWZ0OiA4M3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/skills/skills.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header globalTop setColor\" >Skills\n\n      </h1>\n    </div>\n\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n      <div class=\"col-lg-1\">\n        <img src=\"assets/images/html.png\">\n      </div>\n      <div class=\"col-lg-1 imgAlign\">\n        <img src=\"assets/images/css.png\">\n      </div>\n      <div class=\"col-lg-1\" style=\"padding-left:134px;\">\n        <img src=\"assets/images/javascript.png\">\n      </div>\n      <!-- <div class=\"col-lg-1 \" style=\"padding-left:134px;\">\n        <img src=\"assets/images/jquery.png\">\n      </div> -->\n      <div class=\"col-lg-1\" style=\"padding-left:134px;\">\n        <img src=\"assets/images/bootstrap.png\">\n      </div>\n      <div class=\"col-lg-1\" style=\"padding-left:134px;\">\n        <img src=\"assets/images/angularjs.png\">\n      </div>\n      <div class=\"col-lg-1\" style=\"padding-left:134px;\">\n        <img src=\"assets/images/vuejs.jpg\" height=\"128\" width=\"128\">\n      </div>\n      <div class=\"col-lg-1\" style=\"padding-left:134px;\">\n        <img src=\"assets/images/reactjs.png\">\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 page-header\">\n\n      <table class=\"table table-striped table-bordered\">\n        <thead>\n        <!-- <tr>\n\n          <th></th>\n          <th></th>\n\n        </tr> -->\n        </thead>\n        <tbody>\n        <tr>\n\n          <td class=\"designData\">Web Technologies</td>\n          <td>HTML5, CSS3 , JavaScript, jQuery, AJAX, XHTML, XML, JSON, Bootstrap, MVC Design, Typescript,ES6,Bower, git bash,Yeomen</td>\n\n        </tr>\n        <tr>\n\n          <td class=\"designData\">JS Frameworks</td>\n          <td>Angular1.x, Angular2/4/8,Vue Js,ReactJs,RequireJs,Node Js,Grunt Js,Gulp Js</td>\n\n        </tr>\n        <tr>\n\n          <td class=\"designData\">Charting Frameworks</td>\n          <td>Chart Js,D3 Js,Highcharts,Kendo UI</td>\n\n        </tr>\n        <tr>\n\n          <td class=\"designData\">Testing Tools</td>\n          <td>Jest,Karma ,Jasmine</td>\n\n        </tr>\n        <tr>\n\n          <td class=\"designData\">IDE & Editors</td>\n          <td>Notepad++, Sublime, Visual Studio code, Eclipse.</td>\n\n        </tr>\n        <tr>\n\n          <td class=\"designData\">Source Controls</td>\n          <td> GitHub,SVN,Source Tree</td>\n\n        </tr>\n        <tr>\n\n          <td class=\"designData\">Debug Tools</td>\n          <td> Jira, Firebug, Chrome Developers Tool</td>\n\n        </tr>\n        </tbody>\n      </table>\n\n\n    </div>\n\n  </div>\n\n</div>\n<!-- /.container -->\n"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio.service.ts":
/*!**************************************!*\
  !*** ./src/app/portfolio.service.ts ***!
  \**************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
        this.url = "/assets/data/barchart.json";
    }
    PortfolioService.prototype.getBarchart = function () {
        //this.url="/assets/data/"+param+".json";
        //console.log(this.url);
        return this.http.get(this.url);
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shashigaddam/Desktop/shashigaddam.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map