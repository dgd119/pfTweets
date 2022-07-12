const { TwitterApi } = require("twitter-api-v2");
const core = require("@actions/core");

const client = new TwitterApi({
  appKey: core.getInput("consumer-key"),
  appSecret: core.getInput("consumer-secret"),
  accessToken: core.getInput("access-token"),
  accessSecret: core.getInput("access-token-secret"),
});

const rwClient = client.readWrite;

module.exports = rwClient;
