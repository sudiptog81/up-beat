(this["webpackJsonp@up-beat/client"]=this["webpackJsonp@up-beat/client"]||[]).push([[0],{35:function(e,t,n){e.exports=n(50)},40:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(23),l=n.n(u),o=(n(40),n(11)),i=n(4),c=n(5),d=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-menu"},r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))},v=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"}))};function f(){var e=Object(i.a)(["\n    color:",";\n    padding:5px;\n"]);return f=function(){return e},e}var s=c.b.svg(f(),(function(e){return e.theme.fg_inactive})),m=function(){return r.a.createElement(s,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-search"},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))};function p(){var e=Object(i.a)(["\n    color: ",";\n    border-left: ",";\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: center;\n    margin: ",";\n    svg {\n        height: 22px;\n        width: 24px;\n        margin: 5px;\n    }\n"]);return p=function(){return e},e}function h(){var e=Object(i.a)([""]);return h=function(){return e},e}function b(){var e=Object(i.a)(["\n    z-index: 25;\n    position: absolute;\n    cursor: pointer;\n    padding: 15px 28px;\n"]);return b=function(){return e},e}function x(){var e=Object(i.a)(["\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    overflow: auto;\n    width: 100%;\n"]);return x=function(){return e},e}function g(){var e=Object(i.a)([""]);return g=function(){return e},e}function y(){var e=Object(i.a)(["\n    z-index: 10;\n    width: 80px;\n    min-width: 80px;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-left: ",";\n    transition: margin 400ms;\n    background-color: ",";\n    box-shadow: 1px 1px 3px 1px #e0e0e0;\n"]);return y=function(){return e},e}var E=c.b.div(y(),(function(e){return e.open?"0px":"-80px"}),(function(e){return e.theme.bg_card})),w=c.b.div(g()),j=c.b.div(x()),O=c.b.div(b()),k=c.b.div(h()),_=c.b.div(p(),(function(e){return e.active?e.theme.fg:e.theme.fg_inactive}),(function(e){return e.active?"solid 5px ".concat(e.theme.fg):"none"}),(function(e){return e.active?"5px 5px 5px 0":"5px 5px 5px 5px"})),F=function(){var e=r.a.useState(!0),t=Object(o.a)(e,2),n=t[0],a=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onClick:function(){return a((function(e){return!e}))}},r.a.createElement(d,null)),r.a.createElement(E,{open:n},r.a.createElement(w,null),r.a.createElement(j,null,r.a.createElement(_,{active:!0},r.a.createElement(v,null)),r.a.createElement(_,null,r.a.createElement(v,null))),r.a.createElement(k,null)))};function D(){var e=Object(i.a)(["\n    color: ",";\n"]);return D=function(){return e},e}function S(){var e=Object(i.a)(["\n    color: ",";\n"]);return S=function(){return e},e}function z(){var e=Object(i.a)(["\n    color: ",";\n"]);return z=function(){return e},e}function A(){var e=Object(i.a)(["\n    color: ",";\n"]);return A=function(){return e},e}function C(){var e=Object(i.a)(["\n    color: ",";\n"]);return C=function(){return e},e}function B(){var e=Object(i.a)(["\n    color: ",";\n"]);return B=function(){return e},e}var T="primary",$="secondary",R=function(e){return e.type&&e.type===T?e.theme.txt_primary:e.type&&e.type===$?e.theme.txt_sec:"inherit"},I=(c.b.h1(B(),(function(e){return R(e)})),c.b.h2(C(),(function(e){return R(e)})),c.b.h3(A(),(function(e){return R(e)})));c.b.h4(z(),(function(e){return R(e)})),c.b.h5(S(),(function(e){return R(e)})),c.b.h6(D(),(function(e){return R(e)}));function M(){var e=Object(i.a)(["\n    list-style-type: none;\n    padding: 0px;\n    overflow: auto;\n"]);return M=function(){return e},e}function N(){var e=Object(i.a)(["\n    line-height: 30px;\n    padding: 10px;\n    background-color: ",";\n    cursor: pointer;\n    &:hover {\n        background-color: ",";\n    }\n"]);return N=function(){return e},e}var W=c.b.li(N(),(function(e){return e.active&&e.theme.bg_select}),(function(e){return e.active?e.theme.bg_select:e.theme.bg_hover})),q=c.b.ul(M()),L=r.a.memo((function(e){var t=e.data,n=void 0===t?[]:t,u=e.onClick,l=Object(a.useState)(0),i=Object(o.a)(l,2),c=i[0],d=i[1],v=Object(a.useRef)(!1);return Object(a.useEffect)((function(){v.current?u&&n&&u(n[c]):v.current=!0}),[c,u]),Object(a.useEffect)((function(){u&&n&&u(n[0])}),[n]),r.a.createElement(q,null,n&&n instanceof Array&&n.map((function(e,t){return r.a.createElement(W,{active:t==c,onClick:function(){return d(t)},tabIndex:t},r.a.createElement("a",null,e.url||""))})))})),J=n(14),U=n(13),Y=n.n(U);function H(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: ",";\n"]);return H=function(){return e},e}var G=c.b.div(H(),(function(e){return e.flexDirection&&e.flexDirection}));function K(){var e=Object(i.a)(["\n    flex-grow: 1;\n    border-bottom: solid 1px\n        ",";\n    border: none;\n    font-size: ","};\n"]);return K=function(){return e},e}var P=c.b.input(K(),(function(e){return e.theme.fg_inactive?e.theme.fg_inactive:"#d1dbe2"}),(function(e){return e.fontSize?e.fontSize:"small"})),Q=function(){return r.a.createElement(G,{flexDirection:"row"},r.a.createElement(m,null),r.a.createElement(P,{placeholder:"Search here"}))};function V(){var e=Object(i.a)(["\n    query {\n        urls {\n            url\n            id\n        }\n    }\n"]);return V=function(){return e},e}function X(){var e=Object(i.a)(["\n    padding: 30px;\n"]);return X=function(){return e},e}function Z(){var e=Object(i.a)(["\n    max-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-width: 250px;\n    background-color: ",";\n    box-shadow: 1px 1px 3px 1px #e0e0e0;\n"]);return Z=function(){return e},e}var ee=c.b.div(Z(),(function(e){return e.theme.bg_card})),te=c.b.div(X()),ne=Y()(V()),ae=function(e){var t=Object(J.a)(ne,{}),n=t.loading,a=t.error,u=t.data;return r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(I,null,"Domains"),r.a.createElement(Q,null)),n?r.a.createElement("p",null,"Loading"):a?r.a.createElement("p",null,"Failed to load the data..."):r.a.createElement(L,{data:u.urls,onClick:e.setUrl}))};function re(){var e=Object(i.a)(["\n    overflow: scroll;\n    width: 100%;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n"]);return re=function(){return e},e}var ue=c.b.div(re()),le=n(31),oe=[{name:"This Week"},{name:"This Month"},{name:"This Year"}];function ie(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return ie=function(){return e},e}function ce(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return ce=function(){return e},e}function de(){var e=Object(i.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    flex-direction: ",";\n    height: 100%;\n    overflow: auto;\n    margin: 70px 35px;\n"]);return de=function(){return e},e}c.b.div(de(),(function(e){return e.flexDirection||"row"}));var ve=c.b.div(ce()),fe=c.b.div(ie());function se(){var e=Object(i.a)(["\n    align-self: flex-end;\n    border: 0;\n    background: transparent;\n    font-weight: bold;\n"]);return se=function(){return e},e}var me=c.b.select(se());function pe(){var e=Object(i.a)(["\n    background-color: ",";\n    box-shadow: 1px 1px 3px 1px #e0e0e0;\n    margin: 20px 10px;\n    border-radius: 5px;\n"]);return pe=function(){return e},e}var he=c.b.div(pe(),(function(e){return e.theme.bg_card}));function be(){var e=Object(i.a)(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 33px;\n    letter-spacing: 1px;\n    color: ",";\n"]);return be=function(){return e},e}function xe(){var e=Object(i.a)(["\n    margin: 10px 0px;\n    font-style: normal;\n    font-weight: 800;\n    font-size: 40px;\n    line-height: 40px;\n"]);return xe=function(){return e},e}function ge(){var e=Object(i.a)(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 33px;\n"]);return ge=function(){return e},e}for(var ye=oe.map((function(e){return e.name})),Ee=function(e){var t=e.title,n=void 0===t?"":t,a=e.value,u=void 0===a?"":a,l=e.percent,o=void 0===l?"":l;e.type;return r.a.createElement(fe,{style:{padding:"15px 28px"}},r.a.createElement(we,null,n),r.a.createElement(je,null,u),r.a.createElement(Oe,{type:"healthy"},o))},we=c.b.span(ge()),je=c.b.span(xe()),Oe=c.b.span(be(),(function(e){return"healthy"===e.type?"#219653":"unhealthy"===e.type?"#EB5757":"warn"===e.type?"yellow":"grey"})),ke=function(e){var t=e.title,n=void 0===t?"":t,a=e.options,u=void 0===a?[]:a;return r.a.createElement(ve,{style:{alignItems:"center",padding:"20px 10px"}},r.a.createElement(I,{style:{margin:0}},n),r.a.createElement(me,{onChange:function(e){return console.log(oe[Number(e.target.value)])}},u&&u instanceof Array&&u.map((function(e,t){return r.a.createElement("option",{value:t},e)}))))},_e=function(e){Object(le.a)(e);var t=r.a.useRef(!1);return r.a.useEffect((function(){t.current||(t.current=!0)}),[]),console.log(">>"),r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,{title:"Overview",options:ye}),r.a.createElement(he,null,r.a.createElement(ve,{style:{justifyContent:"space-between"}},r.a.createElement(Ee,{title:"Average Response Time",value:"100ms",percent:"+30%",type:"green"}),r.a.createElement(Ee,{title:"Best response time",value:"80ms",percent:"-44%",type:"red"}),r.a.createElement(Ee,{title:"Worst response time",value:"1000ms",percent:"+30%",type:"green"}))))},Fe=n(32),De=n.n(Fe),Se=1585329117896,ze=[],Ae=0;Ae<120;Ae++){var Ce=[Se+=864e5,[{date:"2014-01-01",value:15e7},{date:"2014-01-02",value:160379978},{date:"2014-01-03",value:170493749},{date:"2014-01-04",value:160785250},{date:"2014-01-05",value:167391904},{date:"2014-01-06",value:161576838},{date:"2014-01-07",value:161413854},{date:"2014-01-08",value:152177211},{date:"2014-01-09",value:140762210},{date:"2014-01-10",value:144381072},{date:"2014-01-11",value:154352310},{date:"2014-01-12",value:165531790},{date:"2014-01-13",value:175748881},{date:"2014-01-14",value:187064037},{date:"2014-01-15",value:197520685},{date:"2014-01-16",value:210176418},{date:"2014-01-17",value:196122924},{date:"2014-01-18",value:207337480},{date:"2014-01-19",value:200258882},{date:"2014-01-20",value:186829538},{date:"2014-01-21",value:192456897},{date:"2014-01-22",value:204299711},{date:"2014-01-23",value:192759017},{date:"2014-01-24",value:203596183},{date:"2014-01-25",value:208107346},{date:"2014-01-26",value:196359852},{date:"2014-01-27",value:192570783},{date:"2014-01-28",value:177967768},{date:"2014-01-29",value:190632803},{date:"2014-01-30",value:203725316},{date:"2014-01-31",value:218226177},{date:"2014-02-01",value:210698669},{date:"2014-02-02",value:217640656},{date:"2014-02-03",value:216142362},{date:"2014-02-04",value:201410971},{date:"2014-02-05",value:196704289},{date:"2014-02-06",value:190436945},{date:"2014-02-07",value:178891686},{date:"2014-02-08",value:171613962},{date:"2014-02-09",value:157579773},{date:"2014-02-10",value:158677098},{date:"2014-02-11",value:147129977},{date:"2014-02-12",value:151561876},{date:"2014-02-13",value:151627421},{date:"2014-02-14",value:143543872},{date:"2014-02-15",value:136581057},{date:"2014-02-16",value:135560715},{date:"2014-02-17",value:122625263},{date:"2014-02-18",value:112091484},{date:"2014-02-19",value:98810329},{date:"2014-02-20",value:99882912},{date:"2014-02-21",value:94943095},{date:"2014-02-22",value:104875743},{date:"2014-02-23",value:116383678},{date:"2014-02-24",value:125028841},{date:"2014-02-25",value:123967310},{date:"2014-02-26",value:133167029},{date:"2014-02-27",value:128577263},{date:"2014-02-28",value:115836969},{date:"2014-03-01",value:119264529},{date:"2014-03-02",value:109363374},{date:"2014-03-03",value:113985628},{date:"2014-03-04",value:114650999},{date:"2014-03-05",value:110866108},{date:"2014-03-06",value:96473454},{date:"2014-03-07",value:104075886},{date:"2014-03-08",value:103568384},{date:"2014-03-09",value:101534883},{date:"2014-03-10",value:115825447},{date:"2014-03-11",value:126133916},{date:"2014-03-12",value:116502109},{date:"2014-03-13",value:130169411},{date:"2014-03-14",value:124296886},{date:"2014-03-15",value:126347399},{date:"2014-03-16",value:131483669},{date:"2014-03-17",value:142811333},{date:"2014-03-18",value:129675396},{date:"2014-03-19",value:115514483},{date:"2014-03-20",value:117630630},{date:"2014-03-21",value:122340239},{date:"2014-03-22",value:132349091},{date:"2014-03-23",value:125613305},{date:"2014-03-24",value:135592466},{date:"2014-03-25",value:123408762},{date:"2014-03-26",value:111991454},{date:"2014-03-27",value:116123955},{date:"2014-03-28",value:112817214},{date:"2014-03-29",value:113029590},{date:"2014-03-30",value:108753398},{date:"2014-03-31",value:99383763},{date:"2014-04-01",value:100151737},{date:"2014-04-02",value:94985209},{date:"2014-04-03",value:82913669},{date:"2014-04-04",value:78748268},{date:"2014-04-05",value:63829135},{date:"2014-04-06",value:78694727},{date:"2014-04-07",value:80868994},{date:"2014-04-08",value:93799013},{date:"2014-04-09",value:99042416},{date:"2014-04-10",value:97298692},{date:"2014-04-11",value:83353499},{date:"2014-04-12",value:71248129},{date:"2014-04-13",value:75253744},{date:"2014-04-14",value:68976648},{date:"2014-04-15",value:71002284},{date:"2014-04-16",value:75052401},{date:"2014-04-17",value:83894030},{date:"2014-04-18",value:90236528},{date:"2014-04-19",value:99739114},{date:"2014-04-20",value:96407136},{date:"2014-04-21",value:108323177},{date:"2014-04-22",value:101578914},{date:"2014-04-23",value:115877608},{date:"2014-04-24",value:112088857},{date:"2014-04-25",value:112071353},{date:"2014-04-26",value:101790062},{date:"2014-04-27",value:115003761},{date:"2014-04-28",value:120457727},{date:"2014-04-29",value:118253926},{date:"2014-04-30",value:117956992}][Ae].value];ze.push(Ce)}var Be={options:{chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"}},dataLabels:{enabled:!1},markers:{size:0},title:{text:"Response Time",align:"left"},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{title:{text:"Response Time (ms)"}},xaxis:{type:"datetime"},tooltip:{shared:!1}}},Te=function(e){var t=r.a.useMemo((function(){return function(e){var t=[];return e&&e instanceof Array&&e.forEach((function(e){t.push([e.createdAt,e.rDuration])})),[{name:"google.com",data:t}]}(e.data)}),[e.data]);return r.a.createElement(De.a,{options:Be.options,series:t,type:"area",width:"100%",height:"300"})};var $e=n(21),Re=n.n($e);function Ie(){var e=Object(i.a)(["\n    query getAnalytics($input: String!, $from: DateTime!, $to: DateTime!) {\n        getAnalytics(input: $input, from: $from, to: $to) {\n            url\n            status\n            createdAt\n            method\n            rDuration\n        }\n    }\n"]);return Ie=function(){return e},e}var Me=Y()(Ie()),Ne=function(e){var t,n=r.a.useState([Re()().startOf("week").toString(),Re()().endOf("day").toString()]),a=Object(o.a)(n,2),u=a[0],l=(a[1],Object(o.a)(u,2)),i=l[0],c=l[1],d=Object(J.a)(Me,{variables:{input:(null===e||void 0===e||null===(t=e.url)||void 0===t?void 0:t.id)||"",from:i,to:c}}),v=d.loading,f=d.error,s=d.data;return v?r.a.createElement(r.a.Fragment,null,"Loading.."):f?r.a.createElement(r.a.Fragment,null,"Oops something went wrong.."):r.a.createElement(he,null,r.a.createElement(fe,{style:{padding:"15px 28px"}},r.a.createElement(Te,{data:(null===s||void 0===s?void 0:s.getAnalytics)||[]}),";"))},We=function(e){return r.a.createElement(ue,null,r.a.createElement(_e,null),r.a.createElement(Ne,e))};function qe(){var e=Object(i.a)(["\n    height: 100%;\n    flex-grow: 1;\n    display: flex;\n"]);return qe=function(){return e},e}function Le(){var e=Object(i.a)(["\n    display: flex;\n    height: 100%;\n    background-color: ",";\n"]);return Le=function(){return e},e}var Je=c.b.div(Le(),(function(e){return e.theme.bg})),Ue=c.b.div(qe()),Ye=function(){var e=r.a.useState({}),t=Object(o.a)(e,2),n=t[0],a=t[1];return r.a.createElement(Je,null,r.a.createElement(F,null),r.a.createElement(Ue,null,r.a.createElement(ae,{setUrl:a}),r.a.createElement(We,{url:n})))},He={default:{fg:"#4DA1FF",fg_inactive:"#D1DBE2",txt_primary:"#000000",txt_sec:"#9da1a5",bg:"#F2F2F2",bg_card:"#fff",bg_hover:"#EFF2F7",bg_select:"#d1e6fb"},dark:{fg:"#4DA1FF",fg_inactive:"#D1DBE2",txt_primary:"#000000",txt_sec:"#9da1a5",bg:"black",bg_card:"#fff",bg_hover:"#EFF2F7",bg_select:"#d1e6fb"}},Ge=n(9),Ke=new(n(33).a)({uri:"http://localhost:3000/graphql"});var Pe=function(){var e=r.a.useState(He.default),t=Object(o.a)(e,2),n=t[0];return t[1],r.a.createElement(Ge.a,{client:Ke},r.a.createElement(c.a,{theme:n},r.a.createElement(Ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4a023324.chunk.js.map