(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applications-applications-module"],{

/***/ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@pusher/chatkit-client/dist/web/chatkit.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,t,n=(function(e,t){var n;"undefined"!=typeof self&&self,n=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){function r(e){var t={};if(!e)return t;for(var n=0,r=e.split("\r\n");n<r.length;n++){var o=r[n],i=o.indexOf(": ");if(i>0){var s=o.substring(0,i),u=o.substring(i+2);t[s]=u}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.responseToHeadersObject=r;var o=function(){function e(e,t,n){this.statusCode=e,this.headers=t,this.info=n}return e.fromXHR=function(t){var n=t.responseText;try{n=JSON.parse(t.responseText)}catch(e){}return new e(t.status,r(t.getAllResponseHeaders()),n)},e}();t.ErrorResponse=o;var i=function(){return function(e){this.error=e}}();t.NetworkError=i;var s=function(){return function(e){this.error=e}}();t.ProtocolError=s,function(e){e[e.UNSENT=0]="UNSENT",e[e.OPENED=1]="OPENED",e[e.HEADERS_RECEIVED=2]="HEADERS_RECEIVED",e[e.LOADING=3]="LOADING",e[e.DONE=4]="DONE"}(t.XhrReadyState||(t.XhrReadyState={}))},function(e,t,n){var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.VERBOSE=1]="VERBOSE",e[e.DEBUG=2]="DEBUG",e[e.INFO=3]="INFO",e[e.WARNING=4]="WARNING",e[e.ERROR=5]="ERROR"}(r=t.LogLevel||(t.LogLevel={}));var o=function(){function e(e){void 0===e&&(e=2),this.threshold=e;var t=Array(),n="--------------------------------------------------------------------------------";window.console.group||(window.console.group=function(e){t.push(e),window.console.log("%c \nBEGIN GROUP: %c",n,e)}),window.console.groupEnd||(window.console.groupEnd=function(){window.console.log("END GROUP: %c\n%c",t.pop(),n)})}return e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.log,r.VERBOSE,e)},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.log,r.DEBUG,e)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.info,r.INFO,e)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.warn,r.WARNING,e)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.error,r.ERROR,e)},e.prototype.log=function(e,t,n){var o=this;if(t>=this.threshold){var i="Logger."+r[t];n.length>1?(window.console.group(),n.forEach(function(t){o.errorAwareLog(e,t,i)}),window.console.groupEnd()):this.errorAwareLog(e,n[0],i)}},e.prototype.errorAwareLog=function(e,t,n){if(null!=t&&t.info&&t.info.error_uri){var r=t.info.error_description;e((r||"An error has occurred")+". More information can be found at "+t.info.error_uri+". Error object: ",t)}else e(n+": ",t)},e}();t.ConsoleLogger=o;var i=function(){function e(){}return e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e}();t.EmptyLogger=i},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.createRetryStrategyOptionsOrDefault=function(e){var t=e.initialTimeoutMillis||1e3,n=e.maxTimeoutMillis||5e3,r=-1;return void 0!==e.limit&&null!=e.limit&&(r=e.limit),{increaseTimeout:void 0!==e.increaseTimeout?e.increaseTimeout:function(e){return 2*e>n?n:2*e},initialTimeoutMillis:t,limit:r,maxTimeoutMillis:n}};var o=function(){return function(e){this.waitTimeMillis=e}}();t.Retry=o;var i=function(){return function(e){this.error=e}}();t.DoNotRetry=i;var s=function(){function e(e,t,n){this.options=e,this.logger=t,this.retryUnsafeRequests=n,this.currentRetryCount=0,this.initialTimeoutMillis=e.initialTimeoutMillis,this.maxTimeoutMillis=e.maxTimeoutMillis,this.limit=e.limit,this.increaseTimeoutFunction=e.increaseTimeout,this.currentBackoffMillis=this.initialTimeoutMillis}return e.prototype.attemptRetry=function(e){if(this.logger.verbose(this.constructor.name+": Error received",e),this.currentRetryCount>=this.limit&&this.limit>=0)return this.logger.verbose(this.constructor.name+": Retry count is over the maximum limit: "+this.limit),new i(e);if(null==e)return new o(this.calculateMillisToRetry());if(e instanceof r.ErrorResponse&&e.headers["Retry-After"])return this.logger.verbose(this.constructor.name+": Retry-After header is present, retrying in "+e.headers["Retry-After"]),new o(1e3*parseInt(e.headers["Retry-After"],10));if(this.retryUnsafeRequests)return new o(this.calculateMillisToRetry());switch(e.constructor){case r.ErrorResponse:var t=e.statusCode,n=e.headers["Request-Method"];return t>=500&&t<600&&("GET"===(s=(s=n).toUpperCase())||"HEAD"===s||"OPTIONS"===s||"SUBSCRIBE"===s)?(this.logger.verbose(this.constructor.name+": Encountered an error with status code "+t+" and request method "+n+", will retry"),new o(this.calculateMillisToRetry())):(this.logger.verbose(this.constructor.name+": Encountered an error with status code "+t+" and request method "+n+", will not retry",e),new i(e));case r.NetworkError:return this.logger.verbose(this.constructor.name+": Encountered a network error, will retry",e),new o(this.calculateMillisToRetry());case r.ProtocolError:return this.logger.verbose(this.constructor.name+": Encountered a protocol error, will retry",e),new o(this.calculateMillisToRetry());default:return this.logger.verbose(this.constructor.name+": Encountered an error, will retry",e),new o(this.calculateMillisToRetry())}var s},e.prototype.calculateMillisToRetry=function(){return this.currentBackoffMillis=this.increaseTimeoutFunction(this.currentBackoffMillis),this.logger.verbose(this.constructor.name+": Retrying in "+this.currentBackoffMillis+"ms"),this.currentBackoffMillis},e}();t.RetryResolution=s},function(e,t,n){var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(4),s=n(5),u=n(6),c=n(11),a=n(12),h=n(7),l=n(13),d=n(14),f=n(8),p=function(){function e(e){this.options=e,this.host=e.host.replace(/(\/)+$/,"");var t=e.logger||new o.ConsoleLogger;this.logger=t,this.websocketTransport=new d.default(this.host,t),this.httpTransport=new l.default(this.host,e.encrypted),this.sdkProduct=e.sdkProduct||"unknown",this.sdkVersion=e.sdkVersion||"unknown",this.sdkPlatform=navigator?"ReactNative"===navigator.product?"react-native":"web":"node"}return e.prototype.request=function(e,t){var n=this;return e.tokenProvider?e.tokenProvider.fetchToken(t).then(function(t){var n;return void 0!==e.headers?e.headers.Authorization="Bearer "+t:e.headers=((n={}).Authorization="Bearer "+t,n),e}).then(function(e){return n.makeRequest(e)}):this.makeRequest(e)},e.prototype.subscribeResuming=function(e,t,n,o,i,u){var l=a.replaceMissingListenersWithNoOps(n),d=c.subscribeStrategyListenersFromSubscriptionListeners(l),p=!1;return s.createResumingStrategy(o,h.createTokenProvidingStrategy(f.createTransportStrategy(e,this.websocketTransport,this.logger),this.logger,u),this.logger,i)({onEnd:d.onEnd,onError:d.onError,onEvent:d.onEvent,onOpen:function(e){p||(p=!0,d.onOpen(e)),l.onSubscribe()},onRetrying:d.onRetrying},r({},t,this.infoHeaders()))},e.prototype.subscribeNonResuming=function(e,t,n,o,i){var s=a.replaceMissingListenersWithNoOps(n),l=c.subscribeStrategyListenersFromSubscriptionListeners(s),d=!1;return u.createRetryingStrategy(o,h.createTokenProvidingStrategy(f.createTransportStrategy(e,this.websocketTransport,this.logger),this.logger,i),this.logger)({onEnd:l.onEnd,onError:l.onError,onEvent:l.onEvent,onOpen:function(e){d||(d=!0,l.onOpen(e)),s.onSubscribe()},onRetrying:l.onRetrying},r({},t,this.infoHeaders()))},e.prototype.infoHeaders=function(){return{"X-SDK-Language":"javascript","X-SDK-Platform":this.sdkPlatform,"X-SDK-Product":this.sdkProduct,"X-SDK-Version":this.sdkVersion}},e.prototype.makeRequest=function(e){var t=this;return i.executeNetworkRequest(function(){return t.httpTransport.request(r({},e,{headers:r({},e.headers,t.infoHeaders())}))},e).catch(function(e){throw t.logger.error(e),e})},e}();t.BaseClient=p},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);function o(e,t,n){return e.onreadystatechange=function(){4===e.readyState&&(e.status>=200&&e.status<300?t(e.response):0!==e.status?n(r.ErrorResponse.fromXHR(e)):n(new r.NetworkError("No Connection")))},e}t.executeNetworkRequest=function(e,t){return new Promise(function(n,r){!function(e,t){t.json?e.send(JSON.stringify(t.json)):e.send(t.body)}(o(e(),n,r),t)})},t.sendRawRequest=function(e){return new Promise(function(t,n){var r=o(new window.XMLHttpRequest,t,n);if(r.open(e.method.toUpperCase(),e.url,!0),e.headers)for(var i in e.headers)e.headers.hasOwnProperty(i)&&r.setRequestHeader(i,e.headers[i]);r.send(e.body)})}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);t.createResumingStrategy=function(e,t,n,r){var s=o.createRetryStrategyOptionsOrDefault(e),u=new o.RetryResolution(s,n);return function(e,r){return new i(n,r,t,e,u)}};var i=function(){return function(e,t,n,r,o){var i=this;this.unsubscribe=function(){i.state.unsubscribe()},this.onTransition=function(e){i.state=e},this.state=new s(this.onTransition,e,t,n,r,o)}}(),s=function(){function e(e,t,n,r,o,i,s){var a=this;this.onTransition=e,this.logger=t,this.headers=n,this.nextSubscribeStrategy=r,this.listeners=o,this.retryResolution=i,this.initialEventId=s;var l=s;t.verbose("ResumingSubscription: transitioning to OpeningSubscriptionState"),l&&(n["Last-Event-Id"]=l,t.verbose("ResumingSubscription: initialEventId is "+l)),this.underlyingSubscription=r({onEnd:function(n){e(new h(t,o,n))},onError:function(s){e(new c(s,e,t,n,o,r,i,l))},onEvent:function(e){l=e.eventId,o.onEvent(e)},onOpen:function(n){e(new u(t,n,o,a.underlyingSubscription,e))},onRetrying:o.onRetrying},n)}return e.prototype.unsubscribe=function(){this.onTransition(new a(this.logger)),null!=this.underlyingSubscription&&this.underlyingSubscription.unsubscribe()},e}(),u=function(){function e(e,t,n,r,o){this.logger=e,this.headers=t,this.listeners=n,this.underlyingSubscription=r,this.onTransition=o,e.verbose("ResumingSubscription: transitioning to OpenSubscriptionState"),n.onOpen(t)}return e.prototype.unsubscribe=function(){this.onTransition(new a(this.logger)),this.underlyingSubscription.unsubscribe()},e}(),c=function(){function e(e,t,n,i,s,c,a,d){var f=this;this.onTransition=t,this.logger=n,this.headers=i,this.listeners=s,this.nextSubscribeStrategy=c,this.retryResolution=a,this.timeout=-1,n.verbose("ResumingSubscription: transitioning to ResumingSubscriptionState");var p=function(e,i){s.onRetrying();var u,c=((u=e)instanceof r.ErrorResponse&&(u.headers["Request-Method"]="SUBSCRIBE"),a.attemptRetry(u));c instanceof o.Retry?f.timeout=window.setTimeout(function(){g(i)},c.waitTimeMillis):t(new l(n,s,e))},g=function(e){n.verbose("ResumingSubscription: trying to re-establish the subscription"),e&&(n.verbose("ResumingSubscription: lastEventId: "+e),i["Last-Event-Id"]=e),f.underlyingSubscription=c({onEnd:function(e){t(new h(n,s,e))},onError:function(e){p(e,d)},onEvent:function(e){d=e.eventId,s.onEvent(e)},onOpen:function(e){t(new u(n,e,s,f.underlyingSubscription,t))},onRetrying:s.onRetrying},i)};p(e,d)}return e.prototype.unsubscribe=function(){this.onTransition(new a(this.logger)),window.clearTimeout(this.timeout),null!=this.underlyingSubscription&&this.underlyingSubscription.unsubscribe()},e}(),a=function(){function e(e,t){this.logger=e,e.verbose("ResumingSubscription: transitioning to EndingSubscriptionState")}return e.prototype.unsubscribe=function(){throw new Error("Subscription is already ending")},e}(),h=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("ResumingSubscription: transitioning to EndedSubscriptionState"),t.onEnd(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}(),l=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("ResumingSubscription: transitioning to FailedSubscriptionState",n),t.onError(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);t.createRetryingStrategy=function(e,t,n){var r=o.createRetryStrategyOptionsOrDefault(e),s=new o.RetryResolution(r,n);return function(e,r){return new i(n,r,e,t,s)}};var i=function(){return function(e,t,n,r,o){var i=this;this.unsubscribe=function(){i.state.unsubscribe()},this.onTransition=function(e){i.state=e},this.state=new s(this.onTransition,e,t,n,r,o)}}(),s=function(){function e(e,t,n,r,o,i){var s=this;this.logger=t,this.headers=n,this.listeners=r,this.nextSubscribeStrategy=o,this.retryResolution=i,t.verbose("RetryingSubscription: transitioning to OpeningSubscriptionState"),this.underlyingSubscription=o({onEnd:function(n){return e(new a(t,r,n))},onError:function(s){return e(new u(s,e,t,n,r,o,i))},onEvent:r.onEvent,onOpen:function(n){return e(new c(t,r,n,s.underlyingSubscription,e))},onRetrying:r.onRetrying},n)}return e.prototype.unsubscribe=function(){throw this.underlyingSubscription.unsubscribe(),new Error("Method not implemented.")},e}(),u=function(){function e(e,t,n,i,s,u,l){var d=this;this.onTransition=t,this.logger=n,this.headers=i,this.listeners=s,this.nextSubscribeStrategy=u,this.retryResolution=l,this.timeout=-1,n.verbose("RetryingSubscription: transitioning to RetryingSubscriptionState");var f=function(e){s.onRetrying();var i,u=((i=e)instanceof r.ErrorResponse&&(i.headers["Request-Method"]="SUBSCRIBE"),l.attemptRetry(i));u instanceof o.Retry?d.timeout=window.setTimeout(function(){p()},u.waitTimeMillis):t(new h(n,s,e))},p=function(){n.verbose("RetryingSubscription: trying to re-establish the subscription");var e=u({onEnd:function(e){return t(new a(n,s,e))},onError:function(e){return f(e)},onEvent:s.onEvent,onOpen:function(r){t(new c(n,s,r,e,t))},onRetrying:s.onRetrying},i)};f(e)}return e.prototype.unsubscribe=function(){window.clearTimeout(this.timeout),this.onTransition(new a(this.logger,this.listeners))},e}(),c=function(){function e(e,t,n,r,o){this.logger=e,this.listeners=t,this.headers=n,this.underlyingSubscription=r,this.onTransition=o,e.verbose("RetryingSubscription: transitioning to OpenSubscriptionState"),t.onOpen(n)}return e.prototype.unsubscribe=function(){this.underlyingSubscription.unsubscribe(),this.onTransition(new a(this.logger,this.listeners))},e}(),a=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("RetryingSubscription: transitioning to EndedSubscriptionState"),t.onEnd(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}(),h=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("RetryingSubscription: transitioning to FailedSubscriptionState",n),t.onError(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.createTokenProvidingStrategy=function(e,t,n){return n?function(r,i){return new o(t,r,i,n,e)}:e};var o=function(){function e(e,t,n,r,o){var u=this;this.logger=e,this.listeners=t,this.headers=n,this.tokenProvider=r,this.nextSubscribeStrategy=o,this.unsubscribe=function(){u.state.unsubscribe(),u.state=new s(u.logger)},this.state=new i(e,n,o),this.subscribe()}return e.prototype.subscribe=function(){var e=this;this.tokenProvider.fetchToken().then(function(t){var n=Object.assign({},e.listeners);e.state.subscribe(t,{onEnd:function(t){e.state=new s(e.logger),n.onEnd(t)},onError:function(r){e.isTokenExpiredError(r)?(e.tokenProvider.clearToken(t),e.subscribe()):(e.state=new s(e.logger),n.onError(r))},onEvent:e.listeners.onEvent,onOpen:e.listeners.onOpen})}).catch(function(t){e.logger.debug("TokenProvidingSubscription: error when fetching token:",t),e.state=new s(e.logger),e.listeners.onError(t)})},e.prototype.isTokenExpiredError=function(e){return e instanceof r.ErrorResponse&&401===e.statusCode&&"authentication/expired"===e.info},e}(),i=function(){function e(e,t,n){this.logger=e,this.headers=t,this.nextSubscribeStrategy=n,e.verbose("TokenProvidingSubscription: transitioning to ActiveState")}return e.prototype.subscribe=function(e,t){var n=this;this.putTokenIntoHeader(e),this.underlyingSubscription=this.nextSubscribeStrategy({onEnd:function(e){n.logger.verbose("TokenProvidingSubscription: subscription ended"),t.onEnd(e)},onError:function(e){n.logger.verbose("TokenProvidingSubscription: subscription errored:",e),t.onError(e)},onEvent:t.onEvent,onOpen:function(e){n.logger.verbose("TokenProvidingSubscription: subscription opened"),t.onOpen(e)},onRetrying:t.onRetrying},this.headers)},e.prototype.unsubscribe=function(){null!=this.underlyingSubscription&&this.underlyingSubscription.unsubscribe()},e.prototype.putTokenIntoHeader=function(e){this.headers.Authorization="Bearer "+e,this.logger.verbose("TokenProvidingSubscription: token fetched: "+e)},e}(),s=function(){function e(e){this.logger=e,e.verbose("TokenProvidingSubscription: transitioning to InactiveState")}return e.prototype.subscribe=function(e,t){this.logger.verbose("TokenProvidingSubscription: subscribe called in Inactive state; doing nothing")},e.prototype.unsubscribe=function(){this.logger.verbose("TokenProvidingSubscription: unsubscribe called in Inactive state; doing nothing")},e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createTransportStrategy=function(e,t,n){return function(n,r){return t.subscribe(e,n,r)}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HOST_BASE="pusherplatform.io"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.BaseClient=r.BaseClient;var o=n(9);t.HOST_BASE=o.HOST_BASE;var i=n(15);t.Instance=i.default;var s=n(1);t.ConsoleLogger=s.ConsoleLogger,t.EmptyLogger=s.EmptyLogger;var u=n(0);t.ErrorResponse=u.ErrorResponse,t.NetworkError=u.NetworkError,t.responseToHeadersObject=u.responseToHeadersObject,t.XhrReadyState=u.XhrReadyState;var c=n(4);t.executeNetworkRequest=c.executeNetworkRequest,t.sendRawRequest=c.sendRawRequest;var a=n(5);t.createResumingStrategy=a.createResumingStrategy;var h=n(2);t.createRetryStrategyOptionsOrDefault=h.createRetryStrategyOptionsOrDefault,t.DoNotRetry=h.DoNotRetry,t.Retry=h.Retry,t.RetryResolution=h.RetryResolution;var l=n(6);t.createRetryingStrategy=l.createRetryingStrategy;var d=n(7);t.createTokenProvidingStrategy=d.createTokenProvidingStrategy;var f=n(8);t.createTransportStrategy=f.createTransportStrategy,t.default={BaseClient:r.BaseClient,ConsoleLogger:s.ConsoleLogger,EmptyLogger:s.EmptyLogger,Instance:i.default}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.subscribeStrategyListenersFromSubscriptionListeners=function(e){return{onEnd:e.onEnd,onError:e.onError,onEvent:e.onEvent,onOpen:e.onOpen,onRetrying:e.onRetrying}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.replaceMissingListenersWithNoOps=function(e){return{onEnd:e.onEnd||function(e){},onError:e.onError||function(e){},onEvent:e.onEvent||function(e){},onOpen:e.onOpen||function(e){},onRetrying:e.onRetrying||function(){},onSubscribe:e.onSubscribe||function(){}}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0);!function(e){e[e.UNOPENED=0]="UNOPENED",e[e.OPENING=1]="OPENING",e[e.OPEN=2]="OPEN",e[e.ENDING=3]="ENDING",e[e.ENDED=4]="ENDED"}(r=t.HttpTransportState||(t.HttpTransportState={}));var i=function(){function e(e,t){var n=this;return this.gotEOS=!1,this.lastNewlineIndex=0,this.state=r.UNOPENED,this.xhr=e,this.listeners=t,this.xhr.onreadystatechange=function(){switch(n.xhr.readyState){case o.XhrReadyState.UNSENT:case o.XhrReadyState.OPENED:case o.XhrReadyState.HEADERS_RECEIVED:n.assertStateIsIn(r.OPENING);break;case o.XhrReadyState.LOADING:n.onLoading();break;case o.XhrReadyState.DONE:n.onDone()}},this.state=r.OPENING,this.xhr.send(),this}return e.prototype.unsubscribe=function(){this.state=r.ENDED,this.xhr.abort(),this.listeners.onEnd&&this.listeners.onEnd(null)},e.prototype.onLoading=function(){if(this.assertStateIsIn(r.OPENING,r.OPEN,r.ENDING),200===this.xhr.status){this.state===r.OPENING&&(this.state=r.OPEN,window.console.log(o.responseToHeadersObject(this.xhr.getAllResponseHeaders())),this.listeners.onOpen&&this.listeners.onOpen(o.responseToHeadersObject(this.xhr.getAllResponseHeaders()))),this.assertStateIsIn(r.OPEN);var e=this.onChunk();this.assertStateIsIn(r.OPEN,r.ENDING),e&&(this.state=r.ENDED,e instanceof o.ErrorResponse&&204!==e.statusCode&&this.listeners.onError&&this.listeners.onError(e))}},e.prototype.onDone=function(){if(200===this.xhr.status){this.state===r.OPENING&&(this.state=r.OPEN,this.listeners.onOpen&&this.listeners.onOpen(o.responseToHeadersObject(this.xhr.getAllResponseHeaders()))),this.assertStateIsIn(r.OPEN,r.ENDING);var e=this.onChunk();e?(this.state=r.ENDED,204===e.statusCode?this.listeners.onEnd&&this.listeners.onEnd(null):this.listeners.onError&&this.listeners.onError(e)):this.state<=r.ENDING?this.listeners.onError&&this.listeners.onError(new Error("HTTP response ended without receiving EOS message")):this.listeners.onEnd&&this.listeners.onEnd(null)}else{if(this.assertStateIsIn(r.OPENING,r.OPEN,r.ENDED),this.state===r.ENDED)return;0===this.xhr.status?this.listeners.onError&&this.listeners.onError(new o.NetworkError("Connection lost.")):this.listeners.onError&&this.listeners.onError(o.ErrorResponse.fromXHR(this.xhr))}},e.prototype.onChunk=function(){this.assertStateIsIn(r.OPEN);var e=this.xhr.responseText,t=e.lastIndexOf("\n");if(t>this.lastNewlineIndex){var n=e.slice(this.lastNewlineIndex,t).split("\n");this.lastNewlineIndex=t;for(var o=0,i=n;o<i.length;o++){var s=i[o];if(0!==s.length){var u=JSON.parse(s),c=this.onMessage(u);if(null!=c)return c}}}},e.prototype.assertStateIsIn=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!t.some(function(t){return t===e.state})){var o=t.map(function(e){return r[e]}).join(", "),i=r[this.state];window.console.warn("Expected this.state to be one of ["+o+"] but it is "+i)}},e.prototype.onMessage=function(e){switch(this.assertStateIsIn(r.OPEN),this.verifyMessage(e),e[0]){case 0:return null;case 1:return this.onEventMessage(e);case 255:return this.onEOSMessage(e);default:return new Error("Unknown Message: "+JSON.stringify(e))}},e.prototype.onEventMessage=function(e){if(this.assertStateIsIn(r.OPEN),4!==e.length)return new Error("Event message has "+e.length+" elements (expected 4)");e[0];var t=e[1],n=e[2],o=e[3];return"string"!=typeof t?new Error("Invalid event ID in message: "+JSON.stringify(e)):"object"!=typeof n||Array.isArray(n)?new Error("Invalid event headers in message: "+JSON.stringify(e)):(this.listeners.onEvent&&this.listeners.onEvent({body:o,headers:n,eventId:t}),null)},e.prototype.onEOSMessage=function(e){if(this.assertStateIsIn(r.OPEN),4!==e.length)return new Error("EOS message has "+e.length+" elements (expected 4)");e[0];var t=e[1],n=e[2],i=e[3];return"number"!=typeof t?new Error("Invalid EOS Status Code"):"object"!=typeof n||Array.isArray(n)?new Error("Invalid EOS ElementsHeaders"):(this.state=r.ENDING,new o.ErrorResponse(t,n,i))},e.prototype.verifyMessage=function(e){return this.gotEOS?new Error("Got another message after EOS message"):Array.isArray(e)?e.length<1?new Error("Message is empty array"):void 0:new Error("Message is not an array")},e}(),s=function(){function e(e,t){void 0===t&&(t=!0),this.baseURL=(t?"https":"http")+"://"+e}return e.prototype.request=function(e){return this.createXHR(this.baseURL,e)},e.prototype.subscribe=function(e,t,n){var r={headers:n,method:"SUBSCRIBE",path:e};return new i(this.createXHR(this.baseURL,r),t)},e.prototype.createXHR=function(e,t){var n=new window.XMLHttpRequest,r=e+"/"+t.path.replace(/^\/+/,"");if(n.open(t.method.toUpperCase(),r,!0),n=this.setJSONHeaderIfAppropriate(n,t),t.jwt&&n.setRequestHeader("authorization","Bearer "+t.jwt),t.headers)for(var o in t.headers)t.headers.hasOwnProperty(o)&&n.setRequestHeader(o,t.headers[o]);return n},e.prototype.setJSONHeaderIfAppropriate=function(e,t){return t.json&&e.setRequestHeader("content-type","application/json"),e},e}();t.default=s},function(e,t,n){var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(0);!function(e){e[e.Connecting=0]="Connecting",e[e.Open=1]="Open",e[e.Closing=2]="Closing",e[e.Closed=3]="Closed"}(o=t.WSReadyState||(t.WSReadyState={}));var s=function(){function e(){this.subscriptions={}}return e.prototype.add=function(e,t,n,r){return this.subscriptions[e]={headers:r,listeners:n,path:t},e},e.prototype.has=function(e){return void 0!==this.subscriptions[e]},e.prototype.isEmpty=function(){return 0===Object.keys(this.subscriptions).length},e.prototype.remove=function(e){return delete this.subscriptions[e]},e.prototype.get=function(e){return this.subscriptions[e]},e.prototype.getAll=function(){return this.subscriptions},e.prototype.getAllAsArray=function(){var e=this;return Object.keys(this.subscriptions).map(function(t){return r({subID:parseInt(t,10)},e.subscriptions[parseInt(t,10)])})},e.prototype.removeAll=function(){this.subscriptions={}},e}(),u=function(){function e(e,t){this.wsTransport=e,this.subID=t}return e.prototype.unsubscribe=function(){this.wsTransport.unsubscribe(this.subID)},e}(),c=function(){function e(e,t){this.webSocketPath="/ws",this.forcedClose=!1,this.closedError=null,this.lastSentPingID=null,this.baseURL="wss://"+e+this.webSocketPath,this.lastSubscriptionID=0,this.logger=t,this.subscriptions=new s,this.pendingSubscriptions=new s,this.connect()}return e.prototype.subscribe=function(e,t,n){this.tryReconnectIfNeeded();var r=this.lastSubscriptionID++;return this.socket.readyState!==o.Open?(this.pendingSubscriptions.add(r,e,t,n),new u(this,r)):(this.subscriptions.add(r,e,t,n),this.sendMessage(this.getMessage(100,r,e,n)),new u(this,r))},e.prototype.unsubscribe=function(e){this.sendMessage(this.getMessage(198,e));var t=this.subscriptions.get(e);t.listeners.onEnd&&t.listeners.onEnd(null),this.subscriptions.remove(e)},e.prototype.connect=function(){var e=this;this.forcedClose=!1,this.closedError=null,this.socket=new window.WebSocket(this.baseURL),this.socket.onopen=function(t){e.pendingSubscriptions.getAllAsArray().forEach(function(t){var n=t.subID,r=t.path,o=t.listeners,i=t.headers;e.subscribePending(r,o,i,n)}),e.pendingSubscriptions.removeAll(),e.pingInterval=window.setInterval(function(){if(!e.pongTimeout){var t=(new Date).getTime();1e4>t-e.lastMessageReceivedTimestamp||(e.sendMessage(e.getMessage(16,t)),e.lastSentPingID=t,e.pongTimeout=window.setTimeout(function(){1e4>(new Date).getTime()-e.lastMessageReceivedTimestamp?e.pongTimeout=null:e.close(new i.NetworkError("Pong response wasn't received within timeout"))},1e4))}},3e4)},this.socket.onmessage=function(t){return e.receiveMessage(t)},this.socket.onerror=function(t){e.logger.verbose("WebSocket encountered an error event",t)},this.socket.onclose=function(t){e.logger.verbose("WebSocket encountered a close event",t);var n=e.subscriptions.getAllAsArray().concat(e.pendingSubscriptions.getAllAsArray());e.subscriptions.removeAll(),e.pendingSubscriptions.removeAll(),n.forEach(function(t){t.listeners.onError&&t.listeners.onError(e.closedError)}),e.tryReconnectIfNeeded()}},e.prototype.close=function(e){if(this.socket instanceof window.WebSocket){var t=function(e){};null!=this.socket.onclose&&(t=this.socket.onclose.bind(this)),this.socket.onclose=function(){},this.socket.onerror=function(){},this.socket.onmessage=function(){},this.socket.onopen=function(){},this.forcedClose=!0,this.closedError=e,this.socket.close(),window.clearTimeout(this.pingInterval),window.clearTimeout(this.pongTimeout),this.pongTimeout=null,this.pingInterval=null,this.lastSentPingID=null,t()}},e.prototype.tryReconnectIfNeeded=function(){(this.forcedClose||this.socket.readyState===o.Closed)&&this.connect()},e.prototype.subscribePending=function(e,t,n,r){void 0!==r?(this.subscriptions.add(r,e,t,n),this.sendMessage(this.getMessage(100,r,e,n))):this.logger.debug("Subscription to path "+e+" has an undefined ID")},e.prototype.getMessage=function(e,t,n,r){return[e,t,n,r]},e.prototype.sendMessage=function(e){this.socket.readyState===o.Open?this.socket.send(JSON.stringify(e)):this.logger.warn("Can't send on socket in \""+o[this.socket.readyState]+'" state')},e.prototype.subscription=function(e){return this.subscriptions.get(e)},e.prototype.receiveMessage=function(e){var t;this.lastMessageReceivedTimestamp=(new Date).getTime();try{t=JSON.parse(e.data)}catch(t){return void this.close(new i.ProtocolError("Message is not valid JSON format. Getting "+e.data))}var n=this.validateMessage(t);if(n)this.close(n);else{var r=t.shift();switch(r){case 17:return void this.onPongMessage(t);case 16:return void this.onPingMessage(t);case 99:return void this.onCloseMessage(t)}var o=t.shift(),s=this.subscription(o);if(s){var u=s.listeners;switch(r){case 101:this.onOpenMessage(t,o,u);break;case 102:this.onEventMessage(t,u);break;case 199:this.onEOSMessage(t,o,u);break;default:this.close(new i.ProtocolError("Received unknown type of message."))}}else this.close(new Error("Received message for unknown subscription ID: "+o))}},e.prototype.validateMessage=function(e){return Array.isArray(e)?e.length<1?new i.ProtocolError("Message is empty array: "+JSON.stringify(e)):null:new i.ProtocolError("Message is expected to be an array. Getting: "+JSON.stringify(e))},e.prototype.onOpenMessage=function(e,t,n){n.onOpen&&n.onOpen(e[1])},e.prototype.onEventMessage=function(e,t){if(3===e.length){var n=e[0],r=e[1],o=e[2];"string"==typeof n?"object"!=typeof r||Array.isArray(r)?t.onError&&t.onError(new i.ProtocolError("Invalid event headers in message: "+JSON.stringify(e))):t.onEvent&&t.onEvent({eventId:n,headers:r,body:o}):t.onError&&t.onError(new i.ProtocolError("Invalid event ID in message: "+JSON.stringify(e)))}else t.onError&&t.onError(new i.ProtocolError("Event message has "+e.length+" elements (expected 4)"))},e.prototype.onEOSMessage=function(e,t,n){if(this.subscriptions.remove(t),3===e.length){var r=e[0],o=e[1],s=e[2];"number"==typeof r?"object"!=typeof o||Array.isArray(o)?n.onError&&n.onError(new i.ProtocolError("Invalid EOS ElementsHeaders")):204!==r?n.onError&&n.onError(new i.ErrorResponse(r,o,s)):n.onEnd&&n.onEnd(null):n.onError&&n.onError(new i.ProtocolError("Invalid EOS Status Code"))}else n.onError&&n.onError(new i.ProtocolError("EOS message has "+e.length+" elements (expected 4)"))},e.prototype.onCloseMessage=function(e){var t=e[0],n=e[1],r=e[2];if("number"==typeof t)if("object"!=typeof n||Array.isArray(n))this.close(new i.ProtocolError("Close message: Invalid EOS ElementsHeaders"));else{var o={error:r.error||"network_error",error_description:r.error_description||"Network error"};this.close(new i.ErrorResponse(t,n,o))}else this.close(new i.ProtocolError("Close message: Invalid EOS Status Code"))},e.prototype.onPongMessage=function(e){var t=e[0];this.lastSentPingID!==t&&this.close(new i.ProtocolError("Received pong with ID "+t+" but last sent ping ID was "+this.lastSentPingID)),window.clearTimeout(this.pongTimeout),delete this.pongTimeout,this.lastSentPingID=null},e.prototype.onPingMessage=function(e){var t=e[0];this.sendMessage(this.getMessage(17,t))},e}();t.default=c},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(9),i=n(1),s=function(){function e(e){if(!e.locator)throw new Error("Expected `locator` property in Instance options!");var t=e.locator.split(":");if(3!==t.length)throw new Error("The instance locator supplied is invalid. Did you copy it correctly from the Pusher dashboard?");if(!e.serviceName)throw new Error("Expected `serviceName` property in Instance options!");if(!e.serviceVersion)throw new Error("Expected `serviceVersion` property in Instance options!");this.platformVersion=t[0],this.cluster=t[1],this.id=t[2],this.serviceName=e.serviceName,this.serviceVersion=e.serviceVersion,this.host=e.host||this.cluster+"."+o.HOST_BASE,this.logger=e.logger||new i.ConsoleLogger,this.client=e.client||new r.BaseClient({encrypted:e.encrypted,host:this.host,logger:this.logger}),this.tokenProvider=e.tokenProvider}return e.prototype.request=function(e,t){return e.path=this.absPath(e.path),null!=e.headers&&void 0!==e.headers||(e.headers={}),e.tokenProvider=e.tokenProvider||this.tokenProvider,this.client.request(e,t)},e.prototype.subscribeNonResuming=function(e){var t=e.headers||{},n=e.retryStrategyOptions||{},r=e.tokenProvider||this.tokenProvider;return this.client.subscribeNonResuming(this.absPath(e.path),t,e.listeners,n,r)},e.prototype.subscribeResuming=function(e){var t=e.headers||{},n=e.retryStrategyOptions||{},r=e.tokenProvider||this.tokenProvider;return this.client.subscribeResuming(this.absPath(e.path),t,e.listeners,n,e.initialEventId,r)},e.prototype.absPath=function(e){return("/services/"+this.serviceName+"/"+this.serviceVersion+"/"+this.id+"/"+e).replace(/\/+/g,"/").replace(/\/+$/,"")},e}();t.default=s}])},e.exports=n()}(e={exports:{}},e.exports),e.exports);(t=n)&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")&&t.default;var r=n.BaseClient,o=n.HOST_BASE,i=n.Instance,s=n.sendRawRequest;function u(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function c(e){return function t(n){return 0===arguments.length||u(n)?t:e.apply(this,arguments)}}function a(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return u(n)?t:c(function(t){return e(n,t)});default:return u(n)&&u(r)?t:u(n)?c(function(t){return e(t,r)}):u(r)?c(function(t){return e(n,t)}):e(n,r)}}}function h(e,t){var n;e=e||[],t=t||[];var r=e.length,o=t.length,i=[];for(n=0;n<r;)i[i.length]=e[n],n+=1;for(n=0;n<o;)i[i.length]=t[n],n+=1;return i}function l(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,o){return t.apply(this,arguments)};case 5:return function(e,n,r,o,i){return t.apply(this,arguments)};case 6:return function(e,n,r,o,i,s){return t.apply(this,arguments)};case 7:return function(e,n,r,o,i,s,u){return t.apply(this,arguments)};case 8:return function(e,n,r,o,i,s,u,c){return t.apply(this,arguments)};case 9:return function(e,n,r,o,i,s,u,c,a){return t.apply(this,arguments)};case 10:return function(e,n,r,o,i,s,u,c,a,h){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function d(e,t,n){return function(){for(var r=[],o=0,i=e,s=0;s<t.length||o<arguments.length;){var c;s<t.length&&(!u(t[s])||o>=arguments.length)?c=t[s]:(c=arguments[o],o+=1),r[s]=c,u(c)||(i-=1),s+=1}return i<=0?n.apply(this,r):l(i,d(e,r,n))}}var f=a(function(e,t){return 1===e?c(t):l(e,d(e,[],t))});function p(e){return function t(n,r,o){switch(arguments.length){case 0:return t;case 1:return u(n)?t:a(function(t,r){return e(n,t,r)});case 2:return u(n)&&u(r)?t:u(n)?a(function(t,n){return e(t,r,n)}):u(r)?a(function(t,r){return e(n,t,r)}):c(function(t){return e(n,r,t)});default:return u(n)&&u(r)&&u(o)?t:u(n)&&u(r)?a(function(t,n){return e(t,n,o)}):u(n)&&u(o)?a(function(t,n){return e(t,r,n)}):u(r)&&u(o)?a(function(t,r){return e(n,t,r)}):u(n)?c(function(t){return e(t,r,o)}):u(r)?c(function(t){return e(n,t,o)}):u(o)?c(function(t){return e(n,r,t)}):e(n,r,o)}}}var g=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function m(e,t,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),o=r.pop();if(!g(o)){for(var i=0;i<e.length;){if("function"==typeof o[e[i]])return o[e[i]].apply(o,r);i+=1}if(function(e){return"function"==typeof e["@@transducer/step"]}(o))return t.apply(null,r)(o)}return n.apply(this,arguments)}}var b={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}},v=a(function(e,t){return t>e?t:e});function y(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}function S(e){return"[object String]"===Object.prototype.toString.call(e)}var w=c(function(e){return!!g(e)||!!e&&("object"==typeof e&&(!S(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))}),E=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();function I(e){return new E(e)}var k=a(function(e,t){return l(e.length,function(){return e.apply(t,arguments)})});function R(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function T(e,t,n,r){return e["@@transducer/result"](n[r](k(e["@@transducer/step"],e),t))}var O="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function P(e,t,n){if("function"==typeof e&&(e=I(e)),w(n))return function(e,t,n){for(var r=0,o=n.length;r<o;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return T(e,t,n,"fantasy-land/reduce");if(null!=n[O])return R(e,t,n[O]());if("function"==typeof n.next)return R(e,t,n);if("function"==typeof n.reduce)return T(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var N=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=b.init,e.prototype["@@transducer/result"]=b.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),U=a(function(e,t){return new N(e,t)});function _(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var A=Object.prototype.toString,C=function(){return"[object Arguments]"===A.call(arguments)?function(e){return"[object Arguments]"===A.call(e)}:function(e){return _("callee",e)}},M=!{toString:null}.propertyIsEnumerable("toString"),j=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],D=function(){return arguments.propertyIsEnumerable("length")}(),x=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},q=c("function"!=typeof Object.keys||D?function(e){if(Object(e)!==e)return[];var t,n,r=[],o=D&&C(e);for(t in e)!_(t,e)||o&&"length"===t||(r[r.length]=t);if(M)for(n=j.length-1;n>=0;)_(t=j[n],e)&&!x(r,t)&&(r[r.length]=t),n-=1;return r}:function(e){return Object(e)!==e?[]:Object.keys(e)}),B=a(m(["fantasy-land/map","map"],U,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return f(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return P(function(n,r){return n[r]=e(t[r]),n},{},q(t));default:return y(e,t)}})),L=a(function(e,t){for(var n=t,r=0;r<e.length;){if(null==n)return;n=n[e[r]],r+=1}return n}),H=a(function(e,t){return L([e],t)}),F=p(P),G=a(function(e,t){return h(t,[e])}),J=c(function(e){for(var t=q(e),n=t.length,r=[],o=0;o<n;)r[o]=e[t[o]],o+=1;return r});var z=c(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});function X(e,t){return function(){return t.call(this,e.apply(this,arguments))}}function V(e,t){return function(){var n=arguments.length;if(0===n)return t();var r=arguments[n-1];return g(r)||"function"!=typeof r[e]?t.apply(this,arguments):r[e].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var W=p(V("slice",function(e,t,n){return Array.prototype.slice.call(n,e,t)})),K=c(V("tail",W(1,1/0)));function $(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return l(arguments[0].length,F(X,arguments[0],K(arguments)))}var Y=c(function(e){return S(e)?e.split("").reverse().join(""):Array.prototype.slice.call(e,0).reverse()});function Z(){if(0===arguments.length)throw new Error("compose requires at least one argument");return $.apply(this,Y(arguments))}function Q(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function ee(e,t,n){for(var r=0,o=n.length;r<o;){if(e(t,n[r]))return!0;r+=1}return!1}var te=a(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t});function ne(e,t,n,r){var o=Q(e);function i(e,t){return re(e,t,n.slice(),r.slice())}return!ee(function(e,t){return!ee(i,t,e)},Q(t),o)}function re(e,t,n,r){if(te(e,t))return!0;var o,i,s=z(e);if(s!==z(t))return!1;if(null==e||null==t)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(s){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(o=e.constructor,null==(i=String(o).match(/^function (\w*)/))?"":i[1]))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!te(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!te(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var u=n.length-1;u>=0;){if(n[u]===e)return r[u]===t;u-=1}switch(s){case"Map":return e.size===t.size&&ne(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&ne(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=q(e);if(c.length!==q(t).length)return!1;var a=n.concat([e]),h=r.concat([t]);for(u=c.length-1;u>=0;){var l=c[u];if(!_(l,t)||!re(t[l],e[l],a,h))return!1;u-=1}return!0}var oe=a(function(e,t){return re(e,t,[],[])});function ie(e,t){return function(e,t,n){var r,o;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(r=1/t;n<e.length;){if(0===(o=e[n])&&1/o===r)return n;n+=1}return-1}if(t!=t){for(;n<e.length;){if("number"==typeof(o=e[n])&&o!=o)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if(oe(e[n],t))return n;n+=1}return-1}(t,e,0)>=0}function se(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}var ue=function(e){return(e<10?"0":"")+e},ce="function"==typeof Date.prototype.toISOString?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+ue(e.getUTCMonth()+1)+"-"+ue(e.getUTCDate())+"T"+ue(e.getUTCHours())+":"+ue(e.getUTCMinutes())+":"+ue(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};function ae(e){return"[object Object]"===Object.prototype.toString.call(e)}var he=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=b.init,e.prototype["@@transducer/result"]=b.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),le=a(m(["filter"],a(function(e,t){return new he(e,t)}),function(e,t){return ae(t)?P(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{},q(t)):function(e,t){for(var n=0,r=t.length,o=[];n<r;)e(t[n])&&(o[o.length]=t[n]),n+=1;return o}(e,t)})),de=a(function(e,t){return le((n=e,function(){return!n.apply(this,arguments)}),t);var n});var fe=c(function(e){return function e(t,n){var r=function(r){var o=n.concat([t]);return ie(r,o)?"<Circular>":e(r,o)},o=function(e,t){return y(function(t){return se(t)+": "+r(e[t])},t.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+y(r,t).join(", ")+"))";case"[object Array]":return"["+y(r,t).concat(o(t,de(function(e){return/^\d+$/.test(e)},q(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):se(ce(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":se(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var i=t.toString();if("[object Object]"!==i)return i}return"{"+o(t,q(t)).join(", ")+"}"}}(e,[])}),pe=a(ie),ge=function(){function e(e,t,n,r){this.valueFn=e,this.valueAcc=t,this.keyFn=n,this.xf=r,this.inputs={}}return e.prototype["@@transducer/init"]=b.init,e.prototype["@@transducer/result"]=function(e){var t;for(t in this.inputs)if(_(t,this.inputs)&&(e=this.xf["@@transducer/step"](e,this.inputs[t]))["@@transducer/reduced"]){e=e["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n=this.keyFn(t);return this.inputs[n]=this.inputs[n]||[n,this.valueAcc],this.inputs[n][1]=this.valueFn(this.inputs[n][1],t),e},e}(),me=d(4,[],m([],d(4,[],function(e,t,n,r){return new ge(e,t,n,r)}),function(e,t,n,r){return P(function(r,o){var i=n(o);return r[i]=e(_(i,r)?r[i]:t,o),r},{},r)})),be=a(function(e,t){for(var n=[],r=0,o=e.length;r<o;)ie(e[r],t)||ie(e[r],n)||(n[n.length]=e[r]),r+=1;return n}),ve=a(function(e,t){var n=e<0?t.length+e:e;return S(t)?t.charAt(n):t[n]}),ye=c(function(e){return null!=e&&"function"==typeof e["fantasy-land/empty"]?e["fantasy-land/empty"]():null!=e&&null!=e.constructor&&"function"==typeof e.constructor["fantasy-land/empty"]?e.constructor["fantasy-land/empty"]():null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():g(e)?[]:S(e)?"":ae(e)?{}:C(e)?function(){return arguments}():void 0}),Se=a(V("forEach",function(e,t){for(var n=t.length,r=0;r<n;)e(t[r]),r+=1;return t})),we=a(function(e,t){for(var n=q(t),r=0;r<n.length;){var o=n[r];e(t[o],o,t),r+=1}return t}),Ee=a(_),Ie=ve(0);function ke(e){return e}var Re=c(ke),Te=me(function(e,t){return t},null),Oe=function(){function e(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return e.prototype.add=function(e){return!Pe(e,!0,this)},e.prototype.has=function(e){return Pe(e,!1,this)},e}();function Pe(e,t,n){var r,o=typeof e;switch(o){case"string":case"number":return 0===e&&1/e==-1/0?!!n._items["-0"]||(t&&(n._items["-0"]=!0),!1):null!==n._nativeSet?t?(r=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===r):n._nativeSet.has(e):o in n._items?e in n._items[o]||(t&&(n._items[o][e]=!0),!1):(t&&(n._items[o]={},n._items[o][e]=!0),!1);case"boolean":if(o in n._items){var i=e?1:0;return!!n._items[o][i]||(t&&(n._items[o][i]=!0),!1)}return t&&(n._items[o]=e?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?t?(r=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===r):n._nativeSet.has(e):o in n._items?!!ie(e,n._items[o])||(t&&n._items[o].push(e),!1):(t&&(n._items[o]=[e]),!1);case"undefined":return!!n._items[o]||(t&&(n._items[o]=!0),!1);case"object":if(null===e)return!!n._items.null||(t&&(n._items.null=!0),!1);default:return(o=Object.prototype.toString.call(e))in n._items?!!ie(e,n._items[o])||(t&&n._items[o].push(e),!1):(t&&(n._items[o]=[e]),!1)}}var Ne=a(function(e,t){for(var n,r,o=new Oe,i=[],s=0;s<t.length;)n=e(r=t[s]),o.add(n)&&i.push(r),s+=1;return i})(Re),Ue=a(function(e,t){return f(e+1,function(){var n,r=arguments[e];if(null!=r&&(n=r[t],"[object Function]"===Object.prototype.toString.call(n)))return r[t].apply(r,Array.prototype.slice.call(arguments,0,e));throw new TypeError(fe(r)+' does not have a method named "'+t+'"')})}),_e=c(function(e){return null!=e&&oe(e,ye(e))}),Ae=Ue(1,"join");var Ce=c(function(e){return null!=e&&(t=e.length,"[object Number]"===Object.prototype.toString.call(t))?e.length:NaN;var t});var Me=a(function(e,t){for(var n={},r=0;r<e.length;)e[r]in t&&(n[e[r]]=t[e[r]]),r+=1;return n}),je=a(function(e,t){return Array.prototype.slice.call(t,0).sort(e)}),De=Ue(1,"split"),xe=c(function(e){var t=[];for(var n in e)_(n,e)&&(t[t.length]=[n,e[n]]);return t}),qe="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Be=(String.prototype.trim,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),Le=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},He=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ge=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Je=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ze=$(le(function(e){return void 0!==e}),xe,B(function(e){var t=Je(e,2),n=t[0],r=t[1];return n+"="+encodeURIComponent(r)}),Ae("&")),Xe=function(e,t,n){var r=void 0===n?"undefined":Be(n);if(r!==t)throw new TypeError("expected "+e+" to be of type "+t+" but was of type "+r)},Ve=function(e,t,n){Xe(e,"object",n),we(function(n,r){return Xe(e+"."+r,t,n)},n)},We=function(){return Math.floor(Date.now()/1e3)},Ke=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.url,r=t.queryParams,o=t.headers;Le(this,e),Xe("url","string",n),r&&Xe("queryParams","object",r),o&&Xe("headers","object",o),this.url=n,this.queryParams=r,this.headers=o,this.fetchToken=this.fetchToken.bind(this),this.fetchFreshToken=this.fetchFreshToken.bind(this),this.cacheIsStale=this.cacheIsStale.bind(this),this.cache=this.cache.bind(this),this.clearCache=this.clearCache.bind(this),this.setUserId=this.setUserId.bind(this)}return He(e,[{key:"fetchToken",value:function(){var e=this;return this.cacheIsStale()?(this.req||this.fetchFreshToken()).then(function(t){var n=t.token,r=t.expiresIn;return e.cache(n,r),n}):Promise.resolve(this.cachedToken)}},{key:"fetchFreshToken",value:function(){var e,t,n=this;return this.req=s({method:"POST",url:(e=Fe({user_id:this.userId},this.queryParams),t=this.url,t+(pe("?",t)?"&":"?")+ze(e)),body:ze({grant_type:"client_credentials"}),headers:Fe({"content-type":"application/x-www-form-urlencoded"},this.headers)}).then(function(e){var t=JSON.parse(e),r=t.access_token,o=t.expires_in;return delete n.req,{token:r,expiresIn:o}}).catch(function(e){throw delete n.req,e}),this.req}},{key:"cacheIsStale",value:function(){return!this.cachedToken||We()>this.cacheExpiresAt}},{key:"cache",value:function(e,t){this.cachedToken=e,this.cacheExpiresAt=We()+t}},{key:"clearCache",value:function(){this.cachedToken=void 0,this.cacheExpiresAt=void 0}},{key:"setUserId",value:function(e){this.clearCache(),this.userId=e}}]),e}(),$e=function(e){return{createdAt:e.created_at,createdByUserId:e.created_by_id,id:e.id,isPrivate:e.private,name:e.name,updatedAt:e.updated_at,customData:e.custom_data,deletedAt:e.deleted_at}},Ye=function(e){return{avatarURL:e.avatar_url,createdAt:e.created_at,customData:e.custom_data,id:e.id,name:e.name,updatedAt:e.updated_at}},Ze=function(e){return{id:e.id,senderId:e.user_id,roomId:e.room_id,text:e.text,createdAt:e.created_at,updatedAt:e.updated_at,attachment:e.attachment&&et(e.attachment)}},Qe=function(e){return{position:e.position,updatedAt:e.updated_at,userId:e.user_id,roomId:e.room_id,type:e.cursor_type}},et=function(e){return{link:e.resource_link,type:e.type,name:e.name}},tt=function(){function e(){Le(this,e),this.pendingSets=[],this.pendingGets=[],this.initialize=this.initialize.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.pop=this.pop.bind(this),this.update=this.update.bind(this),this.snapshot=this.snapshot.bind(this),this.getSync=this.getSync.bind(this)}return He(e,[{key:"initialize",value:function(e){var t=this;this.store=e,Se(function(e){var n=e.key,r=e.value;(0,e.resolve)(t.store[n]=r)},this.pendingSets),Se(function(e){var n=e.key;(0,e.resolve)(t.store[n])},this.pendingGets)}},{key:"set",value:function(e,t){var n=this;return this.store?(this.store[e]=t,Promise.resolve(t)):new Promise(function(r){n.pendingSets.push({key:e,value:t,resolve:r})})}},{key:"get",value:function(e){var t=this;return this.store?Promise.resolve(this.store[e]):new Promise(function(n){t.pendingGets.push({key:e,resolve:n})})}},{key:"pop",value:function(e){var t=this;return this.get(e).then(function(n){return delete t.store[e],n})}},{key:"update",value:function(e,t){var n=this;return this.get(e).then(function(r){return n.set(e,t(r))})}},{key:"snapshot",value:function(){return this.store||{}}},{key:"getSync",value:function(e){return this.store?this.store[e]:void 0}}]),e}(),nt=function(){function e(t,n){Le(this,e),this.avatarURL=t.avatarURL,this.createdAt=t.createdAt,this.customData=t.customData,this.id=t.id,this.name=t.name,this.updatedAt=t.updatedAt,this.presenceStore=n}return He(e,[{key:"presence",get:function(){return{state:this.presenceStore.getSync(this.id)||"unknown"}}}]),e}(),rt=function(){function e(t){var n=t.instance,r=t.presenceStore,o=t.logger;Le(this,e),this.instance=n,this.presenceStore=r,this.logger=o,this.reqs={},this.onSetHooks=[],this.store=new tt,this.initialize=this.initialize.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.fetchUser=this.fetchUser.bind(this),this.fetchMissingUsers=this.fetchMissingUsers.bind(this),this.fetchBasicUsers=this.fetchBasicUsers.bind(this),this.snapshot=this.snapshot.bind(this),this.getSync=this.getSync.bind(this),this.decorate=this.decorate.bind(this)}return He(e,[{key:"initialize",value:function(e){this.store.initialize(B(this.decorate,e))}},{key:"set",value:function(e,t){var n=this;return this.store.set(e,this.decorate(t)).then(function(){return Se(function(t){return t(e)},n.onSetHooks)})}},{key:"get",value:function(e){return Promise.all([this.fetchUser(e),this.presenceStore.get(e)]).then(function(e){return Je(e,1)[0]})}},{key:"fetchUser",value:function(e){var t=this;return this.fetchMissingUsers([e]).then(function(){return t.store.get(e)})}},{key:"fetchMissingUsers",value:function(e){var t=be(e,B(H("id"),J(this.store.snapshot()))),n=be(t,q(this.reqs));return Ce(n)>0&&this.fetchBasicUsers(n),Promise.all(J(Me(e,this.reqs)))}},{key:"fetchBasicUsers",value:function(e){var t,n,r,o,i,s=this,u=this.instance.request({method:"GET",path:(t="id",n=e,r="/users_by_ids",o=pe("?",r)?"":"?",i=B(function(e){return encodeURIComponent(t)+"="+encodeURIComponent(e)},n),r+o+Ae("&",i))}).then(function(t){var n=B(Ye,JSON.parse(t));return Se(function(e){return s.set(e.id,e)},n),Se(function(e){delete s.reqs[e]},e),n}).catch(function(e){throw s.logger.warn("error fetching missing users:",e),e});Se(function(e){s.reqs[e]=u},e)}},{key:"snapshot",value:function(){var e;return(e=this.store).snapshot.apply(e,arguments)}},{key:"getSync",value:function(){var e;return(e=this.store).getSync.apply(e,arguments)}},{key:"decorate",value:function(e){return e?new nt(e,this.presenceStore):void 0}}]),e}(),ot=function(){function e(t){var n=t.basicRoom,r=t.userStore,o=t.isSubscribedTo,i=t.logger;Le(this,e),this.createdAt=n.createdAt,this.createdByUserId=n.createdByUserId,this.deletedAt=n.deletedAt,this.id=n.id,this.isPrivate=n.isPrivate,this.name=n.name,this.updatedAt=n.updatedAt,this.customData=n.customData,this.userIds=[],this.userStore=r,this.isSubscribedTo=o,this.logger=i}return He(e,[{key:"users",get:function(){var e=this;if(!this.isSubscribedTo(this.id)){var t=new Error("Must be subscribed to room "+this.id+" to access users property");throw this.logger.error(t),t}return le(function(t){return pe(t.id,e.userIds)},J(this.userStore.snapshot()))}}]),e}(),it=function(){function e(t){Le(this,e),this.instance=t.instance,this.userStore=t.userStore,this.isSubscribedTo=t.isSubscribedTo,this.logger=t.logger,this.store=new tt,this.initialize=this.initialize.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.pop=this.pop.bind(this),this.addUserToRoom=this.addUserToRoom.bind(this),this.removeUserFromRoom=this.removeUserFromRoom.bind(this),this.update=this.update.bind(this),this.fetchBasicRoom=this.fetchBasicRoom.bind(this),this.snapshot=this.snapshot.bind(this),this.getSync=this.getSync.bind(this),this.decorate=this.decorate.bind(this)}return He(e,[{key:"initialize",value:function(e){this.store.initialize(B(this.decorate,e))}},{key:"set",value:function(e,t){var n=this.store.getSync(e);return n?Promise.resolve(n):this.store.set(e,this.decorate(t))}},{key:"get",value:function(e){var t=this;return this.store.get(e).then(function(n){return n||t.fetchBasicRoom(e).then(function(n){return t.set(e,n)})})}},{key:"pop",value:function(){var e;return(e=this.store).pop.apply(e,arguments)}},{key:"addUserToRoom",value:function(e,t){return Promise.all([this.store.update(e,function(e){return e.userIds=Ne(G(t,e.userIds)),e}),this.userStore.fetchMissingUsers([t])]).then(function(e){return Je(e,1)[0]})}},{key:"removeUserFromRoom",value:function(e,t){return this.store.update(e,function(e){return e.userIds=le(function(e){return e!==t},e.userIds),e})}},{key:"update",value:function(e,t){return Promise.all([this.store.update(e,function(e){for(var n in t)e[n]=t[n];return e}),this.userStore.fetchMissingUsers(t.userIds||[])]).then(function(e){return Je(e,1)[0]})}},{key:"fetchBasicRoom",value:function(e){var t=this;return this.instance.request({method:"GET",path:"/rooms/"+encodeURIComponent(e)}).then($(JSON.parse,$e)).catch(function(n){t.logger.warn("error fetching details for room "+e+":",n)})}},{key:"snapshot",value:function(){var e;return(e=this.store).snapshot.apply(e,arguments)}},{key:"getSync",value:function(){var e;return(e=this.store).getSync.apply(e,arguments)}},{key:"decorate",value:function(e){return e?new ot({basicRoom:e,userStore:this.userStore,isSubscribedTo:this.isSubscribedTo,logger:this.logger}):void 0}}]),e}(),st=function(){function e(t,n,r){Le(this,e),this.position=t.position,this.updatedAt=t.updatedAt,this.userId=t.userId,this.roomId=t.roomId,this.type=t.type,this.userStore=n,this.roomStore=r}return He(e,[{key:"user",get:function(){return this.userStore.getSync(this.userId)}},{key:"room",get:function(){return this.roomStore.getSync(this.roomId)}}]),e}(),ut=function(){function e(t){var n=t.instance,r=t.userStore,o=t.roomStore,i=t.logger;Le(this,e),this.instance=n,this.userStore=r,this.roomStore=o,this.logger=i,this.store=new tt,this.initialize=this.initialize.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getSync=this.getSync.bind(this),this.fetchBasicCursor=this.fetchBasicCursor.bind(this),this.decorate=this.decorate.bind(this)}return He(e,[{key:"initialize",value:function(e){return this.store.initialize(B(this.decorate,e))}},{key:"set",value:function(e,t,n){return Promise.all([this.store.set(ct(e,t),this.decorate(n)),this.userStore.fetchMissingUsers([e])])}},{key:"get",value:function(e,t){var n=this;return this.store.get(ct(e,t)).then(function(r){return r||n.fetchBasicCursor(e,t).then(function(r){return n.set(e,t,r)})})}},{key:"getSync",value:function(e,t){return this.store.getSync(ct(e,t))}},{key:"fetchBasicCursor",value:function(e,t){var n=this;return this.instance.request({method:"GET",path:"/cursors/0/rooms/"+encodeURIComponent(t)+"/users/"+encodeURIComponent(e)}).then(function(e){var t=JSON.parse(e);if(t)return Qe(t)}).catch(function(e){throw n.logger.warn("error fetching cursor:",e),e})}},{key:"decorate",value:function(e){return e?new st(e,this.userStore,this.roomStore):void 0}}]),e}(),ct=function(e,t){return e+"/"+t},at=2e4,ht=function(){function e(t){var n=t.hooks,r=t.instance,o=t.logger;Le(this,e),this.hooks=n,this.instance=r,this.logger=o,this.lastSentRequests={},this.timers={},this.sendThrottledRequest=this.sendThrottledRequest.bind(this),this.onIsTyping=this.onIsTyping.bind(this),this.onStarted=this.onStarted.bind(this),this.onStopped=this.onStopped.bind(this)}return He(e,[{key:"sendThrottledRequest",value:function(e){var t=this,n=Date.now(),r=this.lastSentRequests[e];return r&&n-r<1e3?Promise.resolve():(this.lastSentRequests[e]=n,this.instance.request({method:"POST",path:"/rooms/"+encodeURIComponent(e)+"/typing_indicators"}).catch(function(n){throw delete t.typingRequestSent[e],t.logger.warn("Error sending typing indicator in room "+e,n),n}))}},{key:"onIsTyping",value:function(e,t){var n=this;this.timers[e.id]||(this.timers[e.id]={}),this.timers[e.id][t.id]?clearTimeout(this.timers[e.id][t.id]):this.onStarted(e,t),this.timers[e.id][t.id]=setTimeout(function(){n.onStopped(e,t),delete n.timers[e.id][t.id]},1500)}},{key:"onStarted",value:function(e,t){this.hooks.global.onUserStartedTyping&&this.hooks.global.onUserStartedTyping(e,t),this.hooks.rooms[e.id]&&this.hooks.rooms[e.id].onUserStartedTyping&&this.hooks.rooms[e.id].onUserStartedTyping(t)}},{key:"onStopped",value:function(e,t){this.hooks.global.onUserStoppedTyping&&this.hooks.global.onUserStoppedTyping(e,t),this.hooks.rooms[e.id]&&this.hooks.rooms[e.id].onUserStoppedTyping&&this.hooks.rooms[e.id].onUserStoppedTyping(t)}}]),e}(),lt=function(){function e(t){Le(this,e),this.userId=t.userId,this.hooks=t.hooks,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.roomSubscriptions=t.roomSubscriptions,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onInitialState=this.onInitialState.bind(this),this.onAddedToRoom=this.onAddedToRoom.bind(this),this.onRemovedFromRoom=this.onRemovedFromRoom.bind(this),this.onRoomUpdated=this.onRoomUpdated.bind(this),this.onRoomDeleted=this.onRoomDeleted.bind(this)}return He(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("user subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(n){clearTimeout(e.timeout),t(n)},e.sub=e.instance.subscribeNonResuming({path:"/users",listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling user subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"initial_state":this.onInitialState(t.data);break;case"added_to_room":this.onAddedToRoom(t.data);break;case"removed_from_room":this.onRemovedFromRoom(t.data);break;case"room_updated":this.onRoomUpdated(t.data);break;case"room_deleted":this.onRoomDeleted(t.data)}}},{key:"onInitialState",value:function(e){var t=e.current_user,n=e.rooms;this.onSubscriptionEstablished({user:Ye(t),basicRooms:B($e,n)})}},{key:"onAddedToRoom",value:function(e){var t=this,n=e.room,r=$e(n);this.roomStore.set(r.id,r).then(function(e){t.hooks.global.onAddedToRoom&&t.hooks.global.onAddedToRoom(e)})}},{key:"onRemovedFromRoom",value:function(e){var t=this,n=e.room_id;this.roomStore.pop(n).then(function(e){e&&t.hooks.global.onRemovedFromRoom&&t.hooks.global.onRemovedFromRoom(e)})}},{key:"onRoomUpdated",value:function(e){var t=this,n=e.room,r=$e(n);this.roomStore.update(r.id,r).then(function(e){t.hooks.global.onRoomUpdated&&t.hooks.global.onRoomUpdated(e)})}},{key:"onRoomDeleted",value:function(e){var t=this,n=e.room_id;this.roomStore.pop(n).then(function(e){e&&t.hooks.global.onRoomDeleted&&t.hooks.global.onRoomDeleted(e)})}}]),e}(),dt=function(){function e(t){Le(this,e),this.userId=t.userId,this.instance=t.instance,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout}return He(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("presence subscription timed out"))},e.connectionTimeout),e.sub=e.instance.subscribeNonResuming({path:"/users/"+encodeURIComponent(e.userId)+"/register",listeners:{onOpen:function(){clearTimeout(e.timeout),t()},onError:function(t){clearTimeout(e.timeout),n(t)}}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling presence subscription",e)}}}]),e}(),ft=function(){function e(t){Le(this,e),this.userId=t.userId,this.hooks=t.hooks,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.presenceStore=t.presenceStore,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onPresenceState=this.onPresenceState.bind(this)}return He(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("user presence subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(){clearTimeout(e.timeout),t()},e.sub=e.instance.subscribeNonResuming({path:"/users/"+encodeURIComponent(e.userId),listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling user presence subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"presence_state":this.onPresenceState(t.data)}}},{key:"onPresenceState",value:function(e){var t=this;this.onSubscriptionEstablished();var n=this.presenceStore.getSync(this.userId)||"unknown",r=function(e){return{state:pe(e.state,["online","offline"])?e.state:"unknown"}}(e).state;r!==n&&this.presenceStore.set(this.userId,r).then(function(){t.userStore.get(t.userId).then(function(e){t.hooks.global.onPresenceChanged&&t.hooks.global.onPresenceChanged({current:r,previous:n},e),Z(Se(function(o){var i=Je(o,2),s=i[0],u=i[1];return t.roomStore.get(s).then(function(t){pe(e.id,t.userIds)&&u.onPresenceChanged({current:r,previous:n},e)})}),le(function(e){return void 0!==e[1].onPresenceChanged}),xe)(t.hooks.rooms)})})}}]),e}(),pt=function(){function e(t){Le(this,e),this.onNewCursorHook=t.onNewCursorHook,this.path=t.path,this.cursorStore=t.cursorStore,this.instance=t.instance,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onInitialState=this.onInitialState.bind(this),this.onNewCursor=this.onNewCursor.bind(this)}return He(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("cursor subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(n){clearTimeout(e.timeout),t(n)},e.sub=e.instance.subscribeNonResuming({path:e.path,listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling cursor subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"initial_state":this.onInitialState(t.data);break;case"new_cursor":this.onNewCursor(t.data)}}},{key:"onInitialState",value:function(e){var t=this,n=e.cursors;return Promise.all(B(function(e){return t.cursorStore.set(e.userId,e.roomId,e)},B(Qe,n))).then(this.onSubscriptionEstablished)}},{key:"onNewCursor",value:function(e){var t=this,n=Qe(e);return this.cursorStore.set(n.userId,n.roomId,n).then(function(){t.cursorStore.get(n.userId,n.roomId).then(t.onNewCursorHook)})}}]),e}(),gt=function(){function e(t,n,r){Le(this,e),this.id=t.id,this.senderId=t.senderId,this.roomId=t.roomId,this.text=t.text,this.attachment=t.attachment,this.createdAt=t.createdAt,this.updatedAt=t.updatedAt,this.userStore=n,this.roomStore=r}return He(e,[{key:"sender",get:function(){return this.userStore.getSync(this.senderId)}},{key:"room",get:function(){return this.roomStore.getSync(this.roomId)}}]),e}(),mt=function(){function e(t){Le(this,e),this.roomId=t.roomId,this.hooks=t.hooks,this.messageLimit=t.messageLimit,this.userId=t.userId,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.typingIndicators=t.typingIndicators,this.messageBuffer=[],this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onMessage=this.onMessage.bind(this),this.flushBuffer=this.flushBuffer.bind(this),this.onIsTyping=this.onIsTyping.bind(this)}return He(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("message subscription timed out"))},e.connectionTimeout),e.sub=e.instance.subscribeResuming({path:"/rooms/"+encodeURIComponent(e.roomId)+"?"+ze({message_limit:e.messageLimit}),listeners:{onOpen:function(){clearTimeout(e.timeout),t()},onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling message subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"new_message":this.onMessage(t.data);break;case"is_typing":this.onIsTyping(t.data)}}},{key:"onMessage",value:function(e){var t=this,n={message:new gt(Ze(e),this.userStore,this.roomStore),ready:!1};this.messageBuffer.push(n),this.userStore.fetchMissingUsers([n.message.senderId]).catch(function(e){t.logger.error("error fetching missing user information:",e)}).then(function(){n.ready=!0,t.flushBuffer()})}},{key:"flushBuffer",value:function(){for(;!_e(this.messageBuffer)&&Ie(this.messageBuffer).ready;){var e=this.messageBuffer.shift().message;this.hooks.rooms[this.roomId]&&this.hooks.rooms[this.roomId].onMessage&&this.hooks.rooms[this.roomId].onMessage(e)}}},{key:"onIsTyping",value:function(e){var t=this,n=e.user_id;n!==this.userId&&Promise.all([this.roomStore.get(this.roomId),this.userStore.get(n)]).then(function(e){var n=Je(e,2),r=n[0],o=n[1];return t.typingIndicators.onIsTyping(r,o)})}}]),e}(),bt=function(){function e(t){Le(this,e),this.roomId=t.roomId,this.hooks=t.hooks,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onInitialState=this.onInitialState.bind(this),this.onUserJoined=this.onUserJoined.bind(this),this.onUserLeft=this.onUserLeft.bind(this)}return He(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("membership subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(n){clearTimeout(e.timeout),t(n)},e.sub=e.instance.subscribeNonResuming({path:"/rooms/"+encodeURIComponent(e.roomId)+"/memberships",listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling membership subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"initial_state":this.onInitialState(t.data);break;case"user_joined":this.onUserJoined(t.data);break;case"user_left":this.onUserLeft(t.data)}}},{key:"onInitialState",value:function(e){var t=this,n=e.user_ids;this.roomStore.update(this.roomId,{userIds:n}).then(function(){t.onSubscriptionEstablished()})}},{key:"onUserJoined",value:function(e){var t=this,n=e.user_id;this.roomStore.addUserToRoom(this.roomId,n).then(function(e){t.userStore.get(n).then(function(n){t.hooks.global.onUserJoinedRoom&&t.hooks.global.onUserJoinedRoom(e,n),t.hooks.rooms[t.roomId]&&t.hooks.rooms[t.roomId].onUserJoined&&t.hooks.rooms[t.roomId].onUserJoined(n)})})}},{key:"onUserLeft",value:function(e){var t=this,n=e.user_id;this.roomStore.removeUserFromRoom(this.roomId,n).then(function(e){t.userStore.get(n).then(function(n){t.hooks.global.onUserLeftRoom&&t.hooks.global.onUserLeftRoom(e,n),t.hooks.rooms[t.roomId]&&t.hooks.rooms[t.roomId].onUserLeft&&t.hooks.rooms[t.roomId].onUserLeft(n)})})}}]),e}(),vt=function(){function e(t){Le(this,e),this.messageSub=t.messageSub,this.cursorSub=t.cursorSub,this.membershipSub=t.membershipSub}return He(e,[{key:"connect",value:function(){return Promise.all([this.messageSub.connect(),this.cursorSub.connect(),this.membershipSub.connect()])}},{key:"cancel",value:function(){this.messageSub.cancel(),this.cursorSub.cancel(),this.membershipSub.cancel()}}]),e}(),yt=function(){function e(t){var n=this,r=t.apiInstance,o=t.connectionTimeout,i=t.cursorsInstance,s=t.filesInstance,u=t.hooks,c=t.id,a=t.presenceInstance;Le(this,e),this.hooks={global:u,rooms:{}},this.id=c,this.encodedId=encodeURIComponent(this.id),this.apiInstance=r,this.filesInstance=s,this.cursorsInstance=i,this.connectionTimeout=o,this.presenceInstance=a,this.logger=r.logger,this.presenceStore=new tt,this.userStore=new rt({instance:this.apiInstance,presenceStore:this.presenceStore,logger:this.logger}),this.roomStore=new it({instance:this.apiInstance,userStore:this.userStore,isSubscribedTo:function(e){return n.isSubscribedTo(e)},logger:this.logger}),this.cursorStore=new ut({instance:this.cursorsInstance,userStore:this.userStore,roomStore:this.roomStore,logger:this.logger}),this.typingIndicators=new ht({hooks:this.hooks,instance:this.apiInstance,logger:this.logger}),this.userStore.onSetHooks.push(function(e){return n.subscribeToUserPresence(e)}),this.userStore.initialize({}),this.presenceStore.initialize({}),this.cursorStore.initialize({}),this.roomSubscriptions={},this.readCursorBuffer={},this.userPresenceSubscriptions={},this.setReadCursor=this.setReadCursor.bind(this),this.readCursor=this.readCursor.bind(this),this.isTypingIn=this.isTypingIn.bind(this),this.createRoom=this.createRoom.bind(this),this.getJoinableRooms=this.getJoinableRooms.bind(this),this.joinRoom=this.joinRoom.bind(this),this.leaveRoom=this.leaveRoom.bind(this),this.addUserToRoom=this.addUserToRoom.bind(this),this.removeUserFromRoom=this.removeUserFromRoom.bind(this),this.sendMessage=this.sendMessage.bind(this),this.fetchMessages=this.fetchMessages.bind(this),this.subscribeToRoom=this.subscribeToRoom.bind(this),this.updateRoom=this.updateRoom.bind(this),this.deleteRoom=this.deleteRoom.bind(this),this.setReadCursorRequest=this.setReadCursorRequest.bind(this),this.uploadDataAttachment=this.uploadDataAttachment.bind(this),this.isMemberOf=this.isMemberOf.bind(this),this.isSubscribedTo=this.isSubscribedTo.bind(this),this.decorateMessage=this.decorateMessage.bind(this),this.establishUserSubscription=this.establishUserSubscription.bind(this),this.establishCursorSubscription=this.establishCursorSubscription.bind(this),this.establishPresenceSubscription=this.establishPresenceSubscription.bind(this),this.subscribeToUserPresence=this.subscribeToUserPresence.bind(this),this.disconnect=this.disconnect.bind(this)}return He(e,[{key:"setReadCursor",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.position;return Xe("roomId","string",n),Xe("position","number",r),new Promise(function(t,o){void 0!==e.readCursorBuffer[n]?(e.readCursorBuffer[n].position=v(e.readCursorBuffer[n].position,r),e.readCursorBuffer[n].callbacks.push({resolve:t,reject:o})):(e.readCursorBuffer[n]={position:r,callbacks:[{resolve:t,reject:o}]},setTimeout(function(){e.setReadCursorRequest(Fe({roomId:n},e.readCursorBuffer[n])),delete e.readCursorBuffer[n]},500))})}},{key:"readCursor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.roomId,n=e.userId,r=void 0===n?this.id:n;if(Xe("roomId","string",t),Xe("userId","string",r),r!==this.id&&!this.isSubscribedTo(t)){var o=new Error("Must be subscribed to room "+t+" to access member's read cursors");throw this.logger.error(o),o}return this.cursorStore.getSync(r,t)}},{key:"isTypingIn",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return Xe("roomId","string",e),this.typingIndicators.sendThrottledRequest(e)}},{key:"createRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=t.addUserIds,o=t.customData,i=Ge(t,["name","addUserIds","customData"]);return n&&Xe("name","string",n),r&&function(e,t,n){if(!Array.isArray(n))throw new TypeError("expected "+e+" to be an array");n.forEach(function(n,r){return Xe(e+"["+r+"]",t,n)})}("addUserIds","string",r),o&&Xe("customData","object",o),this.apiInstance.request({method:"POST",path:"/rooms",json:{created_by_id:this.id,name:n,private:!!i.private,user_ids:r,custom_data:o}}).then(function(t){var n=$e(JSON.parse(t));return e.roomStore.set(n.id,n)}).catch(function(t){throw e.logger.warn("error creating room:",t),t})}},{key:"getJoinableRooms",value:function(){var e=this;return this.apiInstance.request({method:"GET",path:"/users/"+this.encodedId+"/rooms?joinable=true"}).then($(JSON.parse,B($e))).catch(function(t){throw e.logger.warn("error getting joinable rooms:",t),t})}},{key:"joinRoom",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return Xe("roomId","string",t),this.isMemberOf(t)?this.roomStore.get(t):this.apiInstance.request({method:"POST",path:"/users/"+this.encodedId+"/rooms/"+encodeURIComponent(t)+"/join"}).then(function(t){var n=$e(JSON.parse(t));return e.roomStore.set(n.id,n)}).catch(function(n){throw e.logger.warn("error joining room "+t+":",n),n})}},{key:"leaveRoom",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return Xe("roomId","string",t),this.roomStore.get(t).then(function(n){return e.apiInstance.request({method:"POST",path:"/users/"+e.encodedId+"/rooms/"+encodeURIComponent(t)+"/leave"}).then(function(){return e.roomStore.pop(t)}).then(function(){return n})}).catch(function(n){throw e.logger.warn("error leaving room "+t+":",n),n})}},{key:"addUserToRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.userId,r=t.roomId;return Xe("userId","string",n),Xe("roomId","string",r),this.apiInstance.request({method:"PUT",path:"/rooms/"+encodeURIComponent(r)+"/users/add",json:{user_ids:[n]}}).then(function(){return e.roomStore.addUserToRoom(r,n)}).catch(function(t){throw e.logger.warn("error adding user "+n+" to room "+r+":",t),t})}},{key:"removeUserFromRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.userId,r=t.roomId;return Xe("userId","string",n),Xe("roomId","string",r),this.apiInstance.request({method:"PUT",path:"/rooms/"+encodeURIComponent(r)+"/users/remove",json:{user_ids:[n]}}).then(function(){return e.roomStore.removeUserFromRoom(r,n)}).catch(function(t){throw e.logger.warn("error removing user "+n+" from room "+r+":",t),t})}},{key:"sendMessage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.text,r=t.roomId,o=t.attachment;return Xe("text","string",n),Xe("roomId","string",r),new Promise(function(t,n){void 0!==o&&St(o)?t(e.uploadDataAttachment(r,o)):void 0!==o&&wt(o)?t({resource_link:o.link,type:o.type}):void 0!==o?n(new TypeError("attachment was malformed")):t()}).then(function(t){return e.apiInstance.request({method:"POST",path:"/rooms/"+encodeURIComponent(r)+"/messages",json:{text:n,attachment:t}})}).then($(JSON.parse,H("message_id"))).catch(function(t){throw e.logger.warn("error sending message to room "+r+":",t),t})}},{key:"fetchMessages",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.initialId,o=t.limit,i=t.direction;return Xe("roomId","string",n),r&&Xe("initialId","number",r),o&&Xe("limit","number",o),i&&function(e,t,n){if(!pe(n,t))throw new TypeError("expected "+e+" to be one of "+t+" but was "+n)}("direction",["older","newer"],i),this.apiInstance.request({method:"GET",path:"/rooms/"+encodeURIComponent(n)+"/messages?"+ze({initial_id:r,limit:o,direction:i})}).then(function(t){var n=B(Z(e.decorateMessage,Ze),JSON.parse(t));return e.userStore.fetchMissingUsers(Ne(B(H("senderId"),n))).then(function(){return je(function(e,t){return e.id-t.id},n)})}).catch(function(t){throw e.logger.warn("error fetching messages from room "+n+":",t),t})}},{key:"subscribeToRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.hooks,o=void 0===r?{}:r,i=t.messageLimit;return Xe("roomId","string",n),Ve("hooks","function",o),i&&Xe("messageLimit","number",i),this.roomSubscriptions[n]&&this.roomSubscriptions[n].cancel(),this.hooks.rooms[n]=o,this.roomSubscriptions[n]=new vt({messageSub:new mt({roomId:n,hooks:this.hooks,messageLimit:i,userId:this.id,instance:this.apiInstance,userStore:this.userStore,roomStore:this.roomStore,typingIndicators:this.typingIndicators,logger:this.logger,connectionTimeout:this.connectionTimeout}),cursorSub:new pt({onNewCursorHook:function(t){e.hooks.rooms[n]&&e.hooks.rooms[n].onNewReadCursor&&0===t.type&&t.userId!==e.id&&e.hooks.rooms[n].onNewReadCursor(t)},path:"/cursors/0/rooms/"+encodeURIComponent(n),cursorStore:this.cursorStore,instance:this.cursorsInstance,logger:this.logger,connectionTimeout:this.connectionTimeout}),membershipSub:new bt({roomId:n,hooks:this.hooks,instance:this.apiInstance,userStore:this.userStore,roomStore:this.roomStore,logger:this.logger,connectionTimeout:this.connectionTimeout})}),this.joinRoom({roomId:n}).then(function(t){return e.roomSubscriptions[n].connect().then(function(){return t})}).catch(function(t){throw e.logger.warn("error subscribing to room "+n+":",t),t})}},{key:"updateRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.name,o=t.customData,i=Ge(t,["roomId","name","customData"]);return Xe("roomId","string",n),r&&Xe("name","string",r),i.private&&Xe("private","boolean",i.private),o&&Xe("customData","object",o),this.apiInstance.request({method:"PUT",path:"/rooms/"+encodeURIComponent(n),json:{name:r,private:i.private,custom_data:o}}).then(function(){}).catch(function(t){throw e.logger.warn("error updating room:",t),t})}},{key:"deleteRoom",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return Xe("roomId","string",t),this.apiInstance.request({method:"DELETE",path:"/rooms/"+encodeURIComponent(t)}).then(function(){}).catch(function(t){throw e.logger.warn("error deleting room:",t),t})}},{key:"setReadCursorRequest",value:function(e){var t=this,n=e.roomId,r=e.position,o=e.callbacks;return this.cursorsInstance.request({method:"PUT",path:"/cursors/0/rooms/"+encodeURIComponent(n)+"/users/"+this.encodedId,json:{position:r}}).then(function(){return B(function(e){return e.resolve()},o)}).catch(function(e){t.logger.warn("error setting cursor:",e),B(function(t){return t.reject(e)},o)})}},{key:"uploadDataAttachment",value:function(e,t){var n=t.file,r=t.name,o=new FormData;return o.append("file",n,r),this.filesInstance.request({method:"POST",path:"/rooms/"+encodeURIComponent(e)+"/users/"+this.encodedId+"/files/"+encodeURIComponent(r),body:o}).then(JSON.parse)}},{key:"isMemberOf",value:function(e){return pe(e,B(H("id"),this.rooms))}},{key:"isSubscribedTo",value:function(e){return Ee(e,this.roomSubscriptions)}},{key:"decorateMessage",value:function(e){return new gt(e,this.userStore,this.roomStore)}},{key:"establishUserSubscription",value:function(){var e=this;return this.userSubscription=new lt({hooks:this.hooks,userId:this.id,instance:this.apiInstance,userStore:this.userStore,roomStore:this.roomStore,typingIndicators:this.typingIndicators,logger:this.logger,connectionTimeout:this.connectionTimeout}),this.userSubscription.connect().then(function(t){var n=t.user,r=t.basicRooms;e.avatarURL=n.avatarURL,e.createdAt=n.createdAt,e.customData=n.customData,e.name=n.name,e.updatedAt=n.updatedAt,e.roomStore.initialize(Te(H("id"),r))}).catch(function(t){throw e.logger.error("error establishing user subscription:",t),t})}},{key:"establishCursorSubscription",value:function(){var e=this;return this.cursorSubscription=new pt({onNewCursorHook:function(t){e.hooks.global.onNewReadCursor&&0===t.type&&e.isMemberOf(t.roomId)&&e.hooks.global.onNewReadCursor(t)},path:"/cursors/0/users/"+this.encodedId,cursorStore:this.cursorStore,instance:this.cursorsInstance,logger:this.logger,connectionTimeout:this.connectionTimeout}),this.cursorSubscription.connect().catch(function(t){throw e.logger.error("error establishing cursor subscription:",t),t})}},{key:"establishPresenceSubscription",value:function(){var e=this;return this.presenceSubscription=new dt({userId:this.id,instance:this.presenceInstance,logger:this.logger,connectionTimeout:this.connectionTimeout}),Promise.all([this.userStore.fetchBasicUsers([this.id]),this.subscribeToUserPresence(this.id),this.presenceSubscription.connect().catch(function(t){throw e.logger.warn("error establishing presence subscription:",t),t})])}},{key:"subscribeToUserPresence",value:function(e){if(this.userPresenceSubscriptions[e])return Promise.resolve();var t=new ft({hooks:this.hooks,userId:e,instance:this.presenceInstance,userStore:this.userStore,roomStore:this.roomStore,presenceStore:this.presenceStore,logger:this.logger,connectionTimeout:this.connectionTimeout});return this.userPresenceSubscriptions[e]=t,t.connect()}},{key:"disconnect",value:function(){this.userSubscription.cancel(),this.presenceSubscription.cancel(),this.cursorSubscription.cancel(),we(function(e){return e.cancel()},this.roomSubscriptions),we(function(e){return e.cancel()},this.userPresenceSubscriptions)}},{key:"rooms",get:function(){return J(this.roomStore.snapshot())}},{key:"users",get:function(){return J(this.userStore.snapshot())}}]),e}(),St=function(e){var t=e.file,n=e.name;return void 0!==t&&void 0!==n&&(Xe("attachment.file","object",t),Xe("attachment.name","string",n),!0)},wt=function(e){var t=e.link,n=e.type;return void 0!==t&&void 0!==n&&(Xe("attachment.link","string",t),Xe("attachment.type","string",n),!0)},Et="1.2.2";return{TokenProvider:Ke,ChatManager:function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.instanceLocator,s=t.tokenProvider,u=t.userId,c=Ge(t,["instanceLocator","tokenProvider","userId"]);Le(this,e),Xe("instanceLocator","string",n),Xe("tokenProvider","object",s),Xe("tokenProvider.fetchToken","function",s.fetchToken),Xe("userId","string",u);var a=De(":",n)[1];if(void 0===a)throw new TypeError("expected instanceLocator to be of the format x:y:z, but was "+n);var h=c.baseClient||new r({host:a+"."+o,logger:c.logger,sdkProduct:"chatkit",sdkVersion:Et});"function"==typeof s.setUserId&&s.setUserId(u);var l={client:h,locator:n,logger:c.logger,tokenProvider:s};this.apiInstance=new i(Fe({serviceName:"chatkit",serviceVersion:"v2"},l)),this.filesInstance=new i(Fe({serviceName:"chatkit_files",serviceVersion:"v1"},l)),this.cursorsInstance=new i(Fe({serviceName:"chatkit_cursors",serviceVersion:"v2"},l)),this.presenceInstance=new i(Fe({serviceName:"chatkit_presence",serviceVersion:"v2"},l)),this.userId=u,this.connectionTimeout=c.connectionTimeout||at,this.connect=this.connect.bind(this),this.disconnect=this.disconnect.bind(this)}return He(e,[{key:"connect",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ve("hooks","function",t);var n=new yt({hooks:t,id:this.userId,apiInstance:this.apiInstance,filesInstance:this.filesInstance,cursorsInstance:this.cursorsInstance,presenceInstance:this.presenceInstance,connectionTimeout:this.connectionTimeout});return Promise.all([n.establishUserSubscription(),n.establishCursorSubscription(),n.establishPresenceSubscription()]).then(function(){return e.currentUser=n,n})}},{key:"disconnect",value:function(){this.currentUser&&this.currentUser.disconnect()}}]),e}()}});


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./src/app/applications/applications.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/applications/applications.module.ts ***!
  \*****************************************************/
/*! exports provided: highlightJsFactory, ApplicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsModule", function() { return ApplicationsModule; });
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/applications/leave/leave.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _applications_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./applications.router */ "./src/app/applications/applications.router.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/applications/chat/chat.component.ts");
/* harmony import */ var _mydetails_mydetails_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mydetails/mydetails.component */ "./src/app/applications/mydetails/mydetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_17__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_17__;
}
var ApplicationsModule = /** @class */ (function () {
    function ApplicationsModule() {
    }
    ApplicationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _applications_router__WEBPACK_IMPORTED_MODULE_20__["ApplicationsRouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
            ],
            declarations: [
                _leave_leave_component__WEBPACK_IMPORTED_MODULE_0__["LeaveComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"],
                _mydetails_mydetails_component__WEBPACK_IMPORTED_MODULE_22__["MydetailsComponent"]
            ],
            exports: []
        })
    ], ApplicationsModule);
    return ApplicationsModule;
}());



/***/ }),

/***/ "./src/app/applications/applications.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/applications/applications.router.ts ***!
  \*****************************************************/
/*! exports provided: ApplicationsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsRouterModule", function() { return ApplicationsRouterModule; });
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/applications/leave/leave.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mydetails_mydetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mydetails/mydetails.component */ "./src/app/applications/mydetails/mydetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApplicationsRoutes = [
    { path: 'leave', component: _leave_leave_component__WEBPACK_IMPORTED_MODULE_0__["LeaveComponent"], data: { animation: 'buttons' } },
    { path: 'chatlogin', component: _mydetails_mydetails_component__WEBPACK_IMPORTED_MODULE_3__["MydetailsComponent"], data: { animation: 'buttons' } },
    { path: '', redirectTo: '/auth/dashboard', pathMatch: 'full' }
];
var ApplicationsRouterModule = /** @class */ (function () {
    function ApplicationsRouterModule() {
    }
    ApplicationsRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ApplicationsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ApplicationsRouterModule);
    return ApplicationsRouterModule;
}());



/***/ }),

/***/ "./src/app/applications/chat/chat.component.css":
/*!******************************************************!*\
  !*** ./src/app/applications/chat/chat.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chats {\r\n    height: calc(100% - 12px);\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.chats .chatbox {\r\n    height: calc(100% - 68px);\r\n    overflow-x: hidden;\r\n    padding: 0 16px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.joined {\r\n  clear: both;\r\n  line-height: 18px;\r\n  font-size: 15px;\r\n  margin: 8px 0;\r\n  padding: 8px;\r\n}\r\n\r\n.joined span {\r\n  padding: 5px\r\n}\r\n\r\n/* Messages*/\r\n\r\n.message {\r\n  color: #000;\r\n  clear: both;\r\n  line-height: 18px;\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  position: relative;\r\n  margin: 8px 0;\r\n  max-width: 85%;\r\n  word-wrap: break-word;\r\n  z-index: -1;\r\n}\r\n\r\n.message:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n}\r\n\r\n.metadata {\r\n  display: inline-block;\r\n  float: right;\r\n  padding: 0 0 0 7px;\r\n  position: relative;\r\n  bottom: -4px;\r\n}\r\n\r\n.metadata .time {\r\n  color: rgba(0, 0, 0, .45);\r\n  font-size: 11px;\r\n  display: inline-block;\r\n}\r\n\r\n.message:first-child {\r\n  margin: 16px 0 8px;\r\n}\r\n\r\n.message.received {\r\n  background: #ccc;\r\n  border-radius: 0px 5px 5px 5px;\r\n  float: left;\r\n}\r\n\r\n.message.received:after {\r\n  border-width: 0px 10px 10px 0;\r\n  border-color: transparent #ccc transparent transparent;\r\n  top: 0;\r\n  left: -10px;\r\n}\r\n\r\n.message.sent {\r\n  background: #e1ffc7;\r\n  border-radius: 5px 0px 5px 5px;\r\n  float: right;\r\n}\r\n\r\n.message.sent:after {\r\n  border-width: 0px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1ffc7;\r\n  top: 0;\r\n  right: -10px;\r\n}\r\n\r\n.metadata {\r\n  display: inline-block;\r\n  float: right;\r\n  padding: 0 0 0 7px;\r\n  position: relative;\r\n  bottom: -4px;\r\n}\r\n\r\n.metadata .time {\r\n  color: rgba(0, 0, 0, .45);\r\n  font-size: 11px;\r\n  display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/applications/chat/chat.component.html":
/*!*******************************************************!*\
  !*** ./src/app/applications/chat/chat.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 class=\"pb-2 mb-0\">Group Chat <button class=\"btn btn-sm btn-primary\">invite others</button></h6>\n\n<div class=\"chats\">\n  <div class=\"chatbox\">\n    <div *ngFor=\"let chat of chats\">\n      <div class=\"message sent\" *ngIf=\"chat.type!=='joined' && chat.isMe\">\n        {{chat.message}}\n        <span class=\"metadata\">\n          <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n        </span>\n      </div>\n      <div class=\"message received\"  *ngIf=\"chat.type!=='joined' && !chat.isMe\">\n        <strong>{{chat.displayName}}</strong> <br>\n        {{chat.message}}\n        <span class=\"metadata\">\n          <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n        </span>\n      </div>\n      <p align=\"center\" class=\"joined\"  *ngIf=\"chat.type==='joined'\">\n      <span class=\"rounded bg-primary text-white\">{{chat.displayName}} Joined</span>\n      </p>\n    </div>\n  </div>\n\n  <div class=\"d-flex flex-row\">\n    <input [(ngModel)]=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Enter message\" style=\"margin-right: 10px\">\n    <button [disabled]=\"!message || sending\" (click)=\"sendMessage(message)\" class=\"btn btn-primary\"> {{sending ? 'Sending' : 'Send'}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applications/chat/chat.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/applications/chat/chat.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../chat.service */ "./src/app/applications/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        this.chats = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to pusher's event
        this._chatService.getChannel().bind('chat', function (data) {
            if (data.email === _this._chatService.user.email) {
                data.isMe = true;
            }
            _this.chats.push(data);
        });
    };
    ChatComponent.prototype.sendMessage = function (message) {
        var _this = this;
        this.sending = true;
        this._chatService.sendMessage(message)
            .subscribe(function (resp) {
            _this.message = undefined;
            _this.sending = false;
        }, function (err) {
            _this.sending = false;
        });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/applications/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/applications/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_0__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/applications/leave/leave.component.html":
/*!*********************************************************!*\
  !*** ./src/app/applications/leave/leave.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n    <div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"datepicker-header\">\n        <h3 class=\"mat-headline center-align\">LEAVE APPLICATION</h3>\n      </mat-toolbar>\n      \n      <mat-tab-group>\n          <mat-tab label=\"APPLY\">\n      <div class=\"datepicker-container\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n          <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n            <h5  class=\"mat-subheading-2 center-align\">Kindly fill the form below</h5>\n            <mat-divider></mat-divider>\n            <form #LeaveForm=\"ngForm\" (ngSubmit) = \"ApplyLeave(LeaveForm)\" >\n          <div>\n              <mat-form-field style=\"width:400px !important\">\n                  <input matInput ngModel #staffnameControl =\"ngModel\" placeholder=\"Staff name\" name=\"stafname\" [value]=\"staffname\" disabled>\n                </mat-form-field>\n          </div>\n\n          <div>\n              <mat-form-field style=\"width:400px !important\">\n                  <input matInput placeholder=\"Department\" name=\"dept\" [value]=\"department\" disabled>\n                </mat-form-field>\n          </div>\n          <div>\n              <mat-form-field>\n                  <mat-select [(ngModel)]=\"SelectedLeaveType\" name=\"leaveType\"  #LeaveTypeControl = \"ngModel\" required placeholder=\"Leave Type\">\n                    <mat-option *ngFor=\"let ltype of leavetype\" [value]=\"ltype.LeaveTypeName\" > {{ltype.LeaveTypeName}} </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"LeaveTypeControl.hasError('required')\">Please select a Leave type</mat-error>\n                </mat-form-field>\n          </div>\n          \n\n            <div>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" name=\"comdate\" [(ngModel)]=\"StartDate\" #CommenceDateControl=\"ngModel\" placeholder=\"Commencement Date\" required>\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n              <mat-error *ngIf=\"CommenceDateControl.hasError('required')\">Please select a Date to Start Leave</mat-error>\n            </mat-form-field>\n          </div>\n\n          <div>\n              <mat-form-field>\n                <input matInput (click)=\"GetDaysBetween(StartDate, EndDate)\" name=\"endate\" [matDatepicker]=\"picker1\" [min]=\"minDate\" #EndDateControl = \"ngModel\" [(ngModel)]=\"EndDate\" placeholder=\"End Date\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1></mat-datepicker>\n                <mat-error *ngIf=\"EndDateControl.hasError('required')\">Please select a Date to End Leave</mat-error>\n              </mat-form-field>\n            </div>\n\n            <div>\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"picker2\" [min]=\"minDate\" name=\"resdate\" [(ngModel)]=\"ResumeDate\" #ResumeDateControl = \"ngModel\"  placeholder=\"Resumption Date\" required>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker2></mat-datepicker>\n                  <mat-error *ngIf=\"ResumeDateControl.hasError('required')\">Please select a Resumption Date </mat-error>\n                </mat-form-field>\n              </div>\n\n             <!--  <div>\n                  <mat-form-field class=\"example-full-width\" style=\"width:500px !important\">\n                      <textarea matInput placeholder=\"Leave Address\" name=\"lvadd\" required></textarea>\n                    </mat-form-field>\n              </div> -->\n\n              <div>\n                  <button mat-raised-button color=\"primary\" type=\"submit\" >APPLY</button>\n                 </div>  \n                </form> \n            </div>\n  \n          <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n            <h4  class=\"mat-subheading-2 center-align\">SUMMARY</h4>\n            <mat-divider></mat-divider>\n            <div>\n              <label style=\"font-style:normal; color: crimson\">Leave Type:-  </label> {{ SelectedLeaveType }} \n            </div>\n            <mat-divider></mat-divider>\n            <div>\n                <label style=\"font-style:normal; color: crimson\">Start Date:-  </label> {{ StartDate | date:'mediumDate'   }} \n              </div>\n              <mat-divider></mat-divider>\n              <div>\n                  <label style=\"font-style:normal; color: crimson\">End Date:-  </label> {{ EndDate | date:'mediumDate'   }} \n                </div>\n                <mat-divider></mat-divider>\n                <div>\n                    <label style=\"font-style:normal; color: crimson\">Resumption Date:-  </label> {{ ResumeDate | date:'mediumDate' }} \n                  </div>\n                  <mat-divider></mat-divider>\n\n                  <div>\n                      <label style=\"font-style:normal; color: crimson\">Total Days:-  </label> {{ differencems }} \n                    </div>\n                    <mat-divider></mat-divider>\n          </div>\n        </div>\n  \n    \n  \n  \n      </div>\n    </mat-tab>\n    <mat-tab label=\"APPLICATIONS\"> Content 2 </mat-tab>\n    </mat-tab-group>\n\n    </div>\n    \n  </div>"

/***/ }),

/***/ "./src/app/applications/leave/leave.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/applications/leave/leave.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepicker-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.datepicker-container {\n  padding: 5px 15px 15px 15px; }\n\n.datepicker-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.datepicker-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.datepicker-component-holder mat-divider {\n    margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/applications/leave/leave.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/applications/leave/leave.component.ts ***!
  \*******************************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _applications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../applications.service */ "./src/app/applications/applications.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaveComponent = /** @class */ (function () {
    function LeaveComponent(applicationservice, router) {
        this.applicationservice = applicationservice;
        this.router = router;
        // LeaveTypeControl = new FormControl('', [Validators.required]);
        this.CommenceDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.EndDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.ResumeDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.minDate = new Date();
    }
    LeaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staffname = localStorage.getItem('profilename');
        this.department = localStorage.getItem('department');
        this.applicationservice.GetLeaveType().subscribe(function (result) {
            _this.leavetype = result;
        }, function (error) { return console.error(error); });
    };
    LeaveComponent.prototype.GetDaysBetween = function (date1, date2) {
        this.differencems = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
        console.log(this.differencems);
    };
    LeaveComponent.prototype.ApplyLeave = function (leaveForm) {
        console.log(this.staffname);
        console.log(this.department);
        console.log(leaveForm.value.leaveType);
        console.log(leaveForm.value.comdate);
        console.log(leaveForm.value.endate);
        console.log(leaveForm.value.resdate);
        console.log(this.differencems);
    };
    LeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-leave',
            template: __webpack_require__(/*! ./leave.component.html */ "./src/app/applications/leave/leave.component.html"),
            styles: [__webpack_require__(/*! ./leave.component.scss */ "./src/app/applications/leave/leave.component.scss")]
        }),
        __metadata("design:paramtypes", [_applications_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LeaveComponent);
    return LeaveComponent;
}());



/***/ }),

/***/ "./src/app/applications/mydetails/mydetails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/applications/mydetails/mydetails.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  *, *::before, *::after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  body {\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\r\n  }\r\n\r\n  .App {\r\n    width: 100%;\r\n    max-width: 960px;\r\n    height: 500px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    border: 1px solid #ccc;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  ul {\r\n    list-style: none;\r\n  }\r\n\r\n  .sidebar {\r\n    flex-basis: 30%;\r\n    background-color: #300d4f;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .sidebar section {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .sidebar h2 {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .user-list li {\r\n    margin-bottom: 10px;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .presence {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #fff;\r\n    margin-right: 10px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .presence.online {\r\n    background-color: green;\r\n  }\r\n\r\n  .chat-window {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .chat-window > * {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .chat-header, .chat-footer {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .chat-header {\r\n    border-bottom: 1px solid #ccc;\r\n  }\r\n\r\n  .chat-session {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .message-list {\r\n    flex-grow: 1;\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .user-message {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .user-message span {\r\n    display: block;\r\n  }\r\n\r\n  .user-id {\r\n    font-weight: bold;\r\n    margin-bottom: 3px;\r\n  }\r\n\r\n  .chat-footer {\r\n    border-top: 1px solid #ccc;\r\n  }\r\n\r\n  .chat-footer form, .chat-footer input {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/applications/mydetails/mydetails.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/applications/mydetails/mydetails.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"App\">\n      <aside class=\"sidebar\">\n        <section  *ngIf=\"!currentUser\" class=\"join-chat\">\n          <h2>Join Chat</h2>\n          <form (ngSubmit)=\"addUser()\">\n            <input placeholder=\"Enter your username\" type=\"text\" name=\"username\" [(ngModel)]=\"username\" />\n          </form>\n        </section>\n        <section class=\"online-members\">\n          <h2>Room Users</h2>\n          <ul class=\"user-list\">\n            <li *ngFor=\"let user of users\">\n              <span class=\"presence {{ user.presence.state }}\"></span>\n              <span>{{ user.name }}</span>\n            </li>\n          </ul>\n        </section>\n      </aside>\n      <main class=\"chat-window\">\n        <header class=\"chat-header\">\n          <h1>Chat</h1>\n          <span class=\"participants\"></span>\n        </header>\n        <section class=\"chat-session\">\n          <ul class=\"message-list\">\n            <li class=\"user-message\" *ngFor=\"let message of messages\">\n              <span class=\"user-id\">{{ message.senderId }}</span>\n              <span>{{ message.text }}</span>\n            </li>\n          </ul>\n        </section>\n        <footer class=\"chat-footer\">\n          <form (ngSubmit)='sendMessage()'>\n            <input placeholder=\"Type a message. Hit Enter to send\" type=\"text\" name=\"message\" [(ngModel)]=\"message\">\n          </form>\n        </footer>\n      </main>\n    </div>"

/***/ }),

/***/ "./src/app/applications/mydetails/mydetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/applications/mydetails/mydetails.component.ts ***!
  \***************************************************************/
/*! exports provided: MydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydetailsComponent", function() { return MydetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MydetailsComponent = /** @class */ (function () {
    function MydetailsComponent() {
        this.title = 'Angular Chatroom';
        this.messages = [];
        this.users = [];
        this._message = '';
        this._username = '';
    }
    Object.defineProperty(MydetailsComponent.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    MydetailsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MydetailsComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    MydetailsComponent.prototype.sendMessage = function () {
        var _a = this, message = _a.message, currentUser = _a.currentUser;
        currentUser.sendMessage({
            text: message,
            roomId: '19650138',
        });
        this.message = '';
    };
    MydetailsComponent.prototype.addUser = function () {
        var _this = this;
        var username = this.username;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://192.168.16.161:5200/users', { username: username })
            .then(function () {
            var tokenProvider = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1___default.a.TokenProvider({
                url: 'http://192.168.16.161:5200/authenticate'
            });
            var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1___default.a.ChatManager({
                instanceLocator: 'v1:us1:41c87f99-4b6a-449a-a157-c7ddf3724410',
                userId: username,
                tokenProvider: tokenProvider
            });
            return chatManager
                .connect()
                .then(function (currentUser) {
                currentUser.subscribeToRoom({
                    roomId: '19650138',
                    messageLimit: 100,
                    hooks: {
                        onMessage: function (message) {
                            _this.messages.push(message);
                        },
                        onPresenceChanged: function (state, user) {
                            _this.users = currentUser.users.sort(function (a, b) {
                                if (a.presence.state === 'online') {
                                    return -1;
                                }
                                return 1;
                            });
                        },
                    },
                });
                _this.currentUser = currentUser;
                _this.users = currentUser.users;
            });
        })
            .catch(function (error) { return console.error(error); });
    };
    MydetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mydetails',
            template: __webpack_require__(/*! ./mydetails.component.html */ "./src/app/applications/mydetails/mydetails.component.html"),
            styles: [__webpack_require__(/*! ./mydetails.component.css */ "./src/app/applications/mydetails/mydetails.component.css")]
        })
    ], MydetailsComponent);
    return MydetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=applications-applications-module.js.map