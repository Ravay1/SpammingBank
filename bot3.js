const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("519498723558948875")
setInterval(function() {
channel.send(`!spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
