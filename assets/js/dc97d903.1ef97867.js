"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[6096],{8822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const s={},r="Introduction to Forms",a={id:"Forms/forms-introduction",title:"Introduction to Forms",description:"In 1Relation, forms serve as a dynamic interface between the system and its users, offering a structured and interactive way to capture information. They are integral to various functionalities within 1Relation, designed to present questions and fields that require user input. Whether it's for creating, editing, or managing data, forms play a crucial role in ensuring efficient and accurate data collection.",source:"@site/docs/Forms/forms-introduction.md",sourceDirName:"Forms",slug:"/Forms/forms-introduction",permalink:"/docs/Forms/forms-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Forms/forms-introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ab-intro-to-ab",permalink:"/docs/actionable-buttons/ab-intro-to-ab"},next:{title:"Items",permalink:"/docs/Forms/forms-Items"}},c={},d=[{value:"Use Cases for Forms",id:"use-cases-for-forms",level:2},{value:"Configuration and Activation of Forms",id:"configuration-and-activation-of-forms",level:2},{value:"Creating and Managing Forms",id:"creating-and-managing-forms",level:3},{value:"Activation of Forms",id:"activation-of-forms",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Top-Level Components",id:"top-level-components",level:2},{value:"JSON Example",id:"json-example",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction-to-forms",children:"Introduction to Forms"}),"\n",(0,i.jsx)(n.p,{children:"In 1Relation, forms serve as a dynamic interface between the system and its users, offering a structured and interactive way to capture information. They are integral to various functionalities within 1Relation, designed to present questions and fields that require user input. Whether it's for creating, editing, or managing data, forms play a crucial role in ensuring efficient and accurate data collection."}),"\n",(0,i.jsx)(n.h2,{id:"use-cases-for-forms",children:"Use Cases for Forms"}),"\n",(0,i.jsx)(n.p,{children:"Forms in 1Relation are versatile and cater to a wide range of applications, including but not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Creating Items"}),": Streamlining the process of adding new entries, such as registering a new customer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Editing Items"}),": Offering a user-friendly interface to modify existing data, like updating customer details."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Relating Items"}),": Facilitating the creation of new relationships, for instance, linking a contact person to a customer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unlinking Items"}),": Simplifying the process of removing existing relationships, such as detaching a contact person from a customer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deleting Items"}),": Enabling the removal of data from the system, like deleting an outdated customer record."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-and-activation-of-forms",children:"Configuration and Activation of Forms"}),"\n",(0,i.jsx)(n.h3,{id:"creating-and-managing-forms",children:"Creating and Managing Forms"}),"\n",(0,i.jsx)(n.p,{children:"To create, edit, or archive forms in 1Relation:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to the desired module and access the module settings."}),"\n",(0,i.jsx)(n.li,{children:"Proceed to the forms section."}),"\n",(0,i.jsx)(n.li,{children:"Assign a name to the form and configure group permissions."}),"\n",(0,i.jsx)(n.li,{children:"Utilize JSON code to customize the form's layout, fields, and functionalities."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"activation-of-forms",children:"Activation of Forms"}),"\n",(0,i.jsx)(n.p,{children:"Forms are typically activated in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Through Apps"}),": Certain applications within 1Relation are designed to trigger forms, initiating specific workflows or data entry processes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Via Actionable Buttons"}),": Forms can be linked to actionable buttons, providing users with immediate access to the forms through a simple click, streamlining the process of data entry or modification."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"forms-documentation",children:"Forms Documentation"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This documentation provides a detailed guide on the JSON structure used for configuring forms in 1Relation. It is designed to assist system designers in understanding and applying the various components and configurations necessary for form creation and management. The documentation is structured hierarchically, starting with top-level components and delving into more specific elements and their properties. Each component is explained with its properties, types, and required values, followed by JSON examples for practical understanding."}),"\n",(0,i.jsx)(n.h2,{id:"top-level-components",children:"Top-Level Components"}),"\n",(0,i.jsxs)(n.p,{children:["The JSON structure for forms is primarily divided into three top-level components: ",(0,i.jsx)(n.code,{children:"items"}),", ",(0,i.jsx)(n.code,{children:"pages"}),", and ",(0,i.jsx)(n.code,{children:"endflow"}),". Each of these components plays a vital role in form configuration."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"items"})}),(0,i.jsx)(n.td,{children:"Defines the items that are associated with the form. This could include any data items that the form will interact with or manipulate."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pages"})}),(0,i.jsx)(n.td,{children:"Contains the pages of the form. Each page can have its own set of fields, as well as submit and cancel actions."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"endflow"})}),(0,i.jsx)(n.td,{children:"Specifies the behavior at the end of the form process, such as redirection or other post-submission actions."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,i.jsx)(n.p,{children:"The following is a simple JSON example illustrating how these top-level components might be structured in a form configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "items": {\n    // Item definitions go here\n  },\n  "pages": {\n    // Page definitions, including fields and actions, go here\n  },\n  "endflow": {\n    // Endflow actions (like redirection) go here\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);