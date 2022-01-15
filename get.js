const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const fs = require("fs")

module.exports = {
    name: 'get',
    description: "get item info",
    execute(message, args, cmdName, extraString, status, reason,user,id){
        if(cmdName == "get"){
            let errr = new Discord.MessageEmbed()
            .setTitle("There was an error while getting items")
            .setDescription("reason: `User input variable <find> == undefined or ''`")
            .setColor("RED")
            message.channel.send({embeds:[errr]})
        }else
        if(cmdName.startsWith("get ")){
            const input = cmdName.replace("get ","")
var EVEoj = require("EVEoj");
var _ = require("underscore")
var SDD = EVEoj.SDD.Create("json", {path: "./static"});
SDD.LoadMeta()
.then(function(arg) {
    return arg.source.GetTable("invTypes").Load();
})
.then(function(arg) {
    var tbl = arg.table;
    var row = _.find(tbl.data, tbl.ColPred("typeName", "===", `${input}`));
var find = `${row[tbl.colmap.typeID] + ""}`
})
.caught(function(err) {
    console.log(err)
    let errr = new Discord.MessageEmbed()
    .setTitle("There was an error while getting items")
    .setDescription("possible reason: `User input of item not included in database or database thread busy`\ntip: The script is case sensitive so use `Avatar` instead of `avatar`")
    .setColor("RED")
    message.channel.send({embeds:[errr]})
});

const fs = require('fs');
const yaml = require('js-yaml');

try {
    
    let fileContents = fs.readFileSync('./sde/fsd/typeIDs.yaml', 'utf8');
    let data = yaml.load(fileContents);
// description: data[find].description.en
var EVEoj = require("EVEoj");
var _ = require("underscore")
var SDD = EVEoj.SDD.Create("json", {path: "./static"});
SDD.LoadMeta()
.then(function(arg) {
    return arg.source.GetTable("invTypes").Load();
})
.then(function(arg) {
    var tbl = arg.table;
    var row = _.find(tbl.data, tbl.ColPred("typeName", "===", `${input}`));
var find = `${row[tbl.colmap.typeID] + ""}`
let found = new Discord.MessageEmbed()
.setTitle("Item information")
.setThumbnail(`https://imageserver.eveonline.com/Type/${find}_64.png`)
.addFields(
    {name: "Name:", value: `${data[find].name.en}`},
    {name: "Description:", value: `${data[find].description.en}`},
    {name: "Base price:", value: `${data[find].basePrice} isk`},
    {name: "volume", value: `${data[find].volume}`}
)
.setColor("GREEN")
message.channel.send({embeds:[found]})
})
.caught(function(err) {
    console.log(err)
    let errr = new Discord.MessageEmbed()
    .setTitle("There was an error while getting items")
    .setDescription("possible reason: `User input of item not included in database or database thread busy`\ntip: The script is case sensitive so use `Avatar` instead of `avatar`")
    .setColor("RED")
    message.channel.send({embeds:[errr]})
});

} catch (e) {
    console.log(e)
}
        }
    }
}
