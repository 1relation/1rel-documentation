"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[3281],{2019:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(5893),t=s(1151);const r={},o=void 0,a={id:"Forms/forms-pages",title:"forms-pages",description:"Pages in 1Relation forms serve as a fundamental component to structure and organize the form's content. They enable a logical flow of questions and possible answers for the user to input.",source:"@site/docs/Forms/forms-pages.md",sourceDirName:"Forms",slug:"/Forms/forms-pages",permalink:"/docs/Forms/forms-pages",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Forms/forms-pages.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"forms-pages-submit&cancel",permalink:"/docs/Forms/forms-pages-submit&cancel"},next:{title:"forms-endflow",permalink:"/docs/Forms/forms-endflow"}},c={},l=[{value:"Use Cases",id:"use-cases",level:2},{value:"Pages Components",id:"pages-components",level:2},{value:"Empty JSON Structure for Page Configuration",id:"empty-json-structure-for-page-configuration",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Pages in 1Relation forms serve as a fundamental component to structure and organize the form's content. They enable a logical flow of questions and possible answers for the user to input."}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Editing Items"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Pages in forms facilitate the management of information by presenting users with fields. This is crucial for tasks like creating or editing for example a customer, where fields in a form are paired with custom fields from items, allowing for efficient data entry and modification."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Survey and Feedback Forms"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In surveys or feedback forms, pages can be used to group related questions. This approach helps in organizing the form logically and makes it easier for respondents to understand and answer accurately. By segmenting questions into different pages, users can navigate through the survey without feeling overwhelmed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pages-components",children:"Pages Components"}),"\n",(0,i.jsx)(n.p,{children:"Pages in 1Relation forms are designed to organize content and guide user interaction. Each page comprises several key components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"name (string)"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Required: Yes"}),"\n",(0,i.jsx)(n.li,{children:"Description: Provides a unique identifier for each page. This name is displayed to the user and helps in navigating the form."}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:'"name": "Contact Information"'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fields (array)"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Required: Yes"}),"\n",(0,i.jsx)(n.li,{children:"Description: Specifies the set of fields present on a page. Each field is defined with its own properties and configurations. Fields can be used for gathering data (like text inputs or checkboxes) or providing information (such as titles or instructions)."}),"\n",(0,i.jsxs)(n.li,{children:["Example:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"fields": [\n  {\n    "key": {\n      "id": "first_name",\n      "name": "First Name",\n      "required": true\n    }\n  },\n  // Additional fields here\n]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"submit (object)"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Required: No"}),"\n",(0,i.jsx)(n.li,{children:"Description: Configures the actions to be performed when the user submits the page. This can include data processing, navigation to another page, or triggering other workflows."}),"\n",(0,i.jsxs)(n.li,{children:["Example:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"submit": {\n  "text": "Next",\n  "action": "submitForm",\n  // Additional submit configurations here\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cancel (object)"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Required: No"}),"\n",(0,i.jsx)(n.li,{children:"Description: Defines the actions to be taken when the user cancels the page. This could involve returning to a previous page, clearing the form, or other custom behaviors."}),"\n",(0,i.jsxs)(n.li,{children:["Example:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"cancel": {\n  "text": "Go Back",\n  "action": "cancelForm",\n  // Additional cancel configurations here\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These components together structure each page within the form, facilitating an intuitive and efficient user experience. By customizing these components, form designers can create diverse and dynamic forms that cater to various user interactions and data collection needs."}),"\n",(0,i.jsx)(n.h3,{id:"empty-json-structure-for-page-configuration",children:"Empty JSON Structure for Page Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Below is an empty JSON structure that serves as a template for configuring individual pages within a form in 1Relation. This structure outlines the fundamental elements of a page, including fields for user input and settings for submit and cancel actions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "pages": {\n    "1": {\n      "name": "Page Name",\n      "fields": [\n        // Define fields for user input here\n      ],\n      "submit": {\n        // Configure actions for the submit button here\n      },\n      "cancel": {\n        // Configure actions for the cancel button here\n      }\n    },\n    // Additional pages can be configured similarly\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);