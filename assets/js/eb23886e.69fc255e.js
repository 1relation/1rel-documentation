"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[9987],{9292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>r});var i=t(5893),s=t(1151);const d={},a="CRUD operations",o={id:"JSON/actions-crud",title:"CRUD operations",description:"CRUD operations form the core of data management in FlowAgent, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system.",source:"@site/docs/JSON/actions-crud.md",sourceDirName:"JSON",slug:"/JSON/actions-crud",permalink:"/docs/JSON/actions-crud",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/JSON/actions-crud.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JSON Actions",permalink:"/docs/JSON/json-actions"},next:{title:"Navigate user to an lat/lng or address",permalink:"/docs/JSON/actions-open-location"}},l={},r=[{value:"Overview of CRUD Operations",id:"overview-of-crud-operations",level:2},{value:"Multiple items in CRUD actions",id:"multiple-items-in-crud-actions",level:2},{value:"Custom Fields in CRUD Operations",id:"custom-fields-in-crud-operations",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Insert Operation",id:"example-1-insert-operation",level:3},{value:"Example 2: Update Operation",id:"example-2-update-operation",level:3},{value:"Example 3: Delete Operation",id:"example-3-delete-operation",level:3},{value:"Example 4: Relate Operation",id:"example-4-relate-operation",level:3},{value:"Example 5: Dynamic Data Operation",id:"example-5-dynamic-data-operation",level:3},{value:"Example 6: Multiple Items in CRUD Actions",id:"example-6-multiple-items-in-crud-actions",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"crud-operations",children:"CRUD operations"}),"\n",(0,i.jsx)(n.p,{children:"CRUD operations form the core of data management in FlowAgent, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system."}),"\n",(0,i.jsx)(n.h2,{id:"overview-of-crud-operations",children:"Overview of CRUD Operations"}),"\n",(0,i.jsx)(n.p,{children:"CRUD operations, along with dynamic data handling, ensure that your system can respond to user inputs and scenarios by manipulating data as needed."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Operation"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"insert"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Adds new data items to the system."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"update"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Modifies existing data items."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"delete"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Removes data items from the system."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"relate"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Defines or updates relationships between data items."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dynamicdata"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Handles operations involving data that needs to be processed dynamically before further action."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"multiple-items-in-crud-actions",children:"Multiple items in CRUD actions"}),"\n",(0,i.jsx)(n.p,{children:"In some scenarios, it is necessary to perform actions on multiple items at once. FlowAgent supports batch operations, allowing you to update, delete, or relate multiple items in a single action. This feature is especially useful when you need to modify multiple records simultaneously to maintain consistency across your system."}),"\n",(0,i.jsx)(n.h2,{id:"custom-fields-in-crud-operations",children:"Custom Fields in CRUD Operations"}),"\n",(0,i.jsx)(n.p,{children:"Custom fields allow for dynamic data assignment in actions, enhancing flexibility and adaptability."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Fixed Value"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Assigns a fixed value directly to the custom field."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form Field Value"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Utilizes a value entered by the user in a form field."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form Field with Strip Option"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Strips prefixed option_ from option values."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dropdown Option"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'Assigns a value from a dropdown custom field using "option_xxx".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Referenced Custom Field"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Assigns a value by referencing another item's custom field."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-1-insert-operation",children:"Example 1: Insert Operation"}),"\n",(0,i.jsxs)(n.p,{children:["The following example demonstrates how to use the ",(0,i.jsx)(n.code,{children:"insert"})," operation to add a new item to the system."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Insert New Item",\n      "then": {\n        "crud": {\n          "insert": {\n            "newItem": {\n              "moduleid": 50,\n              "moduleitemtype_id": "111",\n              "customfield": {\n                "cf100": "[post.value1]",\n                "cf101": "[post.value2]"\n              }\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-2-update-operation",children:"Example 2: Update Operation"}),"\n",(0,i.jsxs)(n.p,{children:["The following example shows how to use the ",(0,i.jsx)(n.code,{children:"update"})," operation to modify an existing item."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Update Existing Item",\n      "then": {\n        "crud": {\n          "update": {\n            "existingItem": {\n              "moduleitemtype_id": "112",\n              "customfield": {\n                "cf102": "[post.value3]",\n                "cf103": "[post.value4]"\n              }\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-3-delete-operation",children:"Example 3: Delete Operation"}),"\n",(0,i.jsxs)(n.p,{children:["The following example demonstrates how to use the ",(0,i.jsx)(n.code,{children:"delete"})," operation to remove an item from the system."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Delete Item",\n      "then": {\n        "crud": {\n          "delete": [\n            "itemToDelete"\n          ]\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-4-relate-operation",children:"Example 4: Relate Operation"}),"\n",(0,i.jsxs)(n.p,{children:["The following example demonstrates how to use the ",(0,i.jsx)(n.code,{children:"relate"})," operation to define or update relationships between data items."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Relate Items",\n      "then": {\n        "crud": {\n          "relate": [\n            {\n              "child": "childItemKey",\n              "parent": "parentItemKey",\n              "relationid": 123,\n              "unlink": false\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-5-dynamic-data-operation",children:"Example 5: Dynamic Data Operation"}),"\n",(0,i.jsxs)(n.p,{children:["The following example demonstrates how to use the ",(0,i.jsx)(n.code,{children:"dynamicdata"})," operation to handle data that needs to be processed dynamically before further action."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Handle Dynamic Data",\n      "then": {\n        "crud": {\n          "dynamicdata": {\n            "module_id": 60,\n            "where": [\n              [\n                "moduleitemtype_id",\n                "=",\n                132\n              ],\n              [\n                "cf610.string",\n                "=",\n                "option_818"\n              ]\n            ],\n            "createInModule": {\n              "moduleitemtype_id": 103,\n              "module_id": 60,\n              "customfield": {\n                "cf460": "dynamicdata[cf460]",\n                "cf645": "dynamicdata[cf645]",\n                "cf463": "dynamicdata[cf463]",\n                "cf461": "[selfitem.cf323]"\n              },\n              "relations": [\n                {\n                  "parent": "salgstur",\n                  "child": "dynamicitem"\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-6-multiple-items-in-crud-actions",children:"Example 6: Multiple Items in CRUD Actions"}),"\n",(0,i.jsx)(n.p,{children:"The following example demonstrates how to perform update and delete actions on multiple items within the same action sequence."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "items": {\n    "projects": [\n      [\n        "id",\n        "=",\n        "[itemid]"\n      ]\n    ],\n    "tasks[]": [\n      [\n        "id",\n        "IN",\n        "[relation80]"\n      ]\n    ]\n  },\n  "visibility": {\n    "visual": {\n      "text": "Update and delete",\n      "textColor": "white",\n      "bgColor": "danger",\n      "icon": "warning",\n      "displayIconOnly": false\n    }\n  },\n  "actions": [\n    {\n      "name": "Update and delete multiple items",\n      "then": {\n        "crud": {\n          "update": {\n            "projects[]": {\n              "customfield": {\n                "cf649": "option_863"\n              }\n            }\n          },\n          "delete": [\n            "tasks[]"\n          ]\n         }\n       }\n     }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In the above example, the action performs updates on multiple projects and deletes multiple tasks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Items"}),": The ",(0,i.jsx)(n.code,{children:"items"})," section defines the target items for the actions. In this case, it targets ",(0,i.jsx)(n.code,{children:"projects"})," with a specific ID and ",(0,i.jsx)(n.code,{children:"tasks"})," related to ",(0,i.jsx)(n.code,{children:"relation80"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update"}),": The ",(0,i.jsx)(n.code,{children:"update"})," operation modifies a custom field (",(0,i.jsx)(n.code,{children:"cf649"}),") for all projects matching the specified condition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delete"}),": The ",(0,i.jsx)(n.code,{children:"delete"})," operation removes all tasks matching the specified condition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Visibility"}),": The ",(0,i.jsx)(n.code,{children:"visibility"})," section provides a visual indicator for the action, which helps in identifying the nature of the action in the user interface."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This approach allows for efficient management of multiple items, reducing the need for repetitive actions and ensuring consistency across your system."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},d=i.createContext(s);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);