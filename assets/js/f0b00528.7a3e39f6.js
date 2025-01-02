"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[8425],{1120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(5893),d=t(1151);const l={},s="Table Widget",r={id:"apps/widgets/apps-table",title:"Table Widget",description:"The table widget in FlowAgent allows you to display data in a structured and organized manner.",source:"@site/docs/apps/widgets/apps-table.md",sourceDirName:"apps/widgets",slug:"/apps/widgets/apps-table",permalink:"/docs/apps/widgets/apps-table",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/apps/widgets/apps-table.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sum Widget",permalink:"/docs/apps/widgets/apps-sum"},next:{title:"Details Widget",permalink:"/docs/apps/widgets/apps-details"}},o={},c=[{value:"Configuring Table Widgets through UI",id:"configuring-table-widgets-through-ui",level:2},{value:"Query/JSON",id:"queryjson",level:2},{value:"1. Widget Module Data",id:"1-widget-module-data",level:3},{value:"Example 1: Widget Module Data",id:"example-1-widget-module-data",level:4},{value:"Widget Configuration",id:"widget-configuration",level:2},{value:"Example 2: Widget Configuration",id:"example-2-widget-configuration",level:4},{value:"Relations",id:"relations",level:2},{value:"Example 3: Widget with Relations",id:"example-3-widget-with-relations",level:4},{value:"Parent and Child Item IDs",id:"parent-and-child-item-ids",level:5},{value:"Relation Types",id:"relation-types",level:5},{value:"Queries",id:"queries",level:2},{value:"Example 4: Widget with Queries",id:"example-4-widget-with-queries",level:4},{value:"Table Configuration",id:"table-configuration",level:2},{value:"Example 5: Table Configuration",id:"example-5-table-configuration",level:4},{value:"Table UI Options - Powersearch",id:"table-ui-options---powersearch",level:2},{value:"Example 6: Table UI Options",id:"example-6-table-ui-options",level:4},{value:"Actional Buttons",id:"actional-buttons",level:2},{value:"Example: Actional Buttons in Table Widget",id:"example-actional-buttons-in-table-widget",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"table-widget",children:"Table Widget"}),"\n",(0,i.jsx)(n.p,{children:"The table widget in FlowAgent allows you to display data in a structured and organized manner."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-table-widgets-through-ui",children:"Configuring Table Widgets through UI"}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to configure your table widget:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": Specify the name of the widget."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sort"}),": Determine the order of this widget on the dashboard."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Size"}),": Set the size of the widget (between 1 and 12)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tabs"}),": Select in which tab(s) this widget should be shown."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create items in module"}),": Adds a create button to the table. When used, it creates a new item for the selected module."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Columns"}),": Specify which columns should be shown in the table and their order."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"queryjson",children:"Query/JSON"}),"\n",(0,i.jsx)(n.p,{children:"To set up a table widget, we need to configure the widget with JSON."}),"\n",(0,i.jsx)(n.h3,{id:"1-widget-module-data",children:"1. Widget Module Data"}),"\n",(0,i.jsx)(n.p,{children:"The table widget will show data from a specific module. The JSON file starts with the ID of the module we want to present data from."}),"\n",(0,i.jsx)(n.h4,{id:"example-1-widget-module-data",children:"Example 1: Widget Module Data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "moduleid": 41 // Unique identifier for the module whose data will be represented in the widget.\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"widget-configuration",children:"Widget Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Customize the appearance of your widget with these main properties:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"icon"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Icon for the widget. Visit Google Fonts Icons for options."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"iconColor"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Hex color code"}),(0,i.jsx)(n.td,{children:"Color of the icon. Use a hex color code."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"iconBackgroundColor"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Hex color code"}),(0,i.jsx)(n.td,{children:"Background color of the icon. Use a hex color code."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pageLength"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Any integer between 1-100"}),(0,i.jsx)(n.td,{children:"The number of rows visible in the table. Default is 10."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example-2-widget-configuration",children:"Example 2: Widget Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "icon": "assignment",\n  "iconColor": "white",\n  "iconBackgroundColor": "#634DA3",\n  "pageLength": 20\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this widget configuration, the chosen icon for the widget is 'assignment'. The color of the icon is set to white, and the background color of the icon is #634DA3. Additionally, this configuration is set to display 20 rows in the table widget."}),"\n",(0,i.jsx)(n.h2,{id:"relations",children:"Relations"}),"\n",(0,i.jsx)(n.p,{children:"Define the relationships between different modules within your widget:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"parent"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the parent module in the relation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"child"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the child module in the relation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"relationid"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the specific relation, if multiple relations exist between the two modules."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"relationtype"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsxs)(n.td,{children:["The type of relation between the two modules. ",(0,i.jsx)(n.code,{children:"child"})," or ",(0,i.jsx)(n.code,{children:"parent"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"parent_id"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the parent item in the relation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"child_id"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"The ID of the child item in the relation."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example-3-widget-with-relations",children:"Example 3: Widget with Relations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "relations": {\n    "module43": {\n      "parent": 43,\n      "child": 41,\n      "relationid": 22\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this relation configuration, the parent module is identified as module 43, and the child module as module 41. The relationid is set to 22, indicating the specific relation used if multiple relations exist between these two modules."}),"\n",(0,i.jsx)(n.h5,{id:"parent-and-child-item-ids",children:"Parent and Child Item IDs"}),"\n",(0,i.jsx)(n.p,{children:"On some occasions, you may need to specify the parent or child item IDs in the relation. This is useful when you want to display data from the child module based on the parent item selected in the widget."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "relations": {\n    "module64": {\n      "parent": 64,\n      "child": 63,\n      "relationid": 65\n    },\n    "module60": {\n      "parent": 64,\n      "child": 60,\n      "relationid": 66,\n      "parent_id": "module64.parent_id"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we want to display data from module 60 based on the parent item selected in module 64. The parent item ID is specified as ",(0,i.jsx)(n.code,{children:"module64.parent_id"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"relation-types",children:"Relation Types"}),"\n",(0,i.jsx)(n.p,{children:"Relation type is typically calculated by the system and is used to determine the type of relation between the parent and child modules. This is useful when you have multiple relations between two modules and need to specify a particular relation for the widget or when the relation type is not automatically calculated correctly by the system."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "relations": {\n    "module107": {\n      "parent": 107,\n      "child": 108,\n      "relationid": 104,\n      "relationtype": "child"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this example, we want to show data from module 107 and its child data from module 108. The relation type is specified as 'child' to ensure that the correct relation is used between the two modules."}),"\n",(0,i.jsx)(n.h2,{id:"queries",children:"Queries"}),"\n",(0,i.jsx)(n.p,{children:"Configure filters for the data displayed in the widget using queries:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"query"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"An array of conditions for filtering the data displayed in the widget. Each condition is an array where the first element is the property, the second element is the operator, and the third element is the value."})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["For detailed information on JSON query formatting and options, refer to the documentation ",(0,i.jsx)(n.a,{href:"/docs/JSON/json-query",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example-4-widget-with-queries",children:"Example 4: Widget with Queries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "query": [\n    ["cf151.string", "=", "option_220"]\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this query configuration, the widget is set to display data filtered based on the condition where the value of the custom field 'cf151.string' equals 'option_220'. This setup ensures that only specific, relevant data is shown in the widget, based on the defined criteria."}),"\n",(0,i.jsx)(n.h2,{id:"table-configuration",children:"Table Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configure additional features for the widget:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clickable"})}),(0,i.jsx)(n.td,{children:"string/array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'"none", array of cfkeys'}),(0,i.jsxs)(n.td,{children:["Defines clickability of table rows: ",(0,i.jsx)(n.code,{children:"none"})," for no clickable columns, or an array of specific fields that are clickable. If not defined, the default behavior selects all title columns as clickable."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"orderby"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Array of sorting"}),(0,i.jsx)(n.td,{children:"Specifies the column(s) and order (ASC/DESC) for sorting table data."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowInlineEdit"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Allows users to edit certain fields directly from the table without opening a separate form."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowInlineEditFields"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Array of fields"}),(0,i.jsxs)(n.td,{children:["Defines which fields can be edited inline when ",(0,i.jsx)(n.code,{children:"allowInlineEdit"})," is enabled."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowCreateButton"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Adds a button to allow users to create new items directly from the table widget."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"group"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Key-value pairs"}),(0,i.jsx)(n.td,{children:"Groups data based on the specified field and provides a count or other aggregation metric."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example-5-table-configuration",children:"Example 5: Table Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clickable": "none",\n  "orderby": [["cf12.string", "DESC"]],\n  "allowInlineEdit": true,\n  "allowInlineEditFields": ["cf1", "cf2", "cf3"],\n  "allowCreateButton": true,\n  "group": {"cf237": "count"}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Another example, where only specific fields are clickable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clickable": [\n    "cf1234",\n    "cf4321"\n  ],\n  "orderby": [["cf12.string", "DESC"]],\n  "allowInlineEdit": true,\n  "allowInlineEditFields": ["cf1", "cf2", "cf3"],\n  "allowCreateButton": true,\n  "group": {"cf237": "count"}\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"table-ui-options---powersearch",children:"Table UI Options - Powersearch"}),"\n",(0,i.jsx)(n.p,{children:"Manage the behavior and layout of the table with these options:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showViews"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display a dropdown with power searches created in module settings."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showSearch"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display a search field within the widget."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showFiltersButton"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display a filter button, allowing adjustments to the table filter."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showColumnsButton"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display a button for selecting visible table columns."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showDownloadExcel"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display a button for downloading table results as an Excel file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showDownloadPrint"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display a button for printing table results."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowRowSelect"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to enable checkboxes for row selection."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowOrdering"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to allow ordering of table columns."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowMobileCards"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to enable card view on mobile devices."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allowMobileChips"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"Toggle to display chips on mobile card view."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"useChipsAfter"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Any integer"}),(0,i.jsx)(n.td,{children:"The limit for when to start using chips instead of labels."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"lists"})}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Provides a dropdown with filtering options based on power searches."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example-6-table-ui-options",children:"Example 6: Table UI Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "powerSearch": {\n    "showViews": true,\n    "showSearch": true,\n    "showFiltersButton": true,\n    "showColumnsButton": true,\n    "showDownloadExcel": true,\n    "showDownloadPrint": true,\n    "allowRowSelect": true,\n    "allowOrdering": true,\n    "allowMobileCards": true,\n    "allowMobileChips": true,\n    "useChipsAfter": 4,\n    "lists": [\n      {\n        "id": 101,\n        "name": "Members"\n      },\n      {\n        "id": 102,\n        "name": "Leads"\n      },\n      {\n        "id": 103,\n        "name": "All Entries"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This configuration for the table UI options includes enabling power searches, search functionality, filter and column selection buttons, options for downloading the table data as Excel or printing it, and settings for row selection and ordering. The configuration also adjusts the mobile view, enabling card and chips views and setting a threshold for using chips after 4 items. Additionally, it includes a ",(0,i.jsx)(n.code,{children:"lists"})," option that provides a dropdown with different filtering options based on power searches."]}),"\n",(0,i.jsx)(n.h2,{id:"actional-buttons",children:"Actional Buttons"}),"\n",(0,i.jsxs)(n.p,{children:["Enhance your table widget with actional buttons that perform specific tasks. These buttons can be configured for various actions and placed in different areas of the widget. For a detailed guide on setting up actional buttons, refer to ",(0,i.jsx)(n.a,{href:"/docs/site-settings/actionable-buttons/ab-intro-to-ab",children:"Actional buttons Introduction"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Options"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"keyName"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Unique identifier for the action button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"visibility"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Configuration object for the button's visibility and placement."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"visual"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"Contains visual settings for the button, like icon display and placement."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"placement"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'"row"'}),(0,i.jsx)(n.td,{children:'Determines where the button is placed. Default is top of the table; "row" places it on each row.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"displayIconOnly"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"true, false"}),(0,i.jsx)(n.td,{children:"If true, only the icon is displayed; otherwise, the button is shown with text."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Buttons are displayed at the top right of the table widget by default. When the ",(0,i.jsx)(n.code,{children:"placement"}),' is set to "row", they appear within each row. When used with ',(0,i.jsx)(n.code,{children:"allowRowSelect"}),", (under ",(0,i.jsx)(n.code,{children:"powerSearch"}),") they can also manage actions across multiple selected rows.\nThere can be multiple ",(0,i.jsx)(n.code,{children:"Actional Buttons"})," in each table widget. Even combinations of ",(0,i.jsx)(n.code,{children:"top"}),", ",(0,i.jsx)(n.code,{children:"row"})," and ",(0,i.jsx)(n.code,{children:"multi"})," buttons."]}),"\n",(0,i.jsx)(n.h4,{id:"example-actional-buttons-in-table-widget",children:"Example: Actional Buttons in Table Widget"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actionalButtons": [\n    {\n      "keyName": "ab_simple_example",\n      "visibility": {\n        "visual": {\n          "displayIconOnly": true\n        }\n      }\n    },\n    {\n      "keyName": "ab_example_key",\n      "visibility": {\n        "visual": {\n          "displayIconOnly": true,\n          "placement": "row"\n        }\n      }\n    },\n    {\n      "keyName": "ab_member-new-supplier-agreement",\n      "visibility": {\n        "visual": {\n          "displayIconOnly": true,\n          "allowMultipleItems": true // Tell AB that it can handle multiple items.\n        }\n      }\n    }\n  ],\n  "powerSearch": {\n    "allowRowSelect": true // Enable Row Select on Power Search Table.\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this JSON example, three actional buttons are configured for the table widget. The first button, 'ab_simple_example', is displayed at the top right of the table with only its icon visible. The second button, 'ab_example_key', is similarly displayed with only its icon but is placed on each row. The third button, 'ab_member-new-supplier-agreement', also displays only the icon and is configured to handle multiple items, in coordination with the row selection featu"})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const d={},l=i.createContext(d);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);