(this.webpackJsonp16tut=this.webpackJsonp16tut||[]).push([[0],{38:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(29),r=c.n(a),o=(c(38),c(10)),i=c(33),l=c(11),j=c.n(l),d=c(15),u=c(9),b=c(0),h=function(e){var t=e.title;return Object(b.jsx)("header",{className:"Header",children:Object(b.jsx)("h1",{children:t})})},p=c(3),O=function(e){var t=e.search,c=e.setSearch,s=e.Logout;return Object(b.jsxs)("nav",{className:"Nav",children:[Object(b.jsxs)("form",{className:"searchForm",onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("label",{htmlFor:"search",children:"Search Posts"}),Object(b.jsx)("input",{id:"search",type:"text",placeholder:"Search Posts",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(p.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(p.b,{to:"/post",children:"Post"})}),Object(b.jsx)("li",{children:Object(b.jsx)(p.b,{to:"/about",children:"About"})}),Object(b.jsx)("li",{className:"logout",onClick:s,children:"Logout"})]})]})},m=function(){var e=new Date;return Object(b.jsx)("footer",{className:"Footer",children:Object(b.jsxs)("p",{children:["Copyright \xa9 ",e.getFullYear()]})})},x=function(e){var t=e.post;return Object(b.jsx)("article",{className:"post",children:Object(b.jsxs)(p.b,{style:{color:"white"},to:"/post/".concat(t.id),children:[Object(b.jsx)("h2",{className:"postTitle",children:t.title}),Object(b.jsx)("p",{className:"postDate",children:t.datetime}),Object(b.jsx)("p",{className:"postBody",children:t.body.length<=55?t.body:"".concat(t.body.slice(0,150),"...")})]})})},f=function(e){var t=e.posts;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(x,{post:e},e.id)}))})},g=function(e){var t=e.posts;return Object(b.jsx)("main",{className:"Home",children:t.length?Object(b.jsx)(f,{posts:t}):Object(b.jsx)("p",{style:{marginTop:"2rem"},children:"No posts to display."})})},v=function(e){var t=e.handleSubmit,c=e.postTitle,s=e.setPostTitle,n=e.postBody,a=e.setPostBody;return Object(b.jsxs)("main",{className:"NewPost",children:[Object(b.jsx)("h2",{children:"New Post"}),Object(b.jsxs)("form",{className:"newPostForm",onSubmit:t,children:[Object(b.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(b.jsx)("input",{id:"postTitle",type:"text",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"postBody",children:"Post:"}),Object(b.jsx)("textarea",{id:"postBody",required:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})]})},y=c(2),N=function(e){var t=e.posts,c=e.handleDelete,s=Object(y.g)().id,n=t.find((function(e){return e.id.toString()===s}));return Object(b.jsxs)("main",{className:"PostPage",children:[Object(b.jsxs)("article",{className:"post",children:[n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"postTitle",children:n.title}),Object(b.jsx)("p",{className:"postDate",children:n.datetime}),Object(b.jsx)("p",{className:"postBody",children:n.body}),Object(b.jsx)(p.b,{to:"/edit/".concat(n.id),children:Object(b.jsx)("button",{className:"editButton",children:"Edit Post"})}),Object(b.jsx)("button",{className:"deleteButton",onClick:function(){return c(n.id)},children:"Delete Post"})]}),!n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Post Not Found"}),Object(b.jsx)("p",{children:"Well, that's disappointing."}),Object(b.jsx)("p",{children:Object(b.jsx)(p.b,{to:"/",children:"Visit Our Homepage"})})]})]}),Object(b.jsx)(p.b,{to:"/",className:"back-btn",children:"Back"})]})},w=function(e){var t=e.posts,c=e.handleEdit,n=e.editBody,a=e.setEditBody,r=e.editTitle,o=e.setEditTitle,i=Object(y.g)().id,l=t.find((function(e){return e.id.toString()===i}));Object(y.f)();return Object(s.useEffect)((function(){l&&(o(l.title),a(l.body))}),[l,o,a]),Object(b.jsxs)("main",{className:"NewPost",children:[r&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Edit Post"}),Object(b.jsxs)("form",{className:"newPostForm",onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(b.jsx)("input",{id:"postTitle",type:"text",required:!0,value:r,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"postBody",children:"Post:"}),Object(b.jsx)("textarea",{id:"postBody",required:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(){return c(l.id)},children:"Submit"})]}),Object(b.jsx)(p.b,{className:"back-btn",to:"/post/".concat(l.id),children:"Back"})]}),!r&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Post Not Found"}),Object(b.jsx)("p",{children:"Well, that's disappointing."}),Object(b.jsx)("p",{children:Object(b.jsx)(p.b,{to:"/",children:"Visit Our Homepage"})})]})]})},S=function(){return Object(b.jsxs)("main",{className:"About",children:[Object(b.jsx)("h2",{children:"About"}),Object(b.jsx)("p",{style:{marginTop:"1rem"},children:"Personal Blog made with React js, useState, useEffect, axios and styled with CSS"})]})},P=function(){return Object(b.jsxs)("main",{className:"Missing",children:[Object(b.jsx)("h2",{children:"Page Not Found"}),Object(b.jsx)("p",{children:"Well, that's disappointing."}),Object(b.jsx)("p",{children:Object(b.jsx)(p.b,{to:"/",children:"Visit Our Homepage"})})]})},F=c(66),B=c(32),E=c.n(B).a.create({baseURL:"http://localhost:8000"}),T=function(e){var t=e.login,c=(e.error,Object(s.useState)({name:"",email:"",password:""})),n=Object(u.a)(c,2),a=n[0],r=n[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"login-form",children:Object(b.jsxs)("div",{className:"form-inner",children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(Object(o.a)(Object(o.a)({},a),{},{name:e.target.value}))},value:a.name})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(b.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return r(Object(o.a)(Object(o.a)({},a),{},{email:e.target.value}))},value:a.email})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(o.a)(Object(o.a)({},a),{},{password:e.target.value}))},value:a.password})]}),Object(b.jsx)("input",{type:"submit",value:"Login"})]})})};var k=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(u.a)(a,2),l=r[0],p=r[1],x=Object(s.useState)([]),f=Object(u.a)(x,2),B=f[0],k=f[1],C=Object(s.useState)(""),D=Object(u.a)(C,2),L=D[0],M=D[1],H=Object(s.useState)(""),q=Object(u.a)(H,2),A=q[0],W=q[1],V=Object(s.useState)(""),J=Object(u.a)(V,2),R=J[0],I=J[1],U=Object(s.useState)(""),Y=Object(u.a)(U,2),z=Y[0],G=Y[1],K=Object(y.f)(),Q="example@example.com",X="example123",Z=Object(s.useState)({name:"",email:""}),$=Object(u.a)(Z,2),_=$[0],ee=$[1],te=Object(s.useState)(""),ce=Object(u.a)(te,2),se=ce[0],ne=ce[1];Object(s.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/posts");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):console.log("Error: ".concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){var e=c.filter((function(e){return e.body.toLowerCase().includes(l.toLowerCase())||e.title.toLowerCase().includes(l.toLowerCase())}));k(e.reverse())}),[c,l]);var ae=function(){var e=Object(d.a)(j.a.mark((function e(t){var s,a,r,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=c.length?c[c.length-1].id+1:1,a=Object(F.a)(new Date,"MMMM dd, yyyy pp"),r={id:s,title:L,datetime:a,body:A},e.prev=4,e.next=7,E.post("/posts",r);case 7:o=e.sent,l=[].concat(Object(i.a)(c),[o.data]),n(l),M(""),W(""),K.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("Error: ".concat(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(d.a)(j.a.mark((function e(t){var s,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(F.a)(new Date,"MMMM dd, yyyy pp"),a={id:t,title:R,datetime:s,body:z},e.prev=2,e.next=5,E.put("/posts/".concat(t),a);case 5:r=e.sent,n(c.map((function(e){return e.id===t?Object(o.a)({},r.data):e}))),I(""),G(""),K.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("Error: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(d.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.delete("/posts/".concat(t));case 3:s=c.filter((function(e){return e.id!==t})),n(s),K.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:""!==_.email?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"Personal Blog"}),Object(b.jsx)(O,{search:l,setSearch:p,Logout:function(){ee({name:"",email:""})}}),Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{exact:!0,path:"/",children:Object(b.jsx)(g,{posts:B})}),Object(b.jsx)(y.a,{exact:!0,path:"/post",children:Object(b.jsx)(v,{handleSubmit:ae,postTitle:L,setPostTitle:M,postBody:A,setPostBody:W})}),Object(b.jsx)(y.a,{path:"/edit/:id",children:Object(b.jsx)(w,{posts:c,handleEdit:re,editTitle:R,setEditTitle:I,editBody:z,setEditBody:G})}),Object(b.jsx)(y.a,{path:"/post/:id",children:Object(b.jsx)(N,{posts:c,handleDelete:oe})}),Object(b.jsx)(y.a,{path:"/about",component:S}),Object(b.jsx)(y.a,{path:"*",component:P})]}),Object(b.jsx)(m,{})]}):Object(b.jsx)(T,{login:function(e){e.email==Q&&e.password==X?(ee({name:e.name,email:e.email}),alert("Welcome ".concat(e.name))):ne(alert("Details do not match"))},error:se})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(y.a,{path:"/",component:k})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.71c93799.chunk.js.map