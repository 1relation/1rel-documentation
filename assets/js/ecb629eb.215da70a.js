"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[9579],{9200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(5893),l=t(1151);const o={},d="JSON Relations",r={id:"JSON/json-relations",title:"JSON Relations",description:"Relations are used to get access to fields from other modules. This is useful when you want to display data from another module in a widget. Relations are defined in the relations object.",source:"@site/docs/JSON/json-relations.md",sourceDirName:"JSON",slug:"/JSON/json-relations",permalink:"/docs/JSON/json-relations",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/JSON/json-relations.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JSON Actions",permalink:"/docs/JSON/json-actions"}},s={},a=[{value:"JSON Configuration",id:"json-configuration",level:2},{value:"Naming of each relation object",id:"naming-of-each-relation-object",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Simple relation example",id:"example-1-simple-relation-example",level:3},{value:"Example 2: Get relation&#39;s relation",id:"example-2-get-relations-relation",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"json-relations",children:"JSON Relations"}),"\n",(0,i.jsxs)(n.p,{children:["Relations are used to get access to fields from other modules. This is useful when you want to display data from another module in a widget. Relations are defined in the ",(0,i.jsx)(n.code,{children:"relations"})," object."]}),"\n",(0,i.jsx)(n.h2,{id:"json-configuration",children:"JSON Configuration"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"parent"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the parent module in the relation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"child"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the child module in the relation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"relationid"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the specific relation, if multiple relations exist between the two modules."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"relationtype"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"child/parent"}),(0,i.jsx)(n.td,{children:"The type of relation, typically defined automatically."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"parent_id"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Forcefully set the parent item of the relation. Normally you should never use this."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"child_id"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Forcefully set the child item of the relation. Normally you should never use this."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"naming-of-each-relation-object",children:"Naming of each relation object"}),"\n",(0,i.jsxs)(n.p,{children:["The naming of a relation object is crucial as it determines how the relation is accessed. The name should correspond to the module ID from which you want to fetch information. For example, if you are working with Module 1 and need to fetch data from Module 2, you should name the relation object ",(0,i.jsx)(n.code,{children:"module2"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-1-simple-relation-example",children:"Example 1: Simple relation example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "relations": {\n    "module43": {\n      "parent": 43,\n      "child": 41,\n      "relationid": 22\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this relation configuration, the parent module is identified as module 43, and the child module as module 41. The relationid is set to 22, indicating the specific relation used if multiple relations exist between these two modules."}),"\n",(0,i.jsx)(n.h3,{id:"example-2-get-relations-relation",children:"Example 2: Get relation's relation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "relations": {\n    "module77": {\n      "parent": 77,\n      "child": 123,\n      "relationid": 133\n    },\n    "module75": {\n      "parent": 75,\n      "child": 77,\n      "relationid": 79,\n      "child_id": "module77Item.id"\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var i=t(7294);const l={},o=i.createContext(l);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);