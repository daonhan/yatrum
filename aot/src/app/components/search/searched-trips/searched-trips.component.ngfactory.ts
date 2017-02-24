/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../../src/app/components/search/searched-trips/searched-trips.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@ngrx/store/src/store';
import * as import9 from '../../../../../../src/app/services/trips.service';
import * as import10 from './searched-trips.component.scss.shim.ngstyle';
import * as import11 from '@angular/core/src/animation/animation_transition';
import * as import12 from '@angular/core/src/animation/animation_sequence_player';
import * as import13 from '@angular/core/src/animation/animation_styles';
import * as import14 from '@angular/core/src/animation/animation_style_util';
import * as import15 from '@angular/core/src/animation/animation_keyframe';
import * as import16 from '@angular/core/src/animation/animation_player';
import * as import17 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '../../../../../../src/app/shared/trips/trip-list-item/trip-list-item.component';
import * as import19 from '../../../shared/trips/trip-list-item/trip-list-item.component.ngfactory';
import * as import20 from '@angular/core/src/linker/view_container';
import * as import21 from '@angular/router/src/router';
import * as import22 from '@angular/router/src/router_state';
import * as import23 from '../../../../../../src/app/services/user-auth.service';
import * as import24 from '@angular/router/src/directives/router_link';
import * as import25 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import26 from '@angular/common/src/pipes/async_pipe';
import * as import27 from '@angular/core/src/linker/template_ref';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import29 from '@angular/common/src/directives/ng_for';
import * as import30 from '@angular/core/src/change_detection/change_detection_util';
import * as import31 from '../../../../../../src/app/shared/loader/loader.component';
import * as import32 from '../../../shared/loader/loader.component.ngfactory';
import * as import33 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import34 from '@angular/common/src/directives/ng_if';
export class Wrapper_SearchedTripsComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SearchedTripsComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.SearchedTripsComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SearchedTripsComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SearchedTripsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SearchedTripsComponent>;
  _SearchedTripsComponent_0_3:Wrapper_SearchedTripsComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SearchedTripsComponent_Host0,renderType_SearchedTripsComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'tr-searched-trips',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SearchedTripsComponent0(this.viewUtils,this,0,this._el_0);
    this._SearchedTripsComponent_0_3 = new Wrapper_SearchedTripsComponent(this.injectorGet(import8.Store,this.parentIndex),this.injectorGet(import9.TripsService,this.parentIndex));
    this.compView_0.create(this._SearchedTripsComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SearchedTripsComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SearchedTripsComponent) && (0 === requestNodeIndex))) { return this._SearchedTripsComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._SearchedTripsComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SearchedTripsComponentNgFactory:import7.ComponentFactory<import0.SearchedTripsComponent> = new import7.ComponentFactory<import0.SearchedTripsComponent>('tr-searched-trips',View_SearchedTripsComponent_Host0,import0.SearchedTripsComponent);
const styles_SearchedTripsComponent:any[] = [import10.styles];
var SearchedTripsComponent_fadeIn_states:any = {
  'in': {'opacity': '1'},
  '*': {},
  'void': {}
}
;
function SearchedTripsComponent_fadeIn_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'fadeIn'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = SearchedTripsComponent_fadeIn_states['*'];
  var startStateStyles:any = SearchedTripsComponent_fadeIn_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = SearchedTripsComponent_fadeIn_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'opacity': '0'}
      ]
      )),import14.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),500,0,(null as any),previousPlayers)]);
    totalTime = 500;
  }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import14.renderStyles(element,view.renderer,import14.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import12.AnimationSequencePlayer(previousPlayers).destroy();
  import14.renderStyles(element,view.renderer,import14.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'fadeIn',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
class View_SearchedTripsComponent2 extends import1.AppView<any> {
  _el_0:any;
  _RouterLink_0_3:import17.Wrapper_RouterLink;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import18.TripListItemComponent>;
  _TripListItemComponent_2_3:import19.Wrapper_TripListItemComponent;
  _text_3:any;
  _arr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_SearchedTripsComponent2,renderType_SearchedTripsComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_7 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','column'),(null as any));
    this._RouterLink_0_3 = new import17.Wrapper_RouterLink(this.parentView.parentView.parentView.injectorGet(import21.Router,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import22.ActivatedRoute,this.parentView.parentView.parentIndex));
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'tr-trip-list-item',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import19.View_TripListItemComponent0(this.viewUtils,this,2,this._el_2);
    this._TripListItemComponent_2_3 = new import19.Wrapper_TripListItemComponent(this.parentView.parentView.parentView.injectorGet(import21.Router,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import8.Store,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import23.UserAuthService,this.parentView.parentView.parentIndex));
    this.compView_2.create(this._TripListItemComponent_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TripListItemComponent) && (2 === requestNodeIndex))) { return this._TripListItemComponent_2_3.context; }
    if (((token === import24.RouterLink) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLink_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._arr_7('/trips',this.context.$implicit.id);
    this._RouterLink_0_3.check_routerLink(currVal_0_0_0,throwOnChange,false);
    this._RouterLink_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.context.$implicit;
    this._TripListItemComponent_2_3.check_trip(currVal_2_0_0,throwOnChange,false);
    if (this._TripListItemComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_SearchedTripsComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import20.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import25.Wrapper_NgFor;
  _text_3:any;
  _pipe_async_0:import26.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_SearchedTripsComponent1,renderType_SearchedTripsComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import20.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import27.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import25.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.parentView.injectorGet(import28.IterableDiffers,this.parentView.parentIndex),this.parentView.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._pipe_async_0 = new import26.AsyncPipe(this.parentView.ref);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import29.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import30.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_2_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.parentView.context.trips$));
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._pipe_async_0.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_SearchedTripsComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_SearchedTripsComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_SearchedTripsComponent3,renderType_SearchedTripsComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Sorry, We Couldn\'t find Trips you searched for!!!',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_SearchedTripsComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_SearchedTripsComponent,{fadeIn: SearchedTripsComponent_fadeIn_factory});
export class View_SearchedTripsComponent0 extends import1.AppView<import0.SearchedTripsComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLink_2_3:import17.Wrapper_RouterLink;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  compView_20:import1.AppView<import31.LoaderComponent>;
  _LoaderComponent_20_3:import32.Wrapper_LoaderComponent;
  _text_21:any;
  _anchor_22:any;
  /*private*/ _vc_22:import20.ViewContainer;
  _TemplateRef_22_5:any;
  _NgIf_22_6:import33.Wrapper_NgIf;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _vc_24:import20.ViewContainer;
  _TemplateRef_24_5:any;
  _NgIf_24_6:import33.Wrapper_NgIf;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _arr_37:any;
  /*private*/ _expr_38:any;
  _pipe_async_0:import26.AsyncPipe;
  _pipe_async_1:import26.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SearchedTripsComponent0,renderType_SearchedTripsComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckOnce);
    this._arr_37 = import3.pureProxy3((p0:any,p1:any,p2:any):any[] => {
      return [
        p0,
        p1,
        p2
      ]
      ;
    });
    this._expr_38 = import30.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','create-button'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray4(4,'class','ui primary animated button','tabindex','0'),(null as any));
    this._RouterLink_2_3 = new import17.Wrapper_RouterLink(this.parentView.injectorGet(import21.Router,this.parentIndex),this.parentView.injectorGet(import22.ActivatedRoute,this.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','visible content'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Create Trip',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','hidden content'),(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'i',new import3.InlineArray2(2,'class','plus icon'),(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,parentRenderNode,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','ui centered grid'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n  ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','twelve wide column'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'div',new import3.InlineArray2(2,'class','ui two column grid'),(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'\n      ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_18,'tr-loader',new import3.InlineArray4(4,'message','Loading Trips','noOfParas','2'),(null as any));
    this.compView_20 = new import32.View_LoaderComponent0(this.viewUtils,this,20,this._el_20);
    this._LoaderComponent_20_3 = new import32.Wrapper_LoaderComponent();
    this.compView_20.create(this._LoaderComponent_20_3.context);
    this._text_21 = this.renderer.createText(this._el_18,'\n\n      ',(null as any));
    this._anchor_22 = this.renderer.createTemplateAnchor(this._el_18,(null as any));
    this._vc_22 = new import20.ViewContainer(22,18,this,this._anchor_22);
    this._TemplateRef_22_5 = new import27.TemplateRef_(this,22,this._anchor_22);
    this._NgIf_22_6 = new import33.Wrapper_NgIf(this._vc_22.vcRef,this._TemplateRef_22_5);
    this._text_23 = this.renderer.createText(this._el_18,'\n\n      ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_18,(null as any));
    this._vc_24 = new import20.ViewContainer(24,18,this,this._anchor_24);
    this._TemplateRef_24_5 = new import27.TemplateRef_(this,24,this._anchor_24);
    this._NgIf_24_6 = new import33.Wrapper_NgIf(this._vc_24.vcRef,this._TemplateRef_24_5);
    this._text_25 = this.renderer.createText(this._el_18,'\n\n    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_16,'\n  ',(null as any));
    this._text_27 = this.renderer.createText(this._el_14,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this._pipe_async_0 = new import26.AsyncPipe(this.ref);
    this._pipe_async_1 = new import26.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._anchor_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._text_26,
      this._text_27
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLink_2_3.context; }
    if (((token === import31.LoaderComponent) && (20 === requestNodeIndex))) { return this._LoaderComponent_20_3.context; }
    if (((token === import27.TemplateRef) && (22 === requestNodeIndex))) { return this._TemplateRef_22_5; }
    if (((token === import34.NgIf) && (22 === requestNodeIndex))) { return this._NgIf_22_6.context; }
    if (((token === import27.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import34.NgIf) && (24 === requestNodeIndex))) { return this._NgIf_24_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import30.ValueUnwrapper();
    const currVal_2_0_0:any = this._arr_37('/','trips','new');
    this._RouterLink_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLink_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_20_0_0:any = 'Loading Trips';
    this._LoaderComponent_20_3.check_message(currVal_20_0_0,throwOnChange,false);
    const currVal_20_0_1:any = '2';
    this._LoaderComponent_20_3.check_noOfParas(currVal_20_0_1,throwOnChange,false);
    if (this._LoaderComponent_20_3.ngDoCheck(this,this._el_20,throwOnChange)) { this.compView_20.markAsCheckOnce(); }
    var tmp_22_0_0_0:any = (null as any);
    valUnwrapper.reset();
    const currVal_22_0_0:any = (((tmp_22_0_0_0 = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.trips$))) == null)? (null as any): tmp_22_0_0_0.length);
    this._NgIf_22_6.check_ngIf(currVal_22_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_22_6.ngDoCheck(this,this._anchor_22,throwOnChange);
    var tmp_24_0_0_0:any = (null as any);
    valUnwrapper.reset();
    const currVal_24_0_0:boolean = !(((tmp_24_0_0_0 = valUnwrapper.unwrap(this._pipe_async_1.transform(this.context.trips$))) == null)? (null as any): tmp_24_0_0_0.length);
    this._NgIf_24_6.check_ngIf(currVal_24_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_24_6.ngDoCheck(this,this._anchor_24,throwOnChange);
    this._vc_22.detectChangesInNestedViews(throwOnChange);
    this._vc_24.detectChangesInNestedViews(throwOnChange);
    const currVal_38:any = this.context.hideLoader;
    if (import3.checkBinding(throwOnChange,this._expr_38,currVal_38)) {
      this.renderer.setElementProperty(this._el_20,'hidden',currVal_38);
      this._expr_38 = currVal_38;
    }
    this.compView_20.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_22.destroyNestedViews();
    this._vc_24.destroyNestedViews();
    this.compView_20.destroy();
    this._pipe_async_0.ngOnDestroy();
    this._pipe_async_1.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 22)) { return new View_SearchedTripsComponent1(this.viewUtils,this,22,this._anchor_22,this._vc_22); }
    if ((nodeIndex == 24)) { return new View_SearchedTripsComponent3(this.viewUtils,this,24,this._anchor_24,this._vc_24); }
    return (null as any);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
}