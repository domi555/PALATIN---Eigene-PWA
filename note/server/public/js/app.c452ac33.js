(function(e){function t(t){for(var r,s,c=t[0],o=t[1],l=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3efa":function(e,t,n){"use strict";n("589a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:""}},[r("img",{staticStyle:{width:"30px"},attrs:{src:n("cf05")}}),r("v-toolbar-title",{staticClass:"ms-2 text-body-1 font-weight-medium"},[e._v("Note")]),r("v-spacer"),r("v-btn",{staticClass:"me-2 orange lighten-1",attrs:{small:"",to:"/"}},[e._v("Note")]),r("v-btn",{staticClass:"amber orange lighten-1",attrs:{small:"",to:"/edit/new"}},[e._v("New")])],1),r("v-main",[r("router-view",{attrs:{serverAddress:e.serverAddress,offline:e.offline}})],1)],1)},i=[],s={name:"App",data:function(){return{serverAddress:"http://localhost:3000",offline:!1}},created:function(){var e=this;window.addEventListener("online",(function(){return e.offline=!1})),window.addEventListener("offline",(function(){return e.offline=!0}))}},c=s,o=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),f=n("40dc"),p=n("8336"),v=n("f6c4"),h=n("2fa4"),m=n("2a7f"),g=Object(o["a"])(c,a,i,!1,null,null,null),b=g.exports;u()(g,{VApp:d["a"],VAppBar:f["a"],VBtn:p["a"],VMain:v["a"],VSpacer:h["a"],VToolbarTitle:m["a"]});var w=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticClass:"ma-2"},e._l(e.notes.filter((function(e){return!e.isDeleted})),(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",md:"6",lg:"4"}},[n("v-card",{staticClass:"mx-2 mt-3 elevation-4"},[n("v-card-actions",[n("p",{staticClass:"ms-2 mb-0 text-subtitle-2"},[e._v(e._s(t.name))]),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"290","retain-focus":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"gray--text lighten-2",attrs:{small:"",plain:""}},"v-btn",a,!1),r),[e._v("Drop")])]}}],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h6"},[e._v(" Drop note ")]),n("v-card-text",[e._v("Notes can not be recovered.")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"mb-2 orange lighten-1 white--text",attrs:{small:""},on:{click:function(n){return e.deleteNote(t.id)}}},[e._v(" Drop ")])],1)],1)],1),n("v-btn",{staticClass:"orange lighten-1 white--text",attrs:{small:"",to:"/edit/"+t.id}},[e._v("Open")])],1)],1)],1)})),1)],1)},k=[],O=n("b85c"),C=n("5530"),R=n("1da1"),y=(n("96cf"),n("a9e3"),n("4de4"),n("d3b7"),n("159b"),n("d81d"),n("4e82"),n("b0c0"),n("99af"),n("bc3a")),j=n.n(y),_=n("1d25"),A={name:"Home",data:function(){return{db:null,notes:[],dialog:!1}},props:{serverAddress:{type:String},offline:{type:Boolean},id:{type:Number}},watch:{offline:function(e){var t=this;if(!e){var n=this.notes.filter((function(e){return e.isDeleted}));n.forEach((function(e){t.deleteOnlineNote(e.id)}))}}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.openDB();case 2:return t.next=4,e.getNotes();case 4:case"end":return t.stop()}}),t)})))()},methods:{openDB:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["a"])("notes",1,{upgrade:function(e){e.createObjectStore("notes",{keyPath:"id"})}});case 2:e.db=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getNotes:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.offline){t.next=5;break}return t.next=3,e.getStoredNotes();case 3:t.next=7;break;case 5:return t.next=7,e.getOnlineNotes();case 7:case"end":return t.stop()}}),t)})))()},getOnlineNotes:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j()({url:"".concat(e.serverAddress,"/notes"),method:"GET"});case 3:n=t.sent,r=n.data,e.notes=r.sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0})).map((function(e){return Object(C["a"])(Object(C["a"])({},e),{},{isDeleted:!1})})),e.db.clear("notes"),a=Object(O["a"])(e.notes),t.prev=8,a.s();case 10:if((i=a.n()).done){t.next=16;break}return s=i.value,t.next=14,e.db.put("notes",s);case 14:t.next=10;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](8),a.e(t.t0);case 21:return t.prev=21,a.f(),t.finish(21);case 24:t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](0),console.log(t.t1);case 29:case"end":return t.stop()}}),t,null,[[0,26],[8,18,21,24]])})))()},getStoredNotes:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.db.getAll("notes");case 2:n=t.sent,e.notes=n.sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0}));case 4:case"end":return t.stop()}}),t)})))()},deleteNote:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.offline){n.next=5;break}return n.next=3,t.deleteStoredNote(e);case 3:n.next=7;break;case 5:return n.next=7,t.deleteOnlineNote(e);case 7:return t.dialog=!1,n.next=10,t.getNotes();case 10:case"end":return n.stop()}}),n)})))()},deleteOnlineNote:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j()({url:"".concat(t.serverAddress,"/notes/").concat(e),method:"DELETE"});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},deleteStoredNote:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.db.get("notes",Number(e));case 2:r=n.sent,r.isDeleted=!0,t.db.put("notes",r);case 5:case"end":return n.stop()}}),n)})))()}}},N=A,S=n("b0af"),T=n("99d9"),F=n("62ad"),P=n("169a"),V=n("0fd9"),E=Object(o["a"])(N,x,k,!1,null,null,null),D=E.exports;u()(E,{VBtn:p["a"],VCard:S["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:F["a"],VDialog:P["a"],VRow:V["a"],VSpacer:h["a"]});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ma-3"},[n("v-text-field",{attrs:{filled:"",color:"orange lighten-1",label:"Name...",disabled:e.offline},on:{change:e.patchNote},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._l(e.fields,(function(t){return n("v-card",{key:t.id,staticClass:"mb-3 elevation-4"},[n("div",{staticClass:"pa-3"},[n("v-text-field",{attrs:{filled:"",color:"orange lighten-1",label:"Heading...",disabled:e.offline},on:{input:function(n){e.patchField(e.fields.find((function(e){return e.id==t.id})))}},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"field.name"}}),n("v-textarea",{attrs:{filled:"",color:"orange lighten-1",label:"Write...",disabled:e.offline},on:{input:function(n){return e.patchField(t)}},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"field.content"}}),t.attachment?n("img",{staticClass:"mb-3",attrs:{src:t.attachment}}):e._e(),n("v-btn",{staticClass:"me-2 orange lighten-1 white--text",attrs:{small:"",to:"/pen/"+t.id,disabled:e.offline}},[e._v("Pen input")]),t.attachment?e._e():n("v-btn",{staticClass:"me-2 orange lighten-1 white--text",attrs:{small:"",to:"/camera/"+t.id,disabled:e.offline}},[e._v("Take image")]),n("v-btn",{staticClass:"orange lighten-1 white--text",attrs:{small:""},on:{click:function(n){return e.deleteField(t.id)}}},[e._v("Delete")])],1)])})),n("v-btn",{staticClass:"orange lighten-1 white--text",attrs:{small:""},on:{click:e.postField}},[e._v("Add")])],2)},B=[],L=(n("7db0"),{name:"Note",data:function(){return{name:"New note",fields:[]}},props:{serverAddress:{type:String},offline:{type:Boolean},id:{type:String}},watch:{id:function(){"new"==this.id?(this.fields=[],this.getFields()):this.getFields()}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getFields();case 2:case"end":return t.stop()}}),t)})))()},methods:{getFields:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("new"!=e.id){t.next=14;break}return t.prev=1,t.next=4,j()({url:"".concat(e.serverAddress,"/notes"),method:"POST",data:{name:e.name}});case 4:n=t.sent,r=n.data,e.$router.push("/edit/".concat(r.id)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:t.next=25;break;case 14:return t.prev=14,t.next=17,j()({url:"".concat(e.serverAddress,"/fields/").concat(e.id),method:"GET"});case 17:a=t.sent,i=a.data,e.fields=i,t.next=25;break;case 22:t.prev=22,t.t1=t["catch"](14),console.log(t.t1);case 25:case"end":return t.stop()}}),t,null,[[1,9],[14,22]])})))()},postField:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j()({url:"".concat(e.serverAddress,"/fields"),method:"POST",data:{name:"...",content:"...",attachment:null,note_id:e.id}});case 3:return t.next=5,e.getFields();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},patchNote:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j()({url:"".concat(e.serverAddress,"/notes/").concat(e.id),method:"PATCH",data:{name:e.name}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},patchField:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j()({url:"".concat(t.serverAddress,"/fields/").concat(e.id),method:"PATCH",data:{name:e.name,content:e.content,attachment:e.attachment}});case 3:t.fields.find((function(t){return t.id==e.id})).content=e.content,t.fields.find((function(t){return t.id==e.id})).attachment=e.attachment,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteField:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j()({url:"".concat(t.serverAddress,"/fields/").concat(e),method:"DELETE"});case 3:return n.next=5,t.getFields();case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}}),H=L,M=(n("3efa"),n("8654")),U=n("a844"),G=Object(o["a"])(H,$,B,!1,null,"f980342e",null),W=G.exports;u()(G,{VBtn:p["a"],VCard:S["a"],VTextField:M["a"],VTextarea:U["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ma-3",on:{mousemove:e.paint,mousedown:e.penDOWN,mouseup:e.penUP}},[n("div",{staticClass:"d-flex flex-column align-start"},[n("canvas",{ref:"surface",staticClass:"mb-3 elevation-4"}),n("v-spacer"),n("div",[n("v-btn",{staticClass:"me-2 orange lighten-1 white--text",attrs:{small:""},on:{click:e.run}},[e._v("Done")]),n("v-btn",{staticClass:"orange lighten-2 white--text",attrs:{small:""},on:{click:e.clear}},[e._v("Clear")])],1),n("p",[e._v(e._s(e.result))])],1)])},X=[],Y=n("c9bf"),q=n.n(Y),z={name:"Pen",data:function(){return{canvas:null,enabled:!1,result:"",field:null}},props:{serverAddress:{type:String},id:{type:String}},mounted:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.canvas=e.$refs["surface"],e.canvas.width=window.innerWidth-50,e.canvas.height=window.innerHeight-170,e.context=e.canvas.getContext("2d"),e.context.fillStyle="#FFFFFF",t.prev=5,t.next=8,j()({url:"".concat(e.serverAddress,"/fields"),method:"GET"});case 8:n=t.sent,r=n.data,a=e.id,e.field=r.find((function(e){return e.id==Number(a)})),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](5),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[5,14]])})))()},methods:{paint:function(e){if(this.enabled){var t=this.canvas.getBoundingClientRect(),n=(e.clientX-t.left)*this.canvas.width/t.width,r=(e.clientY-t.top)*this.canvas.height/t.height;this.context.lineTo(n,r),this.context.stroke()}},penDOWN:function(e){this.enabled=!0;var t=this.canvas.getBoundingClientRect();this.context.moveTo(e.clientX-t.left,e.clientY-t.top)},penUP:function(){this.enabled=!1},run:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.a.recognize(e.canvas,"eng");case 2:n=t.sent,e.result=n.data.text,setTimeout(Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j()({url:"".concat(e.serverAddress,"/fields/").concat(e.field.id),method:"PATCH",data:{name:e.field.name,content:e.result,attachment:e.field.attachment}});case 3:e.$router.back(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),2e3);case 5:case"end":return t.stop()}}),t)})))()},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.beginPath()}}},I=z,K=Object(o["a"])(I,J,X,!1,null,"38b7aa20",null),Q=K.exports;u()(K,{VBtn:p["a"],VSpacer:h["a"]});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"d-flex flex-column align-center"},[n("video",{ref:"video",attrs:{autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}}),n("v-spacer"),n("div",{staticClass:"mb-4"},[n("v-btn",{staticClass:"me-2 orange lighten-1 white--text",attrs:{small:""},on:{click:e.take}},[e._v("Take")]),n("v-btn",{staticClass:"orange lighten-1 white--text",attrs:{small:""},on:{click:e.upload}},[e._v("Select")])],1),n("canvas",{ref:"canvas",staticClass:"d-none"}),n("input",{ref:"upload",staticClass:"d-none",attrs:{type:"file",accept:".jpg,.png"},on:{change:e.picked}})],1)},ee=[],te={name:"Camera",data:function(){return{video:null,media:null,select:!1,file:null,field:null}},props:{serverAddress:{type:String},id:{type:Number}},mounted:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.video=e.$refs["video"],e.canvas=e.$refs["canvas"],e.context=e.canvas.getContext("2d"),t.prev=3,t.next=6,navigator.mediaDevices.getUserMedia({video:!0,facingMode:{exact:"environment"}});case 6:return e.media=t.sent,e.video.srcObject=e.media,e.video.play(),t.next=11,j()({url:"".concat(e.serverAddress,"/fields"),method:"GET"});case 11:n=t.sent,r=n.data,a=e.id,e.field=r.find((function(e){return e.id==Number(a)})),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](3),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()},methods:{take:function(){var e=this,t=this.media.getTracks()[0],n=t.getSettings();this.canvas.width=n.width,this.canvas.height=n.height,this.context.drawImage(this.video,0,0,n.width,n.height),this.canvas.toBlob(function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=new FileReader,r.readAsDataURL(n),r.onloadend=Object(R["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.result,t.next=3,j()({url:"".concat(e.serverAddress,"/fields/").concat(e.field.id),method:"PATCH",data:{name:e.field.name,content:e.field.content,attachment:n}});case 3:e.$router.back();case 4:case"end":return t.stop()}}),t)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},upload:function(){var e=this;this.select=!0,window.addEventListener("focus",(function(){e.select=!1}),{once:!0}),this.$refs.upload.click()},picked:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}}))},t.file=e.target.files[0],n.next=4,r(t.file);case 4:return a=n.sent,n.next=7,j()({url:"".concat(t.serverAddress,"/fields/").concat(t.field.id),method:"PATCH",data:{name:t.field.name,content:t.field.content,attachment:a}});case 7:t.$router.back();case 8:case"end":return n.stop()}}),n)})))()},ready:function(){}}},ne=te,re=(n("dfa2"),Object(o["a"])(ne,Z,ee,!1,null,"258517f1",null)),ae=re.exports;u()(re,{VBtn:p["a"],VSpacer:h["a"]}),r["a"].use(w["a"]);var ie=[{path:"/",name:"Notes",component:D},{path:"/edit/:id",name:"Edit",component:W,props:!0},{path:"/pen/:id",name:"Pen",component:Q,props:!0},{path:"/camera/:id",name:"Camera",component:ae,props:!0}],se=new w["a"]({mode:"history",base:"/",routes:ie}),ce=se,oe=n("f309");r["a"].use(oe["a"]);var le=new oe["a"]({}),ue=n("9483");Object(ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:ce,vuetify:le,render:function(e){return e(b)}}).$mount("#app")},"589a":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.1d4e6f21.png"},dcb5:function(e,t,n){},dfa2:function(e,t,n){"use strict";n("dcb5")}});
//# sourceMappingURL=app.c452ac33.js.map