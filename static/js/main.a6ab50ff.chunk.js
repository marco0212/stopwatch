(this["webpackJsonpmy-timer"]=this["webpackJsonpmy-timer"]||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),r=i(2),l=i.n(r),s=i(3),c=i(4),o=i(6),u=i(5);var m=function(t){return n.a.createElement("div",{className:"monitor"},n.a.createElement("time",null,t.getTimeEle(t.time)))};function h(t){var e="",i="";return t.isLive?(e="\uc911\ub2e8",i="red"):(e="\uc2dc\uc791",i="green"),n.a.createElement("button",{className:i,onClick:t.toggleStart},e)}function v(t){var e="",i="";return t.time?e=t.isLive?"\ub7a9":"\uc7ac\uc124\uc815":(e="\ub7a9",i="disable"),n.a.createElement("button",{className:i,onClick:t.utilFunction},e)}function E(t){return n.a.createElement("div",{className:"control-area"},n.a.createElement(v,{utilFunction:t.utilFunction,time:t.time,isLive:t.appStatus}),n.a.createElement(h,{toggleStart:t.toggleStart,isLive:t.appStatus}))}function g(t){var e=n.a.createElement("li",null,n.a.createElement("strong",null,"\ub7a9 ",t.record.length-5),n.a.createElement("time",null,t.getTimeEle(t.time)));return n.a.createElement("div",{className:"table-area"},n.a.createElement("ul",null,!!t.time&&e,t.record.map((function(e,i){if(!e)return n.a.createElement("li",{key:i});var a="\ub7a9 ".concat(e.index);return n.a.createElement("li",{key:a},n.a.createElement("strong",null,a),n.a.createElement("time",null,t.getTimeEle(e.sec)))}))))}i(12);var f=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(s.a)(this,i),(a=e.call(this,t)).state={milisec:0,isLive:!1,history:Array(6).fill(null)},a}return Object(c.a)(i,[{key:"utilFunction",value:function(){var t=this.state.isLive,e=this.state.history.length-5;if(t){var i=this.state.history.slice();i.unshift({sec:this.state.milisec,index:e}),this.setState({history:i})}else this.setState({milisec:0,history:Array(6).fill(null)})}},{key:"toggleStart",value:function(){var t=this,e=this.state.isLive;e?clearInterval(this.timer):this.timer=setInterval((function(){t.tick()}),10),this.setState({isLive:!e})}},{key:"getTimeEle",value:function(t){return function(t){var e=t%100,i=Math.floor(t/100%60),a=Math.floor(t/100/60%60),n=Math.floor(t/100/60/60);return i<10&&(i="0"+i.toString()),a<10&&(a="0"+a.toString()),e<10&&(e="0"+e.toString()),n?"".concat(n,":").concat(a,":").concat(i,".").concat(e):"".concat(a,":").concat(i,".").concat(e)}(t).split("").map((function(t,e){return Number.isNaN(Number(t))?t:n.a.createElement("span",{key:e},t)}))}},{key:"tick",value:function(){this.setState({milisec:this.state.milisec+1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m,{time:this.state.milisec,getTimeEle:this.getTimeEle}),n.a.createElement(E,{toggleStart:this.toggleStart.bind(this),utilFunction:this.utilFunction.bind(this),appStatus:this.state.isLive,time:this.state.milisec}),n.a.createElement(g,{record:this.state.history,getTimeEle:this.getTimeEle,time:this.state.milisec,appStatus:this.state.isLive}))}}]),i}(a.Component);l.a.render(n.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,i){t.exports=i(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.a6ab50ff.chunk.js.map