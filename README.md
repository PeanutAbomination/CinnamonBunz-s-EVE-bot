# CinnamonBunz-s-EVE-bot
A discord bot that collects raw EVE data from YAML and JSON database

# Getting rid of constellation.staticdata, because it can cause error while collecting data in universe/wormholes/...
# Assuming you have sde/fsd/... you can use this code below to get rid of the file
# first script(renaming .staticdata to .yaml so that npm yaml.js can read):
```js
const path = "./sde/fsd/universe/wormhole"
fs.readdirSync(path).forEach(file => {
var tp = path + "/" + file
fs.readdirSync(tp).forEach(file => {
var p2 =  tp + '/' + file
if(!(file.endsWith(".staticdata"))){
fs.readdirSync(p2).forEach(file => {
if(file.endsWith(".yaml")){
fs.rename(p2 + "/" + file + "/solarsystem.staticdata",p2 + "/" + file + "/solarsystem.yaml", (error) => {
  if (error) {
    console.log(error);
  }else{
message.channel.send(`Viewing: **${p2 + "/" + file + "/solarsystem.staticdata"}** to **${p2 + "/" + file + "/solarsystem.yaml")
}
})
}
})
}
})
})
```
you should know when its done when the console stops
# seconds script(adding all wormhole system to a file to avoid not found err):
```js
const testFolder = './sde/fsd/universe/wormhole';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
const testFolder = './sde/fsd/universe/wormhole/' + file
var get = testFolder
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
const testFolder = get + "/" + file;
var path = testFolder
const fs = require('fs'); 
fs.readdirSync(testFolder).forEach(file => {
const testFolder = path + "/" + file;
fs.readdirSync(testFolder).forEach(file => {
const systemData = testFolder.split("/")[7]
var fs = require('fs');
fs.readFile('./solarSystem/wh.xml', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
var appendtf = data + "\n" + systemData
fs.appendFile('./solarSystems/wh.xml', appendtf, function (err) {
  if (err) throw err;
  console.log('Saved: ' + systemData);
});
})
});
});
});
});const testFolder = './sde/fsd/universe/wormhole';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
const testFolder = './sde/fsd/universe/wormhole/' + file
var get = testFolder
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
const testFolder = get + "/" + file;
var path = testFolder
const fs = require('fs'); 
fs.readdirSync(testFolder).forEach(file => {
const testFolder = path + "/" + file;
fs.readdirSync(testFolder).forEach(file => {
const systemData = testFolder.split("/")[7]
var fs = require('fs');
fs.readFile('./solarSystem/wh.xml', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
var appendtf = data + "\n" + systemData
fs.appendFile('./solarSystems/wh.xml', appendtf, function (err) {
  if (err) throw err;
  console.log('Saved: ' + systemData);
});
})
});
});
});
});
```
# adding WH class to solarsystem.yaml so that you can read directly:
```js
const path = "./sde/fsd/universe/wormhole"
fs.readdirSync(path).forEach(file => {
var tp = path + "/" + file
fs.readdirSync(tp).forEach(file => {
var p2 =  tp + '/' + file
if(!(file.endsWith(".staticdata")) && !(file.endsWith(".yaml"))){
fs.readdirSync(p2).forEach(file => {
if(!(file.endsWith(".staticdata"))){
fs.readFile(tp + "/region.yaml", 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
console.log("changing: " + p2 + "/" + file + "/solarsystem.yaml")
fs.appendFile(p2 + "/" + file + "/solarsystem.yaml","\n" + data.split("\n")[15], function (err) {
  if (err) throw err;
console.log(file + " change to: WH CLASS " + data.split("\n")[15].replace("wormholeClassID: ",""))
})
})
}
})
}
})
})
```
# some folders like SDE and node module arent included
