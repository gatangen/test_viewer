(self.webpackChunk=self.webpackChunk||[]).push([[221,579],{9943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});const a=JSON.parse('{"u2":"@ohif/extension-cornerstone-dicom-seg"}').u2,o=`${a}.sopClassHandlerModule.dicom-seg`;var r=n(43001),i=n(71771),s=n(62231),l=n(91202),c=n(67540);const d=["1.2.840.10008.5.1.4.1.1.66.4"];let g={};function m(e,t,n){const a=e[0],{StudyInstanceUID:r,SeriesInstanceUID:m,SOPInstanceUID:S,SeriesDescription:u,SeriesNumber:p,SeriesDate:v,SOPClassUID:E,wadoRoot:h,wadoUri:I,wadoUriRoot:R}=a,y={Modality:"SEG",loading:!1,isReconstructable:!0,displaySetInstanceUID:i.utils.guid(),SeriesDescription:u,SeriesNumber:p,SeriesDate:v,SOPInstanceUID:S,SeriesInstanceUID:m,StudyInstanceUID:r,SOPClassHandlerId:o,SOPClassUID:E,referencedImages:null,referencedSeriesInstanceUID:null,referencedDisplaySetInstanceUID:null,isDerivedDisplaySet:!0,isLoaded:!1,isHydrated:!1,segments:{},sopClassUids:d,instance:a,instances:[a],wadoRoot:h,wadoUriRoot:R,wadoUri:I,isOverlayDisplaySet:!0},C=a.ReferencedSeriesSequence;if(!C)return void console.error("ReferencedSeriesSequence is missing for the SEG");const T=C[0]||C;return y.referencedImages=a.ReferencedSeriesSequence.ReferencedInstanceSequence,y.referencedSeriesInstanceUID=T.SeriesInstanceUID,y.getReferenceDisplaySet=()=>{const{displaySetService:e}=t.services,n=e.getDisplaySetsForSeries(y.referencedSeriesInstanceUID);if(!n||0===n.length)throw new Error("Referenced DisplaySet is missing for the SEG");const a=n[0];y.referencedDisplaySetInstanceUID=a.displaySetInstanceUID,y.referencedVolumeURI=a.displaySetInstanceUID;const o=`cornerstoneStreamingImageVolume:${y.referencedVolumeURI}`;return y.referencedVolumeId=o,a},y.load=async e=>{let{headers:a}=e;return await function(e,t,n,a){const{SOPInstanceUID:o}=e,{segmentationService:r}=t.services;if((e.loading||e.isLoaded)&&g[o]&&function(e,t){return t.getSegmentation(e.displaySetInstanceUID)}(e,r))return g[o];return e.loading=!0,g[o]=new Promise((async(o,i)=>{e.segments&&0!==Object.keys(e.segments).length||await async function(e){let{extensionManager:t,servicesManager:n,segDisplaySet:a,headers:o}=e;const r=t.getModuleEntry("@ohif/extension-cornerstone.utilityModule.common"),{segmentationService:i}=n.services,{dicomLoaderService:d}=r.exports,g=await d.findDicomDataPromise(a,null,o),m=s.cache.getVolume(a.referencedVolumeId);if(!m)throw new Error("Referenced Volume is missing for the SEG, and stack viewport SEG is not supported yet");const{imageIds:S}=m,u=.001,p=!0;s.eventTarget.addEventListener(l.Y.Events.SEGMENTATION_LOAD_PROGRESS,(e=>{const{percentComplete:t}=e.detail;i._broadcastEvent(i.EVENTS.SEGMENT_LOADING_COMPLETE,{percentComplete:t})}));const v=await l.adaptersSEG.Cornerstone3D.Segmentation.generateToolState(S,g,s.metaData,{skipOverlapping:p,tolerance:u,eventTarget:s.eventTarget,triggerEvent:s.triggerEvent});v.segMetadata.data.forEach(((e,t)=>{var n;t>0&&(e.rgba=(n=e.RecommendedDisplayCIELabValue,c.default.data.Colors.dicomlab2RGB(n).map((e=>Math.round(255*e)))))})),Object.assign(a,v)}({extensionManager:n,servicesManager:t,segDisplaySet:e,headers:a});const d=!0;r.createSegmentationForSEGDisplaySet(e,null,d).then((()=>{e.loading=!1,o()})).catch((t=>{e.loading=!1,i(t)}))})),g[o]}(y,t,n,a)},[y]}const S=function(e){let{servicesManager:t,extensionManager:n}=e;return[{name:"dicom-seg",sopClassUids:d,getDisplaySetsFromSeries:e=>m(e,t,n)}]},u={id:"@ohif/seg",name:"Segmentations",protocolMatchingRules:[],toolGroupIds:["default"],numberOfPriorsReferenced:0,defaultViewport:{viewportOptions:{viewportType:"stack",toolGroupId:"default",allowUnmatchedView:!0},displaySets:[{id:"segDisplaySetId",matchedDisplaySetsIndex:-1}]},displaySetSelectors:{segDisplaySetId:{seriesMatchingRules:[{attribute:"Modality",constraint:{equals:"SEG"}}]}},stages:[{name:"Segmentations",viewportStructure:{layoutType:"grid",properties:{rows:1,columns:1}},viewports:[{viewportOptions:{allowUnmatchedView:!0},displaySets:[{id:"segDisplaySetId"}]}]}]};const p=function(){return[{name:u.id,protocol:u}]};var v=n(62657),E=n(4043),h=n(3827),I=n.n(h),R=n(22582);const y=function(e,t,n){const a="enter-segment-label",o=t=>{let{action:o,value:r}=t;switch(o.id){case"save":n(r.label,o.id);break;case"cancel":n("",o.id)}e.dismiss({id:a})};e&&e.create({id:a,centralize:!0,isDraggable:!1,showOverlay:!0,content:R.Vq,contentProps:{title:"Segment",value:{label:t},noCloseButton:!0,onClose:()=>e.dismiss({id:a}),actions:[{id:"cancel",text:"Cancel",type:R.LZ.dt.secondary},{id:"save",text:"Confirm",type:R.LZ.dt.primary}],onSubmit:o,body:e=>{let{value:t,setValue:n}=e;return r.createElement(R.II,{label:"Enter the segment label",labelClassName:"text-white text-[14px] leading-[1.2]",autoFocus:!0,className:"border-primary-main bg-black",type:"text",value:t.label,onChange:e=>{e.persist(),n((t=>({...t,label:e.target.value})))},onKeyPress:e=>{"Enter"===e.key&&o({value:t,action:{id:"save"}})}})}}})};var C=n(22831);const T=function(e,t,n){const a="pick-color",o=t=>{let{action:o,value:r}=t;switch(o.id){case"save":n(r.rgbaColor,o.id);break;case"cancel":n("",o.id)}e.dismiss({id:a})};e&&e.create({id:a,centralize:!0,isDraggable:!1,showOverlay:!0,content:R.Vq,contentProps:{title:"Segment Color",value:{rgbaColor:t},noCloseButton:!0,onClose:()=>e.dismiss({id:a}),actions:[{id:"cancel",text:"Cancel",type:"primary"},{id:"save",text:"Save",type:"secondary"}],onSubmit:o,body:e=>{let{value:t,setValue:n}=e;return r.createElement(C.AI,{color:t.rgbaColor,onChange:e=>{n({rgbaColor:e.rgb})},presetColors:[],width:300})}}})};var b=n(69190);function w(e){let{servicesManager:t,commandsManager:n,extensionManager:a,configuration:o}=e;const{segmentationService:i,viewportGridService:s,uiDialogService:l}=t.services,{t:c}=(0,b.$G)("PanelSegmentation"),[d,g]=(0,r.useState)(null),[m,S]=(0,r.useState)(i.getConfiguration()),[u,p]=(0,r.useState)((()=>i.getSegmentations()));(0,r.useEffect)((()=>{const e=i.EVENTS.SEGMENTATION_ADDED,t=i.EVENTS.SEGMENTATION_UPDATED,n=i.EVENTS.SEGMENTATION_REMOVED,a=[];return[e,t,n].forEach((e=>{const{unsubscribe:t}=i.subscribe(e,(()=>{const e=i.getSegmentations();p(e),S(i.getConfiguration())}));a.push(t)})),()=>{a.forEach((e=>{e()}))}}),[]);const v=e=>i.getToolGroupIdsWithSegmentation(e),h=(0,r.useCallback)(((e,t,n)=>{i.setConfiguration({segmentationId:e,[t]:n})}),[i]);return r.createElement(r.Fragment,null,r.createElement("div",{className:"ohif-scrollbar flex min-h-0 flex-auto select-none flex-col justify-between overflow-auto"},r.createElement(R.cX,{title:c("Segmentations"),segmentations:u,disableEditing:o.disableEditing,activeSegmentationId:d||"",onSegmentationAdd:async()=>{n.runCommand("createEmptySegmentationForViewport")},onSegmentationClick:e=>{i.setActiveSegmentationForToolGroup(e)},onSegmentationDelete:e=>{i.remove(e)},onSegmentationDownload:e=>{n.runCommand("downloadSegmentation",{segmentationId:e})},onSegmentationDownloadRTSS:e=>{n.runCommand("downloadRTSS",{segmentationId:e})},storeSegmentation:async e=>{const o=a.getActiveDataSource(),r=await(0,E.createReportAsync)({servicesManager:t,getReport:()=>n.runCommand("storeSegmentation",{segmentationId:e,dataSource:o[0]}),reportType:"Segmentation"});r&&(i.remove(e),s.setDisplaySetsForViewport({viewportId:s.getActiveViewportId(),displaySetInstanceUIDs:r}))},onSegmentationEdit:e=>{const t=i.getSegmentation(e),{label:n}=t;y(l,n,((t,n)=>{""!==t&&i.addOrUpdateSegmentation({id:e,label:t},!1,!0)}))},onSegmentClick:(e,t)=>{i.setActiveSegment(e,t);v(e).forEach((n=>{i.setActiveSegmentationForToolGroup(e,n),i.jumpToSegmentCenter(e,t,n)}))},onSegmentEdit:(e,t)=>{const n=i.getSegmentation(e).segments[t],{label:a}=n;y(l,a,((n,a)=>{""!==n&&i.setSegmentLabel(e,t,n)}))},onSegmentAdd:e=>{i.addSegment(e)},onSegmentColorClick:(e,t)=>{const n=i.getSegmentation(e).segments[t],{color:a,opacity:o}=n,r={r:a[0],g:a[1],b:a[2],a:o/255};T(l,r,((n,a)=>{"cancel"!==a&&i.setSegmentRGBAColor(e,t,[n.r,n.g,n.b,255*n.a])}))},onSegmentDelete:(e,t)=>{i.removeSegment(e,t)},onToggleSegmentVisibility:(e,t)=>{const n=!i.getSegmentation(e).segments[t].isVisible;v(e).forEach((a=>{i.setSegmentVisibility(e,t,n,a)}))},onToggleSegmentLock:(e,t)=>{i.toggleSegmentLocked(e,t)},onToggleSegmentationVisibility:e=>{i.toggleSegmentationVisibility(e)},showDeleteSegment:!0,segmentationConfig:{initialConfig:m},setRenderOutline:e=>h(d,"renderOutline",e),setOutlineOpacityActive:e=>h(d,"outlineOpacity",e),setRenderFill:e=>h(d,"renderFill",e),setRenderInactiveSegmentations:e=>h(d,"renderInactiveSegmentations",e),setOutlineWidthActive:e=>h(d,"outlineWidthActive",e),setFillAlpha:e=>h(d,"fillAlpha",e),setFillAlphaInactive:e=>h(d,"fillAlphaInactive",e)})))}w.propTypes={commandsManager:I().shape({runCommand:I().func.isRequired}),servicesManager:I().shape({services:I().shape({segmentationService:I().shape({getSegmentation:I().func.isRequired,getSegmentations:I().func.isRequired,toggleSegmentationVisibility:I().func.isRequired,subscribe:I().func.isRequired,EVENTS:I().object.isRequired}).isRequired}).isRequired}).isRequired};var f=n(28082);const{segmentation:D}=f.utilities,O={CIRCULAR_BRUSH:"CircularBrush",SPHERE_BRUSH:"SphereBrush",CIRCULAR_ERASER:"CircularEraser",SPHERE_ERASER:"SphereEraser",CIRCLE_SHAPE:"CircleScissor",RECTANGLE_SHAPE:"RectangleScissor",SPHERE_SHAPE:"SphereScissor",THRESHOLD_CIRCULAR_BRUSH:"ThresholdCircularBrush",THRESHOLD_SPHERE_BRUSH:"ThresholdSphereBrush"},M={SET_TOOL_CONFIG:"SET_TOOL_CONFIG",SET_ACTIVE_TOOL:"SET_ACTIVE_TOOL"},U={Brush:{brushSize:15,mode:"CircularBrush"},Eraser:{brushSize:15,mode:"CircularEraser"},Shapes:{brushSize:15,mode:"CircleScissor"},ThresholdBrush:{brushSize:15,thresholdRange:[-500,500]},activeTool:null};function A(e,t){switch(t.type){case M.SET_TOOL_CONFIG:const{tool:n,config:a}=t.payload;return{...e,[n]:{...e[n],...a}};case M.SET_ACTIVE_TOOL:return{...e,activeTool:t.payload};default:return e}}function _(e){let t=[];switch(e){case"Brush":t=["CircularBrush","SphereBrush"];break;case"Eraser":t=["CircularEraser","SphereEraser"];break;case"ThresholdBrush":t=["ThresholdCircularBrush","ThresholdSphereBrush"]}return t}const V=function(e){let{servicesManager:t,extensionManager:n}=e;const{toolbarService:a,segmentationService:o,toolGroupService:i}=t.services,[s]=(0,R.O_)(),{viewports:l,activeViewportId:c}=s,[d,g]=(0,r.useState)(!1),[m,S]=(0,r.useReducer)(A,U),u=(0,r.useCallback)((()=>{if(!l?.size||void 0===c)return;const e=l.get(c);e&&S({type:M.SET_ACTIVE_TOOL,payload:i.getActiveToolForViewport(e.viewportId)})}),[c,l,i,S]),p=(0,r.useCallback)((e=>{a.recordInteraction({interactionType:"tool",commands:[{commandName:"setToolActive",commandOptions:{toolName:e}}]}),S({type:M.SET_ACTIVE_TOOL,payload:e})}),[a,S]);(0,r.useEffect)((()=>{const e=[o.EVENTS.SEGMENTATION_ADDED,o.EVENTS.SEGMENTATION_UPDATED,o.EVENTS.SEGMENTATION_REMOVED],t=[];return e.forEach((e=>{const{unsubscribe:n}=o.subscribe(e,(()=>{const e=o.getSegmentations(),t=e?.find((e=>e.isActive));g(t?.segmentCount>0)}));t.push(n)})),u(),()=>{t.forEach((e=>e()))}}),[c,l,o,u]),(0,r.useEffect)((()=>{const{unsubscribe:e}=a.subscribe(a.EVENTS.TOOL_BAR_STATE_MODIFIED,(()=>{u()}));return()=>{e()}}),[a,u]),(0,r.useEffect)((()=>{Object.values(O).includes(m.activeTool)&&(d||p("WindowLevel"))}),[d,m.activeTool,p]);const v=(0,r.useCallback)(((e,t)=>{i.getToolGroupIds()?.forEach((n=>{D.setBrushSizeForToolGroup(n,t,e)}))}),[i]),E=(0,r.useCallback)(((e,t)=>{const n=Number(e);_(t).forEach((e=>{v(e,n)})),S({type:M.SET_TOOL_CONFIG,payload:{tool:t,config:{brushSize:n}}})}),[i,S]),h=(0,r.useCallback)((e=>{if(e[0]===m.ThresholdBrush.thresholdRange[0]&&e[1]===m.ThresholdBrush.thresholdRange[1])return;_("ThresholdBrush").forEach((t=>{i.getToolGroupIds()?.forEach((n=>{i.getToolGroup(n).setToolConfiguration(t,{strategySpecificConfiguration:{THRESHOLD_INSIDE_CIRCLE:{threshold:e}}})}))})),S({type:M.SET_TOOL_CONFIG,payload:{tool:"ThresholdBrush",config:{thresholdRange:e}}})}),[i,S,m.ThresholdBrush.thresholdRange]);return r.createElement(R.bY,{title:"Segmentation Tools",items:[{name:"Brush",icon:"icon-tool-brush",disabled:!d,active:m.activeTool===O.CIRCULAR_BRUSH||m.activeTool===O.SPHERE_BRUSH,onClick:()=>p(O.CIRCULAR_BRUSH),options:[{name:"Radius (mm)",id:"brush-radius",type:"range",min:.5,max:99.5,value:m.Brush.brushSize,step:.5,onChange:e=>E(e,"Brush")},{name:"Mode",type:"radio",id:"brush-mode",value:m.Brush.mode,values:[{value:O.CIRCULAR_BRUSH,label:"Circle"},{value:O.SPHERE_BRUSH,label:"Sphere"}],onChange:e=>p(e)}]},{name:"Eraser",icon:"icon-tool-eraser",disabled:!d,active:m.activeTool===O.CIRCULAR_ERASER||m.activeTool===O.SPHERE_ERASER,onClick:()=>p(O.CIRCULAR_ERASER),options:[{name:"Radius (mm)",type:"range",id:"eraser-radius",min:.5,max:99.5,value:m.Eraser.brushSize,step:.5,onChange:e=>E(e,"Eraser")},{name:"Mode",type:"radio",id:"eraser-mode",value:m.Eraser.mode,values:[{value:O.CIRCULAR_ERASER,label:"Circle"},{value:O.SPHERE_ERASER,label:"Sphere"}],onChange:e=>p(e)}]},{name:"Shapes",icon:"icon-tool-shape",disabled:!d,active:m.activeTool===O.CIRCLE_SHAPE||m.activeTool===O.RECTANGLE_SHAPE||m.activeTool===O.SPHERE_SHAPE,onClick:()=>p(O.CIRCLE_SHAPE),options:[{name:"Mode",type:"radio",value:m.Shapes.mode,id:"shape-mode",values:[{value:O.CIRCLE_SHAPE,label:"Circle"},{value:O.RECTANGLE_SHAPE,label:"Rectangle"},{value:O.SPHERE_SHAPE,label:"Sphere"}],onChange:e=>p(e)}]},{name:"Threshold Tool",icon:"icon-tool-threshold",disabled:!d,active:m.activeTool===O.THRESHOLD_CIRCULAR_BRUSH||m.activeTool===O.THRESHOLD_SPHERE_BRUSH,onClick:()=>p(O.THRESHOLD_CIRCULAR_BRUSH),options:[{name:"Radius (mm)",id:"threshold-radius",type:"range",min:.5,max:99.5,value:m.ThresholdBrush.brushSize,step:.5,onChange:e=>E(e,"ThresholdBrush")},{name:"Mode",type:"radio",id:"threshold-mode",value:m.activeTool,values:[{value:O.THRESHOLD_CIRCULAR_BRUSH,label:"Circle"},{value:O.THRESHOLD_SPHERE_BRUSH,label:"Sphere"}],onChange:e=>p(e)},{type:"custom",id:"segmentation-threshold-range",children:()=>r.createElement("div",null,r.createElement("div",{className:"bg-secondary-light h-[1px]"}),r.createElement("div",{className:"mt-1 text-[13px] text-white"},"Threshold"),r.createElement(R.R0,{values:m.ThresholdBrush.thresholdRange,onChange:h,minValue:-1e3,maxValue:1e3,step:1,showLabel:!0,allowNumberEdit:!0,showAdjustmentArrows:!1}))}]}]})},L=e=>{let{commandsManager:t,servicesManager:n,extensionManager:a,configuration:o}=e;const{customizationService:i}=n.services;return[{name:"panelSegmentation",iconName:"tab-segmentation",iconLabel:"Segmentation",label:"Segmentation",component:e=>{const[o]=(0,v.M)(),s=i.get("segmentation.disableEditing");return r.createElement(w,{commandsManager:t,servicesManager:n,extensionManager:a,configuration:{...e,disableEditing:o.disableEditing||s?.value}})}},{name:"panelSegmentationWithTools",iconName:"tab-segmentation",iconLabel:"Segmentation",label:"Segmentation",component:e=>{const[o]=(0,v.M)();return r.createElement(r.Fragment,null,r.createElement(V,{commandsManager:t,servicesManager:n,extensionManager:a,configuration:{...e}}),r.createElement(w,{commandsManager:t,servicesManager:n,extensionManager:a,configuration:{...e}}))}}]};var H=n(96538),G=n(54131),F=n(96372);async function N(e){let{viewportId:t,loadFn:n,servicesManager:a,referencedDisplaySetInstanceUID:o}=e;const{cornerstoneViewportService:r,segmentationService:i,viewportGridService:l}=a.services,c=P({viewportId:t,viewportGridService:l}),d=c.viewportOptions.viewportId;o=o||c?.displaySetInstanceUIDs[0];const g=B({servicesManager:a,viewportId:t,referencedDisplaySetInstanceUID:o}),m=async()=>{const e=await n();i.hydrateSegmentation(e)},S=Array.from(s.cache._volumeCache.keys()).some((e=>e.includes(o)));return g.forEach((async e=>{e.viewportOptions={...e.viewportOptions,viewportType:"volume",needsRerendering:!0};const t=e.viewportId,n=r.getCornerstoneViewport(t),a=n.getCamera();if(S&&t===d)return void await m();const i=async e=>{const n=e.detail.volumeActors?.find((e=>e.uid.includes(o))),l=r.getCornerstoneViewport(t);l.setCamera(a),l.element.removeEventListener(s.Enums.Events.VOLUME_VIEWPORT_NEW_VOLUME,i),n&&t===d&&await m()};n.element.addEventListener(s.Enums.Events.VOLUME_VIEWPORT_NEW_VOLUME,i)})),l.setDisplaySetsForViewports(g),!0}const P=e=>{let{viewportId:t,viewportGridService:n}=e;const{viewports:a,activeViewportId:o}=n.getState(),r=t||o;return a.get(r)};function B(e){let{viewportId:t,servicesManager:n,referencedDisplaySetInstanceUID:a}=e;const{hangingProtocolService:o,displaySetService:r,segmentationService:i,viewportGridService:s}=n.services,{viewports:l}=s.getState(),c=P({viewportId:t,viewportGridService:s}).viewportOptions.viewportId,d=l.get(c).displaySetInstanceUIDs,g=a||d[0],m=r.getDisplaySetByUID(g).instances[0].FrameOfReferenceUID,S=o.getViewportsRequireUpdate(c,g);return l.forEach(((e,t)=>{if(c===t||S.find((e=>e.viewportId===t)))return;i.shouldRenderSegmentation(e.displaySetInstanceUIDs,m)&&S.push({viewportId:t,displaySetInstanceUIDs:e.displaySetInstanceUIDs,viewportOptions:{viewportType:"volume",needsRerendering:!0}})})),S}const{datasetToBlob:x}=c.default.data,{Cornerstone3D:{Segmentation:{generateLabelMaps2DFrom3D:k,generateSegmentation:q}}}=l.adaptersSEG,{Cornerstone3D:{RTSS:{generateRTSSFromSegmentations:z}}}=l.adaptersRT,{downloadDICOMData:j}=l.helpers,W=e=>{let{servicesManager:t,extensionManager:n}=e;const{uiNotificationService:a,segmentationService:o,uiDialogService:r,displaySetService:l,viewportGridService:d}=t.services,g={getUpdatedViewportsForSegmentation:B,createEmptySegmentationForViewport:async e=>{let{viewportId:n}=e;const r=P({viewportId:n,viewportGridService:d}),i=r.displaySetInstanceUIDs[0];l.getDisplaySetByUID(i).isReconstructable?N({viewportId:n,servicesManager:t,loadFn:async()=>{const e=o.getSegmentations(),t=await o.createSegmentationForDisplaySet(i,{label:`Segmentation ${e.length+1}`}),n=r.viewportOptions.toolGroupId;return await o.addSegmentationRepresentationToToolGroup(n,t),o.addSegment(t,{toolGroupId:n,segmentIndex:1,properties:{label:"Segment 1"}}),t}}):a.show({title:"Segmentation",message:"Segmentation is not supported for non-reconstructible displaysets yet",type:"error"})},loadSegmentationsForViewport:async e=>{let{segmentations:n,viewportId:a}=e;N({viewportId:a,servicesManager:t,loadFn:async()=>{const e=P({viewportId:a,viewportGridService:d}),t=e.displaySetInstanceUIDs[0],r=n[0],i=r.id,s=r.label,l=r.segments;if(delete r.segments,await o.createSegmentationForDisplaySet(t,{segmentationId:i,label:s}),r.scalarData){o.getLabelmapVolume(i).scalarData.set(r.scalarData)}o.addOrUpdateSegmentation(r);const c=e.viewportOptions.toolGroupId;return await o.addSegmentationRepresentationToToolGroup(c,i),l.forEach((e=>{null!==e&&o.addSegment(i,{segmentIndex:e.segmentIndex,toolGroupId:c,properties:{color:e.color,label:e.label,opacity:e.opacity,isLocked:e.isLocked,visibility:e.isVisible,active:r.activeSegmentIndex===e.segmentIndex}})})),r.centroidsIJK&&o.setCentroids(r.id,r.centroidsIJK),i}})},loadSegmentationDisplaySetsForViewport:async e=>{let{viewportId:n,displaySets:a}=e;const r=a[0];N({viewportId:n,servicesManager:t,referencedDisplaySetInstanceUID:r.referencedDisplaySetInstanceUID,loadFn:async()=>{const e=r,t="SEG"===e.Modality?"createSegmentationForSEGDisplaySet":"createSegmentationForRTDisplaySet",n=o[t].bind(o);return await n(e,null,!1)}})},generateSegmentation:e=>{let{segmentationId:t,options:n={}}=e;const a=f.segmentation.state.getSegmentation(t),{referencedVolumeId:r}=a.representationData.LABELMAP,i=s.cache.getVolume(t),l=s.cache.getVolume(r).getCornerstoneImages(),d=k(i);d.metadata=[];const g=o.getSegmentation(t);d.segmentsOnLabelmap.forEach((e=>{const t=g?.segments[e],{label:n,color:a}=t,o=c.default.data.Colors.rgb2DICOMLAB(a.slice(0,3).map((e=>e/255))).map((e=>Math.round(e))),r={SegmentNumber:e.toString(),SegmentLabel:n,SegmentAlgorithmType:"MANUAL",SegmentAlgorithmName:"OHIF Brush",RecommendedDisplayCIELabValue:o,SegmentedPropertyCategoryCodeSequence:{CodeValue:"T-D0050",CodingSchemeDesignator:"SRT",CodeMeaning:"Tissue"},SegmentedPropertyTypeCodeSequence:{CodeValue:"T-D0050",CodingSchemeDesignator:"SRT",CodeMeaning:"Tissue"}};d.metadata[e]=r}));return q(l,d,s.metaData,n)},downloadSegmentation:e=>{let{segmentationId:t}=e;const n=o.getSegmentation(t),a=g.generateSegmentation({segmentationId:t});j(a.dataset,`${n.label}`)},storeSegmentation:async e=>{let{segmentationId:t,dataSource:a}=e;const s=await(0,E.createReportDialogPrompt)(r,{extensionManager:n});if(1!==s.action&&s.value)return;const l=o.getSegmentation(t);if(!l)throw new Error("No segmentation found");const{label:c}=l,d=s.value||c||"Research Derived Series",m=g.generateSegmentation({segmentationId:t,options:{SeriesDescription:d}});if(!m||!m.dataset)throw new Error("Error during segmentation generation");const{dataset:S}=m;return await a.store.dicom(S),S.wadoRoot=a.getConfig().wadoRoot,i.DicomMetadataStore.addInstances([S],!0),S},downloadRTSS:e=>{let{segmentationId:t}=e;const n=o.getSegmentation(t),a={vtkImageMarchingSquares:H.ZP,vtkDataArray:G.ZP,vtkImageData:F.ZP},r=z(n,i.classes.MetadataProvider,i.DicomMetadataStore,s.cache,f.Enums,a);try{const e=x(r),t=URL.createObjectURL(e);window.location.assign(t)}catch(e){console.warn(e)}}},m={getUpdatedViewportsForSegmentation:{commandFn:g.getUpdatedViewportsForSegmentation},loadSegmentationDisplaySetsForViewport:{commandFn:g.loadSegmentationDisplaySetsForViewport},loadSegmentationsForViewport:{commandFn:g.loadSegmentationsForViewport},createEmptySegmentationForViewport:{commandFn:g.createEmptySegmentationForViewport},generateSegmentation:{commandFn:g.generateSegmentation},downloadSegmentation:{commandFn:g.downloadSegmentation},storeSegmentation:{commandFn:g.storeSegmentation},downloadRTSS:{commandFn:g.downloadRTSS}};return{actions:g,definitions:m}};function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)}const $=r.lazy((()=>n.e(451).then(n.bind(n,4451)))),J=e=>r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement($,e)),K={id:a,preRegistration:function(e){let{configuration:t={}}=e;(0,f.addTool)(f.BrushTool)},getPanelModule:L,getCommandsModule:W,getViewportModule(e){let{servicesManager:t,extensionManager:n}=e;return[{name:"dicom-seg",component:e=>r.createElement(J,Z({servicesManager:t,extensionManager:n,commandsManager},e))}]},getSopClassHandlerModule:S,getHangingProtocolModule:p}},78753:()=>{}}]);
//# sourceMappingURL=221.bundle.6c3519138282713cdcb4.js.map