(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DVng:function(e,t,a){e.exports={pagination:"pagination-module--pagination--16LMZ"}},PaYT:function(e,t,a){e.exports={header__image:"post-module--header__image--2HnrE",header__info:"post-module--header__info--XHlMY",header__info__title:"post-module--header__info__title--2Uzfp",header__info__date:"post-module--header__info__date--12VyP",header__info__tags:"post-module--header__info__tags--2a1m1",content:"post-module--content--2r9Tu",icon:"post-module--icon--2Jt87"}},"RjI+":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("Wbzz"),r=a("q1tI"),i=a.n(r),o=a("DVng"),l=a.n(o),c=function(e){var t=e.prevText,a=e.prevLink,r=e.nextText,o=e.nextLink,c=e.currentText;return i.a.createElement("nav",{className:l.a.pagination},i.a.createElement("div",{className:l.a.pagination__prev},a&&i.a.createElement(n.Link,{to:a,rel:"prev"},t)),i.a.createElement("div",{className:l.a.pagination__current},c),i.a.createElement("div",{className:l.a.pagination__next},o&&i.a.createElement(n.Link,{to:o,rel:"next"},r)))};c.defaultProps={prevText:"← PREV",nextText:"NEXT →",currentText:""};var m=c},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},yZlL:function(e,t,a){"use strict";a.r(t);var n=a("I/Ru"),r=a("8b0t"),i=a("RjI+"),o=a("ma3e"),l=a("Wbzz"),c=a("q1tI"),m=a.n(c),s=a("PaYT"),d=a.n(s),_=a("LvDl"),u=function(e){var t=e.post;return m.a.createElement("article",null,m.a.createElement("header",{className:d.a.header},t.frontmatter.image&&m.a.createElement("div",{className:d.a.header__image,style:{backgroundImage:"url("+t.frontmatter.image+")"}}),m.a.createElement("div",{className:d.a.header__info},m.a.createElement("h1",{className:d.a.header__info__title},t.frontmatter.title),m.a.createElement("span",{className:d.a.header__info__date},m.a.createElement(o.d,{className:d.a.icon}),t.fields.date),t.frontmatter.tags&&m.a.createElement("span",{className:d.a.header__info__tags},m.a.createElement(o.f,{className:d.a.icon}),m.a.createElement("ol",null,t.frontmatter.tags.map((function(e){return m.a.createElement("li",{key:e},m.a.createElement(l.Link,{to:"/tags/"+_.kebabCase(e)+"/"},e))})))))),m.a.createElement("section",{className:d.a.content,dangerouslySetInnerHTML:{__html:t.html}}))},f=a("sZJX");t.default=function(e){var t=e.data,a=e.pageContext,o=t.markdownRemark,l=a.previous,c=a.next;return m.a.createElement(n.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt,socialImage:o.frontmatter.image},m.a.createElement(f.a,{toc:o.tableOfContents}),m.a.createElement(r.a,null,m.a.createElement(u,{post:o}),m.a.createElement(i.a,{prevLink:l&&l.fields.slug,prevText:l&&"← "+l.frontmatter.title,nextLink:c&&c.fields.slug,nextText:c&&c.frontmatter.title+" →"})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2540f8033649d71d35b2.js.map