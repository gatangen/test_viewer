(self.webpackChunk=self.webpackChunk||[]).push([[563],{59185:(o,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>_,initToolGroups:()=>d,toolbarButtons:()=>r});var n=t(71771),a=t(22582);const{windowLevelPresets:i}=n.defaults;function l(o,e,t){return{id:o.toString(),title:e,subtitle:t,type:"action",commands:[{commandName:"setWindowLevel",commandOptions:{...i[o]},context:"CORNERSTONE"}]}}const c=["default","mpr","SRToolGroup"];function s(o){return c.map((e=>({commandName:"setToolActive",commandOptions:{toolGroupId:e,toolName:o},context:"CORNERSTONE"})))}const r=[{id:"MeasurementTools",type:"ohif.splitButton",props:{groupId:"MeasurementTools",isRadio:!0,primary:n.Ok._createToolButton("Length","tool-length","Length",[{commandName:"setToolActive",commandOptions:{toolName:"Length"},context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"SRLength",toolGroupId:"SRToolGroup"},context:"CORNERSTONE"}],"Length"),secondary:{icon:"chevron-down",label:"",isActive:!0,tooltip:"More Measure Tools"},items:[n.Ok._createToolButton("Length","tool-length","Length",[{commandName:"setToolActive",commandOptions:{toolName:"Length"},context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"SRLength",toolGroupId:"SRToolGroup"},context:"CORNERSTONE"}],"Length Tool"),n.Ok._createToolButton("Bidirectional","tool-bidirectional","Bidirectional",[{commandName:"setToolActive",commandOptions:{toolName:"Bidirectional"},context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"SRBidirectional",toolGroupId:"SRToolGroup"},context:"CORNERSTONE"}],"Bidirectional Tool"),n.Ok._createToolButton("ArrowAnnotate","tool-annotate","Annotation",[{commandName:"setToolActive",commandOptions:{toolName:"ArrowAnnotate"},context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"SRArrowAnnotate",toolGroupId:"SRToolGroup"},context:"CORNERSTONE"}],"Arrow Annotate"),n.Ok._createToolButton("EllipticalROI","tool-elipse","Ellipse",[{commandName:"setToolActive",commandOptions:{toolName:"EllipticalROI"},context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"SREllipticalROI",toolGroupId:"SRToolGroup"},context:"CORNERSTONE"}],"Ellipse Tool"),n.Ok._createToolButton("CircleROI","tool-circle","Circle",[{commandName:"setToolActive",commandOptions:{toolName:"CircleROI"},context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"SRCircleROI",toolGroupId:"SRToolGroup"},context:"CORNERSTONE"}],"Circle Tool")]}},{id:"Zoom",type:"ohif.radioGroup",props:{type:"tool",icon:"tool-zoom",label:"Zoom",commands:s("Zoom")}},{id:"WindowLevel",type:"ohif.splitButton",props:{groupId:"WindowLevel",primary:n.Ok._createToolButton("WindowLevel","tool-window-level","Window Level",[{commandName:"setToolActive",commandOptions:{toolName:"WindowLevel"},context:"CORNERSTONE"}],"Window Level"),secondary:{icon:"chevron-down",label:"W/L Manual",isActive:!0,tooltip:"W/L Presets"},isAction:!0,renderer:a.eJ,items:[l(1,"Soft tissue","400 / 40"),l(2,"Lung","1500 / -600"),l(3,"Liver","150 / 90"),l(4,"Bone","2500 / 480"),l(5,"Brain","80 / 40")]}},{id:"Pan",type:"ohif.radioGroup",props:{type:"tool",icon:"tool-move",label:"Pan",commands:s("Pan")}},{id:"Capture",type:"ohif.action",props:{icon:"tool-capture",label:"Capture",type:"action",commands:[{commandName:"showDownloadViewportModal",commandOptions:{},context:"CORNERSTONE"}]}},{id:"Layout",type:"ohif.layoutSelector",props:{rows:3,columns:3}},{id:"MPR",type:"ohif.action",props:{type:"toggle",icon:"icon-mpr",label:"MPR",commands:[{commandName:"toggleHangingProtocol",commandOptions:{protocolId:"mpr"},context:"DEFAULT"}]}},{id:"Crosshairs",type:"ohif.radioGroup",props:{type:"tool",icon:"tool-crosshair",label:"Crosshairs",commands:[{commandName:"setToolActive",commandOptions:{toolName:"Crosshairs",toolGroupId:"mpr"},context:"CORNERSTONE"}]}}],m=JSON.parse('{"u2":"@ohif/mode-longitudinal"}').u2;const d=function(o,e,t){!function(o,e,t,n){const a=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:i,Enums:l}=a.exports,c={active:[{toolName:i.WindowLevel,bindings:[{mouseButton:l.MouseBindings.Primary}]},{toolName:i.Pan,bindings:[{mouseButton:l.MouseBindings.Auxiliary}]},{toolName:i.Zoom,bindings:[{mouseButton:l.MouseBindings.Secondary}]},{toolName:i.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:i.Length},{toolName:i.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>t.runCommand("arrowTextCallback",{callback:o,eventDetails:e}),changeTextCallback:(o,e,n)=>t.runCommand("arrowTextCallback",{callback:n,data:o,eventDetails:e})}},{toolName:i.Bidirectional},{toolName:i.DragProbe},{toolName:i.EllipticalROI},{toolName:i.CircleROI},{toolName:i.RectangleROI},{toolName:i.StackScroll},{toolName:i.Angle},{toolName:i.CobbAngle},{toolName:i.PlanarFreehandROI},{toolName:i.Magnify},{toolName:i.SegmentationDisplay},{toolName:i.CalibrationLine}],enabled:[{toolName:i.ImageOverlayViewer}],disabled:[{toolName:i.ReferenceLines}]};e.createToolGroupAndAddTools(n,c)}(o,e,t,"default"),function(o,e,t){const n=o.getModuleEntry("@ohif/extension-cornerstone-dicom-sr.utilityModule.tools");if(!n)return;const a=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:i}=n.exports,{toolNames:l,Enums:c}=a.exports,s={active:[{toolName:l.WindowLevel,bindings:[{mouseButton:c.MouseBindings.Primary}]},{toolName:l.Pan,bindings:[{mouseButton:c.MouseBindings.Auxiliary}]},{toolName:l.Zoom,bindings:[{mouseButton:c.MouseBindings.Secondary}]},{toolName:l.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:i.SRLength},{toolName:i.SRArrowAnnotate},{toolName:i.SRBidirectional},{toolName:i.SREllipticalROI},{toolName:i.SRCircleROI}],enabled:[{toolName:i.DICOMSRDisplay,bindings:[]}]};e.createToolGroupAndAddTools("SRToolGroup",s)}(o,e),function(o,e,t){const n=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:a,Enums:i}=n.exports,l={active:[{toolName:a.WindowLevel,bindings:[{mouseButton:i.MouseBindings.Primary}]},{toolName:a.Pan,bindings:[{mouseButton:i.MouseBindings.Auxiliary}]},{toolName:a.Zoom,bindings:[{mouseButton:i.MouseBindings.Secondary}]},{toolName:a.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:a.Length},{toolName:a.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>t.runCommand("arrowTextCallback",{callback:o,eventDetails:e}),changeTextCallback:(o,e,n)=>t.runCommand("arrowTextCallback",{callback:n,data:o,eventDetails:e})}},{toolName:a.Bidirectional},{toolName:a.DragProbe},{toolName:a.EllipticalROI},{toolName:a.CircleROI},{toolName:a.RectangleROI},{toolName:a.StackScroll},{toolName:a.Angle},{toolName:a.CobbAngle},{toolName:a.PlanarFreehandROI},{toolName:a.SegmentationDisplay}],disabled:[{toolName:a.Crosshairs,configuration:{viewportIndicators:!1,autoPan:{enabled:!1,panSize:10}}},{toolName:a.ReferenceLines}]};e.createToolGroupAndAddTools("mpr",l)}(o,e,t),function(o,e){const t=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:n,Enums:a}=t.exports,i={active:[{toolName:n.TrackballRotateTool,bindings:[{mouseButton:a.MouseBindings.Primary}]},{toolName:n.Zoom,bindings:[{mouseButton:a.MouseBindings.Secondary}]},{toolName:n.Pan,bindings:[{mouseButton:a.MouseBindings.Auxiliary}]}]};e.createToolGroupAndAddTools("volume3d",i)}(o,e)};var p=t(62231);const u=[{commandName:"setSourceViewportForReferenceLinesTool",context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"ReferenceLines"},context:"CORNERSTONE"}],N=[{id:"MoreTools",type:"ohif.splitButton",props:{isRadio:!0,groupId:"MoreTools",primary:n.Ok._createActionButton("Reset","tool-reset","Reset View",[{commandName:"resetViewport",commandOptions:{},context:"CORNERSTONE"}],"Reset"),secondary:{icon:"chevron-down",label:"",isActive:!0,tooltip:"More Tools"},items:[n.Ok._createActionButton("Reset","tool-reset","Reset View",[{commandName:"resetViewport",commandOptions:{},context:"CORNERSTONE"}],"Reset"),n.Ok._createActionButton("rotate-right","tool-rotate-right","Rotate Right",[{commandName:"rotateViewportCW",commandOptions:{},context:"CORNERSTONE"}],"Rotate +90"),n.Ok._createActionButton("flip-horizontal","tool-flip-horizontal","Flip Horizontally",[{commandName:"flipViewportHorizontal",commandOptions:{},context:"CORNERSTONE"}],"Flip Horizontal"),n.Ok._createToggleButton("StackImageSync","link","Stack Image Sync",[{commandName:"toggleStackImageSync"}],"Enable position synchronization on stack viewports",{listeners:{[p.EVENTS.STACK_VIEWPORT_NEW_STACK]:{commandName:"toggleStackImageSync",commandOptions:{toggledState:!0}}}}),n.Ok._createToggleButton("ReferenceLines","tool-referenceLines","Reference Lines",u,"Show Reference Lines",{listeners:{[p.EVENTS.STACK_VIEWPORT_NEW_STACK]:u,[p.EVENTS.ACTIVE_VIEWPORT_ID_CHANGED]:u}}),n.Ok._createToggleButton("ImageOverlayViewer","toggle-dicom-overlay","Image Overlay",[{commandName:"setToolActive",commandOptions:{toolName:"ImageOverlayViewer"},context:"CORNERSTONE"}],"Image Overlay",{isActive:!0}),n.Ok._createToolButton("StackScroll","tool-stack-scroll","Stack Scroll",[{commandName:"setToolActive",commandOptions:{toolName:"StackScroll"},context:"CORNERSTONE"}],"Stack Scroll"),n.Ok._createActionButton("invert","tool-invert","Invert",[{commandName:"invertViewport",commandOptions:{},context:"CORNERSTONE"}],"Invert Colors"),n.Ok._createToolButton("Probe","tool-probe","Probe",[{commandName:"setToolActive",commandOptions:{toolName:"DragProbe"},context:"CORNERSTONE"}],"Probe"),n.Ok._createToggleButton("cine","tool-cine","Cine",[{commandName:"toggleCine",context:"CORNERSTONE"}],"Cine"),n.Ok._createToolButton("Angle","tool-angle","Angle",[{commandName:"setToolActive",commandOptions:{toolName:"Angle"},context:"CORNERSTONE"}],"Angle"),n.Ok._createToolButton("Magnify","tool-magnify","Magnify",[{commandName:"setToolActive",commandOptions:{toolName:"Magnify"},context:"CORNERSTONE"}],"Magnify"),n.Ok._createToolButton("Rectangle","tool-rectangle","Rectangle",[{commandName:"setToolActive",commandOptions:{toolName:"RectangleROI"},context:"CORNERSTONE"}],"Rectangle"),n.Ok._createToolButton("CalibrationLine","tool-calibration","Calibration",[{commandName:"setToolActive",commandOptions:{toolName:"CalibrationLine"},context:"CORNERSTONE"}],"Calibration Line"),n.Ok._createActionButton("TagBrowser","list-bullets","Dicom Tag Browser",[{commandName:"openDICOMTagViewer",commandOptions:{},context:"DEFAULT"}],"Dicom Tag Browser")]}}],O=[{commandName:"setSourceViewportForReferenceLinesTool",context:"CORNERSTONE"},{commandName:"setToolActive",commandOptions:{toolName:"ReferenceLines"},context:"CORNERSTONE"}],g=[{id:"MoreToolsMpr",type:"ohif.splitButton",props:{isRadio:!0,groupId:"MoreTools",primary:n.Ok._createActionButton("Reset","tool-reset","Reset View",[{commandName:"resetViewport",commandOptions:{},context:"CORNERSTONE"}],"Reset"),secondary:{icon:"chevron-down",label:"",isActive:!0,tooltip:"More Tools"},items:[n.Ok._createActionButton("Reset","tool-reset","Reset View",[{commandName:"resetViewport",commandOptions:{},context:"CORNERSTONE"}],"Reset"),n.Ok._createToggleButton("StackImageSync","link","Stack Image Sync",[{commandName:"toggleStackImageSync"}],"Enable position synchronization on stack viewports",{listeners:{[p.EVENTS.STACK_VIEWPORT_NEW_STACK]:{commandName:"toggleStackImageSync",commandOptions:{toggledState:!0}}}}),n.Ok._createToggleButton("ReferenceLines","tool-referenceLines","Reference Lines",O,"Show Reference Lines",{listeners:{[p.EVENTS.STACK_VIEWPORT_NEW_STACK]:O,[p.EVENTS.ACTIVE_VIEWPORT_ID_CHANGED]:O}}),n.Ok._createToggleButton("ImageOverlayViewer","toggle-dicom-overlay","Image Overlay",[{commandName:"setToolActive",commandOptions:{toolName:"ImageOverlayViewer"},context:"CORNERSTONE"}],"Image Overlay",{isActive:!0}),n.Ok._createToolButton("StackScroll","tool-stack-scroll","Stack Scroll",[{commandName:"setToolActive",commandOptions:{toolName:"StackScroll"},context:"CORNERSTONE"}],"Stack Scroll"),n.Ok._createActionButton("invert","tool-invert","Invert",[{commandName:"invertViewport",commandOptions:{},context:"CORNERSTONE"}],"Invert Colors"),n.Ok._createToolButton("Probe","tool-probe","Probe",[{commandName:"setToolActive",commandOptions:{toolName:"DragProbe"},context:"CORNERSTONE"}],"Probe"),n.Ok._createToggleButton("cine","tool-cine","Cine",[{commandName:"toggleCine",context:"CORNERSTONE"}],"Cine"),n.Ok._createToolButton("Angle","tool-angle","Angle",[{commandName:"setToolActive",commandOptions:{toolName:"Angle"},context:"CORNERSTONE"}],"Angle"),n.Ok._createToolButton("Rectangle","tool-rectangle","Rectangle",[{commandName:"setToolActive",commandOptions:{toolName:"RectangleROI"},context:"CORNERSTONE"}],"Rectangle"),n.Ok._createActionButton("TagBrowser","list-bullets","Dicom Tag Browser",[{commandName:"openDICOMTagViewer",commandOptions:{},context:"DEFAULT"}],"Dicom Tag Browser")]}}],T=["SM","ECG","SR","SEG","RTSTRUCT"],R="@ohif/extension-default.layoutTemplateModule.viewerLayout",S="@ohif/extension-default.sopClassHandlerModule.stack",E="@ohif/extension-measurement-tracking.panelModule.trackedMeasurements",v="@ohif/extension-measurement-tracking.panelModule.seriesList",C="@ohif/extension-measurement-tracking.viewportModule.cornerstone-tracked",y="@ohif/extension-cornerstone-dicom-sr.sopClassHandlerModule.dicom-sr",f="@ohif/extension-cornerstone-dicom-sr.viewportModule.dicom-sr",A="@ohif/extension-dicom-video.sopClassHandlerModule.dicom-video",x="@ohif/extension-dicom-video.viewportModule.dicom-video",h="@ohif/extension-dicom-pdf.sopClassHandlerModule.dicom-pdf",k="@ohif/extension-dicom-pdf.viewportModule.dicom-pdf",B="@ohif/extension-cornerstone-dicom-seg.sopClassHandlerModule.dicom-seg",b="@ohif/extension-cornerstone-dicom-seg.viewportModule.dicom-seg",w="@ohif/extension-cornerstone-dicom-seg.panelModule.panelSegmentation",M="@ohif/extension-cornerstone-dicom-rt.viewportModule.dicom-rt",I="@ohif/extension-cornerstone-dicom-rt.sopClassHandlerModule.dicom-rt",L={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-measurement-tracking":"^3.0.0","@ohif/extension-cornerstone-dicom-sr":"^3.0.0","@ohif/extension-cornerstone-dicom-seg":"^3.0.0","@ohif/extension-cornerstone-dicom-rt":"^3.0.0","@ohif/extension-dicom-pdf":"^3.0.1","@ohif/extension-dicom-video":"^3.0.1"};const _={id:m,modeFactory:function(o){let{modeConfiguration:e}=o,t=[];return{id:m,routeName:"viewer",displayName:"Basic Viewer",onModeEnter:o=>{let{servicesManager:e,extensionManager:t,commandsManager:n}=o;const{measurementService:a,toolbarService:i,toolGroupService:l,panelService:c,customizationService:s}=e.services;let m;a.clearMeasurements(),d(t,l,n),i.setDefaultTool({groupId:"WindowLevel",itemId:"WindowLevel",interactionType:"tool",commands:[{commandName:"setToolActive",commandOptions:{toolName:"WindowLevel"},context:"CORNERSTONE"}]});({unsubscribe:m}=l.subscribe(l.EVENTS.VIEWPORT_ADDED,(()=>{i.recordInteraction(i.getDefaultTool()),m()}))),i.init(t),i.addButtons([...r,...N,...g]),i.createButtonSection("default",["MeasurementTools","Zoom","WindowLevel","Pan","Capture","Layout","MPR","MoreTools"]),i.createButtonSection("mpr",["MeasurementTools","Zoom","WindowLevel","Pan","Capture","Layout","MPR","Crosshairs","MoreToolsMpr"]),s.addModeCustomizations([{id:"segmentation.disableEditing",value:!0}])},onModeExit:o=>{let{servicesManager:e}=o;const{toolGroupService:n,syncGroupService:a,toolbarService:i,segmentationService:l,cornerstoneViewportService:c}=e.services;t.forEach((o=>o.unsubscribe())),t=[],n.destroy(),a.destroy(),l.destroy(),c.destroy()},validationTags:{study:[],series:[]},isValidMode:function(o){let{modalities:e}=o;return!!e.split("\\").filter((o=>-1===T.indexOf(o))).length},routes:[{path:"longitudinal",layoutTemplate:()=>({id:R,props:{leftPanels:[v],rightPanels:[w,E],rightPanelDefaultClosed:!0,viewports:[{namespace:C,displaySetsToDisplay:[S]},{namespace:f,displaySetsToDisplay:[y]},{namespace:x,displaySetsToDisplay:[A]},{namespace:k,displaySetsToDisplay:[h]},{namespace:b,displaySetsToDisplay:[B]},{namespace:M,displaySetsToDisplay:[I]}]}})}],extensions:L,hangingProtocol:"default",sopClassHandlers:[A,B,S,h,y,I],hotkeys:[...n.dD.defaults.hotkeyBindings],...e}},extensionDependencies:L}},78753:()=>{}}]);
//# sourceMappingURL=563.bundle.38add01891ae78a85c32.js.map