"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[7430],{4275:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var s=n(5893),l=n(1151);const d={},r="JSON Queries",t={id:"JSON/json-query",title:"JSON Queries",description:"Introduction",source:"@site/docs/JSON/json-query.md",sourceDirName:"JSON",slug:"/JSON/json-query",permalink:"/docs/JSON/json-query",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/JSON/json-query.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JSON in 1Relation",permalink:"/docs/JSON/json-intro-to-json"},next:{title:"JSON Actions",permalink:"/docs/JSON/json-actions"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Core Concepts",id:"core-concepts",level:2},{value:"Query Keys",id:"query-keys",level:3},{value:"JSON &quot;key&quot; Example",id:"json-key-example",level:4},{value:"Comments",id:"comments",level:4},{value:"Query Operators",id:"query-operators",level:3},{value:"JSON &quot;operator&quot; Example",id:"json-operator-example",level:4},{value:"Comments",id:"comments-1",level:4},{value:"Query Values",id:"query-values",level:3},{value:"JSON &quot;value&quot; Example",id:"json-value-example",level:4},{value:"Comments",id:"comments-2",level:4},{value:"Query combinations",id:"query-combinations",level:2},{value:"String Fields",id:"string-fields",level:3},{value:"Number Fields",id:"number-fields",level:3},{value:"Dropdown, Radio and Checkbox Fields",id:"dropdown-radio-and-checkbox-fields",level:3},{value:"Date Fields",id:"date-fields",level:3},{value:"User Fields",id:"user-fields",level:3},{value:"Module Item Type",id:"module-item-type",level:3},{value:"Item ID",id:"item-id",level:3},{value:"Module ID",id:"module-id",level:3},{value:"Empty Query",id:"empty-query",level:3},{value:"How-To construct a query",id:"how-to-construct-a-query",level:2},{value:"Constructing a Query",id:"constructing-a-query",level:3},{value:"JSON Example",id:"json-example",level:4},{value:"Explanation",id:"explanation",level:4}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"json-queries",children:"JSON Queries"}),"\n",(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"JSON queries in 1Relation facilitate structured data retrieval and management, enhancing efficiency and accuracy. This documentation elaborates on the construction and utilization of JSON queries, detailing the keys, operators, and values integral to formulating queries within 1Relation."}),"\n",(0,s.jsx)(i.p,{children:"JSON queries are used in the following functionality:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Actional buttons"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Forms"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Widgets"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Powersearches"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Apps that make use of queries"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,s.jsx)(i.h3,{id:"query-keys",children:"Query Keys"}),"\n",(0,s.jsx)(i.p,{children:"Query keys are the attributes against which you want to filter or search data."}),"\n",(0,s.jsx)(i.h4,{id:"json-key-example",children:'JSON "key" Example'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'["cf101.string", "=", "value"]\n'})}),"\n",(0,s.jsx)(i.h4,{id:"comments",children:"Comments"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cfxxx.string"}),": Refers to a specific custom field."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"moduleitemtype_id"}),": Refers to items in a specific module item type."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"id"}),": Referring to item id."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"module_id"}),": Refers to items in a specific module."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"query-operators",children:"Query Operators"}),"\n",(0,s.jsx)(i.p,{children:"Query operators determine the type of comparison between the query key and the query value."}),"\n",(0,s.jsx)(i.h4,{id:"json-operator-example",children:'JSON "operator" Example'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'["cf101.string", ">", "1000"]\n'})}),"\n",(0,s.jsx)(i.h4,{id:"comments-1",children:"Comments"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"="}),": Value of custom field should be equal to specified value."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"!="}),": Value of custom field should not be equal to specified value."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:">"})," / ",(0,s.jsx)(i.code,{children:"<"}),": Value of custom field should be greater/less than specified value."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:">="})," / ",(0,s.jsx)(i.code,{children:"<="}),": Value of custom field should be greater/less than or equal to specified value."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"IN"})," / ",(0,s.jsx)(i.code,{children:"NOT IN"}),": Value of custom field should be in/not be in the specified list of values."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"LIKE"})," / ",(0,s.jsx)(i.code,{children:"NOT LIKE"}),": Partial matching/excluding partial matches."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"query-values",children:"Query Values"}),"\n",(0,s.jsx)(i.p,{children:"Query values are the data or conditions against which the query keys are compared."}),"\n",(0,s.jsx)(i.h4,{id:"json-value-example",children:'JSON "value" Example'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'["cf101.string", "=", "[datenow]"]\n'})}),"\n",(0,s.jsx)(i.h4,{id:"comments-2",children:"Comments"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Fixed Values: Text or numbers."}),"\n",(0,s.jsx)(i.li,{children:"Options: Refers to a custom field value, use option IDs for dropdown fields."}),"\n",(0,s.jsxs)(i.li,{children:["Replaceables: Used to query based on information from a specific location such as ",(0,s.jsx)(i.code,{children:"[itemid]"}),", ",(0,s.jsx)(i.code,{children:"[relationxxx]"}),", ",(0,s.jsx)(i.code,{children:"[datenow]"}),", ",(0,s.jsx)(i.code,{children:"[userid]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"query-combinations",children:"Query combinations"}),"\n",(0,s.jsx)(i.h3,{id:"string-fields",children:"String Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Use the exact string value in queries."}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:'["cf151.string", "=", "abc"]'})," specifies that the value of custom field ",(0,s.jsx)(i.code,{children:"cf151.string"}),' should be exactly "abc".']}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"number-fields",children:"Number Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Use the exact numeric value in queries."}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:'["cf152.string", ">", "9999"]'})," specifies that the value of custom field ",(0,s.jsx)(i.code,{children:"cf152.string"})," should be greater than 9999."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"dropdown-radio-and-checkbox-fields",children:"Dropdown, Radio and Checkbox Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Always use the option ID in queries, not the display name."}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:'["cf153.string", "IN", ["option_220", "option_221", "option_222"]]'})," specifies that the value of custom field ",(0,s.jsx)(i.code,{children:"cf153.string"})," should be in the specified list of values."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"date-fields",children:"Date Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'Use the date in the "YYYY-MM-DD" format.'}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:'["cf154.string", ">=", "2023-01-01"]'})," specifies that the date in custom field ",(0,s.jsx)(i.code,{children:"cf154.string"}),' should be on or after "2023-01-01".']}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"user-fields",children:"User Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'Use the "user_[id]" for a specific user.'}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:'["cf155.string", "=", "user_2"]'})," specifies that the value of custom field ",(0,s.jsx)(i.code,{children:"cf155.user"}),' should be equal to user id "user_2". For querying the result based on the active user, use ',(0,s.jsx)(i.code,{children:'["cf155.string", "=", "[user]"]'}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"module-item-type",children:"Module Item Type"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'["moduleitemtype_id", "=", "10"]'})," refers to items in a specific module item type."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"item-id",children:"Item ID"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'["id", "!=", "100"]'}),' specifies that the item id should not be equal to "100".']}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"module-id",children:"Module ID"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'["module_id", "IN", ["module_6", "module_7"]]'})," specifies that the items should belong to one of the specified modules."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"empty-query",children:"Empty Query"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"A query can be empty if all items from the module should be included, though this is not illustrated in this example."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"how-to-construct-a-query",children:"How-To construct a query"}),"\n",(0,s.jsx)(i.h3,{id:"constructing-a-query",children:"Constructing a Query"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Identify the key you want to query against."}),"\n",(0,s.jsx)(i.li,{children:"Select the appropriate operator for comparison."}),"\n",(0,s.jsx)(i.li,{children:"Specify the value for comparison."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"json-example",children:"JSON Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "query": [\n    ["cf151.string", "=", "abc"],\n    ["moduleitemtype_id", "=", "10"]\n  ]\n}\n'})}),"\n",(0,s.jsx)(i.h4,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(i.p,{children:["This query returns items where the value of custom field ",(0,s.jsx)(i.code,{children:"cf151.string"}),' is exactly "abc", and the module item type id is exactly "10".']})]})}function u(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>r});var s=n(7294);const l={},d=s.createContext(l);function r(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);