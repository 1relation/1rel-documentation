"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[2628],{4810:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(5893),s=i(1151);const r={},d="Count Widget",l={id:"apps/widgets/apps-count",title:"Count Widget",description:"alt text",source:"@site/docs/apps/widgets/apps-count.md",sourceDirName:"apps/widgets",slug:"/apps/widgets/apps-count",permalink:"/docs/apps/widgets/apps-count",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/apps/widgets/apps-count.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Timeline Widget",permalink:"/docs/apps/widgets/apps-calendar-timeline"},next:{title:"apps-pos",permalink:"/docs/apps/widgets/apps-pos"}},o={},a=[{value:"JSON Configuration Properties",id:"json-configuration-properties",level:2},{value:"Full Example",id:"full-example",level:4},{value:"3.1 Module ID Configuration",id:"31-module-id-configuration",level:3},{value:"Example",id:"example",level:4},{value:"3.2 Relations Configuration",id:"32-relations-configuration",level:3},{value:"Example",id:"example-1",level:4},{value:"3.3 Query Configuration",id:"33-query-configuration",level:3},{value:"Example",id:"example-2",level:4},{value:"3.4 Widget Display Configuration",id:"34-widget-display-configuration",level:3},{value:"Example",id:"example-3",level:4},{value:"3.5 Tap Actions Configuration",id:"35-tap-actions-configuration",level:3},{value:"Example",id:"example-4",level:4},{value:"3.6 Variant Configuration",id:"36-variant-configuration",level:3},{value:"Example",id:"example-5",level:4},{value:"3.7 Mobile Size Configuration",id:"37-mobile-size-configuration",level:3},{value:"Example",id:"example-6",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"count-widget",children:"Count Widget"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:i(3957).Z+"",width:"1304",height:"548"})}),"\n",(0,t.jsx)(n.p,{children:"The Count Widget in FlowAgent allows you to display aggregated numerical data on your dashboard, providing a quick summary of key metrics or counts of items within a particular module. By tapping on the widget, a subpage can be opened where details related to the count can be seen by the user."}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Module > Module settings > Widgets"})," to find and set up the Count Widget. Alternatively, you can access Count Widgets through the ",(0,t.jsx)(n.strong,{children:"Tab Widgets"})," option from a dashboard."]}),"\n",(0,t.jsx)(n.p,{children:"To configure the Count Widget through the FlowAgent UI, follow these steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": Enter a name for the widget to identify it on the dashboard."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": Enter a label for the widget."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": Select 'Count' from the dropdown to choose the widget type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sort"}),": Specify the position of the widget on the dashboard."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Size"}),": Set the size of the widget (between 1 and 12)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tabs"}),": Select the tabs where this widget should be displayed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Columns"}),": This setting is not relevant for the Count Widget."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query"}),": Provide a JSON query to filter the data that will be counted."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can configure the Count Widget using JSON to further customize its settings. Each property allows for specific customizations to ensure the count behaves and displays data in a manner that best suits user needs."}),"\n",(0,t.jsx)(n.h2,{id:"json-configuration-properties",children:"JSON Configuration Properties"}),"\n",(0,t.jsx)(n.h4,{id:"full-example",children:"Full Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "moduleid": 113,\n  "relations": {\n    "module112": {\n      "parent": 112,\n      "child": 113,\n      "relationid": 118\n    }\n  },\n  "query": [\n    [\n      "module112Item.id",\n      "=",\n      "[itemid]"\n    ]\n  ],\n  "label": "Active",\n  "pluralLabel": "Active",\n  "displayType": "vertical",\n  "icon": "view_timeline",\n  "iconColor": "white",\n  "iconBackgroundColor": "#68aa68",\n  "tapActions": {\n    "tap": {\n      "action": "tab",\n      "value": "customerstab_projects"\n    }\n  },\n  "mobileSize": 3,\n  "variant": 2\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This full example provides a complete JSON configuration for the Count Widget, demonstrating all the possible properties and how they interact to customize the widget's appearance and behavior."]}),"\n",(0,t.jsx)(n.h3,{id:"31-module-id-configuration",children:"3.1 Module ID Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"moduleid"})," property specifies which module provides the data that will be counted."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"moduleid"})}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Unique identifier for the module whose data will be represented by the count."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "moduleid": 52\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example demonstrates how to configure the respective JSON properties to achieve the desired functionality in the Count Widget. Each property plays a specific role, such as defining the data source."]}),"\n",(0,t.jsx)(n.h3,{id:"32-relations-configuration",children:"3.2 Relations Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"relations"})," property defines relationships between different modules within the widget."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"relations"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["Defines relationships between different modules within the widget. ",(0,t.jsx)(n.a,{href:"/docs/JSON/json-relations",children:"JSON Relations Documentation"})]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "relations": {\n    "module75": {\n      "parent": 75,\n      "child": 77,\n      "relationid": 79\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example demonstrates how to set up relationships between modules, which is useful when multiple related datasets need to be displayed."]}),"\n",(0,t.jsx)(n.h3,{id:"33-query-configuration",children:"3.3 Query Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"query"})," property is used to filter the data that will be counted. It is an array of conditions, allowing you to define specific criteria for the count."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"query"})}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["Array of conditions to filter the data that will be counted. ",(0,t.jsx)(n.a,{href:"/docs/JSON/json-query",children:"JSON Query Documentation"})]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "query": [\n    [\n      "module75Item.status",\n      "=",\n      "active"\n    ],\n    [\n      "cf1066.string",\n      "!=",\n      ""\n    ]\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example shows how to use queries to filter the data counted, ensuring only relevant items are included in the total."]}),"\n",(0,t.jsx)(n.h3,{id:"34-widget-display-configuration",children:"3.4 Widget Display Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"display"})," property allows customization of how the Count Widget is displayed on the dashboard."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"label"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Defines the text under the number represented in the count widget."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pluralLabel"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["The same as ",(0,t.jsx)(n.code,{children:"label"})," but used for values higher than 1."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"displayType"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:'Determines the representation of the widget, either "horizontal" or "vertical".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"icon"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"The icon used in the widget."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"iconColor"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"The color of the icon in the widget."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"iconBackgroundColor"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"The color of the circular background around the icon in the widget."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "label": "Active",\n  "pluralLabel": "Active",\n  "displayType": "vertical",\n  "icon": "view_timeline",\n  "iconColor": "white",\n  "iconBackgroundColor": "#68aa68"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example shows how to configure the display settings of the Count Widget, including labels, icon, and layout options to customize its appearance."]}),"\n",(0,t.jsx)(n.h3,{id:"35-tap-actions-configuration",children:"3.5 Tap Actions Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"tapActions"})," property allows you to configure what happens when the user taps on the Count Widget."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tapActions"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Defines the actions that occur when the widget is tapped."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tap"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Specifies the action to be performed when tapping the widget."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"action"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:'The type of action to perform, currently only "tab" is supported.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"The tab that will be opened when the widget is tapped. The value is the last part of the URL for that given tab."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "tapActions": {\n    "tap": {\n      "action": "tab",\n      "value": "customerstab_projects"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example demonstrates how to configure a tap action that opens a specific tab when the Count Widget is tapped. The ",(0,t.jsx)(n.code,{children:"value"})," property specifies the tab to open by using the last part of the tab's URL."]}),"\n",(0,t.jsx)(n.h3,{id:"36-variant-configuration",children:"3.6 Variant Configuration"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:i(7).Z+"",width:"978",height:"121"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"variant"})," property allows you to select between different visual styles for the Count Widget."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"variant"})}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Specifies the visual style of the widget. Available values are: 1 (default), 2 (soft), 3 (full)."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "variant": 2\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example demonstrates how to configure the ",(0,t.jsx)(n.code,{children:"variant"}),' property to apply the "soft" visual style to the Count Widget. Variants allow for visual differentiation and customization depending on user preference.']}),"\n",(0,t.jsx)(n.h3,{id:"37-mobile-size-configuration",children:"3.7 Mobile Size Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"mobileSize"})," property allows you to set an alternative size for the widget when viewed on a mobile device."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mobileSize"})}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"A number between 1 and 12 that gives an alternative size for the widget on mobile devices."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mobileSize": 3\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation:"})," This example shows how to configure the ",(0,t.jsx)(n.code,{children:"mobileSize"})," property to specify an alternative size for the widget when viewed on mobile devices. This allows for better optimization and display of the widget depending on the screen size and orientation."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3957:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/apps-count-overview-650e5ff2e0b3ec8b3ca4e85798db9693.png"},7:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/apps-count-variant-65170feee45bb31356b7b16843313873.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var t=i(7294);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);