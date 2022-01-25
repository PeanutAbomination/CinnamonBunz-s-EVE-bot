const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});

const fs = require("fs")

module.exports = {
    name: 'blacklist',
    description: "blacklist member",
    execute(message, args, cmdName, extraString, status, reason,user, id,userID, GuildId,prefix,get){
      const settings = {prefix : "bun "}
      if(message.content == settings.prefix + "blacklist"){
        let err = new Discord.MessageEmbed()
        .setTitle("There was an error while using the blacklist command")
        .setDescription("Error: `PREFIX blacklist NULL`")
        .setColor("RED")
        message.channel.send({embeds:[err]})
      }else
      if(!(message.content == settings.prefix + "blacklist")){
        if(message.author.id == "857071788270026772"){
          var id = userID
          if((message.guild.members.cache.get(`${get}`))){
            const content = fs.readFileSync("./discordDatabase/admin/blacklist.json");
            if(content.includes(`"${GuildId}":"${id}"`)){
              let err = new Discord.MessageEmbed()
              .setTitle("There was an error while using the blacklist command")
              .setDescription(`Error: \`id already exist\``)
              .setColor("RED")
              message.channel.send({embeds:[err]})
            }else
            if(!(content.includes(`"${GuildId}":"${id}"`))){
            clients.channels.cache.get("916977769823477800").send("An user have been blacklisted, renewing database.")
            let blacklist = new Discord.MessageEmbed()
            .setTitle("Operation Successful")
            .setDescription("User added to the blacklist database!")
            .setColor("GREEN")
            message.channel.send({embeds:[blacklist]})
            const fs = require('fs')
            const simulateInput = `bun blacklist <@!857071788270026772>`
            const simulateInput2 = `${simulateInput.replace("bun blacklist ","")}`
            const get1 = `${simulateInput2.replace(`>`, "")}`
            const get = `${get1.replace("<@!","")}`
    
    
    try {
      const data = fs.readFileSync('./discordDatabase/admin/blacklist.json', 'utf8')
      const content = data.replace("}","")
    fs.truncate('./discordDatabase/admin/blacklist.json', 0, function(){console.log("someone has been blacklisted\nUser: " + user + "\nID: " + id)})
    fs.writeFile('./discordDatabase/admin/blacklist.json',`${content}` + `,\n"${GuildId}":"${id}"\n}`, err => {
      if (err) {
        console.error(err)
        return
            }
        })
        } catch (err) {
         console.error(err)
        }
          console.log("executed outside command\nGuildID: " + GuildId + "\nID: " + id)
          var [cmdName,extraString ,status,reason, report] = [`${message.content.replace(settings.prefix , "").split(" ")}`,`CLASSIFIED` ,"CLASSIFIED", "N/A", "1"]
       let reportToChannel = new Discord.MessageEmbed()
       .setTitle("Report from the bot")
       .setDescription(`Command Name:\n\`\`\`js\n${cmdName[0]}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nid Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nid ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
       .setColor("BLUE")
       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
            }
      }else 
      if(!(message.guild.members.cache.get(`${get}`))){
        let err = new Discord.MessageEmbed()
        .setTitle("There was an error while using the blacklist command")
        .setDescription(`Error: \`User NOT found, id INPUT: ${get}\`\n\ntip: ping the id to blacklist the id`)
        .setColor("RED")
        message.channel.send({embeds:[err]})
      }
    }
        if(!(message.author.id == "857071788270026772")){
          let err = new Discord.MessageEmbed()
          .setTitle("There was an error while using the blacklist command")
          .setDescription("Error: You are not my master")
          .setColor("RED")
          message.channel.send({embeds:[err]})
        }
      }
    }
}
