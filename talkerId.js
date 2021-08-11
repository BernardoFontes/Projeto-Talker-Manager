const fs = require('fs');

module.exports = () => fs.promises.readFile('./talker.json', 'utf-8')
    .then((data) => JSON.parse(data));