(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c.n(s),n=c(19),l=c.n(n),a=(c(27),c(10)),o=c.n(a),r=c(20),d=c(5),j=c(6),b=c(8),m=c(7),h=(c(29),c(21)),x=c(0),O=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(d.a)(this,c);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("form",{onSubmit:this.onFormSubmit,className:"container",children:Object(x.jsxs)("div",{className:"form-group row",children:[Object(x.jsx)("div",{className:"col-md-11 col-11 search_div",children:Object(x.jsxs)("div",{className:"row ",children:[Object(x.jsx)("input",Object(h.a)({type:"search",className:"form-control",placeholder:"Search",value:this.state.term,onChange:this.onInputChange},"className","col-md-11 col-10 search_input")),Object(x.jsx)("button",{className:"col-md-1 col-1  search_btn",title:"Search",children:Object(x.jsx)("i",{class:"bi bi-search "})})]})}),Object(x.jsx)("button",{className:"col-md-1 col-1 search_mic",title:"Search with your voice",children:Object(x.jsx)("i",{class:"bi bi-mic-fill"})})]})})})}}]),c}(i.a.Component),u=O,v=c(22),p=c.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:15,key:"AIzaSyDUqCm4YhU2cn_CeTpVWYYpep4pdceepXA"}}),N=function(e){var t=e.video,c=e.onSelectVideo;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"col-md-12",onClick:function(){c(t)},children:Object(x.jsxs)("div",{className:"row border p-2",style:{cursor:"pointer"},children:[Object(x.jsx)("div",{className:"col-5",children:Object(x.jsx)("img",{height:"130px",width:"180px",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url})}),Object(x.jsx)("div",{className:"col-6",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-1",children:"fd"}),Object(x.jsxs)("div",{className:"col-10",children:[Object(x.jsx)("h6",{children:t.snippet.title}),Object(x.jsx)("h6",{children:t.snippet.channelTitle})]})]})})]})})})},f=function(e){var t=e.videos,c=e.onSelectVideo,s=t.map((function(e,t){return Object(x.jsx)(N,{video:e,onSelectVideo:c},t)}));return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:s})})},S=function(e){var t=e.video,c=e.onSelectVideo;return t?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"col-md-12 videoComponent",onClick:function(){c(t)},children:Object(x.jsxs)("div",{className:"row border p-2 ",style:{cursor:"pointer"},children:[Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsx)("img",{height:"150px",width:"250px",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url})}),Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-2 mt-2",children:Object(x.jsx)("i",{class:"bi bi-person-circle col-md-1 m-2 m-md-3 extra_ions",title:"Notifications"})}),Object(x.jsxs)("div",{className:"col-8",children:[Object(x.jsx)("h6",{children:t.snippet.title}),Object(x.jsx)("h6",{children:t.snippet.channelTitle})]}),Object(x.jsx)("div",{className:"col-1 mt-2",children:Object(x.jsx)("i",{class:"bi bi-three-dots-vertical extra_ions"})})]})})]})})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:"no video..."})})},g=function(e){var t=e.videos,c=e.onSelectVideo,s=t.map((function(e,t){return Object(x.jsx)(S,{video:e,onSelectVideo:c},t)}));return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:s})})},w=function(e){var t=e.video;if(!t)return Object(x.jsx)("div",{children:"Loading..."});var c="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:c,title:"video Player",className:"w-100",style:{height:"380px"}})}),Object(x.jsxs)("div",{className:"border p-2",children:[Object(x.jsx)("h6",{className:"text-warning",children:t.kind}),Object(x.jsx)("h4",{children:t.snippet.title}),Object(x.jsx)("h5",{className:"text-danger",children:t.snippet.channelTitle}),Object(x.jsxs)("h8",{className:"text-primary",children:["Published at : ",t.snippet.publishedAt]}),Object(x.jsx)("p",{children:t.snippet.description})]})]})},y=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(d.a)(this,c);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:""},e.onSelectVideo=function(t){e.setState({selectedVideo:t})},e.onTermSubmit=function(){var t=Object(r.a)(o.a.mark((function t(c){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:c}});case 2:s=t.sent,e.setState({videos:s.data.items,selectedVideo:""});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.onTermSubmit("craft")}},{key:"render",value:function(){return this.state.selectedVideo?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row yt",children:[Object(x.jsxs)("h4",{className:"text-center row ",children:[Object(x.jsx)("div",{className:"col-md-1 d-none d-sm-block",children:Object(x.jsx)("i",{class:"bi bi-list"})}),Object(x.jsxs)("div",{className:"col-md-2 col-12",children:[Object(x.jsx)("i",{className:"bi bi-youtube "}),"YouTube"]}),Object(x.jsxs)("div",{className:"col-md-5 col-12",children:[" ",Object(x.jsx)(u,{onFormSubmit:this.onTermSubmit})]}),Object(x.jsxs)("div",{className:"col-md-4 col-12",children:[Object(x.jsx)("i",{class:"bi bi-camera-reels-fill col-md-1 m-2 m-md-3 extra_ions",title:"Create"}),Object(x.jsx)("i",{class:"bi bi-app-indicator col-md-1 m-2 m-md-3 extra_ions",title:"YouTube Apps"}),Object(x.jsx)("i",{class:"bi bi-bell-fill col-md-1 m-2 m-md-3 extra_ions",title:"Notifications"}),Object(x.jsx)("i",{class:"bi bi-person-circle col-md-1 m-2 m-md-3 extra_ions",title:"Notifications"})]})]}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{className:"row my-2",children:[Object(x.jsx)("div",{className:"col-md-7 col-12",children:Object(x.jsx)(w,{video:this.state.selectedVideo})}),Object(x.jsx)("div",{className:"col-md-5 col12",children:Object(x.jsx)(f,{videos:this.state.videos,onSelectVideo:this.onSelectVideo})})]})]})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row yt",children:[Object(x.jsxs)("h4",{className:"text-center row ",children:[Object(x.jsx)("div",{className:"col-md-1 d-none d-sm-block",children:Object(x.jsx)("i",{class:"bi bi-list"})}),Object(x.jsxs)("div",{className:"col-md-2 col-12",children:[Object(x.jsx)("i",{className:"bi bi-youtube "}),"YouTube"]}),Object(x.jsxs)("div",{className:"col-md-5 col-12",children:[" ",Object(x.jsx)(u,{onFormSubmit:this.onTermSubmit})]}),Object(x.jsxs)("div",{className:"col-md-4 col-12",children:[Object(x.jsx)("i",{class:"bi bi-camera-reels-fill col-md-1 m-2 m-md-3 extra_ions",title:"Create"}),Object(x.jsx)("i",{class:"bi bi-app-indicator col-md-1 m-2 m-md-3 extra_ions",title:"YouTube Apps"}),Object(x.jsx)("i",{class:"bi bi-bell-fill col-md-1 m-2 m-md-3 extra_ions",title:"Notifications"}),Object(x.jsx)("i",{class:"bi bi-person-circle col-md-1 m-2 m-md-3 extra_ions",title:"Notifications"})]})]}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{className:"row ",children:[Object(x.jsx)("div",{className:"col-md-3 col-12  ",children:Object(x.jsx)(g,{videos:this.state.videos,onSelectVideo:this.onSelectVideo})}),Object(x.jsx)("div",{className:"col-md-3 col-12",children:Object(x.jsx)(g,{videos:this.state.videos,onSelectVideo:this.onSelectVideo})}),Object(x.jsx)("div",{className:"col-md-3 col-12 ",children:Object(x.jsx)(g,{videos:this.state.videos,onSelectVideo:this.onSelectVideo})}),Object(x.jsx)("div",{className:"col-md-3 col-12 ",children:Object(x.jsx)(g,{videos:this.state.videos,onSelectVideo:this.onSelectVideo})})]})]})})}}]),c}(i.a.Component),V=y,F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),i(e),n(e),l(e)}))};l.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),F()}},[[49,1,2]]]);
//# sourceMappingURL=main.0b16d126.chunk.js.map