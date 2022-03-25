<template>
  <div id="App" class="flex container h-screen w-full">
    <nav-bar-view/>
    <!-- Tweets -->
    <router-view />
  <!-- trending -->
    <trending-view/>
  </div>

</template>

<script>
import NavBarView from './components/NavBar.vue'
import TrendingView from './components/Trending.vue'

export default {
  name: "app",
  components: {NavBarView, TrendingView},
  methods: {

  },
  data() {
    return {
}
  },
  mounted() {
  }

};

</script>
