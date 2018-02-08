// Kari Roulette.
const monster_info = require('../json/monster_info.json');

exports.command = 'kari';

exports.run = function (client, message, args) {
    const keys = Object.keys(monster_info);
    const index = Math.floor(Math.random() * keys.length);
    message.channel.sendMessage(monster_info[keys[index]].name + 'を　かろう。');
}

