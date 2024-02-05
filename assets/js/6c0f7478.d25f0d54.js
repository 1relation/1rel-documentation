"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[4401],{3620:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=i(5893),r=i(1151);const s={},o="Items",d={id:"Forms/forms-Items",title:"Items",description:"The items component in the form's JSON structure is crucial for two primary functionalities:",source:"@site/docs/Forms/forms-Items.md",sourceDirName:"Forms",slug:"/Forms/forms-Items",permalink:"/docs/Forms/forms-Items",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/Forms/forms-Items.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Main components",permalink:"/docs/Forms/forms-main-components"},next:{title:"Pages",permalink:"/docs/Forms/forms-pages"}},c={},a=[{value:"<code>items</code> Properties",id:"items-properties",level:2},{value:"JSON Example",id:"json-example",level:3},{value:"Item Commands",id:"item-commands",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"items",children:"Items"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"items"})," component in the form's JSON structure is crucial for two primary functionalities:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Populating Form Fields"}),": It facilitates pre-filling form fields with predefined information by fetching data from specified items based on certain conditions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Performing Actions through Triggers"}),": It allows for the manipulation of these items through CRUD (Create, Read, Update, Delete) functions as part of the form's operational flow."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"items-properties",children:[(0,n.jsx)(t.code,{children:"items"})," Properties"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"items"})," object consists of arrays, where the key defined for each array is the variable name of that item. Each array contains a set of conditions or parameters for interacting with the item. These conditions are specified in the ",(0,n.jsx)(t.a,{href:"/docs/JSON/json-query",children:"JSON Query Documentation"}),"."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Key"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The variable name of the item defined, that can be used later to update or creating a condition on given item"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Value"}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/JSON/json-query",children:"JSON Query Documentation"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,n.jsxs)(t.p,{children:["The following example illustrates the ",(0,n.jsx)(t.code,{children:"items"})," component with different types of item identifiers:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "items": {\n    "project": [\n      ["id", "=", "[itemid]"] // Interacts with the project having the current item\'s ID\n    ],\n    "task": [\n      ["id", "=", "[relation79]"] // Interacts with the task having a specific relationship ID\n    ]\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"project"})," item is fetched using the current item's ID, referred to as ",(0,n.jsx)(t.code,{children:"[itemid]"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"task"})," item is associated with a related item, identified through a relationship indicated as ",(0,n.jsx)(t.code,{children:"[relationXX]"}),", where ",(0,n.jsx)(t.code,{children:"XX"})," should be replaced with the actual relation ID relevant to your configuration."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Each array under an item key (like ",(0,n.jsx)(t.code,{children:"project"}),", ",(0,n.jsx)(t.code,{children:"task"}),") is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through triggers."]}),"\n",(0,n.jsx)(t.h3,{id:"item-commands",children:"Item Commands"}),"\n",(0,n.jsxs)(t.p,{children:["In above example, the ",(0,n.jsx)(t.code,{children:"project"}),", and ",(0,n.jsx)(t.code,{children:"task"})," are defined by different commands. To understand the commands, see table below:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Command"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"[itemid]"})}),(0,n.jsx)(t.td,{children:"The ID of the current item"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"[relationXX]"})}),(0,n.jsxs)(t.td,{children:["The ID of the related item, where ",(0,n.jsx)(t.code,{children:"XX"})," should be replaced with the actual relation ID relevant to your configuration"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>o});var n=i(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);