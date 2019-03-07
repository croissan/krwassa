const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553203497596747778")
setInterval(function() {
channel.send(`KRWASSA, KRWASSA , KRWASSA , KRWASSA , KRWASSA , KRWASSA `);
}, 30)
})

client.login(process.env.BOT_TOKEN);