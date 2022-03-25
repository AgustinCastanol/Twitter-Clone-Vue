import api from "./module/api";

export default{
    getTweets({ commit }){
        return new Promise((resolve)=>{
            api.getTweets(tweet =>{
                commit("setTweet",tweet)
                resolve()
            })
        })
    },
    addNewTweet(context, title){
        if(title === "")return;
        context.commit('createTweet',title)
        api.addNewTweetFromDataBase(title)
    }
}