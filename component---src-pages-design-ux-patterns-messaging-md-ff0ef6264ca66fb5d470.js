(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2iJE":function(e,t,n){e.exports=n.p+"static/Plugin-output-70d612f69ceedf205995fcd6b321ca81.png"},"5jlG":function(e,t,n){e.exports=n.p+"static/Messaging-1-63f9958680b56bccd382d221a18ade72.png"},"F+50":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("wx14"),r=n("zLVn"),s=(n("q1tI"),n("7ljp")),o=n("LHWr"),c=(n("qKvR"),{}),i={_frontmatter:c},p=o.a;function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.mdx)(p,Object(a.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"messaging"},"Messaging"),Object(s.mdx)("p",null,"These are the guidelines and best practices on when and how to provide users with feedback as they interact with your plugin"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Alerts"),Object(s.mdx)("li",{parentName:"ul"},"Success"),Object(s.mdx)("li",{parentName:"ul"},"Output"),Object(s.mdx)("li",{parentName:"ul"},"Permission dialogs"),Object(s.mdx)("li",{parentName:"ul"},"Loaders and Progress Indicators"),Object(s.mdx)("li",{parentName:"ul"},"Examples")),Object(s.mdx)("p",null,"Provide users with feedback as they interact with your plugin, this can be alert and success messaging, permission dialogs or loaders and progress bars to let them know something is running in the background. Below is a guide to help determine where to render plugin messages."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Plugin Messaging flow chart",src:n("5jlG")})),Object(s.mdx)("h2",{id:"alerts"},"Alerts"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Use case"),Object(s.mdx)("br",{parentName:"p"}),"\n","Use alert messaging whenever the plugin cannot perform the intended task, dialogs are persistent until dismissed"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Aler dialog requirements",src:n("lWp+")})),Object(s.mdx)("h4",{id:"ux-requirements"},"UX Requirements"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Header"),Object(s.mdx)("br",{parentName:"p"}),"\n","Have a clear header that describes the error"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Message"),Object(s.mdx)("br",{parentName:"p"}),"\n","Explain what error was encountered and give a clear actionable solution. Also, avoid blaming the user or the application."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Dialog buttons"),Object(s.mdx)("br",{parentName:"p"}),"\n","Include at least one modal dismissal button to allow the user to dismiss/close the modal"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Alert Dialog Best Practices",src:n("p8ML")})),Object(s.mdx)("h4",{id:"best-practices"},"Best practices"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Warning icon"),Object(s.mdx)("br",{parentName:"p"}),"\n","To help communicate critical information for an error you can include a warning icon next to the header"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Help"),Object(s.mdx)("br",{parentName:"p"}),"\n","If a plugin has a help page, consider adding it to the error modal dialog."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Visual/tutorials"),Object(s.mdx)("br",{parentName:"p"}),"\n","Provide image/GIF example as part of the dialog, to help users understand the actionable solution"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Messaging"),Object(s.mdx)("br",{parentName:"p"}),"\n","In the alert messages use language that is easy to understand for the user."),Object(s.mdx)("h2",{id:"success"},"Success"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Use case"),Object(s.mdx)("br",{parentName:"p"}),"\n","Use success messaging whenever the plugin successfully completes a task and has no visual output on the canvas."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Alert Success Dialog example",src:n("wARh")})),Object(s.mdx)("h4",{id:"ux-requirements-1"},"UX Requirements"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Header"),Object(s.mdx)("br",{parentName:"p"}),"\n","Have a clear header for the dialog."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Message"),Object(s.mdx)("br",{parentName:"p"}),"\n","Explain what the plugin successfully completed, if it is not visually apparent to the user."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Dialog buttons"),Object(s.mdx)("br",{parentName:"p"}),"\n","Include at least one modal dismissal button to allow the user to dismiss/close the modal."),Object(s.mdx)("h2",{id:"output"},"Output"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Use case"),Object(s.mdx)("br",{parentName:"p"}),"\n","If a plugin generates output that the user needs to complete a workflow, then the plugin needs to provide that information to the user through an interface."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Plugin output example",src:n("2iJE")})),Object(s.mdx)("h4",{id:"ux-requirements-2"},"UX Requirements"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Plugin output"),Object(s.mdx)("br",{parentName:"p"}),"\n","In use cases like these, the plugin output can be shown in the interface, copied onto the clipboard, populated on the document or generate a file."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Example:"),Object(s.mdx)("br",{parentName:"p"}),"\n","Copied onto the clipboard - the plugin can add copy to the clipboard and provides the user with instructions through the interface."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Don’t"),Object(s.mdx)("br",{parentName:"p"}),"\n","Require users to go into the developer console to complete an action."),Object(s.mdx)("h2",{id:"permission-dialogs"},"Permission dialogs"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Use case"),Object(s.mdx)("br",{parentName:"p"}),"\n","Use permission dialogs when being destructive or making modifications."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Permission dialog example",src:n("W4g9")})),Object(s.mdx)("h4",{id:"ux-requirements-3"},"UX Requirements"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Header"),Object(s.mdx)("br",{parentName:"p"}),"\n","Have a clear header for the dialog."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Message"),Object(s.mdx)("br",{parentName:"p"}),"\n","Explain the destructive action or modification and ask for the user’s permission"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Dialog buttons"),Object(s.mdx)("br",{parentName:"p"}),"\n","Include a modal dismissal button to allow the user to cancel/close the modal and a negative button (red) to highlight that action."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Key Commands"),Object(s.mdx)("br",{parentName:"p"}),"\n","Esc key or Enter key Dismisses the dialog when the “Cancel” button is in focus"),Object(s.mdx)("h2",{id:"loaders-and-progress-indicators"},"Loaders and Progress Indicators"),Object(s.mdx)("p",null,"Let the user know when something is happening in the background in the plugin interface. "),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Determinate example",src:n("deOL")})),Object(s.mdx)("h4",{id:"best-practices-1"},"Best practices"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Progress bar"),Object(s.mdx)("br",{parentName:"p"}),"\n","Progress bars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress."),Object(s.mdx)("p",null,Object(s.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://spectrum.adobe.com/page/progress-bar/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Spectrum Progress bar guidelines")),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Progress circle"),Object(s.mdx)("br",{parentName:"p"}),"\n","Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress."),Object(s.mdx)("p",null,Object(s.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://spectrum.adobe.com/page/progress-bar/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Spectrum Progress circle guidelines")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Operation failed to complete",src:n("y1i2")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Operation failed to complete"),Object(s.mdx)("br",{parentName:"p"}),"\n","Error dialog - when a plugin can’t complete an operation, render an error dialog to let the user know the operation failed and why it failed."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Network connectivity issue",src:n("dcxA")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Network connectivity issue"),Object(s.mdx)("br",{parentName:"p"}),"\n","Information dialog - if the plugin is unable to connect to the internet to complete an action, then use an information modal dialog to communicate that to the user."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Message example",src:n("G/JO")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Unable to share"),Object(s.mdx)("br",{parentName:"p"}),"\n","“An error occurred while sharing your project. Please verify the email. address and try again”."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Network connectivity"),Object(s.mdx)("br",{parentName:"p"}),"\n","“Please connect to WiFi to sync your tasks to your product management tool”."),Object(s.mdx)("h4",{id:"panel-ui-messaging"},"Panel UI messaging"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Panel Messaging example",src:n("pJ2/")})))}m.isMDXComponent=!0},"G/JO":function(e,t,n){e.exports=n.p+"static/Messaging-example-72ecc3d5371f5e3f379216817d650c67.png"},W4g9:function(e,t,n){e.exports=n.p+"static/Permission-dialog-example-07b7d018cc085d098aaeb5fad1dc8d71.png"},dcxA:function(e,t,n){e.exports=n.p+"static/Alert-Information-example-2-8246932a2e2718c7dba4178ea08a92dd.png"},deOL:function(e,t,n){e.exports=n.p+"static/progress-bar-example-cb2230b02eaac062817050a01daa037a.png"},"lWp+":function(e,t,n){e.exports=n.p+"static/Alert-Requirements-09f217d388e1be5ba93320d670efe41a.png"},p8ML:function(e,t,n){e.exports=n.p+"static/Alert-Recommendations-9fd378fbbae406be9024512c75f7f145.png"},"pJ2/":function(e,t,n){e.exports=n.p+"static/panel-messaging-example-707dd0846fcc82d1a646838c8dcab03c.png"},wARh:function(e,t,n){e.exports=n.p+"static/success-Requirements-db95d2e3d2ebea4badf662a7657ade6c.png"},y1i2:function(e,t,n){e.exports=n.p+"static/Error-alert-example-4516eee133760022f585cdec8477f622.png"}}]);
//# sourceMappingURL=component---src-pages-design-ux-patterns-messaging-md-ff0ef6264ca66fb5d470.js.map