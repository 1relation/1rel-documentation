"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[8275],{4126:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=n(5893),s=n(1151);const o={},l="Custom Fields",d={id:"modules/customfields",title:"Custom Fields",description:"Introduction",source:"@site/docs/modules/customfields.md",sourceDirName:"modules",slug:"/modules/customfields",permalink:"/docs/modules/customfields",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/modules/customfields.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Module Item Types",permalink:"/docs/modules/module-item-types"},next:{title:"Relations",permalink:"/docs/modules/relations"}},r={},a=[{value:"Introduction",id:"introduction",level:2},{value:"The Different Custom Fields",id:"the-different-custom-fields",level:2},{value:"Create and Edit Custom Fields",id:"create-and-edit-custom-fields",level:2},{value:"Configuring a Custom Field",id:"configuring-a-custom-field",level:2},{value:"Configuring Multi-Option Fields",id:"configuring-multi-option-fields",level:2},{value:"Deleting an Option Value",id:"deleting-an-option-value",level:2},{value:"Preview",id:"preview",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"custom-fields",children:"Custom Fields"}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"Custom fields are essential to the system when using a module to store items such as a customer, a task, or a piece of equipment. Each individual item's information is stored in a custom field. For instance, the name of a customer, the status of a task, or the price of an invoice are all stored in their respective custom fields."}),"\n",(0,t.jsx)(i.h2,{id:"the-different-custom-fields",children:"The Different Custom Fields"}),"\n",(0,t.jsxs)(i.p,{children:["Custom fields vary in appearance and behavior. They are listed in the fields menu and can be installed from a ",(0,t.jsx)(i.a,{href:"/docs/apps/plugins/fields",children:"fields app"}),". New fields can be added, and existing ones can be edited as needed."]}),"\n",(0,t.jsx)(i.h2,{id:"create-and-edit-custom-fields",children:"Create and Edit Custom Fields"}),"\n",(0,t.jsx)(i.p,{children:"Follow the steps below to create or edit customfields:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Select the module you wish to create/edit a customfield for."}),"\n",(0,t.jsx)(i.li,{children:'Navigate to "Settings".'}),"\n",(0,t.jsx)(i.li,{children:'Choose the "Customfields" option.'}),"\n",(0,t.jsx)(i.li,{children:'Click on "Create" or edit an existing one.'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"configuring-a-custom-field",children:"Configuring a Custom Field"}),"\n",(0,t.jsx)(i.p,{children:"After initiating the creation of a new custom field, you'll need to provide the following information:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Name"}),": Specify the name of the field."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Data Type"}),": Choose the type of field (e.g., text, number, date)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Default Value"}),": Choose whether a default value should be applied every time an item using the custom field is created."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Input in Field is Required"}),": Specify if a value in this field is required when creating/editing an item."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Content of Field Should be Searchable (Indexed)"}),": Specify if you want users to be able to search for values in this field."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Field Should be Locked for Input"}),": Specify if the user should be allowed to add values to this field (typically used if another system manages this field, e.g., reference number)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Allow Input on Creation"}),": When the prior checkbox is selected, you can allow the user to input values, but only when the item is created."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Types"}),": Specify which types this custom field should be included in."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"configuring-multi-option-fields",children:"Configuring Multi-Option Fields"}),"\n",(0,t.jsx)(i.p,{children:"Some custom fields contain multiple options for the user to choose from, requiring further configuration, such as:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Dropdown"}),"\n",(0,t.jsx)(i.li,{children:"Checkbox"}),"\n",(0,t.jsx)(i.li,{children:"Radio"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For instance, a dropdown may have three options for the user to choose from:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Option"}),": Add the value that the user will be presented with."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Color"}),": Choose an optional color for the specific option."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Group"}),": Choose which permission groups are allowed to select the given option."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"deleting-an-option-value",children:"Deleting an Option Value"}),"\n",(0,t.jsx)(i.p,{children:"Option values can be deleted through the 3-dot menu beside the option. The value of the option is also displayed, which is useful when creating queries based on this custom field."}),"\n",(0,t.jsx)(i.h2,{id:"preview",children:"Preview"}),"\n",(0,t.jsx)(i.p,{children:"You can see and test the field behavior on the right side of the screen. This feature allows you to ensure that the custom field functions as intended before finalizing."})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>l});var t=n(7294);const s={},o=t.createContext(s);function l(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);