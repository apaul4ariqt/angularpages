(self.webpackChunkcart=self.webpackChunkcart||[]).push([[626],{1626:(bt,se,T)=>{T.r(se),T.d(se,{FetchBackend:()=>z,HTTP_INTERCEPTORS:()=>Y,HttpBackend:()=>L,HttpClient:()=>fe,HttpClientJsonpModule:()=>Tt,HttpClientModule:()=>gt,HttpClientXsrfModule:()=>mt,HttpContext:()=>le,HttpContextToken:()=>Ge,HttpErrorResponse:()=>b,HttpEventType:()=>v,HttpFeatureKind:()=>M,HttpHandler:()=>k,HttpHeaderResponse:()=>F,HttpHeaders:()=>P,HttpParams:()=>w,HttpRequest:()=>A,HttpResponse:()=>_,HttpResponseBase:()=>X,HttpStatusCode:()=>O,HttpUrlEncodingCodec:()=>ae,HttpXhrBackend:()=>ee,HttpXsrfTokenExtractor:()=>K,JsonpClientBackend:()=>H,JsonpInterceptor:()=>dt,provideHttpClient:()=>Me,withFetch:()=>yt,withInterceptors:()=>ft,withInterceptorsFromDi:()=>Ie,withJsonpSupport:()=>Ae,withNoXsrfProtection:()=>De,withRequestsMadeViaParent:()=>pt,withXsrfConfiguration:()=>te,\u0275HTTP_ROOT_INTERCEPTOR_FNS:()=>Z,\u0275HttpInterceptingHandler:()=>J,\u0275HttpInterceptorHandler:()=>J,\u0275PRIMARY_HTTP_BACKEND:()=>Q,\u0275withHttpTransferCache:()=>_t});var oe=T(4523),a=T(3083),$=T(7673),G=T(1985),Ce=T(6648),Xe=T(274),ze=T(5964),B=T(6354),ie=T(980),Je=T(5558),We=T(8141),j=T(9853);class k{}class L{}class P{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?"string"==typeof n?this.lazyInit=()=>{this.headers=new Map,n.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),i=s.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof P?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){const t=new P;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof P?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){const t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(n.name,t);const s=("a"===n.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const i=n.value;if(i){let o=this.headers.get(t);if(!o)return;o=o.filter(l=>-1===i.indexOf(l)),0===o.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(n,t){const r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}}class ae{encodeKey(n){return ce(n)}encodeValue(n){return ce(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const Ve=/%(\d[a-f0-9])/gi,$e={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ce(e){return encodeURIComponent(e).replace(Ve,(n,t)=>$e[t]??n)}function C(e){return`${e}`}class w{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new ae,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Ke(e,n){const t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[o,l]=-1==i?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],c=t.get(o)||[];c.push(l),t.set(o,c)}),t}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{const r=n.fromObject[t],s=Array.isArray(r)?r.map(C):[C(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){const t=[];return Object.keys(n).forEach(r=>{const s=n[r];Array.isArray(s)?s.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const t=new w({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const t=("a"===n.op?this.map.get(n.param):void 0)||[];t.push(C(n.value)),this.map.set(n.param,t);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let r=this.map.get(n.param)||[];const s=r.indexOf(C(n.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}class Ge{constructor(n){this.defaultValue=n}}class le{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}}function de(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function he(e){return typeof Blob<"u"&&e instanceof Blob}function ue(e){return typeof FormData<"u"&&e instanceof FormData}class A{constructor(n,t,r,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function Se(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new P,this.context??=new le,this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=t;else{const l=t.indexOf("?");this.urlWithParams=t+(-1===l?"?":l<t.length-1?"&":"")+o}}else this.params=new w,this.urlWithParams=t}serializeBody(){return null===this.body?null:"string"==typeof this.body||de(this.body)||he(this.body)||ue(this.body)||function qe(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)?this.body:this.body instanceof w?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ue(this.body)?null:he(this.body)?this.body.type||null:de(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){const t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,o=void 0!==n.body?n.body:this.body,l=n.withCredentials??this.withCredentials,c=n.reportProgress??this.reportProgress;let u=n.headers||this.headers,m=n.params||this.params;const d=n.context??this.context;return void 0!==n.setHeaders&&(u=Object.keys(n.setHeaders).reduce((p,R)=>p.set(R,n.setHeaders[R]),u)),n.setParams&&(m=Object.keys(n.setParams).reduce((p,R)=>p.set(R,n.setParams[R]),m)),new A(t,r,o,{params:m,headers:u,context:d,reportProgress:c,responseType:s,withCredentials:l,transferCache:i})}}var v=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(v||{});class X{constructor(n,t=O.Ok,r="OK"){this.headers=n.headers||new P,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class F extends X{constructor(n={}){super(n),this.type=v.ResponseHeader}clone(n={}){return new F({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class _ extends X{constructor(n={}){super(n),this.type=v.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new _({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class b extends X{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}var O=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(O||{});function S(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}let fe=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let i;if(t instanceof A)i=t;else{let c,u;c=s.headers instanceof P?s.headers:new P(s.headers),s.params&&(u=s.params instanceof w?s.params:new w({fromObject:s.params})),i=new A(t,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}const o=(0,$.of)(i).pipe((0,Xe.H)(c=>this.handler.handle(c)));if(t instanceof A||"events"===s.observe)return o;const l=o.pipe((0,ze.p)(c=>c instanceof _));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe((0,B.T)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe((0,B.T)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe((0,B.T)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return l.pipe((0,B.T)(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new w).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,S(s,r))}post(t,r,s={}){return this.request("POST",t,S(s,r))}put(t,r,s={}){return this.request("PUT",t,S(s,r))}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(k))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();const Ye=/^\)\]\}',?\n/;function pe(e){if(e.url)return e.url;const n="X-Request-URL".toLocaleLowerCase();return e.headers.get(n)}let z=(()=>{class e{constructor(){this.fetchImpl=(0,a.inject)(Qe,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,a.inject)(a.NgZone)}handle(t){return new G.c(r=>{const s=new AbortController;return this.doRequest(t,s.signal,r).then(q,i=>r.error(new b({error:i}))),()=>s.abort()})}doRequest(t,r,s){var i=this;return(0,oe.A)(function*(){const o=i.createRequestInit(t);let l;try{const g=i.fetchImpl(t.urlWithParams,{signal:r,...o});(function He(e){e.then(q,q)})(g),s.next({type:v.Sent}),l=yield g}catch(g){return void s.error(new b({error:g,status:g.status??0,statusText:g.statusText,url:t.urlWithParams,headers:g.headers}))}const c=new P(l.headers),u=l.statusText,m=pe(l)??t.urlWithParams;let d=l.status,p=null;if(t.reportProgress&&s.next(new F({headers:c,status:d,statusText:u,url:m})),l.body){const g=l.headers.get("content-length"),h=[],f=l.body.getReader();let N,y,E=0;const x=typeof Zone<"u"&&Zone.current;yield i.ngZone.runOutsideAngular((0,oe.A)(function*(){for(;;){const{done:D,value:re}=yield f.read();if(D)break;if(h.push(re),E+=re.length,t.reportProgress){y="text"===t.responseType?(y??"")+(N??=new TextDecoder).decode(re,{stream:!0}):void 0;const Be=()=>s.next({type:v.DownloadProgress,total:g?+g:void 0,loaded:E,partialText:y});x?x.run(Be):Be()}}}));const ne=i.concatChunks(h,E);try{const D=l.headers.get("Content-Type")??"";p=i.parseBody(t,ne,D)}catch(D){return void s.error(new b({error:D,headers:new P(l.headers),status:l.status,statusText:l.statusText,url:pe(l)??t.urlWithParams}))}}0===d&&(d=p?O.Ok:0),d>=200&&d<300?(s.next(new _({body:p,headers:c,status:d,statusText:u,url:m})),s.complete()):s.error(new b({error:p,headers:c,status:d,statusText:u,url:m}))})()}parseBody(t,r,s){switch(t.responseType){case"json":const i=(new TextDecoder).decode(r).replace(Ye,"");return""===i?null:JSON.parse(i);case"text":return(new TextDecoder).decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(t){const r={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((i,o)=>r[i]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){const i=t.detectContentTypeHeader();null!==i&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:s}}concatChunks(t,r){const s=new Uint8Array(r);let i=0;for(const o of t)s.set(o,i),i+=o.length;return s}static#e=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();class Qe{}function q(){}function ye(e,n){return n(e)}function et(e,n){return(t,r)=>n.intercept(t,{handle:s=>e(s,r)})}const Y=new a.InjectionToken(""),U=new a.InjectionToken(""),Z=new a.InjectionToken(""),Q=new a.InjectionToken("");function nt(){let e=null;return(n,t)=>{null===e&&(e=((0,a.inject)(Y,{optional:!0})??[]).reduceRight(et,ye));const r=(0,a.inject)(a.\u0275PendingTasks),s=r.add();return e(n,t).pipe((0,ie.j)(()=>r.remove(s)))}}let me,J=(()=>{class e extends k{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275PendingTasks);const s=(0,a.inject)(Q,{optional:!0});this.backend=s??t}handle(t){if(null===this.chain){const s=Array.from(new Set([...this.injector.get(U),...this.injector.get(Z,[])]));this.chain=s.reduceRight((i,o)=>function tt(e,n,t){return(r,s)=>(0,a.runInInjectionContext)(t,()=>n(r,i=>e(i,s)))}(i,o,this.injector),ye)}const r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe((0,ie.j)(()=>this.pendingTasks.remove(r)))}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(L),a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})(),st=0;class ge{}function lt(){return"object"==typeof window?window:{}}let H=(()=>{class e{constructor(t,r){this.callbackMap=t,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+st++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new G.c(r=>{const s=this.nextCallback(),i=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),o=this.document.createElement("script");o.src=i;let l=null,c=!1;this.callbackMap[s]=p=>{delete this.callbackMap[s],l=p,c=!0};const u=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[s]};return o.addEventListener("load",p=>{this.resolvedPromise.then(()=>{u(),c?(r.next(new _({body:l,status:O.Ok,statusText:"OK",url:i})),r.complete()):r.error(new b({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),o.addEventListener("error",p=>{u(),r.error(new b({error:p,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(o),r.next({type:v.Sent}),()=>{c||this.removeListeners(o),u()}})}removeListeners(t){me??=this.document.implementation.createHTMLDocument(),me.adoptNode(t)}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(ge),a.\u0275\u0275inject(j.DOCUMENT))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();function Te(e,n){return"JSONP"===e.method?(0,a.inject)(H).handle(e):n(e)}let dt=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,a.runInInjectionContext)(this.injector,()=>Te(t,s=>r.handle(s)))}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();const ht=/^\)\]\}',?\n/;let ee=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new a.\u0275RuntimeError(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,Ce.H)(r.\u0275loadImpl()):(0,$.of)(null)).pipe((0,Je.n)(()=>new G.c(i=>{const o=r.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((h,f)=>o.setRequestHeader(h,f.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const h=t.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(t.responseType){const h=t.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const l=t.serializeBody();let c=null;const u=()=>{if(null!==c)return c;const h=o.statusText||"OK",f=new P(o.getAllResponseHeaders()),E=function ut(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||t.url;return c=new F({headers:f,status:o.status,statusText:h,url:E}),c},m=()=>{let{headers:h,status:f,statusText:E,url:N}=u(),y=null;f!==O.NoContent&&(y=typeof o.response>"u"?o.responseText:o.response),0===f&&(f=y?O.Ok:0);let x=f>=200&&f<300;if("json"===t.responseType&&"string"==typeof y){const ne=y;y=y.replace(ht,"");try{y=""!==y?JSON.parse(y):null}catch(D){y=ne,x&&(x=!1,y={error:D,text:y})}}x?(i.next(new _({body:y,headers:h,status:f,statusText:E,url:N||void 0})),i.complete()):i.error(new b({error:y,headers:h,status:f,statusText:E,url:N||void 0}))},d=h=>{const{url:f}=u(),E=new b({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:f||void 0});i.error(E)};let p=!1;const R=h=>{p||(i.next(u()),p=!0);let f={type:v.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),"text"===t.responseType&&o.responseText&&(f.partialText=o.responseText),i.next(f)},g=h=>{let f={type:v.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),i.next(f)};return o.addEventListener("load",m),o.addEventListener("error",d),o.addEventListener("timeout",d),o.addEventListener("abort",d),t.reportProgress&&(o.addEventListener("progress",R),null!==l&&o.upload&&o.upload.addEventListener("progress",g)),o.send(l),i.next({type:v.Sent}),()=>{o.removeEventListener("error",d),o.removeEventListener("abort",d),o.removeEventListener("load",m),o.removeEventListener("timeout",d),t.reportProgress&&(o.removeEventListener("progress",R),null!==l&&o.upload&&o.upload.removeEventListener("progress",g)),o.readyState!==o.DONE&&o.abort()}})))}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(j.XhrFactory))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();const W=new a.InjectionToken(""),Ee="XSRF-TOKEN",Pe=new a.InjectionToken("",{providedIn:"root",factory:()=>Ee}),Re="X-XSRF-TOKEN",ve=new a.InjectionToken("",{providedIn:"root",factory:()=>Re});class K{}let we=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,j.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(j.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(Pe))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();function _e(e,n){const t=e.url.toLowerCase();if(!(0,a.inject)(W)||"GET"===e.method||"HEAD"===e.method||t.startsWith("http://")||t.startsWith("https://"))return n(e);const r=(0,a.inject)(K).getToken(),s=(0,a.inject)(ve);return null!=r&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}let be=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,a.runInInjectionContext)(this.injector,()=>_e(t,s=>r.handle(s)))}static#e=this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})();var M=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(M||{});function I(e,n){return{\u0275kind:e,\u0275providers:n}}function Me(...e){const n=[fe,ee,J,{provide:k,useExisting:J},{provide:L,useExisting:ee},{provide:U,useValue:_e,multi:!0},{provide:W,useValue:!0},{provide:K,useClass:we}];for(const t of e)n.push(...t.\u0275providers);return(0,a.makeEnvironmentProviders)(n)}function ft(e){return I(M.Interceptors,e.map(n=>({provide:U,useValue:n,multi:!0})))}const Oe=new a.InjectionToken("");function Ie(){return I(M.LegacyInterceptors,[{provide:Oe,useFactory:nt},{provide:U,useExisting:Oe,multi:!0}])}function te({cookieName:e,headerName:n}){const t=[];return void 0!==e&&t.push({provide:Pe,useValue:e}),void 0!==n&&t.push({provide:ve,useValue:n}),I(M.CustomXsrfConfiguration,t)}function De(){return I(M.NoXsrfProtection,[{provide:W,useValue:!1}])}function Ae(){return I(M.JsonpSupport,[H,{provide:ge,useFactory:lt},{provide:U,useValue:Te,multi:!0}])}function pt(){return I(M.RequestsMadeViaParent,[{provide:L,useFactory:()=>(0,a.inject)(k,{skipSelf:!0,optional:!0})}])}function yt(){return I(M.Fetch,[z,{provide:L,useExisting:z},{provide:Q,useExisting:z}])}let mt=(()=>{class e{static disable(){return{ngModule:e,providers:[De().\u0275providers]}}static withOptions(t={}){return{ngModule:e,providers:te(t).\u0275providers}}static#e=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:e});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[be,{provide:Y,useExisting:be,multi:!0},{provide:K,useClass:we},te({cookieName:Ee,headerName:Re}).\u0275providers,{provide:W,useValue:!0}]})}return e})(),gt=(()=>{class e{static#e=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:e});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Me(Ie())]})}return e})(),Tt=(()=>{class e{static#e=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:e});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ae().\u0275providers]})}return e})();const Ne="b",xe="h",je="s",ke="st",Le="u",Fe="rt",V=new a.InjectionToken(""),Et=["GET","HEAD"];function Pt(e,n){const{isCacheActive:t,...r}=(0,a.inject)(V),{transferCache:s,method:i}=e;if(!t||"POST"===i&&!r.includePostRequests&&!s||"POST"!==i&&!Et.includes(i)||!1===s||!1===r.filter?.(e))return n(e);const o=(0,a.inject)(a.TransferState),l=function vt(e){const{params:n,method:t,responseType:r,url:s}=e,i=Ue(n);let o=e.serializeBody();o instanceof URLSearchParams?o=Ue(o):"string"!=typeof o&&(o="");const c=function wt(e){let n=0;for(const t of e)n=Math.imul(31,n)+t.charCodeAt(0)|0;return n+=2147483648,n.toString()}([t,r,s,o,i].join("|"));return(0,a.makeStateKey)(c)}(e),c=o.get(l,null);let u=r.includeHeaders;if("object"==typeof s&&s.includeHeaders&&(u=s.includeHeaders),c){const{[Ne]:d,[Fe]:p,[xe]:R,[je]:g,[ke]:h,[Le]:f}=c;let E=d;switch(p){case"arraybuffer":E=(new TextEncoder).encode(d).buffer;break;case"blob":E=new Blob([d])}let N=new P(R);return(0,$.of)(new _({body:E,headers:N,status:g,statusText:h,url:f}))}const m=(0,j.isPlatformServer)((0,a.inject)(a.PLATFORM_ID));return n(e).pipe((0,We.M)(d=>{d instanceof _&&m&&o.set(l,{[Ne]:d.body,[xe]:Rt(d.headers,u),[je]:d.status,[ke]:d.statusText,[Le]:d.url||"",[Fe]:e.responseType})}))}function Rt(e,n){if(!n)return{};const t={};for(const r of n){const s=e.getAll(r);null!==s&&(t[r]=s)}return t}function Ue(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function _t(e){return[{provide:V,useFactory:()=>((0,a.\u0275performanceMarkFeature)("NgHttpTransferCache"),{isCacheActive:!0,...e})},{provide:Z,useValue:Pt,multi:!0,deps:[a.TransferState,V]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)(V);return()=>{(0,a.\u0275whenStable)(n).then(()=>{t.isCacheActive=!1})}}}]}}}]);