<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <nuxt-link exact to="/" class="navbar-brand">
          <img src="~/assets/img/logo.png" alt="logo" height="40" />
          <span class="pl-3">Sticky Note Consulting</span>
        </nuxt-link>
        <div class="ml-auto d-none d-md-block">
          <a class="mr-4" href="tel:0036203840670">+36 20 384 0670</a> <a href="mailto:tamas.gabor.nagy@gmail.com">tamas.gabor.nagy@gmail.com</a>
        </div>
      </div>
    </nav>
    <header class="head-img">
      <img class="img" src="~assets/img/header.jpg" alt="Sticky Note Consulting - header image" />
      <div class="container">
        <h1 class="head__title">
          <span class="head__line highlighted head__line--first-line">
            Eredményesebb vállalatok, 
          </span>
          <span class="head__line highlighted">
            élvezetesebb munkahelyek
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
  </div>
</template>

<script>

import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppFooter
  }
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
  height: 200px;
  position: relative;
  background-color: #e8e9e4;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 2;

  @include media-breakpoint-up(md) {
    height: 300px;
  }

  .img {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.head__title {
  font-size: 1.25rem;
  position: relative;
  text-align: center;
  z-index: 3;
  color: #fff;
  text-shadow: 0 0 5px #000;

  @include media-breakpoint-up(md) {
    font-size: 2.75rem;
  }

  .head__line {
    margin: 10px;
    transform: translateX(10%);

    &--first-line {
      transform: translateX(-10%);
      margin-bottom: 10px;
    }
  }
}
</style>
