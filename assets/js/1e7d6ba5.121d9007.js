"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[7404],{6025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151);const o={},r="Actions",c={id:"site-settings/actionable-buttons/ab-actions",title:"Actions",description:"Introduction",source:"@site/docs/site-settings/actionable-buttons/ab-actions.md",sourceDirName:"site-settings/actionable-buttons",slug:"/site-settings/actionable-buttons/ab-actions",permalink:"/docs/site-settings/actionable-buttons/ab-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/site-settings/actionable-buttons/ab-actions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Visibility",permalink:"/docs/site-settings/actionable-buttons/ab-visibility"},next:{title:"Outcome",permalink:"/docs/site-settings/actionable-buttons/ab-outcome"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Purpose of Actions in Actional buttons",id:"purpose-of-actions-in-actional-buttons",level:2},{value:"Basic Structure of an Action",id:"basic-structure-of-an-action",level:2},{value:"Examples of Actions in Actional buttons",id:"examples-of-actions-in-actional-buttons",level:2},{value:"Basic Action Configuration",id:"basic-action-configuration",level:3},{value:"Then Object",id:"then-object",level:2},{value:"<code>showForm</code>: Show form",id:"showform-show-form",level:3},{value:"<code>showRelevantForms</code>: Show relevant forms",id:"showrelevantforms-show-relevant-forms",level:3},{value:"<code>crud</code>: CRUD Operations",id:"crud-crud-operations",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Actions within Actional buttons in FlowAgent are dynamic sets of tasks triggered based on specific conditions. These actions automate processes, manipulate data, and guide user interaction within the application. This document offers an overview of actions in Actional buttons, detailing their structure and interaction with other components."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For an in-depth guide on the syntax, types, and advanced configurations of actions, please refer to the comprehensive ",(0,s.jsx)(n.a,{href:"/docs/JSON/json-actions",children:"Actions Documentation"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"purpose-of-actions-in-actional-buttons",children:"Purpose of Actions in Actional buttons"}),"\n",(0,s.jsx)(n.p,{children:"Actions in Actional buttons are designed to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Automate Tasks"}),": Execute tasks like CRUD operations automatically, enhancing efficiency in data management."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhance User Interaction"}),": Trigger forms and display notifications, ensuring a responsive and engaging user experience."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Streamline Workflows"}),": Seamlessly integrate with system workflows, triggering necessary actions in response to user interactions with Actional buttons."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-structure-of-an-action",children:"Basic Structure of an Action"}),"\n",(0,s.jsxs)(n.p,{children:["Actions are defined by conditions (",(0,s.jsx)(n.code,{children:"if"}),") and the tasks to be executed (",(0,s.jsx)(n.code,{children:"then"}),")."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"if"})}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"A set of criteria that determine when the action should be triggered. These criteria can involve item states, user roles, or other contextual data."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"then"})}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Defines the tasks or operations to be performed when the action is triggered. This can include CRUD operations, opening forms, and more."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples-of-actions-in-actional-buttons",children:"Examples of Actions in Actional buttons"}),"\n",(0,s.jsx)(n.h3,{id:"basic-action-configuration",children:"Basic Action Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Mark Task as Complete",\n      "if": [\n        ["taskStatus", "!=", "Completed"]\n      ],\n      "then": {\n        "crud": {\n          "update": {\n            "task": {\n              "customfield": {\n                "cf445": "Completed"\n              }\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"then-object",children:"Then Object"}),"\n",(0,s.jsxs)(n.p,{children:["Actional Button has a ",(0,s.jsx)(n.code,{children:"then"})," object that contains the tasks or operations to be performed when the action is triggered. This can include CRUD operations, opening forms, and more."]}),"\n",(0,s.jsxs)(n.h3,{id:"showform-show-form",children:[(0,s.jsx)(n.code,{children:"showForm"}),": Show form"]}),"\n",(0,s.jsx)(n.p,{children:'Actional Button can be configured to display a form based on specific conditions.\nTo show a form, you must use the command "showForm", that have following properties:'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"formId"})}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"The ID of the form to be displayed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"itemKey"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The key of the item to be used in the form as the main item."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"items"})}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"In some situations, you need to pass an item you need, but cannot get outside the Actional Button context. In this array you can pass any items you need"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Open Feedback Form",\n      "if": [\n        ["userRole", "=", "Customer"]\n      ],\n      "then": {\n        "showForm": {\n          "formId": 456,\n          "itemKey": "feedback",\n          "items": [\n            "customer",\n            "project"\n          ]\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"showrelevantforms-show-relevant-forms",children:[(0,s.jsx)(n.code,{children:"showRelevantForms"}),": Show relevant forms"]}),"\n",(0,s.jsx)(n.p,{children:'Sometimes we don\xb4t know what form to be displayed, as this is setup as a "relvant form". This is a form that is relevant to the current item, and is setup in the form configuration. This is a way to show the relevant form.'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"itemKey"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The key of the item to be used in the form as the main item."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"items"})}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"In some situations, you need to pass an item you need, but cannot get outside the Actional Button context. In this array you can pass any items you need"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Open Feedback Form",\n      "if": [\n        ["userRole", "=", "Customer"]\n      ],\n      "then": {\n        "showRelevantForms": {\n          "itemKey": "feedback",\n          "items": [\n            "customer",\n            "project"\n          ]\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"crud-crud-operations",children:[(0,s.jsx)(n.code,{children:"crud"}),": CRUD Operations"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Process Order",\n      "then": {\n        "crud": {\n          "insert": {\n            // Insert details...\n          },\n          "update": {\n            // Update details...\n          },\n          "relate": {\n            // Relate details...\n          },\n          "delete": {\n            // Delete details...\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For detailed syntax, types, advanced configurations, and examples of actions, please refer to the comprehensive ",(0,s.jsx)(n.a,{href:"/docs/JSON/json-actions",children:"Actions Documentation"}),". Understanding the full capabilities of actions will empower you to create dynamic, efficient, and user-friendly interactions within your system."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);