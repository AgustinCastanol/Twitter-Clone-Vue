<template>
  <div id="App" class="flex container h-screen w-full">
    <nav-bar-view/>
    <!-- Tweets -->
    <tweets-view/>
  <!-- trending -->
    <trending-view/>
  </div>
</template>

<script>
import NavBarView from './components/NavBar.vue'
import TrendingView from './components/Trending.vue'
import TweetsView from './components/Tweets.vue'
export default {
  name: "app",
  components: {NavBarView, TrendingView, TweetsView},
  methods: {

  },
  data() {
    return {
}
  }
};

</script>
const query = boardsRef.orderByChild('owner').equalTo(userId)