(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6094de7b"],{"0a4c":function(t,e,a){"use strict";a("f48c")},1443:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"main"}},[e("div",{staticClass:"page"},[e("div",{staticClass:"villa"},[e("div",{staticClass:"container"},[e("snow"),t._m(0),e("div",{staticClass:"board"},[e("Board")],1)],1)])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"},[e("div",{staticClass:"banner_tool"},[e("ul",[e("li",[t._v("빌")]),e("li",[t._v("라")]),e("li",[t._v("*")]),e("li",[t._v("아")]),e("li",[t._v("파")]),e("li",[t._v("트")]),e("li",[t._v("*")]),e("li",[t._v("원")]),e("li",[t._v("룸")]),e("li",[e("br")]),e("li",[t._v("청")]),e("li",[t._v("소")])])])])}],i=a("8b3c"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"board-container"},["list"===t.currentPage?e("div",{staticClass:"header-container"},[e("div",{staticClass:"header-buttons"},[e("button",{staticClass:"write-button",on:{click:function(e){return t.setPage("write")}}},[t._v("글작성")]),e("button",{staticClass:"home-button",on:{click:t.goHome}},[t._v("처음 페이지")])]),e("div",{staticClass:"search-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text",placeholder:"작성자 또는 제목 검색"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),e("button",{staticClass:"search-button",on:{click:t.searchPosts}},[t._v("검색")])])]):t._e(),"list"===t.currentPage?e("div",[e("table",{staticClass:"board-table"},[t._m(0),e("tbody",t._l(t.paginatedAndFilteredList,(function(a,r){return e("tr",{key:r,staticClass:"board_imfo"},[e("td",[t._v(t._s(t.getRowNumber(r)))]),e("td",[t._v(t._s(t.getMaskedWriter(a.writer)))]),e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.date))]),e("td",[t._v(t._s(a.modifiedDate||"-"))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.inputPassword,expression:"item.inputPassword"}],staticClass:"password-input",attrs:{type:"password",placeholder:"비밀번호"},domProps:{value:a.inputPassword},on:{input:function(e){e.target.composing||t.$set(a,"inputPassword",e.target.value)}}})]),e("td",[e("button",{staticClass:"view-button",attrs:{disabled:!t.isPasswordValid(a)},on:{click:function(e){t.viewPost(r+(t.currentPageNumber-1)*t.itemsPerPage)}}},[t._v("\n              보기\n            ")])]),e("td",[e("button",{staticClass:"edit-button",attrs:{disabled:!t.isPasswordValid(a)},on:{click:function(e){t.editPost(r+(t.currentPageNumber-1)*t.itemsPerPage)}}},[t._v("\n              수정\n            ")])]),e("td",[e("button",{staticClass:"delete-button",attrs:{disabled:!t.isPasswordValid(a)},on:{click:function(e){t.deletePost(r+(t.currentPageNumber-1)*t.itemsPerPage)}}},[t._v("\n              삭제\n            ")])]),e("td",[e("button",{staticClass:"answer-button",style:{backgroundColor:a.answer?"#f0ad4e":"#f8f8f8"},attrs:{disabled:a.inputPassword!==t.adminPassword},on:{click:function(e){t.answerPost(r+(t.currentPageNumber-1)*t.itemsPerPage)}}},[t._v("\n                답변\n              ")])]),e("td",[a.answer?e("button",{staticClass:"view-button",style:{backgroundColor:a.answer?"#7eb2ee":"#f8f8f8"},attrs:{disabled:!t.isPasswordValid(a)},on:{click:function(e){t.viewPost(r+(t.currentPageNumber-1)*t.itemsPerPage)}}},[t._v("\n              답변 확인\n            ")]):t._e()])])})),0)]),e("div",{staticClass:"pagination"},[e("button",{staticClass:"prev-button",on:{click:t.prevPage}},[t._v("<")]),e("span",[t._v(t._s(t.currentPageNumber)+" / "+t._s(t.totalPages))]),e("button",{staticClass:"next-button",on:{click:t.nextPage}},[t._v(">")])])]):t._e(),["write","edit"].includes(t.currentPage)?e("div",{staticClass:"formstlye"},[e("div",{staticClass:"form-container"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-writer"},[t._v("작성자")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.writer,expression:"formData.writer"}],attrs:{type:"text"},domProps:{value:t.formData.writer},on:{input:function(e){e.target.composing||t.$set(t.formData,"writer",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-title"},[t._v("제목")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.title,expression:"formData.title"}],attrs:{type:"text"},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-password"},[t._v("비밀번호")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"필수 입니다."},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),e("div",{staticClass:"w-date"},[e("label",{staticClass:"label-date"},[t._v("작성일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.date,expression:"formData.date"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.date},on:{input:function(e){e.target.composing||t.$set(t.formData,"date",e.target.value)}}})]),e("div",{staticClass:"w-date"},[e("label",{staticClass:"label-modified-date"},[t._v("수정일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.modifiedDate,expression:"formData.modifiedDate"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.modifiedDate},on:{input:function(e){e.target.composing||t.$set(t.formData,"modifiedDate",e.target.value)}}})]),"answer"!==t.currentPage?e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-content"},[t._v("내용")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],staticClass:"large-textarea",domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}})]):t._e(),e("div",{staticClass:"form-buttons"},[e("button",{staticClass:"cancel-button yellow smaller",on:{click:t.goHome}},[t._v("취소")]),e("button",{staticClass:"submit-button red smaller",on:{click:t.submitPost}},[t._v("\n          "+t._s("write"===t.currentPage?"제출":"완료")+"\n        ")])])])]):t._e(),"view"===t.currentPage?e("div",[e("div",{staticClass:"view-container"},[e("h2",[t._v(t._s(t.formData.title))]),e("p",[e("strong",[t._v("작성자")]),t._v(" "+t._s(t.formData.writer))]),e("p",[e("strong",[t._v("작성일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.date,expression:"formData.date"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.date},on:{input:function(e){e.target.composing||t.$set(t.formData,"date",e.target.value)}}})]),e("p",[e("strong",[t._v("수정일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.modifiedDate,expression:"formData.modifiedDate"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.modifiedDate},on:{input:function(e){e.target.composing||t.$set(t.formData,"modifiedDate",e.target.value)}}})]),t._m(1),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],staticClass:"large-textarea",attrs:{disabled:""},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),t.formData.answer?e("div",{staticClass:"answers-section"},[e("h3",[t._v("답변")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.answer,expression:"formData.answer"}],staticClass:"large-textarea",attrs:{disabled:""},domProps:{value:t.formData.answer},on:{input:function(e){e.target.composing||t.$set(t.formData,"answer",e.target.value)}}})]):t._e(),e("button",{staticClass:"home-button",on:{click:t.goHome}},[t._v("목록으로")])])]):t._e(),"answer"===t.currentPage?e("div",[e("div",{staticClass:"form-container"},[e("h3",[t._v("답변 작성/수정")]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-writer"},[t._v("작성자")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.writer,expression:"formData.writer"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.writer},on:{input:function(e){e.target.composing||t.$set(t.formData,"writer",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-title"},[t._v("제목")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.title,expression:"formData.title"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value)}}})]),e("div",{staticClass:"w-date"},[e("label",{staticClass:"label-date"},[t._v("작성일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.date,expression:"formData.date"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.date},on:{input:function(e){e.target.composing||t.$set(t.formData,"date",e.target.value)}}})]),e("div",{staticClass:"w-date"},[e("label",{staticClass:"label-modified-date"},[t._v("수정일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.modifiedDate,expression:"formData.modifiedDate"}],attrs:{type:"text",disabled:""},domProps:{value:t.formData.modifiedDate},on:{input:function(e){e.target.composing||t.$set(t.formData,"modifiedDate",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-content"},[t._v("내용")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],staticClass:"large-textarea",attrs:{disabled:""},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"label-answer"},[t._v("답변")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.answer,expression:"formData.answer"}],staticClass:"large-textarea",attrs:{placeholder:"답변 내용을 작성하거나 수정하세요."},domProps:{value:t.formData.answer},on:{input:function(e){e.target.composing||t.$set(t.formData,"answer",e.target.value)}}})]),e("div",{staticClass:"form-buttons"},[e("button",{staticClass:"cancel-button yellow smaller",on:{click:t.goHome}},[t._v("취소")]),e("button",{staticClass:"submit-button red smaller",on:{click:t.submitPost}},[t._v("완료")])])])]):t._e(),t.showPasswordWarning?e("div",{staticClass:"modal-overlay"},[e("div",{staticClass:"modal-content"},[e("p",[t._v("비밀번호가 틀렸습니다. 다시 확인해주세요!")]),e("button",{staticClass:"modal-button",on:{click:t.closePasswordWarning}},[t._v("확인")])])]):t._e(),t.showPasswordRequiredModal?e("div",{staticClass:"modal-overlay"},[e("div",{staticClass:"modal-content"},[e("p",[t._v("비밀번호를 입력해주세요!")]),e("button",{staticClass:"modal-button",on:{click:t.closePasswordRequiredModal}},[t._v("확인")])])]):t._e()])},n=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("번호")]),e("th",[t._v("작성자")]),e("th",[t._v("제목")]),e("th",[t._v("작성일")]),e("th",[t._v("수정일")]),e("th",[t._v("비밀번호")]),e("th",[t._v("보기")]),e("th",[t._v("수정")]),e("th",[t._v("삭제")]),e("th",[t._v("답변")]),e("th",[t._v("답변 확인")])])])},function(){var t=this,e=t._self._c;return e("p",[e("strong",[t._v("내용")])])}],l=(a("14d9"),a("0643"),a("2382"),{data(){return{currentPage:"list",currentPageNumber:1,itemsPerPage:10,adminPassword:"110110",searchQuery:"",boardList:[],formData:{writer:"",title:"",content:"",password:"",inputPassword:"",answer:"",date:"",modifiedDate:""},editIndex:null,showPasswordWarning:!1,showPasswordRequiredModal:!1}},computed:{paginatedAndFilteredList(){const t=this.searchQuery?this.boardList.filter(t=>t.writer.includes(this.searchQuery)||t.title.includes(this.searchQuery)):this.boardList,e=(this.currentPageNumber-1)*this.itemsPerPage,a=e+this.itemsPerPage;return t.slice().reverse().slice(e,a)},totalPages(){return Math.ceil(this.boardList.length/this.itemsPerPage)}},methods:{isPasswordValid(t){return t.inputPassword===t.password||t.inputPassword===this.adminPassword},setPage(t){this.resetFormData(),this.currentPage=t},editPost(t){const e=this.boardList.length-(this.currentPageNumber-1)*this.itemsPerPage-t-1,a=this.boardList[t];this.isPasswordValid(a)&&(this.formData={...a},this.editIndex=e,this.currentPage="edit")},answerPost(t){const e=this.boardList[t];this.isPasswordValid(e)&&(void 0===e.answer||null===e.answer?this.$set(this.boardList,t,{...e,answer:!0}):this.$set(this.boardList,t,{...e,answer:!e.answer}),this.formData={...e,answer:e.answer||""},this.editIndex=t,this.currentPage="answer")},getMaskedWriter(t){if(!t)return"";const e=2,a=t.slice(0,e),r="*".repeat(t.length-e);return a+r},submitPost(){if("write"===this.currentPage&&!this.formData.password.trim())return void(this.showPasswordRequiredModal=!0);const t=(new Date).toLocaleString("ko-KR",{timeZone:"Asia/Seoul"});if("answer"===this.currentPage&&null!==this.editIndex)return this.boardList[this.editIndex].answer=this.formData.answer,this.editIndex=null,this.resetFormData(),void this.goHome();null!==this.editIndex?this.boardList.splice(this.editIndex,1,{...this.formData,modifiedDate:t}):this.boardList.push({...this.formData,date:t,modifiedDate:"",inputPassword:"",answer:""}),this.editIndex=null,this.resetFormData(),this.goHome()},closePasswordWarning(){this.showPasswordWarning=!1},closePasswordRequiredModal(){this.showPasswordRequiredModal=!1},resetFormData(){this.formData={writer:"",title:"",content:"",password:"",inputPassword:"",answer:""},this.editIndex=null},goHome(){this.currentPageNumber=1,this.currentPage="list"},getRowNumber(t){return this.boardList.length-(this.currentPageNumber-1)*this.itemsPerPage-t},viewPost(t){const e=this.boardList[t];this.isPasswordValid(e)&&(this.formData={...e},this.currentPage="view")},deletePost(t){const e=this.boardList.length-(this.currentPageNumber-1)*this.itemsPerPage-t-1,a=this.boardList[t];this.isPasswordValid(a)&&this.boardList.splice(e,1)},prevPage(){this.currentPageNumber>1&&this.currentPageNumber--},nextPage(){this.currentPageNumber<this.totalPages&&this.currentPageNumber++},searchPosts(){this.searchQuery.trim()||alert("검색어를 입력해주세요.")}}}),d=l,c=(a("0a4c"),a("2877")),u=Object(c["a"])(d,o,n,!1,null,"038d0e88",null),m=u.exports,v={components:{snow:i["a"],Board:m},data(){return{}},methods:{}},f=v,p=(a("35bc"),Object(c["a"])(f,r,s,!1,null,null,null));e["default"]=p.exports},"14d9":function(t,e,a){"use strict";var r=a("23e7"),s=a("7b0b"),i=a("07fa"),o=a("3a34"),n=a("3511"),l=a("d039"),d=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},u=d||!c();r({target:"Array",proto:!0,arity:1,forced:u},{push:function(t){var e=s(this),a=i(e),r=arguments.length;n(a+r);for(var l=0;l<r;l++)e[a]=arguments[l],a++;return o(e,a),a}})},2382:function(t,e,a){"use strict";a("910d")},3511:function(t,e,a){"use strict";var r=TypeError,s=9007199254740991;t.exports=function(t){if(t>s)throw r("Maximum allowed index exceeded");return t}},"35bc":function(t,e,a){"use strict";a("45d0")},"3a34":function(t,e,a){"use strict";var r=a("83ab"),s=a("e8b5"),i=TypeError,o=Object.getOwnPropertyDescriptor,n=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=n?function(t,e){if(s(t)&&!o(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"45d0":function(t,e,a){},4754:function(t,e,a){"use strict";t.exports=function(t,e){return{value:t,done:e}}},6964:function(t,e,a){"use strict";var r=a("cb2d");t.exports=function(t,e,a){for(var s in e)r(t,s,e[s],a);return t}},"910d":function(t,e,a){"use strict";var r=a("23e7"),s=a("c65b"),i=a("59ed"),o=a("825a"),n=a("46c4"),l=a("c5cc"),d=a("9bdd"),c=a("c430"),u=l((function(){var t,e,a,r=this.iterator,i=this.predicate,n=this.next;while(1){if(t=o(s(n,r)),e=this.done=!!t.done,e)return;if(a=t.value,d(r,i,[a,this.counter++],!0))return a}}));r({target:"Iterator",proto:!0,real:!0,forced:c},{filter:function(t){return o(this),i(t),new u(n(this),{predicate:t})}})},"9bdd":function(t,e,a){"use strict";var r=a("825a"),s=a("2a62");t.exports=function(t,e,a,i){try{return i?e(r(a)[0],a[1]):e(a)}catch(o){s(t,"throw",o)}}},c5cc:function(t,e,a){"use strict";var r=a("c65b"),s=a("7c73"),i=a("9112"),o=a("6964"),n=a("b622"),l=a("69f3"),d=a("dc4a"),c=a("ae93").IteratorPrototype,u=a("4754"),m=a("2a62"),v=n("toStringTag"),f="IteratorHelper",p="WrapForValidIterator",h=l.set,g=function(t){var e=l.getterFor(t?p:f);return o(s(c),{next:function(){var a=e(this);if(t)return a.nextHandler();try{var r=a.done?void 0:a.nextHandler();return u(r,a.done)}catch(s){throw a.done=!0,s}},return:function(){var a=e(this),s=a.iterator;if(a.done=!0,t){var i=d(s,"return");return i?r(i,s):u(void 0,!0)}if(a.inner)try{m(a.inner.iterator,"normal")}catch(o){return m(s,"throw",o)}return s&&m(s,"normal"),u(void 0,!0)}})},w=g(!0),b=g(!1);i(b,v,"Iterator Helper"),t.exports=function(t,e){var a=function(a,r){r?(r.iterator=a.iterator,r.next=a.next):r=a,r.type=e?p:f,r.nextHandler=t,r.counter=0,r.done=!1,h(this,r)};return a.prototype=e?w:b,a}},e8b5:function(t,e,a){"use strict";var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"===r(t)}},f48c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6094de7b.8cef6be8.js.map