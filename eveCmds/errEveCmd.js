const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});

module.exports = {
    name: 'errEveCmd',
    description: "error of eve command, unknown cmd",
    execute(message, args, eveCmd){
        let embed = new Discord.MessageEmbed()
        .setTitle("Unknown commands")
        .setDescription(`**"${eveCmd}"** isn't a reconizable command`)
        .setColor('RED')
        .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
        message.channel.send({embeds:[embed]})
    }
}