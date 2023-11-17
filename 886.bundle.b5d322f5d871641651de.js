"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[886],{48886:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var s=n(3827),a=n.n(s),r=n(43001),i=n(69190),l=n(71771),o=n(64035),c=n(22582),u=n(38965),d=n(62657);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},p.apply(this,arguments)}const{formatDate:m}=l.utils;function S(e){const{children:t,dataSource:n,displaySets:s,viewportLabel:a,viewportOptions:S,servicesManager:I,extensionManager:g}=e,[f]=(0,d.M)(),{displaySetService:y,cornerstoneViewportService:D,measurementService:v}=I.services,h=S.viewportId;if(s.length>1)throw new Error("SR viewport should only have a single display set");const b=s[0],[E,w]=(0,c.O_)(),[k,x]=(0,r.useState)(0),[M,U]=(0,r.useState)(1),[P,N]=(0,r.useState)(null),[O,C]=(0,r.useState)(null),[T,R]=(0,r.useState)(null),{viewports:A,activeViewportId:L}=E;let F,j;if(g.registeredExtensionIds.includes("@ohif/extension-measurement-tracking")){const e=g.getModuleEntry("@ohif/extension-measurement-tracking.contextModule.TrackedMeasurementsContext"),t=(0,r.useContext)(e.context);F=t?.[0],j=t?.[1]}j||(F=null,j=(e,t)=>{let{displaySetInstanceUID:n}=t;v.clearMeasurements();const{SeriesInstanceUIDs:s}=(0,u.Z)({servicesManager:I,extensionManager:g,appConfig:f},n),a=y.getDisplaySetsForSeries(s[0]);a.length&&w.setDisplaySetsForViewports([{viewportId:L,displaySetInstanceUIDs:[a[0].displaySetInstanceUID]}])});const V=(0,r.useCallback)((e=>{const{measurements:t}=b;(0,o.l2)(T,t.map((e=>e.TrackingUniqueIdentifier)),e)}),[T,k,b]),q=e=>{R(e.detail.element)},$=(0,r.useCallback)((e=>{const{StudyInstanceUID:t,displaySetInstanceUID:n,sopClassUids:s}=b;t&&n&&(s&&s.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),async function(e,t,n){const{measurements:s}=e,a=s[t],{displaySetInstanceUID:r}=a,i=n.getDisplaySetByUID(r),l=i.images[0],o={PatientID:l.PatientID,PatientName:l.PatientName,PatientSex:l.PatientSex,PatientAge:l.PatientAge,SliceThickness:l.SliceThickness,StudyDate:l.StudyDate,SeriesDescription:l.SeriesDescription,SeriesInstanceUID:l.SeriesInstanceUID,SeriesNumber:l.SeriesNumber,ManufacturerModelName:l.ManufacturerModelName,SpacingBetweenSlices:l.SpacingBetweenSlices};return{referencedDisplaySetMetadata:o,referencedDisplaySet:i}}(b,e,y).then((t=>{let{referencedDisplaySet:n,referencedDisplaySetMetadata:s}=t;if(x(e),N(n),C(s),n.displaySetInstanceUID===P?.displaySetInstanceUID){const{measurements:t}=b,n=D.getCornerstoneViewport(h),s=n.getImageIds().indexOf(t[e].imageId);-1!==s&&n.setImageIdIndex(s)}})))}),[n,b,P,h]),B=(0,r.useCallback)((()=>{if(!P)return null;const{component:t}=g.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{measurements:n}=b,s=n[k];if(!s)return null;const a=P.images.findIndex((e=>e.imageId===s.imageId));return r.createElement(t,p({},e,{displaySets:[P],viewportOptions:{...S,toolGroupId:"SRToolGroup",viewportType:"stack",positionIds:null},onElementEnabled:q,initialImageIndex:a,isJumpToMeasurementDisabled:!0}))}),[P,h,k]),J=(0,r.useCallback)((e=>{let t=k;"right"===e?(t++,t>=M&&(t=0)):(t--,t<0&&(t=M-1)),V(t),$(t)}),[k,M,$,V]);(0,r.useEffect)((()=>{const e=y.subscribe(y.EVENTS.DISPLAY_SETS_REMOVED,(e=>{let{displaySetInstanceUIDs:t}=e;const n=A.get(L);t.includes(n.displaySetInstanceUID)&&w.setDisplaySetsForViewport({viewportId:L,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,r.useEffect)((()=>{b.isLoaded||b.load();const e=b.measurements.length;U(e)}),[b]),(0,r.useEffect)((()=>{T&&b.isLoaded&&V(k)}),[k,T,V,b]);let _=F?.context?.trackedSeries?.length>0;(0,r.useEffect)((()=>{_=F?.context?.trackedSeries?.length>0}),[F]),(0,r.useEffect)((()=>{$(k)}),[n,b]);let G=null;if(!P||!O)return null;t&&t.length&&(G=t.map(((e,t)=>e&&r.cloneElement(e,{viewportId:h,key:t}))));const{PatientID:Y,PatientName:H,PatientSex:W,PatientAge:X,SliceThickness:Z,ManufacturerModelName:z,StudyDate:K,SeriesDescription:Q,SpacingBetweenSlices:ee,SeriesNumber:te}=O;return r.createElement(r.Fragment,null,r.createElement(c.uY,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},onArrowsClick:J,getStatusComponent:()=>function(e){let{srDisplaySet:t,viewportId:n,isRehydratable:s,isLocked:a,sendTrackedMeasurementsEvent:l}=e;const o=()=>{l("HYDRATE_SR",{displaySetInstanceUID:t.displaySetInstanceUID,viewportId:n})},{t:u}=(0,i.$G)("Common"),d=u("LOAD"),p=s&&!a?3:s&&a?2:1;let m=null,S=null;switch(p){case 1:S=()=>r.createElement(c.JO,{name:"status-alert"}),m=()=>r.createElement("div",null,"This structured report is not compatible",r.createElement("br",null),"with this application.");break;case 2:S=()=>r.createElement(c.JO,{name:"status-locked"}),m=()=>r.createElement("div",null,"This structured report is currently read-only",r.createElement("br",null),"because you are tracking measurements in",r.createElement("br",null),"another viewport.");break;case 3:S=()=>r.createElement(c.JO,{className:"text-aqua-pale",name:"status-untracked"}),m=()=>r.createElement("div",null,`Click ${d} to restore measurements.`)}const I=()=>r.createElement("div",{className:"flex h-6 cursor-default text-sm leading-6 text-white"},r.createElement("div",{className:"bg-customgray-100 flex min-w-[45px] items-center rounded-l-xl rounded-r p-1"},r.createElement(S,null),r.createElement("span",{className:"ml-1"},"SR")),3===p&&r.createElement("div",{className:"bg-primary-main hover:bg-primary-light ml-1 cursor-pointer rounded px-1.5 hover:text-black",onMouseUp:o},d));return r.createElement(r.Fragment,null,m&&r.createElement(c.u,{content:r.createElement(m,null),position:"bottom-left"},r.createElement(I,null)),!m&&r.createElement(I,null))}({srDisplaySet:b,viewportId:h,isTracked:!1,isRehydratable:b.isRehydratable,isLocked:_,sendTrackedMeasurementsEvent:j}),studyData:{label:a,useAltStyling:!0,studyDate:m(K),currentSeries:te,seriesDescription:Q||"",patientInformation:{patientName:H?l.default.utils.formatPN(H.Alphabetic):"",patientSex:W||"",patientAge:X||"",MRN:Y||"",thickness:Z?`${parseFloat(Z).toFixed(2)}mm`:"",spacing:void 0!==ee?`${ee.toFixed(2)}mm`:"",scanner:z||""}}}),r.createElement("div",{className:"relative flex h-full w-full flex-row overflow-hidden"},B(),G))}S.propTypes={displaySets:a().arrayOf(a().object),viewportId:a().string.isRequired,dataSource:a().object,children:a().node,viewportLabel:a().string,customProps:a().object,viewportOptions:a().object,viewportLabel:a().string,servicesManager:a().instanceOf(l.Xw).isRequired,extensionManager:a().instanceOf(l.W$).isRequired},S.defaultProps={customProps:{}};const I=S}}]);
//# sourceMappingURL=886.bundle.b5d322f5d871641651de.js.map