<template>
  <section class="container">
    <div>
      <div class="links">
        <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="/contact-form">contact form</nuxt-link>
      </div>
      <app-logo/>
      <h1 class="title">
        list-nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="list-wrapper">{{this.$store.state.contacts.list}}</div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    AppLogo
  },
  computed: {
    list() { return this.$store.state.contacts.list}
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}
</style>

