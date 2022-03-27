(this["webpackJsonpacademic-homepage"]=this["webpackJsonpacademic-homepage"]||[]).push([[0],{166:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(17),s=n.n(i),a=(n(36),n(4)),j=n(168),o=n(0),l=function(){var e=Object(j.a)().i18n;return Object(o.jsxs)(a.Form.Control,{children:[Object(o.jsx)(a.Button,{text:!0,disabled:"cn"===e.language,onClick:function(){e.changeLanguage("cn")},children:"\u7b80\u4f53\u4e2d\u6587"}),Object(o.jsx)(a.Button,{text:!0,disabled:"en"===e.language,onClick:function(){e.changeLanguage("en")},children:"English"}),Object(o.jsx)(a.Button,{text:!0,disabled:"jp"===e.language,onClick:function(){e.changeLanguage("jp")},children:"\u65e5\u672c\u8a9e"})]})},d=function(){var e=Object(j.a)().t;return Object(o.jsxs)(a.Hero,{color:"light",gradient:!0,children:[Object(o.jsxs)(a.Hero.Body,{children:[Object(o.jsx)(a.Block,{children:Object(o.jsxs)(a.Heading,{size:1,textAlign:"center",children:[Object(o.jsxs)("ruby",{children:[e("firstname"),Object(o.jsx)("rt",{children:e("firstname_phonetic")})]})," \xa0",Object(o.jsxs)("ruby",{children:[e("lastname"),Object(o.jsx)("rt",{children:e("lastname_phonetic")})]})]})}),Object(o.jsx)(a.Heading,{subtitle:!0,size:4,textAlign:"center",children:e("research_interest")})]}),Object(o.jsx)(a.Hero.Footer,{children:Object(o.jsx)(a.Heading,{subtitle:!0,textAlign:"center",children:Object(o.jsx)(l,{})})})]})},b=n(6),u=function(e){return Object(o.jsx)(o.Fragment,{children:Object.entries(e.links).map((function(e){return Object(o.jsxs)("strong",{children:["[",Object(o.jsx)("a",{href:e[1],target:"_blank",rel:"noreferrer",children:e[0]}),"]"]},e[0])}))})},h=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("data/current_work.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e.title}),Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.title)}));i(t)}))}),[i]),Object(o.jsxs)(a.Box,{children:[Object(o.jsx)(a.Heading,{size:5,children:e("current_work")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:c})})]})},O=n(169),x=function(){var e=Object(j.a)().t,t=[121,101,112,101,110,103,100,105,110,103,64,103,46,101,99,99,46,117,45,116,111,107,121,111,46,97,99,46,106,112],n=Object(r.useState)("Loading"),c=Object(b.a)(n,2),i=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),u=d[0],h=d[1],x=function(){s(String.fromCharCode.apply(String,t)),h(!0)};return Object(o.jsx)(a.Footer,{id:"contact",children:Object(o.jsxs)(a.Content,{style:{textAlign:"center"},children:[Object(o.jsxs)("p",{id:"email",children:[e("email"),": ",Object(o.jsx)("span",{onMouseEnter:x,onClick:x,style:{display:u?"none":"inline"},children:e("email_tip")}),Object(o.jsx)("a",{href:"mailto:".concat(i),style:{display:u?"inline":"none"},children:i})]}),Object(o.jsx)("small",{children:Object(o.jsxs)(O.a,{i18nKey:"address",children:["Information Technology Center",Object(o.jsx)("br",{}),"The University of Tokyo",Object(o.jsx)("br",{}),"2-11-16 Yayoi, Bunkyo-ku, Tokyo, 113-8658, Japan"]})})]})})},g=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var t=e.names.map((function(e){var t=e.split(", ");return 1===t.length?t[0]:"".concat(t[0],", ").concat(t[1].charAt(0),".")}));i(t)}),[e.names]),Object(o.jsx)("span",{children:c.map((function(e){return e.startsWith("*")?Object(o.jsx)("u",{children:e.substr(1)},e):e})).reduce((function(e,t){return null==e?[t]:[e,", ",t]}),null)})},f=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)([]),l=Object(b.a)(s,2),d=l[0],h=l[1];return Object(r.useEffect)((function(){var e=fetch("data/journal_publications.json").then((function(e){return e.json()})),t=fetch("data/conference_publications.json").then((function(e){return e.json()}));Promise.all([e,t]).then((function(e){var t=Object(b.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)(g,{names:e.author}),"\xa0 (",e.year,"). ",Object(o.jsx)("strong",{children:e.title}),".",Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.title)}));h(c);var s=r.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)(g,{names:e.author}),"\xa0 (",e.date,"). ",Object(o.jsx)("strong",{children:e.title}),". In ",e.conference," (pp. ",e.pages,"). ",e.organization,".",Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.title)}));i(s)}))}),[i,h]),Object(o.jsxs)(a.Box,{children:[Object(o.jsx)(a.Heading,{size:5,id:"publication",children:e("publication")}),Object(o.jsx)(a.Heading,{size:5,id:"conference",children:e("conference")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:c})}),Object(o.jsx)(a.Heading,{size:5,id:"journal",children:e("journal")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:d})})]})},_=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("data/preprints.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)(g,{names:e.author}),"\xa0 (",e.date,"). ",Object(o.jsx)("strong",{children:e.title}),". ",e.doi,".",Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.doi)}));i(t)}))}),[i]),Object(o.jsxs)(a.Box,{id:"preprint",children:[Object(o.jsx)(a.Heading,{size:5,children:e("preprint")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:c})})]})},p=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("data/talks.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)(g,{names:e.presenter}),"\xa0 (",e.date,"). ",Object(o.jsx)("strong",{children:e.title}),". ",e.doi,".",Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.doi)}));i(t)}))}),[i]),Object(o.jsxs)(a.Box,{id:"talk",children:[Object(o.jsx)(a.Heading,{size:5,children:e("talk")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:c})})]})},m=function(){var e=Object(j.a)().t;return Object(o.jsxs)(a.Box,{id:"past",children:[Object(o.jsx)(a.Heading,{size:5,children:e("past_work")}),Object(o.jsx)(a.Content,{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"A Variant Caller based on Deep Convolutional Neural Networks, 2018-2019"}),Object(o.jsx)("li",{children:"Hybrid Indoor Real-Time Locating system Based on Smartphone, Best Dissertation Award, 2017-2018"}),Object(o.jsx)("li",{children:"An Optimization Method for Network Resource Leasing in 5G Wireless Information Center, Patent: CN201710367449.5, 2016-2017"}),Object(o.jsx)("li",{children:"A Real-Time Collaborative Online Mind Map Maker, Copyright: No. 2676628, 2016-2017"}),Object(o.jsx)("li",{children:"Design of Distributed Database and Subscriber Authorization System for Breast Cancer Special Research, supported by No. 2016YFC0901300, 2016-2017"}),Object(o.jsx)("li",{children:"Distributed Storage and Visualization of Human Physical Activity Data, Copyright: 1774900, 2016"}),Object(o.jsx)("li",{children:"Tongcai China: An Automated Generation of Knowledge Graph and Knowledge Management System for Expert Social Networks, Copyright: 1774897, 2015-2016"})]})})]})},y=function(){var e=Object(j.a)().t;return Object(o.jsxs)(a.Box,{id:"education",children:[Object(o.jsx)(a.Heading,{size:5,children:e("education")}),Object(o.jsx)(a.Content,{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e("edu_1_degree")}),", ",Object(o.jsx)("strong",{children:e("edu_1_institute")}),", ",e("edu_1_year")]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e("edu_2_degree")}),e("edu_2_major"),", ",Object(o.jsx)("strong",{children:e("edu_2_institute")}),", ",e("edu_2_year")]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e("edu_3_degree")}),e("edu_3_major"),", ",Object(o.jsx)("strong",{children:e("edu_3_institute")}),", ",e("edu_3_year")]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e("edu_4_degree")}),e("edu_4_major"),", ",Object(o.jsx)("strong",{children:e("edu_4_institute")}),", ",e("edu_4_year")]})]})})]})},v=function(){var e=Object(j.a)().t;return Object(o.jsxs)(a.Box,{id:"award",children:[Object(o.jsx)(a.Heading,{size:5,children:e("award")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e("award_dc1")}),", DC1, JSPS"]})})})]})},k=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)([]),l=Object(b.a)(s,2),d=l[0],u=l[1];return Object(r.useEffect)((function(){var e=fetch("data/journal_service.json").then((function(e){return e.json()})),t=fetch("data/conference_service.json").then((function(e){return e.json()}));Promise.all([e,t]).then((function(e){var t=Object(b.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e.name}),"\xa0",e.role,". ",Object(o.jsx)("strong",{children:e.note})]},e.name)}));i(c);var s=r.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e.name}),"\xa0",e.role,". ",Object(o.jsx)("strong",{children:e.note})]},e.name)}));u(s)}))}),[i,u]),Object(o.jsxs)(a.Box,{id:"service",children:[Object(o.jsx)(a.Heading,{size:5,children:e("service")}),Object(o.jsx)(a.Content,{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Journal"}),Object(o.jsx)("ul",{children:c})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Conference"}),Object(o.jsx)("ul",{children:d})]})]})})]})},C=function(){var e=Object(j.a)().t;return Object(o.jsxs)(a.Box,{id:"about",children:[Object(o.jsx)(a.Heading,{size:5,children:e("about")}),Object(o.jsxs)(a.Content,{children:[Object(o.jsxs)("p",{children:["I have a great interest in ",Object(o.jsx)("strong",{children:"decentralized technologies"}),". Particularly, I am focusing on the security aspect of these promising technologies that is ",Object(o.jsx)("strong",{children:"the security behind the security"}),". Besides, I am constructing the foundational theory of a new programming paradigm named ",Object(o.jsx)("strong",{children:"transition-oriented programming"})," to instruct programmers to think in a formal way while developing complex systems such as decentralized systems."]}),Object(o.jsxs)("p",{children:["Meanwhile, I am a system architect and a software engineer. I have supervised dozens of development projects for startups and institutes since 2015. I am still exploring the methodology of developing ",Object(o.jsx)("strong",{children:"provably correct and verifiable software"}),"."]}),Object(o.jsx)("p",{children:"Hobbies: programming, travel, speculation"}),Object(o.jsxs)("p",{children:["Websites:",Object(o.jsxs)("strong",{children:["[",Object(o.jsx)("a",{href:"https://www.linkedin.com/in/yepengding",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),"]"]}),Object(o.jsxs)("strong",{children:["[",Object(o.jsx)("a",{href:"https://www.researchgate.net/profile/Yepeng_Ding",target:"_blank",rel:"noreferrer",children:"Research Gate"}),"]"]}),Object(o.jsxs)("strong",{children:["[",Object(o.jsx)("a",{href:"https://scholar.google.com/citations?user=idwQ-d4AAAAJ",target:"_blank",rel:"noreferrer",children:"Google Scholar"}),"]"]})]}),"About ",Object(o.jsx)("strong",{children:Object(o.jsx)("a",{href:"https://github.com/yepengding/yepengding.github.io/tree/dev",target:"_blank",rel:"noreferrer",children:"this website"})})," developed for reusable purposes."]})]})},w=function(){var e=Object(j.a)().t,t=Object(r.useState)(!1),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(o.jsxs)(a.Navbar,{active:c,children:[Object(o.jsxs)(a.Navbar.Brand,{children:[Object(o.jsx)(a.Navbar.Item,{renderAs:"a",href:"#",children:Object(o.jsx)("img",{src:"/logo512.png",alt:"Yepeng Ding"})}),Object(o.jsx)(a.Navbar.Burger,{onClick:function(){return i(!c)}})]}),Object(o.jsxs)(a.Navbar.Menu,{children:[Object(o.jsxs)(a.Navbar.Container,{children:[Object(o.jsxs)(a.Navbar.Item,{hoverable:!0,children:[Object(o.jsx)(a.Navbar.Link,{children:e("publication")}),Object(o.jsxs)(a.Navbar.Dropdown,{children:[Object(o.jsx)(a.Navbar.Item,{href:"#conference",children:e("conference")}),Object(o.jsx)(a.Navbar.Item,{href:"#journal",children:e("journal")})]})]}),Object(o.jsx)(a.Navbar.Item,{href:"#talk",children:e("talk")}),Object(o.jsx)(a.Navbar.Item,{href:"#education",children:e("education")}),Object(o.jsx)(a.Navbar.Item,{href:"#about",children:e("about")})]}),Object(o.jsx)(a.Navbar.Container,{children:Object(o.jsx)(a.Navbar.Item,{href:"#contact",children:e("contact")})})]})]})},S=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("data/reports.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e.title})," (",e.date,") by ",Object(o.jsx)(g,{names:e.author}),".",Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.title)}));i(t)}))}),[i]),Object(o.jsxs)(a.Box,{id:"report",children:[Object(o.jsx)(a.Heading,{size:5,children:e("report")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:c})})]})},B=function(){var e=Object(j.a)().t,t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("data/notes.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e.title})," (",e.status,") by ",Object(o.jsx)(g,{names:e.author}),".",Object(o.jsx)("br",{}),Object(o.jsx)(u,{links:e.links})]},e.title)}));i(t)}))}),[i]),Object(o.jsxs)(a.Box,{id:"note",children:[Object(o.jsx)(a.Heading,{size:5,children:e("note")}),Object(o.jsx)(a.Content,{children:Object(o.jsx)("ul",{children:c})})]})},N=function(){return Object(o.jsxs)(a.Container,{children:[Object(o.jsx)(w,{}),Object(o.jsx)(d,{}),Object(o.jsxs)(a.Section,{children:[Object(o.jsx)(h,{}),Object(o.jsx)(f,{}),Object(o.jsx)(_,{}),Object(o.jsx)(p,{}),Object(o.jsx)(S,{}),Object(o.jsx)(B,{}),Object(o.jsx)(m,{}),Object(o.jsx)(y,{}),Object(o.jsx)(v,{}),Object(o.jsx)(k,{}),Object(o.jsx)(C,{})]}),Object(o.jsx)(x,{})]})},I=(n(166),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(N,{})})}),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,170)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))},H=n(31),T=n(10),A=n(28),E={cn:{translation:n(29)},en:{translation:A},jp:{translation:n(30)}};H.a.use(T.e).init({resources:E,lng:"en",fallbackLng:"en"}),s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),z()},28:function(e){e.exports=JSON.parse('{"firstname":"Yepeng","firstname_phonetic":"Michael","lastname":"Ding","lastname_phonetic":"Ding","research_interest":"Research Interests: Decentralization, Formal Methods, Programming Languages","current_work":"Current Works","publication":"Publications","conference":"Conference","journal":"Journal","preprint":"Preprints","talk":"Talks","report":"Technical Reports","note":"Notes","past_work":"Selected Past Works","education":"Education","edu_1_degree":"Ph.D. Candidate","edu_1_major":" in Electrical Engineering and Information Systems","edu_1_institute":"The University of Tokyo","edu_1_year":"present","edu_2_degree":"M.S.","edu_2_major":" in Computer Science","edu_2_institute":"Georgia Institute of Technology","edu_2_year":"2021","edu_3_degree":"M.E.","edu_3_major":" in Electrical Engineering and Information Systems","edu_3_institute":"The University of Tokyo","edu_3_year":"2021","edu_4_degree":"B.E.","edu_4_major":" in Computer Science and Technology","edu_4_institute":"University of Science and Technology Beijing","edu_4_year":"2018","award":"Research Award","award_dc1":"Research Fellowship for Young Scientists (JSPC Fellow)","service":"Service","about":"About","contact":"Contact","email":"Email","email_tip":"Please point here","address":"Information Technology Center<br/>The University of Tokyo<br/>2-11-16 Yayoi, Bunkyo-ku, Tokyo, 113-8658, Japan"}')},29:function(e){e.exports=JSON.parse('{"firstname":"\u4e01","firstname_phonetic":"d\u012bng","lastname":"\u6654\u6f8e","lastname_phonetic":"y\xe8p\xe9ng","research_interest":"\u7814\u7a76\u65b9\u5411\uff1a\u53bb\u4e2d\u5fc3\u5316\u6280\u672f\uff0c\u5f62\u5f0f\u5316\u65b9\u6cd5\uff0c\u7f16\u7a0b\u8bed\u8a00\u539f\u7406","current_work":"\u5f53\u524d\u5de5\u4f5c","publication":"\u53d1\u8868\u8bba\u6587","conference":"\u4f1a\u8bae\u8bba\u6587","journal":"\u671f\u520a\u8bba\u6587","preprint":"\u9884\u5370\u8bba\u6587","talk":"\u5b66\u672f\u8bb2\u6f14","report":"\u6280\u672f\u62a5\u544a","note":"\u7b14\u8bb0","past_work":"\u8fc7\u53bb\u5de5\u4f5c","education":"\u5b66\u5386","edu_1_degree":"\u535a\u58eb","edu_1_major":" \u7535\u6c14\u5de5\u7a0b\u4e0e\u4fe1\u606f\u7cfb\u7edf","edu_1_institute":"\u4e1c\u4eac\u5927\u5b66","edu_1_year":"\u81f3\u4eca","edu_2_degree":"\u7406\u5b66\u7855\u58eb","edu_2_major":" \u8ba1\u7b97\u673a\u79d1\u5b66","edu_2_institute":"\u4f50\u6cbb\u4e9a\u7406\u5de5\u5b66\u9662","edu_2_year":"2021","edu_3_degree":"\u5de5\u5b66\u7855\u58eb","edu_3_major":" \u7535\u6c14\u5de5\u7a0b\u4e0e\u4fe1\u606f\u7cfb\u7edf","edu_3_institute":"\u4e1c\u4eac\u5927\u5b66","edu_3_year":"2021","edu_4_degree":"\u5de5\u5b66\u5b66\u58eb","edu_4_major":" \u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f","edu_4_institute":"\u5317\u4eac\u79d1\u6280\u5927\u5b66","edu_4_year":"2018","award":"\u7814\u7a76\u83b7\u5956","award_dc1":"\u7279\u522b\u7814\u7a76\u5458 (JSPC Fellow)","service":"\u5b66\u672f\u670d\u52a1","about":"\u5173\u4e8e\u6211","contact":"\u8054\u7cfb\u6211","email":"\u90ae\u4ef6\u5730\u5740","email_tip":"\u8bf7\u70b9\u51fb\u8fd9\u91cc","address":"\u65e5\u672c\uff0c\u4e1c\u4eac\u90fd\uff0c\u6587\u4eac\u533a\uff0c\u5f25\u751f2-11-16<br/>\u4e1c\u4eac\u5927\u5b66<br/>\u4fe1\u606f\u6280\u672f\u4e2d\u5fc3<br/>\u90ae\u653f\u7f16\u7801:113-8658"}')},30:function(e){e.exports=JSON.parse('{"firstname":"\u4e01","firstname_phonetic":"\u30c6\u30a4","lastname":"\u66c4\u6f8e","lastname_phonetic":"\u30e8\u30a6\u30db\u30a6","research_interest":"\u7814\u7a76\u5185\u5bb9\uff1a\u975e\u4e2d\u592e\u96c6\u6a29\u6280\u8853\u3001\u5f62\u5f0f\u624b\u6cd5\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u7406\u8ad6","current_work":"\u9032\u884c\u4e2d","publication":"\u767a\u8868\u6587\u732e","conference":"\u56fd\u969b\u4f1a\u8b70","journal":"\u8ad6\u6587\u8a8c","preprint":"\u30d7\u30ec\u30d7\u30ea\u30f3\u30c8","talk":"\u5b66\u8853\u767a\u8868","report":"\u30c6\u30af\u30cb\u30ab\u30eb\u30ec\u30dd\u30fc\u30c8","note":"\u30ce\u30fc\u30c8","past_work":"\u904e\u53bb\u696d\u7e3e","education":"\u5b66\u6b74","edu_1_degree":"\u535a\u58eb","edu_1_major":" \u96fb\u6c17\u7cfb\u5de5\u5b66\u5c02\u653b","edu_1_institute":"\u6771\u4eac\u5927\u5b66","edu_1_year":"\u5728\u5b66","edu_2_degree":"\u4fee\u58eb\uff08\u7406\u5b66\uff09","edu_2_major":" \u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u79d1\u5b66\u5c02\u653b","edu_2_institute":"\u30b8\u30e7\u30fc\u30b8\u30a2\u5de5\u79d1\u5927\u5b66","edu_2_year":"2021","edu_3_degree":"\u4fee\u58eb\uff08\u5de5\u5b66\uff09","edu_3_major":" \u96fb\u6c17\u7cfb\u5de5\u5b66\u5c02\u653b","edu_3_institute":"\u6771\u4eac\u5927\u5b66","edu_3_year":"2021","edu_4_degree":"\u5b66\u58eb\uff08\u5de5\u5b66\uff09","edu_4_major":" \u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u79d1\u5b66\u3068\u6280\u8853\u5c02\u653b","edu_4_institute":"\u5317\u4eac\u79d1\u6280\u5927\u5b66","edu_4_year":"2018","award":"\u7814\u7a76\u53d7\u8cde","award_dc1":"\u7279\u5225\u7814\u7a76\u54e1 (JSPC Fellow)","service":"\u5b66\u8853\u6d3b\u52d5","about":"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb","contact":"\u30b3\u30f3\u30bf\u30af\u30c8","email":"\u30e1\u30fc\u30eb","email_tip":"\u3053\u3053\u306b\u6307\u3057\u3066\u304f\u3060\u3055\u3044","address":"\u65e5\u672c\u6771\u4eac\u90fd\u6587\u4eac\u533a\u5f25\u751f2-11-16<br/>\u6771\u4eac\u5927\u5b66<br/>\u60c5\u5831\u57fa\u76e4\u30bb\u30f3\u30bf\u30fc<br/>\u3012113-8658"}')},36:function(e,t,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.aba5c4c3.chunk.js.map