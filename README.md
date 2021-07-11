# Kuracord.js
An bot library for [Kuracord](https://app.kuracord.tk) project.
This library allows interacting with Kuracord API easily.
## Installation
```bash
npm install kuracord.js
```
## Examples
```js
const { Client } = require("kuracord.js")
let client = new Client()
client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}`)
})
client.login("bot token here")
```
## Notes
Bot accounts are available for creating only through API. You can use Node.JS and [node-fetch](https://npmjs.com/package/node-fetch) package to register a bot. Example: ```js
const fetch = require("node-fetch")
async registerBot(userToken, username) {
let res = await fetch("https://api.kuracord.tk/api/v2/bots/", {
method: "post",
body: JSON.stringify({
token: userToken,
username: username
})
})
let result = await res.json()
return result
}
registerBot("MDAwThIsHdIsJtFaKeglTOKENkGldL", "Test Bot")
```
