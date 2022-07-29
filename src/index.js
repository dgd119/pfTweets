const rwClient = require("./twitterClient.js");
const core = require("@actions/core");

const tweet = async () => {
  var text = "psalms for ";
  today = new Date();
  hour = today.getHours();
  if (hour > 11) {
    // it's the evening cron job - show evening
    text = text + "this evening: " + core.getInput("pfString");
    if (String(today.getDate()).padStart(2, "0") < 30) {
      text = text + String(today.getDate()).padStart(2, "0") + "p/";
    } else {
      text = text + "30p31p/";
    }
  } else if (hour > 5) {
    // it's the morning cron job - show morning
    text = text + "this morning: " + core.getInput("pfString");
    if (String(today.getDate()).padStart(2, "0") < 30) {
      text = text + String(today.getDate()).padStart(2, "0") + "a/";
    } else {
      text = text + "30a31a/";
    }
  } else {
    // it's the early morning cron job - show day
    text = text + "today: " + core.getInput("pfString");
    text = text.slice(0, 48);
  }

  try {
    await rwClient.v2.tweet(text);
  } catch (e) {
    console.error(e);
  }
};
tweet();
