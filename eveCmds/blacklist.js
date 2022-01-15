const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const fs = require("fs")

module.exports = {
    name: 'blacklist',
    description: "blacklist member",
    execute(message, args, cmdName, extraString, status, reason,user,id){
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
fs.writeFile('./discordDatabase/admin/blacklist.json',`${content}` + `,\n"${user}":"${id}"\n}`, err => {
  if (err) {
    console.error(err)
    return
        }
    })
    } catch (err) {
     console.error(err)
    }
    }
}
