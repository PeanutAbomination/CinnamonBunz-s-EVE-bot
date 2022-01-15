const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const fs = require("fs")

module.exports = {
    name: 'clear',
    description: "blacklist member",
    execute(message, args, cmdName, extraString, status, reason,user,id){
        if(message.author.id == ("878522018516074527") || message.author.id == ("857071788270026772")){
            if(!(isNaN(cmdName.replace("clear ", "")))){
                if((cmdName.replace("clear ", "")) <= "50"){
        message.channel
        .bulkDelete(cmdName.replace("clear ", ""))
        let done = new Discord.MessageEmbed()
        .setTitle("Operation successful")
        .setDescription("I have cleared " + `${cmdName.replace("clear ", "")} messages`)
        .setColor("GREEN")
        message.channel.send({embeds:[done]})
                }else
                if((cmdName.replace("clear ", "")) > "50"){
                    let err = new Discord.MessageEmbed()
                .setTitle("There was an error while clearing the message")
                .setDescription("Reason: `Clear amount over 50`")
                .setColor("RED")
                message.channel.send({embeds:[err]})
                }
            }else
            if((isNaN(cmdName.replace("clear ", "")))){
                let err = new Discord.MessageEmbed()
                .setTitle("There was an error while clearing the message")
                .setDescription("Reason: `User input not numeric`")
                .setColor("RED")
                message.channel.send({embeds:[err]})
            }
        }else
        if(!(message.author.id == ("878522018516074527"))){
            let err = new Discord.MessageEmbed()
            .setTitle("There was an error while clearing the message")
            .setDescription("Reason: `User unauthorised`")
            .setColor("RED")
            message.channel.send({embeds:[err]})
        }
    }
}
