//https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/User-Tweet-Timeline/user_tweets.js

const trazerTweets=require('./Tweets');
const twitter=require('twitter');

function executar(){
    console.log(trazerTweets())
}