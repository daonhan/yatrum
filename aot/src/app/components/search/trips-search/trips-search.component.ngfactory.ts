/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../../src/app/components/search/trips-search/trips-search.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@ngrx/store/src/store';
import * as import9 from '@angular/router/src/router';
import * as import10 from './trips-search.component.scss.shim.ngstyle';
import * as import11 from '@angular/core/src/animation/animation_transition';
import * as import12 from '@angular/core/src/animation/animation_sequence_player';
import * as import13 from '@angular/core/src/animation/animation_styles';
import * as import14 from '@angular/core/src/animation/animation_style_util';
import * as import15 from '@angular/core/src/animation/animation_keyframe';
import * as import16 from '@angular/core/src/animation/animation_player';
import * as import17 from '../../../../../../src/app/shared/search/trips-search-filter/trips-search-filter.component';
import * as import18 from '../../../shared/search/trips-search-filter/trips-search-filter.component.ngfactory';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_TripsSearchComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TripsSearchComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.TripsSearchComponent(p0,p1);
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
var renderType_TripsSearchComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TripsSearchComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TripsSearchComponent>;
  _TripsSearchComponent_0_3:Wrapper_TripsSearchComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TripsSearchComponent_Host0,renderType_TripsSearchComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'tr-trips-search',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TripsSearchComponent0(this.viewUtils,this,0,this._el_0);
    this._TripsSearchComponent_0_3 = new Wrapper_TripsSearchComponent(this.injectorGet(import8.Store,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._TripsSearchComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TripsSearchComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TripsSearchComponent) && (0 === requestNodeIndex))) { return this._TripsSearchComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._TripsSearchComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TripsSearchComponentNgFactory:import7.ComponentFactory<import0.TripsSearchComponent> = new import7.ComponentFactory<import0.TripsSearchComponent>('tr-trips-search',View_TripsSearchComponent_Host0,import0.TripsSearchComponent);
const styles_TripsSearchComponent:any[] = [import10.styles];
var TripsSearchComponent_flyInDown_states:any = {
  'in': {},
  '*': {},
  'void': {}
}
;
function TripsSearchComponent_flyInDown_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'flyInDown'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = TripsSearchComponent_flyInDown_states['*'];
  var startStateStyles:any = TripsSearchComponent_flyInDown_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = TripsSearchComponent_flyInDown_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          'top': '-5%',
          'opacity': '0'
        }

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
  view.animationContext.queueAnimation(element,'flyInDown',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_TripsSearchComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_TripsSearchComponent,{flyInDown: TripsSearchComponent_flyInDown_factory});
export class View_TripsSearchComponent0 extends import1.AppView<import0.TripsSearchComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  compView_14:import1.AppView<import17.TripsSearchFilterComponent>;
  _TripsSearchFilterComponent_14_3:import18.Wrapper_TripsSearchFilterComponent;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TripsSearchComponent0,renderType_TripsSearchComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckOnce);
    this._expr_24 = import19.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','search-box-cover'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','image search-box-cover-div'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'img',new import3.InlineArray4(4,'class','cover-image','src','http://wallpaperlayer.com/img/2015/1/blurred-city-lights-7598-7892-hd-wallpapers.jpg'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','search-box'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','ui grid'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n          ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'div',new import3.InlineArray2(2,'class','column'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'tr-trips-search-filter',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_14 = new import18.View_TripsSearchFilterComponent0(this.viewUtils,this,14,this._el_14);
    this._TripsSearchFilterComponent_14_3 = new import18.Wrapper_TripsSearchFilterComponent();
    this.compView_14.create(this._TripsSearchFilterComponent_14_3.context);
    this._text_15 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._text_16 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_20 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_21 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_14,new import3.InlineArray2(2,'keywordEntered',(null as any)),this.eventHandler(this.handleEvent_14));
    this._TripsSearchFilterComponent_14_3.subscribe(this,this.eventHandler(this.handleEvent_14),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
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
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._text_21
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TripsSearchFilterComponent) && (14 === requestNodeIndex))) { return this._TripsSearchFilterComponent_14_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_24:any = 'in';
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      var animationTransition_flyInDown:any = this.componentType.animations['flyInDown'](this,this._el_6,((this._expr_24 == import19.UNINITIALIZED)? 'void': this._expr_24),((currVal_24 == import19.UNINITIALIZED)? 'void': currVal_24));
      this._expr_24 = currVal_24;
    }
    if (this._TripsSearchFilterComponent_14_3.ngDoCheck(this,this._el_14,throwOnChange)) { this.compView_14.markAsCheckOnce(); }
    this.compView_14.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_14.destroy();
    this._TripsSearchFilterComponent_14_3.ngOnDestroy();
  }
  detachInternal():void {
    var animationTransition_flyInDown:any = this.componentType.animations['flyInDown'](this,this._el_6,this._expr_24,'void');
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'keywordEntered')) {
      const pd_sub_0:any = ((<any>this.context.onSearch($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}