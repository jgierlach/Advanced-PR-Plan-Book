<template>
  <v-app dark>
    <Navbar />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data: () => ({})
}
</script>

<style>
a {
  text-decoration: none;
}

p {
  font-size: 1.5rem;
}

h1 {
  font-size: 2.3rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.65rem;
}

li {
  font-size: 1.5rem;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
