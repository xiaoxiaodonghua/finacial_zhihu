webpackJsonp([7],{mPCo:function(t,e){},qd6U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"ArticleDetail",data:function(){return{id:this.$route.params._id,article:[],comment:{content:""}}},filters:{curFormatDate:function(t){return this.formatDate(t)}},methods:{getSingleArticle:function(){var t=this;this.$http.getSingleArticle({_id:""+this.id}).then(function(e){t.article=e[0]})},addComment:function(){var t=this;this.$http.addComments({_id:this.id,uname:window.localStorage.name,content:this.comment.content}).then(function(e){t.comment.content="",t.getSingleArticle()})}},mounted:function(){console.log(this.$route.params._id),this.getSingleArticle()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articleDetail"},[n("h3",{staticClass:"title"},[t._v(t._s(t.article.title))]),t._v(" "),n("p",[t._v("\n    "+t._s(t.article.content)+"\n  ")]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("el-input",{staticStyle:{width:"500px"},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.addComment}},[t._v("添加评论")]),t._v(" "),t._l(t.article.comments,function(e,i){return n("div",{key:i,staticClass:"comment-item",staticStyle:{"margin-top":"20px"}},[n("div",[n("span",{staticClass:"cname"},[t._v(t._s(e.uname))]),t._v(" "),n("span",{staticClass:"cdate"},[t._v(t._s(t._f("format")(e.date)))])]),t._v(" "),n("div",{staticClass:"cct"},[t._v("\n      "+t._s(e.content)+"\n    ")])])})],2)},staticRenderFns:[]};var a=n("C7Lr")(i,c,!1,function(t){n("mPCo")},"data-v-60ed5214",null);e.default=a.exports}});
//# sourceMappingURL=7.23b96065c3c44e23fd8f.js.map