(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,n){e.exports=n(48)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(23),i=n.n(c),s=(n(34),n(6)),l=n(7),r=n(10),m=n(8),u=n(9),h=n(24),d=n.n(h);n(35),a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(26),b=n(12),p=(n(36),n(49)),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={memes:[],index:-1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState({index:0===this.state.memes.length?-1:Math.floor(Math.random()*this.state.memes.length)})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){console.log("check",t),e.setState({memes:t.data.memes,index:0===t.data.memes.length?-1:Math.floor(Math.random()*t.data.memes.length)}),console.log("state",e.state.memes)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Meme"),o.a.createElement("div",null,-1===this.state.index?"notfound":o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{src:this.state.memes[this.state.index].url,alt:"loading",height:"50%",width:"50%"})),o.a.createElement(p.a,{onClick:this.handleClick.bind(this),className:"button"},"generate")))}}]),t}(a.Component),g=(n(39),n(16)),v=n.n(g),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={quotes:v.a.getRandomQuote()},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){console.log("quotecheck",v.a.getRandomQuote()),this.setState({quotes:v.a.getRandomQuote()})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Quotes"),o.a.createElement("div",{className:"quotes"},this.state.quotes),o.a.createElement(p.a,{onClick:this.handleClick.bind(this),className:"button"},"Generate"))}}]),t}(a.Component),E=(n(41),n(50)),O=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/".concat(C).concat(e))}},{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement(p.a,{className:"button1",color:"secondary",size:"lg",block:!0,onClick:this.handleClick.bind(this,"/meme")},"Meme Generator"),o.a.createElement(p.a,{className:"button2",color:"secondary",size:"lg",block:!0,onClick:this.handleClick.bind(this,"/quotes")},"Quote Generator"))}}]),t}(a.Component),C="meme_generator",y=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/".concat(C,"/meme"),component:k}),o.a.createElement(b.a,{exact:!0,path:"/".concat(C,"/quotes"),component:j}),o.a.createElement(b.a,{path:"/",component:O})))}}]),t}(a.Component);i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.0a086e21.chunk.js.map