(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/pozadie_compress.eb38b98b.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/hanzlik_compress.92830eed.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/svadobna_compress.7a14aa44.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/stuzkova-v3-compress.4af9038e.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/visuals_compress.786e3b0f.png"},53:function(e,t,a){e.exports=a(77)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),r=a.n(i),c=a(24),s=a(10),d=(a(62),a(12)),l=a(14),u=a(15),m=a(17),p=a(16),h=a(18),v=a(6),g="TOGGLE_CARD_CONTAINER",f=function(){return{type:g}},k=(a(63),function(e){function t(e,a){var n,o=a.toggleProductionContainer;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e,{toggleProductionContainer:o}))).state={showComponent:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a.div,{onClick:this.props.toggleProductionContainer,className:"production-card",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5},whileHover:{scale:1.1,boxShadow:"0px 0px 15px #fff"}},o.a.createElement("div",{className:"production-image",style:{backgroundImage:"url(".concat(this.props.imgUrl,")")}}),o.a.createElement(v.a.div,{className:"hover-background",initial:{opacity:0},animate:{opacity:.5,backgroundColor:"#000"},transition:{duration:1.5}}),o.a.createElement(v.a.h1,{className:"card-title",initial:{opacity:0,y:-100},animate:{opacity:1,y:0},transition:{duration:1.5}},this.props.name),o.a.createElement(v.a.div,{className:"card-content",initial:{opacity:0},whileHover:{opacity:1},transition:{duration:1.5}},o.a.createElement(v.a.p,{className:"card-text"},this.props.text)))}}]),t}(o.a.Component)),b=Object(s.b)(null,function(e){return{toggleProductionContainer:function(){return e(f())}}})(k),y=(a(64),function(e){return o.a.createElement("div",{className:"production-list"},o.a.createElement("div",{className:"production-list-row"},o.a.createElement(b,{key:e.productions[0].id,name:e.productions[0].name,text:e.productions[0].text,imgUrl:e.productions[0].img,url:e.productions[0].url}),o.a.createElement(b,{key:e.productions[1].id,name:e.productions[1].name,text:e.productions[1].text,imgUrl:e.productions[1].img,url:e.productions[1].url})),o.a.createElement("div",{className:"production-list-row"},o.a.createElement(b,{key:e.productions[2].id,name:e.productions[2].name,text:e.productions[2].text,imgUrl:e.productions[2].img,url:e.productions[2].url}),o.a.createElement(b,{key:e.productions[3].id,name:e.productions[3].name,text:e.productions[3].text,imgUrl:e.productions[3].img,url:e.productions[3].url})))}),E=a(44),j=a.n(E),C=(a(70),function(e){return o.a.createElement("div",{className:"video-component"},o.a.createElement("div",{className:"player-wrapper"},o.a.createElement(j.a,{className:"react-player",url:e.video,width:"100%",height:"100%",controls:!0,onDuration:e.getVideoDuration,onProgress:function(e){return console.log(e)},playing:e.isPlaying})))}),N=(a(71),Object(s.b)(null,function(e){return{toggleProductionContainer:function(){return e(f())}}})(function(e){var t=e.toggleProductionContainer;return o.a.createElement(v.a.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:1},className:"card-container",onClick:t},o.a.createElement("h1",{className:"title"},"Hanzlik.sk"),o.a.createElement("div",{className:"production"},o.a.createElement("div",{className:"desc"},o.a.createElement("p",null,"Hlavn\xe1 a z\xe1rove\u0148 v\u0161eobecne zameran\xe1 produkcia na tvorenie videoklipov, reklamn\xfdch videi, aftermovie's a podobne zameran\xfdch vide\xed.")),o.a.createElement("button",{className:"btn"},"Preis\u0165 na web"),o.a.createElement("div",{className:"sample"},o.a.createElement(C,{video:"https://www.youtube.com/watch?v=l4qVw8OxjHc",playing:!0}))))})),w=a(33),x=a.n(w),O=a(45),T=a.n(O),z=a(46),I=a.n(z),P=a(47),D=a.n(P),S=a(48),L=a.n(S),H=(a(72),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={backgroundImg:x.a,productions:[{id:1,name:"Hanzlik.sk",text:"Hlavn\xe1 a z\xe1rove\u0148 v\u0161eobecne zameran\xe1 produkcia na tvorenie videoklipov, reklamn\xfdch videi, aftermovie's a podobne zameran\xfdch vide\xed.",img:T.a,url:"http://hanzlik.sk/"},{id:2,name:"Stu\u017ekov\xe1 produkcia",text:"Produkcia zameran\xe1 na tvorbu profesion\xe1lnych vide\xed zo Stu\u017ekov\xfdch sl\xe1vnost\xed. Produkcia poskytuje r\xf4zne bal\xed\u010dky pre \u0161tudentov.",img:D.a,url:"http://hanzlik.sk/"},{id:3,name:"Svadobn\xe1 produkcia",text:"Produkcia zameran\xe1 na tvorbu profesion\xe1lnych svadobn\xfdch vide\xed. Produkcia disponuje rozsiahlym t\xedmom kameramanov.",img:I.a,url:"http://svadobnaprodukcia.sk/"},{id:4,name:"Visuals for sale",text:"Produkcia zameran\xe1 na tvorbu a predaj vizu\xe1lov a 'one take' videoklipov.",img:L.a,url:"https://www.instagram.com/visualsforsale/?fbclid=IwAR1EA4kAXCKIMJn5bSt72v7vwMDu0FjxFtQNi9XhHk1myfT_RWf6gIp3qv4"}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props),o.a.createElement("div",{className:"homepage",style:{backgroundImage:"url(".concat(x.a,")")}},this.props.production.hidden?o.a.createElement(y,{productions:this.state.productions}):o.a.createElement(N,null))}}]),t}(o.a.Component)),B=Object(s.b)(function(e){return{production:e.production}})(H),U=a(49),V=(a(73),a(25)),_=function(e){return o.a.createElement(v.a.div,{className:"todo-item",animate:{transition:{ease:"easeOut",duration:1}}},o.a.createElement("div",{className:"todo-time"},e.time),o.a.createElement("div",{className:"todo-text"},e.text),o.a.createElement(v.a.div,{className:"todo-delete",initial:{opacity:0},whileHover:{opacity:1,x:0},onClick:e.handleCLickDelButton},o.a.createElement(V.b,null)))},J=(a(74),function(e){return o.a.createElement("div",{className:"todo-input"},o.a.createElement("input",{className:"input-time",type:"text",placeholder:"5:45",value:e.addTime,onChange:e.onTimeInputChange}),o.a.createElement("input",{className:"input",type:"text",placeholder:"Va\u0161a pripomienka",value:e.addTodo,onChange:e.onInputChange}),o.a.createElement("button",{className:"btn-submit",type:"submit",onClick:e.handleCLick},o.a.createElement(V.a,null)))}),A=(a(75),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).getVideo=function(t){console.log("searching for the video"),fetch(e.state.serverData+"get-video",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then(function(e){return e.json()}).then(function(t){e.setState({videoUrl:t[0].video})})},e.getTodos=function(){fetch(e.state.serverData+"get-todo").then(function(e){return e.json()}).then(function(t){e.setState({todos:t})})},e.onInputChange=function(t){e.setState({addTodo:t.target.value})},e.onTimeInputChange=function(t){e.setState({addTime:t.target.value})},e.handleCLickButton=function(){var t=e.state,a=t.addTime,n=t.addTodo;""!==a&&""!==n?fetch(e.state.serverData+"add-todo",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({time:a,text:n})}).then(function(e){return e.json()}).then(function(){e.getTodos(),e.setState({addTime:"",addTodo:""})}):alert("Vlo\u017ete pripomienku a \u010das")},e.handleCLickDelButton=function(t){fetch(e.state.serverData+"delete-todo",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then(function(e){return e.json()}).then(function(){e.getTodos()})},e.state={serverData:"http://localhost:3000/",id:"",videoUrl:"",videoDuration:"",videoProgress:"",isLogginIn:!0,isPlaying:!1,addTodo:"",addTime:"",todos:[]},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getVideo(1),this.getTodos()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"video-section"},o.a.createElement("div",{className:"container"},o.a.createElement(C,{video:this.state.videoUrl}),o.a.createElement("div",{className:"todolist"},o.a.createElement(J,{addTime:this.state.addTime,addTodo:this.state.addTodo,handleCLick:this.handleCLickButton,onInputChange:this.onInputChange,onTimeInputChange:this.onTimeInputChange}),o.a.createElement("div",{className:"list"},this.state.todos.map(function(t){var a=t.id,n=Object(U.a)(t,["id"]);return o.a.createElement(_,Object.assign({key:a},n,{handleCLickDelButton:function(){return e.handleCLickDelButton(a)}}))})))))}}]),t}(o.a.Component));var R=function(){return o.a.createElement(c.a,{basename:"/tomashanzlik-final"},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:B}),o.a.createElement(d.a,{path:"/video",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(13),W=a(51),q=a.n(W),F=a(52),G={hidden:!0},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;switch((arguments.length>1?arguments[1]:void 0).type){case g:return Object(F.a)({},e,{hidden:!e.hidden});default:return e}},K=Object(M.c)({production:X}),Q=[q.a],$=Object(M.d)(K,M.a.apply(void 0,Q));r.a.render(o.a.createElement(s.a,{store:$},o.a.createElement(c.a,null,o.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.b1e39be5.chunk.js.map