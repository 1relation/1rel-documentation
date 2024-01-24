"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[7299],{4787:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const r={},o=void 0,l={id:"Forms/forms-pages-fields-key",title:"forms-pages-fields-key",description:"The key component in a form field is fundamental to its identification and functionality. It includes essential attributes like the field's unique identifier, display name, data type, and whether the field is mandatory. This component is crucial for defining the field's role and behavior in the form.",source:"@site/docs/Forms/forms-pages-fields-key.md",sourceDirName:"Forms",slug:"/Forms/forms-pages-fields-key",permalink:"/docs/Forms/forms-pages-fields-key",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Forms/forms-pages-fields-key.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"forms-pages-fields",permalink:"/docs/Forms/forms-pages-fields"},next:{title:"forms-pages-fields-options",permalink:"/docs/Forms/forms-pages-fields-options"}},d={},c=[{value:"Empty JSON Structure for key Configuration",id:"empty-json-structure-for-key-configuration",level:4}];function a(e){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The key ",(0,s.jsx)(n.code,{children:"component"})," in a form field is fundamental to its identification and functionality. It includes essential attributes like the field's unique identifier, display name, data type, and whether the field is mandatory. This component is crucial for defining the field's role and behavior in the form."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"id (string)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: Yes"}),"\n",(0,s.jsx)(n.li,{children:"Description: Assigns a unique identifier to the field, crucial for form logic and data handling."}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:'"id": "customer_age"'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name (string)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: Yes"}),"\n",(0,s.jsx)(n.li,{children:"Description: Sets the display name of the field as seen by the user, essential for interaction and identification."}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:'"name": "Customer Age"'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"required (boolean)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: No"}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:["Description: Indicates if the field is mandatory. Set to ",(0,s.jsx)(n.code,{children:"true"})," to ensure the field is filled out."]}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:'"required": true'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"defaultValue (string, number, or reference)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: No"}),"\n",(0,s.jsx)(n.li,{children:"Description: Defines a pre-filled value for the field, which can be a static value or a dynamic reference to a form item."}),"\n",(0,s.jsxs)(n.li,{children:["Examples:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Static Value: ",(0,s.jsx)(n.code,{children:'"defaultValue": "Blue"'})]}),"\n",(0,s.jsxs)(n.li,{children:["Dynamic Reference: ",(0,s.jsx)(n.code,{children:'"defaultValue": "[customer.cf570]"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"cftype_id (number)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: Yes"}),"\n",(0,s.jsx)(n.li,{children:"Description: Identifies the field type (e.g., 'text', 'dropdown', 'checkbox'), affecting user interaction."}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:'"cftype_id": "159"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"empty-json-structure-for-key-configuration",children:"Empty JSON Structure for key Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The following JSON structure provides a template for configuring the ",(0,s.jsx)(n.code,{children:"key"})," component of fields in a 1Relation form. This structure outlines the essential properties of the ",(0,s.jsx)(n.code,{children:"key"})," component, setting the foundation for field functionality and user interaction:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "fields": [\n    {\n      "key": {\n        "id": "customer_name",\n        "name": "Write customer name",\n        "required": true,\n        "cftype_id": "162",\n        "defaultValue": ""\n        // Additional key properties as required\n      }\n      // Additional components (options, html) as needed\n    }\n    // Additional fields with key configurations as needed\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);