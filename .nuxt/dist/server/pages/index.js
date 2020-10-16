exports.ids = [2];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2e107364", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-img-top{height:200;-o-object-fit:cover;object-fit:cover;min-width:100%;display:flex}.card-columns{-moz-column-count:1;column-count:1}@media (min-width:992px){.card-columns{-moz-column-count:2;column-count:2}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3f2535ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<main class=\"col-sm-8 col-lg-9 mb-3\">","</main>",[_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"mb-2\"><h1 class=\"highlighted h2\">Blog</h1></div> "),_vm._ssrNode("<div class=\"card-columns\">","</div>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<article class=\"card shadow mb-4\">","</article>",[_vm._ssrNode(((post.fields.heroImage)?("<img"+(_vm._ssrAttr("src",((post.fields.heroImage.fields.file.url) + "?w=525")))+(_vm._ssrAttr("alt",post.fields.heroImage.fields.title))+" class=\"card-img-top\">"):"<!---->")+" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode(((post.fields.author)?("<div class=\"text-muted d-flex\">"+_vm._ssrEscape("\n              "+_vm._s(post.fields.author.fields.name)+" \n              ")+"<span class=\"ml-auto\">"+_vm._ssrEscape(_vm._s(_vm.formatDate(post.fields.publishDate)))+"</span></div>"):"<!---->")+" "),_vm._ssrNode("<h1 class=\"card-title h3\">","</h1>",[_c('nuxt-link',{attrs:{"to":post.fields.slug}},[_vm._v(_vm._s(post.fields.title))])],1),_vm._ssrNode(" <p class=\"card-text\">"+_vm._ssrEscape("\n              "+_vm._s(post.fields.description)+"\n            ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-footer text-right\">","</div>",[_c('nuxt-link',{staticClass:"stretched-link btn btn-outline-primary",attrs:{"to":post.fields.slug}},[_vm._v("Elolvasom")])],1)],2)}),0)],2),_vm._ssrNode(" "),_c('services')],2),_vm._ssrNode(" <aside class=\"col-sm-4 col-lg-3 mb-3\"><div class=\"mb-2\"><h1 class=\"h2 highlighted\">Rólunk</h1></div> "+(_vm._ssrList((_vm.people),function(person){return ("<article class=\"mb-4\"><div class=\"d-flex align-items-center mb-2 blockquote\">"+((person.fields.image)?("<img"+(_vm._ssrAttr("src",person.fields.image.fields.file.url))+" width=\"80\" alt=\"...\" class=\"rounded-circle mr-2\">"):"<!---->")+" <h1 class=\"h5 mb-1\">"+_vm._ssrEscape("\n          "+_vm._s(person.fields.name)+" \n          ")+"<span class=\"blockquote-footer\">"+_vm._ssrEscape("\n            "+_vm._s(person.fields.title)+"\n          ")+"</span></h1></div> <div class=\"text-justify\">"+_vm._ssrEscape("\n        "+_vm._s(person.fields.shortBio)+"\n      ")+"</div></article>")}))+"</aside>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3f2535ee&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Services.vue?vue&type=template&id=26bfef2b&
var Servicesvue_type_template_id_26bfef2b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"services"},[_vm._ssrNode("<div class=\"mb-2\"><h1 class=\"highlighted h2\">Mit kínálunk</h1></div> <div class=\"row\"><div class=\"col-sm-6\"><ul><li>\n          Szervezetek Agilis tranzíciója\n          <ul><li>\n              Szervezet felmérése (agilis audit)\n            </li> <li>\n              Menedzsment és felső vezetés coacholása és képzése annak érdekében, hogy képesekké váljanak agilis szervezet és működések kialakítására.\n            </li> <li>\n              Csapatok képzése (Scrum/Kanban)\n            </li> <li>\n              Scrum Master felkészítés és coacholás\n            </li> <li>\n              Product owner felkészítés és coacholás\n            </li> <li>\n              Tanuló szervezet kialakítása – folyamatos képzések, mentoring\n            </li> <li>\n              Eszközök bevezetésének támogatása\n            </li></ul></li></ul></div> <div class=\"col-sm-6\"><ul><li>Követelmény elemzési képzés PO-k, BA-k, PM-ek részére.</li> <li>Emberi együttműködési képességeket fejlesztő tréning (Soft Skill Suli)</li> <li>Termék megalapozás, termék fejlesztés és innovációs tréning.</li> <li>Prezentációs tréning</li> <li>Testre szabott tréningek a szervezet aktuális igényei szerint.</li></ul></div></div>")])}
var Servicesvue_type_template_id_26bfef2b_staticRenderFns = []


// CONCATENATED MODULE: ./components/Services.vue?vue&type=template&id=26bfef2b&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Services.vue

var script = {}
function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Servicesvue_type_template_id_26bfef2b_render,
  Servicesvue_type_template_id_26bfef2b_staticRenderFns,
  false,
  injectStyles,
  null,
  "4ec95730"
  
)

/* harmony default export */ var Services = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Services: Services
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },

    people() {
      return this.$store.state.people;
    }

  },
  methods: {
    formatDate(date, options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }) {
      const dateObj = new Date(date);

      if (dateObj.toString() === 'Invalid Date') {
        return date;
      }

      return new Intl.DateTimeFormat('hu-hu', options).format(dateObj);
    }

  },
  head: {
    title: "Sticky Note Consulting &#8211; Eredményesebb vállalatok, élvezetesebb munkahelyek<"
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "6d16b4d8"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map