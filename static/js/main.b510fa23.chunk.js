(this["webpackJsonpproject-grades"]=this["webpackJsonpproject-grades"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(29),o=a.n(n),i=(a(96),a(97),a(48)),s=a(119),d=a(120),l=a(122),j=a(121),b=a(78),h=a(79),u=a(49),y=a.n(u),O=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,null,[{key:"getCookie",value:function(e){return y.a.get(e)}},{key:"setCookie",value:function(e,t){y.a.set(e,t)}},{key:"checkCookieExists",value:function(e){return void 0!==y.a.get(e)}},{key:"delete_cookie",value:function(e){y.a.remove(e)}}]),e}(),p=function(e,t){return parseFloat((e/100*(t/100)*100).toFixed(1))},_=function(e,t){return(70-p(e.yearGrade,e.yearWorth))/t.yearWorth*100},m=function(e){var t=p(e[0].yearGrade,e[0].yearWorth),a=p(e[1].yearGrade,e[1].yearWorth);return parseFloat(t+a)},x=function(e){var t=0,a=0;return Object.keys(e).forEach((function(r){a+=e[r].grade,t+=1})),a/t},g=a(5),f=Object(r.createContext)(),C=a(2);function k(){var e=Object(r.useContext)(f),t=e.yearState,a=e.YearDispatcher;return Object(C.jsxs)(l.a,{inverted:!0,color:"red",celled:!0,fixed:!0,textAlign:"center",className:"CustomTable",children:[Object(C.jsx)(l.a.Header,{children:Object(C.jsxs)(l.a.Row,{children:[Object(C.jsx)(l.a.HeaderCell,{children:"Year"}),Object(C.jsx)(l.a.HeaderCell,{children:"Average Year Grade"}),Object(C.jsx)(l.a.HeaderCell,{children:"Year Worth"}),Object(C.jsx)(l.a.HeaderCell,{children:"Complete"})]})}),Object(C.jsx)(l.a.Body,{children:function(){var e=[];return Object.keys(t).forEach((function(a){e.push(t[a])})),e}().map((function(e){return Object(C.jsxs)(l.a.Row,{children:[Object(C.jsx)(l.a.Cell,{children:e.yearTitle}),Object(C.jsx)(l.a.Cell,{children:e.editable?Object(C.jsx)(j.a,{icon:"edit",iconPosition:"left",type:"number",min:0,max:100,onChange:function(t,r){return function(e,t,r){O.setCookie("".concat(r.yearDispatchName,"Grade"),t.value),a({type:"set_".concat(r.yearDispatchName,"_grade"),payload:t.value?parseInt(t.value):0})}(0,r,e)},fluid:!0,placeholder:"".concat(e.yearGrade,"%")}):"".concat(e.yearGrade,"%")}),Object(C.jsx)(l.a.Cell,{children:Object(C.jsx)(j.a,{icon:"edit",iconPosition:"left",type:"number",min:0,max:100,onChange:function(t,r){return function(e,t,r){O.setCookie("".concat(r.yearDispatchName,"Worth"),t.value),a({type:"set_".concat(r.yearDispatchName,"_worth"),payload:parseInt(t.value)})}(0,r,e)},fluid:!0,placeholder:"".concat(e.yearWorth,"%")})}),Object(C.jsxs)(l.a.Cell,{children:[p(e.yearGrade,e.yearWorth),"%"]})]})}))})]})}function v(){var e=Object(r.useContext)(f).yearState;return Object(C.jsxs)(l.a,{inverted:!0,color:"green",celled:!0,fixed:!0,textAlign:"center",className:"CustomTable",children:[Object(C.jsx)(l.a.Header,{children:Object(C.jsxs)(l.a.Row,{children:[Object(C.jsx)(l.a.HeaderCell,{children:"Total To Get First"}),Object(C.jsx)(l.a.HeaderCell,{children:"3rd Year Average To Get First"}),Object(C.jsx)(l.a.HeaderCell,{children:"Total Achieved"})]})}),Object(C.jsx)(l.a.Body,{children:Object(C.jsxs)(l.a.Row,{children:[Object(C.jsxs)(l.a.Cell,{children:[70-p(e.second_year.yearGrade,e.second_year.yearWorth),"%"]}),Object(C.jsxs)(l.a.Cell,{children:[_(e.second_year,e.third_year),"%"]}),Object(C.jsxs)(l.a.Cell,{children:[m([e.second_year,e.third_year]),"%"]})]})})]})}function w(){var e=Object(r.useContext)(f),t=e.unitState,a=e.UnitDispatcher,c=e.yearState,n=function(){var e=_(c.second_year,c.third_year),a=0,r=0;return Object.keys(t).forEach((function(c){0!==t[c].grade&&(a+=e-t[c].grade,r+=1)})),(e+a/r).toFixed(1)};return Object(C.jsxs)(l.a,{inverted:!0,color:"blue",celled:!0,fixed:!0,textAlign:"center",className:"CustomTable",children:[Object(C.jsx)(l.a.Header,{children:Object(C.jsxs)(l.a.Row,{children:[Object(C.jsx)(l.a.HeaderCell,{children:"Title"}),Object(C.jsx)(l.a.HeaderCell,{children:"Grade"}),Object(C.jsx)(l.a.HeaderCell,{children:"Grade Needed"})]})}),Object(C.jsx)(l.a.Body,{children:function(){var e=[];return Object.keys(t).forEach((function(a){e.push(t[a])})),e}().map((function(e){return Object(C.jsxs)(l.a.Row,{children:[Object(C.jsx)(l.a.Cell,{children:e.title}),Object(C.jsx)(l.a.Cell,{children:Object(C.jsx)(j.a,{icon:"edit",iconPosition:"left",type:"number",min:0,max:100,onChange:function(t,r){return function(e,t,r){O.setCookie(r.dispatch_name,t.value),a({type:"set_".concat(r.dispatch_name,"_grade"),payload:t.value?parseInt(t.value):0})}(0,r,e)},fluid:!0,placeholder:"".concat(e.grade?e.grade:0,"%")})}),Object(C.jsx)(l.a.Cell,{children:0!==e.grade?"passed":m([c.second_year,c.third_year])>70?"> 40% (".concat(n(e.grade),"%)"):"".concat(n(e.grade),"%")})]})}))})]})}function G(){var e=function(){var e={se_frameworks:{title:"SE Frameworks",grade:O.checkCookieExists("se_frameworks")?parseInt(O.getCookie("se_frameworks")):0,dispatch_name:"se_frameworks"},enterprise_programming:{title:"Enterprise Programming",grade:O.checkCookieExists("enterprise_programming")?parseInt(O.getCookie("enterprise_programming")):0,dispatch_name:"enterprise_programming"},mobile_development:{title:"Mobile Development",grade:O.checkCookieExists("mobile_development")?parseInt(O.getCookie("mobile_development")):0,dispatch_name:"mobile_development"},project:{title:"Project",grade:O.checkCookieExists("project")?parseInt(O.getCookie("project")):0,dispatch_name:"project"}},t={second_year:{yearTitle:"2nd",yearGrade:O.checkCookieExists("year2Grade")?parseInt(O.getCookie("year2Grade")):0,yearWorth:O.checkCookieExists("year2Worth")?parseInt(O.getCookie("year2Worth")):50,yearDispatchName:"year2",editable:!0},third_year:{yearTitle:"3nd",yearGrade:x(e),yearWorth:O.checkCookieExists("year3Worth")?parseInt(O.getCookie("year3Worth")):50,yearDispatchName:"year3",editable:!1}},a=Object(r.useReducer)((function(e,t){switch(t.type){case"set_se_frameworks_grade":return Object(g.a)(Object(g.a)({},e),{},{se_frameworks:Object(g.a)(Object(g.a)({},e.se_frameworks),{},{grade:t.payload})});case"set_enterprise_programming_grade":return Object(g.a)(Object(g.a)({},e),{},{enterprise_programming:Object(g.a)(Object(g.a)({},e.enterprise_programming),{},{grade:t.payload})});case"set_mobile_development_grade":return Object(g.a)(Object(g.a)({},e),{},{mobile_development:Object(g.a)(Object(g.a)({},e.mobile_development),{},{grade:t.payload})});case"set_project_grade":return Object(g.a)(Object(g.a)({},e),{},{project:Object(g.a)(Object(g.a)({},e.project),{},{grade:t.payload})});case"load_units":return Object(g.a)(Object(g.a)({},e),{},{state:t.payload});default:return e}}),e),c=Object(i.a)(a,2),n=c[0],o=c[1],s=Object(r.useReducer)((function(e,t){switch(t.type){case"set_year2_grade":return Object(g.a)(Object(g.a)({},e),{},{second_year:Object(g.a)(Object(g.a)({},e.second_year),{},{yearGrade:t.payload})});case"set_year2_worth":return Object(g.a)(Object(g.a)({},e),{},{second_year:Object(g.a)(Object(g.a)({},e.second_year),{},{yearWorth:t.payload})});case"set_year3_grade":return Object(g.a)(Object(g.a)({},e),{},{third_year:Object(g.a)(Object(g.a)({},e.third_year),{},{yearGrade:t.payload})});case"set_year3_worth":return Object(g.a)(Object(g.a)({},e),{},{third_year:Object(g.a)(Object(g.a)({},e.third_year),{},{yearWorth:t.payload})});case"load_years":return Object(g.a)(Object(g.a)({},e),{},{state:t.payload});default:return e}}),t),d=Object(i.a)(s,2),l=d[0],j=d[1];return Object(r.useEffect)((function(){j({type:"set_year3_grade",payload:x(n)})}),[n]),[{unitState:n,UnitDispatcher:o,yearState:l,YearDispatcher:j}]}(),t=Object(i.a)(e,1)[0];return Object(C.jsx)(f.Provider,{value:t,children:Object(C.jsxs)(s.a,{children:[Object(C.jsx)(d.a,{section:!0,hidden:!0}),Object(C.jsx)(k,{}),Object(C.jsx)(d.a,{section:!0,hidden:!0}),Object(C.jsx)(v,{}),Object(C.jsx)(d.a,{section:!0,hidden:!0}),Object(C.jsx)(w,{})]})})}var W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,123)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),c(e),n(e),o(e)}))};o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(G,{})}),document.getElementById("root")),W()},97:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.b510fa23.chunk.js.map