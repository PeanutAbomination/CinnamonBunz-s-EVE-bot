const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const fs = require("fs")
const config = require("./config.json")
clients.login(config.login)
module.exports = {
    name: 'static.Route',
    description: "nul",
    execute(message, args, cmdName, extraString, status, reason,user,id){
        
        if(cmdName == "route"){
            var status = "FAILED"
            var reason = "variable of <find STATIC.ROUTE> not declared"
            var extraString = "EMPTY"
            let reportToChannel = new Discord.MessageEmbed()
       .setTitle("Report from the bot")
       .setDescription(`Command Name:\n\`\`\`js\n${cmdName}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nUser Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nUser ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
       .setColor("BLUE")
       .setFooter("")
       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
       let err = new Discord.MessageEmbed()
       .setTitle("Failed to calculate route")
       .setDescription(`Error: \`\`\`js\nUser input variable <find STATIC.ROUTE> input of system == NUL\n\`\`\``)
       .setColor("RED")
       message.channel.send({embeds:[err]})
        }else
        if(cmdName.startsWith("route ")){
            const input = cmdName
            const filter = input
            var EVEoj = require("EVEoj"),
                SDD = EVEoj.SDD.Create("json", {
                    path: "./static"
                }),
                map;
            
            SDD.LoadMeta()
            .then(function() {
                map = EVEoj.map.Create(SDD, "K");
                return map.Load();
            })
            .then(function() {
                var exist = "0"
                const startFilter = `${filter.split("/")[0].replace("route ","")}`
                const start = startFilter.replace("_", " ")
                const end = `${filter.split("/")[1].replace("_","")}`
                if((map.GetSystem({name: `${start}`}))){
                    if((map.GetSystem({name: `${end}`}))){
                        var exist = "1"
                        var routeName = ""
                var starSystem1 = map.GetSystem({name: `${start}`});
                var  starSystem2 = map.GetSystem({name: `${end}`});
                var route = (map.Route(starSystem1.ID, starSystem2.ID, [], true, true) + "").split(",")
                for (let steps = 0; steps < route.length; steps++){
                var routeName = routeName + ` > ${map.GetSystem({id: route[steps]}).name} [${map.GetSystem({id: route[steps]}).sec}]`
                }
                let routePath = new Discord.MessageEmbed()
                .setTitle("Path from " + `${filter.split("/")[0].replace("route ","")} to ${filter.split("/")[1]}`)
                .setFields(
                    {name: "Route length:", value: `**${route.length}**` },
                    {name: "Path:", value: `**${start} [${map.GetSystem({name: start}).sec}]` + `${routeName}**`}
                )
                .setDescription("\n\nAll system data is from [this database](https://drive.google.com/drive/u/1/folders/1pR--h9IBn4CBpbA-zvvrAplNblbnfXc2) locally")
                .setColor("BLUE")
                message.channel.send({embeds:[routePath]})
                console.log(`${start} to ${end} route length: ` + `${route.length}`);
                    }
                }else
                console.log(exist)
                if(exist == "0"){
                    var status = "FAILED"
                    var reason = "variable <find STATIC.ROUTE> input unreachable, simulation of star system route failed"
                    var extraString = cmdName.replace("route ", "")
                    let reportToChannel = new Discord.MessageEmbed()
                       .setTitle("Report from the bot")
                       .setDescription(`Command Name:\n\`\`\`js\n${cmdName}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nUser Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nUser ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
                       .setColor("BLUE")
                       .setFooter("")
                       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
                       let err = new Discord.MessageEmbed()
       .setTitle("Failed to calculate route")
       .setDescription(`Error: \`\`\`js\nUser input variable <find STATIC.ROUTE> input of system not exist, unreachable or Kspace category\n\`\`\``)
       .setColor("RED")
       message.channel.send({embeds:[err]})
                }else
                if(exist == "1"){
                    var status = "SUCCESSFUL"
    var reason = "N/A"
    var extraString = cmdName.replace("route ", "")
    let reportToChannel = new Discord.MessageEmbed()
       .setTitle("Report from the bot")
       .setDescription(`Command Name:\n\`\`\`js\n${cmdName}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nUser Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nUser ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
       .setColor("BLUE")
       .setFooter("")
       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
                }
            })
            .caught(function(err) {
                console.log(`${err}`);
            });

        }
}
}