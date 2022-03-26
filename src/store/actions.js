import api from "../api/api";

export default{

   async getTweetsFollowers({ commit }){
    let tweets = []
    await api.getTweetsFollowers(tweets).then(e => tweets=e.slice())
    tweets.map(e =>{
        e.time = '20 min'
        e.comments =parseInt(Math.random() * 10000)
        e.like= parseInt(Math.random() * 10000)    
        e.retweets = parseInt(Math.random() * 10000)
    })
    commit('setTweet', tweets) 
   },
   async getTweetsOwn({ commit }){
    let tweets = []
    await api.getTweetsOwn(tweets).then(e => tweets=e.slice())
    commit('setOwnTweets', tweets) 
   },

    addNewTweet(context, title){
        if(title === "")return;
        context.commit('createTweet',title)
        api.addNewTweetFromDataBase(title)
    }
}

