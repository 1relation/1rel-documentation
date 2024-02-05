"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[1490],{8472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=i(5893),s=i(1151);const d={},r="JSON Actions",o={id:"JSON/json-actions",title:"JSON Actions",description:"Overview",source:"@site/docs/JSON/json-actions.md",sourceDirName:"JSON",slug:"/JSON/json-actions",permalink:"/docs/JSON/json-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/JSON/json-actions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JSON Queries",permalink:"/docs/JSON/json-query"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Purpose of Actions",id:"purpose-of-actions",level:2},{value:"Anatomy of an Action",id:"anatomy-of-an-action",level:2},{value:"Structure of an Action",id:"structure-of-an-action",level:3},{value:"Example Action",id:"example-action",level:3},{value:"Defining Conditions (<code>if</code>)",id:"defining-conditions-if",level:2},{value:"Examples of Conditions",id:"examples-of-conditions",level:3},{value:"Defining Actions (<code>then</code>)",id:"defining-actions-then",level:2},{value:"CRUD Operations in Actions",id:"crud-operations-in-actions",level:2},{value:"Overview of CRUD Operations",id:"overview-of-crud-operations",level:3},{value:"Example of CRUD Operations",id:"example-of-crud-operations",level:3},{value:"Insert Property",id:"insert-property",level:3},{value:"Properties of Insert",id:"properties-of-insert",level:4},{value:"Example of Insert Operation",id:"example-of-insert-operation",level:4},{value:"Update Property",id:"update-property",level:3},{value:"Properties of Update",id:"properties-of-update",level:4},{value:"Example of Update Operation",id:"example-of-update-operation",level:4},{value:"Relate Property",id:"relate-property",level:3},{value:"Properties of Relate",id:"properties-of-relate",level:4},{value:"Example of Relate Operation",id:"example-of-relate-operation",level:4},{value:"Delete Property",id:"delete-property",level:3},{value:"Properties of Delete",id:"properties-of-delete",level:4},{value:"Example of Delete Operation",id:"example-of-delete-operation",level:4},{value:"Dynamic Data Operations in Actions",id:"dynamic-data-operations-in-actions",level:2},{value:"Overview of Dynamic Data Operations",id:"overview-of-dynamic-data-operations",level:3},{value:"Example of Dynamic Data Operation",id:"example-of-dynamic-data-operation",level:3},{value:"Properties of Dynamic Data Operation",id:"properties-of-dynamic-data-operation",level:3},{value:"<code>createInModule</code> Properties",id:"createinmodule-properties",level:4},{value:"Custom Fields in Actions",id:"custom-fields-in-actions",level:2},{value:"Ways to Assign Values to Custom Fields",id:"ways-to-assign-values-to-custom-fields",level:3},{value:"Examples of Assigning Values to Custom Fields",id:"examples-of-assigning-values-to-custom-fields",level:2},{value:"Fixed Value",id:"fixed-value",level:3},{value:"Form Field Value",id:"form-field-value",level:3},{value:"Form Field with Strip Option",id:"form-field-with-strip-option",level:3},{value:"Dropdown Option",id:"dropdown-option",level:3},{value:"Referenced Custom Field",id:"referenced-custom-field",level:3},{value:"Controlling Action Flow with <code>breakAfter</code>",id:"controlling-action-flow-with-breakafter",level:2},{value:"Overview of <code>breakAfter</code>",id:"overview-of-breakafter",level:3},{value:"Usage of <code>breakAfter</code>",id:"usage-of-breakafter",level:3},{value:"Example Usage of <code>breakAfter</code>",id:"example-usage-of-breakafter",level:4},{value:"Considerations for <code>breakAfter</code>",id:"considerations-for-breakafter",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json-actions",children:"JSON Actions"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Actions in 1Relation enable dynamic and automated interactions within your system. They allow for the execution of predefined tasks based on user interactions or specific conditions, making forms and systems more interactive and intelligent."}),"\n",(0,t.jsx)(n.h2,{id:"purpose-of-actions",children:"Purpose of Actions"}),"\n",(0,t.jsx)(n.p,{children:"Actions serve various purposes, including data management through CRUD operations, form navigation, and providing custom responses. They act as a digital workforce in your system, ready to perform tasks on command."}),"\n",(0,t.jsx)(n.h2,{id:"anatomy-of-an-action",children:"Anatomy of an Action"}),"\n",(0,t.jsxs)(n.p,{children:["An action in 1Relation is a structured object that defines when it should be triggered (",(0,t.jsx)(n.code,{children:"if"}),") and what it should do (",(0,t.jsx)(n.code,{children:"then"}),"). It's a crucial part of making your forms and systems interactive."]}),"\n",(0,t.jsx)(n.h3,{id:"structure-of-an-action",children:"Structure of an Action"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Identifies the action for easier management and understanding."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"if"})}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Specifies the conditions under which the action is triggered."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"then"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Outlines the tasks to be executed when the conditions are met."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"breakAfter"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["A flag to control the flow of subsequent actions. If set to ",(0,t.jsx)(n.code,{children:"false"}),", the flow continues to the next action, if the current one is executed sucessfully."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example-action",children:"Example Action"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Add New Customer",\n      "if": [\n        ["customerName", "=", "John"]\n      ],\n      "then": {\n        "crud": {\n          "insert": {\n            "customer": {\n              "moduleid": 50,\n              "moduleitemtype_id": "111",\n              "customfield": {\n                "cf100": "post[name]",\n                "cf101": "post[phonenumber]",\n                "cf102": "post[email]",\n                "cf103": "post[role]",\n                "cf104": "blue"\n              }\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"defining-conditions-if",children:["Defining Conditions (",(0,t.jsx)(n.code,{children:"if"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Setting conditions is like setting the rules of the game. They determine when an action should kick into gear.\nIt uses a structured query format as described in the ",(0,t.jsx)(n.a,{href:"/docs/JSON/json-query",children:"JSON Query Documentation"}),".."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Options"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Various"}),(0,t.jsx)(n.td,{children:"The field or attribute to be evaluated (e.g., a user group or custom field)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"="}),", ",(0,t.jsx)(n.code,{children:"!="}),", ",(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:"<"}),", etc."]}),(0,t.jsx)(n.td,{children:"Defines how the key's value should be compared to the condition's value."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Value"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Various"}),(0,t.jsx)(n.td,{children:"The value to compare against the key's value."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"examples-of-conditions",children:"Examples of Conditions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  ["contact.cf469", "!=", "option_753"],\n  ["contact.moduleitemtype_id", "=", 104]\n]\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"defining-actions-then",children:["Defining Actions (",(0,t.jsx)(n.code,{children:"then"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["When conditions are met, the ",(0,t.jsx)(n.code,{children:"then"})," part defines what happens next. It's where the action truly happens."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"crud"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Perform CRUD operations, manipulating data as needed."})]})})]}),"\n",(0,t.jsx)(n.p,{children:'Let\'s create a new section titled "CRUD Operations" in the "JSON Actions" document. This section will include an introduction, a properties table for each CRUD operation (insert, update, delete, relate), and a comprehensive example showcasing all four operations.'}),"\n",(0,t.jsx)(n.h2,{id:"crud-operations-in-actions",children:"CRUD Operations in Actions"}),"\n",(0,t.jsx)(n.p,{children:"CRUD operations form the core of data management in 1Relation, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system."}),"\n",(0,t.jsx)(n.p,{children:'To integrate the "dynamicdata" operation into the existing documentation seamlessly, I\'ll add it to the "Overview of CRUD Operations" section, ensuring it fits naturally with the existing content. Here\'s the revised section with the inclusion of "dynamicdata":'}),"\n",(0,t.jsx)(n.h3,{id:"overview-of-crud-operations",children:"Overview of CRUD Operations"}),"\n",(0,t.jsx)(n.p,{children:"CRUD operations, along with dynamic data handling, ensure that your system can respond to user inputs and scenarios by manipulating data as needed."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"insert"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Adds new data items to the system."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"update"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Modifies existing data items."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"delete"})}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Removes data items from the system."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"relate"})}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Defines or updates relationships between data items."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dynamicdata"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Handles operations involving data that needs to be processed dynamically before further action."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example-of-crud-operations",children:"Example of CRUD Operations"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we showcase how to perform insert, update, delete, relate, and dynamic data operations within a single action."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Manage Data",\n      "then": {\n        "crud": {\n          "insert": {\n            "newItem": {\n              "moduleid": 50,\n              "moduleitemtype_id": "111",\n              "customfield": {\n                "cf100": "post[value1]",\n                "cf101": "post[value2]"\n              }\n            }\n          },\n          "update": {\n            "existingItem": {\n              "moduleitemtype_id": "112",\n              "customfield": {\n                "cf102": "post[value3]",\n                "cf103": "post[value4]"\n              }\n            }\n          },\n          "delete": [\n            "itemToDelete"\n          ],\n          "relate": [\n            {\n              "child": "childItemKey",\n              "parent": "parentItemKey",\n              "relationid": 123,\n              "unlink": false\n            }\n          ],\n          "dynamicdata": {\n            "module_id": 60,\n            "where": [\n              [\n                "moduleitemtype_id",\n                "=",\n                "132"\n              ],\n              [\n                "cf610.string",\n                "=",\n                "option_818"\n              ]\n            ],\n            "createInModule": {\n              "moduleitemtype_id": 103,\n              "module_id": 60,\n              "customfield": {\n                "cf460": "dynamicdata[cf460]",\n                "cf645": "dynamicdata[cf645]",\n                "cf463": "dynamicdata[cf463]",\n                "cf461": "selfitem[cf323]"\n              },\n              "relations": [\n                {\n                  "parent": "salgstur",\n                  "child": "dynamicitem"\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this comprehensive example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Insert"}),": A new item is added to the system with specific custom field values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update"}),": An existing item's custom fields are updated with new values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delete"}),": A specific item is removed from the system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Relate"}),": A relationship is defined or updated between two items, potentially linking them together without unlinking."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Data"}),": Data is dynamically retrieved and processed, then used in subsequent operations, showcasing the versatility and adaptability of the system to handle complex, data-driven scenarios."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"insert-property",children:"Insert Property"}),"\n",(0,t.jsx)(n.p,{children:"Insert operations add new data items to the system."}),"\n",(0,t.jsx)(n.h4,{id:"properties-of-insert",children:"Properties of Insert"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"moduleid"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Specifies the module where the new item will be added."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"moduleitemtype_id"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Defines the module item type for the new item."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"customfield"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Sets the custom fields and their values for the new item."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-of-insert-operation",children:"Example of Insert Operation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"insert": {\n  "customer": {\n    "moduleid": 50,\n    "moduleitemtype_id": "111",\n    "customfield": {\n      "cf100": "John Doe",\n      "cf101": "1234567890"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"update-property",children:"Update Property"}),"\n",(0,t.jsx)(n.p,{children:"Update operations modify existing data items."}),"\n",(0,t.jsx)(n.h4,{id:"properties-of-update",children:"Properties of Update"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"moduleitemtype_id"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Identifies the module item type for the item being updated."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"customfield"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Determines the custom fields and their new values for the item."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-of-update-operation",children:"Example of Update Operation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"update": {\n  "customer": {\n    "moduleitemtype_id": "111",\n    "customfield": {\n      "cf100": "Jane Doe",\n      "cf101": "0987654321"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"relate-property",children:"Relate Property"}),"\n",(0,t.jsx)(n.p,{children:"Relate operations define or update the relationships between data items."}),"\n",(0,t.jsx)(n.h4,{id:"properties-of-relate",children:"Properties of Relate"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"child"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Indicates the child item in the relationship."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"parent"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Specifies the parent item in the relationship."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"relationid"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Provides the ID of the relation type."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"unlink"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Determines if the specified relationship should be unlinked."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-of-relate-operation",children:"Example of Relate Operation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"relate": [\n  {\n    "child": "kunde",\n    "parent": "kampagne",\n    "relationid": 76,\n    "unlink": true\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"delete-property",children:"Delete Property"}),"\n",(0,t.jsx)(n.p,{children:"Delete operations remove data items from the system."}),"\n",(0,t.jsx)(n.h4,{id:"properties-of-delete",children:"Properties of Delete"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"itemKey"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Defines the key of the item to be deleted."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"example-of-delete-operation",children:"Example of Delete Operation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"delete": [\n  "salgstur"\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-data-operations-in-actions",children:"Dynamic Data Operations in Actions"}),"\n",(0,t.jsx)(n.p,{children:"Dynamic data operations allow for real-time data manipulation and interaction, ensuring that your system can adapt to changing data and user needs dynamically."}),"\n",(0,t.jsx)(n.h3,{id:"overview-of-dynamic-data-operations",children:"Overview of Dynamic Data Operations"}),"\n",(0,t.jsx)(n.p,{children:"Dynamic data operations are designed to handle complex scenarios where data needs to be retrieved, processed, or transformed before being used in CRUD operations or other action sequences."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dynamicdata"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Handles operations involving data that needs to be processed dynamically before further action."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"example-of-dynamic-data-operation",children:"Example of Dynamic Data Operation"}),"\n",(0,t.jsx)(n.p,{children:"This example illustrates a dynamic data operation where data is dynamically retrieved and processed, then used in a subsequent insert and relate operation."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "opret salgstur",\n      "then": {\n        "crud": {\n          "insert": {\n            "salgstur": {\n              "moduleid": 74,\n              "moduleitemtype_id": 131,\n              "customfield": {\n                "cf606": "Salgstur",\n                "cf609": "selfitem[cf323]"\n              }\n            }\n          },\n          "relate": [\n            {\n              "child": "salgstur",\n              "parent": "selfitem"\n            },\n            {\n              "child": "salgstur",\n              "parent": "kampagne"\n            },\n            {\n              "child": "selfitem",\n              "parent": "kampagne"\n            }\n          ],\n          "dynamicdata": {\n            "module_id": 60,\n            "where": [\n              [\n                "moduleitemtype_id",\n                "=",\n                "132"\n              ],\n              [\n                "cf610.string",\n                "=",\n                "option_818"\n              ]\n            ],\n            "createInModule": {\n              "moduleitemtype_id": 103,\n              "module_id": 60,\n              "customfield": {\n                "cf460": "dynamicdata[cf460]",\n                "cf645": "dynamicdata[cf645]",\n                "cf463": "dynamicdata[cf463]",\n                "cf461": "selfitem[cf323]"\n              },\n              "relate": [\n                {\n                  "parent": "salgstur",\n                  "child": "dynamicitem"\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"dynamicdata"})," operation is utilized to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Retrieve data based on specific conditions (",(0,t.jsx)(n.code,{children:"where"})," clause)."]}),"\n",(0,t.jsxs)(n.li,{children:["Process and transform the retrieved data (",(0,t.jsx)(n.code,{children:"createInModule"}),"), allowing for the creation of new items with dynamically assigned custom fields."]}),"\n",(0,t.jsxs)(n.li,{children:["Establish relations between newly created items and existing ones (",(0,t.jsx)(n.code,{children:"relations"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"properties-of-dynamic-data-operation",children:"Properties of Dynamic Data Operation"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"module_id"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Specifies the module from which the dynamic data is retrieved."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"where"})}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Sets the conditions for retrieving dynamic data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"createInModule"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Defines how the retrieved dynamic data is processed and how new items are created."})]})]})]}),"\n",(0,t.jsxs)(n.h4,{id:"createinmodule-properties",children:[(0,t.jsx)(n.code,{children:"createInModule"})," Properties"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"moduleitemtype_id"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Specifies the module item type for the new item to be created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"module_id"})}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Specifies the module where the new item will be created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"customfield"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Sets the custom fields and their dynamic values for the new item."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"relate"})}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Defines relationships between the newly created item and existing items."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"custom-fields-in-actions",children:"Custom Fields in Actions"}),"\n",(0,t.jsx)(n.p,{children:"Custom fields allow for dynamic data assignment in actions, enhancing flexibility and adaptability."}),"\n",(0,t.jsx)(n.h3,{id:"ways-to-assign-values-to-custom-fields",children:"Ways to Assign Values to Custom Fields"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fixed Value"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Assigns a fixed value directly to the custom field."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Form Field Value"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Utilizes a value entered by the user in a form field."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Form Field with Strip Option"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Strips prefixed option_ from option values."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Dropdown Option"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:'Assigns a value from a dropdown custom field using "option_xxx".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Referenced Custom Field"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Assigns a value by referencing another item's custom field."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples-of-assigning-values-to-custom-fields",children:"Examples of Assigning Values to Custom Fields"}),"\n",(0,t.jsx)(n.h3,{id:"fixed-value",children:"Fixed Value"}),"\n",(0,t.jsx)(n.p,{children:"Assign a static value directly to the custom field."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"customfield": {\n  "cf100": "Red"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"form-field-value",children:"Form Field Value"}),"\n",(0,t.jsx)(n.p,{children:"Use a value entered by the user in a form field."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"customfield": {\n  "cf101": "post[color]"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"form-field-with-strip-option",children:"Form Field with Strip Option"}),"\n",(0,t.jsx)(n.p,{children:"Strip a specific pattern from a form field value, commonly used for processing dropdowns, radios, or checkboxes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"customfield": {\n  "cf102": "post[visitFrequency]|strip_option"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"strip_option"})," option is used to remove the ",(0,t.jsx)(n.code,{children:"option_"})," prefix from the form field value, ensuring that the actual value is assigned to the custom field. This is useful when option ids are strings you need to input into a normal text field."]})}),"\n",(0,t.jsx)(n.h3,{id:"dropdown-option",children:"Dropdown Option"}),"\n",(0,t.jsx)(n.p,{children:"Use an option ID for assigning a value from a dropdown custom field."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"customfield": {\n  "cf103": "option_123"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"referenced-custom-field",children:"Referenced Custom Field"}),"\n",(0,t.jsx)(n.p,{children:"Assign a value by referencing a custom field from another item."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"customfield": {\n  "cf104": "customer.cf445"\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"controlling-action-flow-with-breakafter",children:["Controlling Action Flow with ",(0,t.jsx)(n.code,{children:"breakAfter"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"breakAfter"})," property is an essential part of the action framework in 1Relation, allowing for granular control over the execution sequence of actions. It determines whether the system should continue processing subsequent actions after the current one."]}),"\n",(0,t.jsxs)(n.h3,{id:"overview-of-breakafter",children:["Overview of ",(0,t.jsx)(n.code,{children:"breakAfter"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"breakAfter"})," property is used within an action to specify whether subsequent actions should be processed or ignored after the current action is executed. This feature is particularly useful in scenarios where the execution of further actions depends on the outcome or completion of the current action."]}),"\n",(0,t.jsxs)(n.h3,{id:"usage-of-breakafter",children:["Usage of ",(0,t.jsx)(n.code,{children:"breakAfter"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"breakAfter"})," property is typically used in complex workflows where certain conditions or outcomes necessitate a halt in the sequence of actions. By setting ",(0,t.jsx)(n.code,{children:"breakAfter"})," to ",(0,t.jsx)(n.code,{children:"true"}),", you ensure that no further actions are processed after the current action, allowing for conditional branching or early termination of the action sequence, which is also the default behavior."]}),"\n",(0,t.jsxs)(n.h4,{id:"example-usage-of-breakafter",children:["Example Usage of ",(0,t.jsx)(n.code,{children:"breakAfter"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "name": "Update and Insert Data",\n      "then": {\n        "crud": {\n          "update": {\n            "existingData": {\n              "moduleid": 30,\n              "moduleitemtype_id": "222",\n              "customfield": {\n                "cf200": "updatedValue"\n              }\n            }\n          },\n          "insert": {\n            "newData": {\n              "moduleid": 40,\n              "moduleitemtype_id": "333",\n              "customfield": {\n                "cf300": "newValue"\n              }\n            }\n          }\n        }\n      },\n      "breakAfter": false  // Continue processing subsequent actions\n    },\n    {\n      "name": "Conditional Insert",\n      "if": [\n        ["item.condition", "=", "specificValue"]\n      ],\n      "then": {\n        "crud": {\n          "insert": {\n            "conditionalData": {\n              "moduleid": 50,\n              "moduleitemtype_id": "444",\n              "customfield": {\n                "cf400": "conditionalValue"\n              }\n            }\n          }\n        }\n      },\n      "breakAfter": false  // Continue processing subsequent actions\n    },\n    {\n      "name": "Conditional Relate",\n      "if": [\n        ["user.status", "=", "active"]\n      ],\n      "then": {\n        "crud": {\n          "relate": [\n            {\n              "child": "childItemKey",\n              "parent": "parentItemKey",\n              "relationid": 567,\n              "unlink": false\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this sequence:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update and Insert Data"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The first action performs both an update and an insert operation as part of the same ",(0,t.jsx)(n.code,{children:"crud"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Existing data is updated, and new data is inserted into the system."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"breakAfter"})," is set to ",(0,t.jsx)(n.code,{children:"false"}),", allowing the action sequence to continue."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conditional Insert"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The second action checks a condition (",(0,t.jsx)(n.code,{children:"item.condition = specificValue"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"If the condition is met, a new item is inserted with conditional data."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"breakAfter"})," is set to ",(0,t.jsx)(n.code,{children:"false"}),", allowing the next action to be processed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conditional Relate"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The third action checks another condition (",(0,t.jsx)(n.code,{children:"user.status = active"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["If the user status is active, a ",(0,t.jsx)(n.code,{children:"relate"})," operation is performed to define or update relationships between data items."]}),"\n",(0,t.jsxs)(n.li,{children:["There are no further actions, so ",(0,t.jsx)(n.code,{children:"breakAfter"})," doesn't need to be specified."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"considerations-for-breakafter",children:["Considerations for ",(0,t.jsx)(n.code,{children:"breakAfter"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default Behavior"}),": The default setting for ",(0,t.jsx)(n.code,{children:"breakAfter"})," is ",(0,t.jsx)(n.code,{children:"true"}),", which means that, unless explicitly set to ",(0,t.jsx)(n.code,{children:"false"}),", the system will naturally halt the action sequence after executing an action."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Conditional Logic"}),": Use ",(0,t.jsx)(n.code,{children:"breakAfter"})," in conjunction with conditional logic (",(0,t.jsx)(n.code,{children:"if"}),") to create dynamic, responsive action sequences that adapt based on user inputs or system states."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Action Design"}),": Plan your action sequences carefully, considering the implications of halting the sequence at different stages based on your system's workflow requirements."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By providing a dedicated control mechanism like ",(0,t.jsx)(n.code,{children:"breakAfter"}),", 1Relation empowers users to design intricate and adaptive workflows, ensuring that actions are executed in a controlled, logical manner that aligns with the specific needs of each process."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);