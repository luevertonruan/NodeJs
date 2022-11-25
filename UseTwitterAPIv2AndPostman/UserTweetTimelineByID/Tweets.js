
const TwitterApi = require('twitter-api-v2');

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi('<YOUR_APP_USER_TOKEN>');

// Tell typescript it's a readonly app
const readOnlyClient = twitterClient.readOnly;

// Play with the built in methods
const user = readOnlyClient.v2.userByUsername('plhery');
twitterClient.v1.tweet('Hello, this is a test.');
// You can upload media easily!
twitterClient.v1.uploadMedia('./big-buck-bunny.mp4');




















//CORPO DA FUNÇÃO
/*const trazerID=require('./UserID');
const userID=trazerID();

function trazerTweets(userID){
    
    return lastTweets
}*/
//module.exports.trazerTweets=trazerTweets;

// MÉTODO DO TUTORIAL DO YOUTUBE: https://www.youtube.com/watch?v=Auy2zWs7dRE&t=916s&ab_channel=DiegoM
/*
const express = require('express');
const Twit = require("twit");

let app = express();
let author_id = 1479878322234572801
let max_results = 20


function pesquisaTweets(){

    const T = new Twit({
        consumer_key: "qrVEwNT8dX7GUyyOAPd9WB1a6",
        consumer_secret: "8lkFM2QZfB938yTVtNDExps6jLJkV4N3X4QWR6h7x101xNvSmt",
        access_token: "1592867868282085379-Jap7UakITIwECEUK3ipPgfGM5N9qbC",
        access_token_secret: "Z5lOThVSCaQoXTFPpb7xunXbfBKCqE7GSEKeqFAcERoxO",
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        strictSSL: true, // optional - requires SSL certificates to be valid.
      });
      
      app.get( "/Timelines", (request, response) => {
        T.get(
          //https://api.twitter.com/2/users/:${author_id}/tweets?max_results=${max_results}`
          'https://api.twitter.com/2/users/:1479878322234572801/tweets?max_results=20',
          (err, data, response) => {
            for (let eachData of data) {
              console.log(eachData);
            }
          }
        );
        response.sendStatus(200)
      });
      app.listen();
}
pesquisaTweets()*/

/*MÉTODO DA DOCUMENTAÇÃO DA API DO TWITTER:
https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets#tab2
https://developer.twitter.com/apitools/api?endpoint=%2F2%2Fusers%2F%7Bid%7D%2Ftweets&method=get 

import { Client } from "twitter-api-sdk";

async function main() {
  const client = new Client(process.env.BEARER_TOKEN);

  const response = await client.tweets.usersIdTweets("1479878322234572801", {
    "max_results": 5
  });
  
  console.log("response", JSON.stringify(response, null, 2));
}
  
main();


import { Client } from "twitter-api-sdk";
String id = "2244994945";

try {
    Get2UsersIdTweetsResponse result = apiInstance.tweets().usersIdTweets(id)
      .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TweetsApi#usersIdTweets");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getResponseBody());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}*/
