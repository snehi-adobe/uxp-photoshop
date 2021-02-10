(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"1mNa":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),s=(a("q1tI"),a("7ljp")),c=a("ndZU"),i=(a("qKvR"),{}),r={_frontmatter:i},l=c.a;function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.mdx)(l,Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"batchplay"},"batchPlay"),Object(s.mdx)("p",null,"Photoshop is complex software, with many internal classes and methods. Not all of these are as yet exposed via UXP. New interfaces are in development and will be shipped along with each release of Photoshop. In the meantime, if there is something your plugin needs to do that is not exposed in the current DOM, you may be able to use batchPlay."),Object(s.mdx)("p",null,"BatchPlay is for accessing Photoshop functionality that has not yet been exposed via APIs. BatchPlay is a way to send multiple actions into the Photoshop event queue and return their results."),Object(s.mdx)("p",null,"ExtendScript has executeAction; this is analagous to UXP's batchPlay. However, whereas executeAction could only play one descriptor at a time, batchPlay accepts an array of action descriptors. If you have multiple Photoshop operations that need to execute in series, using an array of action descriptors in a single batchPlay call is probably what you want."),Object(s.mdx)("p",null,"Unlike ExtendScript, where there were classes to construction action descriptors, references, and values, in batchPlay these are all built from JSON objects."),Object(s.mdx)("p",null,"The ",Object(s.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/media/advanced/"}),"batchPlay Reference")," has examples of constructing action descriptors using JSON, as well as using batchPlay in general."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-ps-basics-batchplay-intro-index-md-1e45b91ed58dc907963e.js.map