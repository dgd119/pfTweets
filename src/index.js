const rwClient = require("./twitterClient.js");

/* const tweet = async () => {
  var text = "psalms for this ";
  today = new Date();
  hour = today.getHours();
  if (hour > 11) {
    text =
      text +
      "evening: http://prayerfarm.netlify.app/posts/psalms" +
      String(today.getDate()).padStart(2, "0") +
      "p/";
  } else {
    text =
      text +
      "morning: http://prayerfarm.netlify.app/posts/psalms" +
      String(today.getDate()).padStart(2, "0") +
      "a/";
  }

  try {
    await rwClient.v2.tweet("78910");
  } catch (e) {
    console.error(e);
  }
};
tweet();
 */

if (core.getInput("consumer-key")) {
  console.log("no consumer key");
}

const run = async () => {
  try {
    await rwClient.v2.tweet("278917");
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
