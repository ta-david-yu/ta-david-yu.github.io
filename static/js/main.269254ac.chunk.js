(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(247)},164:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(49),c=a.n(r),l=a(249),o=a(6),m=a(7),s=a(10),u=a(8),g=a(9),p=a(19),d=a(248),E=a(250),h=a(2),b=(a(164),a(165),a(167),function(e){return i.a.createElement(h.a,{item:!0})}),y={ProgrammingLanguage:"box-blue",Tools:"box-yellow",Language:"box-red"},k=i.a.createElement("div",null,i.a.createElement("div",null,"My name is Ta Yu. You can call me David Yu."),i.a.createElement("div",null,"I am a game developer from Taiwan."),i.a.createElement("p",null,"I started to make games in high school using RPG maker. After getting into college, I joined a game design club and began to use Unity3D as my primary game engine."),i.a.createElement("p",null,"Currently working on ",i.a.createElement("a",{href:"https://partygoosestudio.wixsite.com/gerritorythegame",target:"_blank"},"Gerritory"),", a multiplayer party game.")),v=[{Degree:"National Chiao Tung University - B.S. in Computer Science",Duration:"2014.9-2018.6",GPA:"3.97/4.3",Link:"https://www.cs.nctu.edu.tw/"}],x=[{Title:"Game Programmer Summer Intern",Company:"Akatsuki Inc.",Duration:"2017.8-2017.9",Link:"https://aktsk.com.tw/intern/"}],f=[{Name:"C/C++",Description:"The mostly used language for non-Unity project",Type:"ProgrammingLanguage"},{Name:"C#",Description:"As Unity scripting language",Type:"ProgrammingLanguage"},{Name:"GLSL/UnityShader",Description:"With good understanding of Computer Graphics",Type:"ProgrammingLanguage"},{Name:"JavaScript",Description:"So I made this webpage",Type:"ProgrammingLanguage"},{Name:"PHP",Description:"Used in web backend, seldom used",Type:"ProgrammingLanguage"},{Name:"ReactJS",Description:"So I made this webpage",Type:"Tools"},{Name:"Unity3D",Description:"With 4+ years of development experience",Type:"Tools"},{Name:"git",Description:"Yep, it's essential",Type:"Tools"},{Name:"SocketProgramming",Description:"Have built a http server with C++ on Linux",Type:"Tools"},{Name:"VisualStudio",Description:"The mostly used IDE for C++ & C#",Type:"Tools"},{Name:"SQL",Description:"Usable",Type:"Tools"},{Name:"Chinese",Description:"Native language",Type:"Language"},{Name:"English",Description:"High-intermediate",Type:"Language"},{Name:"Japanese",Description:"Elementary",Type:"Language"},{Name:"German",Description:"Newborn baby",Type:"Language"}],N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="TaDavidYu | About"}},{key:"componentWillMount",value:function(){this.generateTable()}},{key:"generateTable",value:function(){this.educations=v.map(function(e){return i.a.createElement("a",{href:e.Link,target:"_blank"},i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content box-white"},i.a.createElement("div",{className:"main-text"},i.a.createElement("img",{alt:"+",src:"./img/link-x13.png",className:"icon"})," ",e.Degree," (",e.Duration,")"),i.a.createElement("div",{className:"sub-text"},"GPA ",e.GPA)))}),this.experiences=x.map(function(e){return i.a.createElement("a",{href:e.Link,target:"_blank"},i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content box-white"},i.a.createElement("div",{className:"main-text"},i.a.createElement("img",{alt:"+",src:"./img/link-x13.png",className:"icon"})," ",e.Title," - ",e.Company," (",e.Duration,")")))}),this.skills=f.map(function(e){return i.a.createElement(h.a,{item:!0},i.a.createElement("div",{className:"main-text tooltip ".concat(y[e.Type])},e.Name," ",i.a.createElement("span",{className:"tooltip-text tooltip-content box-tooltip"},e.Description)))})}},{key:"render",value:function(){return i.a.createElement(h.a,{container:!0,direction:"column",spacing:24,justify:"center",alignItems:"center"},i.a.createElement(h.a,{container:!0,direction:"column",lg:8,spacing:8},i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content-header"},"I make games"),i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content"},k)),i.a.createElement(h.a,{container:!0,direction:"column",lg:8,spacing:8},i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content-header"},"education"),this.educations),i.a.createElement(b,null),i.a.createElement(h.a,{container:!0,direction:"column",lg:8,spacing:8},i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content-header"},"experience"),this.experiences),i.a.createElement(b,null),i.a.createElement(h.a,{container:!0,direction:"column",lg:8,spacing:8},i.a.createElement(h.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"content-header"},"skills"),i.a.createElement(h.a,{container:!0,direction:"row",justify:"center"},this.skills)))}}]),t}(n.Component),T=a(1),j=a.n(T),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.isHighlighted?" highlighted":"";return i.a.createElement("button",{value:this.props.value,type:this.props.type,onClick:this.props.onClick,className:this.props.className+e},this.props.text)}}]),t}(n.Component);L.PropTypes={value:j.a.string,text:j.a.string,type:j.a.string,onClick:j.a.func,className:j.a.string};var D=L,O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="TaDavidYu | Work"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"MY WORKS"),i.a.createElement("div",null,"Following are some of the games I made:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Gerritory"),i.a.createElement("li",null,"Facilisis bibendum"),i.a.createElement("li",null,"Vestibulum vulputate"),i.a.createElement("li",null,"Eget erat"),i.a.createElement("li",null,"Id porttitor")),i.a.createElement(h.a,{container:!0,spacing:8,direction:"row",justify:"center",alignItems:"center",className:!0},i.a.createElement(h.a,{item:!0,xs:!0},i.a.createElement(D,{text:"PREV",className:"round-g255-btn"})),i.a.createElement(h.a,{item:!0,xs:!0},i.a.createElement(D,{text:"NEXT",className:"round-g255-btn"})),i.a.createElement(h.a,{item:!0,xs:!0},i.a.createElement(D,{text:"NEXT",className:"round-g255-btn"})),i.a.createElement(h.a,{item:!0,xs:!0},i.a.createElement(D,{text:"NEXT",className:"round-g255-btn"})),i.a.createElement(h.a,{item:!0,xs:!0},i.a.createElement(D,{text:"NEXSDSDT",className:"round-g255-btn"}))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="TaDavidYu | Contact"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Contact Me:"),i.a.createElement("p",null,"The easiest thing to do is post on our"))}}]),t}(n.Component),w=function(e){return i.a.createElement(h.a,{item:!0})},I=[{Component:N,Link:"/",LinkExact:!0,Header:"about"},{Component:O,Link:"/work",LinkExact:!1,Header:"work"},{Component:C,Link:"/blog",LinkExact:!1,Header:"blog"},{Component:C,Link:"/contact",LinkExact:!1,Header:"contact"}],P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={redirectTo:"/"},a.handleOnClickTab=a.handleOnClickTab.bind(Object(p.a)(Object(p.a)(a))),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.generateItems()}},{key:"handleOnClickTab",value:function(e){this.props.history.push(e.target.value)}},{key:"generateItems",value:function(){var e=this;this.tabListItems=[],this.tabRouteItems=[];for(var t=function(t){var a=I[t];e.tabListItems.push(i.a.createElement(h.a,{item:!0,lg:!0,xs:!0},i.a.createElement(d.a,{exact:a.LinkExact,key:a.Header,path:a.Link,children:function(t){var n=t.match;return i.a.createElement(D,{text:a.Header,value:a.Link,onClick:e.handleOnClickTab,className:n?"round-g204-btn".concat("-active"):"round-g204-btn"})}}))),e.tabRouteItems.push(i.a.createElement(d.a,{exact:a.LinkExact,key:a.Header,path:a.Link,component:a.Component}))},a=0;a<I.length;a++)t(a)}},{key:"render",value:function(){return i.a.createElement("div",{className:"background"},i.a.createElement(h.a,{container:!0,spacing:8,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(w,null),i.a.createElement(w,null),i.a.createElement(w,null),i.a.createElement(w,null),i.a.createElement(h.a,{item:!0},i.a.createElement("img",{alt:"Oops! Image is missing!",src:"./img/ta-david-yu-mascot-x64.png",className:"logo"})),i.a.createElement(h.a,{item:!0},i.a.createElement("div",{className:"header-text"},"ta david yu")),i.a.createElement(h.a,{item:!0},i.a.createElement("div",{className:"subheader-text"},"game developer, game programmer")),i.a.createElement(h.a,{lg:6,md:12,sm:12,xs:!0,container:!0,direction:"row",justify:"center"},this.tabListItems),i.a.createElement(h.a,{container:!0,direction:"row",justify:"center"},i.a.createElement(h.a,{item:!0,lg:6,md:12,sm:12,xs:!0,className:"panel-border square-g204-x33"},i.a.createElement("div",{className:"panel-content"},this.tabRouteItems)))))}}]),t}(n.Component),S=Object(E.a)(P);c.a.render(i.a.createElement(l.a,null,i.a.createElement(S,null)),document.getElementById("root"))}},[[159,2,1]]]);
//# sourceMappingURL=main.269254ac.chunk.js.map