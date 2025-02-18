"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[8345],{8140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(5893),i=n(1151);const d={},r="Outcome",o={id:"sites/actionalbuttons/components/outcome",title:"Outcome",description:"Introduction",source:"@site/docs/sites/actionalbuttons/components/outcome.md",sourceDirName:"sites/actionalbuttons/components",slug:"/sites/actionalbuttons/components/outcome",permalink:"/docs/sites/actionalbuttons/components/outcome",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/sites/actionalbuttons/components/outcome.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Actions",permalink:"/docs/sites/actionalbuttons/components/actions"},next:{title:"Marketplace",permalink:"/docs/sites/marketplace"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Structure of <code>outcome</code>",id:"structure-of-outcome",level:2},{value:"Outcome Types and Configurations",id:"outcome-types-and-configurations",level:3},{value:"Toast",id:"toast",level:4},{value:"Redirect",id:"redirect",level:4},{value:"Tab",id:"tab",level:4},{value:"Widget Update",id:"widget-update",level:3},{value:"JSON Examples",id:"json-examples",level:2},{value:"Example 1: Toast Outcome",id:"example-1-toast-outcome",level:4},{value:"Example 2: Redirect Outcome (Internal URI)",id:"example-2-redirect-outcome-internal-uri",level:4},{value:"Example 3: Redirect Outcome (External URL)",id:"example-3-redirect-outcome-external-url",level:4},{value:"Example 4: Tab Outcome",id:"example-4-tab-outcome",level:4},{value:"Example 5: Widget Update",id:"example-5-widget-update",level:4}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"outcome",children:"Outcome"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"outcome"})," component in Actional buttons within FlowAgent plays a pivotal role in defining the feedback or response after an action is executed. It determines how the result of the action is communicated to the user, thereby enhancing the interactive experience through clear and immediate feedback."]}),"\n",(0,s.jsxs)(t.h2,{id:"structure-of-outcome",children:["Structure of ",(0,s.jsx)(t.code,{children:"outcome"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"outcome"})," object outlines the type of response presented to the user after an action is performed."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Options"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"toast"}),", ",(0,s.jsx)(t.code,{children:"redirect"}),", ",(0,s.jsx)(t.code,{children:"none"}),", ",(0,s.jsx)(t.code,{children:"tab"})]}),(0,s.jsx)(t.td,{children:"Specifies the type of outcome or feedback to present."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The title of the toast, if a toast is used for the outcome."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"message"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The content of the message or feedback to the user."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"uri"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The URI for redirection if specified as the outcome."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tabKeyName"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["The key name of the tab to be opened, if ",(0,s.jsx)(t.code,{children:"tab"})," is specified as the outcome."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"widgetsUpdate"})}),(0,s.jsx)(t.td,{children:"array"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Specifies which widgets should be updated post-action."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"widgetsAllowSoftUpdate"})}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"})," (defualt) or ",(0,s.jsx)(t.code,{children:"false"})]}),(0,s.jsx)(t.td,{children:"Decides if widget can be updated if data changes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"dismissActionToast"})}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," (default)"]}),(0,s.jsx)(t.td,{children:"Decides if toast from actions should be hidden."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"outcome-types-and-configurations",children:"Outcome Types and Configurations"}),"\n",(0,s.jsx)(t.h4,{id:"toast",children:"Toast"}),"\n",(0,s.jsx)(t.p,{children:"Used to display a toast message as an outcome."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The heading or title of the toast message."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"message"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The detailed message or content within the toast."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"redirect",children:"Redirect"}),"\n",(0,s.jsx)(t.p,{children:"Used to redirect the user to another page or URI."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"uri"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The target URI for redirection after the action."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"tab",children:"Tab"}),"\n",(0,s.jsx)(t.p,{children:"Used to open a specific tab in the system as an outcome."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tabKeyName"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The key name of the tab to be opened after the action."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"widget-update",children:"Widget Update"}),"\n",(0,s.jsx)(t.p,{children:"Actional Button should control which widgets to be updated on the page. If none is provided, it defaults to updating all widgets on a given page."}),"\n",(0,s.jsxs)(t.p,{children:["Following options are available for the ",(0,s.jsx)(t.code,{children:"widgetsUpdate"})," property:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"array"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Updates keynames found in the array, if they exist on the page."})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Note: Per default, a table row actional button will always update - as it's almost always expected that a button placed on a row will update something related to that row."}),"\n",(0,s.jsx)(t.h2,{id:"json-examples",children:"JSON Examples"}),"\n",(0,s.jsx)(t.h4,{id:"example-1-toast-outcome",children:"Example 1: Toast Outcome"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "outcome": {\n    "type": "toast",\n    "title": "Action Completed",\n    "message": "The task status has been successfully updated."\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In this example, a toast message is presented as feedback, offering clear and immediate communication about the action's result."}),"\n",(0,s.jsx)(t.h4,{id:"example-2-redirect-outcome-internal-uri",children:"Example 2: Redirect Outcome (Internal URI)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "outcome": {\n    "type": "redirect",\n    "uri": "/dashboard"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This example demonstrates redirection as the outcome, guiding the user to the dashboard after the action is executed, ensuring a seamless transition in the user's workflow."}),"\n",(0,s.jsx)(t.h4,{id:"example-3-redirect-outcome-external-url",children:"Example 3: Redirect Outcome (External URL)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "outcome": {\n    "type": "redirect",\n    "uri": "www.google.com"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, the redirection outcome is used to open an external URL (",(0,s.jsx)(t.code,{children:"www.google.com"}),"), allowing the user to navigate to an external resource after the action is completed."]}),"\n",(0,s.jsx)(t.h4,{id:"example-4-tab-outcome",children:"Example 4: Tab Outcome"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "outcome": {\n    "type": "tab",\n    "tabKeyName": "projekttab_sagsinfo"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, pressing the button opens a specific tab (",(0,s.jsx)(t.code,{children:"projekttab_sagsinfo"}),") in the system, providing a direct and efficient way for users to access relevant information."]}),"\n",(0,s.jsx)(t.h4,{id:"example-5-widget-update",children:"Example 5: Widget Update"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "outcome": {\n    "widgetsUpdate": [\n      "opgaverwidg_info",\n      "opgaverwidg_tidsregistreringer"\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this example the ",(0,s.jsx)(t.code,{children:"widgetsUpdate"})," property is set to an array specifying which widgets on the page should be updated."]}),"\n",(0,s.jsxs)(t.p,{children:["By configuring the ",(0,s.jsx)(t.code,{children:"outcome"})," component effectively, you can ensure that Actional buttons provide meaningful feedback and guide users efficiently through their tasks within the system. The ",(0,s.jsx)(t.code,{children:"outcome"})," component's flexibility in design allows for a responsive and user-friendly application, enhancing the overall user experience."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);