const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const fs = require("fs")

module.exports = {
    name: 'eveCmdOptions',
    description: "all eve cmd",
    execute(message, args, eveCmd){
        if(eveCmd.startsWith("view")){
            try {
                var path2 = eveCmd.replace("view ","")
                var path = path2
                if(path2.endsWith(".txt")){
                    var path = path2.replace(".txt","")
                }
                if (fs.existsSync('./logs/Chatlogs/' + path + ".txt")) {
                    const data = fs.readFileSync('./logs/Chatlogs/' + path + ".txt").toString();
                    var lines = (data.split('\n').length)
                    if(lines < "60" || `${lines}` == "60"){
                        const fs = require('fs')

                        fs.readFile('./logs/Chatlogs/' + path + ".txt", 'utf8' , (err, data) => {
                            if (err) {
                               console.error(err)
                              return
                             }
                             fs.stat('./logs/Chatlogs/' + path + ".txt", (err, stats) => {
                                if(err) {
                                    throw err;
                                }
                        
                             let ping = new Discord.MessageEmbed()
                             .setTitle("Log of: " + path + ".txt")
                             .setDescription("Last modified time: " + stats.mtime + "\n\n```js\n" + data + "\n```")
                             .setColor('BLUE')
                             .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                             message.channel.send({embeds:[ping]})
                            })
                            })
                    }else
                    if(lines>"60"){
                        const fs = require('fs')

                        fs.readFile('./logs/Chatlogs/' + path + ".txt", 'utf8' , (err, data) => {
                            if (err) {
                               console.error(err)
                              return
                             }
                             fs.stat('./logs/Chatlogs/' + path + ".txt", (err, stats) => {
                                if(err) {
                                    throw err;
                                }
                        let ping = new Discord.MessageEmbed()
                             .setTitle("Log of: " + path + ".txt")
                             .setDescription("Last modified time: " + stats.mtime + "\n\nYour requested log is quite large so I send you the whole file instead")
                             .setColor('BLUE')
                             .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                             message.channel.send({embeds:[ping]})
                             message.channel.send({files: ['./logs/Chatlogs/' + path + ".txt"]})
                            })
                        })
                    }
                }else
                if (!fs.existsSync('./logs/Chatlogs/' + path + ".txt")){
                    let ping = new Discord.MessageEmbed()
                    .setTitle("File doesn't exist")
                    .setDescription("Your requested file `" + path + "` doesn't exist in the database")
                    .setColor('RED')
                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                    message.channel.send({embeds:[ping]})
                }
              } catch(err) {
                console.error(err)
              }
        }else
        if(eveCmd.startsWith("random")){
            var split = eveCmd.split(" ")
            if(!split[1]){
                var files = fs.readdirSync('./logs/ChatLogs')
                var random = files[Math.floor(Math.random() * files.length)].replace(".txt", "")
                var random2 = files[Math.floor(Math.random() * files.length)].replace(".txt", "")
                var random3 = files[Math.floor(Math.random() * files.length)].replace(".txt", "")
                var random4 = files[Math.floor(Math.random() * files.length)].replace(".txt", "")
                var random5 = files[Math.floor(Math.random() * files.length)].replace(".txt", "")
            let ping = new Discord.MessageEmbed()
            .setTitle("Here's a random log saved in the database!")
            .setDescription(`Tip: You can find a specific random file by using \`bun eve random <something>\` but note that sometimes it will not work!\n\n File: \n**${random}**\n**${random2}**\n**${random3}**\n**${random4}**\n**${random5}**`)
            .setColor('BLUE')
            .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
            message.channel.send({embeds:[ping]})
            }else
            if(split[1]){
                var list = ""
                for(var i = 0; i < "20"; i++){ 
                const getFile = fs.readdirSync('./logs/ChatLogs')[Math.floor(Math.random() * fs.readdirSync('./logs/ChatLogs').length)].replace(".txt", "\n")
                var list = " " + list + getFile
                }
                var split2 = list.split("\n")
                var find = "0"
                var found = ""
                for(var i = 0; i < "20"; i++){ 
                if(split2[i].includes(split[1])){
                    var found = found + "**" + split2[i] + "**\n"
                }
                }
                if(found == ""){
                    var found2 = "NUL"
                    let ping = new Discord.MessageEmbed()
                    .setTitle("Sorry but we could't find any file called <" + split[1] + ">")
                    .setDescription("Tip: If you are very sure that the log exist in the database, please try again because we use random algorithms to check the files!")
                    .setColor("RED")
                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                    message.channel.send({embeds:[ping]})
                }else
                if(!found == ""){
                    var found2 = found
                    let ping = new Discord.MessageEmbed()
                    .setTitle("Here's a specific random log saved in the database!")
                    .setDescription("File: \n" + found2)
                    .setColor("BLUE")
                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                    message.channel.send({embeds:[ping]})
                }
            }
        }else
        if(eveCmd.startsWith("search")){
            if(eveCmd == "search"){
                let ping = new Discord.MessageEmbed()
                .setTitle("Unable to search")
                .setDescription("You need to tell me what to search: `name` to search file names or `content` to search files that includes specific strings")
                .setColor("RED")
                .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                message.channel.send({embeds:[ping]})
            }else
            if(eveCmd.startsWith("search ")){
                if(eveCmd.replace("search ", "").startsWith("file ") || eveCmd.replace("search ", "").startsWith("content ")){
                    if(eveCmd.replace("search ", "").startsWith("file ")){
                    var search = eveCmd.replace("search ", "").split(" ")
                    for (let step = 0; step < 200; step++) {
                        const getFile = fs.readdirSync('./logs/ChatLogs')[Math.floor(Math.random() * fs.readdirSync('./logs/ChatLogs').length)]
                        }
                    }else
                    if(eveCmd.replace("search ", "").startsWith("content ")){
                        fs.writeFile('./tempGetFileContent.txt', '', function(){console.log('done')})
                        var results = ""
                        var search = eveCmd.replace("search content ", "").split(" ")
                        for (let step = 0; step < 200; step++) {
                        const getFile = fs.readdirSync('./logs/ChatLogs')[Math.floor(Math.random() * fs.readdirSync('./logs/ChatLogs').length)]
                        fs.readFile(`./logs/ChatLogs/${getFile}`, function (err, data) {
                        if (err) throw err;
                        if((data + "").includes(eveCmd.replace("search content ", ""))){
                         var results =   getFile + "\n" + results
                         fs.appendFile('./tempGetFileContent.txt', getFile + "\n", err => {
                            if (err) {
                              console.error(err)
                              return
                            }
                            //done!
                          })
                        }
                        });
                        }
                        setTimeout(function(){
                            fs.readFile('./tempGetFileContent.txt', 'utf8' , (err, data) => {
                        if(data == ""){
                    let ping = new Discord.MessageEmbed()
                    .setTitle(`Didn't find any file that contains <${eveCmd.replace("search content ", "")}>`)
                    .setDescription(`Tip: If you are very sure that the string exist in any of the logs, feel free to try again, sometimes it would't work because we use advance random algorythms to check the logs!`)
                    .setColor("RED")
                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                    message.channel.send({embeds:[ping]})
                        }else
                        if(!data == ""){
                            fs.readFile('./tempGetFileContent.txt', 'utf8' , (err, data) => {
                                if(data.split("\n")[49]){
                                    let ping = new Discord.MessageEmbed()
                                    .setTitle("Search results")
                                    .setDescription(`We have found a lot of files that includes \`${eveCmd.replace("search content ", "")}\` that we can't even fit to the chat, so we send you a file that contains the results!`)
                                    .setColor("BLUE")
                                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                                    message.channel.send({embeds:[ping]})
                                    message.channel.send({files: ['./tempGetFileContent.txt']})
                                    setTimeout(function(){
                                    fs.writeFile('./tempGetFileContent.txt', '', function(){console.log('done')})
                                }, 1000);
                                }else
                                if(!data.split("\n")[49]){
                            let ping = new Discord.MessageEmbed()
                            .setTitle("Search results")
                            .setDescription(`Files that contains \`${eveCmd.replace("search content ", "")}\`:\n\`\`\`js\n${data}\n\`\`\``)
                            .setColor("BLUE")
                            .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                            message.channel.send({embeds:[ping]})
                            fs.writeFile('./tempGetFileContent.txt', '', function(){console.log('done')})
                                }
                            })
                        }
                    })
                    }, 1000);
                    }
                }else
                if(eveCmd.replace("search ", "") == ("file") || eveCmd.replace("search ", "") == ("content")){
                    let ping = new Discord.MessageEmbed()
                    .setTitle("Unable to search")
                    .setDescription(`You need to give me at least 1 letter to search!`)
                    .setColor("RED")
                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                    message.channel.send({embeds:[ping]})
                }else
                if(!eveCmd.replace("search ", "").startsWith("file") & !eveCmd.replace("search ", "").startsWith("content")){
            let ping = new Discord.MessageEmbed()
            .setTitle("Unable to search")
            .setDescription(`Your input: \`${eveCmd.split(" ")[1]}\` isn't a reconizable search type`)
            .setColor("RED")
            .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
            message.channel.send({embeds:[ping]})
                }
            }
        }else
        if(eveCmd.startsWith("date")){
            var option = eveCmd.replace("date ", "")
            if(option.startsWith("recent")){
                const path = './logs/Chatlogs/';
                fs.readdirSync(path).forEach(file => {
                var all = file
                const dir = './logs/Chatlogs/';
                fs.readdir(dir, (err, files) => {
                    var total = files.length - "1"
                for (let step = 0; step < total; step++) {
                    message.channel.send(`${step}`)
                    }
                })
            });
            }
        }else
        if((eveCmd == "database") || (eveCmd == "db") || (eveCmd == "batch")){
            message.channel.send("Transmiting to database system.....")
            fs.writeFile('./eveCmds/eveDatabase/on.xml', '', function(){console.log('truncated on.xml')})
            message.channel.send("Receiving respond......")
                if(fs.statSync("./eveCmds/eveDatabase/on.xml").size>"1"){
                    fs.readFile('./eveCmds/eveDatabase/onDate.xml', 'utf8', function(err, data){
            let ping = new Discord.MessageEmbed()
            .setTitle("Database system status")
            .setDescription("Status: **Online**\n\nLatest comminucation: **" + data + "**")
            .setColor("BLUE")
            .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
            message.channel.send({embeds:[ping]})
                    })
                }else
                if(fs.statSync("./eveCmds/eveDatabase/on.xml").size<"1"){
                    fs.readFile('./eveCmds/eveDatabase/offDate.xml', 'utf8', function(err, data){
                    let ping = new Discord.MessageEmbed()
                    .setTitle("Database system status")
                    .setDescription("Status: **Offline**\n\nOffline since: **" + data + "**")
                    .setColor("RED")
                    .setFooter(message.author.tag + " | " + `${Math.round(message.client.ws.ping)}ms`, `${message.author.avatarURL()}`)
                    message.channel.send({embeds:[ping]})
                    })
                }
        }
    }
}