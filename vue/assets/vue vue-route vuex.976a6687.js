import{_ as e}from"./index.b388db61.js";import{e as t,o as r,m as n}from"./vendor.c8610fdc.js";const s={mounted(){}},a={class:"u-quill-body"},o=n(`<h1> vue \u5E38\u7528\u751F\u547D\u5468\u671F <br></h1><ul style><li style><a href="https://cn.vuejs.org/v2/guide/syntax.html">\u6A21\u677F\u6587\u6863</a></li><li style><a href="https://cn.vuejs.org/v2/api/">API\u6587\u6863</a></li></ul><pre><code class="language-javascript">\r
<span style="color:#ff4e20;">vue3.x \u517C\u5BB9\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u4F7F\u7528</span>\r
export default {\r
  /** * data : \u53EF\u7528\u7684\u6570\u636E\uFF0C\u6A21\u677F\u4E2D\u7684\u6570\u636E\u5FC5\u987B\u9884\u5B9A\u4E49 */\r
  data(){ \r
    return { a:1, b:2 }\r
  },\r
  /** * computed\uFF1A \u81EA\u52A8\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u9636\u6BB5\u7684\u6570\u636E\u53EF\u4EE5\u51FA\u73B0\u5728\u6A21\u677F\u4E2D */\r
  computed:{ \r
    count(){ return this.a + this.b }\r
 },\r
  /** * \u6570\u636E\u8BA1\u7B97\u5B8C\u6BD5\uFF0C\u4F46\u662F\u672A\u6E32\u67D3\u6A21\u677F this.$refs\u8FD8\u672A\u751F\u6210 */\r
 <span style="color:#ff4e20;"> (vue3 change : created -&gt; setup)(){ \r
    this.dataInit()\r
    return {\r
      c:1\r
    }\r
  },\r
  </span>\r
  /** * \u4E66\u5199\u6A21\u677F\u4E2D\u548C\u5F53\u524D\u751F\u547D\u5468\u671F\u4E2D\u53EF\u7528\u7684\u65B9\u6CD5 */\r
  methods:{ \r
    dataInit(){ console.log(&#39;\u6211\u662F\u8BF7\u6C42\u6570\u636E\u7B49\u64CD\u4F5C&#39;) \r
    } },\r
  /** * \u76D1\u6D4B\u6570\u636E\u53D1\u751F\u53D8\u5316 */\r
  watch:{\r
    count(value){console.log(&#39;\u6211\u7684\u503C\u53D1\u751F\u4E86\u53D8\u5316&#39;)}\r
    },\r
  /** * \u6A21\u677F\u6E32\u67D3\u5B8C\u6BD5 \u7C7B\u4F3CjQ $(function(){}) */\r
  mounted(){\r
     console.log(&quot;\u8FD9\u91CC\u80FD\u8BFB\u53D6\u865A\u62DFdom&quot;)\r
      }\r
}    </code></pre><h1 style>vue-route \u8DEF\u7531\u914D\u7F6E</h1><ul style><li style="line-height:24px;"><a href="https://router.vuejs.org/zh/guide/essentials/named-routes.html">\u5B98\u65B9\u6587\u6863</a></li></ul><pre><code class="language-javascript">\r
<span style="color:#ff4e20;">vue3.x vueRoute4 api\u4E0D\u518D\u9002\u7528</span>\r
 { path: &#39;/** \u8DEF\u7531\u8BBF\u95EE\u5730\u5740 */&#39;,\r
   component: function(){return import(&#39;/* \u5F15\u5165 vue \u6587\u4EF6\u5730\u5740 */&#39;)},\r
   name:&#39;/** \u8DEF\u7531\u540D\u79F0 */&#39;,\r
   redirect:&#39;/** \u8DEF\u7531\u91CD\u5B9A\u5411 */&#39;,\r
   meta:{auth\uFF1Atrue}, /**  \u5176\u4ED6\u4FE1\u606F \u6BD4\u5982\u5FC5\u987B\u9700\u8981\u767B\u5F55 */\r
 }\r
   </code> </pre><h1 style>vuex \u72B6\u6001\u7BA1\u7406</h1><ul style><li style="line-height:24px;"><a href="https://vuex.vuejs.org/zh/guide/state.html">\u5B98\u65B9\u6587\u6863</a></li></ul><pre><code class="language-javascript">\r
<span style="color:#ff4e20;">vue3.x \u4F7F\u7528 pinia \u4EE3\u66FF</span>\r
const store = new Vuex.Store({\r
  /** * state : \u5168\u5C40 this.$store.state \u53EA\u8BFB */\r
  state: {\r
    todos: [ { id: 1, name: &#39;\u5F20\u4E09&#39; }, { id: 2, name: &#39;\u674E\u56DB&#39; } ]\r
  },\r
  /**\r
   * \u4FEE\u6539 state \u5168\u5C40this.$store.commit(&#39;addName&#39;,{id:3,name:&#39;\u738B\u4E94&#39;}) \u89E6\u53D1\r
   * [\u91CD\u8981]\u53EA\u6709 mutations \u9636\u6BB5\u53EF\u4EE5\u4FEE\u6539 state\r
   */\r
  mutations\uFF1A{\r
    addName(state,userInfo){ state.push(userInfo) }\r
  }, \r
  /** * action : \u5206\u53D1\u9636\u6BB5 this.$store.dispatch(&#39;addName2&#39;) */\r
  action:{\r
    addName2(state){ state.commit(&#39;addName&#39;,{id:3,name:&#39;\u738B\u4E94&#39;}) }\r
  },\r
  /** *  getters : \u5168\u5C40 this.$store.getters \u53EA\u8BFB  \u8FD4\u56DEstate\u8BA1\u7B97\u540E\u7684\u503C\u6216\u8005\u65B9\u6CD5 */\r
  getters: {\r
     getNames: function(state) { return state.todos.filter(function(todo){ return todo.name}) }\r
  }\r
})\r
export default store\r
   </code> </pre><h1>END</h1>`,10),u=[o];function i(c,l,d,p,h,m){return r(),t("div",a,u)}var g=e(s,[["render",i]]);export{g as default};
