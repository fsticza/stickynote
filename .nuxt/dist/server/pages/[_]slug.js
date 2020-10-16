exports.ids = [1];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug.vue?vue&type=template&id=5c9d814e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<main class=\"col-sm-8 col-lg-9 mb-3\"><h1 class=\"highlighted h1\">"+_vm._ssrEscape(_vm._s(_vm.post.fields.title))+"</h1> "+((_vm.post.fields.heroImage.fields)?("<img loading=\"lazy\""+(_vm._ssrAttr("src",((_vm.post.fields.heroImage.fields.file.url) + "?w=825")))+(_vm._ssrAttr("alt",_vm.post.fields.heroImage.fields.title))+" class=\"w-100 mb-3\">"):"<!---->")+" <article>"+(_vm._s(_vm.$md.render(_vm.post.fields.body)))+"</article></main> "),(_vm.person || _vm.recommendedPosts.length)?_vm._ssrNode("<aside class=\"col-sm-4 col-lg-3 mb-3\">","</aside>",[_vm._ssrNode(((_vm.person)?("<section><div class=\"mb-2\"><h1 class=\"h2 highlighted\">Szerző</h1></div> <article class=\"mb-4\"><div class=\"d-flex align-items-center mb-2 blockquote\">"+((_vm.person.fields.image)?("<img"+(_vm._ssrAttr("src",((_vm.person.fields.image.fields.file.url) + "?w=80")))+" width=\"80\" alt=\"...\" class=\"rounded-circle mr-2\">"):"<!---->")+" <h1 class=\"h5 mb-1\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.person.fields.name)+" \n            ")+"<span class=\"blockquote-footer\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.person.fields.title)+"\n            ")+"</span></h1></div></article></section>"):"<!---->")+" "),(_vm.recommendedPosts.length)?_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"mb-2\"><h1 class=\"h2 highlighted\">További cikkek a témában</h1></div> "),_vm._l((_vm.recommendedPosts),function(post){return _vm._ssrNode("<article class=\"card shadow mb-3\">","</article>",[_vm._ssrNode(((post.fields.heroImage)?("<img loading=\"lazy\""+(_vm._ssrAttr("src",((post.fields.heroImage.fields.file.url) + "?w=525")))+(_vm._ssrAttr("alt",post.fields.heroImage.fields.title))+" class=\"card-img-top\">"):"<!---->")+" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode(((post.fields.author)?("<div class=\"text-muted d-flex\">"+_vm._ssrEscape("\n            "+_vm._s(post.fields.author.fields.name)+" \n            ")+"<span class=\"ml-auto\">"+_vm._ssrEscape(_vm._s(_vm.formatDate(post.fields.publishDate)))+"</span></div>"):"<!---->")+" "),_vm._ssrNode("<h1 class=\"card-title h3\">","</h1>",[_c('nuxt-link',{attrs:{"to":post.fields.slug}},[_vm._v(_vm._s(post.fields.title))])],1),_vm._ssrNode(" <p class=\"card-text\">"+_vm._ssrEscape("\n            "+_vm._s(post.fields.description)+"\n          ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-footer text-right\">","</div>",[_c('nuxt-link',{staticClass:"stretched-link btn btn-outline-primary",attrs:{"to":post.fields.slug}},[_vm._v("Elolvasom")])],1)],2)})],2):_vm._e()],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_slug.vue?vue&type=template&id=5c9d814e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  data() {
    return {
      slug: this.$route.params.slug
    };
  },

  computed: {
    post() {
      return this.$store.state.posts.find(el => el.fields.slug === this.slug);
    },

    person() {
      return this.post.fields.author;
    },

    recommendedPosts() {
      const {
        tags
      } = this.post.fields;

      if (!tags) {
        return [];
      }

      return this.$store.state.posts.filter(el => {
        return el.fields.tags && el.fields.tags.some(tag => this.post.fields.tags.includes(tag));
      }).filter(el => el.fields.slug !== this.slug);
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

  head() {
    return {
      title: this.post.fields.title
    };
  }

});
// CONCATENATED MODULE: ./pages/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6b601390"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=[_]slug.js.map