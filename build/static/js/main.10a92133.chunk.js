(this.webpackJsonpelice_project=this.webpackJsonpelice_project||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(25),l=c.n(a),r=c(7),o=c(14),j=c(10),i=c(3),b=(c(31),c(0));function d(e){console.log("Button \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var t=e.nextpage,c=e.prevpage,n=e.name,s=e.nextbutton;return Object(b.jsx)("button",{type:"button",onClick:function(){"main"===n?(console.log("\uac80\uc0ac\uc2dc\uc791 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc2b5\ub2c8\ub2e4"),s()):"next"===n?(t(),console.log("\ub2e4\uc74c \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc2b5\ub2c8\ub2e4")):"prev"===n&&(c(),console.log("\uc774\uc804 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc2b5\ub2c8\ub2e4"))},name:e.name,className:e.classname,children:e.text})}c(33);var x=c(4);function u(e){console.log("Main \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(""),r=Object(i.a)(l,2),o=r[0],j=r[1];function u(e){j(e.target.value),console.log("\uc131\ubcc4 \ubc14\uafe8\ub2f9")}return Object(b.jsxs)("div",{className:"container",style:{marginTop:"15%"},children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h1",{children:"\uc9c1\uc5c5\uac00\uce58\uad00\uac80\uc0ac"})}),Object(b.jsxs)("div",{className:"name",children:[Object(b.jsx)("p",{children:"\uc774\ub984"}),Object(b.jsx)("input",{type:"text",onChange:function(e){a(e.target.value),console.log("\uc774\ub984 \ubc14\uafe8\ub2f9")}})]}),Object(b.jsxs)("div",{className:"gender",children:[Object(b.jsx)("p",{children:"\uc131\ubcc4"}),Object(b.jsx)("label",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"radio",value:"male",onClick:u}),"\ub0a8\uc790"]})}),Object(b.jsx)("label",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"radio",value:"female",onClick:u}),"\uc5ec\uc790"]})})]}),Object(b.jsx)("div",{className:"buttonContainer",children:Object(b.jsx)(x.b,{to:s&&o?"/example":"/",children:Object(b.jsx)(d,{classname:s&&o?"btn_click":"btn",text:"\uac80\uc0ac\uc2dc\uc791",name:"main",nextbutton:function(){s&&o&&e.changeuser(s,o)}})})})]})}c(34);function O(e){return console.log("Progressbar \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4."),Object(b.jsxs)("div",{className:"gauge",children:[Object(b.jsxs)("div",{className:"percent",children:[Object(b.jsx)("h2",{children:e.text}),Object(b.jsxs)("h2",{children:[e.percent,"%"]})]}),Object(b.jsx)("div",{className:"progressbar_before",style:{width:e.percent+"%"}}),Object(b.jsx)("div",{className:"progressbar"})]})}c(35);function h(e){console.log("CheckBox \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var t=e.value01,c=e.answerscore01,n=e.answer01,s=e.value02,a=e.answerscore02,l=e.answer02,r=e.name,o=e.checked;function j(t){console.log("\uc120\ud0dd\ud55c \ud56d\ubaa9\uc774 \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4!"),e.updateResult({name:t.target.name,select:t.target.value})}return console.log("checked\ub294",o),Object(b.jsxs)("div",{className:"checkbox",style:e.cb,children:[Object(b.jsx)("p",{children:"\ub450 \uac1c \uac00\uce58 \uc911\uc5d0 \uc790\uc2e0\uc5d0\uac8c \ub354 \uc911\uc694\ud55c \uac00\uce58\ub97c \uc120\ud0dd\ud558\uc138\uc694."}),Object(b.jsxs)("div",{className:"radiobox",style:e.rb,children:[Object(b.jsx)("label",{title:t,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:r,value:c,onClick:j,checked:o===c?"checked":null}),Object(b.jsx)("span",{children:n})," : ",t]})}),Object(b.jsx)("label",{title:s,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:r,value:a,onClick:j,checked:o===a?"checked":null}),Object(b.jsx)("span",{children:l})," : ",s]})})]})]})}c(36);function p(){console.log("Example \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(b.jsxs)("div",{className:"container",style:{marginTop:"10%"},children:[Object(b.jsx)(O,{text:"\uac80\uc0ac\uc608\uc2dc",percent:"0"}),Object(b.jsxs)("div",{className:"explanation",children:[Object(b.jsx)("p",{children:"\uc9c1\uc5c5\uacfc \uad00\ub828\ub41c \ub450\uac1c\uc758 \uac00\uce58 \uc911\uc5d0\uc11c \uc790\uae30\uc5d0\uac8c \ub354 \uc911\uc694\ud55c \uac00\uce58\uc5d0 \ud45c\uc2dc\ud558\uc138\uc694."}),Object(b.jsx)("p",{children:"\uac00\uce58\uc758 \ub73b\uc744 \uc798 \ubaa8\ub974\uaca0\ub2e4\uba74 \ubb38\ud56d\uc5d0 \ub9c8\uc6b0\uc2a4 \ucee4\uc11c\ub97c \uc62c\ub824\uc11c \uc124\uba85\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694."})]}),Object(b.jsx)(h,{updateResult:function(){console.log("\uac80\uc0ac\uc2dc\uc791 \ubc84\ud2bc\uc774 \uc774\uc81c \ud65c\uc131\ud654\ub41c\ub2e4!!"),s(!0)},name:"ex",answer01:"\ub2a5\ub825\ubc1c\ud718",answer02:"\uc790\uc728\uc131",value01:"\uc9c1\uc5c5\uc744 \ud1b5\ud574 \uc790\uc2e0\uc758 \ub2a5\ub825\uc744 \ubc1c\ud718\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",value02:"\uc77c\ud558\ub294 \uc2dc\uac04\uacfc \ubc29\uc2dd\uc5d0 \ub300\ud574\uc11c \uc2a4\uc2a4\ub85c \uacb0\uc815\ud560 \uc218 \uc788\ub294 \uac83\uc785\ub2c8\ub2e4.",answerscore01:-1,checked:""}),Object(b.jsx)("div",{className:"buttonContainer",children:Object(b.jsx)(x.b,{to:c?"/test/0":"/example",children:Object(b.jsx)(d,{classname:c?"btn_click":"btn",text:"\uac80\uc0ac\uc2dc\uc791",name:"example"})})})]})}var v=c(16),m=c.n(v),g=c(26),f=(c(38),c(11)),k=c.n(f);function w(e){console.log("Test \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1],l=Math.ceil(s.length/5),o=Object(n.useState)(0),u=Object(i.a)(o,2),p=u[0],v=u[1],f=s.slice(5*p,5*(p+1)),w=Math.floor((p+1)/l*100);function N(){return(N=Object(g.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://inspct.career.go.kr/openapi/test/questions?apikey=fbc9e4d5e474e6e35b5de6d43988d70d&q=6");case 3:t=e.sent,c=t.data.RESULT,a(Object(r.a)(c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(n.useEffect)((function(){return function(){return N.apply(this,arguments)}()}),[]),console.log("\ud604\uc7ac Test \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c pagenumber\ub294 ",p);var y=Object(n.useState)({}),S=Object(i.a)(y,2),C=S[0],T=S[1];function _(e){T((function(t){var c=Object(j.a)({},t),n=e.name,s=e.select;return c[n]=s,c}))}console.log("\ud604\uc7ac \uc120\ud0dd\ud55c \ud56d\ubaa9\uc740",C);var E=f.map((function(e,t){var c="B"+String(t+5*p+1),n=C[c];return console.log("checked\ub294",n),Object(b.jsx)(h,{name:c,answer01:e.answer01,answer02:e.answer02,answerscore01:e.answerScore01,answerscore02:e.answerScore02,value01:e.answer03,value02:e.answer04,updateResult:_,checked:n&&n},t)}));return Object.keys(C).length===5*(p+1)&&console.log("5\uac1c\uc758 \ud56d\ubaa9\uc744 \ubaa8\ub450 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4!!!!!!!! \uad7f"),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{text:"\uac80\uc0ac\uc9c4\ud589",percent:w}),E,Object(b.jsxs)("div",{className:"buttonbox",children:[Object(b.jsx)(x.b,{to:0!==p?"/test/"+String(p-1):"/Example/",children:Object(b.jsx)(d,{classname:"btn",text:"\uc774\uc804",prevpage:function(){console.log("\uc774\uc804 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),v(0!==p?p-1:0)},name:"prev"})}),Object(b.jsx)(x.b,{to:5!==p?"/test/"+String(p+1):"/Finish/",children:Object(b.jsx)(d,{classname:"btn",text:"\ub2e4\uc74c",nextpage:function(){console.log("\ub2e4\uc74c \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),5!==p?v(p+1):(v(p),e.resultlist(C))},name:"next"})})]})]})}c(57);function N(e){console.log("Finish \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var t=e.username,c=e.maxvalue,n=e.minvalue;return console.log("username\uc740",t),console.log("maxvalue\ub294",c),console.log("minvalue\ub294",n),c&&c.length>=2?c=c.join("\uc640(\uacfc)"):n&&n.length>=2&&(n=n.join("\uc640(\uacfc)")),Object(b.jsxs)("div",{className:"container",style:{marginTop:"20%"},children:[Object(b.jsx)("h2",{children:"\uac80\uc0ac\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(b.jsxs)("div",{className:"explanation",children:[Object(b.jsx)("p",{children:"\uac80\uc0ac\uacb0\uacfc\ub294 \uc5ec\ub7ec\ubd84\uc774 \uc9c1\uc5c5\uc744 \uc120\ud0dd\ud560 \ub54c \uc0c1\ub300\uc801\uc73c\ub85c \uc5b4\ub5a0\ud55c \uac00\uce58\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\ub294\uc9c0\ub97c \uc54c\ub824\uc8fc\uace0,"}),Object(b.jsx)("p",{children:"\uc911\uc694 \uac00\uce58\ub97c \ucda9\uc871\uc2dc\ucf1c\uc904 \uc218 \uc788\ub294 \uc9c1\uc5c5\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574 \ubcfc \uae30\ud68c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:["\uac80\uc0ac \uacb0\uacfc ",t,"\ub2d8\uc740 \uc0c1\ub300\uc801\uc73c\ub85c ",c,"\ub97c(\uc744) \uc911\uc694\ud558\ub2e4\uace0 \uc0dd\uac01\ud558\uba70,"]}),Object(b.jsxs)("p",{children:[n,"\ub97c(\uc744) \ub35c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud55c\ub2e4\uace0 \ub098\uc654\uc2b5\ub2c8\ub2e4."]})]}),Object(b.jsx)("div",{className:"buttonContainer",children:Object(b.jsx)(x.b,{to:"/result",children:Object(b.jsx)(d,{classname:"btn",text:"\uacb0\uacfc \ubcf4\uae30"})})})]})}c(58);function y(e){console.log("Result \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var t=e.username,c=e.usergender,n=e.objectvalue;console.log("objectvalue\ub294",n);var s=new Date,a=s.getFullYear()+"."+("0"+(s.getMonth()+1)).slice(-2)+"."+("0"+s.getDate()).slice(-2);return Object(b.jsxs)("div",{className:"container",style:{marginTop:"5%"},children:[Object(b.jsx)("h2",{style:{borderBottom:"2px solid gray",width:300,height:20,margin:"auto",color:"black"},children:"\uc9c1\uc5c5\uac00\uce58\uad00\uac80\uc0ac \uacb0\uacfc\ud45c"}),Object(b.jsxs)("div",{className:"explanation",children:[Object(b.jsx)("p",{children:"\uac80\uc0ac\uacb0\uacfc\ub294 \uc5ec\ub7ec\ubd84\uc774 \uc9c1\uc5c5\uc744 \uc120\ud0dd\ud560 \ub54c \uc0c1\ub300\uc801\uc73c\ub85c \uc5b4\ub5a0\ud55c \uac00\uce58\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\ub294\uc9c0\ub97c \uc54c\ub824\uc8fc\uace0,"}),Object(b.jsx)("p",{children:"\uc911\uc694 \uac00\uce58\ub97c \ucda9\uc871\uc2dc\ucf1c\uc904 \uc218 \uc788\ub294 \uc9c1\uc5c5\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574 \ubcfc \uae30\ud68c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."})]}),Object(b.jsxs)("div",{className:"usertable",children:[Object(b.jsx)("div",{children:"\uc774\ub984"}),Object(b.jsx)("div",{children:"\uc131\ubcc4"}),Object(b.jsx)("div",{children:"\uac80\uc0ac\uc77c"}),Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{children:c}),Object(b.jsx)("div",{children:a})]}),Object(b.jsx)("p",{className:"graphtitle",children:"\uc9c1\uc5c5\uac00\uce58\uad00\uacb0\uacfc"}),Object(b.jsxs)("div",{className:"graph",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["\ub2a5\ub825",Object(b.jsx)("br",{}),"\ubc1c\ud718"]})}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"\uc790\uc728\uc131"})}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"\ubcf4\uc218"})}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"\uc548\uc815\uc131"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["\uc0ac\ud68c\uc801",Object(b.jsx)("br",{}),"\uc778\uc815"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["\uc0ac\ud68c",Object(b.jsx)("br",{}),"\ubd09\uc0ac"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["\uc790\uae30",Object(b.jsx)("br",{}),"\uacc4\ubc1c"]})}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"\ucc3d\uc758\uc131"})})]}),Object(b.jsx)("div",{className:"buttonContainer",children:Object(b.jsx)(x.b,{to:"/example",children:Object(b.jsx)(d,{text:"\uacb0\uacfc \ubcf4\uae30",classname:"btn"})})})]})}var S=c(2);var C=function(){console.log("App \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc2b5\ub2c8\ub2e4.");var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),l=Object(i.a)(a,2),d=l[0],x=l[1],O=Object(n.useState)([]),h=Object(i.a)(O,2),v=h[0],m=h[1],g=Object(n.useState)([]),f=Object(i.a)(g,2),C=f[0],T=f[1],_=Object(n.useState)([]),E=Object(i.a)(_,2),M=E[0],R=E[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(S.c,{children:[Object(b.jsx)(S.a,{path:"/",element:Object(b.jsx)(u,{changeuser:function(e,t){s(e),x(t),console.log("App \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc774\ub984\uacfc \uc131\ubcc4 \ubc14\ub01c"),console.log("\uc774\ub984\uc740",c),console.log("\uc131\ubcc4\uc740",d)}})}),Object(b.jsx)(S.a,{path:"/example",element:Object(b.jsx)(p,{})}),Object(b.jsx)(S.a,{path:"/test/:id",element:Object(b.jsx)(w,{resultlist:function(e){var t=function(e){var t=[];for(var c in e)t.push([c,e[c]]);return t.sort((function(e,t){return e[1]-t[1]}))}(e);console.log("\uc804\uccb4 \ud56d\ubaa9\uc744 \uc815\ub82c\ud588\uc2b5\ub2c8\ub2e4",t);var n=function(e){var t="";for(var c in e)t+="".concat(e[c][0],"=").concat(e[c][1]," ");return t}(t);console.log("\uc804\uccb4 \ud56d\ubaa9\uc744 \ubb38\uc790\ub85c \ubc14\uafe8\uc2b5\ub2c8\ub2e4",n),k()({method:"post",url:"https://inspct.career.go.kr/openapi/test/report",data:{apikey:"fbc9e4d5e474e6e35b5de6d43988d70d",qestrnSeq:"6",trgetSe:"100209",name:c,gender:"".concat("female"===d?"100324":"100323"),grade:"",startDtm:1550466291034,answers:n}}).then((function(e){console.log("response.data \uc785\ub2c8\ub2e4",e.data.RESULT.url);var t=e.data.RESULT.url;console.log("\uc774\uac83\uc740 \ucd94\ucd9c\ud55c data",t);var c=t.split("=")[1];console.log("\uc774\uac83\uc740 \ucd94\ucd9c\ud55c url_seq",c),k.a.get("https://www.career.go.kr/inspct/api/psycho/report?seq=".concat(c)).then((function(e){console.log("\uc774\uac83\uc740 \uacb0\uacfc\uac12\uc744 get\ud55c \ub370\uc774\ud130\uc785\ub2c8\ub2e4",e.data);var t=e.data.result.wonScore;console.log("\uc774\uac83\uc740 score\uc785\ub2c8\ub2e4",t);var c,n=["\ub2a5\ub825\ubc1c\ud718","\uc790\uc728\uc131","\ubcf4\uc218","\uc548\uc815\uc131","\uc0ac\ud68c\uc801 \uc548\uc815","\uc0ac\ud68c\ubd09\uc0ac","\uc790\uae30\uacc4\ubc1c","\ucc3d\uc758\uc131"];t.split(" ").forEach((function(e,t){var s=e.split("=");c=Object(j.a)(Object(j.a)({},c),{},Object(o.a)({},n[t],Number(s[1]))),console.log("\uac00\uacf5\ub41c \ub370\uc774\ud130\ub294",c)})),console.log("\uac00\uacf5\ub41c \ub370\uc774\ud130\ub294",c);var s=Object.keys(c).slice(0,-1),a=Object.values(c).slice(0,-1);m(Object(r.a)(a));var l=Math.max.apply(Math,Object(r.a)(a)),i=Math.min.apply(Math,Object(r.a)(a));for(var b in console.log("key\ub294",s),console.log("value\ub294",a),console.log("max\ub294",l),console.log("min\uc740",i),a)a[b]===i?R([].concat(Object(r.a)(M),[s[b]])):a[b]===l&&T([].concat(Object(r.a)(C),[s[b]]));console.log("max_value\ub294",C),console.log("min_value",M)})).catch((function(e){console.log(e,"GET \uc5d0\ub7ec\uc785\ub2c8\ub2e4 \u3161\u3161")}))})).catch((function(e){console.log(e,"POST \uc5d0\ub7ec\uc785\ub2c8\ub2e4 \u3161\u3161")}))}})}),Object(b.jsx)(S.a,{path:"/finish",element:Object(b.jsx)(N,{username:c,maxvalue:C,minvalue:M})}),Object(b.jsx)(S.a,{path:"/result",element:Object(b.jsx)(y,{}),username:c,usergender:d,objectvalue:v})]})})};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x.a,{basename:"/elice_first_project",children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.10a92133.chunk.js.map