const rwClient = require("./twitterClient.js");
const core = require("@actions/core");

const tweet = async () => {
  var text = "psalms for ";
  today = new Date();
  hour = today.getHours();
  if (hour > 11) {
    text =
      text +
      "this evening: " +
      core.getInput("pfString") +
      String(today.getDate()).padStart(2, "0") +
      "p/";
  } else if (hour > 5) {
    text =
      text +
      "this morning: " +
      core.getInput("pfString") +
      String(today.getDate()).padStart(2, "0") +
      "a/";
  } else {
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
