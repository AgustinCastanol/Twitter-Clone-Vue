export default{
    setTweet(state,tweet){
        state.tweets= tweet
    },
    createTweet(state,title){
        state.tweetsOwns.push({id:state.tweetsOwns.length+1,content:title})
    }
}