"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[2717],{5168:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=s(5893),n=s(1151);const i={},o="How to Create Custom Field Types",r={id:"knowledge-base/knb-site-settings/knb-site-settings-how-to-create-a-custom-fieldtype",title:"How to Create Custom Field Types",description:"In this guide, you will learn how to create custom field types in FlowAgent. Custom field types allow you to define new data formats that can be used within your modules. This example will cover creating a custom field type that can contain time information.",source:"@site/docs/knowledge-base/knb-site-settings/knb-site-settings-how-to-create-a-custom-fieldtype.md",sourceDirName:"knowledge-base/knb-site-settings",slug:"/knowledge-base/knb-site-settings/knb-site-settings-how-to-create-a-custom-fieldtype",permalink:"/docs/knowledge-base/knb-site-settings/knb-site-settings-how-to-create-a-custom-fieldtype",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/knowledge-base/knb-site-settings/knb-site-settings-how-to-create-a-custom-fieldtype.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Step-by-Step Instructions",id:"step-by-step-instructions",level:2},{value:"Step 1: Navigate to Site Settings",id:"step-1-navigate-to-site-settings",level:3},{value:"Step 2: Open the Fields Section",id:"step-2-open-the-fields-section",level:3},{value:"Step 3: Create a New Field Type",id:"step-3-create-a-new-field-type",level:3},{value:"Step 4: Enter Field Type Details",id:"step-4-enter-field-type-details",level:3},{value:"Step 5: Add UI Code",id:"step-5-add-ui-code",level:3},{value:"Step 6: Save the Field Type",id:"step-6-save-the-field-type",level:3},{value:"Step 7: Verify the New Field Type",id:"step-7-verify-the-new-field-type",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-create-custom-field-types",children:"How to Create Custom Field Types"}),"\n",(0,a.jsx)(t.p,{children:"In this guide, you will learn how to create custom field types in FlowAgent. Custom field types allow you to define new data formats that can be used within your modules. This example will cover creating a custom field type that can contain time information."}),"\n",(0,a.jsx)(t.h2,{id:"step-by-step-instructions",children:"Step-by-Step Instructions"}),"\n",(0,a.jsx)(t.h3,{id:"step-1-navigate-to-site-settings",children:"Step 1: Navigate to Site Settings"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Navigate to ",(0,a.jsx)(t.strong,{children:"Site settings"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-2-open-the-fields-section",children:"Step 2: Open the Fields Section"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Click "Fields".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/7814b8d6-987f-4d8d-9ac8-f6dd58c38e34/ascreenshot.jpeg?tl_px=39,65&br_px=898,546&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=402,212",alt:""})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-3-create-a-new-field-type",children:"Step 3: Create a New Field Type"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Click "CREATE".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/aba7da9f-4c83-4650-b4b4-bca8e43cb03e/ascreenshot.jpeg?tl_px=1287,0&br_px=2147,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=674,-6",alt:""})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-4-enter-field-type-details",children:"Step 4: Enter Field Type Details"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Add a name for your field type."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/dfbc0866-48b6-4f76-9fee-1458a996c3a0/ascreenshot.jpeg?tl_px=675,0&br_px=1535,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=402,171",alt:""})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Choose the type format."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/eac947b3-2866-4a8f-8f80-e3dfd2c81f2b/ascreenshot.jpeg?tl_px=716,50&br_px=1576,531&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=402,212",alt:""})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-5-add-ui-code",children:"Step 5: Add UI Code"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Add a code for the UI of the field type."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/835ac351-1099-4baf-ab18-55e75be3bdaf/ascreenshot.jpeg?tl_px=914,146&br_px=1774,627&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=402,212",alt:""})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-6-save-the-field-type",children:"Step 6: Save the Field Type"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Click "save SAVE".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/8cd7b8d6-9718-43fe-b50e-929006d016de/ascreenshot.jpeg?tl_px=1287,0&br_px=2147,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=677,2",alt:""})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-7-verify-the-new-field-type",children:"Step 7: Verify the New Field Type"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The newly created field type is now added to the list."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-06-25/2fc4d8c3-6810-4706-b474-5349406a4b93/ascreenshot.jpeg?tl_px=546,739&br_px=1406,1220&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=402,212",alt:""})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var a=s(7294);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);