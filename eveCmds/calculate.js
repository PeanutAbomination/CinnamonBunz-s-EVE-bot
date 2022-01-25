const Discord = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const langErr = require("./cmdDb/cmdErr.json")
const cmdContent = require("./cmdDb/cmdContent.json")
module.exports = {
    name: 'calculate',
    description: "calculate equations",
    execute(message, args, cmdName, extraString, status, reason,user,id, prefix,lang){
        const eveCmd = cmdName
        console.log("calculating")
        if(eveCmd == "calculate"){
            console.log("calculating err")
            eval("let err = new Discord.MessageEmbed()\n.setTitle(`${langErr.calculate.emptyErr." + lang + ".title}`)\n.setDescription(`${langErr.calculate.emptyErr." + lang + ".description}`)\n.setColor(\"RED\")\nmessage.channel.send({embeds:[err]})")
        }else
        if((eveCmd.startsWith("calculate "))){
         var filter = eveCmd.replace("calculate ", "")
         var filter1 = filter.replaceAll("/","")
         var filter2 = filter1.replaceAll("x","")
         var filter3 = filter2.replaceAll("p(","")
         var filter4 = filter3.replaceAll("+","")
         var filter5 = filter4.replaceAll("-","")
         var LastFilter = filter5.replaceAll("s(","")
         var LastFilter2 = LastFilter.replaceAll(")","")
         var LastFilter3 = LastFilter2.replaceAll(",","")
         var llFilter = LastFilter3.replaceAll("(","")
         var lllFIlter = llFilter.replaceAll(")","")
         var llllFilter = lllFIlter.replaceAll(" ","")
         console.log(llllFilter)
         if(isNaN(llllFilter)){
            eval("let err = new Discord.MessageEmbed()\n.setTitle(`${langErr.calculate.syntaxErr." + lang + ".title}`)\n.setDescription(`${langErr.calculate.syntaxErr." + lang + ".description}`)\n.setColor(\"RED\")\nmessage.channel.send({embeds:[err]})")
         }else
         if(!(isNaN(llllFilter))){
             var f1 = filter.replaceAll(" ","")
            var filter1 = f1.replaceAll("/","/")
            var filter2 = filter1.replaceAll("x","*")
            var filter3 = filter2.replaceAll("p(","Math.pow(")
            var filter4 = filter3.replaceAll("+","+")
            var filter5 = filter4.replaceAll("-","-")
            var llFilter = filter5.replaceAll("(","(")
            var lllFIlter = llFilter.replaceAll(")",")")
            var LastFilterr = lllFIlter.replaceAll("s(","Math.sqrt(")
            var LastFilter = LastFilterr.replaceAll(" ","")
            var Cfilter = "```\n" + filter + "\n```"
            console.log(LastFilter)
            var lang2 = lang
            try{
                var AFilter = eval(`${LastFilter}` + "")
                var CAnswer = ("```\n" + AFilter + "\n```")
                console.log(CAnswer)
                const calcDone = cmdContent.calculate.done
                if(lang2 == "en"){var [title,description] = [calcDone.en.title,calcDone.en.description]}else
                if(lang2 == "zh"){var [title,description] = [calcDone.zh.title,calcDone.zh.description]}else
                if(lang2 == "ru"){var [title,description] = [calcDone.ru.title,calcDone.ru.description]}
                let done = new Discord.MessageEmbed()
                .setTitle(`${title}`)
                .setDescription(`${description}\n\n**Input:**\n${Cfilter}\n\n**Answer:**\n${CAnswer}`)
                .setColor("GREEN")
                message.channel.send({embeds:[done]})
            }catch(err){
                console.log(err)
                var lang = "en"
                eval("let err = new Discord.MessageEmbed()\n.setTitle(`${langErr.calculate.calcErr." + lang + ".title}`)\n.setDescription(`${langErr.calculate.calcErr." + lang + ".description}`)\n.setColor(\"RED\")\nmessage.channel.send({embeds:[err]})")
            }
         }
        }
    }
}

