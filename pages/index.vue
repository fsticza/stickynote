<template>
  <div>
    <h1 class="h2">Blog</h1>
    <section class="card-columns">
      <article class="card" v-for="post in posts" :key="post.fields.slug">
        <img v-if="post.fields.heroImage.fields" :src="post.fields.heroImage.fields.file.url" height="200" class="card-img-top" :alt="post.fields.heroImage.fields.title">
        <div class="card-body">
          <h1 class="card-title h3"><nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link></h1>
          <p class="card-text">
            {{ post.fields.description }}
          </p>
          <nuxt-link :to="post.fields.slug" class="stretched-link">Elolvasom ⟶</nuxt-link>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  head: {
    title: "Sticky Note Consulting &#8211; Eredményesebb vállalatok, élvezetesebb munkahelyek<"
  }
};
</script>

<style lang="scss">
.card-img-top {
  height: 200;
  object-fit: cover;
  min-width: 100%;
  display: flex;
}
</style>
