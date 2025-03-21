"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[5613],{4775:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var n=t(5893),s=t(1151);const a={},l="Call webhook",r={id:"JSON/actions-webhook",title:"Call webhook",description:"In some cases we need to show a toast message to the user, telling them about what happened or what to do.",source:"@site/docs/JSON/actions-webhook.md",sourceDirName:"JSON",slug:"/JSON/actions-webhook",permalink:"/docs/JSON/actions-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/JSON/actions-webhook.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Show relevant forms",permalink:"/docs/JSON/actions-show-relevant-forms"},next:{title:"JSON Relations",permalink:"/docs/JSON/json-relations"}},h={},i=[{value:"Webhook response",id:"webhook-response",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Call a webhook",id:"example-1-call-a-webhook",level:3}];function d(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"call-webhook",children:"Call webhook"}),"\n",(0,n.jsx)(o.p,{children:"In some cases we need to show a toast message to the user, telling them about what happened or what to do."}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Property"}),(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Default Value"}),(0,n.jsx)(o.th,{children:"Options"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"url"})}),(0,n.jsx)(o.td,{children:"string"}),(0,n.jsx)(o.td,{children:"(empty)"}),(0,n.jsx)(o.td,{children:"N/A"}),(0,n.jsx)(o.td,{children:"A url that supports webhooks from our servers. Has to be a valid HTTPS url."})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"webhook-response",children:"Webhook response"}),"\n",(0,n.jsx)(o.p,{children:"The webhook can respond with a message that will be displayed as a toast if webhook responds as JSON looking like followingen.\nIf no respond is given, they user will be notified that the webhook responded with no message."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "code": 200,\n  "message": "Webhook triggered"\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(o.h3,{id:"example-1-call-a-webhook",children:"Example 1: Call a webhook"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "url": "https://flowagent.nu/webhook"\n}\n'})})]})}function c(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>l});var n=t(7294);const s={},a=n.createContext(s);function l(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);