/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../../../src/app/components/user/user-settings/change-password/change-password.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../../../src/app/services/user.service';
import * as import9 from './change-password.component.scss.shim.ngstyle';
import * as import10 from '../../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import11 from '../../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '../../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import14 from '../../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/ng_model';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from '@angular/forms/src/directives/validators';
import * as import23 from '@angular/forms/src/validators';
import * as import24 from '@angular/forms/src/directives/ng_form';
import * as import25 from '@angular/forms/src/directives/control_container';
export var Wrapper_ChangePasswordComponent = (function () {
    function Wrapper_ChangePasswordComponent(p0) {
        this._changed = false;
        this.context = new import0.ChangePasswordComponent(p0);
    }
    Wrapper_ChangePasswordComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ChangePasswordComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ChangePasswordComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ChangePasswordComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ChangePasswordComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ChangePasswordComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ChangePasswordComponent;
}());
var renderType_ChangePasswordComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ChangePasswordComponent_Host0 = (function (_super) {
    __extends(View_ChangePasswordComponent_Host0, _super);
    function View_ChangePasswordComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ChangePasswordComponent_Host0, renderType_ChangePasswordComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ChangePasswordComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tr-change-password', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ChangePasswordComponent0(this.viewUtils, this, 0, this._el_0);
        this._ChangePasswordComponent_0_3 = new Wrapper_ChangePasswordComponent(this.injectorGet(import8.UserService, this.parentIndex));
        this.compView_0.create(this._ChangePasswordComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ChangePasswordComponent_0_3.context);
    };
    View_ChangePasswordComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ChangePasswordComponent) && (0 === requestNodeIndex))) {
            return this._ChangePasswordComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ChangePasswordComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ChangePasswordComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ChangePasswordComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ChangePasswordComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent_Host0;
}(import1.AppView));
export var ChangePasswordComponentNgFactory = new import7.ComponentFactory('tr-change-password', View_ChangePasswordComponent_Host0, import0.ChangePasswordComponent);
var styles_ChangePasswordComponent = [import9.styles];
var renderType_ChangePasswordComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ChangePasswordComponent, {});
export var View_ChangePasswordComponent0 = (function (_super) {
    __extends(View_ChangePasswordComponent0, _super);
    function View_ChangePasswordComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ChangePasswordComponent0, renderType_ChangePasswordComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_84 = import15.UNINITIALIZED;
        this._expr_85 = import15.UNINITIALIZED;
    }
    View_ChangePasswordComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'ui middle aligned center aligned grid'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'sixteen wide column'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'sixteen wide column'), null);
        this._text_5 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'five wide column'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'h2', new import3.InlineArray2(2, 'class', 'ui teal image header'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n      ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'content'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        Change Password\n      ', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_6, '\n      ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_6, 'form', new import3.InlineArray4(4, 'class', 'ui medium form', 'novalidate', ''), null);
        this._NgForm_14_3 = new import10.Wrapper_NgForm(null, null);
        this._ControlContainer_14_4 = this._NgForm_14_3.context;
        this._NgControlStatusGroup_14_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_14_4);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'div', new import3.InlineArray2(2, 'class', 'ui stacked segment'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'form-group field'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'label', new import3.InlineArray2(2, 'for', ''), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Old Password', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_18, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'oldPassword', 'type', 'password'), null);
        this._DefaultValueAccessor_23_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_23));
        this._NG_VALUE_ACCESSOR_23_4 = [this._DefaultValueAccessor_23_3.context];
        this._NgModel_23_5 = new import13.Wrapper_NgModel(this._ControlContainer_14_4, null, null, this._NG_VALUE_ACCESSOR_23_4);
        this._NgControl_23_6 = this._NgModel_23_5.context;
        this._NgControlStatus_23_7 = new import11.Wrapper_NgControlStatus(this._NgControl_23_6);
        this._text_24 = this.renderer.createText(this._el_18, '\n          ', null);
        this._text_25 = this.renderer.createText(this._el_16, '\n\n          ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'form-group field'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'label', new import3.InlineArray2(2, 'for', ''), null);
        this._text_29 = this.renderer.createText(this._el_28, 'New Password', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_26, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'name', 'password', 'required', '', 'reverse', 'true', 'type', 'password', 'validateEqual', 'confirmPassword'), null);
        this._DefaultValueAccessor_31_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_31));
        this._RequiredValidator_31_4 = new import14.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_31_5 = [this._RequiredValidator_31_4.context];
        this._NG_VALUE_ACCESSOR_31_6 = [this._DefaultValueAccessor_31_3.context];
        this._NgModel_31_7 = new import13.Wrapper_NgModel(this._ControlContainer_14_4, this._NG_VALIDATORS_31_5, null, this._NG_VALUE_ACCESSOR_31_6);
        this._NgControl_31_8 = this._NgModel_31_7.context;
        this._NgControlStatus_31_9 = new import11.Wrapper_NgControlStatus(this._NgControl_31_8);
        this._text_32 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_26, 'small', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n              Password is required\n            ', null);
        this._text_35 = this.renderer.createText(this._el_26, '\n            ', null);
        this._text_36 = this.renderer.createText(this._el_26, '\n          ', null);
        this._text_37 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'form-group field'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n            ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'label', new import3.InlineArray2(2, 'for', ''), null);
        this._text_41 = this.renderer.createText(this._el_40, 'Retype password', null);
        this._text_42 = this.renderer.createText(this._el_38, '\n            ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_38, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'name', 'confirmPassword', 'required', '', 'reverse', 'false', 'type', 'password', 'validateEqual', 'password'), null);
        this._DefaultValueAccessor_43_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_43));
        this._RequiredValidator_43_4 = new import14.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_43_5 = [this._RequiredValidator_43_4.context];
        this._NG_VALUE_ACCESSOR_43_6 = [this._DefaultValueAccessor_43_3.context];
        this._NgModel_43_7 = new import13.Wrapper_NgModel(this._ControlContainer_14_4, this._NG_VALIDATORS_43_5, null, this._NG_VALUE_ACCESSOR_43_6);
        this._NgControl_43_8 = this._NgModel_43_7.context;
        this._NgControlStatus_43_9 = new import11.Wrapper_NgControlStatus(this._NgControl_43_8);
        this._text_44 = this.renderer.createText(this._el_38, '\n            ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_38, 'small', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_46 = this.renderer.createText(this._el_45, '\n              Password mismatch\n            ', null);
        this._text_47 = this.renderer.createText(this._el_38, '\n            ', null);
        this._text_48 = this.renderer.createText(this._el_38, '\n          ', null);
        this._text_49 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'field'), null);
        this._text_51 = this.renderer.createText(this._el_50, '\n            ', null);
        this._el_52 = import3.createRenderElement(this.renderer, this._el_50, 'button', new import3.InlineArray4(4, 'class', 'ui fluid large teal submit button', 'type', 'submit'), null);
        this._text_53 = this.renderer.createText(this._el_52, 'Change Password', null);
        this._text_54 = this.renderer.createText(this._el_50, '\n          ', null);
        this._text_55 = this.renderer.createText(this._el_16, '\n        ', null);
        this._text_56 = this.renderer.createText(this._el_14, '\n      ', null);
        this._text_57 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_58 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'ui message'), null);
        this._text_59 = this.renderer.createText(this._el_58, '\n      Have a Nice Day!!! \n    ', null);
        this._text_60 = this.renderer.createText(this._el_6, '\n  ', null);
        this._text_61 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_14));
        this._NgForm_14_3.subscribe(this, this.eventHandler(this.handleEvent_14), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_23, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_23));
        this._NgModel_23_5.subscribe(this, this.eventHandler(this.handleEvent_23), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_31, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_31));
        this._NgModel_31_7.subscribe(this, this.eventHandler(this.handleEvent_31), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_43, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_43));
        this._NgModel_43_7.subscribe(this, this.eventHandler(this.handleEvent_43), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_ChangePasswordComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.DefaultValueAccessor) && (23 === requestNodeIndex))) {
            return this._DefaultValueAccessor_23_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_4;
        }
        if (((token === import19.NgModel) && (23 === requestNodeIndex))) {
            return this._NgModel_23_5.context;
        }
        if (((token === import20.NgControl) && (23 === requestNodeIndex))) {
            return this._NgControl_23_6;
        }
        if (((token === import21.NgControlStatus) && (23 === requestNodeIndex))) {
            return this._NgControlStatus_23_7.context;
        }
        if (((token === import17.DefaultValueAccessor) && (31 === requestNodeIndex))) {
            return this._DefaultValueAccessor_31_3.context;
        }
        if (((token === import22.RequiredValidator) && (31 === requestNodeIndex))) {
            return this._RequiredValidator_31_4.context;
        }
        if (((token === import23.NG_VALIDATORS) && (31 === requestNodeIndex))) {
            return this._NG_VALIDATORS_31_5;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_6;
        }
        if (((token === import19.NgModel) && (31 === requestNodeIndex))) {
            return this._NgModel_31_7.context;
        }
        if (((token === import20.NgControl) && (31 === requestNodeIndex))) {
            return this._NgControl_31_8;
        }
        if (((token === import21.NgControlStatus) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_9.context;
        }
        if (((token === import17.DefaultValueAccessor) && (43 === requestNodeIndex))) {
            return this._DefaultValueAccessor_43_3.context;
        }
        if (((token === import22.RequiredValidator) && (43 === requestNodeIndex))) {
            return this._RequiredValidator_43_4.context;
        }
        if (((token === import23.NG_VALIDATORS) && (43 === requestNodeIndex))) {
            return this._NG_VALIDATORS_43_5;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (43 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_43_6;
        }
        if (((token === import19.NgModel) && (43 === requestNodeIndex))) {
            return this._NgModel_43_7.context;
        }
        if (((token === import20.NgControl) && (43 === requestNodeIndex))) {
            return this._NgControl_43_8;
        }
        if (((token === import21.NgControlStatus) && (43 === requestNodeIndex))) {
            return this._NgControlStatus_43_9.context;
        }
        if (((token === import24.NgForm) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._NgForm_14_3.context;
        }
        if (((token === import25.ControlContainer) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._ControlContainer_14_4;
        }
        if (((token === import21.NgControlStatusGroup) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._NgControlStatusGroup_14_5.context;
        }
        return notFoundResult;
    };
    View_ChangePasswordComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_14_3.ngDoCheck(this, this._el_14, throwOnChange);
        this._NgControlStatusGroup_14_5.ngDoCheck(this, this._el_14, throwOnChange);
        this._DefaultValueAccessor_23_3.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_23_1_0 = 'oldPassword';
        this._NgModel_23_5.check_name(currVal_23_1_0, throwOnChange, false);
        var currVal_23_1_1 = this.context.oldPassword;
        this._NgModel_23_5.check_model(currVal_23_1_1, throwOnChange, false);
        this._NgModel_23_5.ngDoCheck(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_7.ngDoCheck(this, this._el_23, throwOnChange);
        this._DefaultValueAccessor_31_3.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_31_1_0 = '';
        this._RequiredValidator_31_4.check_required(currVal_31_1_0, throwOnChange, false);
        this._RequiredValidator_31_4.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_31_2_0 = 'password';
        this._NgModel_31_7.check_name(currVal_31_2_0, throwOnChange, false);
        var currVal_31_2_1 = this.context.password;
        this._NgModel_31_7.check_model(currVal_31_2_1, throwOnChange, false);
        this._NgModel_31_7.ngDoCheck(this, this._el_31, throwOnChange);
        this._NgControlStatus_31_9.ngDoCheck(this, this._el_31, throwOnChange);
        this._DefaultValueAccessor_43_3.ngDoCheck(this, this._el_43, throwOnChange);
        var currVal_43_1_0 = '';
        this._RequiredValidator_43_4.check_required(currVal_43_1_0, throwOnChange, false);
        this._RequiredValidator_43_4.ngDoCheck(this, this._el_43, throwOnChange);
        var currVal_43_2_0 = 'confirmPassword';
        this._NgModel_43_7.check_name(currVal_43_2_0, throwOnChange, false);
        var currVal_43_2_1 = this.context.confirmPassword;
        this._NgModel_43_7.check_model(currVal_43_2_1, throwOnChange, false);
        this._NgModel_43_7.ngDoCheck(this, this._el_43, throwOnChange);
        this._NgControlStatus_43_9.ngDoCheck(this, this._el_43, throwOnChange);
        this._NgControlStatusGroup_14_5.checkHost(this, this, this._el_14, throwOnChange);
        this._NgControlStatus_23_7.checkHost(this, this, this._el_23, throwOnChange);
        this._RequiredValidator_31_4.checkHost(this, this, this._el_31, throwOnChange);
        this._NgControlStatus_31_9.checkHost(this, this, this._el_31, throwOnChange);
        var currVal_84 = (this._NgModel_31_7.context.valid || (this._NgModel_31_7.context.pristine && !this._NgForm_14_3.context.submitted));
        if (import3.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this.renderer.setElementProperty(this._el_33, 'hidden', currVal_84);
            this._expr_84 = currVal_84;
        }
        this._RequiredValidator_43_4.checkHost(this, this, this._el_43, throwOnChange);
        this._NgControlStatus_43_9.checkHost(this, this, this._el_43, throwOnChange);
        var currVal_85 = (this._NgModel_43_7.context.valid || (this._NgModel_43_7.context.pristine && !this._NgForm_14_3.context.submitted));
        if (import3.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this.renderer.setElementProperty(this._el_45, 'hidden', currVal_85);
            this._expr_85 = currVal_85;
        }
    };
    View_ChangePasswordComponent0.prototype.destroyInternal = function () {
        this._NgModel_23_5.ngOnDestroy();
        this._NgModel_31_7.ngOnDestroy();
        this._NgModel_43_7.ngOnDestroy();
        this._NgForm_14_3.ngOnDestroy();
    };
    View_ChangePasswordComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_14_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.changePassword(this._NgForm_14_3.context.valid) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent0.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_23_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.oldPassword = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent0.prototype.handleEvent_31 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_31_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.password = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent0.prototype.handleEvent_43 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_43_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.confirmPassword = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ChangePasswordComponent0;
}(import1.AppView));
//# sourceMappingURL=change-password.component.ngfactory.js.map