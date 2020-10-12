<template>
  <div class="row">
    <main class="col-sm-8 col-lg-9 mb-3">      
      <section class="">
        <div class="mb-2">
          <h1 class="highlighted h2">Blog</h1>
        </div>
        <div class="card-columns">
          <article class="card shadow mb-4" v-for="post in posts" :key="post.fields.slug">
            <img v-if="post.fields.heroImage" :src="`${post.fields.heroImage.fields.file.url}?w=525`" class="card-img-top" :alt="post.fields.heroImage.fields.title">
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
        </div>
      </section>
      <services />
    </main>
    <aside class="col-sm-4 col-lg-3 mb-3">
      <div class="mb-2">
        <h1 class="h2 highlighted">Rólunk</h1>
      </div>
      <article class="mb-4" v-for="person in people" :key="person.fields.email">
        <div class="d-flex align-items-center mb-2 blockquote">
          <img v-if="person.fields.image" :src="person.fields.image.fields.file.url" class="rounded-circle mr-2" width="80" alt="...">
          <h1 class="h5 mb-1">
            {{person.fields.name}} 
            <span class="blockquote-footer">
              {{person.fields.title}}
            </span>
          </h1>
        </div>
        <div class="text-justify">
          {{person.fields.shortBio}}
        </div>
      </article>
    </aside>
  </div>
</template>

<script>
import Services from "@/components/Services.vue";
export default {
  components: {
    Services
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
  head: {
    title: "Sticky Note Consulting &#8211; Eredményesebb vállalatok, élvezetesebb munkahelyek<"
  }
};
</script>

<style lang="scss">
@import '~assets/scss/abstracts/variables';

.card-img-top {
  height: 200;
  object-fit: cover;
  min-width: 100%;
  display: flex;
}

.card-columns {
  @include media-breakpoint-up(xs) {
    column-count: 1;
  }
  @include media-breakpoint-up(lg) {
    column-count: 2;
  }

}

</style>
