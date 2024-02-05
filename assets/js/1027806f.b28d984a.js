"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[1186],{1905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=t(5893),r=t(1151);const c={},s="Submit and Cancel",o={id:"Forms/forms-pages-submit&cancel",title:"Submit and Cancel",description:"The submit and cancel components within a form page are crucial for defining the actions and navigation steps that occur when the form is either submitted or cancelled. They include configurations for button text, action triggers, default actions, and redirection upon action completion.",source:"@site/docs/Forms/forms-pages-submit&cancel.md",sourceDirName:"Forms",slug:"/Forms/forms-pages-submit&cancel",permalink:"/docs/Forms/forms-pages-submit&cancel",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/Forms/forms-pages-submit&cancel.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Fields",permalink:"/docs/Forms/forms-pages-fields"},next:{title:"Triggers (Actions) in Forms",permalink:"/docs/Forms/forms-pages-submit&cancel-triggers"}},d={},a=[{value:"Structure of <code>submit</code> and <code>cancel</code>",id:"structure-of-submit-and-cancel",level:2},{value:"Submit and Cancel Properties",id:"submit-and-cancel-properties",level:3},{value:"JSON Example",id:"json-example",level:4}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"submit-and-cancel",children:"Submit and Cancel"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"submit"})," and ",(0,i.jsx)(n.code,{children:"cancel"})," components within a form page are crucial for defining the actions and navigation steps that occur when the form is either submitted or cancelled. They include configurations for button text, action triggers, default actions, and redirection upon action completion."]}),"\n",(0,i.jsxs)(n.h2,{id:"structure-of-submit-and-cancel",children:["Structure of ",(0,i.jsx)(n.code,{children:"submit"})," and ",(0,i.jsx)(n.code,{children:"cancel"})]}),"\n",(0,i.jsx)(n.p,{children:"These components consist of properties that define their behavior, appearance, and the actions that are executed upon user interaction."}),"\n",(0,i.jsx)(n.h3,{id:"submit-and-cancel-properties",children:"Submit and Cancel Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"text"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The text displayed on the submit or cancel button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"triggers"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"An array of action triggers that are executed when the button is clicked. Triggers can include conditions, actions, and endflow configurations."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"default"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Default actions that are executed when the button is clicked, in addition to any specified triggers."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uri"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"A specific URL to redirect the user upon action completion. This property is applicable for both submit and cancel actions."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"uri"})," is optional, but if provided, it will skip the \xb4triggers\xb4 and redirect the user to the specified URL."]})}),"\n",(0,i.jsx)(n.h4,{id:"json-example",children:"JSON Example"}),"\n",(0,i.jsxs)(n.p,{children:["Below is an example illustrating the ",(0,i.jsx)(n.code,{children:"submit"})," and ",(0,i.jsx)(n.code,{children:"cancel"})," components within a form page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "pages": {\n    "1": {\n      "name": "Page Name",\n      // Fields configuration...\n      "submit": {\n        "text": "Submit",\n        "triggers": [\n          {\n            // Complex trigger configurations...\n          }\n          // Additional triggers...\n        ],\n        "default": [\n          {\n            // Default actions...\n          }\n        ],\n        "uri": "/redirect-on-submit"\n      },\n      "cancel": {\n        "text": "Cancel",\n        "triggers": [\n          {\n            // Optional trigger configurations for cancel action...\n          }\n        ],\n        "uri": "/redirect-on-cancel"\n      }\n    }\n    // Additional pages...\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, both the ",(0,i.jsx)(n.code,{children:"submit"})," and ",(0,i.jsx)(n.code,{children:"cancel"})," components include button text, triggers for defining complex actions and conditions to be executed upon user interaction, default actions, and a ",(0,i.jsx)(n.code,{children:"uri"})," for redirection after the action is completed. The structure and properties of ",(0,i.jsx)(n.code,{children:"submit"})," and ",(0,i.jsx)(n.code,{children:"cancel"})," are identical, ensuring consistency and flexibility in form configuration."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);