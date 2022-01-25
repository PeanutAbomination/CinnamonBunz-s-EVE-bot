const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const allow = require("./admin/announceAllow.json")
module.exports = {
    name: 'announce',
    description: "announce stuff to announcement server",
    execute(ta,message, args, cmdName, extraString, status, reason,user,id, prefix,lang){
        if(cmdName == ""){
            let err = new Discord.MessageEmbed()
            .setTitle("There was an error while announcing")
            .setDescription("Reason: `Empty string`")
            .setColor("RED")
            message.channel.send({embeds:[err]})
        }else
        if(!(cmdName == "")){
        var toAnnounce = cmdName.replace("announce ","")
        var toSend = "929580453554434089"
        var splitToAnnounce = toAnnounce.split(",,")
        var t = `${splitToAnnounce[0]}`
        if(splitToAnnounce[1].includes("|n")){
        var c = `${splitToAnnounce[1].replaceAll("|n", "\n")}`
        }else
        if(!(splitToAnnounce[1].includes("|n"))){
        var c = `${splitToAnnounce[1]}`
    }
    var f = `${splitToAnnounce[2]}`
        var co = `${splitToAnnounce[3]}`
        console.log(`${t}\n${c}\n${co}`)
        if(allow[message.author.id + ""]){
            try{
                let tannounce = new Discord.MessageEmbed()
                .setTitle(`${t}`)
                .setDescription(`${c}`)
                .setColor(`${co}`)
                .setFooter(`${f}`)
                ta.send({embeds:[tannounce]})
            }catch(e){
                let err = new Discord.MessageEmbed()
                .setTitle("There was an error while announcing")
                .setDescription("Possible reason: `Bot don't have permission, bot script outdated, bot error, user input error, color error`\n\nUsage: <prefix> announce `title,,content,,footer,,color`\ntip: use `|n` for new line\ncolor: `RED,BLUE,GREEN` etc")
                .setColor("RED")
                message.channel.send({embeds:[err]}) 
                console.log(e)   
            }
        }else
        if(!(allow[message.author.id + ""])){
            let err = new Discord.MessageEmbed()
            .setTitle("There was an error while announcing")
            .setDescription("Reason: `User anauthorised`\n\nWARNING: Sending too much announcements to the channel may cause some serious trouble")
            .setColor("RED")
            message.channel.send({embeds:[err]})
        }
        }
    }
}