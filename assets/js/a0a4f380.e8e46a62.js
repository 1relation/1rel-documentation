"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[7e3],{174:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(5893),d=t(1151);const s={},l="Details Widget",r={id:"apps/widgets/apps-details",title:"Details Widget",description:"The Details Widget in 1Relation displays custom fields from any module in the system, providing detailed information about specific items.",source:"@site/docs/apps/widgets/apps-details.md",sourceDirName:"apps/widgets",slug:"/apps/widgets/apps-details",permalink:"/docs/apps/widgets/apps-details",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/apps/widgets/apps-details.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Table widget",permalink:"/docs/apps/widgets/apps-table"},next:{title:"Microsoft 365 Sync",permalink:"/docs/apps/integrations/integrations-365-sync"}},o={},c=[{value:"Configuring the Details Widget through UI",id:"configuring-the-details-widget-through-ui",level:2},{value:"JSON Configuration",id:"json-configuration",level:2},{value:"Example 1: Widget Customization",id:"example-1-widget-customization",level:4},{value:"Relations",id:"relations",level:2},{value:"Example 2: Widget with Relations",id:"example-2-widget-with-relations",level:4},{value:"Widget Functionalities",id:"widget-functionalities",level:2},{value:"Example 3: Widget Functionalities",id:"example-3-widget-functionalities",level:4}];function h(e){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"details-widget",children:"Details Widget"}),"\n",(0,n.jsx)(i.p,{children:"The Details Widget in 1Relation displays custom fields from any module in the system, providing detailed information about specific items."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Alt text",src:t(8258).Z+"",width:"2542",height:"1273"})}),"\n",(0,n.jsx)(i.h2,{id:"configuring-the-details-widget-through-ui",children:"Configuring the Details Widget through UI"}),"\n",(0,n.jsx)(i.p,{children:"To set up your Details Widget in the UI, follow these steps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Name"}),": Specify the name of the widget."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Sort"}),": Determine the order of this widget on the dashboard."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Size"}),": Set the size of the widget (between 1 and 12)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Tabs"}),": Select in which tab(s) this widget should be shown."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Columns"}),": Specify which columns should be shown in the table and their order."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Alt text",src:t(4042).Z+"",width:"2542",height:"1273"})}),"\n",(0,n.jsx)(i.h2,{id:"json-configuration",children:"JSON Configuration"}),"\n",(0,n.jsx)(i.p,{children:"##2 Widget Customization"}),"\n",(0,n.jsx)(i.p,{children:"Customize the appearance of your widget with these main properties:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Property"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Options"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"icon"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"N/A"}),(0,n.jsx)(i.td,{children:"Icon for the widget. Visit Google Fonts Icons for options."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"iconColor"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"Hex color code"}),(0,n.jsx)(i.td,{children:"Color of the icon. Use a hex color code."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"iconBackgroundColor"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"Hex color code"}),(0,n.jsx)(i.td,{children:"Background color of the icon. Use a hex color code."})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"example-1-widget-customization",children:"Example 1: Widget Customization"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "icon": "info", \n  "iconColor": "#FFFFFF", \n  "iconBackgroundColor": "#007BFF"\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"relations",children:"Relations"}),"\n",(0,n.jsx)(i.p,{children:"Define the relationships between different modules within your widget:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Property"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Options"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"parent"})}),(0,n.jsx)(i.td,{children:"integer"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"N/A"}),(0,n.jsx)(i.td,{children:"The ID of the parent module in the relation."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"child"})}),(0,n.jsx)(i.td,{children:"integer"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"N/A"}),(0,n.jsx)(i.td,{children:"The ID of the child module in the relation."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"relationid"})}),(0,n.jsx)(i.td,{children:"integer"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"N/A"}),(0,n.jsx)(i.td,{children:"The ID of the specific relation, if multiple relations exist between the two modules."})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"example-2-widget-with-relations",children:"Example 2: Widget with Relations"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "relations": {\n    "module43": {\n      "parent": 43,\n      "child": 41,\n      "relationid": 22\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"In this relation configuration, the parent module is identified as module 43, and the child module as module 41. The relationid is set to 22, indicating the specific relation used if multiple relations exist between these two modules."}),"\n",(0,n.jsx)(i.h2,{id:"widget-functionalities",children:"Widget Functionalities"}),"\n",(0,n.jsx)(i.p,{children:"Configure additional functionalities for the widget:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Property"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Options"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"allowInlineEdit"})}),(0,n.jsx)(i.td,{children:"boolean"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"true, false"}),(0,n.jsx)(i.td,{children:"Toggle field editing through an added edit icon."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"disableInlineEditLogic"})}),(0,n.jsx)(i.td,{children:"array"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"N/A"}),(0,n.jsx)(i.td,{children:"Logic to deactivate field editing when certain custom field values are set. Uses our JSON query functionality"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"clickable"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"N/A"}),(0,n.jsx)(i.td,{children:"The ID of the custom field that should be clickable."})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"example-3-widget-functionalities",children:"Example 3: Widget Functionalities"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "allowInlineEdit": true,\n  "disableInlineEditLogic": [  \n  {\n    "field": "[cf94]",\n    "value": "Closed" \n  },\n  {\n    "field": "[cf94]",\n    "value": "Done" \n  }\n],\n  "clickable": "cf100"\n}\n'})})]})}function a(e={}){const{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4042:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image-1-81baa6542ab174ad62cbee8fef11293c.png"},8258:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image-8fb5565f792e80aeb22c2b8059217cd0.png"},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>l});var n=t(7294);const d={},s=n.createContext(d);function l(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);