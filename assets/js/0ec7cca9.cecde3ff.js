"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[6581],{4655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=n(5893),s=n(1151);const r={},o="Items",d={id:"site-settings/actionable-buttons/ab-items",title:"Items",description:"Introduction",source:"@site/docs/site-settings/actionable-buttons/ab-items.md",sourceDirName:"site-settings/actionable-buttons",slug:"/site-settings/actionable-buttons/ab-items",permalink:"/docs/site-settings/actionable-buttons/ab-items",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/site-settings/actionable-buttons/ab-items.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Main Components",permalink:"/docs/site-settings/actionable-buttons/ab-main-components"},next:{title:"Visibility",permalink:"/docs/site-settings/actionable-buttons/ab-visibility"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Structure of <code>items</code>",id:"structure-of-items",level:2},{value:"JSON Example",id:"json-example",level:3},{value:"Item Commands",id:"item-commands",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"items",children:"Items"}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"items"})," component is essential for defining the Items the Actionable Button context in which the button operates. An item can be used for conditions or actions, such as populating form fields, performing CRUD operations, or other item-based interactions."]}),"\n",(0,i.jsxs)(t.h2,{id:"structure-of-items",children:["Structure of ",(0,i.jsx)(t.code,{children:"items"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"items"})," object consists of arrays, where the key defined for each array is the variable name of that item. Each array contains a set of conditions or parameters for interacting with the item. These conditions are specified in the ",(0,i.jsx)(t.a,{href:"/docs/JSON/json-query",children:"JSON Query Documentation"}),"."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Key"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"The variable name of the item defined, that can be used later to update or creating a condition on given item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Value"}),(0,i.jsx)(t.td,{children:"array"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/JSON/json-query",children:"JSON Query Documentation"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "items": {\n    "project": [\n      ["id", "=", "[itemid]"] // Interacts with the project having the current item\'s ID\n    ],\n    "customer": [\n      ["id", "=", "[relation80]"] // Interacts with the customer having the relation ID 80\n    ],\n    "subtasks[]": [\n      ["id", "IN", "[relation90]"] // Interacts with all subtasks related by relation ID 90\n    ],\n    "equipment[]": [\n      ["module58Item.id", "=", "[itemid]"],\n      ["module_id", "=", 60],\n      ["moduleitemtype_id", "=", "158"],\n      ["cf123", "=", "option_1000"] // Applies additional filters for equipment\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"In this example:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"project"})," item is fetched using the current item's ID, referred to as ",(0,i.jsx)(t.code,{children:"[itemid]"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"customer"})," item fetches a single customer related to the current item by ",(0,i.jsx)(t.code,{children:"relation80"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"subtasks[]"})," item fetches all subtasks related by ",(0,i.jsx)(t.code,{children:"relation90"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"equipment[]"})," item fetches only items related to module 58 (project), further filtered by ",(0,i.jsx)(t.code,{children:"module_id"})," 60, ",(0,i.jsx)(t.code,{children:"moduleitemtype_id"})," 158, and a custom field condition (",(0,i.jsx)(t.code,{children:"cf123"})," = ",(0,i.jsx)(t.code,{children:"option_1000"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Each array under an item key (like ",(0,i.jsx)(t.code,{children:"project"}),", ",(0,i.jsx)(t.code,{children:"customer"}),", ",(0,i.jsx)(t.code,{children:"subtasks[]"}),", ",(0,i.jsx)(t.code,{children:"equipment[]"}),") is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through triggers."]}),"\n",(0,i.jsx)(t.h3,{id:"item-commands",children:"Item Commands"}),"\n",(0,i.jsxs)(t.p,{children:["In the above example, the ",(0,i.jsx)(t.code,{children:"project"}),", ",(0,i.jsx)(t.code,{children:"customer"}),", ",(0,i.jsx)(t.code,{children:"subtasks[]"}),", and ",(0,i.jsx)(t.code,{children:"equipment[]"})," are defined by different commands. To understand the commands, see the table below:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Command"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[itemid]"})}),(0,i.jsx)(t.td,{children:"The ID of the current item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[parentitemid]"})}),(0,i.jsx)(t.td,{children:"Parent Item is currently only available when Actionable Button is used in a Power Search Table, as a Row Button. The Parent Item is then given as the Item the widget is displayed on"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[relationXX]"})}),(0,i.jsxs)(t.td,{children:["The ID of the related item, where ",(0,i.jsx)(t.code,{children:"XX"})," should be replaced with the actual relation ID relevant to your configuration"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);