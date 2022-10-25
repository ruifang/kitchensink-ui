"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[535],{2535:(V,I,C)=>{C.r(I),C.d(I,{default:()=>F});const b="[A-Za-z$_][0-9A-Za-z$_]*",O=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],v=["true","false","null","undefined","NaN","Infinity"],w=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],M=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],k=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],x=["arguments","this","super","console","window","document","localStorage","module","global"],L=[].concat(k,w,M);function F(n){const e=function $(n){const e=n.regex,t=b,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(s,d)=>{const u=s[0].length+s.index,m=s.input[u];if("<"===m||","===m)return void d.ignoreMatch();let P;">"===m&&(((s,{after:d})=>{const u="</"+s[0].slice(1);return-1!==s.input.indexOf(u,d)})(s,{after:u})||d.ignoreMatch()),(P=s.input.substring(u).match(/^\s+extends\s+/))&&0===P.index&&d.ignoreMatch()}},c={$pattern:b,keyword:O,literal:v,built_in:L,"variable.language":x},_="[0-9](_?[0-9])*",o=`\\.(${_})`,i="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${i})((${o})|\\.)?|(${o}))[eE][+-]?(${_})\\b`},{begin:`\\b(${i})\\b((${o})\\b|\\.)?|(${o})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},N={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,a],subLanguage:"xml"}},S={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,a],subLanguage:"css"}},l={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,a]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},h=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,N,S,l,A];a.contains=h.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(h)});const D=[].concat(y,a.contains),p=D.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(D)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:p},Z={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,e.concat(t,"(",e.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...w,...M]}},G={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[E],illegal:/%/},W={match:e.concat(/\b/,function Y(s){return e.concat("(?!",s.join("|"),")")}([...k,"super"]),t,e.lookahead(/\(/)),className:"title.function",relevance:0},H={begin:e.concat(/\./,e.lookahead(e.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},X={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},E]},U="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",J={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(U)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[E]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:p,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,N,S,l,y,A,B,{className:"attr",begin:t+e.lookahead(":"),relevance:0},J,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:U,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:p}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},G,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[E,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},H,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[E]},W,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},Z,X,{match:/\$[(.]/}]}}(n),t=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],g={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},f={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:t},contains:[e.exports.CLASS_REFERENCE]},_={$pattern:b,keyword:O.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),literal:v,built_in:L.concat(t),"variable.language":x},o={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},i=(a,N,S)=>{const l=a.contains.findIndex(R=>R.label===N);if(-1===l)throw new Error("can not find mode to replace");a.contains.splice(l,1,S)};return Object.assign(e.keywords,_),e.exports.PARAMS_CONTAINS.push(o),e.contains=e.contains.concat([o,g,f]),i(e,"shebang",n.SHEBANG()),i(e,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),e.contains.find(a=>"func.def"===a.label).relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx"]}),e}}}]);