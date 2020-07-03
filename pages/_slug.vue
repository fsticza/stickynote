<template>
  <section>
    <p class="back">
      <nuxt-link exact to="/">⟵ Vissza</nuxt-link>
    </p>
    <h1 class="h2">{{ post.fields.title }}</h1>
    <div
      class="image"
    ></div>
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
