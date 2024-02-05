"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[9933],{3780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(5893),s=t(1151);const a={},r="Microsoft 365 Sync",o={id:"apps/integrations/integrations-365-sync",title:"Microsoft 365 Sync",description:"Overview",source:"@site/docs/apps/integrations/integrations-365-sync.md",sourceDirName:"apps/integrations",slug:"/apps/integrations/integrations-365-sync",permalink:"/docs/apps/integrations/integrations-365-sync",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/apps/integrations/integrations-365-sync.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Details Widget",permalink:"/docs/apps/widgets/apps-details"},next:{title:"JSON in 1Relation",permalink:"/docs/JSON/json-intro-to-json"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"User Setup",id:"user-setup",level:2},{value:"Step 1: Access Account Settings",id:"step-1-access-account-settings",level:3},{value:"Step 2: Connect to Microsoft",id:"step-2-connect-to-microsoft",level:3},{value:"Step 3: Approve the Connection",id:"step-3-approve-the-connection",level:3},{value:"Integration with 1Relation Apps",id:"integration-with-1relation-apps",level:2},{value:"1. Data Collection",id:"1-data-collection",level:2},{value:"2. Data Processing",id:"2-data-processing",level:2},{value:"3. Data Storage",id:"3-data-storage",level:2},{value:"4. Data Distribution and Security",id:"4-data-distribution-and-security",level:2},{value:"5. Compliance and Data Protection",id:"5-compliance-and-data-protection",level:2},{value:"6. Links and Resources",id:"6-links-and-resources",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"microsoft-365-sync",children:"Microsoft 365 Sync"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The Microsoft 365 Sync App enables bidirectional synchronization of events between Microsoft Calendar and 1Relation."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,i.jsxs)(n.p,{children:["Before individual users can synchronize their calendars, the Microsoft 365 Sync App must be installed by an administrator or user with necessary permissions. Refer to the ",(0,i.jsx)(n.a,{href:"/docs/apps/apps-install-apps",children:"installation guide"})," for detailed instructions."]}),"\n",(0,i.jsx)(n.h2,{id:"user-setup",children:"User Setup"}),"\n",(0,i.jsx)(n.p,{children:"Follow the steps below to synchronize your Microsoft Calendar with 1Relation:"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-access-account-settings",children:"Step 1: Access Account Settings"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Account Settings"})," through the top navigation bar."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(8512).Z+"",width:"538",height:"364"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(291).Z+"",width:"2542",height:"1271"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-connect-to-microsoft",children:"Step 2: Connect to Microsoft"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"General"})," tab, click on ",(0,i.jsx)(n.strong,{children:"Connect to Microsoft"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(2906).Z+"",width:"2542",height:"1271"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-approve-the-connection",children:"Step 3: Approve the Connection"}),"\n",(0,i.jsx)(n.p,{children:"Log into your Microsoft account and approve the connection to complete the integration."}),"\n",(0,i.jsx)(n.h2,{id:"integration-with-1relation-apps",children:"Integration with 1Relation Apps"}),"\n",(0,i.jsxs)(n.p,{children:["Once the sync is set up, events can be displayed and managed in compatible 1Relation apps, such as the ",(0,i.jsx)(n.a,{href:"/docs/apps/widgets/apps-calendar",children:"calendar app"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"security-and-data-handling-document",children:"Security and Data Handling Document"}),"\n",(0,i.jsx)(n.h2,{id:"1-data-collection",children:"1. Data Collection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users connect to Office 365 via Microsoft Login, where 1Relation is a verified publisher."}),"\n",(0,i.jsx)(n.li,{children:"User permissions are clearly outlined by Microsoft, without the option for custom selection."}),"\n",(0,i.jsx)(n.li,{children:"Organization approval is required before user acceptance."}),"\n",(0,i.jsx)(n.li,{children:"Upon acceptance, Microsoft generates an authorized access key for data retrieval."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(3187).Z+"",width:"442",height:"518"})}),"\n",(0,i.jsx)(n.h2,{id:"2-data-processing",children:"2. Data Processing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Calendar events from O365 are matched, updated, or newly created in 1Relation."}),"\n",(0,i.jsx)(n.li,{children:"Data is encrypted before storage and never stored in decrypted form."}),"\n",(0,i.jsx)(n.li,{children:"Unique IDs from Microsoft ensure the identification and update of synchronized data."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-data-storage",children:"3. Data Storage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Synced data is stored in a Denmark-based database with restricted access."}),"\n",(0,i.jsx)(n.li,{children:"Compliance with GDPR and other data protection regulations is ensured."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-data-distribution-and-security",children:"4. Data Distribution and Security"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Encryption in Transit"}),": Data from O365 is encrypted using SSL/TLS protocols."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Encryption"}),": AES (Advanced Encryption Standard) is used for database storage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Control"}),": Strictly controlled and limited to authorized users."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Regular Security Audits"}),": Conducted to identify and mitigate potential threats."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-compliance-and-data-protection",children:"5. Compliance and Data Protection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Adherence to GDPR and other data protection laws."}),"\n",(0,i.jsx)(n.li,{children:"Involvement of CISO and IT security in formalizing security measures and protocols."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"6-links-and-resources",children:"6. Links and Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/graph/",children:"Microsoft Graph API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/graph/permissions-reference#delegated-permissions-11",children:"Calendar Data Limitation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/graph/auth-limit-mailbox-access",children:"Application Restriction"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},291:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-1-fa2f4d99c4c23fc51bc4df8d274565ba.png"},2906:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-2-cb9331ac2088e55906fc829320f13200.png"},8512:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-9a36d37b0bc5ea21f7bd93c944c9e1ca.png"},3187:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/microsoft 365-daeac09a418a4b31dbc5beb740dda155.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);