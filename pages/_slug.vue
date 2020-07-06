<template>
  <section>
    <div class="d-flex align-items-center mb-2">
      <h1 class="highlighted h1">{{ post.fields.title }}</h1>
      <nuxt-link exact to="/" class="ml-auto btn btn-outline-primary">Vissza</nuxt-link>
    </div>
    <img v-if="post.fields.heroImage.fields" :src="post.fields.heroImage.fields.file.url" class="w-100 mb-3" :alt="post.fields.heroImage.fields.title">
    <article v-html="$md.render(post.fields.body)"></article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      );
      return post[0];
    }
  },
  head() {
    return {
      title: this.post.fields.title
    };
  }
};
</script>

<style lang="scss">
</style>
