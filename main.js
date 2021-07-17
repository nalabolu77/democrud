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
/* harmony import */ var _employee_list_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/list-employee.component */ "./src/app/employee/list-employee.component.ts");
/* harmony import */ var _employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee/create-employee.component */ "./src/app/employee/create-employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'list', component: _employee_list_employee_component__WEBPACK_IMPORTED_MODULE_3__["ListEmployeeComponent"] },
    { path: 'create', component: _employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"] },
    { path: 'edit/:id', component: _employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"] },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLinkActive =\"active\" routerLink=\"list\">List</a>\n      </li>\n      <li>\n        <a  routerLinkActive =\"active\" routerLink=\"create\">Create</a>\n      </li>\n    </ul>\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'ReactiveForm';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/create-employee.component */ "./src/app/employee/create-employee.component.ts");
/* harmony import */ var _employee_list_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/list-employee.component */ "./src/app/employee/list-employee.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__["CreateEmployeeComponent"],
                _employee_list_employee_component__WEBPACK_IMPORTED_MODULE_7__["ListEmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/create-employee.component.css":
/*!********************************************************!*\
  !*** ./src/app/employee/create-employee.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    border: 1px solid silver;\r\n}"

/***/ }),

/***/ "./src/app/employee/create-employee.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employee/create-employee.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h2 class=\"panel-title\">{{pageTitle}}</h2>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error' : formErrors.fullName }\">\n        <label class=\" col-sm-2 control-label\">Full Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" id=\"fullName\" formControlName=\"fullName\" class=\"form-control\"\n            (blur)=\"logValidationerrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.fullName\">\n            {{formErrors.fullName}}\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">Contact Preference</label>\n        <div class=\"col-sm-8\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" formControlName=\"contactPreference\" value=\"email\" />Email</label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" formControlName=\"contactPreference\" value=\"phone\" />Phone</label>\n        </div>\n      </div>\n\n      <div formGroupName=\"emailGroup\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error' : formErrors.email }\">\n          <label class=\"col-sm-2 control-label\">Email</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" id=\"email\" formControlName=\"email\" class=\"form-control\" (blur)=\"logValidationerrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.email\">\n              {{formErrors.email}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error' : formErrors.confirmEmail || formErrors.emailGroup }\">\n          <label class=\"col-sm-2 control-label\">Confirm Email</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" id=\"confirmEmail\" formControlName=\"confirmEmail\" class=\"form-control\"\n              (blur)=\"logValidationerrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.confirmEmail || formErrors.emailGroup\">\n              {{formErrors.confirmEmail ? formErrors.confirmEmail : formErrors.emailGroup}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error' : formErrors.phone }\">\n        <label class=\"col-sm-2 control-label\">Phone</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" id=\"phone\" formControlName=\"phone\" class=\"form-control\" (blur)=\"logValidationerrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.phone\">\n            {{formErrors.phone}}\n          </span>\n        </div>\n      </div>\n      <div class=\"well\">\n        <div class=\"form-group\">\n          <div class=\"col-md-offset-2 col-md-4\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addSkillButtonClick()\"\n                    [disabled]=\"employeeForm.get('skills').invalid\">\n              Add Skills\n            </button>\n          </div>\n        </div>\n        <div formArrayName=\"skills\" \n             *ngFor=\"let skill of employeeForm.get('skills').controls; let i=index\">\n             <hr *ngIf=\"i>0\">\n          <div [formGroupName]=\"i\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : skill.get('skillName').invalid && \n                                                              skill.get('skillName').touched }\">\n              <label class=\" col-sm-2 control-label\" [attr.for]=\"'skillName'+i\">Skill</label>\n              <div class=\"col-sm-4\">\n                <input type=\"text\" [id]=\"'skillName'+i\" formControlName=\"skillName\" class=\"form-control\"/>\n                <span class=\"help-block\" *ngIf=\"skill.get('skillName').error?.required && \n                                                skill.get('skillName').touched\">\n                  Skill Name is required\n                </span>\n              </div>\n              <div class=\"col-sm-6\" *ngIf=\"employeeForm.get('skills').length>1\">\n                <button type=\"button\" class=\"btn btn-danger pull-right\"\n                (click)=\"removeSkillButtonClick(i)\">\n                  <span class=\"glyphicon glyphicon-remove\"></span>\n                </button>\n              </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : skill.get('experienceInYears').invalid && \n                                                              skill.get('experienceInYears').touched }\">\n              <label class=\" col-sm-2 control-label\" [attr.for]=\"'experienceInYears'+i\">Years In Experience</label>\n              <div class=\"col-sm-4\">\n                <input [id]=\"'experienceInYears'+i\" type=\"text\" placeholder=\"Years In Experience\"\n                  formControlName=\"experienceInYears\" class=\"form-control\"/>\n                <span class=\"help-block\" *ngIf=\"skill.get('experienceInYears').error?.required && \n                                                skill.get('experienceInYears').touched \">\n                  Years In Experience is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : skill.get('proficiency').invalid && \n                                                              skill.get('proficiency').touched }\">\n              <label class=\"col-sm-2 control-label\">Proficiency</label>\n              <div class=\"col-sm-8\">\n                <label class=\"radio-inline\">\n                  <input [id]=\"'proficiency'+i\" type=\"radio\" formControlName=\"proficiency\" value=\"beginer\"/>\n                  Beginer</label>\n                <label class=\"radio-inline\">\n                  <input [id]=\"'proficiency'+i\" type=\"radio\" formControlName=\"proficiency\" value=\"intermediate\"/>\n                  Intermediate</label>\n                <label class=\"radio-inline\">\n                  <input [id]=\"'proficiency'+i\" type=\"radio\" formControlName=\"proficiency\" value=\"advanced\"/>\n                  Advanced</label>\n                <span class=\"help-block\" *ngIf=\"skill.get('proficiency').error?.required && \n                                                skill.get('proficiency').touched\">\n                  Proficiency is required\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <div class=\"btn btn-toolbar\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"employeeForm.invalid\">Submit</button>\n        <button type=\"button\" (click)=\"onLoadDataClick()\" class=\"btn btn-primary\">Load Data</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/employee/create-employee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee/create-employee.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_custom_validatros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/custom.validatros */ "./src/app/shared/custom.validatros.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(fb, route, employeeService, router) {
        this.fb = fb;
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.validationMessages = {
            'fullName': {
                'required': 'Full Name is required',
                'minlength': 'Full Name must be greater than 2 charecters and less than 10 charecters',
                'maxlength': 'Full Name must be greater than 2 charecters and less than 10 charecters'
            },
            'email': {
                'required': 'email is required',
                'emailDomain': 'Email should be dell.com'
            },
            'confirmEmail': {
                'required': 'Confirm Email is required'
            },
            'emailGroup': {
                'emailMisMatch': 'Email and Confirm Email do not match'
            },
            'phone': {
                'required': 'phone is required'
            },
        };
        this.formErrors = {};
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeForm = this.fb.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            contactPreference: ['email'],
            emailGroup: this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_custom_validatros__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].emailDomain('dell.com')]],
                confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }, { validator: matchEmail }),
            phone: [''],
            //to create a nested formgroup values
            skills: this.fb.array([
                this.addSkillFormGroup()
            ])
        });
        this.employeeForm.get('contactPreference').valueChanges.subscribe(function (data) {
            _this.onContactPreferenceChange(data);
        });
        this.employeeForm.valueChanges.subscribe(function (data) {
            return _this.logValidationerrors(_this.employeeForm);
        });
        this.route.paramMap.subscribe(function (param) {
            var empId = +param.get('id');
            if (empId) {
                _this.pageTitle = "Edit Employee";
                _this.getEmployee(empId);
            }
            else {
                _this.pageTitle = "Create Employee";
                _this.employee = {
                    id: null,
                    fullName: '',
                    contactPreference: '',
                    email: '',
                    phone: null,
                    skills: []
                };
            }
        });
    };
    CreateEmployeeComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.employeeService.getEmployee(id).subscribe(function (employee) {
            _this.editEmployee(employee);
            _this.employee = employee;
        }, function (err) { return console.log(err); });
    };
    CreateEmployeeComponent.prototype.editEmployee = function (employee) {
        this.employeeForm.patchValue({
            fullName: employee.fullName,
            phone: employee.phone,
            emailGroup: {
                email: employee.email,
                confirmEmail: employee.email
            }
        });
        this.employeeForm.setControl('skills', this.setExistingSkills(employee.skills));
    };
    CreateEmployeeComponent.prototype.setExistingSkills = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        skillSets.forEach(function (s) {
            formArray.push(_this.fb.group({
                skillName: s.skillName,
                experienceInYears: s.experienceInYears,
                proficiency: s.proficiency
            }));
        });
        return formArray;
    };
    CreateEmployeeComponent.prototype.onContactPreferenceChange = function (selectvalue) {
        var phoneControl = this.employeeForm.get('phone');
        if (selectvalue === 'phone') {
            phoneControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    CreateEmployeeComponent.prototype.logValidationerrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.employeeForm; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this.formErrors[key] = "";
            if (abstractControl && !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
                var messages = _this.validationMessages[key];
                for (var errorKey in abstractControl.errors) {
                    if (errorKey) {
                        _this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.logValidationerrors(abstractControl);
            }
            // if (abstractControl instanceof FormArray) {
            //   for(const control of abstractControl.controls){
            //     if(control instanceof FormGroup){
            //       this.logValidationerrors(control);
            //     }
            //   }
            // }
        });
    };
    CreateEmployeeComponent.prototype.onLoadDataClick = function () {
        // this.logValidationerrors(this.employeeForm);
        // console.log(this.formErrors);
    };
    CreateEmployeeComponent.prototype.addSkillButtonClick = function () {
        this.employeeForm.get('skills').push(this.addSkillFormGroup());
    };
    CreateEmployeeComponent.prototype.removeSkillButtonClick = function (skillIndex) {
        var skillsFormArray = this.employeeForm.get('skills');
        skillsFormArray.removeAt(skillIndex);
        skillsFormArray.markAsDirty();
        skillsFormArray.markAsTouched();
    };
    CreateEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.mapFormValuesEmployeeModel();
        if (this.employee.id) {
            this.employeeService.updateEmployee(this.employee).subscribe(function () { return _this.router.navigate(['list']); }, function (err) { return console.log(err); });
        }
        else {
            this.employeeService.addEmployee(this.employee).subscribe(function () { return _this.router.navigate(['list']); }, function (err) { return console.log(err); });
        }
    };
    CreateEmployeeComponent.prototype.mapFormValuesEmployeeModel = function () {
        this.employee.fullName = this.employeeForm.value.fullName;
        this.employee.phone = this.employeeForm.value.phone;
        this.employee.email = this.employeeForm.value.emailGroup.email;
        this.employee.contactPreference = this.employeeForm.value.contactPreference;
        this.employee.skills = this.employeeForm.value.skills;
    };
    CreateEmployeeComponent.prototype.addSkillFormGroup = function () {
        return this.fb.group({
            skillName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            experienceInYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            proficiency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CreateEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-employee',
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/employee/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/employee/create-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());

function matchEmail(group) {
    var emailControl = group.get('email');
    var confirmEmailControl = group.get('confirmEmail');
    if (emailControl.value === confirmEmailControl.value
        || (confirmEmailControl.pristine && confirmEmailControl.value === '')) {
        return null;
    }
    else {
        return { 'emailMisMatch': true };
    }
}


/***/ }),

/***/ "./src/app/employee/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/employee/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:3000/employees';
    }
    //baseUrl = 'http://localhost:52035/api/employees';
    EmployeeService.prototype.getEmployees = function () {
        return this.httpClient.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlError));
    };
    EmployeeService.prototype.handlError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side error: ', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('There is problm with the service. We are notified & working on it. Please try again later.');
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.httpClient.get(this.baseUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlError));
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        // if (employee.id === null) {
        return this.httpClient.post(this.baseUrl, employee, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlError));
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.httpClient.put(this.baseUrl + "/" + employee.id, employee, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlError));
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.httpClient.delete(this.baseUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlError));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employee/list-employee.component.css":
/*!******************************************************!*\
  !*** ./src/app/employee/list-employee.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/list-employee.component.html":
/*!*******************************************************!*\
  !*** ./src/app/employee/list-employee.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered\" *ngIf=\"empolyees && empolyees.length\">\n    <thead>\n      <tr class=\"bg-primary\">\n        <th>Full Name</th>\n        <th>Email</th>\n        <th>Phone Number</th>\n        <th>Contact Preference</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let employee of empolyees\">\n      <td>{{employee.fullName}}</td>\n      <td>{{employee.email}}</td>\n      <td>{{employee.phone}}</td>\n      <td>{{employee.contactPreference}}</td>\n      <td>\n        <div class=\"btn btn-toolbar\">\n        <button class=\"btn btn-primary\" (click)=\"onButtonEditClick(employee.id)\">Edit</button>\n          <button disabled class=\"btn btn-primary\" (click)=\"onButtonDeleteClick(employee.id)\">Delete</button>\n        </div></td>\n      \n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/employee/list-employee.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/list-employee.component.ts ***!
  \*****************************************************/
/*! exports provided: ListEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeeComponent", function() { return ListEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListEmployeeComponent = /** @class */ (function () {
    function ListEmployeeComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
    }
    ListEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (listEmployees) { return _this.empolyees = listEmployees; }, function (err) { return console.log(err); });
    };
    ListEmployeeComponent.prototype.onButtonEditClick = function (employeeId) {
        this._router.navigate(['/edit', employeeId]);
    };
    ListEmployeeComponent.prototype.onButtonDeleteClick = function (empID) {
        this._employeeService.deleteEmployee(empID).subscribe();
    };
    ListEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-employee',
            template: __webpack_require__(/*! ./list-employee.component.html */ "./src/app/employee/list-employee.component.html"),
            styles: [__webpack_require__(/*! ./list-employee.component.css */ "./src/app/employee/list-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListEmployeeComponent);
    return ListEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom.validatros.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/custom.validatros.ts ***!
  \*********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.emailDomain = function (domainName) {
        return function (control) {
            var email = control.value;
            var domain = email.substring(email.lastIndexOf('@') + 1);
            if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
                return null;
            }
            else {
                return { 'emailDomain': true };
            }
        };
    };
    return CustomValidators;
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

module.exports = __webpack_require__(/*! C:\democrud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map