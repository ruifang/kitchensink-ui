"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[761],{2761:(A,w,m)=>{m.r(w),m.d(w,{PageHeaderGuidelinesComponent:()=>f});var _=m(1152),b=m(1506),d=m(5879);let f=(()=>{var p;class v{constructor(){}ngOnInit(){_.Z.embedProject("page-header-demo",{title:"Angular starter",description:"A basic Node.js project",template:"angular-cli",files:{"index.html":"<app-demo>test</app-demo>","polyfills.ts":"import 'zone.js/dist/zone';","app/app.component.ts":"\nimport { Component, VERSION } from '@angular/core';\n\n@Component({\n  selector: 'app-demo',\n  template: 'hola',\n  styles: [],\n})\nexport class AppComponent  {\n  name = 'Angular ' + VERSION.major;\n}          \n          ","app/app.module.ts":"\nimport { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { FormsModule } from '@angular/forms';\n\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports:      [ BrowserModule, FormsModule ],\n  declarations: [ AppComponent ],\n  bootstrap:    [ AppComponent ]\n})\nexport class AppModule { }          \n          ","main.ts":"\nimport './polyfills';\n\nimport { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\n\nplatformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));","package.json":'{\n            "name": "my-project",\n            "scripts": { "start": "ng serve" },\n            "dependencies": {\n              "@angular/animations": "^14.0.0",\n              "@angular/common": "^14.0.0",\n              "@angular/compiler": "^14.0.0",\n              "@angular/core": "^14.0.0",\n              "@angular/forms": "^14.0.0",\n              "@angular/platform-browser": "^14.0.0",\n              "@angular/platform-browser-dynamic": "^14.0.0",\n              "@angular/router": "^14.0.0",\n              "rxjs": "~7.5.0",\n              "tslib": "^2.3.0",\n              "zone.js": "~0.11.4"\n            },\n            "devDependencies": {\n              "@angular-devkit/build-angular": "^14.0.0",\n              "@angular/cli": "~14.0.0",\n              "@angular/compiler-cli": "^14.0.0",\n              "@types/jasmine": "~4.0.0",\n              "jasmine-core": "~4.1.0",\n              "karma": "~6.3.0",\n              "karma-chrome-launcher": "~3.1.0",\n              "karma-coverage": "~2.2.0",\n              "karma-jasmine": "~5.0.0",\n              "karma-jasmine-html-reporter": "~1.7.0",\n              "typescript": "~4.7.2"\n            }\n            "stackblitz": { "installDependencies": true, "startCommand": "npm start" },\n          }',view:"preview"}},{clickToLoad:!0,openFile:"app/app.component.ts",terminalHeight:50})}}return(p=v).\u0275fac=function(h){return new(h||p)},p.\u0275cmp=d.Xpm({type:p,selectors:[["app-page-header-guidelines"]],standalone:!0,features:[d.jDz],decls:8,vars:0,consts:[["pageTitle","Page header"],["id","page-header-demo"],[1,"list-inside","list-disc"]],template:function(h,E){1&h&&(d._UZ(0,"mz-page-header",0),d.TgZ(1,"article")(2,"h2"),d._uU(3,"Best practices"),d.qZA(),d._UZ(4,"div",1),d.TgZ(5,"ul",2)(6,"li"),d._uU(7,"Use 2-3 words as page title and document title to help user quickly identify what they're looking at"),d.qZA()()())},dependencies:[b.qA]}),v})()},1152:(A,w,m)=>{m.d(w,{Z:()=>L});var _=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],b={clickToLoad:function(e){return f("ctl",e)},devToolsHeight:function(e){return p("devToolsHeight",e)},forceEmbedLayout:function(e){return f("embed",e)},hideDevTools:function(e){return f("hideDevTools",e)},hideExplorer:function(e){return f("hideExplorer",e)},hideNavigation:function(e){return f("hideNavigation",e)},showSidebar:function(e){return"boolean"==typeof(n=e)?"showSidebar="+(n?"1":"0"):"";var n},openFile:function(e){return(n=e,(Array.isArray(n)?n:[n]).filter(function(r){return"string"==typeof r&&""!==r.trim()}).map(function(r){return"file="+encodeURIComponent(r.trim())})).join("&");var n},terminalHeight:function(e){return p("terminalHeight",e)},theme:function(e){return v("theme",["light","dark"],e)},view:function(e){return v("view",["preview","editor"],e)}};function d(e){void 0===e&&(e={});var t=Object.entries(e).map(function(n){var r=n[0],i=n[1];return null!=i&&b.hasOwnProperty(r)?b[r](i):""}).filter(Boolean);return t.length?"?"+t.join("&"):""}function f(e,t){return!0===t?e+"=1":""}function p(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function v(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function y(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function h(e,t){return""+T(t)+e+d(t)}function E(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+T(n)+e+d(n)}function T(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function C(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");var r,i;e.id&&(t.id=e.id),e.className&&(t.className=e.className),r=t,(i=n)&&"object"==typeof i&&(Object.hasOwnProperty.call(i,"height")&&(r.height=""+i.height),Object.hasOwnProperty.call(i,"width")&&(r.width=""+i.width)),r.height||(r.height="300"),r.width||r.setAttribute("style","width:100%;"),e.parentNode.replaceChild(t,e)}function I(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function O(e){return e&&!1===e.newWindow?"_self":"_blank"}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var k=function(){function e(n){this.port=void 0,this.pending={},this.port=n,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(n){var r=this,i=n.type,o=n.payload,a=y();return new Promise(function(u,c){r.pending[a]={resolve:u,reject:c},r.port.postMessage({type:i,payload:j({},o,{__reqid:a})})})},t.messageListener=function(n){var r,l;if("string"==typeof(null==(r=n.data.payload)?void 0:r.__reqid)){var i=n.data,o=i.type,a=i.payload,u=a.__reqid,c=a.__error;this.pending[u]&&(a.__success?this.pending[u].resolve((delete(l=j({},a)).__reqid,delete l.__success,delete l.__error,Object.keys(l).length?l:null)):this.pending[u].reject(c?o+": "+c:o),delete this.pending[u])}},e}(),M=function(){function e(n,r){var i=this;this._rdc=void 0,this.editor={openFile:function(o){return i._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}})},setCurrentFile:function(o){return i._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}})},setTheme:function(o){return i._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}})},setView:function(o){return i._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}})},showSidebar:function(o){return void 0===o&&(o=!0),i._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})}},this.preview={origin:"",getUrl:function(){return i._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(o){var a;return null!=(a=o?.url)?a:null})},setUrl:function(o){if(void 0===o&&(o="/"),"string"!=typeof o||!o.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+o+"'");return i._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new k(n),Object.defineProperty(this.preview,"origin",{value:"string"==typeof r.previewOrigin?r.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(n){var r=function(i){return null!==i&&"object"==typeof i};if(!r(n)||!r(n.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(n.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:n})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),S=[],N=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=y(),this.element=e,this.pending=new Promise(function(n,r){var i=function(s){var l=s.data;"SDK_INIT_SUCCESS"===l?.action&&l.id===t.id&&(t.vm=new M(s.ports[0],l.payload),n(t.vm),a())},o=function(){var s;null==(s=t.element.contentWindow)||s.postMessage({action:"SDK_INIT",id:t.id},"*")};function a(){window.clearInterval(c),window.removeEventListener("message",i)}window.addEventListener("message",i),o();var u=0,c=window.setInterval(function(){if(t.vm)a();else{if(u>=20)return a(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),void S.forEach(function(s,l){s.id===t.id&&S.splice(l,1)});u++,o()}},500)}),S.push(this)};function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function D(e){if(!_.includes(e.template)){var t=_.map(function(i){return"'"+i+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(g("project[title]",e.title)),r.appendChild(g("project[description]",e.description)),r.appendChild(g("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(g("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(g("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach(function(i){"string"==typeof e.files[i]&&r.appendChild(g("project[files]["+i+"]",e.files[i]))}),r}function P(e){var t,n,r,i;return null!=e&&e.contentWindow?(i=(n=e)instanceof Element?"element":"id",null!=(t=null!=(r=S.find(function(o){return o[i]===n}))?r:null)?t:new N(e)).pending:Promise.reject("Provided element is not an iframe.")}var L={connect:P,embedGithubProject:function(e,t,n){var r=I(e),i=document.createElement("iframe");return i.src=E("/github/"+t,n),C(r,i,n),P(i)},embedProject:function(e,t,n){var r,c,s,i=I(e),o=(c=n,(s=D(t)).action=E("/run",c),s.id="sb","<html><head><title></title></head><body>"+s.outerHTML+"<script>document.getElementById('"+s.id+"').submit();<\/script></body></html>"),a=document.createElement("iframe");return C(i,a,n),null==(r=a.contentDocument)||r.write(o),P(a)},embedProjectId:function(e,t,n){var r=I(e),i=document.createElement("iframe");return i.src=E("/edit/"+t,n),C(r,i,n),P(i)},openGithubProject:function(e,t){var n=h("/github/"+e,t),r=O(t);window.open(n,r)},openProject:function(e,t){var r,i;r=t,(i=D(e)).action=h("/run",r),i.target=O(r),document.body.appendChild(i),i.submit(),document.body.removeChild(i)},openProjectId:function(e,t){var n=h("/edit/"+e,t),r=O(t);window.open(n,r)}}}}]);