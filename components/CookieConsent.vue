<template>
  <div>
    <client-only>
      <nav v-if="!isTrackingConsentPassed" class="cookie-consent shadow">
        <div class="container pt-2">
          <span class="cookie-text">
            Engedélyezed, hogy a felhasználói élmény javításának érdekében sütiket használjon az alkalmazás?
          </span>
          <div class="text-center">
            <button class="cookie-btn btn btn-link text-success" @click="() => setTrackingConsent(true)">Igen</button>
            <button class="cookie-btn btn btn-link text-danger" @click="() => setTrackingConsent(false)">Nem</button>
          </div>
        </div>
      </nav>
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CookieConsent',
  data () {
    const tracking = process.client && localStorage.getItem('isTrackingEnabled')
    console.log(tracking)
    return {
      isTrackingConsentPassed: tracking && tracking !== null
    }
  },
  methods: {
    setTrackingConsent (val) {
      localStorage.setItem('isTrackingEnabled', String(val))
      this.isTrackingConsentPassed = true
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/abstracts/variables';

.cookie-consent {
  position: fixed;
  padding: .5em;
  bottom: 0;
  z-index: 30;
  color: $white;
  background-color: $body-color;
  bottom: 10px;
  right: 10px;
  border-radius: $border-radius;
  width: 25%;

  @include media-breakpoint-down('md') {
    width: auto;
    left: 10px;
  }

  .cookie-btn {
    box-shadow: none;
    font-weight: bold;
  }
}
</style>
