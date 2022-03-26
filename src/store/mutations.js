export default{
    setTweet(state,tweet){
        state.tweets= tweet
    },
    createTweet(state,title){
        state.tweetsOwns.push({id:state.tweetsOwns.length+1,content:title})
    },
    setOwnTweets(state,tweet){
        state.tweetsOwns = tweet
    },
    deleteTweet(state, id){
        state.tweetsOwns = state.tweetsOwns.filter(e=>e.id !== id)
    }
}