<template>
  <div class="w-full md:w-1/2 h-full overflow-y-scroll ">
    <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Inicio</h1>
        <i class="far fa-star text-xl text-blue"></i>
    </div>
    <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
            <img src="profile.png" class="w-12 h-12 rounded-full border borde-lighter">
        </div>
        <form v-on:submit.prevent="addNewTweet(this.tweetsOwns.content)"
        class="w-full px-4 relative ">
            <textarea v-model="tweetsOwns.content"
             placeholder="¿Qué está pasando?" class="mt-3 pb-3  w-full focus:outline-none"></textarea>
            <div class="flex items-center">
            <i class="text-lg text-blue mr-4 far fa-image"></i>
            <i class="text-lg text-blue mr-4 fas fa-film"></i>
            <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
            <i class="text-lg text-blue mr-4 far fa-smile"></i>
            </div>
            <button type="submit" class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
                Tweetear
            </button>
        </form>
    </div>
    <div class="flex flex-col-reverse">
        <div v-for="tweet in tweetsOwns" :key="tweet.id" class="w-full p-4 border-b hover:bg-lighter flex">
          <div class="flex-none mr-4">
            <img src="profile.png" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Agustin Castañol </p>
              <p class="text-sm text-dark ml-2"> @agustinCas </p>
              <p class="text-sm text-dark ml-2"> 1 seg </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div v-for="follow in following" :key="follow.id" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
            <img :src="`${follow.src}`" class="h-12 rounded-full flex-none"/>
        </div>
        <div class="w-full ">
            <div class="flex items-center w-full">
                <p class="font-semibold"> {{ follow.name }} </p>
                <p class="text-sm text-dark ml-2"> {{ follow.handle }} </p>
                <p class="text-sm text-dark ml-2"> {{ follow.time }} </p>
                <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class ="py-2">
                {{follow.tweet}}
            </p>
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center text-sm text-dark" >
                    <i class="far fa-comment mr-3"></i>
                    <p class=""> {{follow.comments}}</p>
                </div>
            
                <div class="flex items-center text-sm text-dark" >
                    <i class="fas fa-retweet mr-3"></i>
                    <p class=""> {{follow.retweets}}</p>
                </div>
                <div class="flex items-center text-sm text-dark" >
                    <i class="fas fa-heart mr-3"></i>
                    <p class=""> {{follow.like}}</p>
                </div>
                <div class="flex items-center text-sm text-dark" >
                    <i class="fas fa-share-square mr-3"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'tweets-section',
    data() {
        return {      
            following: [
                {id:1, src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
                {id:2, src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
                {id:3, src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
                {id:4, src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
            ]
            ,
            tweet: {content: ''}
            
        }
    },
    async created(){
      try{
        await this.$store.dispatch('getTweets')
      }catch(error){
        console.error(error)
      }
    },
    methods: {
        addNewTweet (title) {
          this.$store.dispatch("addNewTweet",title)
          this.tweetsOwns.content=""
        }
        },
    computed: {
      tweets(){
        return this.$store.getters.getTweets
      },
      tweetsOwns(){
        return this.$store.getters.tweetsPublished
      }
    }
    

}
</script>
