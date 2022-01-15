# CinnamonBunz-s-EVE-bot
A discord bot that collects raw EVE data from YAML and JSON database

# Getting rid of constellation.staticdata, because it can cause error while collecting data in universe/wormholes/...
# Assuming you have sde/fsd/... you can use this code below to get rid of the file

const testFolder = './sde/fsd/universe/wormhole';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
const testFolder = './sde/fsd/universe/wormhole/' + file
var get = testFolder
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
const testFolder = get + "/" + file;
var get2 = testFolder
const fs = require('fs'); 
fs.readdirSync(testFolder).forEach(file => {
// delete file named 'sample.txt'
var get = get2 + "/" + file
fs.unlink(get + "", function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
  console.log(file);
});

});
  console.log(file);
});

  console.log(file);
});

# after the script it should said this error in the console:
# <random wormhole region extend to 20 lines at least>
#undefined:17
#    if (err) throw err;
#             ^
#
#[Error: EPERM: operation not permitted, unlink 'C:\Users\1love\Documents\EVE\sde\fsd\universe\wormhole\A-R00001\A-C00311\J105443'] {
#  errno: -4048,
#  code: 'EPERM',
#  syscall: 'unlink',
#  path: 'C:\\Users\\1love\\Documents\\EVE\\sde\\fsd\\universe\\wormhole\\A-R00001\\A-C00311\\J105443'
# }
