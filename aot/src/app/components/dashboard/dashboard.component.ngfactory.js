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
import * as import0 from '../../../../../src/app/components/dashboard/dashboard.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './dashboard.component.scss.shim.ngstyle';
import * as import9 from '../../../../../src/app/components/dashboard/dashboard-search/dashboard-search.component';
import * as import10 from './dashboard-search/dashboard-search.component.ngfactory';
import * as import11 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '../../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import16 from '@ngrx/store/src/store';
import * as import17 from '@angular/router/src/router';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/router/src/router_outlet_map';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from '@angular/router/src/directives/router_link';
import * as import23 from '@angular/router/src/directives/router_link_active';
import * as import24 from '@angular/router/src/directives/router_outlet';
export var Wrapper_DashboardComponent = (function () {
    function Wrapper_DashboardComponent() {
        this._changed = false;
        this.context = new import0.DashboardComponent();
    }
    Wrapper_DashboardComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DashboardComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DashboardComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_DashboardComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DashboardComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DashboardComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DashboardComponent;
}());
var renderType_DashboardComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DashboardComponent_Host0 = (function (_super) {
    __extends(View_DashboardComponent_Host0, _super);
    function View_DashboardComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DashboardComponent_Host0, renderType_DashboardComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DashboardComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tr-dashboard', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DashboardComponent0(this.viewUtils, this, 0, this._el_0);
        this._DashboardComponent_0_3 = new Wrapper_DashboardComponent();
        this.compView_0.create(this._DashboardComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DashboardComponent_0_3.context);
    };
    View_DashboardComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DashboardComponent) && (0 === requestNodeIndex))) {
            return this._DashboardComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_DashboardComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._DashboardComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DashboardComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DashboardComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DashboardComponent_Host0;
}(import1.AppView));
export var DashboardComponentNgFactory = new import7.ComponentFactory('tr-dashboard', View_DashboardComponent_Host0, import0.DashboardComponent);
var styles_DashboardComponent = [import8.styles];
var renderType_DashboardComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_DashboardComponent, {});
export var View_DashboardComponent0 = (function (_super) {
    __extends(View_DashboardComponent0, _super);
    function View_DashboardComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DashboardComponent0, renderType_DashboardComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckOnce);
        this._arr_56 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_57 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_58 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
    }
    View_DashboardComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'ui centered grid'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'search sixteen wide column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'tr-dashboard-search', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import10.View_DashboardSearchComponent0(this.viewUtils, this, 4, this._el_4);
        this._DashboardSearchComponent_4_3 = new import10.Wrapper_DashboardSearchComponent(this.parentView.injectorGet(import16.Store, this.parentIndex), this.parentView.injectorGet(import17.Router, this.parentIndex));
        this.compView_4.create(this._DashboardSearchComponent_4_3.context);
        this._text_5 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'fourteen wide column'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'ui centered grid button-collection'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'four wide column'), null);
        this._text_12 = this.renderer.createText(this._el_9, '\n\n      ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'trips-type eight wide center aligned column'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'button', new import3.InlineArray4(4, 'class', 'ui left attached big button', 'routerLinkActive', 'active'), null);
        this._RouterLink_15_3 = new import11.Wrapper_RouterLink(this.parentView.injectorGet(import17.Router, this.parentIndex), this.parentView.injectorGet(import18.ActivatedRoute, this.parentIndex));
        this._RouterLinkActive_15_4 = new import12.Wrapper_RouterLinkActive(this.parentView.injectorGet(import17.Router, this.parentIndex), new import19.ElementRef(this._el_15), this.renderer);
        this._query_RouterLink_15_0 = new import13.QueryList();
        this._query_RouterLinkWithHref_15_1 = new import13.QueryList();
        this._text_16 = this.renderer.createText(this._el_15, '\n            Feeds\n        ', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_13, 'button', new import3.InlineArray4(4, 'class', 'right attached ui big button', 'routerLinkActive', 'active'), null);
        this._RouterLink_18_3 = new import11.Wrapper_RouterLink(this.parentView.injectorGet(import17.Router, this.parentIndex), this.parentView.injectorGet(import18.ActivatedRoute, this.parentIndex));
        this._RouterLinkActive_18_4 = new import12.Wrapper_RouterLinkActive(this.parentView.injectorGet(import17.Router, this.parentIndex), new import19.ElementRef(this._el_18), this.renderer);
        this._query_RouterLink_18_0 = new import13.QueryList();
        this._query_RouterLinkWithHref_18_1 = new import13.QueryList();
        this._text_19 = this.renderer.createText(this._el_18, '\n            Trending\n        ', null);
        this._text_20 = this.renderer.createText(this._el_13, '\n      ', null);
        this._text_21 = this.renderer.createText(this._el_9, '\n\n      ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'create-button four wide right aligned column'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'div', new import3.InlineArray4(4, 'class', 'ui animated big button', 'tabindex', '0'), null);
        this._RouterLink_24_3 = new import11.Wrapper_RouterLink(this.parentView.injectorGet(import17.Router, this.parentIndex), this.parentView.injectorGet(import18.ActivatedRoute, this.parentIndex));
        this._text_25 = this.renderer.createText(this._el_24, '\n          ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'visible content'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'i', new import3.InlineArray2(2, 'class', 'file text icon'), null);
        this._text_29 = this.renderer.createText(this._el_26, '\n            Publish Trip\n          ', null);
        this._text_30 = this.renderer.createText(this._el_24, '\n          ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'hidden content'), null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_31, 'i', new import3.InlineArray2(2, 'class', 'plus icon'), null);
        this._text_33 = this.renderer.createText(this._el_24, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_22, '\n      ', null);
        this._text_35 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_36 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_37 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'sixteen wide column'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n    ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_40 = new import14.ViewContainer(40, 38, this, this._el_40);
        this._RouterOutlet_40_5 = new import15.Wrapper_RouterOutlet(this.parentView.injectorGet(import20.RouterOutletMap, this.parentIndex), this._vc_40.vcRef, this.parentView.injectorGet(import21.ComponentFactoryResolver, this.parentIndex), null);
        this._text_41 = this.renderer.createText(this._el_38, '\n  ', null);
        this._text_42 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_15));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_24));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_DashboardComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.DashboardSearchComponent) && (4 === requestNodeIndex))) {
            return this._DashboardSearchComponent_4_3.context;
        }
        if (((token === import22.RouterLink) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLink_15_3.context;
        }
        if (((token === import23.RouterLinkActive) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkActive_15_4.context;
        }
        if (((token === import22.RouterLink) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLink_18_3.context;
        }
        if (((token === import23.RouterLinkActive) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLinkActive_18_4.context;
        }
        if (((token === import22.RouterLink) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._RouterLink_24_3.context;
        }
        if (((token === import24.RouterOutlet) && (40 === requestNodeIndex))) {
            return this._RouterOutlet_40_5.context;
        }
        return notFoundResult;
    };
    View_DashboardComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._DashboardSearchComponent_4_3.ngDoCheck(this, this._el_4, throwOnChange)) {
            this.compView_4.markAsCheckOnce();
        }
        var currVal_15_0_0 = this._arr_56('feeds');
        this._RouterLink_15_3.check_routerLink(currVal_15_0_0, throwOnChange, false);
        this._RouterLink_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_1_0 = 'active';
        this._RouterLinkActive_15_4.check_routerLinkActive(currVal_15_1_0, throwOnChange, false);
        this._RouterLinkActive_15_4.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_18_0_0 = this._arr_57('trending');
        this._RouterLink_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLink_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = 'active';
        this._RouterLinkActive_18_4.check_routerLinkActive(currVal_18_1_0, throwOnChange, false);
        this._RouterLinkActive_18_4.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_24_0_0 = this._arr_58('/trips', 'new');
        this._RouterLink_24_3.check_routerLink(currVal_24_0_0, throwOnChange, false);
        this._RouterLink_24_3.ngDoCheck(this, this._el_24, throwOnChange);
        this._RouterOutlet_40_5.ngDoCheck(this, this._el_40, throwOnChange);
        this._vc_40.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_15_0.dirty) {
                this._query_RouterLink_15_0.reset([this._RouterLink_15_3.context]);
                this._RouterLinkActive_15_4.context.links = this._query_RouterLink_15_0;
                this._query_RouterLink_15_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_15_1.dirty) {
                this._query_RouterLinkWithHref_15_1.reset([]);
                this._RouterLinkActive_15_4.context.linksWithHrefs = this._query_RouterLinkWithHref_15_1;
                this._query_RouterLinkWithHref_15_1.notifyOnChanges();
            }
            if (this._query_RouterLink_18_0.dirty) {
                this._query_RouterLink_18_0.reset([this._RouterLink_18_3.context]);
                this._RouterLinkActive_18_4.context.links = this._query_RouterLink_18_0;
                this._query_RouterLink_18_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_18_1.dirty) {
                this._query_RouterLinkWithHref_18_1.reset([]);
                this._RouterLinkActive_18_4.context.linksWithHrefs = this._query_RouterLinkWithHref_18_1;
                this._query_RouterLinkWithHref_18_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_15_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_18_4.context.ngAfterContentInit();
            }
        }
        this.compView_4.internalDetectChanges(throwOnChange);
    };
    View_DashboardComponent0.prototype.destroyInternal = function () {
        this._vc_40.destroyNestedViews();
        this.compView_4.destroy();
        this._RouterLinkActive_15_4.ngOnDestroy();
        this._RouterLinkActive_18_4.ngOnDestroy();
        this._RouterOutlet_40_5.ngOnDestroy();
    };
    View_DashboardComponent0.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_15_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_DashboardComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_DashboardComponent0.prototype.handleEvent_24 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_24_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_DashboardComponent0;
}(import1.AppView));
//# sourceMappingURL=dashboard.component.ngfactory.js.map