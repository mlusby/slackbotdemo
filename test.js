var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var token = process.env.SLACK_TOKEN || "";

var rtm = new RtmClient(token, {logLevel: 'debug'});
rtm.start();
rtm.on(RTM_EVENTS.MESSAGE, function (message) {
    console.log("I heard: " + message.text);
});


