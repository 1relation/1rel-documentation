"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[4982],{2750:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var d=i(5893),r=i(1151);const t={},o="Endflow and Redirection",l={id:"Forms/forms-endflow",title:"Endflow and Redirection",description:"The endflow component specifies the behavior when the form flow concludes, such as redirection to a specific page or item. It can be set globally for the entire form or specifically within a trigger.",source:"@site/docs/Forms/forms-endflow.md",sourceDirName:"Forms",slug:"/Forms/forms-endflow",permalink:"/docs/Forms/forms-endflow",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/Forms/forms-endflow.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Triggers (Actions) in Forms",permalink:"/docs/Forms/forms-pages-submit&cancel-triggers"},next:{title:"Introduction to Apps",permalink:"/docs/apps/apps-intro-to-apps"}},s={},c=[{value:"Default Behavior",id:"default-behavior",level:2},{value:"Global Endflow",id:"global-endflow",level:2},{value:"Properties",id:"properties",level:3},{value:"Example - Global Endflow",id:"example---global-endflow",level:4},{value:"Trigger-Specific Endflow",id:"trigger-specific-endflow",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Example - Trigger Endflow and Redirection",id:"example---trigger-endflow-and-redirection",level:4},{value:"Endflow Commands",id:"endflow-commands",level:2},{value:"Endflow Command Examples",id:"endflow-command-examples",level:3},{value:"Endflow Command: <code>back</code>",id:"endflow-command-back",level:4},{value:"Endflow Command: <code>dashboard</code>",id:"endflow-command-dashboard",level:4},{value:"Endflow Command: <code>item</code>",id:"endflow-command-item",level:4},{value:"Endflow Command: <code>uri</code>",id:"endflow-command-uri",level:4},{value:"Endflow Command: <code>itemkey.[item]</code>",id:"endflow-command-itemkeyitem",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"endflow-and-redirection",children:"Endflow and Redirection"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"endflow"})," component specifies the behavior when the form flow concludes, such as redirection to a specific page or item. It can be set globally for the entire form or specifically within a trigger."]}),"\n",(0,d.jsx)(n.h2,{id:"default-behavior",children:"Default Behavior"}),"\n",(0,d.jsxs)(n.p,{children:["When no specific ",(0,d.jsx)(n.code,{children:"endflow"})," is defined, the form will automatically choose an action based on available information in the following order:"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Go to Defined Item"}),": Redirects to the first predefined item in the Items Array."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Go to Created Item"}),": Redirects to a newly created item from the form's triggers."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Go to Start Item"}),": Redirects to the starting item (the item on which the form was initiated)."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Go to Dashboard"}),": Redirects to the dashboard as a fallback option."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"global-endflow",children:"Global Endflow"}),"\n",(0,d.jsx)(n.p,{children:"Global endflow is defined at the end of the document and applies to the entire form."}),"\n",(0,d.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"redirect"})}),(0,d.jsx)(n.td,{children:"N/A"}),(0,d.jsx)(n.td,{children:"Specifies the redirection target (see commands table)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"redirect_uri"})}),(0,d.jsx)(n.td,{children:"N/A"}),(0,d.jsxs)(n.td,{children:["Used with ",(0,d.jsx)(n.code,{children:"uri"})," command to define a specific URI for redirection."]})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"example---global-endflow",children:"Example - Global Endflow"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "endflow": {\n    "redirect": "item"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"In this global endflow example, the form will redirect the user to the starting item upon completion."}),"\n",(0,d.jsx)(n.h2,{id:"trigger-specific-endflow",children:"Trigger-Specific Endflow"}),"\n",(0,d.jsx)(n.p,{children:"Endflow can also be set within a trigger, overriding the global endflow. This is useful for specific outcomes necessary for a trigger."}),"\n",(0,d.jsx)(n.h3,{id:"properties-1",children:"Properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"endflow"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"Ends the form when the trigger is activated and calls endflow_redirect if defined."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"endflow_redirect"})}),(0,d.jsx)(n.td,{children:"N/A"}),(0,d.jsx)(n.td,{children:"Specifies the redirection target for the trigger-specific endflow."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"closeModal"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"Closes the modal upon form completion. Other endflow commands will be ignored."})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"example---trigger-endflow-and-redirection",children:"Example - Trigger Endflow and Redirection"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "submit": {\n    "triggers": [\n      {\n        "then": {\n          "endflow": true,\n          "endflow_redirect": "itemkey.item1"\n        }\n      }\n    ]\n  },\n  "endflow": {\n    "redirect": "uri",\n    "redirect_uri": "/item/12345"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:'In this trigger-specific endflow example, the form ends and redirects to "item1" upon trigger activation.'}),"\n",(0,d.jsx)(n.h2,{id:"endflow-commands",children:"Endflow Commands"}),"\n",(0,d.jsx)(n.p,{children:"The following commands are available for both global and trigger-specific endflows, offering precise control over the navigation after form interaction:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Command"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"back"})}),(0,d.jsx)(n.td,{children:"Returns the user to the previous page. Typically used in multi-page forms to navigate backward."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"dashboard"})}),(0,d.jsx)(n.td,{children:"Redirects the user to the dashboard. Ideal for concluding a form process and returning to the main menu."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"item"})}),(0,d.jsx)(n.td,{children:"Redirects to the starting item, requiring that the form was initiated from a specific item."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uri"})}),(0,d.jsx)(n.td,{children:"Directs the user to a specified URI, allowing for custom redirection paths. Applicable only in global endflow settings."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"itemkey.[item]"})}),(0,d.jsxs)(n.td,{children:["Redirects to a specific item defined in the form's flow. ",(0,d.jsx)(n.code,{children:"itemkey"})," refers to the unique identifier of an item within the form, allowing for directed navigation post-submission."]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"endflow-command-examples",children:"Endflow Command Examples"}),"\n",(0,d.jsxs)(n.h4,{id:"endflow-command-back",children:["Endflow Command: ",(0,d.jsx)(n.code,{children:"back"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "endflow": {\n    "redirect": "back"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"In this example, the form will navigate the user to the previous page upon completion."}),"\n",(0,d.jsxs)(n.h4,{id:"endflow-command-dashboard",children:["Endflow Command: ",(0,d.jsx)(n.code,{children:"dashboard"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "endflow": {\n    "redirect": "dashboard"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"In this example, the form will redirect the user to the dashboard upon completion."}),"\n",(0,d.jsxs)(n.h4,{id:"endflow-command-item",children:["Endflow Command: ",(0,d.jsx)(n.code,{children:"item"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "endflow": {\n    "redirect": "item"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"In this example, the form will redirect the user to the starting item upon completion."}),"\n",(0,d.jsxs)(n.h4,{id:"endflow-command-uri",children:["Endflow Command: ",(0,d.jsx)(n.code,{children:"uri"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "endflow": {\n    "redirect": "uri",\n    "redirect_uri": "/specific-path"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"In this example, the form will redirect the user to a specific URI upon completion."}),"\n",(0,d.jsxs)(n.h4,{id:"endflow-command-itemkeyitem",children:["Endflow Command: ",(0,d.jsx)(n.code,{children:"itemkey.[item]"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "endflow": {\n    "redirect": "itemkey.newItem"\n  }\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["In this example, the form will redirect the user to the item with the unique identifier ",(0,d.jsx)(n.code,{children:"newItem"})," upon completion."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var d=i(7294);const r={},t=d.createContext(r);function o(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);