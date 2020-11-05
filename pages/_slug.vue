<template>
  <div class="row">
    <main class="col-sm-8 col-lg-9 mb-3">
      <h1 class="highlighted h1">{{ post.fields.title }}</h1>
      <img v-if="post.fields.heroImage.fields" loading="lazy" :src="`${post.fields.heroImage.fields.file.url}?w=825`" class="w-100 mb-3" :alt="post.fields.heroImage.fields.title">
      <article v-html="$md.render(post.fields.body)"></article>
    </main>
    <aside v-if="person || recommendedPosts.length" class="col-sm-4 col-lg-3 mb-3">
      <section v-if="person">
        <div class="mb-2">
          <h1 class="h2 highlighted">Szerző</h1>
        </div>
        <article class="mb-4" >
          <div class="d-flex align-items-center mb-2 blockquote">
            <img v-if="person.fields.image" :src="`${person.fields.image.fields.file.url}?w=80`" class="rounded-circle mr-2" width="80" alt="...">
            <h1 class="h5 mb-1">
              {{person.fields.name}} 
              <span class="blockquote-footer">
                {{person.fields.title}}
              </span>
              <small class="d-block" v-if="person.fields.linkedIn">
                <a :href="person.fields.linkedIn" target="_bank" rel="noopener noreferrer">LinkedIn profil</a>
              </small>
            </h1>
          </div>
        </article>
      </section>
      <section v-if="recommendedPosts.length">
        <div class="mb-2">
          <h1 class="h2 highlighted">További cikkek a témában</h1>
        </div>
        <article class="card shadow mb-3" v-for="post in recommendedPosts" :key="post.fields.slug">
          <img v-if="post.fields.heroImage" loading="lazy" :src="`${post.fields.heroImage.fields.file.url}?w=525`" class="card-img-top" :alt="post.fields.heroImage.fields.title">
          <div class="card-body">
            <div v-if="post.fields.author" class="text-muted d-flex">
              {{post.fields.author.fields.name}} 
              <span class="ml-auto">{{formatDate(post.fields.publishDate)}}</span>
            </div>
            <h1 class="card-title h3"><nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link></h1>
            <p class="card-text">
              {{ post.fields.description }}
            </p>
          </div>
          <div class="card-footer text-right">
            <nuxt-link :to="post.fields.slug" class="stretched-link btn btn-outline-primary">Elolvasom</nuxt-link>
          </div>
        </article>
      </section>
    </aside>
  </div>
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
      return this.$store.state.posts.find(
        el => el.fields.slug === this.slug
      );
    },
    person() {
      return this.post.fields.author;
    },
    recommendedPosts () {
      const { tags } = this.post.fields
      if (!tags) {
        return []
      }
      return this.$store.state.posts.filter(el => {
        return el.fields.tags && 
        el.fields.tags.some(tag => this.post.fields.tags.includes(tag))
      }).filter(el => el.fields.slug !== this.slug)
    }
  },
  methods: {
    formatDate (date, options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }) {
      const dateObj = new Date(date)
      if (dateObj.toString() === 'Invalid Date') {
        return date
      }
      return new Intl.DateTimeFormat('hu-hu', options).format(dateObj)
    }
  },
  head() {
    return {
      title: this.post.fields.title
    }
  },
  mounted() {
    if (process.browser) {
      this.$gtag('config', process.env.GTAG, {
        page_title: this.post.fields.title,
        page_path: this.$route.fullPath,
      })
    }
  },
};
</script>

<style lang="scss">
</style>
