parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"krre":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/styles.css");class t{constructor({selector:t,targetDate:e}){this.selector=t,this.targetDate=e,this.refs={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')}}startTimer(){setInterval(()=>{const t=Date.now(),e=this.targetDate.getTime()-t,s=this.getTimeComponents(e);this.updateTimer(s),e<0&&(this.refs.days.textContent="00",this.refs.hours.textContent="00",this.refs.mins.textContent="00",this.refs.secs.textContent="00")},1e3)}getTimeComponents(t){return{days:Math.floor(t/864e5),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}updateTimer({days:t,hours:e,mins:s,secs:r}){this.refs.days.textContent=`${t}`,this.refs.hours.textContent=`${e}`,this.refs.mins.textContent=`${s}`,this.refs.secs.textContent=`${r}`}}const e=new t({selector:"#timer-1",targetDate:new Date("Sep 17, 2021")});e.startTimer();
},{"./css/styles.css":"krre"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.7c930fd0.js.map