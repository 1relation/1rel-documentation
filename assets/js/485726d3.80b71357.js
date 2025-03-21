"use strict";(self.webpackChunk_1_relation_documentation=self.webpackChunk_1_relation_documentation||[]).push([[1964],{5723:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=n(5893),r=n(1151);const i={},o="Groups",d={id:"sites/groups",title:"Groups",description:"In the Flow platform groups controls what permissions a user has (Create, Update, Read, Delete). Indirectly are they also used to decide what tabs a user has (this is setup on the tab settings for items and dashboard.",source:"@site/docs/sites/groups.md",sourceDirName:"sites",slug:"/sites/groups",permalink:"/docs/sites/groups",draft:!1,unlisted:!1,editUrl:"https://github.com/1relation/1rel-documentation/tree/main/docs/sites/groups.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Users",permalink:"/docs/sites/users"},next:{title:"Organisations",permalink:"/docs/sites/organisations"}},a={},h=[{value:"Accessing the list of groups",id:"accessing-the-list-of-groups",level:2},{value:"Creating and managing groups",id:"creating-and-managing-groups",level:2},{value:"Adding a New Group",id:"adding-a-new-group",level:3},{value:"Configuring Group Permissions",id:"configuring-group-permissions",level:3},{value:"Duplicating a Group",id:"duplicating-a-group",level:3},{value:"Editing and Deleting Groups",id:"editing-and-deleting-groups",level:3},{value:"How permissions works when a user has multiple groups",id:"how-permissions-works-when-a-user-has-multiple-groups",level:2},{value:"Example 1: User has two groups, where has read access, but the other has read, create and update",id:"example-1-user-has-two-groups-where-has-read-access-but-the-other-has-read-create-and-update",level:3},{value:"Example 2: User has two groups, where one denies reading access to Customer items",id:"example-2-user-has-two-groups-where-one-denies-reading-access-to-customer-items",level:3}];function l(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"groups",children:"Groups"}),"\n",(0,t.jsxs)(s.p,{children:["In the Flow platform groups controls what permissions a user has (Create, Update, Read, Delete). Indirectly are they also used to decide what tabs a user has (this is setup on the tab settings for ",(0,t.jsx)(s.a,{href:"/docs/modules/tabs",children:"items"})," and dashboard."]}),"\n",(0,t.jsx)(s.p,{children:"Groups are also help to understand what roles a user has in a company."}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Create groups as roles in your company. That way it is easy for you to assign groups to users and you can easily verify that a given role only have exactly the needed permissions. Also if a user has multiple roles, you can simple assign them multiple groups."})}),"\n",(0,t.jsx)(s.h2,{id:"accessing-the-list-of-groups",children:"Accessing the list of groups"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to the ",(0,t.jsx)(s.strong,{children:'"Groups"'})," tab within the Site Settings."]}),"\n",(0,t.jsx)(s.li,{children:"Here you'll see a list of all existing groups."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"creating-and-managing-groups",children:"Creating and managing groups"}),"\n",(0,t.jsx)(s.h3,{id:"adding-a-new-group",children:"Adding a New Group"}),"\n",(0,t.jsx)(s.p,{children:"To create a new group:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Click the ",(0,t.jsx)(s.strong,{children:'"Create"'})," button."]}),"\n",(0,t.jsx)(s.li,{children:"Fill in the details for the new group, including the group name and description."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"configuring-group-permissions",children:"Configuring Group Permissions"}),"\n",(0,t.jsx)(s.p,{children:"Once you have your group created, you can define its permissions:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Choose a group from the list to edit."}),"\n",(0,t.jsxs)(s.li,{children:["Navigate to the ",(0,t.jsx)(s.strong,{children:'"Permissions"'})," section.\n'3. Set the permissions for each module and feature as required."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Permissions can be granular, allowing you to specify read, create, update, and delete capabilities for each aspect of the system."}),"\n",(0,t.jsx)(s.h3,{id:"duplicating-a-group",children:"Duplicating a Group"}),"\n",(0,t.jsx)(s.p,{children:"If you need to create a group with similar permissions to an existing one:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Select the group you wish to duplicate."}),"\n",(0,t.jsxs)(s.li,{children:["Click on the ",(0,t.jsx)(s.strong,{children:'"Duplicate"'})," option."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This function will create a new group with the same permissions as the original, which you can then modify as needed."}),"\n",(0,t.jsx)(s.h3,{id:"editing-and-deleting-groups",children:"Editing and Deleting Groups"}),"\n",(0,t.jsx)(s.p,{children:"To maintain your groups:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Edit"}),": Click the ",(0,t.jsx)(s.strong,{children:"pencil icon"})," next to the group to adjust its name, description, or permissions."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Delete"}),": Use the ",(0,t.jsx)(s.strong,{children:"trash icon"})," to remove a group entirely. Be cautious with this action, as it cannot be undone."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"When editing or deleting groups, consider the impact on users and the access they have. Ensure that changes do not inadvertently restrict necessary access to system features or data."})}),"\n",(0,t.jsx)(s.h2,{id:"how-permissions-works-when-a-user-has-multiple-groups",children:"How permissions works when a user has multiple groups"}),"\n",(0,t.jsx)(s.p,{children:'If you combine multiple sets of groups to a user, the system merges the permissions together creating a unique set of permissions that the user has. It works by getting the highest level of access between the groups with the simple exception of "deny", as this rules the highest.'}),"\n",(0,t.jsx)(s.p,{children:'Before the example, we need to understand the possible "flags" we can give a user when talking about permissions:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Checkbox permissions"}),": Normally when setting up permissions there is a checkbox. You can either check it or not. Not checked means the user does not have access in regards to this group. Checked is YES and unchecked is NO."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Dropdown permissions"}),": On some cases we can select different options like ",(0,t.jsx)(s.strong,{children:"Site"}),", ",(0,t.jsx)(s.strong,{children:"Group"}),", ",(0,t.jsx)(s.strong,{children:"User"})," or ",(0,t.jsx)(s.strong,{children:"Deny"}),". Site are the highest form of access, and User are the lowest. Deny is the highest form of denying and is always respected."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Lets look at some examples on how groups are merged into a unique set of permissions for a user."}),"\n",(0,t.jsx)(s.h3,{id:"example-1-user-has-two-groups-where-has-read-access-but-the-other-has-read-create-and-update",children:"Example 1: User has two groups, where has read access, but the other has read, create and update"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Group"}),(0,t.jsx)(s.th,{children:"Permission"}),(0,t.jsx)(s.th,{children:"Read"}),(0,t.jsx)(s.th,{children:"Create"}),(0,t.jsx)(s.th,{children:"Update"}),(0,t.jsx)(s.th,{children:"Delete"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Group 1"}),(0,t.jsx)(s.td,{children:"Customer Module"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"NO"}),(0,t.jsx)(s.td,{children:"NO"}),(0,t.jsx)(s.td,{children:"NO"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Group 2"}),(0,t.jsx)(s.td,{children:"Customer Module"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"NO"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Result"})}),(0,t.jsx)(s.td,{children:"Customer Module"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"NO"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:'As seen in above table, the highest access is given to the user. "No" (unchecked) are not respected higher than yes, leaving the users permission group to be: Read, Create and Update on Customer Module.'}),"\n",(0,t.jsx)(s.h3,{id:"example-2-user-has-two-groups-where-one-denies-reading-access-to-customer-items",children:"Example 2: User has two groups, where one denies reading access to Customer items"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Group"}),(0,t.jsx)(s.th,{children:"Permission"}),(0,t.jsx)(s.th,{children:"Read"}),(0,t.jsx)(s.th,{children:"Create"}),(0,t.jsx)(s.th,{children:"Update"}),(0,t.jsx)(s.th,{children:"Delete"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Group 1"}),(0,t.jsx)(s.td,{children:"Customer Item"}),(0,t.jsx)(s.td,{children:"Site"}),(0,t.jsx)(s.td,{children:"NO"}),(0,t.jsx)(s.td,{children:"NO"}),(0,t.jsx)(s.td,{children:"NO"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Group 2"}),(0,t.jsx)(s.td,{children:"Customer Item"}),(0,t.jsx)(s.td,{children:"Deny"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"NO"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Result"})}),(0,t.jsx)(s.td,{children:"Customer Item"}),(0,t.jsx)(s.td,{children:"Deny"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"YES"}),(0,t.jsx)(s.td,{children:"NO"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"As seen in above table, we user does not have reading access to the item as Deny are respected higher than anything else."})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>o});var t=n(7294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);