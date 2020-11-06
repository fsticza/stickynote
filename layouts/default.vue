<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <nuxt-link exact to="/" class="navbar-brand">
          <img loading="lazy" :src="`${staticPath}/img/logo-88.png`" alt="logo" height="40" />
          <span class="pl-3">Sticky Note Consulting</span>
        </nuxt-link>
        <div class="ml-auto d-none d-md-block">
          <a class="mr-4" href="tel:0036203840670">+36 20 384 0670</a> <a href="mailto:tamas.gabor.nagy@gmail.com">tamas.gabor.nagy@gmail.com</a>
        </div>
      </div>
    </nav>
    <header class="head-img">
      <div class="container">
        <h1 class="head__title">
          <span class="head__line highlighted head__line--first-line">
            Eredményesebb vállalatok
          </span>
          <span class="head__line highlighted">
            Élvezetesebb munkahelyek
          </span>
        </h1>
      </div>
    </header>
    <div class="layout-body">
      <div class="container my-4">
        <nuxt />
      </div>
    </div>
    <app-footer />
    <cookie-consent />
  </div>
</template>

<script>

import AppFooter from "@/components/AppFooter.vue";
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  components: {
    AppFooter,
    CookieConsent
  },
  computed: {
    staticPath () {
      return process.env.NODE_ENV === 'production' ? 'https://d1ry54sodxci8i.cloudfront.net' :''
    }
  },
};
</script>

<style lang="scss">
@import '~assets/scss/abstracts/variables';

.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.layout-body {
  display: flex;
  flex: 1;
}
.head-img {
  height: 178px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 2;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.28' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%2350b374'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%239bc53d'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%2336a6fb'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%23fde74c'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%23fde74c'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(33.95) translate(-970.54 -727.91)'%3E%3Cg fill='%23fde74c'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  box-shadow: inset 0 0 10px #999;

  @include media-breakpoint-up(md) {
    height: 256px;
  }

}
.head__title {
  font-size: 1.125rem;
  position: relative;
  text-align: center;
  z-index: 3;
  margin-top: 0.5rem;

  @include media-breakpoint-up(md) {
    font-size: $h2-font-size;
  }

  .head__line {
    padding: 1rem;
    margin: 10px;
    width: 10em;
    transform: translateX(10%) rotate(-5deg);

    &--first-line {
      transform: translateX(-10%) rotate(5deg);
      margin-bottom: 10px;
    }
  }
}
</style>
