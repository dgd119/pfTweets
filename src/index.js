const rwClient = require("./twitterClient.js");
const core = require("@actions/core");

const tweet = async () => {
  var text = "psalms for this ";
  today = new Date();
  hour = today.getHours();
  if (hour > 11) {
    text =
      text +
      "evening: " +
      getInput("pfString") +
      String(today.getDate()).padStart(2, "0") +
      "p/";
  } else {
    text =
      text +
      "morning: " +
      getInput("pfString") +
      String(today.getDate()).padStart(2, "0") +
      "a/";
  }

  try {
    await rwClient.v2.tweet(text);
  } catch (e) {
    console.error(e);
  }
};
tweet();
