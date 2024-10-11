"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[6782],{489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),a=n(1151);const r={},i="Dynamic Values",d={id:"Modules/Settings/settings-dynamic-values",title:"Dynamic Values",description:"What are Dynamic Values?",source:"@site/docs/Modules/Settings/settings-dynamic-values.md",sourceDirName:"Modules/Settings",slug:"/Modules/Settings/settings-dynamic-values",permalink:"/docs/Modules/Settings/settings-dynamic-values",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/Modules/Settings/settings-dynamic-values.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"settings-general",permalink:"/docs/Modules/Settings/settings-general"},next:{title:"Module Item Types",permalink:"/docs/Modules/Settings/settings-module-item-types"}},l={},c=[{value:"What are Dynamic Values?",id:"what-are-dynamic-values",level:2},{value:"What can Dynamic Values do?",id:"what-can-dynamic-values-do",level:2},{value:"Dynamic Value Object",id:"dynamic-value-object",level:2},{value:"Rules",id:"rules",level:3},{value:"Static",id:"static",level:4},{value:"Number",id:"number",level:4},{value:"Date",id:"date",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dynamic-values",children:"Dynamic Values"}),"\n",(0,s.jsx)(t.h2,{id:"what-are-dynamic-values",children:"What are Dynamic Values?"}),"\n",(0,s.jsx)(t.p,{children:"Dynamic Values are a set of rules that generate a value based on the rules defined. These rules can be static, number, date, or relation field. The generated value can be used on Custom Fields in order to generate a pre-defined value."}),"\n",(0,s.jsx)(t.h2,{id:"what-can-dynamic-values-do",children:"What can Dynamic Values do?"}),"\n",(0,s.jsx)(t.p,{children:"Dynamic Values can be used to create customer numbers, invoice numbers, or any other value that needs to be generated based on a set of rules."}),"\n",(0,s.jsx)(t.h2,{id:"dynamic-value-object",children:"Dynamic Value Object"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"rules"})}),(0,s.jsx)(t.td,{children:"Array"}),(0,s.jsx)(t.td,{children:"An array of strings storing the value each rule generated last time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"meta"})}),(0,s.jsx)(t.td,{children:"Array"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lastOutput"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The last generated value is stored for reference; it has no functional meaning"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"rules",children:"Rules"}),"\n",(0,s.jsx)(t.p,{children:"There are multiple types of rules, each with its own set of parameters. A combination of rules allows for the creation of unique Dynamic Values."}),"\n",(0,s.jsx)(t.h4,{id:"static",children:"Static"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "rules": [\n    {\n      "type": "static",\n      "value": "Any freetext value"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"number",children:"Number"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "rules": [\n    {\n      "type": "number",\n      "stepSize": 1,\n      "direction": "asc", // asc or desc\n      "start": 1,\n      "zeroPad": 0\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"date",children:"Date"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "rules": [\n    {\n      "type": "date",\n      "format": "Y-m-d",\n      "stepSize": 0,\n      "stepSizeType": "day",\n      "direction": "asc", // asc or desc\n      "start": "today" // use a date or e.g., today/yesterday/tomorrow\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Format, stepSizeType and start accepts valid PHP date formats. For more information, please visit ",(0,s.jsx)(t.a,{href:"https://www.php.net/manual/en/datetime.formats.php",children:"PHP Date Formats"})]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);