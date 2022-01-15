const config = require("./config.json");
const system = require("./package.json");
const Discord = require('discord.js');
const fs = require("fs");
const clients = new Discord.Client({ intents: 14087});
const tClients = new Discord.Client({intents: 14087})
const EveClients = new Discord.Client({ intents: 14087});
const MusicBot = new Discord.Client({ intents: 14087});
const waitUntil = require('wait-until');
clients.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./eveCmds/').filter(file => file.endsWith(".js"));
for(const file of commandFiles){
  const command = require(`./eveCmds/${file}`);
  clients.commands.set(command.name, command);
}
EveClients.commands = new Discord.Collection();
const EveCommandFiles = fs.readdirSync('./').filter(file => file.endsWith(".js"));
for(const file2 of EveCommandFiles){
  const EveCommand = require(`./${file2}`);
  EveClients.commands.set(EveCommand.name, EveCommand);
}

const settings = {
    prefix: 'bun ',
    token: `${config.login}`
};
var prefix = "bun "

clients.on("messageCreate", async (message, args) => {
  
  const blacklistedUser = fs.readFileSync("./discordDatabase/admin/blacklist.json");
  if(!(message.author.id == "911831407230341161")){
  if(blacklistedUser.includes(`"${message.author.username}":"${message.author.id}"`)){
    if(message.guild.id == "902201773492674610"){
      const blacklistSystem = fs.readFileSync("./discordDatabase/adminSystem/blacklistSystem.json");
      if(blacklistSystem.includes(`"settings":"0"`)){
    message.delete()
      }
    }
  }else
  if(!(blacklistedUser.includes(`"${message.author.username}":"${message.author.id}"`))){
  if(message.content.startsWith(settings.prefix)){
    var report = "0"
  const reportCommand = EveClients.commands.get("report")
    if(message.content.startsWith(prefix + "eval")){
        try{
            if((message.author.id !== "857071788270026772" && message.author.id !== "213250789823610880" && message.author.id !== "258356634227572737" && message.author.id !== "775247639083614218") && (message.content.startsWith(prefix + "eval"))){
              let embed = new Discord.MessageEmbed()
              .setTitle(`You don't have the permission to execute that command`)
              .setColor(`RED`)
              .setFooter(message.author.tag + "  |  " + `${Math.round(clients.ws.ping)}ms`, message.author.avatarURL())
              message.channel.send({embeds:[embed]})
            }else
        
            if((message.author.id == "857071788270026772" || message.author.id == "213250789823610880" || message.author.id == "775247639083614218" || message.author.id == "258356634227572737") && (message.content.startsWith(prefix + "eval"))){
            
        
        
              const args = message.content.slice(`${prefix} eval`.length).trim().split(' ');
                const clean = async (clients, text) => {
                if (text && text.constructor.name == "Promise") text = await text;
            
                if (typeof text !== "string") text = require("util").inspect(text, { depth: 1 });
            
                text = text
                  .replace(/`/g, "`" + String.fromCharCode(8203))
                  .replace(/@/g, "@" + String.fromCharCode(8203));
            
                return text;
              }; //end of 'clean'
            
            
            
                try {
        
                  const evaled = eval(args.join(" "));
                  const cleaned = await clean(clients, evaled);
            
                  EvalResults = await new Discord.MessageEmbed()
                  .setTitle("Eval Results")
                  .setDescription("Input: \n```js\n" + message.content.replace("bun eval ", "") + "\n```\n" + "Output: \n" + `\`\`\`js\n${cleaned}\n\`\`\``)
                  .setColor("#32CD32")
                  message.channel.send({embeds:[EvalResults]})
                } catch (err) {
                  EvalResultsErr = await new Discord.MessageEmbed()
                  .setTitle("Eval Results(error)")
                  .setColor("RED")
                  .setDescription("Input: \n```js\n" + message.content.replace("bun eval ", "") + "\n```\n" + "Output: \n" + `\`\`\`js\n${err}\n\`\`\``)
                  message.channel.send({embeds:[EvalResultsErr]});
                };
            };
        }catch(err){
            let ch = clients.channels.cache.get('417093499167440896');
            let msg = err;
            ch.send(msg, {code:'js', split:true});
                
                }
            }else
            

    if(message.content == settings.prefix + "ping"){
       clients.commands.get("ping").execute(message, args, cmdName, extraString, status, reason)
       var [cmdName,extraString ,status,reason, report] = [`${message.content.replace(settings.prefix , "")}`,"N/A" ,"successful", "N/A", "1"]
       let reportToChannel = new Discord.MessageEmbed()
       .setTitle("Report from the bot")
       .setDescription(`Command Name:\n\`\`\`js\n${cmdName}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nUser Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nUser ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
       .setColor("BLUE")
       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
      }else
    if(message.content.startsWith(settings.prefix + "eve ")){
        var eveCmd = message.content.replace(settings.prefix + "eve ","")
        if (eveCmd.startsWith("random") || eveCmd.startsWith("view") || eveCmd.startsWith("recent") || eveCmd.startsWith("batch") || eveCmd.startsWith("search") || eveCmd.startsWith("db") || eveCmd.startsWith("database")){
          EveClients.commands.get("eveCmdOptions").execute(message, args, eveCmd)
          var split = message.content.replace(settings.prefix, "").split(" ")
          var split2 = message.content.replace(settings.prefix, "").replace(split[0],"").replace(split[1],"")
          var split3 = "N/A"
          if(split[2]){
            var split3 = message.content.replace(settings.prefix, "").replace(split[0],"").replace(split[1] + " ","")
          }
        var [cmdName,extraString ,status,reason, report] = [`${split[0]} ${split[1]}`,split3 ,"successful", "N/A", "1"]
       let reportToChannel = new Discord.MessageEmbed()
       .setTitle("Report from the bot")
       .setDescription(`Command Name:\n\`\`\`js\n${cmdName}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nUser Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nUser ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
       .setColor("BLUE")
       .setFooter("")
       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
        }else
        if (!eveCmd.startsWith("random") & !eveCmd.startsWith("view") & !eveCmd.startsWith("recent") & eveCmd.startsWith("batch") || eveCmd.startsWith("search")){
          clients.commands.get("errEveCmd").execute(message, args, eveCmd)
        }
    }else
    if(message.content.startsWith(settings.prefix + "blacklist")){
      if(message.content == settings.prefix + "blacklist"){
        let err = new Discord.MessageEmbed()
        .setTitle("There was an error while using the blacklist command")
        .setDescription("Error: `PREFIX blacklist NULL`")
        .setColor("RED")
        message.channel.send({embeds:[err]})
      }else
      if(!(message.content == settings.prefix + "blacklist")){
        if(message.author.id == "857071788270026772"){
          const Input = message.content
          const Input2 = `${Input.replace("bun blacklist ","")}`
          const get1 = `${Input2.replace(`>`, "")}`
          const get = `${get1.replace("<@!","")}`
          if((message.guild.members.cache.get(`${get}`))){
            const user = clients.users.cache.get(`${get}`).username
            const id = clients.users.cache.get(`${get}`).id
            const content = fs.readFileSync("./discordDatabase/admin/blacklist.json");
            if(content.includes(`"${user}":"${id}"`)){
              let err = new Discord.MessageEmbed()
              .setTitle("There was an error while using the blacklist command")
              .setDescription(`Error: \`User already exist\``)
              .setColor("RED")
              message.channel.send({embeds:[err]})
            }else
            if(!(content.includes(`"${user}":"${id}"`))){
            clients.channels.cache.get("916977769823477800").send("A user have been blacklisted, renewing database.")
          clients.commands.get("blacklist").execute(message, args, cmdName, extraString, status, reason,user,id)
          console.log("executed outside command\nUser: " + user + "\nID: " + id)
          var [cmdName,extraString ,status,reason, report] = [`${message.content.replace(settings.prefix , "").split(" ")}`,`CLASSIFIED` ,"CLASSIFIED", "N/A", "1"]
       let reportToChannel = new Discord.MessageEmbed()
       .setTitle("Report from the bot")
       .setDescription(`Command Name:\n\`\`\`js\n${cmdName[0]}\n\`\`\`\nExtra String:\n\`\`\`js\n${extraString}\n\`\`\`\nStatus:\n\`\`\`js\n${status}\n\`\`\`\nReason:\n\`\`\`js\n${reason}\n\`\`\`\nTime:\n\`\`\`js\n${Date().toLocaleString('en-US')}\n\`\`\`\nUser Tag:\n \`\`\`js\n${message.author.tag}\n\`\`\`\nUser ID:\n\`\`\`js\n ${message.author.id}\n\`\`\`\nServer: \n\`\`\`js\n${message.guild.name}\n\`\`\`\nServer ID:\n\`\`\`js\n${message.guild.id}\n\`\`\`\nServer Member Count:\n\`\`\`js\n${message.guild.memberCount}\n\`\`\``) 
       .setColor("BLUE")
       clients.channels.cache.get("916977769823477800").send({embeds:[reportToChannel]})
            }
      }else 
      if(!(message.guild.members.cache.get(`${get}`))){
        let err = new Discord.MessageEmbed()
        .setTitle("There was an error while using the blacklist command")
        .setDescription(`Error: \`USER NOT found, USER INPUT: ${get}\`\n\ntip: ping the user to blacklist the user`)
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
    }else
    if(message.content.startsWith(prefix + "route")){
      var [cmdName,extraString ,status,reason, report, user,id] = [`${message.content.replace(settings.prefix , "")}`,"LATE DECLARE" ,"LATE DECLARE", "LATE DECLRE", "1",message.author.username,message.author.id]
      EveClients.commands.get("static.Route").execute(message, args, cmdName, extraString, status, reason,user,id)
    }else
    if(message.content.startsWith(prefix + "clear")){
      var [cmdName,extraString ,status,reason, report, user,id] = [`${message.content.replace(settings.prefix , "")}`,"LATE DECLARE" ,"LATE DECLARE", "LATE DECLRE", "1",message.author.username,message.author.id]
      clients.commands.get("clear").execute(message, args, cmdName, extraString, status, reason,user,id)
    }else
    if((message.content.startsWith(prefix + "spam"))){
      var data = require("./eveCmds/admin/maintenance.json").system
      var [cmdName,extraString ,status,reason, report, user,id] = [`${message.content.replace(settings.prefix , "")}`,"LATE DECLARE" ,"LATE DECLARE", "LATE DECLRE", "1",message.author.username,message.author.id]
      clients.commands.get("spam").execute(message, args, cmdName, extraString, status, reason,user,id)
    }else
    if((message.content.startsWith(prefix + "maintenance"))){
      var data = require("./eveCmds/admin/maintenance.json").system
      var [cmdName,extraString ,status,reason, report, user,id] = [`${message.content.replace(settings.prefix , "")}`,"LATE DECLARE" ,"LATE DECLARE", "LATE DECLRE", "1",message.author.username,message.author.id]
      clients.commands.get("maintenance").execute(message, args, cmdName, extraString, status, reason,user,id,data)
    }else
    if((message.content.startsWith(prefix + "get"))){
      var [cmdName,extraString ,status,reason, report, user,id] = [`${message.content.replace(settings.prefix , "")}`,"LATE DECLARE" ,"LATE DECLARE", "LATE DECLRE", "1",message.author.username,message.author.id]
      EveClients.commands.get("get").execute(message, args, cmdName, extraString, status, reason,user,id)   
    }else
    if((message.content.startsWith(prefix + "help"))){
      var [cmdName,extraString ,status,reason, report, user,id] = [`${message.content.replace(settings.prefix , "")}`,"LATE DECLARE" ,"LATE DECLARE", "LATE DECLRE", "1",message.author.username,message.author.id]
      clients.commands.get("help").execute(message, args, cmdName, extraString, status, reason,user,id)   
    }else
    if((message.content.startsWith(prefix + "calculate"))){
   
    }
  }
  }
}
})
let {PythonShell} = require('python-shell')
clients.on("messageCreate", async (message, args) => {
if(message.content == "bun test"){

  PythonShell.run('./databaseRun.py', null, function (err) {
    if (err) throw err;
    message.channel.send('successfully launched automatic databse diagnose python script');
  });
}else
if(message.content == settings.prefix + "test2"){
  const testFolder = './sde/fsd/universe/wormhole';
  const fs = require('fs');
  
  fs.readdirSync(testFolder).forEach(file => {
  // file = all file
  const fs = require('fs');
  const dir = './sde/fsd/universe/wormhole';
  
  fs.readdir(dir, (err, files) => {
  //files.length = file amount
  const testFolder = './sde/fsd/universe/wormhole/' + file;
  var getWHfolder = testFolder
  const fs = require('fs');
  
  fs.readdirSync(testFolder).forEach(file => {
  //this second forEach-file is the folder in region of region
  const path = './sde/fsd/universe/wormhole/' + file + "/region.staticdata";
  
  fs.unlink(path, (err) => {
    if (err) {
      message.channel.send("searching region of region: " + file)
      const testFolder = getWHfolder + "/" + file;
      var getWHdata = testFolder
      const fs = require('fs');
      
      fs.readdirSync(testFolder).forEach(file => {
      //going into the wormhole folder
      const path = getWHfolder + "/constellation.staticdata"
      
      fs.unlink(path, (err) => {
        if (err) {
          //continue because it doesnt exist
          const testFolder = getWHdata + "/" + file;
          const fs = require('fs');
          
          fs.readdirSync(testFolder).forEach(file => {
          //getting WH data
            message.channel.send(file)
          });
          
          return
        }
        const testFolder = getWHdata + "/" + file;
        const fs = require('fs');
        
        fs.readdirSync(testFolder).forEach(file => {
        //getting WH data
          message.channel.send(file)
        });
        
        //file removed
      })
      });
      return
    }

    message.channel.send("searching region of region: " + file)
    const testFolder = getWHfolder + "/" + file;
    var getWHdata = testFolder
    const fs = require('fs');
    
    fs.readdirSync(testFolder).forEach(file => {
    //going into the wormhole folder
    const path = getWHfolder + "/constellation.staticdata"
    
    fs.unlink(path, (err) => {
      if (err) {
        //continue because it doesnt exist
        const testFolder = getWHdata + "/" + file;
        const fs = require('fs');
        
        fs.readdirSync(testFolder).forEach(file => {
        //getting WH data
          message.channel.send(file)
        });
        
        return
      }
    const testFolder = getWHdata + "/" + file;
    const fs = require('fs');
    
    fs.readdirSync(testFolder).forEach(file => {
    //getting WH data
      message.channel.send(file)
    });
    
      //file removed
    })
    });
    //file removed
  })
  });
  });
  });
  
}
})
clients.login(config.login)
tClients.login("CLASSIFIED")

