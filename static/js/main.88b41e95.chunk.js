(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(393)},22:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),o=a.n(r),s=a(4),m=a(5),l=a(7),c=a(6),g=a(1),d=a(8),h=a(2),p=a(34),u=a(90),y=a.n(u);function f(e){return function(t){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).state={width:0,height:0},t.updateWindowDimensions=function(){t.setState({width:window.innerWidth,height:window.innerHeight})},t}return Object(d.a)(a,t),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({},this.props,{windowWidth:this.state.width,windowHeight:this.state.height,isMobileSized:this.state.width<=720}))}}]),a}(n.Component)}a(22);var b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleOnClick=a.handleOnClick.bind(Object(g.a)(a)),a.onPointerEnter=a.onPointerEnter.bind(Object(g.a)(a)),a.onPointerLeave=a.onPointerLeave.bind(Object(g.a)(a)),a.state={isHovered:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onPointerEnter",value:function(){this.setState({isHovered:!0})}},{key:"onPointerLeave",value:function(){this.setState({isHovered:!1})}},{key:"handleOnClick",value:function(e){this.props.onClick(this.props.information)}},{key:"render",value:function(){var e=this.props.information,t=""!==e.img,a=""!==e.gif,n=e.img,r=e.gif,o=this.state.isHovered,s="work-img-cover"+(o?" hover":""),m=this.props.span;return i.a.createElement(h.a,{item:!0,lg:m,md:m,sm:m,xs:12},i.a.createElement(h.a,{container:!0,direction:"column",alignItems:"center"},i.a.createElement("div",{className:"work-box box-other",onClick:this.handleOnClick,onPointerEnter:this.onPointerEnter,onPointerLeave:this.onPointerLeave},i.a.createElement("div",{className:"work-img-container"},t?i.a.createElement("img",{alt:e.title,src:n,className:a?s:"work-img"}):i.a.createElement("div",{className:"work-empty-img"},i.a.createElement("div",{className:"work-empty-img-text"},"no preview image")),a?i.a.createElement("img",{alt:e.title,src:r,className:"work-gif"}):i.a.createElement("div",{className:"work-gif"}),a&&(o?i.a.createElement("div",{className:"work-gif-note hover"},"GIF"):i.a.createElement("div",{className:"work-gif-note"},"GIF"))),i.a.createElement("div",{className:"work-title"},e.title),i.a.createElement("div",{className:"work-job"},e.job),i.a.createElement(h.a,{container:!0,direction:"row"},i.a.createElement(h.a,{item:!0,xs:3,className:"work-team"},i.a.createElement("img",{alt:e.team,src:"./img/person-x13.png",className:"team-icon"}),e.team),i.a.createElement(h.a,{item:!0,xs:6,className:"work-date"},e.date)))))}}]),t}(n.Component),w=a(92),v=a.n(w),k=a(93),E=a.n(k),O=a(51),j=a(52),S=a(94),N=function(e){function t(e){var a,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return(n=Object(l.a)(this,(a=Object(c.a)(t)).call.apply(a,[this,e].concat(r)))).renderView=n.renderView.bind(Object(g.a)(n)),n.renderThumb=n.renderThumb.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderView",value:function(e){var t=e.style,a=Object(j.a)(e,["style"]);return i.a.createElement("div",Object.assign({className:"box",style:Object(O.a)({},t,{padding:10})},a))}},{key:"renderThumb",value:function(e){var t=e.style,a=Object(j.a)(e,["style"]);return i.a.createElement("div",Object.assign({style:Object(O.a)({},t,{width:"5px",backgroundColor:"#f6d6bd"})},a))}},{key:"render",value:function(){return i.a.createElement(S.Scrollbars,Object.assign({renderView:this.renderView,renderThumbHorizontal:this.renderThumb,renderThumbVertical:this.renderThumb,onUpdate:this.handleUpdate},this.props))}}]),t}(n.Component),C=f(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={isVideoLoaded:!1,progressState:null,currentMedia:0},a.handleOnVideoProgress=a.handleOnVideoProgress.bind(Object(g.a)(a)),a.handleOnVideoReady=a.handleOnVideoReady.bind(Object(g.a)(a)),a.handleOnMediaRight=a.handleOnMediaRight.bind(Object(g.a)(a)),a.handleOnMediaLeft=a.handleOnMediaLeft.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleOnVideoProgress",value:function(e){var t=this.state;t.progressState=e,this.setState(t)}},{key:"handleOnVideoReady",value:function(e){var t=this.state;t.isVideoLoaded=!0,this.setState(t)}},{key:"handleOnMediaRight",value:function(e){var t=this.props.mediaTable.length;if(1!==t){var a=this.state;a.currentMedia=(a.currentMedia+1)%t,a.isVideoLoaded=!1,this.setState(a)}}},{key:"handleOnMediaLeft",value:function(e){var t=this.props.mediaTable.length;if(1!==t){var a=this.state;a.currentMedia=a.currentMedia-1,a.currentMedia<0&&(a.currentMedia+=t),a.isVideoLoaded=!1,this.setState(a)}}},{key:"generateMediaJSX",value:function(e){var t=this;this.mediaJSX=[];var a=this.props.windowWidth<1024?"sm":"lg",n=this.state.currentMedia,r=e.length;e.length>0?e.forEach(function(e){var o=null;"video"===e.type?o=i.a.createElement("div",{className:"modal-media "+a},i.a.createElement("img",{alt:"left-btn",src:"./img/left-arrow-inactive.png",className:"left-button",onClick:t.handleOnMediaLeft}),i.a.createElement("img",{alt:"right-btn",src:"./img/right-arrow-inactive.png",className:"right-button",onClick:t.handleOnMediaRight}),i.a.createElement("span",{className:"media-page-number"},n+1,"/",r),t.state.isVideoLoaded?i.a.createElement("span",{className:"modal-media-loading exit"},"loading video"):i.a.createElement("span",{className:"modal-media-loading"},"loading video"),i.a.createElement(v.a,{width:"100%",height:"100%",onProgress:t.handleOnVideoProgress,onReady:t.handleOnVideoReady,light:!1,url:e.src})):"image"===e.type&&(o=i.a.createElement("div",{className:"modal-media "+a},i.a.createElement("img",{alt:"left-btn",src:"./img/left-arrow-inactive.png",className:"left-button",onClick:t.handleOnMediaLeft}),i.a.createElement("img",{alt:"right-btn",src:"./img/right-arrow-inactive.png",className:"right-button",onClick:t.handleOnMediaRight}),i.a.createElement("span",{className:"media-page-number"},n+1,"/",r),i.a.createElement("img",{alt:"work-img",src:e.src,className:"modal-img "+a}))),t.mediaJSX.push(o)}):this.mediaJSX.push(i.a.createElement("div",{className:"modal-media "+a}))}},{key:"render",value:function(){return this.generateMediaJSX(this.props.mediaTable),this.props.windowWidth<1024?i.a.createElement("div",null):i.a.createElement("div",null,i.a.createElement("div",{className:"modal-media-box box-s-other-left lg"},this.mediaJSX[this.state.currentMedia],i.a.createElement("div",{className:"modal-game-title"},this.props.title),i.a.createElement("div",{className:"modal-job"},this.props.job),i.a.createElement("div",{className:"center-align"},i.a.createElement("span",{className:"modal-date"},i.a.createElement("img",{alt:"date-icon",src:"./img/clock-x13.png",className:"modal-time-icon"}),this.props.date),i.a.createElement("span",{className:"modal-team-size"},i.a.createElement("img",{alt:"date-icon",src:"./img/person-x13.png",className:"modal-team-icon"}),parseInt(this.props.team)>1?this.props.team+"-person team":"Solo")),i.a.createElement("div",{className:"modal-information"},this.props.information)),i.a.createElement("div",null,i.a.createElement("div",{className:"modal-description-box box-s-other-right lg"},i.a.createElement(N,null,i.a.createElement(E.a,{source:this.props.description,className:"modal-description"})))))}}]),t}(n.Component)),M=[{type:"game",title:"Gerritory",img:"./img/work/gerritory-preview.png",gif:"./img/work/gerritory-preview.gif",date:"2017.1 - present",job:"Designer, Programmer, Visual Design",team:"4",mediaTable:[{type:"video",src:"https://youtu.be/wZ_4xxnEhlU"},{type:"image",src:"./img/work/gerritory-media-00.png"},{type:"image",src:"./img/work/gerritory-media-01.png"},{type:"image",src:"./img/work/gerritory-media-02.png"},{type:"image",src:"./img/work/gerritory-media-03.png"},{type:"image",src:"./img/work/gerritory-media-04.png"}],description:{type:"file",src:"Gerritory is a multiplayer party game I made with three of my friends using Unity Engine. This is my first commercial project and will be released on Steam.\nSome of the notable features implemented by me:\n\n| Feature   | Description |\n| --------- | ------- |\n| Tween Manager | Simliar to DOTween but simplified, allow users to play easing animation sequence easily. |\n| Layered Audio System | Sort audio into layers so player can adjust volume for different layers. |\n| Collectables Editor | Make use of the Unity Editor API to create a custom editor for editing in-game collectables. |\n| Asynchornous Task Queue | Users can push task to task queue which will be executed during scene loading asynchornously, e.g., loading assetbundles, procedural content generation, runtime navmesh baking. |\n| Shader Effects | Some special effects using UnityShader. |\n\nOther non-programming stuff:\n\n| Feature   | Description |\n| --------- | ------- |\n| Gameplay Design | Design the core game mechanics. |\n| Visual Design | In game model design & ui design. |\n| Visual Feedback | Add subtle motions in game to make it feel juicy. |\n| 3D Modeling | Some simple cubic character models made with blender. |\n| Sound Effect | Audio recording & mixing for several in-game sound effects. |\n| Game Trailer Editing | Using Adobe Premiere. |\n\nGerritory has won several game awards since making its debute:  \n[![trophy](./img/trophy-x13.png) 2018 Vision Get Wild - Sliver in PC game genre and several sponsor awards](https://dcaward-vgw.org.tw/About/AwardDetail/20838?year=2018&type=1052)  \n[![trophy](./img/trophy-x13.png) 2018 IndiePlay China IGA - 2nd place in Best Student Game](https://www.ciga.me/blog/2018-indieplay?categoryId=80866)  \n[![trophy](./img/trophy-x13.png) 2019 Taipei Game Show IGA - Best Design](http://tgs.tca.org.tw/indie_award_winners.php?b=2b_e)  \n\nSome in-game icons are from [Flaticon](https://www.flaticon.com/).  \nUI sound effects are bought from Unity Asset Store.  \nIn-game musics are composed by [Waterflame](https://www.waterflame.com/) with a non-exclusive license.\n\n"},information:{type:"file",src:i.a.createElement("div",null,i.a.createElement("a",{href:"https://twitter.com/gerritory"},i.a.createElement("img",{alt:"tw-icon",src:"./img/twitter-x26.png",className:"icon-26"})),i.a.createElement("a",{href:"https://www.facebook.com/Gerritory/"},i.a.createElement("img",{alt:"fb-icon",src:"./img/facebook-x26.png",className:"icon-26"})),i.a.createElement("a",{href:"https://partygoosestudio.wixsite.com/gerritorythegame"},i.a.createElement("img",{alt:"globe-icon",src:"./img/globe-x26.png",className:"icon-26"})))}},{type:"game",title:"Eagle Simulator & Rolling Rocker",img:"./img/work/es-rr-preview.png",gif:"./img/work/es-rr-preview.gif",date:"2017.3 - 2017.4",job:"Designer, Programmer",team:"1",mediaTable:[{type:"image",src:"./img/work/es-rr-media-01.png"},{type:"image",src:"./img/work/es-rr-media-02.png"},{type:"image",src:"./img/work/es-rr-media-00.png"}],description:{type:"file",src:"Eagle Simulator & Rolling Rocker is an acedmic project for my human-computer interaction class in college. It includes two arcade games.\nEverything by myself using modern C++ and OpenCV. This is an alt-ctrl game using custom controller and a RGB camera.\n\n| Feature   | Description |\n| --------- | ------- |\n| Component-based Engine | A simple component-based game engine all built from scratch. |\n| RGB Camera Color Tracking | Track a custom controller as input using OpenCV. |\n| Optimization using Multithreading | Separate input thread with game loop thread to avoid possible frame rate drops due to camera capturing delay. |\n| 2D World Streaming | Split 2D tile worlds into chunks to improve performance. |\n\nSome art materials are free assets from the internet.\n\n"},information:{type:"file",src:i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/ta-david-yu/HCI_OpenCVproj"},i.a.createElement("img",{alt:"gh-icon",src:"./img/github-x26.png",className:"icon-26"})))}},{type:"game",title:"Hee X Hoo",img:"./img/work/hee-hoo-preview.png",gif:"./img/work/hee-hoo-preview.gif",date:"GGJ 2018",job:"Level Designer, Programmer",team:"5",mediaTable:[{type:"image",src:"./img/work/hee-hoo-media-00.png"},{type:"image",src:"./img/work/hee-hoo-media-01.png"},{type:"image",src:"./img/work/hee-hoo-media-02.png"}],description:{type:"file",src:'Hee X Hoo is a 2D adventure game made for Global Game Jam 2018 "TRANSMISSION" using Unity Engine.\nThis is an alt-ctrl game using BOSS-ME-80, but it is also playable with mouse & keyboard.\nI did most of the programming and level design, reused some systems I made for Gerritory, e.g., Audio System and Tween Manager.\n\n| Feature   | Description |\n| --------- | ------- |\n| Steering AI | Control autonomous character using steering behaviour such as Pursuit and Wander. |\n\n'},information:{type:"file",src:i.a.createElement("div",null,i.a.createElement("a",{href:"https://globalgamejam.org/2018/games/hee-x-hoo"},i.a.createElement("img",{alt:"ggj-icon",src:"./img/ggj-x26.png",className:"icon-26"})))}},{type:"game",title:"Boomeranger",img:"./img/work/boomeranger-preview.png",gif:"./img/work/boomeranger-preview.gif",date:"2016.3 - 2016.6",job:"Designer, Programmer",team:"3",mediaTable:[{type:"image",src:"./img/work/boomeranger-media-00.png"},{type:"image",src:"./img/work/boomeranger-media-01.png"},{type:"image",src:"./img/work/boomeranger-media-02.png"},{type:"image",src:"./img/work/boomeranger-media-03.png"}],description:{type:"file",src:"Boomeranger is a 3D action roguelike game made for 3D game programming class in college with two of my classmates using Unity Engine. \nMy first attempt to implement a proper 3d character controller.\n\n| Feature   | Description |\n| --------- | ------- |\n| Character Behaviour | Including a 3D raycast-based controller that can handle on-slope movement / external force physics and an airborne boss character controller. |\n| Camera Controller | A 3D camera system that can be switched between MMORPG style camera and TPS style camera. |\n\nOther non-programming stuff:\n\n| Feature   | Description |\n| --------- | ------- |\n| Character Modeling | Character models using MagicaVoxel. |\n| Character Animation | Character animations using Unity builtin animation system. |\n\nSome art assets are from Unity Asset Store.\n\n"},information:{type:"file",src:""}},{type:"game",title:"Nothing Last Forever",img:"./img/work/nothing-last-forever-preview.png",gif:"./img/work/nothing-last-forever-preview.gif",date:"GGJ 2016",job:"Programmer",team:"5",mediaTable:[{type:"image",src:"./img/work/nothing-last-forever-media-00.png"},{type:"image",src:"./img/work/nothing-last-forever-media-01.png"},{type:"image",src:"./img/work/nothing-last-forever-media-02.png"}],description:{type:"file",src:'Nothing Last Forever is a 2D platformer game made for Global Game Jam 2016 "RITUAL" using Unity Engine. My first game jam project.\nSince there is only one artist in our team and the rest of us are programmers, I spent all my time implementing 2D lighting system.\n\n| Feature   | Description |\n| --------- | ------- |\n| 2D dynamic lighting system | A raycast-based 2D lighting system. |\n\n'},information:{type:"file",src:i.a.createElement("div",null,i.a.createElement("a",{href:"https://globalgamejam.org/2016/games/nothing-lasts-forever"},i.a.createElement("img",{alt:"ggj-icon",src:"./img/ggj-x26.png",className:"icon-26"})))}},{type:"tool",title:"DY Engine (WIP)",img:"",gif:"",date:"2017.9 - present",job:"Programmer",team:"1",mediaTable:[],description:{type:"file",src:'DYEngine is a 3D/2D Game Engine written in C++ that I develop during my leisure time.\nDuring the making of "Eagle Simulator & Rolling Rocker", I implemented a component-based engine. However, after some researches, I discovered the model I used is not a pure Entity-Component-System model. \nTherefore, I started this project to learn the core fundamentals of game engineering and the popular ECS model.\n\nThe project is still in an very early stage of development. \nFollowing are some of the finished / under construction features:\n\n| Feature   | Description |\n| --------- | ------- |\n| Resource Manager | In charge of allocation and release of memory for game assets. Using reference counting technique to decide whether a resource should be released from memory. |\n| Scene Graph | Game level is stored as Scene. Each scene has a tree structure with nodes representing object transforms. |\n| Logging System | A custom text logger for debugging. |\n| Entity-Component-System Model (WIP) | Currently logics and datas are both held by Components which are updated by Systems. Logics should be moved into Systems in later development process to achieve pure ECS model. |\n| Object-oriented wrapper for OpenGL (WIP) | Wrap the functionality of OpenGL API into objects such as Shader Program, Material, Mesh, Uniform Variable, Rendering Context, Rendering Pipeline etc. |\n\nThird-party libraries used in this project: [GLFW][glfw-link], [glad][glad-link], [glm][glm-link], [tinyxml2][tinyxml2-link], [stb][stb-link]\n\n[glfw-link]: https://github.com/glfw/glfw\n[glad-link]: https://github.com/Dav1dde/glad\n[glm-link]: https://github.com/g-truc/glm\n[tinyxml2-link]: https://github.com/leethomason/tinyxml2\n[stb-link]: https://github.com/nothings/stb\n'},information:{type:"file",src:i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/ta-david-yu/DYEngine"},i.a.createElement("img",{alt:"gh-icon",src:"./img/github-x26.png",className:"icon-26"})))}},{type:"tool",title:"MWB in Unity",img:"./img/work/mwb-preview.png",gif:"./img/work/mwb-preview.gif",date:"2017.6 - 2018.6",job:"Programmer",team:"3",mediaTable:[{type:"image",src:"./img/work/mwb-media-00.png"},{type:"image",src:"./img/work/mwb-media-01.png"}],description:{type:"file",src:"MWB in Unity is an Unity tool made with two of my classmates as an academic project.\nWe implement an animation system in Unity Engine based on the paper [Many-worlds browsing for control of multibody dynamics](http://graphics.cs.cmu.edu/projects/mwb/). Users are able to transfer the simulated animation result into Unity built-in animation clip.\n\nI'm in charge of UI of the tool. Following is my contribution to the project:\n\n| Feature   | Description |\n| --------- | ------- |\n| Editor UI | Make use of Unity Editor API to create a user-friendly interface. Including a hierarchy window inside scene view for simulated object selection and a custom animation player window. |\n| Lines Rendering using Geometry Shader | There are tons of line segments needed to be rendered during the use of this tool, therefore lines rendering is done in one geometry shader to imporve performance. |\n| GPU-Accelerated Computing | In the system, users pick their desired worlds by selecting simulated path. Since there are thousands or even millions of possible worlds, there will also be the same amounts of lines representing each world. It's impossible to calculate which line users are currently selecting instantly on CPU. Therefore, line selection computation are moved to GPU using compute shader. |\n\nAlthough the tool is not as powerful as the original implementation, I acquired a lot of knowledge about how to build a tool in Unity Editor.\n\nCitation:\nChristopher D. Twigg and Doug L. James. Many-worlds browsing for control of multibody dynamics. ACM Transactions on Graphics (SIGGRAPH 2007), 26(3), August 2007.\n"},information:{type:"file",src:i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/alan0201tw/Unity_Many-Worlds_Browsing"},i.a.createElement("img",{alt:"gh-icon",src:"./img/github-x26.png",className:"icon-26"})))}},{type:"game",title:"Chain Destroyer",img:"./img/work/chain-destroyer-preview.png",gif:"./img/work/chain-destroyer-preview.gif",date:"2015.1 - 2015.1",job:"UI Programmer",team:"4",mediaTable:[{type:"image",src:"./img/work/chain-destroyer-media-00.png"},{type:"image",src:"./img/work/chain-destroyer-media-01.png"},{type:"image",src:"./img/work/chain-destroyer-media-02.png"}],description:{type:"file",src:"Chain Destroyer is a strategy game with RPG element made with three of my friends in 1 week. The core game mechanic is based on Chinese Blind Chess. My first Unity project and also my first complete game.\nI was quite new to Unity at the time so I only did UI programming and checkerboard system.\n\n| Feature   | Description |\n| --------- | ------- |\n| UI animation | Make use of DOTween to animate UI elements. |\n\n"},information:{type:"file",src:""}},{type:"game",title:"SurvivorQ",img:"./img/work/survivor-q-preview.png",gif:"./img/work/survivor-q-preview.gif",date:"2016.1 - 2016.1",job:"Designer, Programmer",team:"4",mediaTable:[{type:"image",src:"./img/work/survivor-q-media-00.png"},{type:"image",src:"./img/work/survivor-q-media-01.png"}],description:{type:"file",src:"SurvivorQ is a 1v1 3D fighting game made with three of my friends in 1 week. It is my second game made with Unity.\n\n| Feature   | Description |\n| --------- | ------- |\n| 3D Character Controller | A simple raycast-based character controller. |\n\nSome art assets are from Unity Asset Store.\n\n"},information:{type:"file",src:""}}],x=f(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={isModalShown:!1,work:null},a.openModal=a.openModal.bind(Object(g.a)(a)),a.closeModal=a.closeModal.bind(Object(g.a)(a)),a.generateWorksItem(e.currPage),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"openModal",value:function(e){var t=this.state;t.isModalShown=!0,t.work=e,this.setState(t)}},{key:"closeModal",value:function(){var e=this.state;e.isModalShown=!1,this.setState(e)}},{key:"generateWorksItem",value:function(e){var t=[];return M.forEach(function(a){a.type===e&&t.push(a)}),t}},{key:"render",value:function(){var e=this,t=this.props.currPage,a=this.generateWorksItem(t),n=a.length>=3?4:6,r=a.map(function(t){return i.a.createElement(b,{key:t.title,information:t,span:n,onClick:e.openModal})});return i.a.createElement("div",null,i.a.createElement(h.a,{container:!0,spacing:16,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(h.a,{item:!0,xs:12},"game"===t&&i.a.createElement("div",{className:"page-title left show"},"games"),"tool"===t&&i.a.createElement("div",{className:"page-title right show"},"tools/other")),i.a.createElement(h.a,{item:!0,lg:7,md:10,sm:12,xs:12},i.a.createElement(h.a,{container:!0,spacing:16,direction:"row"},r))),i.a.createElement(y.a,{contentLabel:"work-modal",isOpen:this.state.isModalShown,onRequestClose:this.closeModal,shouldCloseOnOverlayClick:!0,className:(this.props.windowWidth<1024?"sm-modal-size":"lg-modal-size")+" modal",overlayClassName:"modal-overlay",closeTimeoutMS:300},i.a.createElement("div",null,this.state.work&&i.a.createElement(C,{title:this.state.work.title,type:this.state.work.type,date:this.state.work.date,team:this.state.work.team,job:this.state.work.job,mediaTable:this.state.work.mediaTable,description:this.state.work.description.src,information:this.state.work.information.src})),i.a.createElement("img",{alt:"return",className:"modal-close-button",onClick:this.closeModal,src:"./img/return-btn.png"})))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={isHovered:!1},a.handleOnClick=a.handleOnClick.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleOnClick",value:function(e){this.props.onClick(this.props.pageName)}},{key:"render",value:function(){var e=this.props.pageName,t=e+"-button".concat(this.props.isActive?" is-active":"");return i.a.createElement("img",{alt:e.concat("-tab"),src:"./img/game-button-active.png",className:t,onClick:this.handleOnClick})}}]),t}(n.Component),I=function(e){return i.a.createElement(h.a,{item:!0})},P=i.a.createElement("div",null,i.a.createElement("div",{className:"subheader-text"},"game developer, game programmer"),i.a.createElement("div",{className:"about-text"},i.a.createElement("p",null,"Currently working on ",i.a.createElement("a",{href:"https://partygoosestudio.wixsite.com/gerritorythegame"},"Gerritory"),", a multiplayer party game.",i.a.createElement("br",null),"Following are some of my works"))),T=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).changePage=a.changePage.bind(Object(g.a)(a));return a.state={currPage:"game"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"changePage",value:function(e){this.setState({currPage:e})}},{key:"render",value:function(){var e=this.state.currPage;return i.a.createElement("div",null,i.a.createElement("div",{className:"top-content"},i.a.createElement(h.a,{container:!0,spacing:8,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(I,null),i.a.createElement(I,null),i.a.createElement(I,null),i.a.createElement(I,null),i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement("img",{alt:"ta-david-yu",src:"./img/ta-david-yu-mascot-x64.png",className:"logo"})),i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement("div",{className:"header-text"},"ta david yu")),i.a.createElement(h.a,{item:!0},i.a.createElement("a",{href:"https://twitter.com/TaDavidYu"},i.a.createElement("img",{alt:"twitter",src:"./img/twitter-x26.png",className:"icon-26"})),i.a.createElement("a",{href:"https://www.facebook.com/david.yu.7739814"},i.a.createElement("img",{alt:"facebook",src:"./img/facebook-x26.png",className:"icon-26"})),i.a.createElement("a",{href:"https://github.com/ta-david-yu"},i.a.createElement("img",{alt:"github",src:"./img/github-x26.png",className:"icon-26"}))),i.a.createElement(h.a,{item:!0,lg:6,md:12,sm:12,xs:!0},i.a.createElement("div",{className:"center-align"},P)))),i.a.createElement("div",{className:"bot-content"},i.a.createElement(p.CSSTransition,{in:!0,appear:!0,timeout:600,classNames:"page-tab-transition"},i.a.createElement("div",{className:"center-align"},i.a.createElement(D,{pageName:"game",isActive:"game"===e,onClick:this.changePage}),i.a.createElement(D,{pageName:"tool",isActive:"tool"===e,onClick:this.changePage}))),i.a.createElement(p.TransitionGroup,null,i.a.createElement(p.CSSTransition,{key:e,appear:!0,timeout:{appear:600,enter:300,exit:0},classNames:e+"-page-transition"},i.a.createElement(x,{currPage:e})))),i.a.createElement("footer",null,"website by ",i.a.createElement("span",null),i.a.createElement("a",{className:"footer-link",href:"mailto: d366095@gmail.com"},"David Yu"),", fonts by ",i.a.createElement("span",null),i.a.createElement("a",{className:"footer-link",href:"http://daniellinssen.net/"},"Daniel Linssen")))}}]),t}(n.Component);o.a.render(i.a.createElement(T,null),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.88b41e95.chunk.js.map